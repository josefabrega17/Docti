const data = window.doctiPreviewData;

const state = {
  step: 0,
  patientId: data.patients[0].id,
  protocol: data.protocols[1],
  voiceTab: "consulta",
};

const steps = [
  { id: "dashboard", label: "Dashboard" },
  { id: "consulta", label: "Nueva Consulta" },
  { id: "motivo", label: "Motivo / Protocolo" },
  { id: "nota", label: "Nota Medica" },
  { id: "expediente", label: "Expediente" },
  { id: "calendario", label: "Calendario" },
  { id: "voz", label: "Recetas & Voz" },
];

const root = document.querySelector("[data-preview-root]");

function selectedPatient() {
  return data.patients.find((patient) => patient.id === state.patientId) || data.patients[0];
}

function renderStepList() {
  const target = root.querySelector("[data-step-list]");

  target.innerHTML = steps
    .map(
      (step, index) => `
        <li>
          <button type="button" data-step-index="${index}" aria-current="${index === state.step ? "step" : "false"}">
            ${index + 1}. ${step.label}
          </button>
        </li>
      `
    )
    .join("");
}

function renderHeader() {
  root.querySelector("[data-step-pill]").textContent = `Paso ${state.step + 1} de ${steps.length}`;
  root.querySelector("[data-demo-title]").textContent = steps[state.step].label;
}

function dashboardTemplate() {
  return `
    <div class="toolbar">
      ${data.metrics
        .map(
          (metric) => `
            <div class="surface">
              <div class="metric__value">${metric.value}</div>
              <div class="metric__label">${metric.label}</div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="grid-2" style="margin-top:16px;">
      <div class="surface">
        <h4>Consultas recientes</h4>
        <ul class="list">
          ${data.recentConsultations.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="surface">
        <h4>Acciones rapidas</h4>
        <div class="stack">
          <a class="button button--primary" href="#preview-root" data-next-step>Nueva consulta</a>
          <button class="button button--ghost" type="button" data-demo-toast>Reagendar no-shows</button>
          <button class="button button--ghost" type="button" data-demo-toast>Enviar recordatorios</button>
        </div>
        <p class="inline-note">La version publica enfatiza velocidad operativa, seguimiento y menos carga administrativa para el medico.</p>
      </div>
    </div>
  `;
}

function consultationTemplate() {
  return `
    <div class="surface">
      <h4>Selecciona un paciente</h4>
      <p class="inline-note">Este paso recrea la entrada a una nueva consulta dentro de Docti Pro.</p>
      <div class="patient-grid" style="margin-top:16px;">
        ${data.patients
          .map(
            (patient) => `
              <article class="patient-card ${patient.id === state.patientId ? "is-selected" : ""}">
                <button type="button" data-patient-id="${patient.id}">
                  <strong>${patient.name}</strong>
                  <p class="inline-note">${patient.age} anos · ${patient.tag}</p>
                  <span class="status-chip">${patient.status}</span>
                </button>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function protocolTemplate() {
  const patient = selectedPatient();

  return `
    <div class="grid-2">
      <div class="surface">
        <h4>Resumen del paciente</h4>
        <p><strong>${patient.name}</strong></p>
        <p class="inline-note">${patient.age} anos · Estado actual: ${patient.status}</p>
        <div class="divider"></div>
        <p class="inline-note">Contexto de visita anterior: ${patient.tag}. Flujo optimizado para iniciar la documentacion clinica con menos friccion.</p>
      </div>
      <div class="surface">
        <h4>Motivo / protocolo</h4>
        <div class="protocol-list">
          ${data.protocols
            .map(
              (protocol) => `
                <button type="button" data-protocol="${protocol}" class="${protocol === state.protocol ? "is-selected" : ""}">
                  ${protocol}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="stack" style="margin-top:16px;">
          <button class="button button--soft" type="button" data-go-step="6">Abrir demo de voz</button>
          <button class="button button--primary" type="button" data-go-step="3">Generar nota medica</button>
        </div>
      </div>
    </div>
  `;
}

function noteTemplate() {
  return `
    <div class="note-grid">
      <aside class="surface">
        <h4>Ficha de consulta</h4>
        <ul class="list">
          ${data.note.summary.map((item) => `<li>${item}</li>`).join("")}
          <li>Protocolo: ${state.protocol}</li>
        </ul>
      </aside>
      <section class="surface">
        <h4>Nota SOAP</h4>
        <p><strong>Subjetivo:</strong> ${data.note.soap.subjective}</p>
        <p><strong>Objetivo:</strong> ${data.note.soap.objective}</p>
        <p><strong>Analisis:</strong> ${data.note.soap.assessment}</p>
        <p><strong>Plan:</strong> ${data.note.soap.plan}</p>
        <div class="stack" style="margin-top:18px;">
          <button class="button button--ghost" type="button" data-demo-toast>Enviar por email</button>
          <button class="button button--ghost" type="button" data-demo-toast>Enviar por WhatsApp</button>
          <button class="button button--ghost" type="button" data-demo-toast>Descargar PDF</button>
          <button class="button button--primary" type="button" data-go-step="4">Ver expediente</button>
        </div>
      </section>
    </div>
  `;
}

function expedienteTemplate() {
  return `
    <div class="kanban">
      ${Object.entries(data.kanban)
        .map(
          ([stage, names]) => `
            <section class="kanban-column">
              <h4>${stage}</h4>
              ${names
                .map(
                  (name) => `
                    <div class="surface" style="margin-top:10px; box-shadow:none;">
                      <strong>${name}</strong>
                    </div>
                  `
                )
                .join("")}
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function calendarTemplate() {
  return `
    <div class="calendar">
      ${data.calendar
        .map(
          (day) => `
            <section class="calendar-slot">
              <h4>${day.day}</h4>
              <ul class="list">
                ${day.slots.map((slot) => `<li>${slot}</li>`).join("")}
              </ul>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function voiceTemplate() {
  const voice = data.voice[state.voiceTab];

  return `
    <div class="surface" style="margin-bottom:16px;">
      <div class="voice-tabs">
        <button type="button" class="voice-tab ${state.voiceTab === "consulta" ? "is-active" : ""}" data-voice-tab="consulta">Consulta</button>
        <button type="button" class="voice-tab ${state.voiceTab === "receta" ? "is-active" : ""}" data-voice-tab="receta">Receta medica</button>
      </div>
      <p class="inline-note" style="margin-top:14px;">DEMO SIMULADO. Este flujo conserva la narrativa publica sin prometer infraestructura clinica real.</p>
    </div>
    <div class="voice-panels">
      <section class="voice-card">
        <h4>${voice.headline}</h4>
        <p class="transcript">${voice.transcript}</p>
      </section>
      <section class="voice-card">
        <h4>Salida generada</h4>
        <p class="transcript">${voice.output}</p>
        <div class="stack" style="margin-top:18px;">
          <button class="button button--ghost" type="button" data-demo-toast>Usar en nota</button>
          <button class="button button--primary" type="button" data-demo-toast>Emitir documento</button>
        </div>
      </section>
    </div>
  `;
}

function renderBody() {
  const body = root.querySelector("[data-demo-body]");
  const templates = [
    dashboardTemplate,
    consultationTemplate,
    protocolTemplate,
    noteTemplate,
    expedienteTemplate,
    calendarTemplate,
    voiceTemplate,
  ];

  body.innerHTML = templates[state.step]();
}

function attachEvents() {
  root.querySelectorAll("[data-step-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.step = Number(button.dataset.stepIndex);
      render();
    });
  });

  root.querySelectorAll("[data-next-step]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.step = Math.min(state.step + 1, steps.length - 1);
      render();
    });
  });

  root.querySelectorAll("[data-go-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.step = Number(button.dataset.goStep);
      render();
    });
  });

  root.querySelectorAll("[data-patient-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.patientId = button.dataset.patientId;
      render();
    });
  });

  root.querySelectorAll("[data-protocol]").forEach((button) => {
    button.addEventListener("click", () => {
      state.protocol = button.dataset.protocol;
      render();
    });
  });

  root.querySelectorAll("[data-voice-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.voiceTab = button.dataset.voiceTab;
      render();
    });
  });

  document.querySelectorAll("[data-demo-toast]").forEach((button) => {
    button.addEventListener("click", () => {
      const toast = document.createElement("div");
      toast.textContent = "Accion simulada para el demo publico.";
      toast.setAttribute(
        "style",
        [
          "position:fixed",
          "right:24px",
          "bottom:24px",
          "background:#0d1b2a",
          "color:white",
          "padding:12px 16px",
          "border-radius:16px",
          "font-family:Instrument Sans, sans-serif",
          "font-size:14px",
          "box-shadow:0 18px 36px rgba(13,27,42,0.22)",
          "z-index:30",
        ].join(";")
      );

      document.body.appendChild(toast);
      window.setTimeout(() => toast.remove(), 2200);
    });
  });
}

function render() {
  renderStepList();
  renderHeader();
  renderBody();
  attachEvents();
}

render();
