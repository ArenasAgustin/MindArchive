import React, { useEffect } from "react";
import type { ReactElement } from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useHomePageRoute } from "@docusaurus/theme-common/internal";
import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import { useHistory, useLocation } from "@docusaurus/router";
import styles from "./styles.module.css";
import clsx from "clsx";

// Iconos para diferentes rutas
const ROUTE_ICONS: { [key: string]: string } = {
  home: "🏠",
  docs: "📚",
  materias: "📖",
  algoritmos: "💻",
  "algoritmos-y-estructuras-de-datos": "🌳",
  "analisis-matematico-2": "📈",
  "probabilidad-y-estadistica": "📊",
  unidad: "📄",
};

// Obtener icono basado en la ruta o tipo de página
function getIconForRoute(label: string): string {
  const lowerLabel = label.toLowerCase();

  // Buscar coincidencias en el mapa de iconos
  for (const [key, icon] of Object.entries(ROUTE_ICONS)) {
    if (lowerLabel.includes(key)) {
      return icon;
    }
  }

  // Detectar unidades por patrón
  if (/unidad\s*\d+/i.test(lowerLabel)) {
    return ROUTE_ICONS.unidad;
  }

  // Por defecto
  return "📄";
}

// Función para limpiar y mejorar el texto del breadcrumb
function formatBreadcrumbLabel(label: string): string {
  // Eliminar el número de sidebar_position si está presente
  return label.replace(/^\d+\.\s*/, "");
}

export default function DocBreadcrumbs(): ReactElement | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const history = useHistory();
  const location = useLocation();

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  // Construir breadcrumbs con ítem de inicio
  const items = homePageRoute
    ? [
        {
          label: translate({
            id: "theme.docs.breadcrumbs.home",
            message: "Inicio",
            description: "The ARIA label for the home page in the breadcrumbs",
          }),
          href: homePageRoute.path,
          icon: ROUTE_ICONS.home,
        },
        ...breadcrumbs.map((item) => ({
          ...item,
          label: formatBreadcrumbLabel(item.label),
          icon: getIconForRoute(item.label),
        })),
      ]
    : breadcrumbs.map((item) => ({
        ...item,
        label: formatBreadcrumbLabel(item.label),
        icon: getIconForRoute(item.label),
      }));

  // Atajos de teclado para navegación
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Alt + Flecha Derecha: ir al siguiente breadcrumb
      if (e.altKey && e.key === "ArrowRight") {
        e.preventDefault();
        const currentIndex = items.findIndex((item) => {
          const href =
            typeof item.href === "string" ? item.href : item.href?.[0];
          return href === location.pathname;
        });

        if (currentIndex !== -1 && currentIndex < items.length - 1) {
          const nextItem = items[currentIndex + 1];
          const nextHref =
            typeof nextItem.href === "string"
              ? nextItem.href
              : nextItem.href?.[0];
          if (nextHref) {
            history.push(nextHref);
          }
        }
      }

      // Alt + Flecha Izquierda: ir al breadcrumb anterior
      if (e.altKey && e.key === "ArrowLeft") {
        e.preventDefault();
        const currentIndex = items.findIndex((item) => {
          const href =
            typeof item.href === "string" ? item.href : item.href?.[0];
          return href === location.pathname;
        });

        if (currentIndex > 0) {
          const prevItem = items[currentIndex - 1];
          const prevHref =
            typeof prevItem.href === "string"
              ? prevItem.href
              : prevItem.href?.[0];
          if (prevHref) {
            history.push(prevHref);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [items, location.pathname, history]);

  // Función para copiar enlace al portapapeles
  const handleCopyLink = (href: string | string[] | undefined) => {
    const url = typeof href === "string" ? href : href?.[0];
    if (url) {
      const fullUrl = `${window.location.origin}${url}`;
      navigator.clipboard.writeText(fullUrl).then(() => {
        // Opcional: mostrar notificación de éxito
        console.log("✅ Enlace copiado al portapapeles");
      });
    }
  };

  // Función para abrir en nueva pestaña
  const handleOpenInNewTab = (href: string | string[] | undefined) => {
    const url = typeof href === "string" ? href : href?.[0];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <nav className={styles.breadcrumbsContainer} aria-label="breadcrumbs">
      <ul
        className={clsx("breadcrumbs", styles.breadcrumbs)}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const ItemTag = isLast ? "span" : Link;
          const href =
            typeof item.href === "string" ? item.href : item.href?.[0];
          const linkProps =
            !isLast && href
              ? {
                  href,
                  itemProp: "item" as const,
                }
              : {};

          return (
            <li
              key={idx}
              className={clsx("breadcrumbs__item", {
                "breadcrumbs__item--active": isLast,
                [styles.breadcrumbsItemLink]: !isLast,
                [styles.breadcrumbsItemActive]: isLast,
              })}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              onContextMenu={(e) => {
                if (!isLast && href) {
                  e.preventDefault();

                  // Cerrar cualquier menú contextual existente
                  const existingMenus = document.querySelectorAll(
                    `.${styles.contextMenu}`
                  );
                  existingMenus.forEach((menu) => menu.remove());

                  const contextMenu = document.createElement("div");
                  contextMenu.className = styles.contextMenu;
                  contextMenu.innerHTML = `
                    <button class="${styles.contextMenuItem}" data-action="copy">📋 Copiar enlace</button>
                    <button class="${styles.contextMenuItem}" data-action="newtab">🔗 Abrir en nueva pestaña</button>
                  `;

                  contextMenu.style.position = "fixed";
                  contextMenu.style.left = `${e.clientX}px`;
                  contextMenu.style.top = `${e.clientY}px`;

                  document.body.appendChild(contextMenu);

                  const handleClick = (event: MouseEvent) => {
                    const target = event.target as HTMLElement;
                    if (target.dataset.action === "copy") {
                      handleCopyLink(href);
                    } else if (target.dataset.action === "newtab") {
                      handleOpenInNewTab(href);
                    }
                    contextMenu.remove();
                    document.removeEventListener("click", handleOutsideClick);
                  };

                  const handleOutsideClick = (event: MouseEvent) => {
                    if (!contextMenu.contains(event.target as Node)) {
                      contextMenu.remove();
                      document.removeEventListener("click", handleOutsideClick);
                    }
                  };

                  contextMenu.addEventListener("click", handleClick);
                  setTimeout(() => {
                    document.addEventListener("click", handleOutsideClick);
                  }, 0);
                }
              }}
            >
              <ItemTag
                className={clsx("breadcrumbs__link", {
                  [styles.breadcrumbsLink]: !isLast,
                })}
                {...linkProps}
              >
                <span className={styles.breadcrumbIcon}>{item.icon}</span>
                <span itemProp="name">{item.label}</span>
              </ItemTag>
              <meta itemProp="position" content={String(idx + 1)} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
