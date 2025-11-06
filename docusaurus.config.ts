import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const organizationName = "ArenasAgustin";
const projectName = "MindArchive";

// Cargar variables de entorno para Algolia
const algoliaAppId = process.env.ALGOLIA_APP_ID || "YOUR_APP_ID";
const algoliaApiKey = process.env.ALGOLIA_API_KEY || "YOUR_SEARCH_API_KEY";
const algoliaIndexName = process.env.ALGOLIA_INDEX_NAME || "mindarchive";

const config: Config = {
  title: "MindArchive",
  tagline:
    "Repositorio centralizado de apuntes, trabajos y recursos académicos",
  favicon: "img/favicon.ico",

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "algolia-site-verification",
        content: "1D930C75B940815D",
      },
    ],

    // Algolia DocSearch configuration
    // Configurado desde variables de entorno (.env)
    // Aplica en https://docsearch.algolia.com/apply/ para obtener credenciales
    algolia: {
      appId: algoliaAppId,
      apiKey: algoliaApiKey,
      indexName: algoliaIndexName,
      contextualSearch: true,
      searchPagePath: "search",
    },

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
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
          type: "dropdown",
          label: "🎓 Recursos",
          position: "left",
          items: [
            {
              label: "📝 Guía de Contribución",
              to: `https://github.com/${organizationName}/${projectName}/blob/main/CONTRIBUTING.md`,
            },
            {
              label: "📋 Plantillas",
              to: `https://github.com/${organizationName}/${projectName}/tree/main/docs/_templates`,
            },
            {
              label: "🐛 Reportar un problema",
              to: `https://github.com/${organizationName}/${projectName}/issues/new`,
            },
          ],
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
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
      copyright: `©️ Copyright © ${new Date().getFullYear()} Agustín Arenas. MindArchive construido con ❤️ usando Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["cpp", "java", "python", "matlab"],
    },
  } satisfies Preset.ThemeConfig,

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
