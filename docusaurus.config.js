// @ts-check

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const organizationName = "ArenasAgustin";
const projectName = "MindArchive";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MindArchive",
  tagline:
    "Repositorio centralizado de apuntes, trabajos y recursos académicos",
  favicon: "img/favicon.ico",

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "📚 MindArchive",
        items: [
          {
            type: "docSidebar",
            sidebarId: "materiasSidebar",
            position: "left",
            label: "📖 Materias",
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "📚 MindArchive",
            items: [
              {
                label: "📖 Todas las Materias",
                to: "/docs/",
              },
            ],
          },
          {
            title: "🚀 Recursos",
            items: [
              {
                label: "📝 Contribuir",
                href: `https://github.com/${organizationName}/${projectName}/blob/main/README.md`,
              },
            ],
          },
          {
            title: "🔗 Enlaces",
            items: [
              {
                label: "📂 GitHub",
                href: `https://github.com/${organizationName}/${projectName}`,
              },
              {
                label: "📧 Contacto",
                href: "mailto:arenasagustin7@gmail.com",
              },
              {
                label: "⭐ Dar una estrella",
                href: `https://github.com/${organizationName}/${projectName}/stargazers`,
              },
            ],
          },
        ],
        copyright: `�️ Copyright © ${new Date().getFullYear()} Agustín Arenas. MindArchive construido con ❤️ usando Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["cpp", "java", "python", "matlab"],
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
