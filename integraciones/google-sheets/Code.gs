/**
 * Bellas Luces — receptor de prospectos para Google Sheets.
 * Pegar en Extensiones → Apps Script dentro de la hoja de cálculo de la empresa.
 * Publicar como aplicación web: ejecutar como tú, acceso "Cualquier persona".
 * IMPORTANTE: sólo un propietario autorizado debe abrir la hoja con datos privados.
 */
const SETTINGS = {
  SHEET_NAME: 'Prospectos Bellas Luces',
  // Opcional: si este script NO está vinculado a la hoja, pegar aquí el ID del Sheet.
  SPREADSHEET_ID: '',
};
const HEADERS = ['Fecha de registro','Nombre','Apellido','WhatsApp / teléfono','Correo','Modelo de interés','Plazo','Presupuesto','Mensaje','Idioma','Proyecto','Página de origen','Token'];

function doGet() {
  return HtmlService.createHtmlOutput('<p>Servicio de recepción de prospectos Bellas Luces. Utilice el formulario de la página web.</p>');
}

function doPost(e) {
  let token = '';
  try {
    const p = (e && e.parameter) || {};
    token = String(p.token || '').replace(/[^a-f0-9]/gi,'').slice(0,80);
    if (!token || !p.firstName || !p.lastName || !p.phone || !p.email || !p.model || p.website) {
      return response_(token, false);
    }
    const phone = String(p.phone).replace(/[^0-9+\-\s()]/g, '').trim();
    const email = String(p.email).trim();
    if (phone.replace(/\D/g,'').length < 8 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response_(token, false);
    }
    const lock = LockService.getScriptLock();
    lock.waitLock(15000);
    try {
      const ss = SETTINGS.SPREADSHEET_ID ? SpreadsheetApp.openById(SETTINGS.SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
      if (!ss) throw new Error('Falta conectar un Google Sheets');
      let sh = ss.getSheetByName(SETTINGS.SHEET_NAME);
      if (!sh) { sh = ss.insertSheet(SETTINGS.SHEET_NAME); sh.appendRow(HEADERS); sh.setFrozenRows(1); }
      // Evita duplicados por reintentos con el mismo identificador.
      const end = sh.getLastRow();
      if (end > 1) {
        const start = Math.max(2, end - 1000);
        const seen = sh.getRange(start, 13, end-start+1, 1).getDisplayValues().some(row => row[0]===token);
        if (seen) return response_(token, true);
      }
      const safe = (v,max) => {
        let s=String(v || '').trim().slice(0,max);
        // Impide que el contenido enviado se interprete como fórmula en Google Sheets.
        if (/^[=+\-@\t\r]/.test(s)) s="'"+s;
        return s;
      };
      const row = [new Date(),safe(p.firstName,70),safe(p.lastName,70),safe(phone,24),safe(email,120),safe(p.model,30),safe(p.timeline,30),safe(p.budget,30),safe(p.message,900),safe(p.language,5),safe(p.project,80),safe(p.source,400),safe(token,80)];
      sh.appendRow(row);
      sh.getRange(sh.getLastRow(),4).setNumberFormat('@');
      sh.getRange(1,1,1,HEADERS.length).setFontWeight('bold').setBackground('#132d49').setFontColor('#ffffff');
      return response_(token,true);
    } finally { lock.releaseLock(); }
  } catch(error) {
    console.error('Error guardando prospecto: '+error);
    return response_(token,false);
  }
}

function response_(token,ok) {
  // El sitio comprueba el token único antes de mostrar el acuse de recepción.
  const payload=JSON.stringify({type:'bellas-luces-lead',token:token,ok:!!ok});
  const html='<!doctype html><html><head><meta charset="utf-8"></head><body><script>try{window.parent.postMessage('+payload+',"*")}catch(e){}<\/script></body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
