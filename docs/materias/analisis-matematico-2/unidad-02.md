---
title: "Unidad 2: Límites y Continuidad"
description: "Análisis Matemático 2 - Unidad 2: Extensión de los conceptos de límite y continuidad a funciones de varias variables, condiciones necesarias y suficientes, y aplicaciones en el análisis multivariable."
sidebar_position: 3
tags: [analisis-matematico-2, limites, continuidad, teoremas, matematicas]
last_update:
  date: 2025-09-14
  author: Agustín Arenas
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Extender los conceptos fundamentales de límite y continuidad desde funciones de una variable a funciones de varias variables, desarrollando herramientas para analizar el comportamiento de funciones multivariables.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Aplicar la definición épsilon-delta de límite en varias variables
- Utilizar el teorema de caracterización de límites por componentes
- Distinguir entre condiciones necesarias y suficientes para la existencia de límites
- Analizar la continuidad de funciones multivariables
- Aplicar el teorema del sándwich en contextos multivariables
- Evaluar límites restringidos y límites iterados

## 📋 Contenidos y recursos

### 2.1 Fundamentos Conceptuales

- **2.1.1** Motivación y extensión desde una variable
- **2.1.2** Importancia en el análisis matemático
- **2.1.3** Relación entre límite y continuidad

### 2.2 Definición y Caracterización de Límites

- **2.2.1** Definición épsilon-delta en varias variables
- **2.2.2** Teorema del límite por componentes
- **2.2.3** Álgebra de límites

### 2.3 Continuidad en Varias Variables

- **2.3.1** Definición de continuidad
- **2.3.2** Condiciones equivalentes
- **2.3.3** Puntos aislados vs puntos de acumulación

### 2.4 Condiciones para Existencia de Límites

- **2.4.1** Condiciones necesarias y suficientes
- **2.4.2** Límites restringidos y direccionales
- **2.4.3** Límites iterados
- **2.4.4** Teorema del sándwich

## Primer tema: 2.1 Fundamentos Conceptuales

### 2.1.1 Motivación y Extensión desde Una Variable

La noción de límite es el concepto central del cálculo y constituye la base fundamental para desarrollar todas las herramientas del análisis matemático.

**Importancia del concepto:**

- De ella se desprenden las definiciones más importantes del análisis matemático: derivadas (y diferenciales), integrales, series (y convergencia).
- En esta materia nos centraremos en el cálculo diferencial y el cálculo integral, pero no en las series.
- Todas estas serán las herramientas con las que abordaremos nuestro objeto de estudio: las funciones de varias variables.

### 2.1.2 Concepto de Continuidad

La continuidad es un concepto topológico que va más allá del cálculo. Sin embargo, en el contexto del análisis de funciones de varias variables, se encuentra íntimamente ligada a la noción de límite.

### 2.1.3 Objetivos de la Unidad

- Extender las definiciones de límite y continuidad a varias variables
- Reconocer condiciones para la existencia de un límite
- Distinguir entre condiciones necesarias, suficientes o ambas
- Aplicar estos conceptos para determinar la existencia de límites en casos particulares

## Segundo tema: 2.2 Definición y Caracterización de Límites

### 2.2.1 Definición Épsilon-Delta en Varias Variables

#### Repaso: Límite en Una Variable

Sean $f:D_{f}\subseteq \mathbb{R} \rightarrow \mathbb{R}$, $x_{0}\in \text{Acum}(D_{f})$ y $l\in\mathbb{R}$.

$f$ tiene límite $l$ en $x_{0}$ si y solo si:

$$
\forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall x:\{0 < |x-x_{0}| < \delta, x\in D_{f}\}\Rightarrow|f(x)-l| < \epsilon
$$

En tal caso se denota $\lim_{x\rightarrow x_{0}}f(x)=l$.

#### Límite en Varias Variables

Sean $\overline{f}:D_{\overline{f}} \subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_f)$, $\overline{l}\in\mathbb{R}^{p}$.

$\overline{f}$ tiene límite $\overline{l}$ en $\overline{x}_{0}$ si y solo si:

$$
\forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall\overline{x}:\{\overline{x}\in D_{\overline{f}}, 0<||\overline{x}-\overline{x}_{0}||<\delta\}\Rightarrow||\overline{f}(\overline{x})-\overline{l}||<\epsilon
$$

En tal caso, se denota $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$.

### 2.2.2 Teorema del Límite por Componentes

**Enunciado:** Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$, $\overline{l}\in\mathbb{R}^{p}$ donde:

$$\overline{f}(\overline{x})=\begin{pmatrix}f_{1}(\overline{x})\\ \vdots\\ f_{p}(\overline{x})\end{pmatrix} \quad \text{y} \quad \overline{l}=\begin{pmatrix}l_{1}\\ \vdots\\ l_{p}\end{pmatrix}$$

Entonces:

$$
\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}\iff\begin{cases}\lim_{\overline{x}\rightarrow\overline{x}_{0}}f_{1}(\overline{x})=l_{1}\\ \vdots\\ \lim_{\overline{x}\rightarrow\overline{x}_{0}}f_{p}(\overline{x})=l_{p}\end{cases}
$$

### 2.2.3 Álgebra de Límites

Sean $\varphi:D\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}$, $\overline{f},\overline{g}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{h}:D_{\overline{h}}\subseteq\mathbb{R}^{p}\rightarrow\mathbb{R}^{q}$, $c\in\mathbb{R}$, $\overline{x}_{0}\in\mathbb{R}^{n}$, $\overline{y}_{0},\overline{z}_{0}\in\mathbb{R}^{p}$, $\tilde{l}\in\mathbb{R}^{q}$.

Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\varphi(\overline{x})=c$, $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{y}_{0}$, $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{g}(\overline{x})=\overline{z}_{0}$ y $\lim_{\overline{y}\rightarrow\overline{y}_{0}}\overline{h}(\overline{y})=\tilde{l}$.

**Entonces:**

1. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\varphi(\overline{x})\overline{f}(\overline{x})]=c\overline{y}_{0}$
2. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\overline{f}(\overline{x})\pm\overline{g}(\overline{x})]=\overline{y}_{0}\pm\overline{z}_{0}$
3. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}[\overline{h}(\overline{f}(\overline{x}))]=\tilde{l}$

## Tercer tema: 2.3 Continuidad en Varias Variables

### 2.3.1 Definición de Continuidad

**Definición:** Una función $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$ es continua en un punto $\overline{x}_{0}\in D_{\overline{f}}$ si y solo si:

$$
\forall\epsilon\in\mathbb{R} > 0:\exists\delta\in\mathbb{R} > 0 \text{ tal que } \forall\overline{x}:\{\overline{x}\in D_{\overline{f}}, ||\overline{x}-\overline{x}_{0}||<\delta\}\Rightarrow||\overline{f}(\overline{x})-\overline{f}(\overline{x}_{0})||<\epsilon
$$

### 2.3.2 Condiciones Equivalentes para Continuidad

**Caso 1: Puntos Aislados**
Si $\overline{x}_{0}$ es un punto aislado del dominio $D_{\overline{f}}$, entonces $\overline{f}$ es automáticamente continua en $\overline{x}_{0}$.

**Caso 2: Puntos de Acumulación**
Si $\overline{x}_{0}$ es un punto de acumulación del dominio, $\overline{f}$ es continua en $\overline{x}_{0}$ si y solo si se cumplen las tres condiciones siguientes:

1. $\overline{x}_{0}\in D_{\overline{f}}$
2. Existe $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})$
3. $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{f}(\overline{x}_{0})$

### 2.3.3 Propiedades de la Continuidad

**Observación importante:** Si una función es continua en un punto de acumulación, el límite existe en ese punto y coincide con el valor de la función.

## Cuarto tema: 2.4 Condiciones para Existencia de Límites

### 2.4.1 Teorema del Sándwich

**Enunciado:** Sean $f,g,h:D\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}$, $\overline{x}_{0}\in \text{Acum}(D)$ y $l\in\mathbb{R}$.

Si para todo $\overline{x}\in D$ se cumple:

- $f(\overline{x})\le g(\overline{x})\le h(\overline{x})$
- $\lim_{\overline{x}\rightarrow\overline{x}_{0}}f(\overline{x})=\lim_{\overline{x}\rightarrow\overline{x}_{0}}h(\overline{x})=l$

Entonces $\lim_{\overline{x}\rightarrow\overline{x}_{0}}g(\overline{x})=l$.

### 2.4.2 Condiciones Necesarias: Unicidad del Límite

**Teorema de Unicidad:** Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$, $\overline{l},\overline{m}\in\mathbb{R}^{p}$.

Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$ y $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{m}$, entonces $\overline{l}=\overline{m}$.

### 2.4.3 Límites Restringidos (Condición Necesaria)

**Enunciado:** Sean $\overline{f}:D_{\overline{f}}\subseteq\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$, $\overline{l}\in\mathbb{R}^{p}$, $\overline{x}_{0}\in \text{Acum}(D_{\overline{f}})$ y $\overline{u}\in\mathbb{R}^{n}$ tales que $\overline{x}_{0}+t\cdot\overline{u}\in D_{\overline{f}}$ para todo $t\in(0,1]$.

Si $\lim_{\overline{x}\rightarrow\overline{x}_{0}}\overline{f}(\overline{x})=\overline{l}$, entonces $\lim_{t\rightarrow0^{+}}\overline{f}(\overline{x}_{0}+t\cdot\overline{u})=\overline{l}$.

**Interpretación y aplicaciones:**

- **Es una condición necesaria (CN)**, no suficiente
- Si el límite global existe, los límites a lo largo de cualquier camino en el dominio que se acerca al punto deben existir y dar el mismo valor
- **Aplicación práctica:** Si los límites a lo largo de dos caminos diferentes dan resultados distintos, el límite global no existe
- **Limitación:** El hecho de que el límite exista y sea el mismo en varios caminos no garantiza la existencia del límite global

### 2.4.4 Límites Iterados

**Para funciones en $\mathbb{R}^{2}$:**

Si $\lim_{(x,y)\rightarrow(x_{0},y_{0})}f(x,y)=l$, entonces:

- $\lim_{x\rightarrow x_{0}}\lim_{y\rightarrow y_{0}}f(x,y)=l$
- $\lim_{y\rightarrow y_{0}}\lim_{x\rightarrow x_{0}}f(x,y)=l$

**Observación:** Esta es también una condición necesaria, no suficiente. La existencia e igualdad de los límites iterados no garantiza la existencia del límite doble.
