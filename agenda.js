// Agenda completa del evento
const AGENDA = [
  {
    id: 1,
    inicio: "08:00",
    fin: "08:59",
    titulo: "Registro & Desayuno",
    presentador: "",
    tipo: "break"
  },
  {
    id: 2,
    inicio: "09:00",
    fin: "09:10",
    titulo: "Apertura – Bienvenida",
    presentador: "",
    tipo: "session"
  },
  {
    id: 3,
    inicio: "09:10",
    fin: "09:50",
    titulo: "El Poder de la Marca Personal",
    presentador: "Edgardo Hernández",
    tipo: "session"
  },
  {
    id: 4,
    inicio: "09:50",
    fin: "10:45",
    titulo: "Reconocimientos",
    presentador: "",
    detalles: [
      "Elizabeth Rodríguez - $10,000",
      "Luis Ramos - $10,000",
      "Carmen González - $10,000",
      "María Cancel - $100,000",
      "Edgardo Hernández - $100,000"
    ],
    tipo: "session"
  },
  {
    id: 5,
    inicio: "10:45",
    fin: "11:00",
    titulo: "AM Break Estratégico",
    presentador: "",
    tipo: "break"
  },
  {
    id: 6,
    inicio: "11:00",
    fin: "12:00",
    titulo: "Videos/Clip con IA para tu Negocio",
    presentador: "Elizabeth Báez",
    tipo: "session"
  },
  {
    id: 7,
    inicio: "12:00",
    fin: "13:30",
    titulo: "Almuerzo",
    presentador: "",
    tipo: "break"
  },
  {
    id: 8,
    inicio: "13:45",
    fin: "15:00",
    titulo: "Comunicación: la habilidad que construye puentes",
    presentador: "Bengie Rivera",
    tipo: "session"
  },
  {
    id: 9,
    inicio: "15:00",
    fin: "15:15",
    titulo: "PM Break Estratégico",
    presentador: "",
    tipo: "break"
  },
  {
    id: 10,
    inicio: "15:15",
    fin: "17:00",
    titulo: "El lenguaje del cliente ideal con la AI",
    presentador: "Edgardo Sr. y Edgardo Jr.",
    tipo: "session"
  },
  {
    id: 11,
    inicio: "17:00",
    fin: "17:30",
    titulo: "Step into your calling… Cierre",
    presentador: "Edgardo Hernández",
    tipo: "closing"
  }
];

// Función para convertir tiempo HH:MM a minutos
function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

// Función para convertir minutos a HH:MM
function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

// Función para obtener la duración de una sesión en minutos
function getSessionDuration(session) {
  const startMin = timeToMinutes(session.inicio);
  const endMin = timeToMinutes(session.fin);
  return endMin - startMin;
}

// Función para obtener la sesión actual basada en la hora
function getCurrentSession(currentTime) {
  const currentMin = timeToMinutes(currentTime);
  return AGENDA.find(session => {
    const startMin = timeToMinutes(session.inicio);
    const endMin = timeToMinutes(session.fin);
    return currentMin >= startMin && currentMin < endMin;
  });
}

// Función para obtener la próxima sesión
function getNextSession(currentSessionId) {
  const currentIndex = AGENDA.findIndex(s => s.id === currentSessionId);
  if (currentIndex < AGENDA.length - 1) {
    return AGENDA[currentIndex + 1];
  }
  return null;
}
