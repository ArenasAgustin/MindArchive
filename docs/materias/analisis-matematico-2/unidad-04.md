---
title: "Unidad 4: Funciones Escalares - Integrales Múltiples"
description: "Análisis Matemático 2 - Unidad 4: Desarrollo del cálculo integral de varias variables, integrales múltiples, teorema de Fubini, cambio de variables y aplicaciones al cálculo de volúmenes y áreas."
sidebar_position: 6
tags: [analisis-matematico-2, integrales-multiples, fubini, cambio-variables, volumen, matematicas]
last_update:
  date: 2025-09-15
  author: Agustín Arenas
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Desarrollar el cálculo integral de varias variables mediante integrales múltiples, estableciendo las bases teóricas y las técnicas de cálculo para funciones escalares en dominios de múltiples dimensiones.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Extender el concepto de integral definida a múltiples variables
- Aplicar el teorema de Fubini para calcular integrales iteradas
- Utilizar cambios de variables en integrales múltiples
- Calcular volúmenes y áreas usando integrales múltiples
- Resolver problemas de masa, centro de masa y momentos de inercia
- Aplicar integrales múltiples en contextos probabilísticos

## 📋 Contenidos y recursos

### 4.1 Integral Múltiple

- **4.1.1** Repaso: integral en una variable
- **4.1.2** Partición y suma de Riemann en múltiples variables
- **4.1.3** Existencia y condiciones de integrabilidad

### 4.2 Teorema de Fubini

- **4.2.1** Enunciado y demostración del teorema
- **4.2.2** Integración por rectángulos
- **4.2.3** Integración por dominios generales

### 4.3 Teorema del Cambio de Variables

- **4.3.1** Repaso: cambio de variables en una variable
- **4.3.2** Teorema general y jacobiano
- **4.3.3** Coordenadas polares, cilíndricas y esféricas

### 4.4 Aplicaciones

- **4.4.1** Volúmenes y áreas
- **4.4.2** Masa y centro de masa
- **4.4.3** Momentos de inercia
- **4.4.4** Aplicaciones en probabilidad

## 💡 Idea Central

Esta unidad da comienzo a la **segunda parte de la materia**, donde desarrollamos el **Cálculo Integral de varias variables**.

En Análisis Matemático I vimos que hay dos grandes tipos de integrales: definidas e indefinidas. Si bien las últimas serán brevemente planteadas para funciones vectoriales en la Unidad 7, casi todas las integrales que usaremos en Análisis Matemático II son **definidas**.

Veremos distintos tipos de integrales, según el tipo de función que se integra y el tipo de dominio sobre el cual se integra. Pero todas ellas son un caso particular de las **Integrales Múltiples**, que definiremos en esta unidad y que se aplican a funciones escalares. Es decir, en vez de integrar una cantidad respecto de una variable, se la integra respecto de las varias (múltiples) variables de las que depende.

### Interpretación Geométrica

- **Una variable:** La integral definida está inspirada en el cálculo del **área bajo una curva**, representada como grafo de una función escalar.
- **Dos variables:** El grafo de una función escalar es una **manta** y bajo él hay un **volumen** que podemos calcular.
- **Múltiples dimensiones:** El grafo es una **superficie n-dimensional** y bajo él hay un **volumen (n+1)-dimensional**, que también podemos calcular.

El planteo en todos los casos es análogo y puede hacerse según el **paradigma de Riemann**.

### Dominios de Integración

Los dominios de integración de una variable son típicamente **intervalos**. En varias variables se vuelven muy complicados, ya que pueden tomar un sinfín de formas, lo que nos obliga a introducir **conceptos topológicos** para poder definirlos y clasificarlos.

## Primer tema: 4.1 Integral Múltiple

### 4.1.1 Repaso: Integral en Una Variable

Para una función $f: [a,b] \rightarrow \mathbb{R}$ continua, la integral definida se define como:

$$
\int_a^b f(x) dx = \lim_{n \rightarrow \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x_i
$$

donde $\Delta x_i = \frac{b-a}{n}$ y $x_i^* \in [x_{i-1}, x_i]$.

### 4.1.2 Partición y Suma de Riemann en Múltiples Variables

**Definición:** Sea $f: D \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ una función acotada definida en un dominio acotado $D$.

**Partición:** Una partición $P$ de $D$ es una división del dominio en subdominios $D_1, D_2, \ldots, D_k$ tales que:

- $D = \bigcup_{i=1}^{k} D_i$
- Los interiores de los $D_i$ son disjuntos
- Cada $D_i$ tiene volumen $\Delta V_i$

**Suma de Riemann:** Para cada subdominio $D_i$, elegimos un punto $\overline{x}_i^* \in D_i$ y formamos:

$$
S(f,P) = \sum_{i=1}^{k} f(\overline{x}_i^*) \Delta V_i
$$

**Definición de Integral Múltiple:** Si existe el límite:

$$
\lim_{||P|| \rightarrow 0} S(f,P) = \int \cdots \int_D f(\overline{x}) d\overline{x}
$$

donde $||P||$ es el diámetro máximo de los subdominios, entonces decimos que $f$ es integrable en $D$.

### 4.1.3 Existencia y Condiciones de Integrabilidad

**Teorema de la Existencia (CS de Integrabilidad):**

Sean $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ y $D \subseteq D_f$ tales que:

1. $D$ es acotado
2. $\text{Fr}(D)$ es liso a trozos
3. $f$ es acotada en $D$
4. $f$ es continua en $D - B$, donde $B$ es un conjunto liso a trozos

Entonces, $f$ es integrable en $D$ y el valor de la integral no depende del valor de $f$ en conjuntos lisos.

## Segundo tema: 4.2 Teorema de Fubini

### 4.2.1 Teorema de Fubini

**Enunciado:** Sea $f$ una función continua en $D = [a,b] \times [c,d]$. Entonces:

$$
\iint_D f(x,y) dA = \int_a^b \int_c^d f(x,y) dy dx = \int_c^d \int_a^b f(x,y) dx dy
$$

**Interpretación:** Este teorema permite calcular integrales dobles como integrales iteradas, reduciendo el problema a integrales de una variable que se calculan sucesivamente.

### 4.2.2 Integración por Rectángulos

Para dominios rectangulares $D = [a,b] \times [c,d]$, la integral doble se calcula directamente usando el teorema de Fubini:

$$
\iint_D f(x,y) dA = \int_a^b \left[\int_c^d f(x,y) dy\right] dx
$$

### 4.2.3 Integración por Dominios Generales

Para dominios más complejos, necesitamos describir la región $D$ en términos de desigualdades:

**Región de tipo I:** $D = \{(x,y) : a \leq x \leq b, g_1(x) \leq y \leq g_2(x)\}$

$$
\iint_D f(x,y) dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y) dy dx
$$

**Región de tipo II:** $D = \{(x,y) : c \leq y \leq d, h_1(y) \leq x \leq h_2(y)\}$

$$
\iint_D f(x,y) dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y) dx dy
$$

## Tercer tema: 4.3 Teorema del Cambio de Variables

### 4.3.1 Repaso: Cambio de Variables en Una Variable

En una variable, si $x = g(u)$ donde $g$ es diferenciable e inyectiva:

$$
\int_a^b f(x) dx = \int_{\alpha}^{\beta} f(g(u)) g'(u) du
$$

donde $\alpha = g^{-1}(a)$ y $\beta = g^{-1}(b)$.

### 4.3.2 Teorema del Cambio de Variables

**Teorema:** Sean $\overline{g}: A \rightarrow B$ una función inyectiva y $\overline{g} \in C^1(A)$ tal que la matriz jacobiana $J_{\overline{g}}(u,v)$ es invertible. Entonces:

$$
\iint_B f(x,y) dx dy = \iint_A f(\overline{g}(u,v)) |\det(J_{\overline{g}}(u,v))| du dv
$$

**Jacobiano:** El factor $|\det(J_{\overline{g}}(u,v))|$ se llama jacobiano de la transformación y representa el factor de expansión local del área.

### 4.3.3 Coordenadas Especiales

**Coordenadas Polares (2D):**

- Transformación: $x = s\cos\theta$, $y = s\sin\theta$
- Jacobiano: $|\det(J)| = s$

**Corolario para Coordenadas Polares:** Para $D$ en $\mathbb{R}^2$ y su correspondiente dominio $D'$ en coordenadas polares:

$$
\iint_D f(x,y) dA = \iint_{D'} f(s\cos\theta, s\sin\theta) s ds d\theta
$$

**Coordenadas Cilíndricas (3D):**

- Transformación: $x = s\cos\theta$, $y = s\sin\theta$, $z = z$
- Jacobiano: $|\det(J)| = s$

**Coordenadas Esféricas (3D):**

- Transformación: $x = r\sin\varphi\cos\theta$, $y = r\sin\varphi\sin\theta$, $z = r\cos\varphi$
- Jacobiano: $|\det(J)| = r^2\sin\varphi$

## Cuarto tema: 4.4 Aplicaciones

### 4.4.1 Volúmenes y Áreas

**Volumen bajo una superficie:**
Si $z = f(x,y) \geq 0$ en $D$, el volumen es:

$$
V = \iint_D f(x,y) dA
$$

**Área de una región:**
El área de una región $D$ en el plano es:

$$
\text{Área}(D) = \iint_D 1 dA
$$

### 4.4.2 Masa y Centro de Masa

**Masa:** Si $\rho(x,y)$ es la densidad, la masa total es:

$$
M = \iint_D \rho(x,y) dA
$$

**Centro de masa:**
$$
\bar{x} = \frac{1}{M} \iint_D x \rho(x,y) dA, \quad \bar{y} = \frac{1}{M} \iint_D y \rho(x,y) dA
$$

### 4.4.3 Momentos de Inercia

**Momento de inercia respecto al eje x:**
$$
I_x = \iint_D y^2 \rho(x,y) dA
$$

**Momento de inercia respecto al eje y:**
$$
I_y = \iint_D x^2 \rho(x,y) dA
$$

**Momento polar de inercia:**
$$
I_0 = \iint_D (x^2 + y^2) \rho(x,y) dA
$$

### 4.4.4 Aplicaciones en Probabilidad

Para variables aleatorias continuas $(X,Y)$ con función de densidad conjunta $f(x,y)$:

**Probabilidad:**
$$
P((X,Y) \in D) = \iint_D f(x,y) dx dy
$$

**Esperanza:**
$$
E[X] = \iint_{\mathbb{R}^2} x f(x,y) dx dy
$$

$$
E[Y] = \iint_{\mathbb{R}^2} y f(x,y) dx dy
$$
