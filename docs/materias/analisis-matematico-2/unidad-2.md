---
title: "Unidad 2: Límites y continuidad"
description: "Extensión de los conceptos de límite y continuidad a funciones de varias variables. Se estudian definiciones, teoremas, condiciones necesarias y suficientes, y su aplicación en el análisis de funciones multivariables."
sidebar_position: 2
tags: [matematicas, analisis, limites, continuidad]
---

### Idea

- La noción de límite es el concepto central del cálculo.
- De ella se desprenden las definiciones más importantes del análisis matemático: derivadas (y diferenciales), integrales, series (y convergencia).
- En esta materia nos centraremos en el cálculo diferencial y el cálculo integral, pero no en las series.
- Todas estas serán las herramientas con las que abordaremos nuestro objeto de estudio, las funciones de varias variables, presentado en la unidad anterior.
- La continuidad es un concepto topológico y va más allá del cálculo.
- Sin embargo, en el contexto del análisis de funciones de varias variables, se encuentra íntimamente ligada a la noción de límite.

### Objetivos

- Extender las definiciones de límite y continuidad a varias variables.
- Reconocer condiciones para la existencia de un límite.
- Distinguirlas entre necesarias, suficientes o ambas.
- Aplicarlas para averiguar si el límite existe en un ejemplo particular.

---

### CNS de Límite

#### Repaso: Límite en Una Variable

- Sean $f:D_{f}\subseteq \mathbb{R} \rightarrow \mathbb{R}$, $x_{0}\in \text{Acum}(D_{f})$ y $l\in\mathbb{R}$. $f$ tiene límite $l$ en $x_{0}$ si y solo si:
  
  $$
  \forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall x:\{0 < |x-x_{0}| < \delta, x\in D_{f}\}\Rightarrow|f(x)-l| < \epsilon
  $$
  
- En tal caso se denota $\lim_{x\rightarrow x_{0}}f(x)=l$.

#### Límite en Varias Variables

- Sean $\overline{f}:D_{\overline{f}} \subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{f})$, $\overline{l}\in\mathbb{R}^{p}$. $\overline{f}$ tiene límite $\overline{l}$ en $\overline{x}_{0}$ si y solo si:
  
  $$
  \forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall\overline{x}:\{\overline{x}\in D_{\overline{f}}, 0<||\overline{x}-\overline{x}_{0}||<\delta\}\Rightarrow||\overline{f}(\overline{x})-\overline{l}||<\epsilon
  $$
  
- En tal caso, se denota $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$.

---

### Teorema del Límite

- **Enunciado**: Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$, $\overline{l}\in\mathbb{R}^{p}$ donde:
  
  $$
  \overline{f}(\overline{x})=\begin{pmatrix}f_{1}(\overline{x})\\ \vdots\\ f_{p}(\overline{x})\end{pmatrix} \quad \text{y} \quad \overline{l}=\begin{pmatrix}l_{1}\\ \vdots\\ l_{p}\end{pmatrix}
  $$
  
  Entonces:
  
  $$
  \lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}\iff\begin{cases}\lim_{\overline{x}\rightarrow\overline{x}_{0}}f_{1}(\overline{x})=l_{1}\\ \vdots\\ \lim_{\overline{x}\rightarrow\overline{x}_{0}}f_{p}(\overline{x})=l_{p}\end{cases}
  $$

---

### CS de Límite

#### Álgebra de Límites

- Sean $\varphi:D\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}$, $\overline{f},\overline{g}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{h}:D_{\overline{h}}\subseteq\mathbb{R}^{p}\rightarrow\mathbb{R}^{q}$, $c\in\mathbb{R}$, $\overline{x}_{0}\in\mathbb{R}^{n}$, $\overline{y}_{0},\overline{z}_{0}\in\mathbb{R}^{p}$, $\tilde{l}\in\mathbb{R}^{q}$.
- Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\varphi(\overline{x})=c$, $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{y}_{0}$, $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{g}(\overline{x})=\overline{z}_{0}$ y $\lim_{\overline{y}\rightarrow\overline{y}_{0}}\overline{h}(\overline{y})=\tilde{l}$.
- Entonces:
  1. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\varphi(\overline{x})\overline{f}(\overline{x})]=c\overline{y}_{0}$.
  2. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\overline{f}(\overline{x})\pm\overline{g}(\overline{x})]=\overline{y}_{0}\pm\overline{z}_{0}$.
  3. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\overline{h}(\overline{f}(\overline{x}))]=\tilde{l}$.

---

### Continuidad en Varias Variables

- **Definición**: Una función $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$ es continua en un punto $\overline{x}_{0}\in D_{\overline{f}}$ si y solo si:
  
  $$
  \forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall\overline{x}:\{\overline{x}\in D_{\overline{f}}, ||\overline{x}-\overline{x}_{0}||<\delta\}\Rightarrow||\overline{f}(\overline{x})-\overline{f}(\overline{x}_{0})||<\epsilon
  $$
  
- **Observaciones**:
  - Si $\overline{x}_{0}$ es un punto aislado del dominio $D_{\overline{f}}$, $\overline{f}$ es automáticamente continua en $\overline{x}_{0}$.
  - Si $\overline{x}_{0}$ es un punto de acumulación del dominio, $\overline{f}$ es continua en $\overline{x}_{0}$ si y solo si:
    - $\overline{x}_{0}\in D_{\overline{f}}$.
    - Existe $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})$.
    - $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{f}(\overline{x}_{0})$.
  - Si una función es continua en un punto de acumulación, el límite existe en ese punto.

---

### Teorema del Sándwich

- **Enunciado**: Sean $f,g,h:D\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}$, $\overline{x}_{0}\in \text{Acum}(D)$ y $l\in\mathbb{R}$. Si para todo $\overline{x}\in D$, se cumple $f(\overline{x})\le g(\overline{x})\le h(\overline{x})$ y $\lim_{\overline{x}\rightarrow\overline{x}_{0}}f(\overline{x})=\lim_{\overline{x}\rightarrow\overline{x}_{0}}h(\overline{x})=l$, entonces $\lim_{\overline{x}\rightarrow\overline{x}_{0}}g(\overline{x})=l$.

---

### CN de Límite

#### Unicidad del Límite

- **Enunciado**: Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$, $\overline{l},\overline{m}\in\mathbb{R}^{p}$.
  Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$ y $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{m}$, entonces $\overline{l}=\overline{m}$.

#### Límites Restringidos

- **Enunciado**: Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{l}\in\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$ y $\overline{u}\in\mathbb{R}^{n}$ tales que $\overline{x}_{0}+t\cdot\overline{u}\in D_{\overline{f}}$ para todo $t\in(0,1]$.
- Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$, entonces $\lim_{t\rightarrow0^{+}}\overline{f}(\overline{x}_{0}+t\cdot\overline{u})=\overline{l}$.
- **Observaciones**:
  - Es una **condición necesaria (CN)**.
  - Si el límite global existe, los límites a lo largo de cualquier camino en el dominio que se acerca al punto deben existir y dar el mismo valor.
  - Si los límites a lo largo de dos caminos diferentes dan resultados distintos, el límite global no existe.
  - **No es una condición suficiente (CS)**. El hecho de que el límite exista y sea el mismo en varios caminos no garantiza la existencia del límite global.

#### Límites Iterados

- Para $\mathbb{R}^{2}$: Si $\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=l$, entonces $\lim_{x\rightarrow x_{0}}\lim_{y\rightarrow y_{0}}f(x,y)=l$ y $\lim_{y\rightarrow y_{0}}\lim_{x\rightarrow x_{0}}f(x,y)=l$.
