#!/bin/bash

# Script para iniciar el servidor local del Panel de Control de Tiempos

echo "🚀 Iniciando servidor local..."
echo ""
echo "📍 Acceso:"
echo "   Panel de Control: http://localhost:8000/timer.html"
echo "   Página de Pruebas: http://localhost:8000/test.html"
echo ""
echo "📖 Documentación:"
echo "   - README.md: Documentación completa"
echo "   - QUICK_START.md: Guía rápida"
echo "   - IMPLEMENTATION_SUMMARY.md: Resumen de implementación"
echo ""
echo "⏹️  Para detener el servidor, presiona Ctrl+C"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
