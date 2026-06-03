window.doctiPreviewData = {
  doctor: {
    name: "Dr. Mendez",
    clinic: "Clinica Dr. Mendez",
  },
  metrics: [
    { label: "Consultas hoy", value: "14" },
    { label: "Pacientes activos", value: "128" },
    { label: "No-shows esta semana", value: "6" },
    { label: "Notas listas en menos de 1 min", value: "92%" },
  ],
  recentConsultations: [
    "Ana Garcia - Control de glucosa - 9:00 AM",
    "Luis Torres - Consulta general - 10:15 AM",
    "Maria Ruiz - Seguimiento - 11:30 AM",
  ],
  patients: [
    { id: "ana", name: "Ana Garcia", age: 42, tag: "Control de glucosa", status: "En consulta" },
    { id: "luis", name: "Luis Torres", age: 35, tag: "Consulta general", status: "Cita programada" },
    { id: "maria", name: "Maria Ruiz", age: 29, tag: "Chequeo completo", status: "Seguimiento" },
    { id: "pedro", name: "Pedro Salcedo", age: 57, tag: "Ultrasonido abdominal", status: "Nuevo paciente" },
    { id: "carmen", name: "Carmen Lopez", age: 46, tag: "Procedimiento ambulatorio", status: "Cita programada" },
  ],
  protocols: [
    "Consulta general",
    "Control de glucosa",
    "Ultrasonido abdominal",
    "Chequeo completo",
    "Consulta de seguimiento",
    "Procedimiento ambulatorio",
  ],
  note: {
    summary: [
      "Paciente: Ana Garcia",
      "Fecha: 3 de junio de 2026",
      "Hora: 10:38 AM",
      "Motivo: Control de glucosa",
      "Medico tratante: Dr. Mendez",
    ],
    soap: {
      subjective:
        "Paciente femenina de 42 anos con antecedente de diabetes tipo 2. Refiere mejor adherencia al tratamiento, menos episodios de mareo y registro domiciliario con glucosas mas estables durante la ultima semana.",
      objective:
        "Glucosa capilar en consulta: 121 mg/dL. Presion arterial: 118/76. Frecuencia cardiaca: 78 lpm. Sin signos de deshidratacion ni sintomas de alarma.",
      assessment:
        "Evolucion favorable del control glucemico. Persisten oportunidades de mejora en constancia alimentaria y seguimiento de actividad fisica.",
      plan:
        "Mantener metformina actual. Reforzar plan nutricional. Solicitar HbA1c en proxima visita. Seguimiento en 6 semanas. Compartir resumen y recordatorio por WhatsApp.",
    },
  },
  kanban: {
    "Nuevo paciente": ["Pedro Salcedo", "Julia Ortega"],
    "Cita programada": ["Luis Torres", "Carmen Lopez"],
    "En consulta": ["Ana Garcia"],
    Seguimiento: ["Maria Ruiz", "Daniel Campos"],
  },
  calendar: [
    { day: "Lun", slots: ["9:00 Control de glucosa", "11:00 Consulta general"] },
    { day: "Mar", slots: ["8:30 Chequeo completo", "2:00 Seguimiento"] },
    { day: "Mie", slots: ["10:00 Ultrasonido", "3:30 Nuevo paciente"] },
    { day: "Jue", slots: ["9:15 Consulta general", "1:00 Procedimiento"] },
    { day: "Vie", slots: ["8:00 Seguimiento", "12:30 Control de glucosa"] },
  ],
  voice: {
    consulta: {
      headline: "Demo simulado de consulta",
      transcript:
        "Paciente con diabetes tipo 2 en seguimiento. Refiere menos fatiga, mejor adherencia al tratamiento y glucosas mas estables esta semana. Se revisan signos vitales, no hay sintomas de alarma y se mantiene conducta actual con seguimiento en seis semanas.",
      output:
        "SOAP generado: evolucion favorable, parametros estables, continuar tratamiento, reforzar nutricion y solicitar HbA1c en proxima visita.",
    },
    receta: {
      headline: "Demo simulado de receta medica",
      transcript:
        "Metformina 850 mg cada 12 horas por via oral durante 30 dias. Continuar monitoreo capilar de glucosa y repetir laboratorios de control previo a la proxima consulta.",
      output:
        "Receta generada: metformina 850 mg VO cada 12 horas x 30 dias. Indicaciones complementarias: monitoreo y control en seguimiento.",
    },
  },
};
