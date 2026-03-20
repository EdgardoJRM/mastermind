// Main Timer Logic - Manejo de Vistas
class TimerApp {
  constructor() {
    this.currentView = 'control';
    this.initializeViewSelector();
  }

  initializeViewSelector() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const views = document.querySelectorAll('.view');

    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const viewName = btn.dataset.view;
        this.switchView(viewName, btn, views);
      });
    });
  }

  switchView(viewName, btn, views) {
    // Actualizar botones
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Actualizar vistas
    views.forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');

    this.currentView = viewName;
    localStorage.setItem('currentView', viewName);
  }

  loadSavedView() {
    const savedView = localStorage.getItem('currentView') || 'control';
    const btn = document.querySelector(`[data-view="${savedView}"]`);
    if (btn) {
      btn.click();
    }
  }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  window.timerApp = new TimerApp();
  window.timerApp.loadSavedView();
});
