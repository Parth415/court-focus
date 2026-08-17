import {
  CATEGORIES,
  DRILLS,
  SESSION_TEMPLATES,
  PLAYER_FOCUS,
  OFF_DAY,
  HOPPER_SIZE,
  SESSION_BALL_TARGET,
  getSchedule,
  getSessionForDay,
  getDrillById,
  getDrillsByCategory,
  getCategory,
  buildCustomSession,
  getSessionBalls,
  getHopperLoads,
  formatSessionMeta,
} from "./data.js";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function loadSessionsPerWeek() {
  const saved = localStorage.getItem("courtFocus.sessionsPerWeek");
  return saved === "3" ? 3 : 2;
}

const state = {
  tab: "today",
  drillFilter: null,
  sessionCategories: new Set(),
  selectedTemplate: null,
  sessionBlocks: [],
  activeSession: null,
  activeBlockIndex: 0,
  activeBall: 1,
  ballsHitTotal: 0,
  sessionsPerWeek: loadSessionsPerWeek(),
  isPracticeDay: false,
};
function difficultyBadge(level) {
  const cls =
    level === "Foundation"
      ? "badge-foundation"
      : level === "Intermediate"
        ? "badge-intermediate"
        : "badge-advanced";
  return `<span class="badge ${cls}">${level}</span>`;
}

function renderMachineSettings(machine) {
  const entries = Object.entries(machine);
  return `
    <dl class="machine-settings">
      ${entries.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
    </dl>`;
}

function finishBadge(drill) {
  return drill.finishesPoint
    ? `<span class="badge badge-finish">Finishes points</span>`
    : "";
}

function renderDrillCard(drill, { showCategory = false, onClick = true } = {}) {
  const cat = getCategory(drill.category);
  const clickAttr = onClick ? `data-drill-id="${drill.id}" class="card drill-card"` : 'class="card"';
  return `
    <div ${clickAttr}>
      <div class="card-header">
        <span class="card-title">${drill.name}</span>
        <span style="display:flex;gap:0.35rem;flex-wrap:wrap;justify-content:flex-end">${difficultyBadge(drill.difficulty)}${finishBadge(drill)}</span>
      </div>
      ${showCategory ? `<div style="font-size:0.75rem;color:${cat.color};font-weight:600;margin-bottom:0.4rem">${cat.label}</div>` : ""}
      <div class="meta-row">
        <span>${drill.balls} balls</span>
        <span>${drill.duration}</span>
      </div>
      <p style="font-size:0.85rem;color:var(--text-muted)">${drill.setup}</p>
    </div>`;
}

function renderDrillDetail(drill) {
  const cat = getCategory(drill.category);
  const howTo = drill.howTo || [];
  return `
    <button class="modal-close" id="modal-close" aria-label="Close">&times;</button>
    <div style="font-size:0.75rem;color:${cat.color};font-weight:700;text-transform:uppercase;letter-spacing:0.05em">${cat.label}</div>
    <h2 style="font-size:1.25rem;margin:0.25rem 0 0.5rem">${drill.name}</h2>
    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.5rem">
      ${difficultyBadge(drill.difficulty)}
      ${finishBadge(drill)}
    </div>
    <div class="meta-row" style="margin-top:0.75rem">
      <span>${drill.balls} balls</span>
      <span>${drill.duration}</span>
    </div>
    <p style="font-size:0.9rem;margin:0.75rem 0">${drill.setup}</p>
    ${
      drill.finishesPoint
        ? `<div class="tip-callout tip-callout-accent"><strong>Short-point cue:</strong> ${PLAYER_FOCUS.cue}</div>`
        : ""
    }
    <p class="section-title">How to play this drill</p>
    <ol class="how-to-list">
      ${howTo.map((step) => `<li>${step}</li>`).join("")}
    </ol>
    <p class="section-title">Slinger settings</p>
    ${renderMachineSettings(drill.machine)}
    <p class="section-title">Focus points</p>
    <ul class="focus-list">
      ${drill.focus.map((f) => `<li>${f}</li>`).join("")}
    </ul>
    <button class="btn btn-primary" id="btn-add-to-session">Add to Session</button>
  `;
}

function renderSessionBlocks(blocks) {
  if (!blocks.length) return '<div class="empty-state">Select a template or build a custom session.</div>';
  const meta = formatSessionMeta(blocks, SESSION_TEMPLATES.find((t) => t.id === state.selectedTemplate)?.duration);
  const html = blocks
    .map((block, i) => {
      const drill = getDrillById(block.drillId);
      if (!drill) return "";
      return `
        <div class="session-block">
          <div class="block-num">${i + 1}</div>
          <div class="block-info">
            <strong>${drill.name}</strong><br />
            <span>${getCategory(drill.category).label}</span>
          </div>
          <div class="block-balls">${block.balls}</div>
        </div>`;
    })
    .join("");

  const refillHint = Array.from({ length: meta.hoppers - 1 }, (_, i) => {
    const afterBall = (i + 1) * HOPPER_SIZE;
    return `<li>After ~${afterBall} balls: collect &amp; refill hopper (${i + 2}/${meta.hoppers})</li>`;
  }).join("");

  return (
    html +
    `<div class="tip-callout" style="margin-top:0.75rem">
      <strong>${meta.label}</strong>
      <p style="margin-top:0.35rem;font-size:0.85rem;color:var(--text-muted)">
        Hopper holds ${HOPPER_SIZE} balls — empty, collect, refill, keep going. Target ${SESSION_BALL_TARGET.min}–${SESSION_BALL_TARGET.max} balls for your fitness level.
      </p>
      ${refillHint ? `<ul class="focus-list" style="margin-top:0.5rem">${refillHint}</ul>` : ""}
    </div>`
  );
}

function getTodaySession() {
  const dayName = DAY_NAMES[new Date().getDay()];
  return getSessionForDay(dayName, state.sessionsPerWeek);
}

function getTemplateBlocks(templateId) {
  const template = SESSION_TEMPLATES.find((t) => t.id === templateId);
  return template ? template.blocks : [];
}

// ── Render functions ──

function renderPlayerFocus() {
  return `
    <div class="tip-callout tip-callout-accent" style="margin-bottom:1rem">
      <div class="section-title" style="margin-bottom:0.35rem;color:var(--accent)">${PLAYER_FOCUS.title}</div>
      <p style="font-size:0.9rem;margin-bottom:0.5rem">${PLAYER_FOCUS.problem}</p>
      <p style="font-size:0.9rem;font-weight:600;margin-bottom:0.35rem">${PLAYER_FOCUS.rule}</p>
      <p style="font-size:0.85rem;color:var(--text-muted)">${PLAYER_FOCUS.cue}</p>
    </div>`;
}

function renderToday() {
  const todaySession = getTodaySession();
  const todayCard = document.getElementById("today-card");
  const todaySessionEl = document.getElementById("today-session");
  const btnStart = document.getElementById("btn-start-today");
  const focusHtml = renderPlayerFocus();
  const schedule = getSchedule(state.sessionsPerWeek);

  if (!todaySession) {
    state.isPracticeDay = false;
    const next = schedule.sessions[0];
    const nextTemplate = SESSION_TEMPLATES.find((t) => t.id === next.templateId);
    todayCard.innerHTML =
      focusHtml +
      `
      <div class="card">
        <div class="card-title">${OFF_DAY.title}</div>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.5rem;margin-bottom:0.75rem">
          You practice ${state.sessionsPerWeek}× / week on the Slinger. Today is rest or match play.
        </p>
        <ul class="focus-list">
          ${OFF_DAY.tips.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>
      <div class="card" style="margin-top:0.75rem">
        <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)">Next machine session</div>
        <div class="card-title" style="margin-top:0.25rem">${next.label}: ${nextTemplate.name}</div>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem">Suggested: ${next.suggestedDay} · ${next.why}</p>
      </div>`;
    state.sessionBlocks = [];
    todaySessionEl.innerHTML = "";
    btnStart.style.display = "none";
    return;
  }

  state.isPracticeDay = true;
  const template = SESSION_TEMPLATES.find((t) => t.id === todaySession.templateId);
  const focusCat = getCategory(todaySession.focus);
  todayCard.innerHTML =
    focusHtml +
    `
    <div class="card">
      <div style="font-size:0.75rem;color:${focusCat?.color || "var(--accent)"};font-weight:700;text-transform:uppercase">
        ${todaySession.suggestedDay} · ${todaySession.label} · Machine day
      </div>
      <div class="card-title" style="margin-top:0.25rem">${template.name}</div>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem">${template.description}</p>
      <p style="font-size:0.85rem;margin-top:0.5rem">${todaySession.why}</p>
    </div>`;
  state.sessionBlocks = template.blocks;
  todaySessionEl.innerHTML = renderSessionBlocks(state.sessionBlocks);
  btnStart.style.display = "block";
  btnStart.textContent = "Start Session";
}

function renderDrillFilters() {
  const container = document.getElementById("drill-filters");
  container.innerHTML =
    `<button class="category-chip ${state.drillFilter === null ? "selected" : ""}" data-filter="all" style="--chip-color:var(--accent)">
      <span class="category-dot" style="background:var(--accent)"></span> All
    </button>` +
    CATEGORIES.map(
      (c) => `
      <button class="category-chip ${state.drillFilter === c.id ? "selected" : ""}" data-filter="${c.id}" style="--chip-color:${c.color}">
        <span class="category-dot" style="background:${c.color}"></span> ${c.label}
      </button>`
    ).join("");
}

function renderDrillList() {
  const list = document.getElementById("drill-list");
  const drills = state.drillFilter ? getDrillsByCategory(state.drillFilter) : DRILLS;
  list.innerHTML = drills.map((d) => renderDrillCard(d, { showCategory: !state.drillFilter })).join("");
}

function renderSessionFilters() {
  const container = document.getElementById("session-filters");
  container.innerHTML = CATEGORIES.map(
    (c) => `
    <button class="category-chip ${state.sessionCategories.has(c.id) ? "selected" : ""}" data-session-cat="${c.id}" style="--chip-color:${c.color}">
      <span class="category-dot" style="background:${c.color}"></span> ${c.label}
    </button>`
  ).join("");
}

function renderTemplates() {
  const container = document.getElementById("template-list");
  container.innerHTML = SESSION_TEMPLATES.map((t) => {
    const meta = formatSessionMeta(t.blocks, t.duration);
    return `
    <div class="card template-card ${state.selectedTemplate === t.id ? "selected" : ""}" data-template="${t.id}">
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <div class="meta-row" style="margin-top:0.5rem;margin-bottom:0">
        <span>${meta.balls} balls</span>
        <span>${meta.hoppers} hoppers</span>
        <span>${t.duration}</span>
      </div>
    </div>`;
  }).join("");
}

function renderSessionPreview() {
  const preview = document.getElementById("session-preview");
  const btnStart = document.getElementById("btn-start-session");
  preview.innerHTML =
    state.sessionBlocks.length > 0
      ? `<p class="section-title">Your session</p>${renderSessionBlocks(state.sessionBlocks)}`
      : "";
  btnStart.style.display = state.sessionBlocks.length > 0 ? "block" : "none";

  const total = getSessionBalls(state.sessionBlocks);
  const hoppers = getHopperLoads(total || SESSION_BALL_TARGET.ideal);
  document.getElementById("session-ball-count").textContent = total || SESSION_BALL_TARGET.ideal;
  document.getElementById("session-drill-count").textContent = state.sessionBlocks.length;
  const hopperLabel = document.getElementById("session-hopper-label");
  if (hopperLabel) hopperLabel.textContent = `${hoppers} hopper loads`;
}

function renderWeeklyPlan() {
  const container = document.getElementById("weekly-plan");
  const todayName = DAY_NAMES[new Date().getDay()];
  const schedule = getSchedule(state.sessionsPerWeek);
  const practiceDays = new Set(schedule.sessions.map((s) => s.suggestedDay));

  const frequencyToggle = `
    <div class="freq-toggle" style="margin-bottom:1rem">
      <p class="section-title" style="margin-bottom:0.5rem">How often can you hit the Slinger?</p>
      <div class="category-grid" style="grid-template-columns:1fr 1fr">
        <button class="category-chip ${state.sessionsPerWeek === 2 ? "selected" : ""}" data-freq="2" style="--chip-color:var(--accent)">
          2× / week
        </button>
        <button class="category-chip ${state.sessionsPerWeek === 3 ? "selected" : ""}" data-freq="3" style="--chip-color:var(--accent)">
          3× / week
        </button>
      </div>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.6rem">${schedule.note}</p>
    </div>`;

  const sessionCards = schedule.sessions
    .map((session) => {
      const template = SESSION_TEMPLATES.find((t) => t.id === session.templateId);
      const cat = getCategory(session.focus);
      const isToday = session.suggestedDay === todayName;
      return `
        <div class="card template-card ${isToday ? "selected" : ""}" data-template="${session.templateId}" style="margin-bottom:0.75rem;cursor:pointer">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem">
            <div style="font-size:0.75rem;font-weight:700;color:${cat?.color || "var(--accent)"};text-transform:uppercase">
              ${session.label} · Suggested ${session.suggestedDay}
            </div>
            ${isToday ? '<span style="font-size:0.7rem;font-weight:700;color:var(--accent)">TODAY</span>' : ""}
          </div>
          <h3 style="margin-top:0.35rem">${template.name}</h3>
          <p>${session.why}</p>
          <div class="meta-row" style="margin-top:0.5rem;margin-bottom:0">
            <span>${formatSessionMeta(template.blocks, template.duration).balls} balls</span>
            <span>${formatSessionMeta(template.blocks, template.duration).hoppers} hoppers</span>
            <span>${template.duration}</span>
          </div>
        </div>`;
    })
    .join("");

  const weekStrip = DAY_NAMES.map((day) => {
    const isPractice = practiceDays.has(day);
    const isToday = day === todayName;
    const session = schedule.sessions.find((s) => s.suggestedDay === day);
    return `
      <div class="week-day ${isToday ? "today" : ""} ${isPractice ? "practice" : "off"}">
        <div class="week-day-name">${day}</div>
        <div class="week-day-role">${isPractice ? session.label.replace("Session ", "S") : "Off"}</div>
      </div>`;
  }).join("");

  container.innerHTML = `
    ${frequencyToggle}
    <p class="section-title">This week's machine days</p>
    <div class="week-strip">${weekStrip}</div>
    <p class="section-title" style="margin-top:1.25rem">Your ${state.sessionsPerWeek} sessions</p>
    ${sessionCards}
    <p style="font-size:0.8rem;color:var(--text-muted)">Suggested days are flexible — tap a session to load it whenever you get court time.</p>
  `;
}

function updateActiveBar() {
  const bar = document.getElementById("active-bar");
  if (!state.activeSession) {
    bar.classList.remove("visible");
    return;
  }
  bar.classList.add("visible");
  const block = state.activeSession[state.activeBlockIndex];
  const drill = getDrillById(block.drillId);
  const sessionTotal = getSessionBalls(state.activeSession);
  const totalHoppers = getHopperLoads(sessionTotal);
  const hopperNum = Math.min(getHopperLoads(Math.max(state.ballsHitTotal, 1)), totalHoppers);
  const ballsIntoHopper = state.ballsHitTotal % HOPPER_SIZE;
  const untilRefill = ballsIntoHopper === 0 && state.ballsHitTotal > 0 ? 0 : HOPPER_SIZE - ballsIntoHopper;
  const nearRefill = untilRefill <= 5;

  document.getElementById("active-drill-name").textContent = drill.name;
  document.getElementById("active-drill-progress").textContent =
    `Drill ${state.activeBlockIndex + 1}/${state.activeSession.length} · Ball ${state.activeBall}/${block.balls} · Total ${state.ballsHitTotal}/${sessionTotal}`;
  const refillEl = document.getElementById("active-refill-hint");
  if (refillEl) {
    refillEl.textContent = nearRefill && state.ballsHitTotal > 0
      ? `Collect & refill hopper (${hopperNum}/${totalHoppers})`
      : `Hopper ${hopperNum}/${totalHoppers} · ~${untilRefill || HOPPER_SIZE} until next collect`;
    refillEl.classList.toggle("refill-soon", nearRefill && state.ballsHitTotal > 0);
  }
}

function openDrillModal(drillId) {
  const drill = getDrillById(drillId);
  if (!drill) return;
  const modal = document.getElementById("modal");
  document.getElementById("modal-content").innerHTML = renderDrillDetail(drill);
  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

function startSession(blocks) {
  if (!blocks.length) return;
  state.activeSession = blocks;
  state.activeBlockIndex = 0;
  state.activeBall = 1;
  state.ballsHitTotal = 0;
  updateActiveBar();
  const drill = getDrillById(blocks[0].drillId);
  openDrillModal(drill.id);
}

function nextBall() {
  if (!state.activeSession) return;
  const block = state.activeSession[state.activeBlockIndex];
  state.ballsHitTotal++;

  if (state.activeBall < block.balls) {
    state.activeBall++;
  } else if (state.activeBlockIndex < state.activeSession.length - 1) {
    state.activeBlockIndex++;
    state.activeBall = 1;
    const drill = getDrillById(state.activeSession[state.activeBlockIndex].drillId);
    openDrillModal(drill.id);
  } else {
    state.activeSession = null;
    closeModal();
    alert("Session complete! Great work — that's a full 45–60 min workout.");
  }
  updateActiveBar();
}

function skipDrill() {
  if (!state.activeSession) return;
  const block = state.activeSession[state.activeBlockIndex];
  const remaining = block.balls - state.activeBall + 1;
  state.ballsHitTotal += remaining;

  if (state.activeBlockIndex < state.activeSession.length - 1) {
    state.activeBlockIndex++;
    state.activeBall = 1;
    const drill = getDrillById(state.activeSession[state.activeBlockIndex].drillId);
    openDrillModal(drill.id);
  } else {
    state.activeSession = null;
    closeModal();
    alert("Session complete! Great work.");
  }
  updateActiveBar();
}

function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === `panel-${tab}`));
}

// ── Event listeners ──

document.querySelector(".tabs").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-tab]");
  if (btn) switchTab(btn.dataset.tab);
});

document.getElementById("drill-filters").addEventListener("click", (e) => {
  const chip = e.target.closest("[data-filter]");
  if (!chip) return;
  state.drillFilter = chip.dataset.filter === "all" ? null : chip.dataset.filter;
  renderDrillFilters();
  renderDrillList();
});

document.getElementById("drill-list").addEventListener("click", (e) => {
  const card = e.target.closest("[data-drill-id]");
  if (card) openDrillModal(card.dataset.drillId);
});

document.getElementById("session-filters").addEventListener("click", (e) => {
  const chip = e.target.closest("[data-session-cat]");
  if (!chip) return;
  const id = chip.dataset.sessionCat;
  if (state.sessionCategories.has(id)) state.sessionCategories.delete(id);
  else state.sessionCategories.add(id);
  renderSessionFilters();
});

document.getElementById("template-list").addEventListener("click", (e) => {
  const card = e.target.closest("[data-template]");
  if (!card) return;
  state.selectedTemplate = card.dataset.template;
  state.sessionBlocks = getTemplateBlocks(card.dataset.template);
  renderTemplates();
  renderSessionPreview();
});

document.getElementById("btn-build-custom").addEventListener("click", () => {
  const cats = [...state.sessionCategories];
  if (cats.length === 0) {
    alert("Select at least one focus area.");
    return;
  }
  state.selectedTemplate = null;
  state.sessionBlocks = buildCustomSession(cats);
  renderTemplates();
  renderSessionPreview();
});

document.getElementById("btn-start-session").addEventListener("click", () => startSession(state.sessionBlocks));
document.getElementById("btn-start-today").addEventListener("click", () => {
  if (!state.sessionBlocks.length) {
    switchTab("session");
    return;
  }
  startSession(state.sessionBlocks);
});

document.getElementById("weekly-plan").addEventListener("click", (e) => {
  const freqBtn = e.target.closest("[data-freq]");
  if (freqBtn) {
    state.sessionsPerWeek = Number(freqBtn.dataset.freq);
    localStorage.setItem("courtFocus.sessionsPerWeek", String(state.sessionsPerWeek));
    renderWeeklyPlan();
    renderToday();
    return;
  }

  const card = e.target.closest("[data-template]");
  if (!card) return;
  state.selectedTemplate = card.dataset.template;
  state.sessionBlocks = getTemplateBlocks(card.dataset.template);
  switchTab("session");
  renderTemplates();
  renderSessionPreview();
});

document.getElementById("btn-next-ball").addEventListener("click", nextBall);
document.getElementById("btn-skip-drill")?.addEventListener("click", skipDrill);

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal" || e.target.id === "modal-close") closeModal();
});

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "btn-add-to-session") {
    const drillId = state.activeSession
      ? state.activeSession[state.activeBlockIndex]?.drillId
      : document.querySelector("#modal-content h2")?.textContent;
    closeModal();
    switchTab("session");
  }
});

// ── Init ──
renderToday();
renderDrillFilters();
renderDrillList();
renderSessionFilters();
renderTemplates();
renderSessionPreview();
renderWeeklyPlan();

// ── PWA: service worker + install prompt ──
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Ignore registration failures (e.g. file:// protocol)
    });
  });
}

let deferredInstallPrompt = null;
const installBtn = document.getElementById("btn-install");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBtn) installBtn.style.display = "block";
});

installBtn?.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBtn) installBtn.style.display = "none";
});
