/* Motor de novela visual + pestañas */
(function(){
  // ----- pestañas -----
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(o => o.classList.remove('active'));
    t.classList.add('active');
    document.querySelectorAll('main .panel').forEach(p => p.classList.remove('active'));
    document.getElementById(t.dataset.tab).classList.add('active');
  }));

  // ----- relleno de secciones -----
  document.getElementById('cards').innerHTML = PERSONAJES.map(p =>
    `<div class="card"><h3>${p.n}</h3><span class="tag">${p.tag}</span><p>${p.d}</p></div>`).join('');
  document.getElementById('objlist').innerHTML = OBJETOS.map(p =>
    `<div class="card"><h3>${p.n}</h3><span class="tag">${p.tag}</span><p>${p.d}</p></div>`).join('');
  document.getElementById('maplist').innerHTML = MAPA.map(m =>
    `<li><span class="lugar">${m.l}</span><span class="fecha">${m.f} · ${m.c}</span><div class="detalle">${m.d}</div></li>`).join('');
  document.getElementById('caplist').innerHTML = CAPITULOS.map(c =>
    `<li><span class="num">${c.n}</span><span class="tit">${c.t}</span><span class="est ${c.e==='LEER AQUÍ'?'listo':''}">${c.e}</span></li>`).join('');

  // ----- motor VN -----
  const vn = document.getElementById('vn');
  const bg = document.getElementById('vn-bg');
  const box = document.getElementById('vn-box');
  const spk = document.getElementById('vn-speaker');
  const txt = document.getElementById('vn-text');
  const prog = document.getElementById('vn-progress');
  const title = document.getElementById('vn-title');
  const end = document.getElementById('vn-end');
  let i = -1, typing = null, full = '';

  function setBg(name){ bg.className = 'bg-' + name; }

  function show(iBeat){
    const b = ESCENA1[iBeat];
    setBg(b.bg);
    spk.textContent = b.s || '';
    full = b.x;
    txt.classList.remove('done');
    txt.textContent = '';
    clearInterval(typing);
    let k = 0;
    typing = setInterval(() => {
      k += 2;
      txt.textContent = full.slice(0, k);
      if (k >= full.length){ clearInterval(typing); txt.classList.add('done'); }
    }, 14);
    prog.textContent = (iBeat+1) + ' / ' + ESCENA1.length;
  }

  function advance(){
    if (i < 0) return;
    if (!txt.classList.contains('done')){ // completar texto
      clearInterval(typing); txt.textContent = full; txt.classList.add('done'); return;
    }
    i++;
    if (i >= ESCENA1.length){
      box.classList.add('hidden');
      end.classList.remove('hidden');
      return;
    }
    show(i);
  }

  document.getElementById('btn-start').addEventListener('click', (e) => {
    e.stopPropagation();
    title.classList.add('hidden');
    end.classList.add('hidden');
    box.classList.remove('hidden');
    i = 0; show(0);
  });
  document.getElementById('btn-restart').addEventListener('click', (e) => {
    e.stopPropagation();
    end.classList.add('hidden');
    title.classList.remove('hidden');
    i = -1;
  });
  vn.addEventListener('click', () => { if (i >= 0 && end.classList.contains('hidden')) advance(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'ArrowRight'){
      if (!title.classList.contains('hidden')) return;
      e.preventDefault(); advance();
    }
  });
})();
