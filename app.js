// ============================================================
//  CINETRVIA — app.js
//  Configuración Firebase + lógica del juego
// ============================================================

// ── 1. CONFIGURACIÓN FIREBASE ──────────────────────────────
// (Firebase Console → Configuración del proyecto → Tus apps → SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, limit, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVwlk4ryKj8jW8XhGlYwPglBbdMTZanjw",
  authDomain: "trivia-cine-9b4f6.firebaseapp.com",
  projectId: "trivia-cine-9b4f6",
  storageBucket: "trivia-cine-9b4f6.firebasestorage.app",
  messagingSenderId: "304539991808",
  appId: "1:304539991808:web:585b829d3101e383eebde5"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── 2. CONFIGURACIÓN DEL JUEGO ─────────────────────────────
const PUNTOS_ACIERTO   = 5;
const PUNTOS_FALLO     = -3;   // penalización.
const ANTI_REPEAT_SIZE = 60;   // cuántas preguntas recientes se excluyen por jugador

// ── 3. ESTADO GLOBAL ──────────────────────────────────────
let state = {
  playerName:    "",
  numQuestions:  20,
  questions:     [],  // selección aleatoria para esta partida
  current:       0,
  score:         0,
  correct:       0,
  wrong:         0,
  answered:      false
};

// ── 4. NAVEGACIÓN ENTRE PANTALLAS ─────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ── 5. ANTI-REPETICIÓN (localStorage por jugador) ─────────
function getSeenKey(name) { return `seen_${name.toLowerCase().trim()}`; }

function getSeenIds(name) {
  try {
    return JSON.parse(localStorage.getItem(getSeenKey(name)) || "[]");
  } catch { return []; }
}

function markSeen(name, ids) {
  const existing = getSeenIds(name);
  const updated  = [...existing, ...ids].slice(-ANTI_REPEAT_SIZE);
  localStorage.setItem(getSeenKey(name), JSON.stringify(updated));
}

// ── 6. SELECCIÓN ALEATORIA DE PREGUNTAS ───────────────────
function pickQuestions(name, n) {
  const seen   = getSeenIds(name);
  const pool   = PREGUNTAS.filter(q => !seen.includes(q.id));
  const source = pool.length >= n ? pool : PREGUNTAS; // si no hay suficientes, usa todas

  const shuffled = [...source].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

// ── 7. INICIO DE PARTIDA ──────────────────────────────────
function startGame() {
  state.playerName   = document.getElementById("player-name").value.trim();
  state.numQuestions = parseInt(document.querySelector(".pill.active").dataset.value);
  state.questions    = pickQuestions(state.playerName, state.numQuestions);
  state.current      = 0;
  state.score        = 0;
  state.correct      = 0;
  state.wrong        = 0;

  showScreen("screen-game");
  renderQuestion();
}

// ── 8. RENDERIZAR PREGUNTA ────────────────────────────────
function renderQuestion() {
  const q   = state.questions[state.current];
  const idx = state.current;
  const tot = state.questions.length;

  state.answered = false;

  // Progreso
  document.getElementById("progress-text").textContent = `Pregunta ${idx + 1} de ${tot}`;
  document.getElementById("score-live").textContent    = `${state.score} pts`;
  document.getElementById("progress-bar").style.width  = `${(idx / tot) * 100}%`;

  // Pregunta
  document.getElementById("q-category").textContent = q.categoria || "";
  document.getElementById("q-text").textContent      = q.pregunta;

  // Feedback oculto
  const fb = document.getElementById("feedback-bar");
  fb.className = "feedback-bar hidden";

  // Opciones
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";

  q.opciones.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className   = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleAnswer(i));
    grid.appendChild(btn);
  });
}

// ── 9. GESTIÓN DE RESPUESTA ───────────────────────────────
function handleAnswer(selectedIdx) {
  if (state.answered) return;
  state.answered = true;

  const q       = state.questions[state.current];
  const correct = selectedIdx === q.correcta;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correcta)  btn.classList.add("correct");
    if (i === selectedIdx && !correct) btn.classList.add("wrong");
  });

  if (correct) {
    state.score   += PUNTOS_ACIERTO;
    state.correct += 1;
  } else {
    state.score = Math.max(0, state.score + PUNTOS_FALLO);
    state.wrong += 1;
  }

  // Actualizar marcador en vivo
  document.getElementById("score-live").textContent = `${state.score} pts`;

  // Feedback
  const fb = document.getElementById("feedback-bar");
  fb.className = `feedback-bar ${correct ? "correct" : "wrong"}`;
  document.getElementById("feedback-icon").textContent  = correct ? "✓" : "✗";
  document.getElementById("feedback-text").textContent  = correct
    ? "¡Correcto!"
    : `La respuesta era: ${q.opciones[q.correcta]}`;
}

// ── 10. SIGUIENTE PREGUNTA ────────────────────────────────
document.getElementById("btn-next").addEventListener("click", () => {
  state.current++;
  if (state.current >= state.questions.length) {
    endGame();
  } else {
    renderQuestion();
  }
});

// ── 11. FIN DE PARTIDA ────────────────────────────────────
function endGame() {
  const pct = Math.round((state.correct / state.questions.length) * 100);

  // Marcar preguntas como vistas
  markSeen(state.playerName, state.questions.map(q => q.id));

  // Resultado en pantalla
  showScreen("screen-results");

  const trophy = pct >= 80 ? "🏆" : pct >= 50 ? "🎬" : "🎞️";
  document.getElementById("trophy-emoji").textContent      = trophy;
  document.getElementById("result-player-name").textContent = state.playerName;
  document.getElementById("res-score").textContent          = state.score;
  document.getElementById("res-correct").textContent        = state.correct;
  document.getElementById("res-wrong").textContent          = state.wrong;
  document.getElementById("res-pct").textContent            = `${pct}%`;

  const titleEl = document.getElementById("result-title");
  if (pct === 100) titleEl.textContent = "¡Perfecto!";
  else if (pct >= 80) titleEl.textContent = "¡Muy bien!";
  else if (pct >= 50) titleEl.textContent = "¡Bien jugado!";
  else titleEl.textContent = "Sigue practicando";

  // Guardar en Firebase
  saveResult(pct);
}

// ── 12. GUARDAR EN FIREBASE ───────────────────────────────
async function saveResult(pct) {
  const savingMsg = document.getElementById("saving-msg");

  // Modo prueba: si el nombre es "test" no guarda en Firebase
  if (state.playerName.toLowerCase() === "test") {
    savingMsg.textContent = "Modo prueba — resultado no guardado";
    return;
  }

  savingMsg.textContent = "Guardando resultado...";

  await addDoc(collection(db, "resultados"), {
    nombre:     state.playerName,
    puntos:     state.score,
    aciertos:   state.correct,
    fallos:     state.wrong,
    total:      state.questions.length,
    porcentaje: Math.round((state.correct / state.questions.length) * 100),
    fecha:      serverTimestamp()
  });
}

// ── 13. RANKING ───────────────────────────────────────────
let currentSort = "score"; // "score" | "pct"

async function loadRanking() {
  const list = document.getElementById("ranking-list");
  list.innerHTML = '<div class="loading-msg">Cargando...</div>';

  const field = currentSort === "score" ? "puntos" : "porcentaje";
  const q     = query(collection(db, "resultados"), orderBy(field, "desc"), limit(30));
  const snap  = await getDocs(q);

  if (snap.empty) {
    list.innerHTML = '<div class="loading-msg">Aún no hay partidas guardadas.</div>';
    return;
  }

  list.innerHTML = "";
  const medals = ["🥇", "🥈", "🥉"];

  snap.forEach((doc, i) => {
    const d   = doc.data();
    const pos = i + 1;
    const row = document.createElement("div");
    row.className = `ranking-row ${pos === 1 ? "top1" : pos === 2 ? "top2" : pos === 3 ? "top3" : ""}`;
    row.innerHTML = `
      <div class="rank-pos">${pos}</div>
      <div class="rank-name">${escapeHtml(d.nombre)}</div>
      <div class="rank-meta">
        <div class="rank-score">${d.puntos} pts</div>
        <div class="rank-pct">${d.porcentaje}% acierto · ${d.aciertos}/${d.total}</div>
      </div>
      ${medals[i] ? `<div class="rank-medal">${medals[i]}</div>` : ""}
    `;
    list.appendChild(row);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// ── 14. EVENTOS ───────────────────────────────────────────

// Nombre de jugador → habilitar botón
document.getElementById("player-name").addEventListener("input", function() {
  document.getElementById("btn-start").disabled = this.value.trim().length < 2;
});

// Selector de preguntas
document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    this.classList.add("active");
  });
});

// Botón Empezar
document.getElementById("btn-start").addEventListener("click", startGame);

// Botón Ranking desde home
document.getElementById("btn-ranking").addEventListener("click", () => {
  showScreen("screen-ranking");
  loadRanking();
});

// Tabs del ranking
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function() {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");
    currentSort = this.dataset.sort;
    loadRanking();
  });
});

// Botón Volver del ranking
document.getElementById("btn-back").addEventListener("click", () => showScreen("screen-home"));

// Botones de resultados
document.getElementById("btn-play-again").addEventListener("click", () => showScreen("screen-home"));
document.getElementById("btn-see-ranking").addEventListener("click", () => {
  showScreen("screen-ranking");
  loadRanking();
});
