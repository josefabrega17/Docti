window.doctiPreviewData = {
  steps: [
    "Dashboard",
    "Nueva Consulta",
    "Motivo / Protocolo",
    "Nota Médica",
    "Expediente",
    "Calendario",
    "Recetas & Voz",
  ],
  metrics: [
    { label: "Citas hoy", value: "8" },
    { label: "Consultas completadas", value: "42" },
    { label: "Pacientes activos", value: "89" },
    { label: "Por revisar", value: "4" },
  ],
  patients: [
    { id: "ana", name: "Ana García", email: "ana@example.com", status: "NUEVO PACIENTE" },
    { id: "luis", name: "Luis Torres", email: "luis@example.com", status: "EN CONSULTA" },
    { id: "maria", name: "María Ruiz", email: "maria@example.com", status: "SEGUIMIENTO" },
    { id: "pedro", name: "Pedro Salcedo", email: "pedro@example.com", status: "CITA PROGRAMADA" },
    { id: "carmen", name: "Carmen López", email: "carmen@example.com", status: "NUEVO PACIENTE" },
  ],
  protocols: [
    "Consulta general",
    "Control de glucosa",
    "Rinitis alérgica",
    "Seguimiento post-consulta",
    "Chequeo preventivo",
  ],
  note: {
    summary: [
      "Paciente femenina, 34 años",
      "Motivo: congestión nasal, estornudos y picazón ocular",
      "Sin fiebre, sin dificultad respiratoria",
      "Alergias conocidas: niega",
    ],
    soap: {
      s: "Refiere 5 días de rinorrea clara, estornudos frecuentes y congestión nasal. Niega fiebre o dolor torácico.",
      o: "Signos vitales estables. Mucosa nasal edematosa. Auscultación pulmonar sin hallazgos patológicos.",
      a: "Cuadro compatible con rinitis alérgica estacional.",
      p: "Loratadina 10mg cada 24 horas por 14 días. Lavados nasales con solución salina. Control si no mejora en 7 días.",
    },
  },
  kanban: {
    "Nuevo paciente": ["Ana García", "Luis Torres"],
    "Programado": ["María Ruiz"],
    "En consulta": ["Pedro Salcedo"],
    "Seguimiento": ["Carmen López", "J. Morales"],
  },
  calendar: [
    { day: "Lunes", slots: ["8:00 Ana García", "10:00 Luis Torres", "2:00 María Ruiz"] },
    { day: "Martes", slots: ["9:00 Pedro Salcedo", "10:00 Carmen López", "3:30 Control"] },
    { day: "Miércoles", slots: ["8:30 Nueva consulta", "11:00 Seguimiento", "4:00 Bloque admin"] },
    { day: "Jueves", slots: ["9:15 Consulta general", "1:00 Procedimiento", "3:00 Revisión"] },
  ],
  voice: {
    transcript:
      "Paciente femenina, 34 años. Diagnóstico: rinitis alérgica. Receto loratadina 10mg cada 24 horas por 14 días. Indicar lavados nasales y control si no mejora.",
    prescription:
      "Receta_Rinitis.pdf generado con indicaciones, firma digital y formato clínico listo para enviar.",
  },
};
