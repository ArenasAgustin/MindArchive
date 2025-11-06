# 🤖 CI/CD Configuration - MindArchive

Este documento explica el sistema de Integración Continua y Despliegue Continuo (CI/CD) configurado para MindArchive.

---

## 📋 Overview

El proyecto usa **GitHub Actions** para automatizar:

- ✅ Validación de calidad de código
- ✅ Build automático del sitio
- ✅ Deploy automático a GitHub Pages
- ✅ Verificación de enlaces rotos
- ✅ Análisis de TypeScript

---

## 🔄 Workflows Configurados

### 1. **Deploy to GitHub Pages** (`.github/workflows/deploy.yml`)

**Cuándo se ejecuta:**

- ✅ Automáticamente en cada `push` a la rama `main`
- ✅ Manualmente desde la pestaña "Actions" de GitHub
- ✅ En Pull Requests (solo validación, sin deploy)

**Qué hace:**

#### Job 1: Validate Code Quality

- Verifica tipos de TypeScript con `tsc --noEmit`
- Busca enlaces rotos en archivos markdown (básico)
- Se ejecuta siempre, incluso en PRs

#### Job 2: Build Docusaurus

- Instala dependencias con `npm ci`
- Ejecuta `npm run build`
- Verifica que el build fue exitoso
- Sube el artifact del build para deploy

#### Job 3: Deploy to GitHub Pages

- **Solo se ejecuta en push a `main`** (no en PRs)
- Despliega el sitio a GitHub Pages
- Muestra la URL del sitio desplegado

**Tiempo estimado:** 3-5 minutos

---

### 2. **Code Quality Checks** (`.github/workflows/quality-checks.yml`)

**Cuándo se ejecuta:**

- ✅ En Pull Requests a `main`
- ✅ En push a `main`

**Qué hace:**

#### Job 1: Markdown Lint

- Valida formato de archivos `.md` en `docs/`
- Usa configuración de `.markdownlint.json`
- No falla el build, solo reporta warnings

#### Job 2: Check Broken Links

- Construye el sitio
- Verifica enlaces rotos en archivos HTML generados
- Usa `lychee-action` para análisis exhaustivo
- Reporta enlaces externos que no respondan

#### Job 3: TypeScript Type Check

- Verifica errores de tipos en archivos `.ts`
- Asegura consistencia de tipos en configuración

#### Job 4: Build Size Analysis

- Analiza tamaño total del build
- Lista los 20 archivos más grandes
- Ayuda a detectar bundles pesados

**Tiempo estimado:** 5-7 minutos

---

## 🎯 Uso Práctico

### Para Desarrolladores

#### Al hacer un Pull Request

1. Push tus cambios a una rama
2. Crea un Pull Request a `main`
3. GitHub Actions ejecutará automáticamente:
   - Validación de código
   - Build test
   - Verificación de enlaces
   - TypeScript check
4. Revisa los resultados en la pestaña "Checks" del PR
5. Si todo pasa ✅, el PR puede ser merged

#### Al hacer merge a main

1. Merge del PR a `main`
2. GitHub Actions automáticamente:
   - Valida el código
   - Construye el sitio
   - **Despliega a GitHub Pages**
3. El sitio actualizado estará disponible en ~5 minutos

#### Deploy Manual

1. Ve a la pestaña "Actions" en GitHub
2. Selecciona "Deploy to GitHub Pages"
3. Click en "Run workflow"
4. Elige la rama `main`
5. Click en "Run workflow" verde

---

## 🚨 Qué Hacer si Falla el CI/CD

### Error: "Build failed"

**Causa común:** Error de sintaxis en código o configuración

**Solución:**

```bash
# Probar localmente
npm run build

# Si falla, revisar errores en consola
# Corregir y volver a probar
```

### Error: "TypeScript check failed"

**Causa:** Errores de tipos en archivos `.ts`

**Solución:**

```bash
# Verificar localmente
npx tsc --noEmit

# Corregir errores de tipos
# Asegurar que docusaurus.config.ts y sidebars.ts estén bien tipados
```

### Error: "Broken links detected"

**Causa:** Enlaces a archivos que no existen

**Solución:**

1. Revisar el log del job "Check Broken Links"
2. Identificar enlaces rotos listados
3. Corregir rutas en archivos `.md`
4. Verificar que archivos referenciados existan

### Error: "Deploy failed - 404"

**Causa:** Configuración incorrecta de GitHub Pages

**Solución:**

1. Ve a Settings → Pages en GitHub
2. Verifica que Source esté en "GitHub Actions"
3. Asegurar que `baseUrl` en `docusaurus.config.ts` sea correcto:

   ```typescript
   baseUrl: '/MindArchive/',
   ```

---

## 📊 Monitoreo y Logs

### Ver resultados de workflows

1. Ve al repositorio en GitHub
2. Click en la pestaña "Actions"
3. Verás lista de todos los workflows ejecutados
4. Click en cualquiera para ver detalles

### Interpretar estados

- ✅ **Verde (Success):** Todo OK
- ❌ **Rojo (Failed):** Hay errores, revisar logs
- 🟡 **Amarillo (In Progress):** Ejecutándose
- ⚪ **Gris (Cancelled):** Cancelado manualmente

### Logs detallados

1. Click en el workflow específico
2. Click en el job que quieres ver (Build, Deploy, etc.)
3. Expande cada step para ver output completo
4. Buscar mensajes de error en rojo

---

## 🔧 Configuración Avanzada

### Variables de Entorno

Si necesitas agregar secrets o variables:

1. Ve a Settings → Secrets and variables → Actions
2. Click en "New repository secret"
3. Agregar en workflow:

   ```yaml
   env:
     MY_SECRET: ${{ secrets.MY_SECRET }}
   ```

### Modificar Node.js Version

En ambos workflows, cambiar:

```yaml
env:
  NODE_VERSION: '22'  # Cambiar aquí
```

### Agregar Nuevas Validaciones

Editar `.github/workflows/quality-checks.yml` y agregar nuevo job:

```yaml
jobs:
  my-new-check:
    name: My Custom Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run my check
        run: echo "Doing something..."
```

---

## 📈 Mejoras Futuras

### Próximos Pasos

- [ ] Agregar cache de dependencias más agresivo
- [ ] Lighthouse CI para métricas de performance
- [ ] Notificaciones de Slack/Discord en deploys
- [ ] Preview deployments para PRs (Netlify/Vercel)
- [ ] Automated changelog generation
- [ ] Dependency updates con Dependabot

### Performance Optimizations

- [ ] Parallel jobs cuando sea posible
- [ ] Conditional execution basado en archivos cambiados
- [ ] Artifact caching entre workflows

---

## 🆘 Troubleshooting Común

### "npm ci failed"

**Solución:**

```bash
# Asegurar que package-lock.json esté committeado
git add package-lock.json
git commit -m "Add package-lock.json"
```

### "Upload artifact failed - size limit"

**Solución:**

- GitHub tiene límite de 10GB para artifacts
- Si build es muy grande, revisar qué incluye
- Posible contenido no necesario en `static/`

### "Concurrent deployment detected"

**Solución:**

- Solo puede haber un deploy a la vez
- Esperar que el deploy anterior termine
- O cancelar el anterior manualmente

---

## 📚 Referencias

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Docusaurus Deploy Docs:** https://docusaurus.io/docs/deployment
- **Deploy Pages Action:** https://github.com/actions/deploy-pages
- **Lychee (Link Checker):** https://github.com/lycheeverse/lychee-action
- **Markdownlint:** https://github.com/DavidAnson/markdownlint

---

## ✅ Checklist de Verificación

Antes de cada deploy importante:

- [ ] ✅ Build local exitoso (`npm run build`)
- [ ] ✅ No hay errores de TypeScript (`npx tsc --noEmit`)
- [ ] ✅ Tests pasan (si hay tests)
- [ ] ✅ Markdown formateado correctamente
- [ ] ✅ No hay enlaces rotos visibles
- [ ] ✅ Commit y push a rama feature
- [ ] ✅ Crear PR y esperar validaciones
- [ ] ✅ Merge a main
- [ ] ✅ Verificar deploy exitoso en Actions
- [ ] ✅ Visitar sitio y confirmar cambios

---

**Última actualización:** 6 de noviembre de 2025  
**Mantenedor:** Agustín Arenas  
**Versión CI/CD:** 1.0

---

## 🎉 ¡Deployment Automático Activado

Con esta configuración, cada vez que hagas push a `main`, tu sitio se desplegará automáticamente. ¡A trabajar con confianza! 🚀
