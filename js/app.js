/* ============================================================
   APP — Alfabetización Tecnológica v2.0
   Navegación, render de todas las secciones, accesibilidad, localStorage
   ============================================================ */

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */
let fontScale = parseFloat(localStorage.getItem('alfabet-fontScale') || '1');
let highContrast = localStorage.getItem('alfabet-contrast') === 'true';
let completedModules = new Set(JSON.parse(localStorage.getItem('alfabet-completed') || '[]'));

let testState = { current: null, qIdx: 0, answers: [] };
let faqState  = { cat: 'todas', search: '' };
let glosState = { letter: 'todas', search: '' };
let curiState = { tab: 'datos', tema: 'todas' };
let vmState   = { flipped: new Set(), score: 0 };
let tipsState = { cat: 'todas' };

/* ============================================================
   BOOTSTRAP
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyFontScale();
  applyContrast();
  setupNav();
  const savedSection = localStorage.getItem('alfabet-section');
  if (savedSection && document.getElementById(`section-${savedSection}`)) {
    goToSection(savedSection);
  }
  setupAccessibilityTools();
  renderInicio();
  renderTemario();
  renderCuriosidades();
  renderTips();
  renderFAQ();
  renderTestSelector();
  renderGlosario();
  setupFAQControls();
  setupGlosarioControls();
  setupCuriTabs();
  setupTipsFilter();
});

/* ============================================================
   NAVEGACIÓN
   ============================================================ */
function setupNav() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => goToSection(btn.dataset.section));
  });

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('.header')) nav.classList.remove('open');
  });

  // CTAs del hero
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToSection(btn.dataset.goto));
  });
}

function goToSection(name) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    const isActive = b.dataset.section === name;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  document.querySelectorAll('.section').forEach(s => {
    s.classList.toggle('active', s.id === `section-${name}`);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav').classList.remove('open');
  localStorage.setItem('alfabet-section', name);
}

/* ============================================================
   ACCESIBILIDAD — FUENTE Y CONTRASTE
   ============================================================ */
function setupAccessibilityTools() {
  document.getElementById('font-decrease').addEventListener('click', () => changeFontScale(-0.1));
  document.getElementById('font-increase').addEventListener('click', () => changeFontScale(0.1));
  document.getElementById('contrast-toggle').addEventListener('click', toggleContrast);
}

function changeFontScale(delta) {
  fontScale = Math.min(1.5, Math.max(0.8, fontScale + delta));
  applyFontScale();
  localStorage.setItem('alfabet-fontScale', fontScale);
  const pct = Math.round(fontScale * 100);
  showToast(`Tamaño de texto: ${pct}%`);
}

function applyFontScale() {
  document.documentElement.style.setProperty('--font-scale', fontScale);
}

function toggleContrast() {
  highContrast = !highContrast;
  applyContrast();
  localStorage.setItem('alfabet-contrast', highContrast);
  const btn = document.getElementById('contrast-toggle');
  btn.setAttribute('aria-pressed', highContrast);
  showToast(highContrast ? 'Alto contraste activado' : 'Contraste normal');
}

function applyContrast() {
  document.documentElement.classList.toggle('high-contrast', highContrast);
  document.getElementById('contrast-toggle')?.setAttribute('aria-pressed', highContrast);
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ============================================================
   CONFETTI
   ============================================================ */
function lanzarConfetti() {
  const colores = ['#7C1D1D','#B8893A','#D4B27A','#2D7D5A','#2C6BB0','#E8B547'];
  for (let i = 0; i < 70; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confeti';
      c.style.cssText = `
        left:${Math.random()*100}vw;
        top:-20px;
        background:${colores[Math.floor(Math.random()*colores.length)]};
        animation:caer ${1.8+Math.random()*2}s ease-in forwards;
        transform:rotate(${Math.random()*360}deg);
        width:${6+Math.random()*8}px;
        height:${6+Math.random()*8}px;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 30);
  }
}

/* ============================================================
   SECCIÓN: INICIO
   ============================================================ */
function renderInicio() {
  renderStats();
  renderInicioCards();
}

function renderStats() {
  const el = document.getElementById('stats-bar');
  if (!el) return;
  const stats = [
    { num: '17', label: 'Módulos' },
    { num: '80+', label: 'Temas' },
    { num: '50', label: 'Preguntas Test' },
    { num: '40', label: 'Términos Glosario' },
    { num: '30', label: 'Tips Prácticos' },
    { num: '12', label: 'Datos Curiosos' }
  ];
  el.innerHTML = stats.map(s => `
    <div class="stat">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderInicioCards() {
  const el = document.getElementById('inicio-cards');
  if (!el) return;
  const cards = [
    { goto: 'temario',      icon: '📚', titulo: 'Temario completo',         desc: '17 módulos desde lo básico hasta Bots, Virus y Huella Digital. Cada uno con resumen, conceptos y puntos clave.' },
    { goto: 'curiosidades', icon: '🎮', titulo: 'Datos curiosos + Juego',   desc: 'Estadísticas que te sorprenderán y el juego Verdad o Mito. ¿Sabes cuánto del tráfico de internet son bots?' },
    { goto: 'faq',          icon: '💬', titulo: 'Preguntas frecuentes',     desc: 'Las dudas más comunes del programa resueltas: contraseñas, estafas, WiFi, IA, limpieza del celular y más.' },
    { goto: 'test',         icon: '🎯', titulo: 'Pon a prueba lo aprendido', desc: '4 niveles de evaluación con explicación de cada respuesta. Sin presión — cada error es una oportunidad de aprender.' },
    { goto: 'tips',         icon: '💡', titulo: '30 Tips para la vida digital', desc: 'Las recomendaciones más prácticas del programa. Aplícalas desde hoy en tu celular y computadora.' },
    { goto: 'glosario',     icon: '📖', titulo: 'Glosario tecnológico',      desc: '40 términos del mundo digital explicados en palabras simples. Búscalos cuando tengas dudas.' }
  ];
  el.innerHTML = cards.map(c => `
    <button class="inicio-card" data-goto="${c.goto}" aria-label="Ir a ${c.titulo}">
      <div class="inicio-card-icon">${c.icon}</div>
      <h3>${c.titulo}</h3>
      <p>${c.desc}</p>
    </button>
  `).join('');
  el.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToSection(btn.dataset.goto));
  });
}

/* ============================================================
   SECCIÓN: TEMARIO
   ============================================================ */
function renderTemario() {
  renderProgressBanner();
  const container = document.getElementById('modulos-container');
  if (!container) return;

  container.innerHTML = '';
  MODULOS.forEach((m, idx) => {
    const card = document.createElement('article');
    card.className = 'modulo-card' + (completedModules.has(idx) ? ' completado' : '');
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `Módulo ${m.num}: ${m.titulo}`);

    const badgeHTML = m.esNuevo
      ? `<div class="modulo-badge nuevo">★ Nuevo</div>`
      : `<div class="modulo-badge">Módulo</div>`;

    const datoHTML = m.contenido.dato
      ? `<div class="modulo-dato">💡 <strong>Dato:</strong> ${m.contenido.dato}</div>`
      : '';

    card.innerHTML = `
      <div class="modulo-num">${m.num}.</div>
      ${badgeHTML}
      <h3 class="modulo-titulo">${m.titulo}</h3>
      <p class="modulo-desc">${m.desc}</p>
      <div class="modulo-temas" aria-label="Temas">
        ${m.temas.map(t => `<span class="tema-chip">${t}</span>`).join('')}
      </div>
      <div class="modulo-contenido" aria-hidden="true">
        <div class="modulo-grid">
          <div class="modulo-seccion">
            <h4>Resumen</h4>
            <p>${m.contenido.resumen}</p>
          </div>
          <div class="modulo-seccion">
            <h4>Conceptos clave</h4>
            <ul>${m.contenido.conceptos.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
          <div class="puntos-clave">
            <h4>★ Recuerda siempre</h4>
            <ul>${m.contenido.claves.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
          ${datoHTML}
        </div>
        <div class="modulo-actions">
          <button class="cta cta-ghost btn-completar" data-idx="${idx}" aria-label="${completedModules.has(idx) ? 'Marcar como no completado' : 'Marcar como completado'}">
            ${completedModules.has(idx) ? '✓ Completado' : '○ Marcar completado'}
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', e => {
      if (e.target.closest('.btn-completar')) return;
      const isExpanded = card.classList.toggle('expanded');
      const contenido = card.querySelector('.modulo-contenido');
      contenido.setAttribute('aria-hidden', !isExpanded);
    });

    card.querySelector('.btn-completar').addEventListener('click', e => {
      e.stopPropagation();
      toggleCompleted(idx, card);
    });

    container.appendChild(card);
  });
}

function toggleCompleted(idx, card) {
  if (completedModules.has(idx)) {
    completedModules.delete(idx);
    card.classList.remove('completado');
    card.querySelector('.btn-completar').textContent = '○ Marcar completado';
    showToast('Módulo desmarcado');
  } else {
    completedModules.add(idx);
    card.classList.add('completado');
    card.querySelector('.btn-completar').textContent = '✓ Completado';
    showToast('¡Módulo completado! 🎉');
    if (completedModules.size === MODULOS.length) lanzarConfetti();
  }
  localStorage.setItem('alfabet-completed', JSON.stringify([...completedModules]));
  renderProgressBanner();
}

function renderProgressBanner() {
  const el = document.getElementById('progress-banner');
  if (!el) return;
  const pct = Math.round((completedModules.size / MODULOS.length) * 100);
  el.innerHTML = `
    <div class="progress-text">${completedModules.size} / ${MODULOS.length} módulos</div>
    <div class="progress-bar-wrap" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso del curso">
      <div class="progress-bar-fill" style="width:${pct}%"></div>
    </div>
    <div class="progress-text">${pct}%</div>
  `;
}

/* ============================================================
   SECCIÓN: CURIOSIDADES
   ============================================================ */
function renderCuriosidades() {
  renderCuriFilters();
  renderCuriCards();
  renderVerdadMito();
}

function setupCuriTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      curiState.tab = tab;
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab === tab);
        b.setAttribute('aria-selected', b.dataset.tab === tab);
      });
      document.getElementById('tab-datos').hidden = tab !== 'datos';
      document.getElementById('tab-verdad-mito').hidden = tab !== 'verdad-mito';
    });
  });
}

function renderCuriFilters() {
  const el = document.querySelector('.filtros-curiosidades');
  if (!el) return;
  const temas = ['todas', ...new Set(CURIOSIDADES.map(c => c.tema))];
  const labels = { todas: 'Todos', bots: 'Bots', obsolescencia: 'Obsolescencia', celular: 'Celular', seguridad: 'Seguridad', compras: 'Compras', internet: 'Internet', privacidad: 'Privacidad' };
  el.innerHTML = temas.map(t => `
    <button class="chip chip-outline${curiState.tema === t ? ' active' : ''}" data-tema="${t}">
      ${labels[t] || t}
    </button>
  `).join('');
  el.querySelectorAll('[data-tema]').forEach(btn => {
    btn.addEventListener('click', () => {
      curiState.tema = btn.dataset.tema;
      el.querySelectorAll('[data-tema]').forEach(b => b.classList.toggle('active', b.dataset.tema === curiState.tema));
      renderCuriCards();
    });
  });
}

function renderCuriCards() {
  const el = document.getElementById('curiosidades-container');
  if (!el) return;
  const filtered = curiState.tema === 'todas' ? CURIOSIDADES : CURIOSIDADES.filter(c => c.tema === curiState.tema);
  const temaColors = { bots: '#2C6BB0', obsolescencia: '#7C1D1D', celular: '#2D7D5A', seguridad: '#C04444', compras: '#B8893A', internet: '#2C6BB0', privacidad: '#7A736A' };

  el.innerHTML = filtered.map(c => `
    <article class="curiosidad-card" role="listitem">
      <div class="curiosidad-tema" style="background:${temaColors[c.tema] || '#7C1D1D'}22;color:${temaColors[c.tema] || '#7C1D1D'}">
        ${c.temaLabel}
      </div>
      <div class="curiosidad-icon" aria-hidden="true">${c.icon}</div>
      <div class="curiosidad-stat" aria-label="Estadística: ${c.stat}">${c.stat}</div>
      <p class="curiosidad-texto">${c.texto}</p>
      <div class="curiosidad-fuente">Fuente: ${c.fuente}</div>
    </article>
  `).join('') || '<p style="color:var(--gris);text-align:center;padding:40px;">No hay datos para este filtro.</p>';
}

/* ============================================================
   SECCIÓN: VERDAD O MITO
   ============================================================ */
function renderVerdadMito() {
  const el = document.getElementById('vm-container');
  if (!el) return;
  el.innerHTML = VERDAD_O_MITO.map((item, idx) => `
    <div class="vm-card" role="listitem" data-idx="${idx}" aria-label="Tarjeta: ${item.afirmacion}">
      <div class="vm-card-inner">
        <div class="vm-card-front">
          <p class="vm-pregunta">${item.afirmacion}</p>
        </div>
        <div class="vm-card-back ${item.esVerdad ? 'verdad' : 'mito'}">
          <div class="vm-resultado">${item.esVerdad ? '✓ VERDAD' : '✗ MITO'}</div>
          <p class="vm-explicacion">${item.explicacion}</p>
        </div>
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.vm-card').forEach(card => {
    card.addEventListener('click', () => flipVMCard(card));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') flipVMCard(card); });
    card.setAttribute('tabindex', '0');
  });
}

function flipVMCard(card) {
  const idx = parseInt(card.dataset.idx);
  if (vmState.flipped.has(idx)) return;
  card.classList.add('flipped');
  vmState.flipped.add(idx);
  const item = VERDAD_O_MITO[idx];
  if (item.esVerdad) vmState.score++;

  updateVMScore();
  if (vmState.flipped.size === VERDAD_O_MITO.length) {
    setTimeout(() => {
      document.getElementById('vm-reset').hidden = false;
      if (vmState.score >= 7) lanzarConfetti();
    }, 600);
  }
}

function updateVMScore() {
  const el = document.getElementById('vm-score');
  if (!el) return;
  const total = vmState.flipped.size;
  el.textContent = total > 0 ? `Reveladas: ${total} / ${VERDAD_O_MITO.length}` : '';
}

document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.getElementById('vm-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      vmState = { flipped: new Set(), score: 0 };
      document.getElementById('vm-reset').hidden = true;
      document.getElementById('vm-score').textContent = '';
      renderVerdadMito();
    });
  }
});

/* ============================================================
   SECCIÓN: TIPS
   ============================================================ */
function setupTipsFilter() {
  const el = document.querySelector('.tips-filtros');
  if (!el) return;
  const cats = ['todas', 'seguridad', 'internet', 'celular', 'digital', 'ia', 'compras', 'privacidad', 'aprendizaje'];
  const labels = { todas: 'Todos', seguridad: '🔒 Seguridad', internet: '🌐 Internet', celular: '📱 Celular', digital: '💾 Digital', ia: '🤖 IA', compras: '🛒 Compras', privacidad: '👁️ Privacidad', aprendizaje: '🎓 Aprendizaje' };
  el.innerHTML = cats.map(c => `
    <button class="chip chip-outline${tipsState.cat === c ? ' active' : ''}" data-cat="${c}">
      ${labels[c] || c}
    </button>
  `).join('');
  el.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      tipsState.cat = btn.dataset.cat;
      el.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('active', b.dataset.cat === tipsState.cat));
      renderTips();
    });
  });
}

function renderTips() {
  const el = document.getElementById('tips-container');
  if (!el) return;
  const filtered = tipsState.cat === 'todas' ? TIPS : TIPS.filter(t => t.cat === tipsState.cat);
  el.innerHTML = filtered.map(t => `
    <article class="tip-card" role="listitem">
      <div class="tip-emoji" aria-hidden="true">${t.emoji}</div>
      <div class="tip-text">
        <h3>${t.titulo}</h3>
        <p>${t.texto}</p>
      </div>
    </article>
  `).join('') || '<p style="color:var(--gris);text-align:center;padding:40px;">No hay tips para esta categoría.</p>';
}

/* ============================================================
   SECCIÓN: FAQ
   ============================================================ */
function setupFAQControls() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      faqState.cat = btn.dataset.cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === faqState.cat));
      renderFAQ();
    });
  });

  const searchInput = document.getElementById('faq-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      faqState.search = e.target.value;
      renderFAQ();
    });
  }
}

function renderFAQ() {
  const el = document.getElementById('faq-list');
  if (!el) return;
  const term = faqState.search.toLowerCase();
  const filtered = FAQS.filter(f => {
    const matchCat = faqState.cat === 'todas' || f.cat === faqState.cat;
    const matchSearch = !term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    el.innerHTML = `<p class="faq-empty">No encontramos preguntas con ese criterio. Prueba con otra búsqueda.</p>`;
    return;
  }

  el.innerHTML = filtered.map((f, i) => `
    <div class="faq-item" role="listitem">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-q-${i}">
        <span>${f.q}</span>
        <div class="faq-icon" aria-hidden="true">+</div>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-q-${i}">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      item.querySelector('.faq-question').setAttribute('aria-expanded', isOpen);
    });
  });
}

/* ============================================================
   SECCIÓN: TEST
   ============================================================ */
function renderTestSelector() {
  const el = document.getElementById('test-seleccion');
  if (!el) return;
  el.innerHTML = `
    <div class="test-intro-box">
      <h3>¿Qué tan listo estás?</h3>
      <p>Elige un test según el nivel que quieras evaluar. Cada respuesta te explica por qué es correcta o incorrecta.</p>
      <div class="test-selector">
        ${Object.entries(TESTS).map(([key, t]) => `
          <button class="test-opcion" data-test="${key}" aria-label="Iniciar ${t.titulo}">
            <div style="font-size:2rem;margin-bottom:8px">${t.emoji}</div>
            <div style="font-weight:700">${t.titulo.split('·')[0]}</div>
            <div style="font-size:0.78rem;opacity:0.8;margin-top:4px">${t.desc}</div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  el.querySelectorAll('[data-test]').forEach(btn => {
    btn.addEventListener('click', () => iniciarTest(btn.dataset.test));
  });
}

function iniciarTest(tipo) {
  testState = { current: TESTS[tipo], qIdx: 0, answers: [] };
  document.getElementById('test-seleccion').style.display = 'none';
  const prog = document.getElementById('test-progreso');
  prog.innerHTML = buildTestProgreso();
  prog.style.display = 'block';
  mostrarPregunta();
}

function buildTestProgreso() {
  return `
    <div class="test-en-progreso">
      <div class="test-header">
        <div class="test-titulo" id="test-titulo"></div>
        <div class="test-contador" id="test-contador"></div>
      </div>
      <div class="test-barra">
        <div class="test-barra-fill" id="test-fill" style="width:0%"></div>
      </div>
      <div id="pregunta-container"></div>
    </div>
  `;
}

function mostrarPregunta() {
  const p = testState.current.preguntas[testState.qIdx];
  const total = testState.current.preguntas.length;

  document.getElementById('test-titulo').textContent = testState.current.titulo;
  document.getElementById('test-contador').textContent = `Pregunta ${testState.qIdx + 1} de ${total}`;
  document.getElementById('test-fill').style.width = `${(testState.qIdx / total) * 100}%`;

  const letras = ['A','B','C','D'];
  const esFinalPregunta = testState.qIdx + 1 === total;

  document.getElementById('pregunta-container').innerHTML = `
    <div class="pregunta-text" role="heading" aria-level="3">${p.q}</div>
    <div class="opciones-test" role="group" aria-label="Opciones de respuesta">
      ${p.opciones.map((op, i) => `
        <button class="opcion-test" data-idx="${i}" aria-label="Opción ${letras[i]}: ${op}">
          <div class="opcion-letra" aria-hidden="true">${letras[i]}</div>
          <span>${op}</span>
        </button>
      `).join('')}
    </div>
    <div class="explicacion" id="explicacion" role="alert" aria-live="polite"></div>
    <div class="test-controles">
      <button class="cta cta-ghost" id="btn-cancelar" style="padding:10px 18px;font-size:0.85rem;">← Volver</button>
      <button class="cta cta-primary" id="btn-siguiente" style="display:none">
        ${esFinalPregunta ? 'Ver resultado' : 'Siguiente pregunta'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;

  document.querySelectorAll('.opcion-test').forEach(btn => {
    btn.addEventListener('click', () => responder(parseInt(btn.dataset.idx)));
  });
  document.getElementById('btn-cancelar').addEventListener('click', cancelarTest);
  document.getElementById('btn-siguiente').addEventListener('click', siguientePregunta);
}

function responder(idx) {
  const p = testState.current.preguntas[testState.qIdx];
  const correcta = p.correcta;
  const acerto = idx === correcta;
  testState.answers.push(acerto);

  document.querySelectorAll('.opcion-test').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correcta) btn.classList.add('correcta');
    if (i === idx && !acerto) btn.classList.add('incorrecta');
  });

  const exp = document.getElementById('explicacion');
  exp.innerHTML = `<strong>${acerto ? '¡Correcto! ✓' : 'No exactamente...'}</strong> ${p.explicacion}`;
  exp.classList.add('visible');
  document.getElementById('btn-siguiente').style.display = 'inline-flex';
}

function siguientePregunta() {
  testState.qIdx++;
  if (testState.qIdx < testState.current.preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const aciertos = testState.answers.filter(Boolean).length;
  const total = testState.answers.length;
  const pct = (aciertos / total) * 100;

  document.getElementById('test-fill').style.width = '100%';
  document.getElementById('test-contador').textContent = 'Resultado final';
  document.getElementById('test-titulo').textContent = testState.current.titulo;

  let nivel, icono, emoji, mensaje;
  if (pct >= 80) {
    nivel = 'excelente'; icono = '★'; emoji = '🏆';
    mensaje = '¡Excelente! Tienes un dominio sólido del tema. Ya puedes ayudar a otros a aprender.';
    lanzarConfetti();
  } else if (pct >= 60) {
    nivel = 'bueno'; icono = '✓'; emoji = '👏';
    mensaje = 'Muy bien. Ya tienes una buena base. Repasa los temas donde fallaste y quedarás perfecto.';
  } else {
    nivel = 'regular'; icono = '↻'; emoji = '💪';
    mensaje = 'No te desanimes. Cada error es una oportunidad de aprender. Repasa el temario y vuelve a intentarlo.';
  }

  document.getElementById('pregunta-container').innerHTML = `
    <div class="resultado">
      <div class="resultado-icon ${nivel}" aria-hidden="true">${icono}</div>
      <h3>${emoji} ${nivel === 'excelente' ? '¡Excelente!' : nivel === 'bueno' ? '¡Bien hecho!' : 'Sigue practicando'}</h3>
      <div class="resultado-puntaje" aria-label="${aciertos} de ${total} correctas">${aciertos}<span>/${total}</span></div>
      <p class="resultado-mensaje">${mensaje}</p>
      <div class="resultado-acciones">
        <button class="cta cta-primary" id="btn-volver-tests">Volver a los tests</button>
        <button class="cta cta-secondary" data-goto="temario">Repasar temario</button>
      </div>
    </div>
  `;

  document.getElementById('btn-volver-tests').addEventListener('click', cancelarTest);
  document.querySelector('[data-goto="temario"]')?.addEventListener('click', () => goToSection('temario'));
}

function cancelarTest() {
  testState = { current: null, qIdx: 0, answers: [] };
  document.getElementById('test-progreso').style.display = 'none';
  document.getElementById('test-progreso').innerHTML = '';
  document.getElementById('test-seleccion').style.display = 'block';
}

/* ============================================================
   SECCIÓN: GLOSARIO
   ============================================================ */
function setupGlosarioControls() {
  const searchInput = document.getElementById('glosario-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      glosState.search = e.target.value.toLowerCase();
      glosState.letter = 'todas';
      renderAZFilter();
      renderGlosario();
    });
  }
  renderAZFilter();
}

function renderAZFilter() {
  const el = document.getElementById('az-filter');
  if (!el) return;
  const letrasUsadas = new Set(GLOSARIO.map(g => g.letra));
  const letras = ['todas', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  el.innerHTML = letras.map(l => {
    const isAll = l === 'todas';
    const hasItems = isAll || letrasUsadas.has(l);
    const isActive = glosState.letter === l;
    return `
      <button class="az-btn${isActive ? ' active' : ''}${!hasItems ? ' disabled' : ''}"
        data-letter="${l}"
        ${!hasItems ? 'aria-disabled="true"' : ''}
        aria-label="${isAll ? 'Mostrar todas las letras' : `Filtrar por letra ${l}`}"
        aria-pressed="${isActive}">
        ${isAll ? 'Todos' : l}
      </button>
    `;
  }).join('');

  el.querySelectorAll('.az-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      glosState.letter = btn.dataset.letter;
      glosState.search = '';
      const searchEl = document.getElementById('glosario-search');
      if (searchEl) searchEl.value = '';
      renderAZFilter();
      renderGlosario();
    });
  });
}

function renderGlosario() {
  const el = document.getElementById('glosario-container');
  if (!el) return;

  const filtered = GLOSARIO.filter(g => {
    const matchLetter = glosState.letter === 'todas' || g.letra === glosState.letter;
    const matchSearch = !glosState.search || g.term.toLowerCase().includes(glosState.search) || g.def.toLowerCase().includes(glosState.search);
    return matchLetter && matchSearch;
  });

  if (filtered.length === 0) {
    el.innerHTML = `<p class="glosario-empty">No encontramos términos con ese criterio.</p>`;
    return;
  }

  const nivelLabel = { basico: 'Básico', medio: 'Intermedio', avanzado: 'Avanzado' };
  el.innerHTML = filtered.map(g => `
    <article class="glosario-card" role="listitem">
      <div class="glosario-term">
        <span class="glosario-letra" aria-hidden="true">${g.letra}</span>
        <span>${g.term}</span>
      </div>
      <p class="glosario-def">${g.def}</p>
      <span class="glosario-nivel ${g.nivel}" aria-label="Nivel ${nivelLabel[g.nivel]}">${nivelLabel[g.nivel]}</span>
    </article>
  `).join('');
}
