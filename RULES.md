# Reglas del Proyecto - Documentación Académica Universitaria

## Descripción del Proyecto

Este proyecto consiste en una página web desarrollada con Docusaurus que centraliza todos los materiales académicos de la carrera universitaria. El objetivo es crear un repositorio organizado y accesible de apuntes, PDFs, ejercicios, y recursos complementarios para cada materia cursada.

## Arquitectura del Proyecto

### Estructura de Directorios

```plain
documentacion-academica/
├── docs/                          # Contenido principal de la documentación
│   ├── materias/                  # Directorio principal de materias
│   │   └── analisis-matematico-2/ # Ejemplo de materia
│   └── index.md                   # Página de inicio
├── src/                           # Componentes personalizados
│   ├── components/                # Componentes React
│   │   └── HomepageFeatures/      # Componente de características de la página principal
│   │       ├── index.js
│   │       └── styles.module.css
│   ├── css/                       # Estilos CSS
│   │   └── custom.css             # Estilos personalizados
│   └── pages/                     # Páginas principales
│       ├── index.js               # Página de inicio
│       └── index.module.css       # Estilos de la página de inicio
├── docusaurus.config.js           # Configuración principal
├── package.json                   # Dependencias y scripts
├── README.md                      # Documentación del proyecto
├── RULES.md                       # Reglas del proyecto
└── sidebars.js                    # Configuración de navegación
```

### Tecnologías Utilizadas

- **Docusaurus 3.x**: Framework principal
- **Markdown**: Formato de documentación
- **Mermaid**: Para diagramas y flowcharts
- **Prism**: Resaltado de sintaxis

## Convenciones de Nomenclatura

### Archivos y Directorios

- **Directorios**: Usar `kebab-case` (minúsculas con guiones)

  - ✅ `calculo-diferencial`
  - ❌ `Calculo_Diferencial` o `calculoDiferencial`

- **Archivos Markdown**: Usar `kebab-case.md`

  - ✅ `sistemas-ecuaciones.md`
  - ❌ `Sistemas de Ecuaciones.md`

- **Archivos estáticos**: Mantener nombres descriptivos
  - ✅ `diagrama-flujo-algoritmo.png`
  - ✅ `libro-analisis-matematico-vol1.pdf`

### Estructura de URLs

- Seguir la jerarquía: `/materias/nombre-materia/categoria/`
- Ejemplo: `/materias/programacion-orientada-objetos/apuntes/herencia`

## Convenciones de Contenido

### Estructura de Página de Materia (index.md)

```markdown
# Nombre de la Materia

## Descripción

Breve descripción de la materia y sus objetivos.

## Contenidos

- [Apuntes](./apuntes/)
- [Trabajos Prácticos](./practicos/)
- [Exámenes](./examenes/)
- [Recursos Adicionales](./recursos/)

## Programa de la Materia

Lista organizada de unidades temáticas.
```

### Frontmatter Obligatorio

Cada archivo `.md` debe incluir frontmatter con metadata:

```yaml
---
title: "Título del Documento"
description: "Descripción breve del contenido"
sidebar_position: 1
tags: [etiqueta1, etiqueta2]
---
```

### Convenciones de Escritura

- **Títulos**: Usar Title Case para títulos principales
- **Subtítulos**: Usar sentence case para subtítulos
- **Enlaces**: Siempre usar rutas relativas para contenido interno
- **Imágenes**: Incluir alt text descriptivo
- **Código**: Especificar siempre el lenguaje para resaltado de sintaxis

## Organización de Contenido por Materia

### Categorías Principales

1. **apuntes/**: Notas de clase organizadas por tema
2. **practicos/**: Trabajos prácticos, guías de ejercicios, laboratorios
3. **examenes/**: Parciales, finales, recuperatorios con soluciones
4. **recursos/**: PDFs, libros, enlaces externos, videos

### Estructura de Apuntes

```plain
apuntes/
├── unidad-01-introduccion/
│   ├── index.md               # Resumen de la unidad
│   ├── conceptos-basicos.md
│   └── ejemplos-practicos.md
├── unidad-02-tema-avanzado/
└── resumen-general.md         # Síntesis de toda la materia
```

## Estándares de Calidad

### Contenido Markdown

- Usar encabezados jerárquicos correctamente (H1 → H2 → H3)
- Incluir tabla de contenidos para documentos largos (`[[TOC]]`)
- Usar listas con viñetas para enumerar conceptos
- Incluir ejemplos prácticos cuando sea relevante
- Agregar referencias y fuentes al final del documento

### Archivos PDF y Recursos

- Nomenclatura descriptiva: `tema-autor-año.pdf`
- Organizarlos en subcarpetas por tipo
- Incluir metadata en el índice correspondiente
- Verificar que los enlaces funcionen correctamente

### Imágenes y Diagramas

- Formato preferido: PNG para capturas, SVG para diagramas
- Resolución mínima: 1080p para capturas de pantalla
- Usar Mermaid para diagramas de flujo cuando sea posible
- Incluir fuente de la imagen si no es propia

## Configuración de Docusaurus

### Plugins Recomendados

- `@docusaurus/plugin-content-docs`: Gestión de documentación
- `@docusaurus/plugin-content-pages`: Páginas estáticas
- `@docusaurus/theme-mermaid`: Soporte para diagramas
- `docusaurus-plugin-mathjax`: Fórmulas matemáticas
- `@docusaurus/plugin-google-analytics`: Analytics (opcional)

### Configuración del Sidebar

Organizar por año académico y materia, con expansión automática de la sección actual.

## Mantenimiento y Actualizaciones

### Frecuencia de Actualización

- **Durante cursada activa**: Semanal
- **Al finalizar materia**: Revisión completa y organización final
- **Revisión general**: Semestral

### Checklist de Calidad

- [ ] Todos los enlaces internos funcionan
- [ ] PDFs están correctamente categorizados
- [ ] Imágenes tienen alt text
- [ ] Frontmatter completo en todos los archivos
- [ ] Navegación coherente y lógica
- [ ] Sin errores de ortografía en títulos y navegación

## Buenas Prácticas

### SEO y Búsqueda

- Usar palabras clave relevantes en títulos y descripciones
- Mantener URLs limpias y descriptivas
- Incluir meta descriptions en frontmatter
- Usar tags consistentes para categorización

### Accesibilidad

- Estructura de encabezados lógica
- Contraste adecuado en imágenes
- Descripción alternativa para contenido visual
- Navegación por teclado funcional

### Performance

- Optimizar tamaño de imágenes
- Usar lazy loading para contenido pesado
- Minimizar archivos CSS/JS personalizados
- Comprimir PDFs grandes

## Roadmap del Proyecto

### Fase 1: Setup Inicial

- Configurar Docusaurus
- Definir estructura base
- Crear templates para materias

### Fase 2: Migración de Contenido

- Agregar materias ya cursadas
- Organizar archivos existentes
- Establecer flujo de trabajo

### Fase 3: Optimización

- Implementar búsqueda
- Mejorar navegación
- Agregar funcionalidades avanzadas

---

**Última actualización**: Septiembre 2025  
**Versión**: 1.0  
**Mantenedor**: Agustin Arenas
