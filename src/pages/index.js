import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useGlobalData from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={clsx("hero__title", styles.heroTitle)}>
              🎓 {siteConfig.title}
            </h1>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>
            <p className={styles.heroDescription}>
              Tu plataforma integral de recursos académicos universitarios.
              Accede a apuntes organizados, guías de estudio y material de
              calidad para potenciar tu aprendizaje.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.primaryButton
                )}
                to="/docs/"
              >
                📚 Explorar Documentación
              </Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Materias</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Unidades</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Gratuito</div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className={styles.heroBackground}>
          <div className={styles.floatingElement} style={{ "--delay": "0s" }}>
            📊
          </div>
          <div className={styles.floatingElement} style={{ "--delay": "1s" }}>
            🧮
          </div>
          <div className={styles.floatingElement} style={{ "--delay": "2s" }}>
            💻
          </div>
          <div className={styles.floatingElement} style={{ "--delay": "3s" }}>
            📈
          </div>
          <div className={styles.floatingElement} style={{ "--delay": "4s" }}>
            ⚗️
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Búsqueda Inteligente",
      description:
        "Encuentra cualquier concepto, fórmula o algoritmo al instante con búsqueda avanzada.",
    },
    {
      icon: "📐",
      title: "Fórmulas Matemáticas",
      description:
        "Renderizado profesional de ecuaciones con KaTeX, igual que en LaTeX.",
    },
    {
      icon: "💻",
      title: "Código Resaltado",
      description:
        "Ejemplos de código en C++, Java, Python con syntax highlighting.",
    },
    {
      icon: "📊",
      title: "Diagramas Interactivos",
      description:
        "Visualizaciones de algoritmos y estructuras de datos con Mermaid.",
    },
    {
      icon: "🕒",
      title: "Siempre Actualizado",
      description:
        "Contenido revisado y actualizado constantemente con las últimas correcciones.",
    },
    {
      icon: "📱",
      title: "100% Responsive",
      description:
        "Accede desde cualquier dispositivo: desktop, tablet o móvil.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>✨ ¿Por qué elegir MindArchive?</h2>
          <p>
            Diseñado para estudiantes, hecho por estudiantes. Todo lo que
            necesitas en un solo lugar.
          </p>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAccess() {
  const globalData = useGlobalData();
  const docsPluginData = globalData["docusaurus-plugin-content-docs"]?.default;

  // Obtener todas las materias desde los docs
  const allDocs = docsPluginData?.docs || [];

  // Filtrar solo los index.md de materias y ordenar por fecha de actualización (más reciente primero)
  const quickLinks = allDocs
    .filter((doc) => {
      // Filtrar solo archivos index de materias que tengan last_updated
      return (
        doc.id.startsWith("materias/") &&
        doc.id.endsWith("/index") &&
        doc.frontMatter?.last_updated
      );
    })
    .sort((a, b) => {
      // Ordenar por fecha de actualización (más reciente primero)
      const dateA = new Date(a.frontMatter?.last_updated || "2000-01-01");
      const dateB = new Date(b.frontMatter?.last_updated || "2000-01-01");
      return dateB - dateA; // Descendente (más nuevo primero)
    })
    .slice(0, 3) // Mostrar solo las 3 más recientes
    .map((doc) => ({
      title: `${doc.frontMatter?.icon || "📚"} ${doc.title}`,
      description: doc.description || doc.frontMatter?.description || "",
      link: doc.permalink,
      badge: doc.frontMatter?.badge || "Disponible",
      icon: doc.frontMatter?.icon || "📚",
      lastUpdated: doc.frontMatter?.last_updated,
    }));

  return (
    <section className={styles.quickAccess}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>🚀 Últimas Actualizaciones</h2>
          <p>Las materias más recientemente actualizadas con nuevo contenido</p>
        </div>
        <div className="row">
          {quickLinks.map((item, idx) => (
            <div key={idx} className="col col--4">
              <Link to={item.link} className={styles.quickCard}>
                <div className={styles.quickCardIcon}>{item.icon}</div>
                <div className={styles.quickCardHeader}>
                  <h3>{item.title}</h3>
                  <span
                    className={clsx(styles.badge, {
                      [styles.badgeNew]: item.badge === "Actualizado",
                      [styles.badgeProgress]: item.badge === "En Progreso",
                    })}
                  >
                    {item.badge}
                  </span>
                </div>
                <p>{item.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardLink}>
                    Ver contenido <span className={styles.arrow}>→</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <Link
            to="/docs/"
            className="button button--outline button--primary button--lg"
          >
            Ver todas las materias
          </Link>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>¿Quieres contribuir al proyecto?</h2>
          <p>
            Únete a nuestra comunidad y ayuda a crear el mejor repositorio de
            recursos académicos universitarios
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              href="https://github.com/ArenasAgustin/Facultad"
              target="_blank"
            >
              📂 Ver en GitHub
            </Link>
            <Link
              className="button button--outline button--lg"
              href="mailto:arenasagustin7@gmail.com"
            >
              📧 Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Recursos Académicos Universitarios`}
      description="Plataforma integral de apuntes, guías de estudio y recursos académicos para estudiantes universitarios. Material organizado por materias con contenido actualizado."
    >
      <HomepageHeader />
      <main>
        <Features />
        <QuickAccess />
        <CallToAction />
      </main>
    </Layout>
  );
}
