import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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

function QuickAccess() {
  const quickLinks = [
    {
      title: "🧮 Análisis Matemático",
      description: "Límites, derivadas e integrales",
      link: "/docs/materias/analisis-matematico-2/",
      badge: "Matemáticas",
    },
    {
      title: "📊 Probabilidad y Estadística",
      description: "Distribuciones y variables aleatorias",
      link: "/docs/materias/probabilidad-y-estadistica/",
      badge: "Estadística",
    },
    {
      title: "💻 Algoritmos y Estructuras",
      description: "Pilas, colas y complejidad algorítmica",
      link: "/docs/materias/algoritmos-y-estructuras-de-datos/",
      badge: "Recién Actualizado",
    },
  ];

  return (
    <section className={styles.quickAccess}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>🚀 Acceso Rápido a Materias</h2>
          <p>Comienza tu estudio con el material más popular y actualizado</p>
        </div>
        <div className="row">
          {quickLinks.map((item, idx) => (
            <div key={idx} className="col col--4">
              <Link to={item.link} className={styles.quickCard}>
                <div className={styles.quickCardHeader}>
                  <h3>{item.title}</h3>
                  <span
                    className={clsx(styles.badge, {
                      [styles.badgeNew]: item.badge === "Recién Actualizado",
                    })}
                  >
                    {item.badge}
                  </span>
                </div>
                <p>{item.description}</p>
                <div className={styles.cardFooter}>
                  <span>Ver contenido →</span>
                </div>
              </Link>
            </div>
          ))}
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
        <QuickAccess />
        <CallToAction />
      </main>
    </Layout>
  );
}
