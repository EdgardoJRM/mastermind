# 🎯 Guía Rápida - Panel de Control de Tiempos

## Acceso Rápido

El servidor ya está corriendo en `http://localhost:8000`

### Para Probar Localmente:

1. **Abre dos ventanas/pestañas**:
   - Ventana 1: `http://localhost:8000/timer.html` → Selecciona "Panel de Control"
   - Ventana 2: `http://localhost:8000/timer.html` → Selecciona "Pantalla de Proyección"

2. **En el Panel de Control**:
   - Selecciona una sesión del dropdown
   - Haz clic en "Iniciar"
   - Verás el temporizador en la Pantalla de Proyección

3. **Controles disponibles**:
   - ▶️ **Iniciar**: Comienza el temporizador
   - ⏸️ **Pausar**: Pausa el temporizador
   - ▶️ **Reanudar**: Continúa desde donde se pausó
   - ⏭️ **Siguiente**: Va a la siguiente sesión
   - ➕ **+5 min**: Añade 5 minutos
   - ➖ **-5 min**: Resta 5 minutos

## Indicadores de Color

- 🟢 **Verde**: Sesión en tiempo (> 5 minutos restantes)
- 🟡 **Amarillo**: Últimos 5 minutos
- 🔴 **Rojo**: Se pasó del tiempo

## Archivos Creados

```
📁 Creado mi video con IA/
├── 📄 timer.html              ← Abre esto en el navegador
├── 📄 agenda.js               ← Datos del evento
├── 📄 timer-control.js        ← Lógica del control
├── 📄 timer-display.js        ← Lógica de proyección
├── 📄 timer-main.js           ← Manejo de vistas
├── 📄 timer-styles.css        ← Estilos
├── 📄 test.html               ← Página de pruebas
├── 📄 README.md               ← Documentación completa
└── 📄 QUICK_START.md          ← Este archivo
```

## Desplegar en Vercel

1. Crea un repositorio Git:
   ```bash
   cd "/Users/gardo/Creado mi video con IA"
   git init
   git add .
   git commit -m "Event Timer System"
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Vercel desplegará automáticamente
5. Tu URL será algo como: `https://tu-proyecto.vercel.app/timer.html`

## Editar la Agenda

Abre `agenda.js` y modifica el array `AGENDA`:

```javascript
const AGENDA = [
  {
    id: 1,
    inicio: "08:00",
    fin: "08:59",
    titulo: "Registro & Desayuno",
    presentador: "",
    tipo: "break"
  },
  // ... más sesiones
];
```

## Solucionar Problemas

| Problema | Solución |
|----------|----------|
| No se sincroniza entre ventanas | Verifica que ambas estén en el mismo navegador |
| El temporizador no aparece | Selecciona una sesión primero |
| Los estilos no cargan | Recarga la página (Ctrl+F5) |
| Local Storage lleno | Abre consola y ejecuta: `localStorage.clear()` |

## Características Principales

✅ Sincronización en tiempo real entre dos vistas
✅ Panel de control intuitivo
✅ Pantalla de proyección con números grandes
✅ Indicadores visuales de estado
✅ Información completa del evento
✅ Ajuste manual de tiempos
✅ Persistencia de estado

## Próximos Pasos

1. Prueba el sistema localmente
2. Ajusta la agenda según tus necesidades
3. Despliega en Vercel
4. Usa en tu evento

---

**¿Preguntas?** Revisa el `README.md` para documentación completa.
