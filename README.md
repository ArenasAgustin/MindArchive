# Documentación Académica Universitaria

Este proyecto es un sitio web de documentación académica construido con [Docusaurus 2](https://docusaurus.io/), un generador de sitios estáticos moderno.

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

## Compilación

```bash
npm run build
```

Este comando genera contenido estático en el directorio `build` que puede ser servido por cualquier servicio de alojamiento de contenido estático.

## Estructura del Proyecto

```
documentacion-academica/
├── docs/
│   ├── index.md
│   └── materias/
│       └── analisis-matematico-2/
├── src/
│   ├── components/
│   │   └── HomepageFeatures/
│   │       ├── index.js
│   │       └── styles.module.css
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       ├── index.js
│       └── index.module.css
├── docusaurus.config.js
├── package.json
├── README.md
├── RULES.md
└── sidebars.js
```

## Cómo Contribuir

1. Clona este repositorio
2. Crea una rama para tu contribución (`git checkout -b feature/nueva-materia`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Agrega documentación para nueva materia'`)
5. Envía un pull request

## Agregar Contenido

### Agregar una nueva materia

1. Crea un nuevo archivo Markdown en la carpeta correspondiente dentro de `docs/`
2. Agrega el frontmatter con la posición en la barra lateral:

```md
---
sidebar_position: 3
---

# Nombre de la Materia

Contenido...
```

3. Actualiza `sidebars.js` si es necesario para incluir la nueva materia

### Agregar una entrada de blog

Crea un nuevo archivo en la carpeta `blog/` con el formato `YYYY-MM-DD-titulo.md`:

```md
---
slug: titulo-url-amigable
title: Título de la Entrada
authors: [nombre]
tags: [etiqueta1, etiqueta2]
---

Contenido del blog...
```

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.