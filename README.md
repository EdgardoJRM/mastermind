# Panel de Control de Tiempos - Evento

Un sistema profesional de control de tiempos en tiempo real para eventos, con dos vistas sincronizadas:
- **Panel de Control**: Para que el operador maneje los tiempos
- **Pantalla de Proyección**: Para mostrar en un monitor/proyector grande

## Características

✅ **Sincronización en Tiempo Real**: Usa Local Storage para sincronizar entre dos ventanas/pestañas
✅ **Dos Vistas Independientes**: Control y Proyección
✅ **Indicadores Visuales**: Verde (en tiempo), Amarillo (últimos 5 min), Rojo (pasado)
✅ **Información Completa**: Presentador, sesión, hora general, tiempo restante
✅ **Controles Intuitivos**: Iniciar, pausar, reanudar, siguiente sesión
✅ **Ajuste Manual**: Posibilidad de ajustar tiempos manualmente
✅ **Información del Evento**: Almuerzo, mastermind, cierre

## Cómo Usar

### Opción 1: Localmente (Recomendado para Pruebas)

1. Abre dos ventanas/pestañas del navegador
2. En ambas, ve a: `http://localhost:8000/timer.html`
3. En una ventana, selecciona "Panel de Control" (ya está seleccionado por defecto)
4. En la otra ventana, selecciona "Pantalla de Proyección"
5. Ahora puedes controlar desde una y ver en la otra

### Opción 2: Desplegar en Vercel

1. Crea un repositorio Git en la carpeta:
   ```bash
   cd "/Users/gardo/Creado mi video con IA"
   git init
   git add .
   git commit -m "Initial commit: Event Timer System"
   ```

2. Sube a GitHub y conecta con Vercel
3. Vercel desplegará automáticamente

## Estructura de Archivos

```
├── timer.html              # Página principal (ambas vistas)
├── agenda.js               # Datos de la agenda del evento
├── timer-control.js        # Lógica del panel de control
├── timer-display.js        # Lógica de la pantalla de proyección
├── timer-main.js           # Manejo de vistas
├── timer-styles.css        # Estilos para ambas vistas
└── README.md              # Este archivo
```

## Flujo de Datos

```
Panel de Control (timer-control.js)
    ↓
Local Storage (evento 'storage')
    ↓
Pantalla de Proyección (timer-display.js)
```

## Funcionalidades del Panel de Control

1. **Seleccionar Sesión**: Dropdown con todas las sesiones del evento
2. **Información de Sesión**: Muestra título, presentador, horarios, duración
3. **Controles**:
   - **Iniciar**: Comienza el temporizador
   - **Pausar**: Pausa el temporizador
   - **Reanudar**: Continúa desde donde se pausó
   - **Siguiente**: Va a la siguiente sesión
4. **Ajuste Manual**: Botones para +5/-5 minutos
5. **Estado**: Muestra tiempo transcurrido, restante y estado actual
6. **Barra de Progreso**: Visual del progreso de la sesión

## Funcionalidades de la Pantalla de Proyección

1. **Hora Actual**: En la esquina superior derecha
2. **Información de Sesión**: Presentador y título de la sesión
3. **Temporizador Grande**: Tiempo restante en números enormes
4. **Barra de Progreso**: Visual del progreso
5. **Indicador de Estado**: 
   - ✓ En Tiempo (Verde)
   - ⚠️ Últimos 5 Minutos (Amarillo)
   - ⏰ Tiempo Pasado (Rojo)
6. **Próxima Sesión**: Información de la siguiente sesión

## Agenda del Evento

La agenda está definida en `agenda.js` con las siguientes sesiones:

- 08:00 - 08:59: Registro & Desayuno
- 09:00 - 09:10: Apertura – Bienvenida
- 09:10 - 09:50: El Poder de la Marca Personal (Edgardo Hernández)
- 09:50 - 10:45: Reconocimientos
- 10:45 - 11:00: AM Break Estratégico
- 11:00 - 12:00: Videos/Clip con IA para tu Negocio (Elizabeth Báez)
- 12:00 - 13:30: Almuerzo
- 13:45 - 15:00: Comunicación: la habilidad que construye puentes (Bengie Rivera)
- 15:00 - 15:15: PM Break Estratégico
- 15:15 - 17:00: El lenguaje del cliente ideal con la AI (Edgardo Sr. y Edgardo Jr.)
- 17:00 - 17:30: Step into your calling… Cierre (Edgardo Hernández)

## Cómo Editar la Agenda

Abre `agenda.js` y modifica el array `AGENDA` con tus sesiones. Cada sesión debe tener:

```javascript
{
  id: 1,                    // ID único
  inicio: "08:00",          // Hora de inicio (HH:MM)
  fin: "08:59",             // Hora de fin (HH:MM)
  titulo: "Nombre Sesión",  // Título de la sesión
  presentador: "Nombre",    // Nombre del presentador (opcional)
  tipo: "session"           // Tipo: session, break, closing
}
```

## Sincronización Entre Ventanas

El sistema usa el evento `storage` de JavaScript para sincronizar automáticamente entre ventanas/pestañas del mismo navegador. Esto significa:

- Cambios en el Panel de Control se reflejan instantáneamente en la Pantalla de Proyección
- Funciona en la misma máquina (localhost o Vercel)
- No requiere servidor backend

## Indicadores de Color

- **Verde**: Sesión en tiempo (tiempo restante > 5 minutos)
- **Amarillo**: Últimos 5 minutos de la sesión
- **Rojo**: Se pasó del tiempo asignado

## Consejos de Uso

1. **Abre dos ventanas**: Una para controlar, otra para proyectar
2. **Pantalla completa**: En la pantalla de proyección, presiona F11 para pantalla completa
3. **Ajustes en vivo**: Puedes ajustar tiempos manualmente si algo se atrasa
4. **Persistencia**: El estado se guarda en Local Storage, así que si recargas, mantiene el estado

## Soporte Técnico

Si tienes problemas:

1. Verifica que ambas ventanas estén en el mismo navegador
2. Abre la consola (F12) para ver si hay errores
3. Limpia el Local Storage si algo se queda pegado: `localStorage.clear()`
4. Recarga ambas ventanas

## Próximas Mejoras Posibles

- Integración con base de datos para persistencia
- Notificaciones de audio cuando se acaba el tiempo
- Historial de sesiones
- Exportar reporte de tiempos
- Integración con Zoom/Teams para mostrar en pantalla compartida

---

**Creado para**: Evento de Creando mi Video con IA
**Versión**: 1.0
**Última actualización**: 2026
