/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  materiasSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Introducción",
    },
    {
      type: "category",
      label: "Matemáticas",
      items: [
        {
          type: "category",
          label: "Análisis Matemático 2",
          items: [
            "materias/analisis-matematico-2/index",
            "materias/analisis-matematico-2/unidad-1",
            "materias/analisis-matematico-2/unidad-2",
          ],
        },
      ],
    },
  ],
};
