// Timer Control Logic - Panel de Control
class TimerControl {
  constructor() {
    this.currentSessionId = null;
    this.isRunning = false;
    this.isPaused = false;
    this.startTime = null;
    this.pausedTime = 0;
    this.sessionStartTime = null;
    this.timerInterval = null;

    this.initializeElements();
    this.setupEventListeners();
    this.loadState();
    this.populateSessionSelect();
    this.startClockUpdate();
  }

  initializeElements() {
    this.sessionSelect = document.getElementById('sessionSelect');
    this.startBtn = document.getElementById('startBtn');
    this.pauseBtn = document.getElementById('pauseBtn');
    this.resumeBtn = document.getElementById('resumeBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.minusBtn = document.getElementById('minusBtn');
    this.plusBtn = document.getElementById('plusBtn');
    this.timeAdjust = document.getElementById('timeAdjust');

    this.sessionInfo = document.getElementById('sessionInfo');
    this.sessionTitle = document.getElementById('sessionTitle');
    this.sessionPresenter = document.getElementById('sessionPresenter');
    this.sessionStart = document.getElementById('sessionStart');
    this.sessionEnd = document.getElementById('sessionEnd');
    this.sessionDuration = document.getElementById('sessionDuration');

    this.timerStatus = document.getElementById('timerStatus');
    this.elapsedTime = document.getElementById('elapsedTime');
    this.remainingTime = document.getElementById('remainingTime');
    this.progressBar = document.getElementById('progressBar');
    this.currentTime = document.getElementById('currentTime');
  }

  setupEventListeners() {
    this.sessionSelect.addEventListener('change', (e) => this.selectSession(e.target.value));
    this.startBtn.addEventListener('click', () => this.startTimer());
    this.pauseBtn.addEventListener('click', () => this.pauseTimer());
    this.resumeBtn.addEventListener('click', () => this.resumeTimer());
    this.nextBtn.addEventListener('click', () => this.nextSession());
    this.minusBtn.addEventListener('click', () => this.adjustTime(-5));
    this.plusBtn.addEventListener('click', () => this.adjustTime(5));

    // Escuchar cambios en Local Storage desde otras ventanas
    window.addEventListener('storage', (e) => {
      if (e.key === 'timerState') {
        this.loadState();
      }
    });
  }

  populateSessionSelect() {
    this.sessionSelect.innerHTML = '<option value="">-- Selecciona una sesión --</option>';
    AGENDA.forEach(session => {
      const option = document.createElement('option');
      option.value = session.id;
      option.textContent = `${session.inicio} - ${session.fin}: ${session.titulo}`;
      this.sessionSelect.appendChild(option);
    });
  }

  selectSession(sessionId) {
    if (!sessionId) {
      this.currentSessionId = null;
      this.sessionInfo.style.display = 'none';
      this.stopTimer();
      this.saveState();
      return;
    }

    this.currentSessionId = parseInt(sessionId);
    const session = AGENDA.find(s => s.id === this.currentSessionId);

    if (session) {
      this.updateSessionInfo(session);
      this.sessionInfo.style.display = 'block';
      this.stopTimer();
      this.resetTimer();
      this.saveState();
    }
  }

  updateSessionInfo(session) {
    this.sessionTitle.textContent = session.titulo;
    this.sessionPresenter.textContent = session.presentador || '-';
    this.sessionStart.textContent = session.inicio;
    this.sessionEnd.textContent = session.fin;
    const duration = getSessionDuration(session);
    this.sessionDuration.textContent = `${duration} minutos`;
  }

  startTimer() {
    if (!this.currentSessionId) {
      alert('Por favor selecciona una sesión primero');
      return;
    }

    if (this.isRunning) return;

    this.isRunning = true;
    this.isPaused = false;
    this.startTime = Date.now() - this.pausedTime;
    this.sessionStartTime = this.startTime;

    this.updateButtonStates();
    this.timerStatus.textContent = 'En Ejecución';
    this.saveState();

    this.timerInterval = setInterval(() => this.updateTimer(), 100);
  }

  pauseTimer() {
    if (!this.isRunning) return;

    this.isRunning = false;
    this.isPaused = true;
    this.pausedTime = Date.now() - this.startTime;

    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.updateButtonStates();
    this.timerStatus.textContent = 'Pausado';
    this.saveState();
  }

  resumeTimer() {
    if (this.isRunning || !this.isPaused) return;

    this.isRunning = true;
    this.isPaused = false;
    this.startTime = Date.now() - this.pausedTime;

    this.updateButtonStates();
    this.timerStatus.textContent = 'En Ejecución';
    this.saveState();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => this.updateTimer(), 100);
  }

  stopTimer() {
    this.isRunning = false;
    this.isPaused = false;
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.updateButtonStates();
    this.timerStatus.textContent = 'Detenido';
    this.saveState();
  }

  resetTimer() {
    this.stopTimer();
    this.pausedTime = 0;
    this.startTime = null;
    this.sessionStartTime = null;
    this.elapsedTime.textContent = '00:00';
    this.remainingTime.textContent = '00:00';
    this.progressBar.style.width = '0%';
    this.timeAdjust.value = '0';
    this.saveState();
  }

  nextSession() {
    if (!this.currentSessionId) return;

    const nextSession = getNextSession(this.currentSessionId);
    if (nextSession) {
      this.sessionSelect.value = nextSession.id;
      this.selectSession(nextSession.id);
    }
  }

  adjustTime(minutes) {
    if (!this.currentSessionId) return;
    if (!this.isRunning && !this.isPaused) return;

    const session = AGENDA.find(s => s.id === this.currentSessionId);
    if (!session) return;

    const adjustmentMs = minutes * 60 * 1000;
    
    // Ajustar el tiempo de inicio de la sesión
    this.sessionStartTime -= adjustmentMs;
    
    this.updateTimer();
    this.saveState();
  }

  updateTimer() {
    if (!this.currentSessionId) return;

    const session = AGENDA.find(s => s.id === this.currentSessionId);
    if (!session) return;

    const elapsed = Date.now() - this.sessionStartTime;
    const sessionDurationMs = getSessionDuration(session) * 60 * 1000;
    const remaining = Math.max(0, sessionDurationMs - elapsed);

    const elapsedMin = Math.floor(elapsed / 60000);
    const elapsedSec = Math.floor((elapsed % 60000) / 1000);
    this.elapsedTime.textContent = `${String(elapsedMin).padStart(2, '0')}:${String(elapsedSec).padStart(2, '0')}`;

    const remainingMin = Math.floor(remaining / 60000);
    const remainingSec = Math.floor((remaining % 60000) / 1000);
    this.remainingTime.textContent = `${String(remainingMin).padStart(2, '0')}:${String(remainingSec).padStart(2, '0')}`;

    const progress = (elapsed / sessionDurationMs) * 100;
    this.progressBar.style.width = Math.min(progress, 100) + '%';

    // Cambiar color si se pasó del tiempo
    if (elapsed > sessionDurationMs) {
      this.progressBar.classList.add('overtime');
    } else if (remaining < 5 * 60 * 1000) {
      this.progressBar.classList.add('warning');
      this.progressBar.classList.remove('overtime');
    } else {
      this.progressBar.classList.remove('warning', 'overtime');
    }

    this.saveState();
  }

  updateButtonStates() {
    this.startBtn.disabled = this.isRunning || this.isPaused;
    this.pauseBtn.disabled = !this.isRunning;
    this.resumeBtn.disabled = !this.isPaused;
  }

  startClockUpdate() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.currentTime.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  saveState() {
    const state = {
      currentSessionId: this.currentSessionId,
      isRunning: this.isRunning,
      isPaused: this.isPaused,
      pausedTime: this.pausedTime,
      sessionStartTime: this.sessionStartTime,
      timestamp: Date.now()
    };
    localStorage.setItem('timerState', JSON.stringify(state));
  }

  loadState() {
    const state = localStorage.getItem('timerState');
    if (state) {
      const data = JSON.parse(state);
      this.currentSessionId = data.currentSessionId;
      this.pausedTime = data.pausedTime;
      this.sessionStartTime = data.sessionStartTime;

      if (data.currentSessionId) {
        this.sessionSelect.value = data.currentSessionId;
        const session = AGENDA.find(s => s.id === data.currentSessionId);
        if (session) {
          this.updateSessionInfo(session);
          this.sessionInfo.style.display = 'block';
        }
      }

      if (data.isRunning) {
        this.startTimer();
      } else if (data.isPaused) {
        this.isPaused = true;
        this.updateButtonStates();
        this.timerStatus.textContent = 'Pausado';
        this.updateTimer();
      }
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.timerControl = new TimerControl();
});
