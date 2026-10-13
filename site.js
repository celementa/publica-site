(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=window.PUB||{};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const LOGO='<svg class="logo__img" aria-hidden="true" viewBox="0 0 1200 273"><path fill="currentColor" fill-rule="evenodd" d="M90.1 271.2C89.0 270.3 68.2 242.1 44.0 208.6C11.4 163.4 0.0 146.9 0.0 144.9C0.0 143.4 1.1 140.8 2.4 139.3L4.8 136.5L47.4 136.0L89.9 135.5L46.8 76.0C23.1 43.3 2.9 15.1 1.9 13.5C-0.7 9.3 -0.5 5.8 2.7 2.6L5.3 -0.0L118.9 0.2L232.5 0.5L240.5 3.2C251.2 6.8 259.8 12.2 267.9 20.2C294.4 46.6 294.5 89.8 268.1 116.0C259.5 124.4 252.6 128.9 241.8 132.8L234.5 135.5L162.8 135.8C123.3 135.9 91.0 136.3 91.0 136.5C91.0 136.7 111.3 164.9 136.0 199.2C184.9 266.8 183.9 265.2 178.5 270.5L176.1 273.0L134.2 273.0C95.7 273.0 92.0 272.9 90.1 271.2ZM352.0 173.5L352.0 74.0L364.9 74.0L377.7 74.0L378.4 79.2C378.8 82.1 379.6 86.7 380.2 89.3L381.2 94.1L388.3 84.1L395.5 74.1L413.0 74.0C425.2 74.0 432.5 74.5 436.9 75.5C456.2 80.1 471.0 95.5 476.7 117.0C479.1 125.9 479.0 146.9 476.7 156.5C469.6 184.8 447.3 202.3 420.2 200.7C406.4 199.9 394.1 192.6 383.8 179.0L381.1 175.5L381.0 224.2L381.0 273.0L366.5 273.0L352.0 273.0L352.0 173.5ZM542.0 199.5C525.2 196.0 514.2 188.7 507.8 176.8C505.5 172.5 505.5 172.4 505.2 123.2L504.9 74.0L519.5 74.0L534.0 74.0L534.0 116.6C534.0 145.7 534.4 160.5 535.1 163.1C537.7 171.7 545.7 177.5 556.6 178.6C571.9 180.2 587.7 170.2 595.8 153.8C601.4 142.4 602.0 137.8 602.0 104.2L602.0 74.0L617.0 74.0L632.0 74.0L632.0 136.5L632.0 199.0L618.1 199.0L604.2 199.0L603.4 184.8L602.5 170.6L598.9 176.1C585.3 196.7 566.3 204.5 542.0 199.5ZM728.9 199.6C718.0 196.6 705.4 186.6 699.4 176.4L696.5 171.5L695.9 178.0C695.5 181.6 695.2 187.8 695.1 191.8L695.0 199.0L682.0 199.0L669.0 199.0L669.0 99.5L669.0 0.0L683.5 0.0L698.0 0.0L698.2 47.2L698.5 94.5L706.0 84.3L713.5 74.0L731.0 74.0C743.6 74.0 750.3 74.4 754.4 75.5C781.3 82.5 797.3 107.7 795.7 140.4C795.0 153.7 793.3 160.8 788.0 171.6C783.3 181.2 773.5 191.2 764.7 195.4C753.5 200.7 739.0 202.3 728.9 199.6ZM1002.8 200.0C986.6 197.1 975.3 191.4 965.0 181.1C952.6 168.6 947.7 155.9 947.6 136.5C947.6 117.2 952.6 104.4 965.1 91.8C973.4 83.3 983.3 77.7 996.0 74.3C1005.1 71.8 1029.0 71.8 1042.2 74.3L1052.0 76.2L1052.0 91.2C1052.0 99.4 1051.7 106.0 1051.2 105.8C1035.9 98.0 1021.2 95.3 1009.2 98.0C997.6 100.7 987.0 109.1 981.8 119.8C978.7 126.1 978.5 127.2 978.5 137.1C978.5 147.3 978.6 147.9 982.3 155.3C989.6 170.1 1003.5 177.1 1022.5 175.6C1033.6 174.7 1040.5 172.7 1051.2 167.2C1051.7 167.0 1052.0 173.5 1052.0 181.7L1052.0 196.6L1043.2 198.4C1033.3 200.4 1009.8 201.3 1002.8 200.0ZM1119.0 200.4C1098.1 196.4 1082.8 182.3 1076.0 160.5C1072.8 150.5 1072.1 130.2 1074.5 119.4C1077.2 107.0 1082.1 97.7 1090.4 89.4C1103.0 76.9 1111.9 74.0 1138.2 74.0L1155.9 74.0L1163.2 84.2L1170.4 94.3L1171.7 87.4C1172.4 83.6 1173.2 79.0 1173.5 77.2L1174.1 74.0L1187.0 74.0L1200.0 74.0L1200.0 136.5L1200.0 199.0L1187.1 199.0L1174.3 199.0L1173.7 190.8C1173.3 186.2 1173.0 180.1 1173.0 177.1L1173.0 171.8L1167.7 179.1C1161.6 187.6 1152.8 194.8 1144.3 198.0C1138.6 200.3 1125.0 201.5 1119.0 200.4ZM824.0 99.5L824.0 0.0L838.5 0.0L853.0 0.0L853.0 99.5L853.0 199.0L838.5 199.0L824.0 199.0L824.0 99.5ZM890.0 136.5L890.0 74.0L905.0 74.0L920.0 74.0L920.0 136.5L920.0 199.0L905.0 199.0L890.0 199.0L890.0 136.5ZM428.2 176.2C440.3 170.9 448.0 155.8 448.0 137.3C448.0 122.0 443.8 110.5 435.5 103.2C428.1 96.7 424.7 96.0 401.3 96.0L381.0 96.0L381.0 116.2C381.0 138.2 381.7 144.4 385.0 153.2C389.3 164.8 398.4 174.4 408.0 177.5C413.7 179.4 422.3 178.8 428.2 176.2ZM747.2 175.3C753.4 172.0 759.0 165.1 762.2 157.3C764.2 152.2 764.4 149.8 764.4 137.0C764.4 119.8 762.8 114.4 755.3 106.0C747.1 96.9 745.9 96.5 720.1 96.2L697.8 95.9L698.2 119.7C698.6 142.3 698.8 143.9 701.3 150.9C709.6 174.3 729.6 184.9 747.2 175.3ZM1146.0 176.6C1155.9 172.5 1164.2 162.4 1168.0 150.2C1169.8 144.6 1170.0 140.9 1170.0 119.8L1170.0 95.9L1148.2 96.2L1126.5 96.5L1121.2 99.4C1111.9 104.6 1105.9 114.7 1103.9 128.4C1100.8 150.8 1110.3 172.0 1125.7 177.3C1131.3 179.3 1140.5 178.9 1146.0 176.6ZM890.0 22.0L890.0 8.9L904.8 9.2L919.5 9.5L919.8 22.2L920.1 35.0L905.0 35.0L890.0 35.0L890.0 22.0Z"/></svg>';
const ARROW_L='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
const ARROW_R='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
window.ARROWS={L:ARROW_L,R:ARROW_R};
const home=document.body.dataset.page==='home';
const H=home?'':'/';

/* ---------- header ---------- */
const nav=[['Отрасли',H+'#industries'],['Возможности',H+'#capabilities'],['Проекты','/cases'],['Перспективы',H+'#opportunity'],['Команда','/team'],['Аналитика','/insights']];
const hdr=$('#site-header');
if(hdr){
  const cur=document.body.dataset.nav||'';
  hdr.outerHTML=`<header class="hdr" id="hdr"><div class="wrap hdr__in">
  <a class="logo" href="${home?'#top':'/'}" aria-label="publica — на главную">${LOGO}</a>
  <nav class="nav" aria-label="Основное меню">${nav.map(([t,h])=>`<a href="${h}" class="${cur===t?'on':''}">${t}</a>`).join('')}</nav>
  <div class="hdr__cta"><a class="btn" href="/contact"><span class="btn__dot"></span>Связаться</a><button class="burger" id="burger" aria-label="Открыть меню" aria-expanded="false"><i></i></button></div>
  </div></header>
  <div class="mnav" id="mnav">${nav.map(([t,h],i)=>`<a class="big" style="transition-delay:${.08+i*.05}s" href="${h}">${t}</a>`).join('')}<a class="btn btn--light" href="/contact"><span class="btn__dot"></span>Связаться</a></div>`;
}
const header=$('#hdr');
const onScroll=()=>{ if(header) header.classList.toggle('solid', document.body.dataset.solid==='1' || scrollY>40 || document.documentElement.classList.contains('menu-open')); };
addEventListener('scroll',onScroll,{passive:true}); onScroll();
const burger=$('#burger');
if(burger){burger.addEventListener('click',()=>{const o=document.documentElement.classList.toggle('menu-open');burger.setAttribute('aria-expanded',o);onScroll();});
  $$('#mnav a').forEach(a=>a.addEventListener('click',()=>{document.documentElement.classList.remove('menu-open');onScroll();}));}

/* ---------- CTA + footer ---------- */
const cta=$('#site-cta');
if(cta) cta.outerHTML=`<section class="sec ice"><div class="wrap cta">
  <div class="cta__img rv" id="ctaImg"><img src="assets/gov-new-portrait.jpg" alt="Новое административное здание на фоне гор" loading="lazy"></div>
  <div class="cta__txt rv rv-d1"><span class="eyebrow">Связаться с нами</span><h2 class="h-l">Обсудим ваш проект</h2>
  <p class="lead">Расскажите о задаче, и мы предложим решение. Начинаем с бесплатного экспресс-аудита одного направления, первый измеримый результат — примерно через 3 месяца.</p>
  <a class="btn" href="/contact"><span class="btn__dot"></span>Обсудить проект</a></div></div></section>`;
const ftr=$('#site-footer');
if(ftr) ftr.outerHTML=`<footer class="ftr"><div class="wrap">
  <div class="ftr__top">
   <div><a class="logo" href="/">${LOGO}</a><p>От цели до результата. Превращаем данные и процессы в работающие системы для бизнеса и государства.</p></div>
   <div><h6>Разделы</h6><ul><li><a href="/">Главная</a></li><li><a href="/industry#gov">Отрасли</a></li><li><a href="/#capabilities">Возможности</a></li><li><a href="/cases">Проекты</a></li><li><a href="/contact">Контакты</a></li></ul></div>
   <div><h6>Компания</h6><ul><li><a href="/team">Команда</a></li><li><a href="/#opportunity">Перспективы</a></li><li><a href="/insights">Аналитика</a></li><li><a href="/#launch">Как начать</a></li></ul></div>
   <div><h6>Правовая информация</h6><ul><li><a href="#">Политика конфиденциальности</a></li><li><a href="#">Условия использования</a></li></ul></div>
  </div>
  <div class="ftr__bot"><span>© PUBLICA 2026. Все права защищены. Бишкек · Париж</span>
   <div class="ftr__soc"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-4V9Z"/></svg></a>
   <a href="https://t.me/" aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.87 1.33-1.76.83l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.96 9.03-8.16c.39-.35-.09-.54-.6-.2L6.36 13.1 1.56 11.6c-1.04-.33-1.06-1.04.22-1.54L20.5 2.85c.87-.32 1.63.2 1.4 1.45Z"/></svg></a>
   <a href="https://x.com/" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 3h3.3l-7.2 8.2L22.4 21h-6.6l-5.2-6.8L4.7 21H1.4l7.7-8.8L1 3h6.8l4.7 6.2L17.8 3Zm-1.2 16.1h1.8L6.9 4.8H5l11.6 14.3Z"/></svg></a></div></div>
  <div class="ftr__word" aria-hidden="true">publica</div>
</div></footer>`;

/* ---------- rolling button text ---------- */
function rolls(){$$('.btn,.lnk').forEach(b=>{
  if(b.querySelector('.roll')) return;
  const tn=[...b.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());
  if(!tn) return; const t=tn.textContent.trim();
  const r=document.createElement('span'); r.className='roll';
  r.innerHTML=`<span>${t}</span><span aria-hidden="true">${t}</span>`; b.replaceChild(r,tn);
});}

/* ---------- reveal on scroll (content visible at rest; only below-fold items animate) ---------- */
function setupReveal(root=document){
  const els=$$('.rv',root).filter(e=>!e.dataset.rvd);
  if(RM||!('IntersectionObserver' in window)) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');e.target.classList.add('in');io.unobserve(e.target);}}),{rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>{e.dataset.rvd=1; const r=e.getBoundingClientRect(); if(r.top>innerHeight*0.95){e.classList.add('pre');io.observe(e);} else e.classList.add('in');});
}
window.setupReveal=setupReveal;

/* ---------- counters ---------- */
function setupCounters(){
  if(RM||!('IntersectionObserver' in window)) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
    const el=e.target,fin=el.dataset.final,num=parseFloat(fin.replace(/\s/g,'').replace(',','.'));const suf=fin.replace(/^[\d\s.,]+/,'');
    const t0=performance.now(),D=1600;const step=t=>{const k=Math.min(1,(t-t0)/D),v=Math.round(num*(1-Math.pow(1-k,3)));el.textContent=v.toLocaleString('ru-RU').replace(/,/g,' ')+suf;if(k<1)requestAnimationFrame(step);else el.textContent=fin;};requestAnimationFrame(step);}),{threshold:.5});
  $$('[data-count]').forEach(el=>{el.dataset.final=el.textContent;if(el.getBoundingClientRect().top>innerHeight)io.observe(el);});
}

/* ---------- drag-scroll tracks + arrows ---------- */
function setupTracks(){
  $$('.track').forEach(tr=>{
    let down=false,sx=0,sl=0,moved=false;
    tr.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=tr.scrollLeft;});
    addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;tr.classList.add('drag');}tr.scrollLeft=sl-dx;});
    addEventListener('pointerup',()=>{if(!down)return;down=false;setTimeout(()=>tr.classList.remove('drag'),0);});
    tr.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false;}},true);
  });
  $$('[data-track]').forEach(b=>b.addEventListener('click',()=>{const tr=document.getElementById(b.dataset.track);const c=tr.firstElementChild;const w=c.getBoundingClientRect().width+24;tr.scrollBy({left:(b.dataset.dir==='prev'?-1:1)*w,behavior:'smooth'});}));
}

/* ---------- capability tabs ---------- */
function setupTabs(){
  const cap=$('#cap'); if(!cap) return;
  const btns=$$('.cap__tabs button',cap),panes=$$('.cap__pane',cap),ind=$('.cap__ind',cap);
  const go=i=>{panes.forEach(p=>p.classList.remove('drawn'));void cap.offsetWidth;panes[i].classList.add('drawn');btns.forEach((b,j)=>{b.classList.toggle('on',i===j);b.setAttribute('aria-selected',i===j)});panes.forEach((p,j)=>p.classList.toggle('on',i===j));ind.style.transform=`translateX(${i*100}%)`;};
  btns.forEach((b,i)=>b.addEventListener('click',()=>go(i)));
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){$('.cap__pane.on',cap).classList.add('drawn');io.disconnect();}},{threshold:.3});io.observe(cap);}
  if(!RM) setInterval(()=>{const p=$('.cap__pane.on',cap);if(!p)return;const im=$$('.cap__media img',p);if(im.length<2)return;const k=im.findIndex(x=>x.classList.contains('on'));im[k].classList.remove('on');im[(k+1)%im.length].classList.add('on');},3800);
}

/* ---------- wireframe sphere ---------- */
function sphere(){
  const cv=$('#sphere'); if(!cv) return;
  const ctx=cv.getContext('2d'); const N=46; const pts=[];
  const ga=Math.PI*(3-Math.sqrt(5));
  for(let i=0;i<N;i++){const y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),t=ga*i;const j=1+(Math.sin(i*12.9898)*43758.5453%1)*0.06;pts.push([Math.cos(t)*r*j,y*j,Math.sin(t)*r*j]);}
  const edges=new Set();
  pts.forEach((p,i)=>{const d=pts.map((q,j)=>[j,(p[0]-q[0])**2+(p[1]-q[1])**2+(p[2]-q[2])**2]).sort((a,b)=>a[1]-b[1]);for(let k=1;k<=4;k++){const j=d[k][0];edges.add(i<j?i+'-'+j:j+'-'+i);}});
  const E=[...edges].map(s=>s.split('-').map(Number));
  let ax=0.35,ay=0,mx=0,my=0;
  cv.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=((e.clientX-r.left)/r.width-.5);my=((e.clientY-r.top)/r.height-.5);});
  cv.addEventListener('pointerleave',()=>{mx=my=0;});
  function fit(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=r.width*d;cv.height=r.height*d;}
  fit(); addEventListener('resize',fit);
  function frame(){
    const W=cv.width,Hh=cv.height,R=Math.min(W,Hh)*0.44,cx=W/2,cy=Hh/2;
    ctx.clearRect(0,0,W,Hh);
    ay+=RM?0:0.0022; const tx=ax+my*0.6, ty=ay+mx*0.8;
    const cX=Math.cos(tx),sX=Math.sin(tx),cY=Math.cos(ty),sY=Math.sin(ty);
    const P2=pts.map(([x,y,z])=>{let x1=x*cY+z*sY,z1=-x*sY+z*cY;let y1=y*cX-z1*sX,z2=y*sX+z1*cX;return [cx+x1*R,cy+y1*R,z2];});
    ctx.lineWidth=Math.max(1,W/700);
    E.forEach(([a,b])=>{const z=(P2[a][2]+P2[b][2])/2;ctx.strokeStyle=`rgba(170,190,235,${0.18+0.42*(z+1)/2})`;ctx.beginPath();ctx.moveTo(P2[a][0],P2[a][1]);ctx.lineTo(P2[b][0],P2[b][1]);ctx.stroke();});
    P2.forEach(([x,y,z],i)=>{const s=(i%5===0?3.2:1.8)*(W/560)*(0.7+0.5*(z+1)/2);ctx.fillStyle=`rgba(150,180,230,${0.4+0.6*(z+1)/2})`;ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill();});
    requestAnimationFrame(frame);
  }
  frame();
}

/* ---------- scrub text (words light up on scroll) ---------- */
function scrub(){
  $$('.scrub').forEach(el=>{
    el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="sw">${w}</span>`).join(' ');
    const ws=$$('.sw',el);
    const upd=()=>{const r=el.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*0.85-r.top)/(innerHeight*0.6)));const n=RM?ws.length:Math.round(p*ws.length);ws.forEach((w,i)=>w.classList.toggle('lit',i<n));};
    addEventListener('scroll',upd,{passive:true});upd();
  });
}

/* ---------- 1/N slider ---------- */
function slider8(){
  const s=$('#slider8'); if(!s) return;
  const items=JSON.parse(s.dataset.items); let i=0;
  const body=$('.slider8__body',s), cnt=$('.slider8__count',s), imgs=$$('.slider8__img > *',s);
  const render=()=>{const c=items[i];cnt.textContent=`${i+1}/${items.length}`;
    body.innerHTML=`<span class="eyebrow">${c.tag}</span><h3 class="h-m">${c.title}</h3><p class="lead">${c.lead}</p><div class="mini-metrics">${c.kpi.slice(0,2).map(k=>`<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>`;
    imgs.forEach((im,j)=>im.classList.toggle('on',j===i)); $('.slider8__nav .lnk',s).href='/case#'+c.id;};
  const go=d=>{body.classList.add('out');setTimeout(()=>{i=(i+d+items.length)%items.length;render();body.classList.remove('out');},RM?0:300);};
  $('[data-s8="prev"]',s).addEventListener('click',()=>go(-1));$('[data-s8="next"]',s).addEventListener('click',()=>go(1));
  render();
}

/* ---------- founder accordion ---------- */
function founder(){$$('.fq__tab').forEach(t=>t.addEventListener('click',()=>{$$('.fq__tab').forEach(x=>{x.classList.toggle('on',x===t);x.setAttribute('aria-expanded',x===t)});}));}

/* ---------- cta image zoom ---------- */
function ctaZoom(){const c=$('#ctaImg');if(!c)return;if(!('IntersectionObserver' in window)){c.classList.add('in');return;}const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){c.classList.add('in');io.disconnect();}},{threshold:.3});io.observe(c);}

/* ---------- helpers for pages ---------- */
window.coverHTML=(c,cls='')=>c.img?`<img class="${cls}" src="${c.img}" alt="${c.title}" loading="lazy">`:`<div class="cover ${cls}"><span>${c.client}</span><b>${c.n}</b></div>`;
window.caseCard=c=>`<a class="ccard rv" href="/case#${c.id}" data-ind="${c.ind}"><div class="ccard__img">${coverHTML(c)}</div><div class="ccard__meta"><span class="chip">${(P.industries.find(x=>x.id===c.ind)||{}).title}</span><span>${c.client}</span></div><h4>${c.title}</h4><p>${c.lead}</p></a>`;
window.postCard=a=>`<a class="post rv" href="/article#${a.id}" data-cat="${a.cat}"><div class="post__img"><img src="${a.img}" alt="" loading="lazy"><span class="post__view">Читать</span></div><div class="post__meta"><span class="chip">${a.cat}</span><span>${a.read} чтения</span></div><h4>${a.title}</h4></a>`;
window.tCard=t=>`<div class="tcard"><div class="tcard__ph"><img src="${t.img}" alt="${t.name}" loading="lazy"></div><div><h4>${t.name}</h4><div class="role">${t.role}</div></div>${t.txt?`<p>${t.txt}</p>`:''}</div>`;

window.addEventListener('DOMContentLoaded',()=>{});
window.rolls=rolls;
window.PUBinit=function(){rolls();setupTracks();setupTabs();sphere();scrub();slider8();founder();ctaZoom();setupCounters();setupReveal();};
})();
