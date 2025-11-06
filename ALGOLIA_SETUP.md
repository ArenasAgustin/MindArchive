# 🔍 Guía de Configuración de Algolia DocSearch para MindArchive

## 📋 Resumen

Algolia DocSearch es un servicio gratuito de búsqueda para documentación técnica. Proporciona búsqueda instantánea, facetada y relevante para tu sitio Docusaurus.

**Estado Actual**: ⏳ Configuración preparada, pendiente de aprobación de Algolia

---

## 🎯 Pasos para Activar la Búsqueda

### 1. Aplicar al Programa DocSearch de Algolia

**URL de Aplicación**: <https://docsearch.algolia.com/apply/>

**Requisitos para la aprobación:**

- ✅ Documentación técnica o educativa pública
- ✅ Contenido original y de calidad
- ✅ Sitio ya desplegado y accesible públicamente
- ✅ Eres el propietario del sitio web

**Información a proporcionar en el formulario:**

```
Website URL: https://arenasagustin.github.io/MindArchive/

Email: arenasagustin7@gmail.com

Repository (opcional): https://github.com/ArenasAgustin/MindArchive

Description: 
MindArchive es un repositorio centralizado de apuntes académicos universitarios 
construido con Docusaurus. Contiene documentación educativa de materias de 
Ingeniería en Sistemas, incluyendo Algoritmos y Estructuras de Datos, Análisis 
Matemático, Probabilidad y Estadística, con ejemplos de código, fórmulas 
matemáticas y diagramas interactivos.

Type: Technical Documentation / Educational Content

Owner: Yes, I am the owner

Public: Yes, the documentation is publicly accessible
```

**Tiempo de respuesta**: Generalmente 1-2 semanas

---

### 2. Después de la Aprobación

Una vez aprobado, recibirás un email con:

- `appId`: Tu Application ID
- `apiKey`: Tu Search-Only API Key (pública, segura para frontend)
- `indexName`: Nombre del índice (generalmente el nombre de tu sitio)

**Ejemplo del email:**

```
appId: ABC123XYZ
apiKey: 1234567890abcdef1234567890abcdef
indexName: mindarchive
```

---

### 3. Actualizar la Configuración

#### Opción 1: Usando archivo .env (Recomendado)

1. Crea o edita el archivo `.env` en la raíz del proyecto:

```bash
# .env
ALGOLIA_APP_ID=ABC123XYZ
ALGOLIA_API_KEY=1234567890abcdef1234567890abcdef
ALGOLIA_INDEX_NAME=mindarchive
```

2. El proyecto ya está configurado para leer estas variables automáticamente.

**⚠️ Importante**:

- El archivo `.env` está en `.gitignore` y NO se subirá a GitHub (seguridad)
- Usa `.env.example` como plantilla
- En producción (GitHub Pages), las variables se pasan automáticamente en build time

#### Opción 2: Editar directamente docusaurus.config.ts

Edita `docusaurus.config.ts` y reemplaza las constantes:

**Antes:**

```typescript
const algoliaAppId = process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID';
const algoliaApiKey = process.env.ALGOLIA_API_KEY || 'YOUR_SEARCH_API_KEY';
const algoliaIndexName = process.env.ALGOLIA_INDEX_NAME || 'mindarchive';
```

**Después:**

```typescript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'mindarchive',
  contextualSearch: true,
  searchPagePath: 'search',
},
```

**Después:**

```typescript
const algoliaAppId = 'ABC123XYZ'; // Tu appId real
const algoliaApiKey = '1234567890abcdef1234567890abcdef'; // Tu apiKey real
const algoliaIndexName = 'mindarchive'; // Tu indexName real
```

---

### 4. Verificar y Desplegar

#### Probar Localmente

```bash
npm run build
npm run serve
```

Abre <http://localhost:3000/MindArchive/> y:

- Busca el icono de lupa en la navbar (esquina superior derecha)
- Presiona `Ctrl+K` o `Cmd+K` para abrir la búsqueda
- Prueba buscar términos como "algoritmos", "grafos", "derivadas"

#### Desplegar a Producción

```bash
npm run deploy
```

Espera 2-5 minutos para que GitHub Pages actualice el sitio.

---

### 5. Configurar el Crawler (Opcional - Avanzado)

Algolia configurará automáticamente el crawler, pero puedes personalizarlo.

**Accede a tu Dashboard de Algolia:**

- URL: <https://dashboard.algolia.com/>
- Navega a: DocSearch → Tu índice → Configuration

**Configuración recomendada para MindArchive:**

```json
{
  "index_name": "mindarchive",
  "start_urls": [
    "https://arenasagustin.github.io/MindArchive/"
  ],
  "sitemap_urls": [
    "https://arenasagustin.github.io/MindArchive/sitemap.xml"
  ],
  "selectors": {
    "lvl0": {
      "selector": ".menu__link--sublist.menu__link--active",
      "global": true,
      "default_value": "Documentación"
    },
    "lvl1": "article h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5",
    "text": "article p, article li, article td"
  },
  "min_indexed_level": 1,
  "conversation_enabled": false,
  "nb_hits": 10
}
```

---

## 🎨 Personalización Adicional (Opcional)

### Configuración Avanzada de Algolia en Docusaurus

Puedes agregar más opciones a la configuración de Algolia:

```typescript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'mindarchive',
  
  // Búsqueda contextual (recomendado para Docusaurus)
  contextualSearch: true,
  
  // Parámetros de búsqueda personalizados
  searchParameters: {
    facetFilters: ['language:es', 'version:current'],
    hitsPerPage: 10,
  },
  
  // Página de resultados de búsqueda
  searchPagePath: 'search',
  
  // Placeholder personalizado (opcional)
  placeholder: 'Buscar en MindArchive...',
  
  // Insights (opcional - para analíticas)
  insights: false,
},
```

### Estilos Personalizados

Si quieres personalizar el aspecto del modal de búsqueda, agrega estilos en `src/css/custom.css`:

```css
/* Personalización del modal de Algolia DocSearch */
.DocSearch {
  --docsearch-primary-color: #7c3aed; /* Color primario (púrpura) */
  --docsearch-text-color: #1c1e21;
  --docsearch-spacing: 12px;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: #969faf;
  --docsearch-container-background: rgba(101, 108, 133, 0.8);
  --docsearch-modal-background: #f5f6f7;
  
  /* Sombras */
  --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5),
    0 3px 8px 0 #555a64;
  
  /* Tamaño del modal */
  --docsearch-searchbox-height: 56px;
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
  
  /* Footer */
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #fff;
  --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}

/* Modo oscuro */
[data-theme='dark'] .DocSearch {
  --docsearch-text-color: #f5f6f7;
  --docsearch-container-background: rgba(9, 10, 17, 0.8);
  --docsearch-modal-background: #15172a;
  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
  --docsearch-searchbox-background: #090a11;
  --docsearch-searchbox-focus-background: #000;
  --docsearch-hit-color: #bec3c9;
  --docsearch-hit-shadow: none;
  --docsearch-hit-background: #090a11;
  --docsearch-key-gradient: linear-gradient(-26.5deg, #565872, #31355b);
  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,
    0 2px 2px 0 rgba(3, 4, 9, 0.3);
  --docsearch-footer-background: #1e2136;
  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
    0 -4px 8px 0 rgba(0, 0, 0, 0.2);
  --docsearch-logo-color: #fff;
  --docsearch-muted-color: #7f8497;
}
```

---

## 📊 Verificación y Monitoreo

### Verificar que Funciona

1. **Visualmente**: Debe aparecer un icono de lupa 🔍 en la navbar
2. **Atajo de teclado**: `Ctrl+K` (Windows/Linux) o `Cmd+K` (Mac) abre el modal
3. **Funcionalmente**: Al buscar, deben aparecer resultados de tu documentación

### Monitorear el Uso

**Dashboard de Algolia:**

- URL: <https://dashboard.algolia.com/>
- Ve a: Analytics → Search Analytics

**Métricas a revisar:**

- **Searches**: Número de búsquedas realizadas
- **Click-through Rate**: % de clicks en resultados
- **No Results Rate**: % de búsquedas sin resultados (idealmente <10%)
- **Popular Searches**: Términos más buscados

**Mejoras basadas en datos:**

- Si hay muchas búsquedas sin resultados, considera agregar contenido sobre esos temas
- Los términos populares indican qué contenido es más valioso para los usuarios
- El CTR bajo puede indicar que los resultados no son relevantes (ajustar configuración)

---

## ❓ Preguntas Frecuentes

### ¿Cuánto cuesta Algolia DocSearch?

**Gratis** para proyectos de documentación técnica de código abierto. Algolia lo ofrece como servicio a la comunidad.

### ¿Qué pasa si no me aprueban?

Alternativas gratuitas:

1. **Búsqueda local de Docusaurus**: Limitada pero funcional
2. **Pagefind**: Búsqueda estática generada en build time
3. **Typesense**: Alternativa open-source a Algolia

### ¿Cómo actualizo el índice de búsqueda?

Algolia configura un **crawler automático** que actualiza el índice periódicamente (generalmente cada 24 horas). Después de desplegar cambios, espera hasta el próximo crawl.

Para forzar una actualización inmediata:

1. Ve a tu dashboard de Algolia
2. Navega a: Crawler → Run crawler
3. Click en "Trigger crawl"

### ¿Puedo excluir páginas de la búsqueda?

Sí, agrega `<meta name="docsearch:version" content="current" />` o similar en el frontmatter:

```yaml
---
noIndex: true
---
```

O en el crawler config:

```json
{
  "stop_urls": [
    "/draft-",
    "/private/"
  ]
}
```

### ¿Cómo mejoro la relevancia de resultados?

1. **Usa encabezados descriptivos** (H1, H2, H3) - Algolia los prioriza
2. **Agrega descripciones en frontmatter** - Se indexan con alta prioridad
3. **Usa tags relevantes** - Ayudan a categorizar contenido
4. **Evita contenido duplicado** - Confunde el algoritmo
5. **Estructura jerárquica clara** - Facilita la navegación en resultados

---

## 🚀 Próximos Pasos

Después de configurar Algolia:

1. ✅ **Probar exhaustivamente** - Busca términos variados
2. ✅ **Monitorear analytics** - Ver qué buscan los usuarios
3. ✅ **Optimizar contenido** - Basado en búsquedas populares
4. ⏳ **Landing page mejorada** (Mejora #2 del roadmap)
5. ⏳ **CI/CD con GitHub Actions** (Mejora #3 del roadmap)

---

## 📞 Soporte

**Documentación Oficial:**

- Algolia DocSearch: <https://docsearch.algolia.com/>
- Docusaurus Search: <https://docusaurus.io/docs/search>

**Comunidad:**

- Discord de Docusaurus: <https://discord.gg/docusaurus>
- GitHub Discussions: <https://github.com/algolia/docsearch/discussions>

**Contacto Algolia:**

- Email: <docsearch@algolia.com> (para problemas con la aplicación)

---

**Última actualización**: 5 de noviembre de 2025  
**Estado**: Configuración lista, pendiente de aprobación de Algolia

---

## ✅ Checklist de Implementación

- [x] Configuración de Algolia agregada en `docusaurus.config.ts`
- [x] Documentación de setup creada (`ALGOLIA_SETUP.md`)
- [ ] **Aplicar al programa DocSearch de Algolia** ← **PRÓXIMO PASO**
- [ ] Recibir credenciales de Algolia
- [ ] Actualizar `docusaurus.config.ts` con credenciales reales
- [ ] Build y deploy a producción
- [ ] Verificar funcionamiento de búsqueda
- [ ] Monitorear analytics y optimizar

**🎯 Acción Inmediata**: Aplicar en <https://docsearch.algolia.com/apply/>
