# 🚀 Guía de Despliegue en Vercel

## Opción 1: Despliegue Automático (Recomendado)

### Paso 1: Crear Repositorio Git

```bash
cd "/Users/gardo/Creado mi video con IA"
git init
git add .
git commit -m "Initial commit: Event Timer System"
```

### Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `event-timer` (o el que prefieras)
4. Descripción: "Panel de Control de Tiempos para Eventos"
5. Haz clic en "Create repository"

### Paso 3: Conectar Repositorio Local

```bash
git remote add origin https://github.com/tu-usuario/event-timer.git
git branch -M main
git push -u origin main
```

### Paso 4: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Busca y selecciona `event-timer`
5. Haz clic en "Import"
6. Vercel desplegará automáticamente

### Paso 5: Acceder a tu Aplicación

Tu URL será algo como:
```
https://event-timer.vercel.app/timer.html
```

---

## Opción 2: Despliegue Manual

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Desplegar

```bash
cd "/Users/gardo/Creado mi video con IA"
vercel
```

Sigue las instrucciones en pantalla.

---

## Opción 3: Drag & Drop en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Arrastra la carpeta `Creado mi video con IA` al área de drop
4. Vercel desplegará automáticamente

---

## Después del Despliegue

### Actualizar Agenda

Si necesitas cambiar la agenda después de desplegar:

1. Edita `agenda.js` localmente
2. Haz commit y push:
   ```bash
   git add agenda.js
   git commit -m "Update agenda"
   git push
   ```
3. Vercel se actualizará automáticamente

### Dominio Personalizado

1. Ve a tu proyecto en Vercel
2. Haz clic en "Settings"
3. Ve a "Domains"
4. Añade tu dominio personalizado

---

## Solucionar Problemas de Despliegue

| Problema | Solución |
|----------|----------|
| "Build failed" | Verifica que todos los archivos estén en la carpeta |
| "404 Not Found" | Asegúrate de acceder a `/timer.html` |
| "Archivos no se actualizan" | Limpia caché (Ctrl+Shift+R) |
| "Local Storage no funciona" | Verifica que estés en HTTPS (Vercel lo proporciona) |

---

## URLs Importantes

- **Aplicación**: `https://tu-dominio.vercel.app/timer.html`
- **Página de Pruebas**: `https://tu-dominio.vercel.app/test.html`
- **Dashboard Vercel**: `https://vercel.com/dashboard`

---

## Consejos

1. **Usa HTTPS**: Vercel proporciona HTTPS automáticamente
2. **Caché**: Los navegadores cachean archivos, usa Ctrl+Shift+R para limpiar
3. **Monitoreo**: Vercel proporciona analytics en el dashboard
4. **Backups**: Git mantiene historial de cambios

---

## Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de GitHub](https://docs.github.com)
- [Comunidad de Vercel](https://vercel.com/support)

---

**¡Tu aplicación estará en línea en minutos!** 🎉
