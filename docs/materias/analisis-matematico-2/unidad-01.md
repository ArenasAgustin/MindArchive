---
title: "Unidad 1: Funciones de Rⁿ en Rᵖ"
description: "Análisis Matemático 2 - Unidad 1: Introducción a las funciones de varias variables, topología en Rⁿ, tipos de funciones, conjuntos asociados y sistemas de coordenadas."
sidebar_position: 2
tags: [analisis-matematico-2, funciones, topologia, coordenadas, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Introducir los conceptos fundamentales de las funciones de varias variables, desarrollando una comprensión sólida de la topología en espacios euclideos y las diferentes representaciones de funciones multivariables.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Aplicar conceptos topológicos básicos en $\mathbb{R}^n$ (bolas abiertas, cerradas, puntos interiores, exteriores, frontera)
- Clasificar y distinguir diferentes tipos de funciones según su dominio e imagen
- Determinar dominios, imágenes, conjuntos de nivel y gráficos de funciones multivariables
- Convertir entre diferentes sistemas de coordenadas (cartesianas, polares, cilíndricas, esféricas)
- Representar conjuntos en forma explícita, implícita y paramétrica

## 📋 Contenidos y recursos

### 1.1 Topología de Rⁿ

- **1.1.1** Bolas abiertas, cerradas y reducidas
- **1.1.2** Puntos asociados a un conjunto (interior, exterior, frontera, límite, aislado)
- **1.1.3** Conjuntos abiertos y cerrados

### 1.2 Tipos de Funciones

- **1.2.1** Funciones escalares y campos escalares
- **1.2.2** Curvas paramétricas
- **1.2.3** Superficies paramétricas
- **1.2.4** Campos vectoriales

### 1.3 Conjuntos Asociados a Funciones

- **1.3.1** Dominio e imagen
- **1.3.2** Conjuntos de nivel
- **1.3.3** Gráficos de funciones
- **1.3.4** Representaciones explícita, implícita y paramétrica

### 1.4 Sistemas de Coordenadas

- **1.4.1** Coordenadas cartesianas
- **1.4.2** Coordenadas polares y cilíndricas
- **1.4.3** Coordenadas esféricas
- **1.4.4** Conversiones entre sistemas

### 1.5 Normas y Métricas en Rⁿ

- **1.5.1** Normas: definición, norma euclídea, norma infinito
- **1.5.2** Métricas inducidas y bolas abiertas; equivalencia de normas

### 1.6 Sucesiones y Límites en Rⁿ

- **1.6.1** Sucesiones en Rⁿ y convergencia
- **1.6.2** Criterio por componentes; sucesiones de Cauchy y completitud

### 1.7 Límites y Continuidad de Funciones

- **1.7.1** Límite de funciones Rⁿ→Rᵖ (ε–δ y criterio secuencial)
- **1.7.2** Continuidad: caracterizaciones y propiedades

### 🔗 Recursos Complementarios

- [Apunte Unidad 1 - Natali, Valenzuela](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758076580/pdfs/pdf_1758076584_AM2%20-%20Notas%20U1%20%28Natali%2C%20Valenzuela%29.pdf)
- [Apunte Unidad 1 - Ferreyra](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758076721/pdfs/pdf_1758076726_Unidad%201%20-%20AM2.pdf)

## Primer tema: 1.1 Topología de Rⁿ

### 1.1.1 Bolas Abiertas, Cerradas y Reducidas

**Definición:** Dado $\overline{x}_{0} \in \mathbb{R}^{n}$ y $r \in \mathbb{R} > 0$:

- **a)** La **bola abierta** con centro en $\overline{x}_{0}$ y radio $r$ es:

   $$
   B_{r}(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid \lVert\overline{x} - \overline{x}_{0}\rVert < r\}
   $$

- **b)** La **bola cerrada** con centro en $\overline{x}_{0}$ y radio $r$ es:

   $$
   \overline{B}_{r}(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid \lVert\overline{x} - \overline{x}_{0}\rVert \le r\}
   $$

- **c)** La **bola reducida** con centro en $\overline{x}_{0}$ y radio $r$ es:

   $$
   B_{r}^\prime(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid 0 < \lVert\overline{x} - \overline{x}_{0}\rVert < r\}
   $$

### 1.1.2 Puntos Asociados a un Conjunto

**Definición:** Dado $A \subseteq \mathbb{R}^{n}$ y $\overline{x}_{0} \in \mathbb{R}^{n}$:

- **a)** $\overline{x}_{0}$ es un **punto interior** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \subseteq A$.
- **b)** $\overline{x}_{0}$ es un **punto exterior** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \subseteq A^{c}$.
- **c)** $\overline{x}_{0}$ es un **punto frontera** de $A$ si y solo si para todo $r \in \mathbb{R} > 0$: $B_{r}(\overline{x}_{0}) \cap A \ne \emptyset$ y $B_{r}(\overline{x}_{0}) \cap A^{c} \ne \emptyset$.
- **d)** $\overline{x}_{0}$ es un **punto límite (o de acumulación)** de $A$ si y solo si para todo $r \in \mathbb{R} > 0$: $B_{r}^\prime(\overline{x}_{0}) \cap A \ne \emptyset$.
- **e)** $\overline{x}_{0}$ es un **punto aislado** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \cap A = \{\overline{x}_{0}\}$.

**Notación:**

- Si $\overline{x}_{0}$ es interior de $A$, se escribe $\overline{x}_{0} \in \text{Int}(A)$.
- Análogamente para $\text{Ext}(A)$, $\text{Fr}(A)$, $\text{Aisl}(A)$ y $\text{Acum}(A)$.

### 1.1.3 Conjuntos Abiertos y Cerrados

**Definición:** Dado $A \subseteq \mathbb{R}^{n}$:

- **a)** $A$ es **abierto** si y solo si $A = \text{Int}(A)$.
- **b)** $A$ es **cerrado** si y solo si su complemento, $A^{c}$, es abierto.

**Propiedades importantes:**

- $A$ es abierto si $A \cap \text{Fr}(A) = \emptyset$.
- $A$ es cerrado si $\text{Fr}(A) \subseteq A$.
- Un conjunto puede no ser ni abierto ni cerrado.
- Los únicos conjuntos que son abiertos y cerrados a la vez son $\mathbb{R}^{n}$ y $\emptyset$.
- Una **vecindad** de $\overline{x}_{0}$ es un conjunto abierto que lo contiene.

## Segundo tema: 1.2 Tipos de Funciones

### 1.2.1 Funciones Escalares y Campos Escalares

**Funciones de Una Variable ($n=p=1$):**

- $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$
- Para $x \in D \subseteq \mathbb{R}$, se cumple $f(x) \in \mathbb{R}$.
- **Ejemplo:** $f(x) = x^{2}+1$.

**Funciones Escalares o Campos Escalares ($p=1$):**

- $f: D_{f} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}$.
- Para $\overline{x} = (x_{1}, ..., x_{n}) \in D_{f} \subseteq \mathbb{R}^{n}$, se cumple $f(\overline{x}) = f(x_{1}, ..., x_{n}) \in \mathbb{R}$.

**Ejemplos:**

- $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$ definido por $f(x,y) = x^{2}+y^{2}$.
- $f: \mathbb{R}^{3} \rightarrow \mathbb{R}$ definido por $f(x,y,z) = x+y+z$.

### 1.2.2 Curvas Paramétricas ($n=1$)

**Definición:**

- $\gamma: [a,b] \subseteq \mathbb{R} \rightarrow \mathbb{R}^{p}$.
- Para $t \in [a,b]$, $\gamma(t) = (\gamma_{1}(t), \dots, \gamma_{p}(t)) = (x_{1}, \dots, x_{p}) \in \mathbb{R}^{p}$.

**Ejemplos:**

- $\gamma: [0, \pi) \rightarrow \mathbb{R}^{2}$ definido por $\gamma(t) = (2 \cos t, 2 \sin t)$.
- $\gamma: [-6\pi, 6\pi) \rightarrow \mathbb{R}^{3}$ definido por $\gamma(t) = (3 \cos t, 3 \sin t, t)$.
- $\gamma: \mathbb{R} \rightarrow \mathbb{R}^{2}$ definido por $\gamma(t) = (e^{t}, e^{2t})$.

En el último ejemplo, los puntos $\gamma(t)$ satisfacen $y=x^{2}$ con $x>0$. El gráfico es $\text{Gr}_{\gamma} = \{(e^{t}, e^{2t}, t) \mid t \in \mathbb{R}\}$.

### 1.2.3 Superficies Paramétricas ($n=2$)

**Definición:**

- $\overline{g}: D_{\overline{g}} \subseteq \mathbb{R}^{2} \rightarrow \mathbb{R}^{p}$.
- Caso más común: $p=3$.
- Para $\overline{u} = (u,v)$, $\overline{g}(u,v) = (g_{1}(u,v), g_{2}(u,v), g_{3}(u,v)) = (x,y,z)$.

**Ejemplos:**

- $\overline{g}(u,v) = (u+v, u-v, u)$.
- $\overline{g}(u,v) = (u \cos v, u \sin v, u)$.

### 1.2.4 Campos Vectoriales ($n=p$)

**Definición:**

- $F: D_{F} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}^{n}$.
- Para $\overline{x} = (x_{1}, ..., x_{n})$, $F(\overline{x}) = (F_{1}(x_{1},...,x_{n}), ..., F_{n}(x_{1},...,x_{n}))$.

**Ejemplos:**

- $F(x,y) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x))$.
- $F(x,y) = (x+y, x)$.

**Caso General (Funciones de Varias Variables):**

- $\overline{f}: D_{\overline{f}} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}^{p}$.
- Para $\overline{x} = (x_{1}, ..., x_{n})$, $\overline{f}(\overline{x}) = (f_{1}(x_{1},...,x_{n}), ..., f_{p}(x_{1},...,x_{n})) \in \mathbb{R}^{p}$.
- Las **funciones componentes** son $f_{1}, ..., f_{p}$, cada una escalar.

## Tercer tema: 1.3 Conjuntos Asociados a Funciones

### 1.3.1 Dominio e Imagen

**Dominio:**

- Toda función $\overline{f}$ tiene un dominio $D_{\overline{f}}$ definido junto con ella.
- Si no se especifica, se toma el mayor conjunto para el cual la regla tiene sentido.
- Siempre $D_{\overline{f}} \subseteq \mathbb{R}^{n}$.

**Ejemplo:** $\overline{f}(x,y) = (\ln x, \sqrt{y}, \frac{1}{x-y})$.

**Imagen:**

**Definición:** La **imagen** de $\overline{f}$ es $\text{Im}_{\overline{f}} = \{\overline{f}(\overline{x}) \mid \overline{x} \in D_{\overline{f}}\} \subseteq \mathbb{R}^{p}$.

**Ejemplo:** Para $\gamma:[0,\pi) \rightarrow \mathbb{R}^{2}$ con $\gamma(t) = (2 \cos t, 2 \sin t)$, la imagen es $\text{Im}_{\gamma} = \{(2 \cos t, 2 \sin t) \mid t \in [0, \pi)\}$.

### 1.3.2 Conjuntos de Nivel

**Definición:** Dada $\overline{f}: D_{\overline{f}} \rightarrow \mathbb{R}^{p}$ y $\overline{z}_{0} \in \mathbb{R}^{p}$, el **conjunto de nivel** en $\overline{z}_{0}$ es:

$$
\text{CN}_{\overline{f}}(\overline{z}_{0}) = \{\overline{x} \in D_{\overline{f}} \mid \overline{f}(\overline{x}) = \overline{z}_{0}\}
$$

**Ejemplo:** $g(x,y) = x^{2}+y^{2}$ con $z_{0}=4$ y $D_{g} = \{(x,y) \mid y \ge 0\}$, entonces $\text{CN}_{g}(4) = \{(x,y) \in D_{g} \mid x^{2}+y^{2} = 4\}$.

### 1.3.3 Gráficos de Funciones

**Definición:** El **gráfico** de $\overline{f}$ es:

$$
\text{Gr}_{\overline{f}} = \{(\overline{x}, \overline{f}(\overline{x})) \mid \overline{x} \in D_{\overline{f}}\} \subseteq \mathbb{R}^{n+p}
$$

**Ejemplo:** Para $f(x) = \sqrt{4-x^{2}}$, con $x \in [-2,2]$, el gráfico es $\text{Gr}_{f} = \{(x,y) \mid y = \sqrt{4-x^{2}},\ x \in [-2,2]\}$.

### 1.3.4 Representaciones de Conjuntos

**Definición:** Dado $A \subseteq \mathbb{R}^{n+p}$:

- **a)** $A$ tiene **forma explícita** si $A = \text{Gr}_{\overline{f}}$.
- **b)** $A$ tiene **forma implícita** si $A = \text{CN}_{\overline{g}}(\overline{z}_{0})$ para algún $\overline{z}_{0}$.
- **c)** $A$ tiene **forma paramétrica** si $A = \text{Im}_{\overline{h}}$.

**Observaciones importantes:**

- $n+p$: dimensión del espacio donde vive $A$.
- $n$: dimensión del conjunto (grados de libertad).
- $p$: número de restricciones (ecuaciones que lo definen).

## Cuarto tema: 1.4 Sistemas de Coordenadas

### 1.4.1 Coordenadas Cartesianas

**En $\mathbb{R}^{2}$:** $(x,y)$

**En $\mathbb{R}^{3}$:** $(x,y,z)$

### 1.4.2 Coordenadas Polares y Cilíndricas

**Coordenadas Polares ($\mathbb{R}^{2}$):**

- Notación: $(s,\theta)$
- **Conversión polar a cartesiano:** $(x,y) = (s \cos \theta, s \sin \theta)$
- **Conversión cartesiano a polar:** $(s,\theta) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x))$

**Coordenadas Cilíndricas ($\mathbb{R}^{3}$):**

- Notación: $(s,\theta,z)$
- **Conversión cilíndricas a cartesianas:** $(x,y,z) = (s \cos \theta, s \sin \theta, z)$
- **Conversión cartesianas a cilíndricas:** $(s,\theta,z) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x), z)$

### 1.4.3 Coordenadas Esféricas

**Coordenadas Esféricas ($\mathbb{R}^{3}$):**

- Notación: $(r,\varphi,\theta)$

### 1.4.4 Conversiones entre Sistemas

**Esféricas a cartesianas:**
$$
(x,y,z) = (r \sin \varphi \cos \theta, r \sin \varphi \sin \theta, r \cos \varphi)
$$

**Cartesianas a esféricas:**
$$
(r,\varphi,\theta) = (\sqrt{x^{2}+y^{2}+z^{2}}, \arctan(\sqrt{x^{2}+y^{2}}/z), \arctan(y/x))
$$

**Cilíndricas a esféricas:**
$$
(r,\varphi,\theta) = (\sqrt{s^{2}+z^{2}}, \arctan(s/z), \theta)
$$

**Esféricas a cilíndricas:**
$$
(s,\theta,z) = (r \sin \varphi, \theta, r \cos \varphi)
$$

## Quinto tema: 1.5 Normas y Métricas en Rⁿ

### 1.5.1 Normas en Rⁿ

Una norma en $\mathbb{R}^n$ es una aplicación $\lVert\cdot\rVert: \mathbb{R}^n \to [0,\infty)$ que cumple, para todo $\overrightarrow{x}, \overrightarrow{y}\in\mathbb{R}^n$ y $\alpha\in\mathbb{R}$:

- $\lVert \overrightarrow{x} \rVert = 0$ si y solo si $\overrightarrow{x}=\overrightarrow{0}$
- $\lVert \alpha\, \overrightarrow{x} \rVert = |\alpha|\, \lVert \overrightarrow{x} \rVert$
- Desigualdad triangular: $\lVert \overrightarrow{x}+\overrightarrow{y} \rVert \le \lVert \overrightarrow{x} \rVert + \lVert \overrightarrow{y} \rVert$

Ejemplos en $\mathbb{R}^n$:

- Norma euclídea: $\lVert \overrightarrow{x} \rVert_2 = \sqrt{x_1^2+\cdots+x_n^2}$
- Norma infinito: $\lVert \overrightarrow{x} \rVert_\infty = \max\{ |x_1|,\ldots,|x_n| \}$

Todas las normas en $\mathbb{R}^n$ son equivalentes (inducen la misma topología).

### 1.5.2 Métricas inducidas y bolas abiertas

Cada norma induce una métrica $d(\overrightarrow{x},\overrightarrow{y}) = \lVert \overrightarrow{x}-\overrightarrow{y} \rVert$.

La bola abierta de centro $\overrightarrow{x}_0$ y radio $r>0$ en la métrica $d$ es:

$$
B_r(\overrightarrow{x}_0) = \{\overrightarrow{x}\in\mathbb{R}^n : d(\overrightarrow{x},\overrightarrow{x}_0) < r\} = \{\overrightarrow{x} : \lVert \overrightarrow{x}-\overrightarrow{x}_0 \rVert < r\}.
$$

Si dos normas son equivalentes, generan las mismas familias de abiertos y, por lo tanto, la misma noción de continuidad.

## Sexto tema: 1.6 Sucesiones y Límites en Rⁿ

### 1.6.1 Sucesiones y convergencia

Una sucesión en $\mathbb{R}^n$ es una aplicación $\overrightarrow{x}_k: \mathbb{N}\to\mathbb{R}^n$.

Decimos que $\overrightarrow{x}_k$ converge a $\overrightarrow{x}_0$ si

$$
\forall\, \varepsilon>0\, \exists\, N\in\mathbb{N}: k\ge N \Rightarrow \lVert \overrightarrow{x}_k - \overrightarrow{x}_0 \rVert < \varepsilon.
$$

Equivalencias útiles:

- Convergencia por componentes: $\overrightarrow{x}_k\to\overrightarrow{x}_0$ si y solo si $(x_k^{(i)})\to x_0^{(i)}$ para todo $i$.
- En $\mathbb{R}^n$, la noción de convergencia es independiente de la norma elegida.

Propiedades:

- Los límites (si existen) son únicos.
- Toda sucesión convergente es acotada.

### 1.6.2 Sucesiones de Cauchy y completitud

Una sucesión es de Cauchy si

$$
\forall\, \varepsilon>0\, \exists\, N\in\mathbb{N}: k,\ell\ge N \Rightarrow \lVert \overrightarrow{x}_k - \overrightarrow{x}_\ell \rVert < \varepsilon.
$$

Con la norma euclídea (y, en general, con cualquier norma), $\mathbb{R}^n$ es completo: toda sucesión de Cauchy converge en $\mathbb{R}^n$.

## Séptimo tema: 1.7 Límites y Continuidad de Funciones

### 1.7.1 Límite de funciones $\mathbb{R}^n\to\mathbb{R}^p$

Sea $\overline{f}:D\subseteq\mathbb{R}^n\to\mathbb{R}^p$ y $\overrightarrow{x}_0\in\mathbb{R}^n$ punto de acumulación de $D$. Decimos que $\lim\limits_{\overrightarrow{x}\to\overrightarrow{x}_0} \overline{f}(\overrightarrow{x}) = \overline{L}$ si

$$
\forall\, \varepsilon>0\, \exists\, \delta>0: 0<\lVert \overrightarrow{x}-\overrightarrow{x}_0 \rVert<\delta,\ \overrightarrow{x}\in D \Rightarrow \lVert \overline{f}(\overrightarrow{x})-\overline{L} \rVert<\varepsilon.
$$

Caracterizaciones equivalentes:

- Criterio secuencial: Para toda sucesión $\overrightarrow{x}_k\in D\\\{\overrightarrow{x}_0\}$ con $\overrightarrow{x}_k\to\overrightarrow{x}_0$ se cumple $\overline{f}(\overrightarrow{x}_k)\to\overline{L}$.
- Por componentes: $\lim \overline{f} = \overline{L}$ si y solo si $\lim f_i = L_i$ para cada componente $i$.

### 1.7.2 Continuidad: caracterizaciones y propiedades

Decimos que $\overline{f}$ es continua en $\overrightarrow{x}_0$ si

$$
\lim_{\overrightarrow{x}\to\overrightarrow{x}_0} \overline{f}(\overrightarrow{x}) = \overline{f}(\overrightarrow{x}_0).
$$

Caracterizaciones equivalentes de continuidad en $D$:

- $\overline{f}$ es continua si y solo si la preimagen de abiertos es abierta: para todo abierto $U\subseteq\mathbb{R}^p$, $\overline{f}^{-1}(U)$ es abierto en $D$.
- Criterio secuencial: $\overrightarrow{x}_k\to\overrightarrow{x}_0 \Rightarrow \overline{f}(\overrightarrow{x}_k)\to\overline{f}(\overrightarrow{x}_0)$.
- Por componentes: $\overline{f}$ es continua si y solo si cada $f_i$ es continua.

Propiedades de las funciones continuas:

- Álgebra: suma, producto escalar por constante y producto punto de funciones continuas son continuos.
- Composición: si $\overline{f}$ es continua en $\overrightarrow{x}_0$ y $\overline{g}$ es continua en $\overline{f}(\overrightarrow{x}_0)$, entonces $\overline{g}\circ\overline{f}$ es continua en $\overrightarrow{x}_0$.
- Normas: $\overrightarrow{x}\mapsto \lVert \overrightarrow{x} \rVert$ es continua.
- Polinomios y funciones elementales (donde estén definidas) son continuos.

### Ejemplos de límites/continuidad

1) Límite que existe:

Sea $f(x,y)=\dfrac{x^2 y}{x^2+y^2}$ con $f(0,0)=0$. Para $(x,y)\neq (0,0)$,

$$
|f(x,y)| = \frac{|x|^2 |y|}{x^2+y^2} \le \frac{x^2+y^2}{2}\cdot \frac{1}{x^2+y^2} = \frac{1}{2}\, \sqrt{x^2+y^2}\, \frac{|y|}{\sqrt{x^2+y^2}} \le \frac{1}{2}\, \sqrt{x^2+y^2}.
$$

Luego $\lim\limits_{(x,y)\to(0,0)} f(x,y)=0$ (por cota con $\varepsilon$–$\delta$ o criterio secuencial).

1) Límite que no existe:

Sea $g(x,y)=\dfrac{x y}{x^2+y^2}$. Tomando rectas $y=m x$ con $m\in\mathbb{R}$,

$$
\lim_{x\to 0} g(x,mx) = \lim_{x\to 0} \frac{m x^2}{x^2+m^2 x^2} = \frac{m}{1+m^2},
$$

que depende de $m$. Por lo tanto, el límite en $(0,0)$ no existe.

1) Continuidad por componentes:

Si $\overline{f}(x,y)=(\sin(x+y),\ e^{x}-\ln(1+y))$ con dominio $D=\{(x,y): y>-1\}$, entonces cada componente es continua en $D$ y, por lo tanto, $\overline{f}$ es continua en $D$.

## 📝 Ejemplos Resueltos

### Ejemplo 1: Clasificación de Puntos

**Problema:** Dado el conjunto $A = \{(x,y) \in \mathbb{R}^2 : x^2 + y^2 \leq 1\}$, clasifique los siguientes puntos:

a) $(0,0)$
b) $(1,0)$  
c) $(2,0)$
d) $(\frac{1}{2}, \frac{1}{2})$

**Solución:**

a) **Punto $(0,0)$:** Como $0^2 + 0^2 = 0 < 1$, entonces $(0,0) \in A$.
   Para cualquier $r > 0$ suficientemente pequeño, $B_r(0,0) \subseteq A$.
   **Conclusión:** $(0,0)$ es un **punto interior** de $A$.

b) **Punto $(1,0)$:** Como $1^2 + 0^2 = 1$, entonces $(1,0) \in A$.
   Para cualquier $r > 0$, la bola $B_r(1,0)$ contiene puntos dentro y fuera de $A$.
   **Conclusión:** $(1,0)$ es un **punto frontera** de $A$.

c) **Punto $(2,0)$:** Como $2^2 + 0^2 = 4 > 1$, entonces $(2,0) \notin A$.
   Existe $r = 1$ tal que $B_1(2,0) \subseteq A^c$.
   **Conclusión:** $(2,0)$ es un **punto exterior** de $A$.

d) **Punto $(\frac{1}{2}, \frac{1}{2})$:** Como $(\frac{1}{2})^2 + (\frac{1}{2})^2 = \frac{1}{2} < 1$, entonces $(\frac{1}{2}, \frac{1}{2}) \in A$.
   Existe $r = \frac{1}{4}$ tal que $B_{1/4}(\frac{1}{2}, \frac{1}{2}) \subseteq A$.
   **Conclusión:** $(\frac{1}{2}, \frac{1}{2})$ es un **punto interior** de $A$.

### Ejemplo 2: Dominio de una Función

**Problema:** Determine el dominio de la función $f(x,y) = \frac{\sqrt{x-y}}{\ln(x^2+y^2-1)}$.

**Solución:**

Para que $f(x,y)$ esté definida se requiere:

1. **Condición del radical:** $x - y \geq 0$, es decir, $x \geq y$

2. **Condición del logaritmo:**
   - $x^2 + y^2 - 1 > 0$, es decir, $x^2 + y^2 > 1$
   - $x^2 + y^2 - 1 \neq 1$, es decir, $x^2 + y^2 \neq 2$

3. **Condición del denominador:** $\ln(x^2+y^2-1) \neq 0$
   - Esto ocurre cuando $x^2 + y^2 - 1 = 1$, es decir, $x^2 + y^2 = 2$

**Dominio:**
$$
D_f = \{(x,y) \in \mathbb{R}^2 : x \geq y, \, x^2 + y^2 > 1, \, x^2 + y^2 \neq 2\}
$$

### Ejemplo 3: Conversión de Coordenadas

**Problema:** Convertir el punto $P = (3, 4, 5)$ de coordenadas cartesianas a:
a) Coordenadas cilíndricas
b) Coordenadas esféricas

**Solución:**

a) **Coordenadas cilíndricas $(s, \theta, z)$:**

$$
s = \sqrt{x^2 + y^2} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5
$$

$$
\theta = \arctan\left(\frac{y}{x}\right) = \arctan\left(\frac{4}{3}\right)
$$

$$
z = 5
$$

**Resultado:** $P_{cil} = \left(5, \arctan\left(\frac{4}{3}\right), 5\right)$

b) **Coordenadas esféricas $(r, \varphi, \theta)$:**

$$
r = \sqrt{x^2 + y^2 + z^2} = \sqrt{3^2 + 4^2 + 5^2} = \sqrt{50} = 5\sqrt{2}
$$

$$
\varphi = \arctan\left(\frac{\sqrt{x^2 + y^2}}{z}\right) = \arctan\left(\frac{5}{5}\right) = \arctan(1) = \frac{\pi}{4}
$$

$$
\theta = \arctan\left(\frac{y}{x}\right) = \arctan\left(\frac{4}{3}\right)
$$

**Resultado:** $P_{esf} = \left(5\sqrt{2}, \frac{\pi}{4}, \arctan\left(\frac{4}{3}\right)\right)$

## 🔧 Aplicaciones Prácticas

### Aplicación 1: Modelado de Temperatura

**Contexto:** En meteorología, la temperatura $T(x,y)$ en una región puede modelarse como:

$$T(x,y) = 20 - 0.1(x^2 + y^2)$$

donde $(x,y)$ representa la posición en kilómetros desde una estación base.

**Análisis:**

- **Dominio:** $\mathbb{R}^2$ (toda la región)
- **Conjuntos de nivel:** Las isotermas $T(x,y) = c$ son circunferencias
- **Máximo:** En $(0,0)$ con $T(0,0) = 20°C$

### Aplicación 2: Trayectorias de Proyectiles

**Contexto:** Un proyectil lanzado con velocidad inicial $v_0$ y ángulo $\alpha$ tiene trayectoria:

$$
\gamma(t) = (v_0 \cos \alpha \cdot t, v_0 \sin \alpha \cdot t - \frac{1}{2}gt^2)
$$

**Características:**

- **Tipo:** Curva paramétrica en $\mathbb{R}^2$
- **Dominio:** $t \in [0, T]$ donde $T = \frac{2v_0 \sin \alpha}{g}$
- **Forma implícita:** $y = x \tan \alpha - \frac{gx^2}{2v_0^2 \cos^2 \alpha}$

### Aplicación 3: Campos Magnéticos

**Contexto:** El campo magnético alrededor de un cable infinito con corriente $I$ es:

$$
\overrightarrow{B}(x,y) = \frac{\mu_0 I}{2\pi(x^2+y^2)} (-y, x)
$$

**Propiedades:**

- **Tipo:** Campo vectorial en $\mathbb{R}^2 \setminus \{(0,0)\}$
- **Líneas de campo:** Circunferencias centradas en el origen
- **Simetría:** Rotacional alrededor del eje $z$

## 🧮 Ejercicios Propuestos

### Ejercicios de Topología

1. **Clasificar puntos:** Para el conjunto $A = \{(x,y) : 0 < x^2 + y^2 < 4\}$, clasifique:
   - $(0,0)$, $(1,1)$, $(2,0)$, $(3,0)$

2. **Conjuntos abiertos/cerrados:** Determine si los siguientes conjuntos son abiertos, cerrados, ambos o ninguno:
   - $\{(x,y) : x > 0\}$
   - $\{(x,y) : x^2 + y^2 = 1\}$
   - $\{(x,y) : x^2 + y^2 \leq 1, x \geq 0\}$

### Ejercicios de Funciones

1. **Dominios:** Determine el dominio de:
   - $f(x,y) = \sqrt{4-x^2-y^2} + \ln(x+y)$
   - $g(x,y,z) = \frac{1}{\sqrt{x^2+y^2}} + \arcsin(z)$

2. **Conjuntos de nivel:** Para $f(x,y) = x^2 - y^2$, describa y grafique los conjuntos de nivel para $c = -1, 0, 1$.

### Ejercicios de Coordenadas

1. **Conversiones:** Convertir entre sistemas de coordenadas:
   - Cartesianas $(1, \sqrt{3}, 2)$ a esféricas
   - Cilíndricas $(4, \frac{\pi}{3}, -1)$ a cartesianas

2. **Ecuaciones en diferentes sistemas:** Expresar la esfera $x^2 + y^2 + z^2 = 9$ en:
   - Coordenadas cilíndricas
   - Coordenadas esféricas

## 📚 Resumen de Conceptos Clave

### Topología en $\mathbb{R}^n$

- **Bolas:** Herramientas fundamentales para definir proximidad
- **Clasificación de puntos:** Interior, exterior, frontera, límite, aislado
- **Conjuntos abiertos/cerrados:** Base para la topología euclidea

### Tipos de Funciones

- **Escalares:** $\mathbb{R}^n \rightarrow \mathbb{R}$ (campos escalares)
- **Curvas:** $\mathbb{R} \rightarrow \mathbb{R}^p$ (trayectorias)
- **Superficies:** $\mathbb{R}^2 \rightarrow \mathbb{R}^p$ (variedades)
- **Vectoriales:** $\mathbb{R}^n \rightarrow \mathbb{R}^n$ (campos vectoriales)

### Representaciones

- **Explícita:** $y = f(x)$ (gráficos)
- **Implícita:** $F(x,y) = 0$ (conjuntos de nivel)
- **Paramétrica:** $(x,y) = (f(t), g(t))$ (curvas)

### Sistemas de Coordenadas

- **Cartesianas:** Base rectangular estándar
- **Polares/Cilíndricas:** Aprovechan simetría circular
- **Esféricas:** Aprovechan simetría esférica
- **Conversiones:** Herramientas para simplificar problemas
