const data = window.doctiPreviewData;
const root = document.querySelector("[data-preview-root]");

const state = {
  step: 1,
  patientId: "ana",
  protocol: "Rinitis alérgica",
};

function patient() {
  return data.patients.find((item) => item.id === state.patientId) || data.patients[0];
}

function stepState(index) {
  if (index < state.step) return "done";
  if (index === state.step) return "active";
  return "pending";
}

function renderSidebar() {
  const nav = root.querySelector("[data-step-list]");

  nav.innerHTML = data.steps
    .map((label, index) => {
      const status = stepState(index);
      return `
        <button class="preview-step preview-step--${status}" type="button" data-go-step="${index}">
          <span>${status === "done" ? "✓" : index + 1}</span>
          <strong>${label}</strong>
        </button>
      `;
    })
    .join("");
}

function renderHeader() {
  root.querySelector("[data-demo-title]").textContent = data.steps[state.step];
  root.querySelector("[data-demo-context]").textContent = `${data.steps[state.step]} ${state.step + 1} / ${data.steps.length}`;
  root.querySelector("[data-prev-step]").disabled = state.step === 0;
  root.querySelector("[data-next-step]").textContent =
    state.step === data.steps.length - 1 ? "Finalizar demo" : "Siguiente →";
}

function renderInnerSteps() {
  const labels = ["Paciente", "Motivo", "Nota"];
  const active = state.step <= 1 ? 0 : state.step === 2 ? 1 : 2;

  root.querySelector("[data-inner-steps]").innerHTML = labels
    .map(
      (label, index) => `
        <span class="${index === active ? "is-active" : ""}">
          <b>${index + 1}</b> ${label}
        </span>
      `
    )
    .join("");
}

function dashboardTemplate() {
  return `
    <div class="preview-grid preview-grid--metrics">
      ${data.metrics
        .map(
          (metric) => `
            <article class="preview-card preview-metric">
              <strong>${metric.value}</strong>
              <span>${metric.label}</span>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="preview-grid">
      <article class="preview-card">
        <h2>Resumen de hoy</h2>
        <p>Tu agenda, pacientes activos y tareas de seguimiento en una sola vista.</p>
      </article>
      <article class="preview-card">
        <h2>Próxima acción</h2>
        <p>Inicia una nueva consulta y deja que Docti estructure la nota clínica.</p>
        <button type="button" class="preview-primary" data-go-step="1">Nueva Consulta</button>
      </article>
    </div>
  `;
}

function consultationTemplate() {
  return `
    <div class="preview-card">
      <h1>Seleccionar Paciente</h1>
      <label class="preview-search">Buscar paciente...</label>
      <div class="preview-patient-list">
        ${data.patients
          .map(
            (item) => `
              <button class="${item.id === state.patientId ? "is-selected" : ""}" type="button" data-patient="${item.id}">
                <span>
                  <strong>${item.name}</strong>
                  <small>${item.email}</small>
                </span>
                <b>${item.status}</b>
              </button>
            `
          )
          .join("")}
      </div>
      <div class="preview-card__footer">
        <span>Paciente seleccionado: <strong>${patient().name}</strong></span>
        <button type="button" class="preview-primary" data-go-step="2">Continuar con ${patient().name} →</button>
      </div>
    </div>
  `;
}

function protocolTemplate() {
  return `
    <div class="preview-grid">
      <article class="preview-card">
        <h2>${patient().name}</h2>
        <p>${patient().email}</p>
        <p class="preview-muted">Estado actual: ${patient().status}</p>
      </article>
      <article class="preview-card">
        <h1>Motivo / Protocolo</h1>
        <div class="preview-options">
          ${data.protocols
            .map(
              (item) => `
                <button class="${item === state.protocol ? "is-selected" : ""}" type="button" data-protocol="${item}">
                  ${item}
                </button>
              `
            )
            .join("")}
        </div>
        <button type="button" class="preview-primary" data-go-step="3">Generar nota médica →</button>
      </article>
    </div>
  `;
}

function noteTemplate() {
  return `
    <div class="preview-grid">
      <article class="preview-card">
        <h2>Resumen automático</h2>
        <ul class="preview-list">
          ${data.note.summary.map((item) => `<li>${item}</li>`).join("")}
          <li>Protocolo: ${state.protocol}</li>
        </ul>
      </article>
      <article class="preview-card">
        <h1>Nota Médica</h1>
        <div class="soap-note">
          <p><strong>S:</strong> ${data.note.soap.s}</p>
          <p><strong>O:</strong> ${data.note.soap.o}</p>
          <p><strong>A:</strong> ${data.note.soap.a}</p>
          <p><strong>P:</strong> ${data.note.soap.p}</p>
        </div>
        <div class="preview-card__footer">
          <button type="button">Enviar por WhatsApp</button>
          <button type="button" class="preview-primary" data-go-step="4">Guardar en expediente</button>
        </div>
      </article>
    </div>
  `;
}

function expedienteTemplate() {
  return `
    <div class="preview-card">
      <h1>Expediente / Pipeline</h1>
      <div class="preview-kanban">
        ${Object.entries(data.kanban)
          .map(
            ([stage, names]) => `
              <section>
                <h3>${stage}</h3>
                ${names.map((name) => `<p>${name}</p>`).join("")}
              </section>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function calendarTemplate() {
  return `
    <div class="preview-card">
      <h1>Calendario</h1>
      <div class="preview-calendar">
        ${data.calendar
          .map(
            (day) => `
              <section>
                <h3>${day.day}</h3>
                ${day.slots.map((slot) => `<p>${slot}</p>`).join("")}
              </section>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function voiceTemplate() {
  return `
    <div class="preview-grid">
      <article class="preview-card">
        <span class="preview-badge">DEMO SIMULADO</span>
        <h1>Recetas & Voz</h1>
        <div class="voice-wave">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="preview-transcript">${data.voice.transcript}</p>
      </article>
      <article class="preview-card">
        <h2>Documento generado</h2>
        <p>${data.voice.prescription}</p>
        <button type="button" class="preview-primary">Nota médica lista en 00:05</button>
      </article>
    </div>
  `;
}

function renderBody() {
  const templates = [
    dashboardTemplate,
    consultationTemplate,
    protocolTemplate,
    noteTemplate,
    expedienteTemplate,
    calendarTemplate,
    voiceTemplate,
  ];

  root.querySelector("[data-demo-body]").innerHTML = templates[state.step]();
}

function render() {
  renderSidebar();
  renderHeader();
  renderInnerSteps();
  renderBody();
}

root.addEventListener("click", (event) => {
  const goStep = event.target.closest("[data-go-step]");
  const patientButton = event.target.closest("[data-patient]");
  const protocolButton = event.target.closest("[data-protocol]");

  if (goStep) {
    state.step = Number(goStep.dataset.goStep);
    render();
  }

  if (patientButton) {
    state.patientId = patientButton.dataset.patient;
    render();
  }

  if (protocolButton) {
    state.protocol = protocolButton.dataset.protocol;
    render();
  }
});

root.querySelector("[data-prev-step]").addEventListener("click", () => {
  state.step = Math.max(0, state.step - 1);
  render();
});

root.querySelector("[data-next-step]").addEventListener("click", () => {
  state.step = state.step === data.steps.length - 1 ? 0 : state.step + 1;
  render();
});

render();
