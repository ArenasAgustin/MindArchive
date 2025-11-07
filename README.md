# 📚 MindArchive

<div align="center">

**Apuntes académicos de Ingeniería en Computación - FCEFyN UNC**

[![Build Status](https://github.com/ArenasAgustin/MindArchive/workflows/Deploy/badge.svg)](https://github.com/ArenasAgustin/MindArchive/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green.svg)](https://docusaurus.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[🌐 Ver Sitio](https://arenasagustin.github.io/MindArchive/) • [📖 Documentación](https://arenasagustin.github.io/MindArchive/docs/) • [🐛 Reportar Bug](https://github.com/ArenasAgustin/MindArchive/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Instalación](#️-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#️-estructura-del-proyecto)
- [Tecnologías](#-tecnologías)
- [Contribuir](#-contribuir)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)
- [Contacto](#-contacto)
- [Agradecimientos](#-agradecimientos)

---

## 🎯 Sobre el Proyecto

**MindArchive** es un sitio web de documentación académica construido con Docusaurus que contiene apuntes, trabajos y recursos de diferentes materias de la carrera **Ingeniería en Computación** de la **Facultad de Ciencias Exactas, Físicas y Naturales (FCEFyN)** de la **Universidad Nacional de Córdoba (UNC)**.

### ¿Por qué este proyecto?

- 📚 **Centralizar conocimiento**: Reunir todos los apuntes en un solo lugar accesible
- 🔍 **Búsqueda rápida**: Encontrar información específica en segundos
- 🌐 **Acceso desde cualquier lugar**: Disponible 24/7 desde cualquier dispositivo
- 🤝 **Colaborativo**: Cualquier estudiante puede contribuir y mejorar el contenido
- 📱 **Responsive**: Funciona perfectamente en móvil, tablet y desktop

---

## ✨ Características

- 🔍 **Búsqueda Avanzada**: Integración con Algolia DocSearch para búsqueda instantánea
- 📖 **Contenido Organizado**: Material estructurado por materias y unidades temáticas
- 🎨 **Interfaz Moderna**: Diseño limpio con modo oscuro/claro
- 📐 **Fórmulas Matemáticas**: Renderizado de LaTeX con KaTeX
- 📊 **Diagramas Interactivos**: Soporte para Mermaid
- 💻 **Resaltado de Código**: Syntax highlighting para C++, Java, Python, MATLAB
- 🏷️ **Sistema de Tags**: Filtrado de contenido por temas transversales
- 🗺️ **Breadcrumbs Mejorados**: Navegación contextual con atajos de teclado (Alt + ← →)
- 📱 **Mobile-First**: Optimizado para dispositivos móviles
- ⚡ **Rápido**: Generación estática para carga instantánea

---

## ⬇️ Instalación

### Prerequisitos

- **Node.js** >= 18.0
- **npm** >= 9.0 o **yarn** >= 1.22

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/ArenasAgustin/MindArchive.git
cd MindArchive
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno (opcional)**

Si querés usar Algolia DocSearch, creá un archivo `.env`:

```bash
ALGOLIA_APP_ID=tu_app_id
ALGOLIA_API_KEY=tu_api_key
ALGOLIA_INDEX_NAME=tu_index
```

---

## 🚀 Uso

### Desarrollo Local

Inicia el servidor de desarrollo:

```bash
npm start
```

Esto abre una ventana del navegador en `http://localhost:3000`. Los cambios se reflejan en vivo sin reiniciar el servidor.

### Compilación

Genera el sitio estático para producción:

```bash
npm run build
```

El contenido compilado se guarda en el directorio `build/`.

### Servir localmente (previsualizar build)

```bash
npm run serve
```

### Desplegar a GitHub Pages

```bash
npm run deploy
```

### Limpiar caché

Si tenés problemas, limpiá la caché:

```bash
npm run clear
npm start
```

---

## 🗂️ Estructura del Proyecto

```plain
MindArchive/
├── docs/                           # Contenido académico (Markdown)
│   ├── index.md                    # Página de introducción
│   ├── _templates/                 # Plantillas para nuevas unidades
│   └── materias/                   # Materias organizadas
│       ├── algoritmos-y-estructuras-de-datos/
│       │   ├── index.md           # Índice de la materia
│       │   ├── unidad-01.md       # Unidades numeradas
│       │   ├── unidad-02.md
│       │   └── ...
│       ├── analisis-matematico-2/
│       └── probabilidad-y-estadistica/
│
├── src/                            # Código fuente React/TypeScript
│   ├── components/                 # Componentes personalizados
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css             # Estilos personalizados
│   ├── pages/
│   │   └── index.js               # Landing page
│   └── theme/                      # Componentes de tema sobrescritos
│       └── DocBreadcrumbs/
│
├── static/                         # Archivos estáticos
│   └── img/                       # Imágenes y recursos
│       ├── algoritmos-y-estructuras-de-datos/
│       └── ...
│
├── build/                          # Build output (no versionar)
├── .github/                        # Workflows de GitHub Actions
│   └── workflows/
│       └── deploy.yml             # CI/CD automático
│
├── docusaurus.config.ts           # Configuración principal
├── sidebars.ts                    # Configuración del sidebar
├── tsconfig.json                  # Configuración TypeScript
├── package.json                   # Dependencias y scripts
│
├── CONTRIBUTING.md                # Guía de contribución
├── AGENTS.md                      # Instrucciones para agentes IA
├── MEJORAS.md                     # Roadmap y mejoras propuestas
└── README.md                      # Este archivo
```

### Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `docusaurus.config.ts` | Configuración de Docusaurus (SEO, plugins, tema) |
| `sidebars.ts` | Estructura del menú lateral |
| `docs/` | Contenido en Markdown |
| `src/css/custom.css` | Estilos personalizados (colores, tipografía) |
| `static/` | Recursos estáticos (imágenes, archivos) |
| `.github/workflows/deploy.yml` | CI/CD para despliegue automático |

---

## 🛠️ Tecnologías

### Core

- **[Docusaurus 3.x](https://docusaurus.io/)** - Framework de documentación con React
- **[React 18](https://react.dev/)** - Librería de interfaz de usuario
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - JavaScript con tipos estáticos

### Plugins y Herramientas

- **[KaTeX](https://katex.org/)** - Renderizado de fórmulas matemáticas LaTeX
- **[Mermaid](https://mermaid.js.org/)** - Diagramas y gráficos
- **[Prism.js](https://prismjs.com/)** - Syntax highlighting de código
- **[Algolia DocSearch](https://docsearch.algolia.com/)** - Búsqueda avanzada
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automático
- **[GitHub Pages](https://pages.github.com/)** - Hosting gratuito

### Lenguajes de Contenido

- **Markdown** - Contenido principal
- **MDX** - Markdown con componentes React
- **LaTeX** - Fórmulas matemáticas
- **Mermaid** - Sintaxis de diagramas

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas y muy apreciadas! 🎉

Hay muchas formas de colaborar:

### 🐛 Reportar Bugs o Sugerir Mejoras

- Abrí un [Issue](https://github.com/ArenasAgustin/MindArchive/issues) describiendo el problema o sugerencia
- Usá las plantillas disponibles para facilitar el proceso

### 📝 Agregar o Mejorar Contenido

1. **Fork** el repositorio
2. Creá una **rama** para tu feature (`git checkout -b feature/AgregarUnidadX`)
3. **Editá o agregá** contenido en `docs/materias/`
4. **Commit** tus cambios (`git commit -m 'Add: Unidad X de Materia Y'`)
5. **Push** a la rama (`git push origin feature/AgregarUnidadX`)
6. Abrí un **Pull Request**

### 📖 Guías Detalladas

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guía completa de contribución
- **[AGENTS.md](./AGENTS.md)** - Convenciones y estándares del proyecto
- **[docs/_templates/](./docs/_templates/)** - Plantillas para nuevas unidades

### 📋 Convenciones

- Seguir la estructura de archivos existente
- Usar frontmatter completo en archivos `.md`
- Nombres de archivo en minúsculas con guiones: `unidad-01.md`
- Commits descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🗺️ Roadmap

### ✅ Completado

- [x] **Búsqueda con Algolia DocSearch** - Búsqueda instantánea en todo el contenido
- [x] **Landing Page Mejorada** - Diseño profesional y atractivo
- [x] **CI/CD con GitHub Actions** - Despliegue automático
- [x] **Breadcrumbs Mejorados** - Navegación contextual con atajos
- [x] **Dark/Light Mode Toggle** - Cambio de tema con animaciones
- [x] **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards

### 📅 Futuro

- [ ] **PWA (Progressive Web App)** - Acceso offline
- [ ] Página de Tags visible y filtrable
- [ ] Analytics con Google Analytics o Umami
- [ ] Recursos externos curados
- [ ] Sistema de búsqueda de ejercicios
- [ ] Exportar a PDF por unidad/materia
- [ ] +30 mejoras más en [MEJORAS.md](./MEJORAS.md)

Ver el roadmap completo en **[MEJORAS.md](./MEJORAS.md)**.

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](./LICENSE) para más detalles.

**Resumen:**

- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida
- ✅ Uso privado permitido
- ⚠️ Sin garantía
- ⚠️ Responsabilidad limitada

---

## 📧 Contacto

**Agustín Arenas**

- 📧 Email: [arenasagustin7@gmail.com](mailto:arenasagustin7@gmail.com)
- 💼 GitHub: [@ArenasAgustin](https://github.com/ArenasAgustin)
- 🌐 Sitio Web: [MindArchive](https://arenasagustin.github.io/MindArchive/)

**Enlace del Proyecto:** [https://github.com/ArenasAgustin/MindArchive](https://github.com/ArenasAgustin/MindArchive)

---

## 🙏 Agradecimientos

- **[Docusaurus](https://docusaurus.io/)** - Framework increíble para documentación
- **[Algolia](https://www.algolia.com/)** - Búsqueda avanzada gratuita para proyectos open source
- **[GitHub](https://github.com/)** - Hosting y CI/CD gratuitos
- **[KaTeX](https://katex.org/)** - Renderizado rápido de fórmulas matemáticas
- **[Mermaid](https://mermaid.js.org/)** - Diagramas hermosos y simples
- **FCEFyN - UNC** - Facultad de Ciencias Exactas, Físicas y Naturales
- **Comunidad estudiantil** - Por el apoyo y feedback constante

### Inspiración

Este proyecto se inspira en:

- [MDN Web Docs](https://developer.mozilla.org/)
- [React Documentation](https://react.dev/)
- [Rust Book](https://doc.rust-lang.org/book/)

---

<div align="center">

**⭐ Si te resulta útil, dale una estrella al proyecto ⭐**

[![Star History Chart](https://api.star-history.com/svg?repos=ArenasAgustin/MindArchive&type=Date)](https://star-history.com/#ArenasAgustin/MindArchive&Date)

**Hecho con ❤️ para la comunidad estudiantil de FCEFyN - UNC**

</div>
