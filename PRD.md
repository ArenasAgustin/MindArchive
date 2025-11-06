# 📋 PRD - Product Requirements Document

## MindArchive

**Versión:** 1.0  
**Fecha:** 5 de noviembre de 2025  
**Autor:** Agustín Arenas  
**Estado:** Activo

---

## 📌 Resumen Ejecutivo

### Nombre del Producto

**MindArchive** - Repositorio Centralizado de Apuntes Académicos Universitarios

### Visión del Producto

Crear una plataforma de documentación académica accesible, organizada y de alta calidad que centralice el conocimiento universitario, facilitando el estudio y la colaboración entre estudiantes de Ingeniería en Sistemas.

### Declaración del Problema

Los estudiantes universitarios enfrentan desafíos para:

- Organizar y mantener actualizados sus apuntes de múltiples materias
- Acceder rápidamente a información específica durante el estudio
- Compartir recursos educativos de calidad con compañeros
- Encontrar referencias técnicas y fórmulas en formato digital accesible
- Mantener consistencia en el formato de documentación académica

### Propuesta de Valor

MindArchive ofrece:

- **Centralización**: Todo el contenido académico en un solo lugar
- **Búsqueda Rápida**: Encuentra conceptos, fórmulas y algoritmos instantáneamente
- **Formato Profesional**: Documentación con renderizado de matemáticas (KaTeX) y diagramas (Mermaid)
- **Accesibilidad**: Disponible 24/7 desde cualquier dispositivo
- **Código Abierto**: Contenido libre y colaborativo

---

## 🎯 Objetivos del Producto

### Objetivos de Negocio

1. **Adopción**: Alcanzar 100+ estudiantes activos en el primer semestre
2. **Contenido**: Documentar al menos 10 materias completas en el primer año
3. **Calidad**: Mantener 95%+ de satisfacción en encuestas de usuarios
4. **Comunidad**: Generar 5+ contribuciones externas por semestre
5. **Visibilidad**: Posicionar en los primeros resultados de búsqueda para "apuntes ingeniería sistemas"

### Objetivos de Usuario

1. **Eficiencia**: Reducir tiempo de búsqueda de información en 70%
2. **Comprensión**: Mejorar comprensión de conceptos con visualizaciones
3. **Preparación**: Facilitar preparación para exámenes con contenido estructurado
4. **Colaboración**: Permitir compartir y reutilizar material académico
5. **Accesibilidad**: Acceder desde móvil, tablet o desktop sin restricciones

### KPIs (Key Performance Indicators)

- **Usuarios Activos Mensuales (MAU)**: Objetivo 100+ en 6 meses
- **Páginas Vistas por Sesión**: Objetivo 5+ páginas
- **Tiempo Promedio en Sitio**: Objetivo 8+ minutos
- **Tasa de Rebote**: Objetivo <40%
- **Búsquedas Exitosas**: Objetivo 85%+ encuentran lo que buscan
- **Contribuciones GitHub**: Objetivo 2+ pull requests por mes

---

## 👥 Usuarios y Audiencia

### Usuario Primario: Estudiante Universitario

**Perfil:**

- **Edad**: 18-28 años
- **Contexto**: Cursando Ingeniería en Sistemas o carreras afines
- **Nivel Técnico**: Intermedio a avanzado en tecnología
- **Dispositivos**: Laptop, smartphone, tablet
- **Necesidades**:
  - Acceso rápido a apuntes durante estudio y exámenes
  - Contenido estructurado y fácil de navegar
  - Fórmulas matemáticas y código bien formateados
  - Recursos descargables y compartibles

**Casos de Uso:**

1. **Estudio para Examen**: Buscar temas específicos, repasar conceptos, ver ejemplos
2. **Hacer Tarea**: Consultar algoritmos, fórmulas, estructuras de datos
3. **Preparar Proyecto**: Investigar conceptos avanzados, ver implementaciones
4. **Compartir con Compañeros**: Enviar enlaces a secciones específicas

### Usuario Secundario: Docente/Tutor

**Perfil:**

- **Rol**: Profesor, ayudante, tutor académico
- **Necesidades**:
  - Material de referencia para recomendar a estudiantes
  - Ejemplos didácticos bien explicados
  - Contenido actualizado y técnicamente correcto

**Casos de Uso:**

1. **Recomendar Material**: Compartir enlaces con estudiantes
2. **Complementar Clases**: Referencias adicionales al contenido de cátedra
3. **Identificar Áreas de Mejora**: Ver qué temas consultan más los estudiantes

### Usuario Terciario: Profesional/Autodidacta

**Perfil:**

- **Contexto**: Aprendiendo por cuenta propia o repasando conceptos
- **Necesidades**:
  - Referencias técnicas rápidas
  - Refrescar conocimientos universitarios
  - Preparación para entrevistas técnicas

---

## ✨ Características del Producto

### Características Core (MVP - Implementadas)

#### 1. Documentación Académica Estructurada

**Descripción**: Contenido organizado por materias y unidades con formato Markdown
**Prioridad**: CRÍTICA
**Estado**: ✅ Implementado
**Componentes**:

- Estructura `docs/materias/[nombre-materia]/unidad-XX.md`
- Frontmatter con metadata (título, descripción, posición, tags)
- Navegación por sidebar autogenerado

#### 2. Renderizado de Matemáticas (KaTeX)

**Descripción**: Fórmulas y expresiones matemáticas con calidad LaTeX
**Prioridad**: CRÍTICA
**Estado**: ✅ Implementado
**Componentes**:

- Inline math: `$formula$`
- Block math: `$$formula$$`
- Sintaxis LaTeX completa con remarkMath y rehypeKatex

#### 3. Diagramas Técnicos (Mermaid)

**Descripción**: Visualizaciones de algoritmos, estructuras y flujos
**Prioridad**: ALTA
**Estado**: ✅ Implementado
**Componentes**:

- Grafos, diagramas de flujo, diagramas de clases
- Renderizado integrado en Markdown
- Tema adaptado a modo claro/oscuro

#### 4. Sintaxis de Código Resaltada

**Descripción**: Bloques de código con highlighting para múltiples lenguajes
**Prioridad**: ALTA
**Estado**: ✅ Implementado
**Componentes**:

- Soporte para C++, Java, Python, JavaScript, TypeScript, MATLAB
- Prism con tema personalizado
- Numeración de líneas opcional

#### 5. Modo Oscuro/Claro

**Descripción**: Tema visual adaptable con colores púrpura/violeta
**Prioridad**: MEDIA
**Estado**: ✅ Implementado
**Componentes**:

- Color primario: #7c3aed (claro) / #a78bfa (oscuro)
- Respeta preferencias del sistema
- Switch manual disponible

#### 6. Navegación Lateral (Sidebar)

**Descripción**: Menú jerárquico con materias y unidades
**Prioridad**: CRÍTICA
**Estado**: ✅ Implementado
**Componentes**:

- Autogenerado desde estructura de archivos
- Categoría "Materias" expandida por defecto
- Posicionamiento por `sidebar_position`

#### 7. Configuración TypeScript

**Descripción**: Configuración type-safe con TypeScript
**Prioridad**: MEDIA
**Estado**: ✅ Implementado
**Componentes**:

- docusaurus.config.ts con tipos
- sidebars.ts tipado
- tsconfig.json configurado

### Características en Roadmap (MEJORAS.md)

#### 8. Búsqueda Avanzada (Algolia DocSearch)

**Descripción**: Búsqueda instantánea full-text en todo el sitio
**Prioridad**: CRÍTICA
**Estado**: ⏳ Planeado
**Requisitos**:

- Aplicar a programa DocSearch de Algolia
- Configurar crawler
- Integrar en navbar
**Impacto**: Aumentar eficiencia de búsqueda 300%

#### 9. Landing Page Mejorada

**Descripción**: Página de inicio con hero section y tarjetas de materias
**Prioridad**: ALTA
**Estado**: ⏳ Planeado
**Componentes**:

- Hero con título, descripción, CTA
- Grid de tarjetas de materias con iconos
- Estadísticas (# materias, # unidades, # temas)
- Sección "Por qué MindArchive"

#### 10. CI/CD con GitHub Actions

**Descripción**: Automatización de build, test, deploy
**Prioridad**: ALTA
**Estado**: ⏳ Planeado
**Workflows**:

- Build automático en pull requests
- Deploy a GitHub Pages en merge a main
- Validación de Markdown y links
- Checks de TypeScript

#### 11. Sistema de Feedback (Giscus)

**Descripción**: Comentarios y feedback en cada página vía GitHub Discussions
**Prioridad**: MEDIA
**Estado**: ⏳ Planeado
**Componentes**:

- Integración con GitHub Discussions
- Widget de comentarios al final de cada página
- Sistema de reacciones

#### 12. Progressive Web App (PWA)

**Descripción**: Funcionalidad offline y instalación en dispositivos
**Prioridad**: MEDIA
**Estado**: ⏳ Planeado
**Componentes**:

- Service Worker para caché offline
- Manifest.json con iconos
- Soporte de instalación "Add to Home Screen"

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

#### Frontend

- **Framework**: Docusaurus 3.x (React 18+)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: CSS personalizado (`src/css/custom.css`)
- **Build**: Webpack (integrado en Docusaurus)

#### Contenido

- **Formato**: Markdown (`.md`) con MDX support
- **Matemáticas**: KaTeX vía remark-math + rehype-katex
- **Diagramas**: Mermaid vía @docusaurus/theme-mermaid
- **Código**: Prism React Renderer

#### Hosting y Deploy

- **Hosting**: GitHub Pages
- **Deploy**: Manual con `docusaurus deploy`
- **URL**: <https://ArenasAgustin.github.io/MindArchive/>
- **DNS**: Personalizado (futuro: mindarchive.com)

#### Gestión

- **Control de Versiones**: Git + GitHub
- **Package Manager**: npm
- **CI/CD**: Manual (futuro: GitHub Actions)

### Estructura de Directorios

```
d:\Estudios\apuntes\
├── docs/                          # Contenido académico (Markdown)
│   ├── index.md                   # Introducción
│   ├── _templates/                # Templates para nuevas materias/unidades
│   └── materias/                  # Materias organizadas
│       ├── algoritmos-y-estructuras-de-datos/
│       ├── analisis-matematico-2/
│       └── probabilidad-y-estadistica/
├── src/                           # Código fuente React/TypeScript
│   ├── components/                # Componentes React personalizados
│   ├── css/                       # Estilos personalizados
│   └── pages/                     # Páginas custom (landing)
├── static/                        # Archivos estáticos
│   └── img/                       # Imágenes por materia
├── build/                         # Build output (no versionar)
├── docusaurus.config.ts           # Configuración principal
├── sidebars.ts                    # Configuración del sidebar
├── tsconfig.json                  # Configuración TypeScript
├── package.json                   # Dependencias y scripts
├── PRD.md                         # Este documento
├── MEJORAS.md                     # Roadmap de mejoras
└── AGENTS.md                      # Guía para agentes IA
```

### Dependencias Principales

```json
{
  "dependencies": {
    "@docusaurus/core": "^3.x",
    "@docusaurus/preset-classic": "^3.x",
    "@docusaurus/theme-mermaid": "^3.x",
    "react": "^18.x",
    "rehype-katex": "^7.x",
    "remark-math": "^6.x",
    "katex": "^0.16.x",
    "prism-react-renderer": "^2.x"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.x",
    "@docusaurus/tsconfig": "^3.x",
    "@docusaurus/types": "^3.x",
    "typescript": "^5.x"
  }
}
```

### Consideraciones de Rendimiento

- **Build Time**: ~30-60 segundos para build completo
- **Bundle Size**: ~500KB JS (gzipped), ~200KB CSS
- **Lighthouse Score**: Objetivo 90+ en todas las categorías
- **First Contentful Paint**: Objetivo <1.5s
- **Time to Interactive**: Objetivo <3.5s

### Seguridad

- **HTTPS**: Forzado por GitHub Pages
- **Content Security Policy**: Default de Docusaurus
- **XSS Protection**: Sanitización automática de Markdown
- **Dependencies**: Actualizaciones regulares con `npm audit`

---

## 🎨 Diseño y Experiencia de Usuario

### Principios de Diseño

1. **Minimalismo**: Contenido primero, sin distracciones
2. **Legibilidad**: Tipografía clara, espaciado generoso
3. **Consistencia**: Patrones visuales uniformes en todo el sitio
4. **Accesibilidad**: WCAG 2.1 nivel AA como mínimo
5. **Responsividad**: Mobile-first, adaptable a todos los tamaños

### Paleta de Colores

#### Modo Claro

- **Primario**: #7c3aed (púrpura/violeta)
- **Primario Dark**: #6d28d9
- **Primario Darker**: #5b21b6
- **Primario Darkest**: #4c1d95
- **Primario Light**: #8b5cf6
- **Primario Lighter**: #a78bfa
- **Primario Lightest**: #c4b5fd

#### Modo Oscuro

- **Primario**: #a78bfa (violeta claro)
- **Background**: #1b1b1d
- **Background Secondary**: #242526
- **Text**: #e3e3e3

### Tipografía

- **Familia Principal**: System Font Stack (rápida, nativa)
- **Monospace**: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace
- **Tamaños**: Escala modular 1.250 (Major Third)

### Componentes UI

#### Navbar

- Logo + título "📚 MindArchive"
- Links: "📖 Materias", "🎓 Recursos"
- GitHub icon con enlace al repositorio
- Toggle modo oscuro/claro
- Búsqueda (futuro: Algolia)

#### Sidebar

- Autogenerado desde estructura de archivos
- Categorías expandibles/colapsables
- "Materias" expandida por defecto
- Scroll persistente entre navegaciones

#### Footer

- Copyright © 2025 Agustín Arenas
- Enlaces: Documentación, GitHub, Contribuir
- Built with Docusaurus

#### Callouts/Admonitions

- **Note** (azul): Información complementaria
- **Tip** (verde): Consejos y mejores prácticas
- **Warning** (amarillo): Advertencias importantes
- **Danger** (rojo): Errores comunes, conceptos críticos
- **Info** (celeste): Datos curiosos, contexto adicional

### Responsive Breakpoints

- **Mobile**: <768px
- **Tablet**: 768px - 996px
- **Desktop**: 997px - 1440px
- **Large Desktop**: >1440px

---

## 📊 Métricas y Analíticas

### Métricas de Uso (Futuras - Google Analytics 4)

#### Adquisición

- **Fuente de Tráfico**: Orgánico, directo, referral, social
- **Dispositivos**: Desktop 60%, móvil 35%, tablet 5%
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Geografía**: Principalmente Argentina, Latinoamérica

#### Engagement

- **Páginas por Sesión**: Objetivo 5+ páginas
- **Duración Promedio**: Objetivo 8+ minutos
- **Tasa de Rebote**: Objetivo <40%
- **Usuarios Recurrentes**: Objetivo 30%+

#### Contenido

- **Páginas Más Visitadas**: Top 10 materias/unidades
- **Términos de Búsqueda**: Conceptos más buscados
- **Scroll Depth**: Porcentaje de página leída
- **Clicks en Código**: Interacciones con snippets

#### Conversión (Futuro)

- **Contribuciones GitHub**: Pull requests, issues creados
- **Newsletter Subscriptions**: Suscripciones a actualizaciones
- **Feedback Submitted**: Comentarios vía Giscus
- **Share Actions**: Compartidos en redes sociales

### Métricas de Calidad

#### Técnicas

- **Lighthouse Performance**: Objetivo 90+
- **Lighthouse Accessibility**: Objetivo 100
- **Lighthouse Best Practices**: Objetivo 95+
- **Lighthouse SEO**: Objetivo 100
- **Core Web Vitals**: Todos en "Good"

#### Contenido

- **Errores de Build**: 0 errores críticos
- **Warnings de KaTeX**: 0 warnings
- **Broken Links**: 0 links rotos
- **Cobertura de Materias**: 10+ materias completas
- **Unidades Documentadas**: 80+ unidades

---

## 🚀 Roadmap y Fases

### Fase 1: MVP - Fundamentos (COMPLETADA) ✅

**Timeline**: Enero - Octubre 2025  
**Estado**: Completado

**Entregables:**

- ✅ Estructura básica con Docusaurus
- ✅ 3 materias documentadas (Algoritmos, Análisis Mat 2, Probabilidad)
- ✅ Renderizado de matemáticas (KaTeX)
- ✅ Diagramas técnicos (Mermaid)
- ✅ Modo oscuro/claro
- ✅ Migración a TypeScript
- ✅ Deploy a GitHub Pages
- ✅ Documentación técnica (AGENTS.md, MEJORAS.md, PRD.md)

### Fase 2: Mejoras de UX (ACTUAL) 🔨

**Timeline**: Noviembre 2025 - Enero 2026  
**Estado**: En progreso

**Entregables:**

- ⏳ Búsqueda con Algolia DocSearch (CRÍTICO)
- ⏳ Landing page rediseñada
- ⏳ CI/CD con GitHub Actions
- ⏳ Sistema de feedback (Giscus)
- ⏳ PWA (offline support)
- ⏳ Google Analytics 4 integrado
- ⏳ SEO optimizado (meta tags, sitemap, robots.txt)

### Fase 3: Expansión de Contenido 📚

**Timeline**: Febrero - Abril 2026  
**Estado**: Planeado

**Entregables:**

- ⏳ 5+ materias adicionales
- ⏳ Sección de ejercicios resueltos
- ⏳ Sección de trabajos prácticos
- ⏳ Recursos descargables (PDFs, cheat sheets)
- ⏳ Glosario técnico integrado
- ⏳ Sistema de tags mejorado

### Fase 4: Funcionalidades Avanzadas ⚡

**Timeline**: Mayo - Julio 2026  
**Estado**: Planeado

**Entregables:**

- ⏳ Simuladores interactivos (algoritmos, estructuras)
- ⏳ Cuestionarios de autoevaluación
- ⏳ Sistema de progreso de usuario
- ⏳ Comparaciones lado a lado de algoritmos
- ⏳ Playground de código interactivo
- ⏳ Versioning de contenido (historial de cambios)

### Fase 5: Comunidad y Colaboración 🤝

**Timeline**: Agosto - Diciembre 2026  
**Estado**: Planeado

**Entregables:**

- ⏳ Sistema de contribuciones guiado
- ⏳ Templates para nuevas materias
- ⏳ Guía de estilo y contribución
- ⏳ Sistema de revisión de contenido
- ⏳ Newsletter mensual
- ⏳ Blog de actualizaciones
- ⏳ Foro/Discord de comunidad

---

## 🎓 Contenido Académico

### Materias Actuales

#### 1. Algoritmos y Estructuras de Datos

**Código**: AED  
**Estado**: ✅ Completo (8 unidades)  
**Lenguaje**: C++

**Unidades:**

1. Fundamentos de C++ (sintaxis, tipos, estructuras)
2. Recursividad (definición, casos base, complejidad)
3A. Estructuras Lineales (listas, implementaciones)
3B. Colas y Pilas (FIFO, LIFO, aplicaciones)
4. Ordenamiento (Selection, Insertion, Bubble, Quick, Merge, Heap)
5. Árboles (binarios, AVL, B-tree, recorridos)
6. Búsqueda (lineal, binaria, hashing, tablas hash)
7. Grafos (representaciones, BFS, DFS, Dijkstra, Floyd-Warshall)

**Tags**: algoritmos, estructuras-de-datos, c++, complejidad, ordenamiento, arboles, grafos

#### 2. Análisis Matemático 2

**Código**: AM2  
**Estado**: ✅ Completo (8 unidades)

**Unidades:**
1-8: Límites, derivadas, integrales, series, funciones de varias variables

**Tags**: matematica, calculo, limites, derivadas, integrales

#### 3. Probabilidad y Estadística

**Código**: PE  
**Estado**: ⏳ En progreso (3 unidades)

**Unidades:**

1. Estadística Descriptiva (medidas, distribución de frecuencias, representaciones)
2-3: Variables aleatorias, distribuciones de probabilidad

**Tags**: estadistica, probabilidad, variables-aleatorias, distribuciones

### Materias Planeadas (Fase 3)

- **Programación Orientada a Objetos** (POO) - Java
- **Bases de Datos** (BD) - SQL, modelado ER
- **Sistemas Operativos** (SO) - procesos, memoria, archivos
- **Redes de Computadoras** (RC) - TCP/IP, protocolos
- **Ingeniería de Software** (IS) - ciclo de vida, metodologías
- **Arquitectura de Computadoras** (AC) - CPU, memoria, I/O

### Estándares de Contenido

#### Estructura de Unidad

```markdown
---
title: "Unidad X: Título Descriptivo"
description: "Breve descripción (1-2 líneas)"
sidebar_position: X
tags: [tag1, tag2, tag3]
---

## Objetivos de Aprendizaje

### Objetivo General
[Descripción del propósito general]

### Objetivos Específicos
- Objetivo específico 1 (verbo de acción + competencia)
- Objetivo específico 2
- ...

## X.1 Primer Tema Principal

### X.1.1 Subtema

Contenido con explicaciones, ejemplos, fórmulas, código...
```

#### Requisitos de Calidad

- ✅ Frontmatter completo (title, description, sidebar_position, tags)
- ✅ Objetivos de aprendizaje (1 general + 5-10 específicos)
- ✅ Jerarquía de títulos correcta (H2 → H3 → H4)
- ✅ Fórmulas KaTeX sin warnings (usar `\text{}` para acentos)
- ✅ Código con lenguaje especificado
- ✅ Diagramas Mermaid cuando sea relevante
- ✅ Ejemplos prácticos y aplicaciones
- ✅ Referencias y recursos adicionales

---

## 🔒 Consideraciones Legales y Éticas

### Licencia

**MIT License**

- Código y contenido son de código abierto
- Permite uso comercial, modificación, distribución
- Sin garantías, uso bajo responsabilidad propia

### Copyright

**© 2025 Agustín Arenas**

- Contenido original creado por el autor
- Contribuciones de terceros bajo misma licencia
- Atribución requerida al reutilizar

### Contenido Académico

- **Fuentes**: Apuntes propios, material de cátedra, bibliografía recomendada
- **Originalidad**: Redacción propia, no copia textual de fuentes
- **Referencias**: Citar fuentes cuando se use material externo
- **Exactitud**: Revisión técnica antes de publicar

### Privacidad

- **Sin datos personales**: No se recolecta información identificable
- **Cookies**: Solo funcionales (tema, idioma)
- **Analytics** (futuro): Anónimo, agregado, opt-out disponible
- **Comentarios** (futuro): A través de GitHub (política de GitHub aplica)

### Accesibilidad

- **WCAG 2.1 AA**: Estándar mínimo de accesibilidad
- **Contenido descriptivo**: Alt text, labels, ARIA cuando necesario
- **Navegación por teclado**: Todos los elementos accesibles sin mouse
- **Contraste**: Ratios de contraste adecuados (4.5:1 texto, 3:1 UI)

---

## 📞 Stakeholders y Contacto

### Propietario del Producto

**Nombre**: Agustín Arenas  
**Rol**: Desarrollador, Creador de Contenido, Mantenedor  
**Email**: <arenasagustin7@gmail.com>  
**GitHub**: @ArenasAgustin  
**LinkedIn**: [Perfil]

### Contribuidores

- Bienvenidas contribuciones de la comunidad
- Ver CONTRIBUTING.md para guía de contribución
- Pull requests revisados por el propietario

### Canales de Comunicación

- **Issues GitHub**: Reportar bugs, proponer features
- **Pull Requests**: Contribuciones de código y contenido
- **Discussions** (futuro): Preguntas, ideas, feedback general
- **Discord/Slack** (futuro): Comunidad en tiempo real

---

## 📚 Referencias y Recursos

### Documentación Técnica

- **Docusaurus**: <https://docusaurus.io/docs>
- **KaTeX**: <https://katex.org/docs/supported.html>
- **Mermaid**: <https://mermaid.js.org/intro/>
- **TypeScript**: <https://www.typescriptlang.org/docs/>
- **React**: <https://react.dev/>

### Herramientas de Desarrollo

- **Visual Studio Code**: Editor principal
- **Git/GitHub**: Control de versiones
- **npm**: Gestión de dependencias
- **GitHub Pages**: Hosting

### Recursos de Contenido

- **Bibliografía de Cátedras**: Material oficial de materias
- **Stack Overflow**: Consultas técnicas
- **Wikipedia**: Referencias de conceptos
- **YouTube**: Explicaciones visuales (canales recomendados)

---

## 📝 Apéndices

### Glosario de Términos

**Docusaurus**: Framework de documentación basado en React para crear sitios estáticos.

**KaTeX**: Librería de renderizado de matemáticas compatible con LaTeX.

**Mermaid**: Herramienta de generación de diagramas desde texto.

**Markdown**: Lenguaje de marcado ligero para formato de texto.

**MDX**: Extensión de Markdown que permite componentes JSX/React.

**TypeScript**: Superset de JavaScript con tipado estático.

**GitHub Pages**: Servicio de hosting gratuito de GitHub para sitios estáticos.

**PWA**: Progressive Web App, aplicación web con funcionalidades nativas.

**CI/CD**: Continuous Integration/Continuous Deployment, automatización de builds y deploys.

### Abreviaciones

- **MVP**: Minimum Viable Product
- **UX**: User Experience
- **UI**: User Interface
- **KPI**: Key Performance Indicator
- **SEO**: Search Engine Optimization
- **MAU**: Monthly Active Users
- **CTA**: Call To Action
- **WCAG**: Web Content Accessibility Guidelines
- **ARIA**: Accessible Rich Internet Applications

### Changelog del PRD

**v1.0 - 5 de noviembre de 2025**

- Creación inicial del documento
- Definición de visión, objetivos, usuarios, características
- Roadmap de 5 fases
- Especificaciones técnicas y de contenido

---

**Última actualización**: 5 de noviembre de 2025  
**Versión de Docusaurus**: 3.x  
**Estado del Proyecto**: Fase 2 - Mejoras de UX

---

## 🚀 Conclusión

MindArchive es un proyecto ambicioso que busca revolucionar la forma en que los estudiantes universitarios acceden, organizan y comparten conocimiento académico. Con una base técnica sólida (Docusaurus + TypeScript + KaTeX + Mermaid), un roadmap claro de mejoras, y un compromiso con la calidad y accesibilidad, el producto está posicionado para convertirse en una referencia esencial para estudiantes de Ingeniería en Sistemas.

**Próximos Pasos Inmediatos:**

1. 🔍 Aplicar a Algolia DocSearch para búsqueda avanzada
2. 🎨 Rediseñar landing page con hero y tarjetas
3. 🤖 Implementar CI/CD con GitHub Actions
4. 💬 Integrar Giscus para feedback de usuarios
5. 📱 Configurar PWA para acceso offline

**Visión a Largo Plazo:**
Crear una plataforma de aprendizaje colaborativo que no solo centralice contenido, sino que lo enriquezca con herramientas interactivas, evaluaciones, y una comunidad activa de estudiantes y educadores que contribuyan constantemente a mejorar la calidad educativa.

---

**¡El conocimiento debe ser accesible, organizado y compartido! 📚🚀**
