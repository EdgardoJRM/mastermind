// Timer Display Logic - Pantalla de Proyección
class TimerDisplay {
  constructor() {
    this.currentSessionId = null;
    this.isRunning = false;
    this.sessionStartTime = null;
    this.pausedTime = 0;
    this.displayInterval = null;

    this.initializeElements();
    this.setupEventListeners();
    this.startClockUpdate();
    this.startDisplayUpdate();
  }

  initializeElements() {
    this.displayCurrentTime = document.getElementById('displayCurrentTime');
    this.displayPresenter = document.getElementById('displayPresenter');
    this.displayTitle = document.getElementById('displayTitle');
    this.displayTimer = document.getElementById('displayTimer');
    this.displayTimerLabel = document.getElementById('displayTimerLabel');
    this.displayProgressBar = document.getElementById('displayProgressBar');
    this.displayStatus = document.getElementById('displayStatus');
    this.nextSessionDisplay = document.getElementById('nextSessionDisplay');
    this.elapsedDisplay = document.getElementById('elapsedDisplay');
    this.sessionNumberDisplay = document.getElementById('sessionNumberDisplay');
  }

  setupEventListeners() {
    // Escuchar cambios en Local Storage desde el panel de control
    window.addEventListener('storage', (e) => {
      if (e.key === 'timerState') {
        this.updateFromStorage();
      }
    });
  }

  updateFromStorage() {
    const state = localStorage.getItem('timerState');
    if (state) {
      const data = JSON.parse(state);
      this.currentSessionId = data.currentSessionId;
      this.isRunning = data.isRunning;
      this.sessionStartTime = data.sessionStartTime;
      this.pausedTime = data.pausedTime;

      if (this.currentSessionId) {
        const session = AGENDA.find(s => s.id === this.currentSessionId);
        if (session) {
          this.updateSessionDisplay(session);
        }
      }
    }
  }

  updateSessionDisplay(session) {
    this.displayPresenter.textContent = session.presentador || 'Evento';
    this.displayTitle.textContent = session.titulo;

    const nextSession = getNextSession(session.id);
    if (nextSession) {
      this.nextSessionDisplay.textContent = `${nextSession.inicio} - ${nextSession.titulo}`;
    } else {
      this.nextSessionDisplay.textContent = 'Fin del evento';
    }

    // Mostrar número de sesión
    const sessionIndex = AGENDA.findIndex(s => s.id === session.id);
    this.sessionNumberDisplay.textContent = `${sessionIndex + 1} de ${AGENDA.length}`;
  }

  startClockUpdate() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.displayCurrentTime.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  startDisplayUpdate() {
    this.displayInterval = setInterval(() => {
      this.updateDisplay();
    }, 100);
  }

  updateDisplay() {
    if (!this.currentSessionId || !this.isRunning) {
      // Si no hay sesión activa, intentar cargar del storage
      const state = localStorage.getItem('timerState');
      if (state) {
        const data = JSON.parse(state);
        if (data.currentSessionId) {
          this.currentSessionId = data.currentSessionId;
          this.isRunning = data.isRunning;
          this.sessionStartTime = data.sessionStartTime;
          this.pausedTime = data.pausedTime;
          
          // Actualizar información de sesión
          const session = AGENDA.find(s => s.id === data.currentSessionId);
          if (session) {
            this.updateSessionDisplay(session);
          }
        }
      }
    }

    if (!this.currentSessionId) {
      this.displayTimer.textContent = '--:--';
      this.elapsedDisplay.textContent = '00:00';
      this.displayStatus.textContent = 'Esperando...';
      this.displayStatus.className = 'display-status waiting';
      return;
    }

    const session = AGENDA.find(s => s.id === this.currentSessionId);
    if (!session) return;

    if (this.isRunning && this.sessionStartTime) {
      const elapsed = Date.now() - this.sessionStartTime;
      const sessionDurationMs = getSessionDuration(session) * 60 * 1000;
      const remaining = Math.max(0, sessionDurationMs - elapsed);

      const remainingMin = Math.floor(remaining / 60000);
      const remainingSec = Math.floor((remaining % 60000) / 1000);
      this.displayTimer.textContent = `${String(remainingMin).padStart(2, '0')}:${String(remainingSec).padStart(2, '0')}`;

      // Mostrar tiempo transcurrido
      const elapsedMin = Math.floor(elapsed / 60000);
      const elapsedSec = Math.floor((elapsed % 60000) / 1000);
      this.elapsedDisplay.textContent = `${String(elapsedMin).padStart(2, '0')}:${String(elapsedSec).padStart(2, '0')}`;

      const progress = (elapsed / sessionDurationMs) * 100;
      this.displayProgressBar.style.width = Math.min(progress, 100) + '%';

      // Actualizar estado y colores
      if (elapsed > sessionDurationMs) {
        this.displayStatus.textContent = '⏰ TIEMPO PASADO';
        this.displayStatus.className = 'display-status overtime';
        this.displayProgressBar.classList.add('overtime');
      } else if (remaining < 5 * 60 * 1000) {
        this.displayStatus.textContent = '⚠️ ÚLTIMOS 5 MINUTOS';
        this.displayStatus.className = 'display-status warning';
        this.displayProgressBar.classList.remove('overtime');
        this.displayProgressBar.classList.add('warning');
      } else {
        this.displayStatus.textContent = '✓ En Tiempo';
        this.displayStatus.className = 'display-status ontime';
        this.displayProgressBar.classList.remove('warning', 'overtime');
      }
    } else {
      this.displayTimer.textContent = '--:--';
      this.elapsedDisplay.textContent = '00:00';
      this.displayStatus.textContent = 'Pausado';
      this.displayStatus.className = 'display-status paused';
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.timerDisplay = new TimerDisplay();
});
