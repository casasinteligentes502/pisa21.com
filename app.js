/* Bellas Luces — 21 Proyectos Inmobiliarios. Vanilla JS, no external dependencies. */
(() => {
  'use strict';
  const cfg = window.SITE_CONFIG || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const asset = (name) => `assets/images/${name}.webp`;
  const defaults = {};
  $$('[data-i18n], [data-i18n-html]').forEach(el => {
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    if (!(key in defaults)) defaults[key] = el.dataset.i18nHtml ? el.innerHTML : el.textContent;
  });
  const en = {
    skip:'Skip to content', navConcept:'The vision', navHomes:'Residences', navGallery:'Gallery', navLocation:'Location', navFaq:'FAQs', navCTA:'Request information',
    heroEyebrow:'BELLAS LUCES · SANTA CATARINA PINULA',heroTitle1:'Where the extraordinary',heroTitle2:'begins.',heroDesc:'A residential concept featuring contemporary architecture, thoughtfully designed spaces, and a fresh perspective on home in Bellas Luces.',heroExplore:'Explore the residences',heroConsult:'Talk to an advisor',heroMeta:'Concept design · First phase',discover:'DISCOVER',
    bar1:'Contemporary architecture',bar2:'Outdoor living spaces',bar3:'Bellas Luces, Guatemala',
    conceptEyebrow:'A PLACE TO ENVISION YOUR FUTURE',conceptTitle:'More than a space.<br><em>Your next story.</em>',conceptLead:'Bellas Luces is a proposed residential development that brings together contemporary volumes, natural light, and a connection to its surroundings.',conceptText:'The architectural presentation explores several residential layouts with social areas, family spaces, and outdoor features that differ from model to model.',conceptChip1:'Distinctive contemporary design',conceptChip2:'Detailed architectural floor plans',conceptChip3:'Selected designs with gardens and pergolas',conceptLink:'Explore the project from the inside',conceptSeal:'Designed for a new way of living',renderLabel:'CONCEPT RENDERING',
    statementEyebrow:'AN ARCHITECTURAL VISION',statementTitle:'Spaces you can feel.<br><em>Details that endure.</em>',
    resEyebrow:'EXPLORE THE CONCEPTS',resTitle:'One vision.<br><em>Different ways to live.</em>',resIntro:'Discover the architectural groupings featured in the first phase of the concept. Each offers its own layout and connection to outdoor spaces.',resType:'ARCHITECTURAL PROPOSAL',resABC:'Homes A / B / C',resABCdesc:'Generous living areas and a private garden integrated into the design.',resABCstat1:'Planned garden: 71.70 m²',resABCstat2:'Living / dining room: 63 m²',resD:'Home D',resDdesc:'A design that connects indoor living areas with a garden and pergola.',resDstat1:'Planned garden: 150 m²',resDstat2:'Planned pergola: 59 m²',resE:'Home E',resEdesc:'Social spaces connected to a pergola and lower-level garage.',resEstat1:'Planned pergola: 50 m²',resEstat2:'Garage area: 85 m²',resFG:'Homes F / G',resFGdesc:'A design with social areas, a pergola, and outdoor spaces as detailed in the plans.',resFGstat1:'Planned pergola: 60 m²',resFGstat2:'Planned garden: 30 m²',resDetails:'View details & plans',resDisclaimer:'The areas quoted refer to specific elements in the concept plans; they do not represent the total floor area of each home. All layouts and images are subject to review and confirmation.',
    galleryEyebrow:'ENVISION EVERY DETAIL',galleryTitle:'A glimpse of <em>the future.</em>',filterRenders:'Renderings',filterPlans:'Floor plans',galleryDisclaimer:'Images are taken from the architectural concept presentation. They are illustrative and may differ from the final construction.',
    dossierCover:'Imagine<br>your life here',dossierBadge:'ARCHITECTURAL DOSSIER',dossierEyebrow:'THE PROJECT AT YOUR FINGERTIPS',dossierTitle:'Discover the project,<br><em>at your own pace.</em>',dossierDesc:'Explore the original architectural presentation, including the master plan, individual floor plans, cross-sections, and exterior renderings.',dossierFile:'Architectural presentation',dossierFormat:'PDF · 35 pages · original file',downloadPDF:'Download presentation PDF',dossierCredit:'Concept material credited to S.oN Arquitectura in the original presentation.',
    locationEyebrow:'YOUR NEXT HOME AWAITS',locationTitle:'Bellas Luces.<br><em>Your next destination.</em>',locationLead:'The project is proposed for the Bellas Luces area of Santa Catarina Pinula, Guatemala, beyond El Pueblito.',address:'Santa Catarina Pinula, Guatemala · beyond El Pueblito',locationMap:'Open location in Google Maps',locationNote:'The shared map points to the Bellas Luces area. Confirm the exact development location and visit instructions with the sales team.',mapCaption:'SANTA CATARINA PINULA · GUATEMALA',mapDirections:'Get directions ↗',
    faqEyebrow:'ANSWERS TO YOUR QUESTIONS',faqTitle:'The start of<br><em>a great decision.</em>',faqIntro:'The available information comes from the architectural concept. Our team can help clarify commercial terms once these are confirmed.',faqLink:'Speak with an advisor',faq1Q:'Where is Bellas Luces located?',faq1A:'In the Bellas Luces area of Santa Catarina Pinula, Guatemala, beyond El Pueblito. See the linked map for the area reference.',faq2Q:'Which home models are included?',faq2A:'The concept includes homes identified as A, B, C, D, E, F, and G, organized into four architectural groups.',faq3Q:'Can I review the floor plans before a visit?',faq3A:'Yes. Browse selected plans on this website and download the full 35-page architectural presentation at no cost.',faq4Q:'What are the prices and availability?',faq4A:'The supplied presentation is a concept design and does not specify prices, delivery dates, or available inventory. Request information to receive confirmed commercial updates.',
    contactEyebrow:'BEGIN YOUR NEXT CHAPTER',contactTitle:'Your dream home<br><em>deserves a conversation.</em>',contactDesc:'Tell us a little about yourself and which layout interests you most. An advisor can use this information to guide you through the next steps.',contactFeature1:'Personalized initial attention',contactFeature2:'Details about the project and its proposals',contactFeature3:'No obligation to purchase',
    formEyebrow:'REQUEST INFORMATION',formTitle:'Let’s talk about your future home',formName:'First name *',formLastname:'Last name *',formPhone:'WhatsApp / phone *',formEmail:'Email address *',formModel:'Which proposal interests you? *',formSelect:'Select an option',modelABC:'Homes A / B / C',modelD:'Home D',modelE:'Home E',modelFG:'Homes F / G',modelGeneral:'Explore the entire project',formTimeline:'When would you like to move forward?',formOptional:'I would rather discuss it',timelineSoon:'Within 3 months',timelineMedium:'In 3 to 6 months',timelineLong:'In 6 to 12 months',timelineExplore:'I am exploring my options',formBudget:'Estimated budget (optional)',budget1:'Under Q1 million',budget2:'Q1 to Q2 million',budget3:'Q2 to Q3 million',budget4:'Over Q3 million',formMessage:'What would you like to know? (optional)',formConsent:'I authorize Proyectos Inmobiliarios, S.A. to use my data to reply to this inquiry. <a href="#privacidad" data-open-privacy>Read the privacy notice.</a> *',formSubmit:'Send my inquiry',formFootnote:'Your information will only be used to answer this inquiry. Actual submissions require connecting the form to Google Sheets.',
    footerIntro:'Visionary architecture. Purposeful spaces.',footerNavigate:'Explore',footerDossier:'Presentation PDF',footerContact:'Contact',footerNote:'Concept rendering. Commercial information subject to confirmation.',share:'Share this website',floating:'Request information',privacyTitle:'Privacy notice',privacyText1:'Proyectos Inmobiliarios, S.A. requests your name, phone, email, and property preferences to answer your Bellas Luces inquiry. This form does not process payments or reservations.',privacyText2:'Once enabled, data will be sent to the company’s configured Google Sheets destination. Access should be limited to authorized sales staff. The company must define retention policies, data access requests, and contact details before publishing.',privacyClose:'Understood',noticeClose:'Close'
  };
  const state = {lang:'es', theme:'dark', gallery:'renders', images:[], index:0, pendingToken:null};
  const savedLang = (()=>{try{return localStorage.getItem('bellasLang')}catch(e){return null}})();
  const savedTheme = (()=>{try{return localStorage.getItem('bellasTheme')}catch(e){return null}})();
  state.lang = savedLang === 'en' ? 'en' : 'es';
  state.theme = savedTheme === 'light' ? 'light' : 'dark';
  const t = key => (state.lang === 'en' ? en[key] : defaults[key]) || defaults[key] || key;
  const safe = s => String(s || '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const getLangLabel = (es, eng) => state.lang === 'en' ? eng : es;
  const galleries = {
    renders:[
      ['masterplan-vista-general','Vista general del conjunto','Overall development view'],
      ['residencias-abc-acceso','Acceso a residencias A / B / C','Approach to homes A / B / C'],
      ['residencias-abc-balcon','Balcones y arquitectura A / B / C','Balconies and architecture A / B / C'],
      ['residencia-d-principal','Residencia D · arquitectura exterior','Home D · exterior architecture'],
      ['residencia-d-atardecer','Residencia D · luz de atardecer','Home D · sunset light'],
      ['residencia-e-fachada','Residencia E · fachada','Home E · façade'],
      ['residencias-fg-fachada','Residencias F / G · fachada','Homes F / G · façade'],
      ['residencias-fg-conjunto','Residencias F / G · conjunto','Homes F / G · development view'],
      ['residencias-abc-fachada','Residencias A / B / C · exterior','Homes A / B / C · exterior']
    ],
    plans:[
      ['implantacion-general','Implantación general de viviendas','Site master plan'],
      ['plano-abc-nivel-inferior','Casas A / B / C · nivel inferior','Homes A / B / C · lower floor'],
      ['plano-abc-nivel-social','Casas A / B / C · nivel social','Homes A / B / C · social level'],
      ['plano-abc-nivel-superior','Casas A / B / C · nivel superior','Homes A / B / C · upper floor'],
      ['plano-d-nivel-inferior','Casa D · nivel inferior','Home D · lower floor'],
      ['plano-d-nivel-social','Casa D · nivel social','Home D · social level'],
      ['plano-d-nivel-superior','Casa D · nivel superior','Home D · upper floor'],
      ['plano-e-nivel-inferior','Casa E · nivel inferior','Home E · lower floor'],
      ['plano-e-nivel-social','Casa E · nivel social','Home E · social level'],
      ['plano-e-nivel-superior','Casa E · nivel superior','Home E · upper floor'],
      ['plano-fg-nivel-inferior','Casas F / G · nivel inferior','Homes F / G · lower floor'],
      ['plano-fg-nivel-social','Casas F / G · nivel social','Homes F / G · social level'],
      ['plano-fg-nivel-superior','Casas F / G · nivel superior','Homes F / G · upper floor']
    ]
  };
  const models = {
    abc:{title:'resABC',desc:'resABCdesc',img:'residencias-abc-acceso',facts:['resABCstat1','resABCstat2'],plans:['plano-abc-nivel-inferior','plano-abc-nivel-social','plano-abc-nivel-superior']},
    d:{title:'resD',desc:'resDdesc',img:'residencia-d-principal',facts:['resDstat1','resDstat2'],plans:['plano-d-nivel-inferior','plano-d-nivel-social','plano-d-nivel-superior']},
    e:{title:'resE',desc:'resEdesc',img:'residencia-e-fachada',facts:['resEstat1','resEstat2'],plans:['plano-e-nivel-inferior','plano-e-nivel-social','plano-e-nivel-superior']},
    fg:{title:'resFG',desc:'resFGdesc',img:'residencias-fg-fachada',facts:['resFGstat1','resFGstat2'],plans:['plano-fg-nivel-inferior','plano-fg-nivel-social','plano-fg-nivel-superior']}
  };

  function updateLanguage(lang){
    state.lang = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'es-GT';
    $$('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
    $$('[data-i18n-html]').forEach(el=>{el.innerHTML=t(el.dataset.i18nHtml)});
    $$('[data-placeholder-es]').forEach(el=>{el.placeholder=el.dataset[state.lang === 'es' ? 'placeholderEs' : 'placeholderEn'] || ''});
    $$('[data-alt-es]').forEach(el=>{el.alt=el.dataset[state.lang === 'es' ? 'altEs' : 'altEn'] || el.alt});
    $$('[data-lang]').forEach(b=>{const selected=b.dataset.lang===state.lang;b.classList.toggle('is-active',selected);b.setAttribute('aria-pressed',String(selected))});
    document.title = state.lang === 'en' ? 'Bellas Luces | 21 Real Estate Projects — Santa Catarina Pinula' : 'Bellas Luces | 21 Proyectos Inmobiliarios — Santa Catarina Pinula';
    $('meta[name="description"]').setAttribute('content',state.lang==='en' ? 'Explore Bellas Luces, a contemporary residential architectural concept in Santa Catarina Pinula, Guatemala. Browse floor plans, renderings and request information.' : 'Conoce Bellas Luces, una propuesta residencial de arquitectura contemporánea en Santa Catarina Pinula, Guatemala. Explora diseños, planos y renders y solicita información.');
    renderGallery();
    try{localStorage.setItem('bellasLang',state.lang)}catch(e){}
  }
  function updateTheme(theme){
    state.theme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = state.theme;
    $('#theme-toggle').setAttribute('aria-label',getLangLabel(state.theme==='light'?'Activar modo oscuro':'Activar modo claro',state.theme==='light'?'Switch to dark mode':'Switch to light mode'));
    $('meta[name="theme-color"]').setAttribute('content',state.theme==='light'?'#faf9f6':'#102943');
    try{localStorage.setItem('bellasTheme',state.theme)}catch(e){}
  }
  function renderGallery(){
    const grid=$('#gallery-grid');
    state.images=galleries[state.gallery];
    grid.innerHTML=state.images.map(([name,es,eng],i)=>`<button type="button" class="gallery-tile" data-image-index="${i}" aria-label="${safe(getLangLabel('Ampliar '+es,'Open '+eng))}"><img src="${asset(name)}" alt="${safe(getLangLabel(es,eng))}" loading="lazy"><span class="gallery-tile__shade"></span><span class="gallery-tile__caption">${safe(getLangLabel(es,eng))}</span><span class="gallery-tile__zoom" aria-hidden="true">↗</span></button>`).join('');
    $$('[data-gallery]').forEach(b=>{let active=b.dataset.gallery===state.gallery;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});
  }
  function openDialog(dialog){if(!dialog)return;try{dialog.showModal()}catch(e){dialog.setAttribute('open','')}document.body.classList.add('dialog-open')}
  function closeDialog(dialog){if(!dialog)return;try{dialog.close()}catch(e){dialog.removeAttribute('open')}document.body.classList.remove('dialog-open')}
  function showLightbox(index, items=state.images){
    state.images=items;state.index=(index+items.length)%items.length;
    const item=items[state.index];if(!item)return;
    $('#lightbox-image').src=asset(item[0]);$('#lightbox-image').alt=getLangLabel(item[1],item[2]);
    $('#lightbox-caption').textContent=getLangLabel(item[1],item[2]);openDialog($('#image-dialog'));
  }
  function changeLightbox(amount){if($('#image-dialog').open)showLightbox(state.index+amount,state.images)}
  function openModel(key){
    const m=models[key];if(!m)return;
    $('#model-dialog-body').innerHTML=`<div class="model-dialog__head"><img src="${asset(m.img)}" alt="${safe(t(m.title))}"><div class="model-dialog__copy"><span class="model-dialog__eyebrow">${safe(t('resType'))}</span><h2 id="model-dialog-title">${safe(t(m.title))}</h2><p>${safe(t(m.desc))}</p><div class="model-dialog__facts">${m.facts.map(x=>`<span>${safe(t(x))}</span>`).join('')}</div></div></div><div class="model-dialog__plans"><h3>${getLangLabel('Planos arquitectónicos','Architectural floor plans')}</h3><div class="model-dialog__plan-grid">${m.plans.map((n,i)=>`<button class="model-plan" type="button" data-plan-image="${i}" data-model-key="${key}"><img src="${asset(n)}" loading="lazy" alt="${safe(getLangLabel(['Nivel inferior','Nivel social','Nivel superior'][i],['Lower floor','Social level','Upper floor'][i]))}"><span>${getLangLabel(['Nivel inferior','Nivel social','Nivel superior'][i],['Lower floor','Social level','Upper floor'][i])} ↗</span></button>`).join('')}</div><div class="model-dialog__bottom"><p>${safe(t('resDisclaimer'))}</p><button type="button" class="btn btn--gold" data-inquire-model="${key}">${getLangLabel('Solicitar información','Request information')} ↗</button></div></div>`;
    openDialog($('#model-dialog'));
  }
  function info(title, description){$('#notice-title').textContent=title;$('#notice-text').textContent=description;openDialog($('#notice-dialog'))}
  function initContact(){
    const digits=String(cfg.whatsappNumber || '').replace(/\D/g,'');
    if(digits.length>=10 && digits.length<=15){
      const url='https://wa.me/'+digits+'?text='+encodeURIComponent(getLangLabel('Hola, me interesa recibir información sobre el proyecto Bellas Luces.','Hello, I would like information about the Bellas Luces project.'));
      const a=document.createElement('a');a.className='whatsapp-float';a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label','WhatsApp · Bellas Luces');a.title='WhatsApp';a.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16 .8C7.7.8.9 7.5.9 15.8c0 2.8.7 5.4 2.2 7.7L1 31l7.8-2c2.2 1.3 4.7 2 7.2 2 8.3 0 15.1-6.8 15.1-15.1S24.3.8 16 .8Zm0 27.4c-2.2 0-4.3-.6-6.2-1.7l-.5-.3-4.6 1.2L6 23l-.3-.5a12.2 12.2 0 1 1 10.3 5.7Zm6.7-9.1c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.3.4-.9 1.2-1.1 1.4-.2.2-.5.3-.9.1s-1.6-.6-3-1.9c-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.3 1.9 1.3 3.7 1.5 3.9c.2.2 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.8.9.3 1.7.3 2.4.2.7-.1 2.2-.9 2.5-1.8s.3-1.7.2-1.8c-.2-.2-.4-.3-.8-.5Z"/></svg>';
      document.body.appendChild(a);
    }
    const wrap=$('#footer-socials');
    const entries=[['facebookUrl','Facebook'],['instagramUrl','Instagram'],['tiktokUrl','TikTok']];
    entries.forEach(([key,label])=>{if(/^https:\/\//i.test(cfg[key]||'')){const a=document.createElement('a');a.href=cfg[key];a.textContent=label+' ↗';a.target='_blank';a.rel='noopener noreferrer';wrap.appendChild(a)}});
    if(cfg.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email)){const a=document.createElement('a');a.href='mailto:'+cfg.email;a.textContent=cfg.email;wrap.appendChild(a)}
    if(cfg.phoneDisplay && digits){const a=document.createElement('a');a.href='tel:+'+digits;a.textContent=cfg.phoneDisplay;wrap.appendChild(a)}
    if(/^https:\/\//i.test(cfg.publicUrl||'')){
      const node=$('#structured-data');
      try{const json=JSON.parse(node.textContent);json['@graph'][0].url=cfg.publicUrl;json['@graph'][1].url=cfg.publicUrl+'/#ubicacion';node.textContent=JSON.stringify(json)}catch(e){}
    }
  }
  function validateLead(form){
    const required=['firstName','lastName','phone','email','model'];
    let invalid=null;
    required.forEach(id=>{const f=form.elements.namedItem(id);if(!f||!(f.value||'').trim())invalid ||= f});
    const phone=(form.elements.phone.value||'').replace(/\D/g,'');if(!invalid && (phone.length<8||phone.length>15))invalid=form.elements.phone;
    const email=form.elements.email;if(!invalid&&!email.validity.valid)invalid=email;
    if(!invalid&&!$('#consent').checked)invalid=$('#consent');
    if(invalid){invalid.focus();$('#form-status').textContent=getLangLabel('Revisa los campos obligatorios y acepta el aviso de privacidad.','Please complete required fields and accept the privacy notice.');return false}
    return true;
  }
  function initForm(){
    const form=$('#lead-form');
    form.addEventListener('submit', e=>{
      e.preventDefault();
      if(form.elements.website.value.trim())return;
      if(!validateLead(form))return;
      const endpoint=String(cfg.appsScriptUrl||'').trim();
      if(!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec(?:\?.*)?$/i.test(endpoint)){
        info(getLangLabel('Formulario de demostración','Demo inquiry form'),getLangLabel('La página está lista, pero aún no se ha conectado la base de prospectos. No se ha enviado ni guardado tu información. El administrador debe configurar Google Sheets antes de publicar.','The website is ready, but the lead database has not been connected. Your information has not been sent or saved. The administrator must configure Google Sheets before publishing.'));
        return;
      }
      const token=Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>b.toString(16).padStart(2,'0')).join('');
      state.pendingToken=token;
      let hidden=form.querySelectorAll('input[data-temporary]');hidden.forEach(x=>x.remove());
      const fields={token,language:state.lang,project:'Bellas Luces',source:location.href,submittedAt:new Date().toISOString()};
      Object.entries(fields).forEach(([key,val])=>{const el=document.createElement('input');el.type='hidden';el.name=key;el.value=val;el.dataset.temporary='true';form.append(el)});
      form.action=endpoint;form.target='lead-receiver';form.method='POST';
      const button=$('#form-submit');button.disabled=true;
      $('#form-status').textContent=getLangLabel('Enviando solicitud…','Sending inquiry…');
      // HTML form POST to GAS avoids the CORS restrictions on browser fetch.
      HTMLFormElement.prototype.submit.call(form);
      setTimeout(()=>{if(state.pendingToken===token){state.pendingToken=null;button.disabled=false;$('#form-status').textContent=getLangLabel('No pudimos confirmar el registro. Comunícate con el equipo antes de volver a enviar.','We could not confirm receipt. Please contact the team before submitting again.')}},18000);
    });
    window.addEventListener('message',evt=>{
      const msg=evt.data;
      if(!msg||msg.type!=='bellas-luces-lead'||!state.pendingToken||msg.token!==state.pendingToken)return;
      // Token is unique to this submission and must be echoed by the configured GAS endpoint.
      state.pendingToken=null;$('#form-submit').disabled=false;
      if(msg.ok){form.reset();$('#form-status').textContent=getLangLabel('¡Solicitud recibida! El equipo podrá revisar tus datos.','Inquiry received! The team can now review your details.');info(getLangLabel('Gracias por tu interés','Thank you for your interest'),getLangLabel('Tu solicitud se registró correctamente. El equipo comercial podrá revisar tus datos y darle seguimiento.','Your inquiry was successfully recorded. The sales team can review your details and follow up.'))}
      else $('#form-status').textContent=getLangLabel('No se pudo registrar la solicitud. Inténtalo más tarde.','We could not save your inquiry. Please try again later.');
    });
  }
  function initUI(){
    $('#year').textContent=String(new Date().getFullYear());
    $$('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{updateLanguage(btn.dataset.lang);updateTheme(state.theme)}));
    $('#theme-toggle').addEventListener('click',()=>updateTheme(state.theme==='light'?'dark':'light'));
    const header=$('#site-header'), mobile=$('#mobile-toggle');
    const closeMenu=()=>{header.classList.remove('menu-open');mobile.setAttribute('aria-expanded','false')};
    mobile.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');mobile.setAttribute('aria-expanded',String(open))});
    $$('#site-nav a').forEach(a=>a.addEventListener('click',closeMenu));
    const updateScroll=()=>{header.classList.toggle('is-scrolled',window.scrollY>35);$('#scroll-progress').style.width=(100*window.scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))+'%'};
    window.addEventListener('scroll',updateScroll,{passive:true});updateScroll();
    $$('[data-gallery]').forEach(btn=>btn.addEventListener('click',()=>{state.gallery=btn.dataset.gallery;renderGallery()}));
    document.addEventListener('click',e=>{
      const target=e.target.closest('[data-image-index], [data-open-model], [data-plan-image], [data-inquire-model], [data-open-privacy], [data-close-dialog]');
      if(!target)return;
      if(target.matches('[data-image-index]'))showLightbox(Number(target.dataset.imageIndex));
      else if(target.matches('[data-open-model]'))openModel(target.dataset.openModel);
      else if(target.matches('[data-plan-image]')){const m=models[target.dataset.modelKey];const data=m.plans.map((n,i)=>[n,`${t(m.title)} · ${['Nivel inferior','Nivel social','Nivel superior'][i]}`,`${t(m.title)} · ${['Lower floor','Social floor','Upper floor'][i]}`]);closeDialog($('#model-dialog'));showLightbox(Number(target.dataset.planImage),data)}
      else if(target.matches('[data-inquire-model]')){const input=$('#model');input.value=target.dataset.inquireModel;closeDialog($('#model-dialog'));location.hash='contacto';setTimeout(()=>$('#firstName').focus({preventScroll:true}),350)}
      else if(target.matches('[data-open-privacy]')){e.preventDefault();openDialog($('#privacy-dialog'))}
      else if(target.matches('[data-close-dialog]'))closeDialog(target.closest('dialog'));
    });
    $$('dialog').forEach(d=>{
      d.addEventListener('click',evt=>{if(evt.target===d)closeDialog(d)});
      d.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
    });
    $('#lightbox-prev').addEventListener('click',()=>changeLightbox(-1));$('#lightbox-next').addEventListener('click',()=>changeLightbox(1));
    document.addEventListener('keydown',e=>{if($('#image-dialog').open && e.key==='ArrowLeft')changeLightbox(-1);if($('#image-dialog').open && e.key==='ArrowRight')changeLightbox(1)});
    $('#share-button').addEventListener('click',async()=>{
      const data={title:document.title,text:getLangLabel('Conoce Bellas Luces en Santa Catarina Pinula','Explore Bellas Luces in Santa Catarina Pinula'),url:location.href.split('#')[0]};
      try{if(navigator.share)await navigator.share(data);else if(navigator.clipboard){await navigator.clipboard.writeText(data.url);info(getLangLabel('Enlace copiado','Link copied'),getLangLabel('La dirección de la página se copió al portapapeles.','The website link was copied to the clipboard.'))}else info(getLangLabel('Compartir esta página','Share this website'),data.url)}catch(e){/* share cancelled */}
    });
    if('IntersectionObserver' in window){const obs=new IntersectionObserver((entries,observer)=>{for(const ent of entries){if(ent.isIntersecting){ent.target.classList.add('is-visible');observer.unobserve(ent.target)}}},{threshold:.06,rootMargin:'0px 0px 50px 0px'});$$('.reveal').forEach(el=>obs.observe(el));}
    else $$('.reveal').forEach(el=>el.classList.add('is-visible'));
  }
  initUI();initContact();initForm();updateLanguage(state.lang);updateTheme(state.theme);
})();
