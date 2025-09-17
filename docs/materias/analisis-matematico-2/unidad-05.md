---
title: "Unidad 5: Curvas"
description: "Análisis Matemático 2 - Unidad 5: Funciones de tipo curva, integrales de línea, geometría diferencial de curvas, teorema fundamental de integrales de línea y teorema de Green."
sidebar_position: 7
tags: [analisis-matematico-2, curvas, integrales-linea, geometria-diferencial, green, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Extender el análisis de una variable a funciones de tipo curva, desarrollando herramientas para representar líneas en el espacio y calcular efectos globales mediante integrales de línea.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Extender el análisis de una variable a funciones de tipo curva
- Representar líneas en el plano y el espacio a través de funciones de tipo curva
- Plantear integrales de línea para calcular efectos globales de funciones definidas en curvas
- Describir curvas localmente a través de parámetros de geometría diferencial, como la curvatura
- Aplicar el teorema fundamental de integrales de línea y el teorema de Green

## 📋 Contenidos y recursos

### 5.1 Fundamentos de Curvas

- **5.1.1** Definición y parametrización de curvas
- **5.1.2** Análisis componente a componente
- **5.1.3** Conjuntos asociados: gráfico e imagen

### 5.2 Integrales de Línea

- **5.2.1** Integral de línea de campos escalares
- **5.2.2** Integral de línea de campos vectoriales
- **5.2.3** Interpretación física y aplicaciones

### 5.3 Geometría Diferencial de Curvas

- **5.3.1** Vector tangente, normal y binormal
- **5.3.2** Curvatura y torsión
- **5.3.3** Triedro de Frenet

### 5.4 Teoremas Fundamentales

- **5.4.1** Teorema fundamental de integrales de línea
- **5.4.2** Campos conservativos
- **5.4.3** Teorema de Green

## 💡 Idea Central

Una **función de tipo curva** es un vector de funciones de una variable:

$$
\gamma: [a,b] \rightarrow \mathbb{R}^n, \quad \gamma(t) = (\gamma_1(t), \gamma_2(t), \ldots, \gamma_n(t))
$$

### Análisis Componente a Componente

El **Teorema del Límite** permite analizar vectores componente a componente (tomar límite, derivar, integrar). Como las componentes de $\gamma$ son funciones de una variable, este análisis no requiere herramientas nuevas.

### Novedad en Conjuntos Asociados

La novedad de estas funciones está en sus **conjuntos asociados**. Tanto el gráfico como la imagen de $\gamma$ son **líneas en el plano o el espacio**.

### Aplicaciones Principales

El principal uso de una curva es entonces **representar líneas para hacer cuentas con ellas**. Por ejemplo:

- Calcular la longitud de una espiral
- Determinar la curvatura de una parábola
- Encontrar el promedio de una función definida a lo largo de un cable
- Calcular el trabajo de un campo a lo largo de una trayectoria

### Herramientas Clave

- **Integral de línea:** Específica para funciones definidas a lo largo de curvas, permite calcular parámetros globales como promedios o circulaciones
- **Geometría diferencial:** Permite analizar más en detalle la forma de una curva a nivel local, alrededor de puntos específicos

## Primer tema: 5.1 Fundamentos de Curvas

### 5.1.1 Definición y Parametrización de Curvas

**Definición:** Una **curva parametrizada** es una función vectorial:

$$
\gamma: [a,b] \subseteq \mathbb{R} \rightarrow \mathbb{R}^n
$$

donde $\gamma(t) = (\gamma_1(t), \gamma_2(t), \ldots, \gamma_n(t))$.

**Parametrización regular:** Una curva $\gamma$ es **regular** en $t_0$ si $\gamma'(t_0) \neq \vec{0}$.

### 5.1.2 Análisis Componente a Componente

**Límites:**
$$
\lim_{t \rightarrow t_0} \gamma(t) = \left(\lim_{t \rightarrow t_0} \gamma_1(t), \ldots, \lim_{t \rightarrow t_0} \gamma_n(t)\right)
$$

**Derivadas:**
$$
\gamma'(t) = (\gamma_1'(t), \gamma_2'(t), \ldots, \gamma_n'(t))
$$

**Integrales:**
$$
\int_a^b \gamma(t) \, dt = \left(\int_a^b \gamma_1(t) \, dt, \ldots, \int_a^b \gamma_n(t) \, dt\right)
$$

### 5.1.3 Conjuntos Asociados

**Gráfico:** $\text{Gr}_{\gamma} = \{(t, \gamma(t)) : t \in [a,b]\} \subseteq \mathbb{R}^{n+1}$

**Imagen (Traza):** $\text{Im}_{\gamma} = \{\gamma(t) : t \in [a,b]\} \subseteq \mathbb{R}^n$

La imagen representa la **línea** en el espacio que describe la curva.

## Segundo tema: 5.2 Integrales de Línea

### 5.2.1 Integral de Línea de Campo Escalar

**Definición:** Sea $C$ una curva con parametrización regular $\gamma: [a,b] \rightarrow \mathbb{R}^n$ y $f$ un campo escalar definido en $C$.

$$
\int_C f(\vec{x}) \, dl = \int_a^b f(\gamma(t)) \|\gamma'(t)\| \, dt
$$

**Interpretación:**

- Si $f(\vec{x}) = 1$, la integral es la **longitud de la curva**
- Si $f(\vec{x})$ es una densidad de masa lineal, la integral calcula la **masa total** de la curva

### 5.2.2 Integral de Línea de Campo Vectorial

**Definición:** Sea $C$ una curva con parametrización regular $\gamma: [a,b] \rightarrow \mathbb{R}^n$ y $\vec{F}$ un campo vectorial definido en $C$.

$$
\int_C \vec{F}(\vec{x}) \cdot d\vec{x} = \int_a^b \vec{F}(\gamma(t)) \cdot \gamma'(t) \, dt
$$

**Interpretación física:** La integral representa el **trabajo realizado** por el campo de fuerzas $\vec{F}$ al mover una partícula a lo largo de la curva $C$.

### 5.2.3 Propiedades de las Integrales de Línea

**Linealidad:**
$$
\int_C (af + bg) \, dl = a\int_C f \, dl + b\int_C g \, dl
$$

**Aditividad:**
$$
\int_{C_1 + C_2} f \, dl = \int_{C_1} f \, dl + \int_{C_2} f \, dl
$$

**Orientación:**
$$
\int_{-C} \vec{F} \cdot d\vec{x} = -\int_C \vec{F} \cdot d\vec{x}
$$

## Tercer tema: 5.3 Geometría Diferencial de Curvas

### 5.3.1 Vector Tangente

**Definición:** El **vector tangente unitario** en $t$ es:

$$
\vec{T}(t) = \frac{\gamma'(t)}{\|\gamma'(t)\|}
$$

Es un vector unitario que indica la **dirección de la curva** en cada punto.

### 5.3.2 Vector Normal Principal

**Definición:** El **vector normal principal** en $t$ es:

$$
\vec{N}(t) = \frac{\vec{T}'(t)}{\|\vec{T}'(t)\|}
$$

Es un vector unitario **perpendicular al vector tangente** que apunta en la dirección de la curvatura.

### 5.3.3 Vector Binormal y Triedro de Frenet

**Vector Binormal:** Para curvas en $\mathbb{R}^3$:

$$
\vec{B}(t) = \vec{T}(t) \times \vec{N}(t)
$$

Es un vector unitario perpendicular tanto a $\vec{T}$ como a $\vec{N}$.

**Triedro de Frenet:** Los tres vectores $\{\vec{T}, \vec{N}, \vec{B}\}$ forman un **triedro ortonormal**.

### 5.3.4 Curvatura

**Definición:** La **curvatura** en $t$ es:

$$
\kappa(t) = \|\vec{T}'(t)\| = \frac{\|\gamma'(t) \times \gamma''(t)\|}{\|\gamma'(t)\|^3}
$$

**Interpretación:** Mide qué tan rápido cambia la dirección del vector tangente, es decir, **qué tanto se curva la trayectoria**.

## Cuarto tema: 5.4 Teoremas Fundamentales

### 5.4.1 Teorema Fundamental de las Integrales de Línea

**Enunciado:** Sea $\vec{F}$ un campo vectorial y $C$ una curva que va del punto $A$ al punto $B$. Si $\vec{F}$ es un **campo conservativo** (es el gradiente de un campo escalar $f$), entonces:

$$
\int_C \nabla f \cdot d\vec{x} = f(B) - f(A)
$$

**Consecuencias importantes:**

- La integral es **independiente del camino**
- La integral sobre cualquier **curva cerrada** es cero
- El valor depende únicamente de los puntos inicial y final

### 5.4.2 Campos Conservativos

**Definición:** Un campo vectorial $\vec{F}$ es **conservativo** si existe un campo escalar $f$ tal que:

$$\vec{F} = \nabla f$$

La función $f$ se llama **función potencial** de $\vec{F}$.

**Criterio (en $\mathbb{R}^2$):** Si $\vec{F} = (P, Q)$ tiene derivadas parciales continuas en una región simplemente conexa, entonces $\vec{F}$ es conservativo si y solo si:

$$
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

### 5.4.3 Teorema de Green

**Enunciado:** Sea $C$ una curva **cerrada, simple y suave a trozos** que encierra una región $R$. Si $\vec{F} = (P, Q)$ es un campo vectorial con componentes continuas y derivadas parciales de primer orden continuas, entonces:

$$
\oint_C P \, dx + Q \, dy = \iint_R \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA
$$

**Interpretación:**

- **Lado izquierdo:** Circulación del campo a lo largo de la frontera
- **Lado derecho:** Flujo del rotacional del campo sobre la región

**Formas especiales:**

**Área encerrada:**
$$
\text{Área}(R) = \oint_C x \, dy = -\oint_C y \, dx = \frac{1}{2}\oint_C (x \, dy - y \, dx)
$$

**Criterio de conservatividad:** Si $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0$ en toda la región, entonces $\vec{F}$ es conservativo.
