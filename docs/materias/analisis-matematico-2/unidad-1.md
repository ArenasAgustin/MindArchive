---
title: "Unidad 1: Funciones de Rⁿ en Rᵖ"
description: "Introducción a las funciones de varias variables, topología en Rⁿ, tipos de funciones, conjuntos asociados y sistemas de coordenadas. Se abordan conceptos fundamentales para el análisis y la representación de funciones en espacios de dimensión superior."
sidebar_position: 2
tags: [matematicas, analisis, funciones, topologia, coordenadas]
---

## Topología de Rⁿ

### Bolas Abiertas y Cerradas

- **Definición:** Dado $\overline{x}_{0} \in \mathbb{R}^{n}$ y $r \in \mathbb{R} > 0$:

  - **a)** La **bola abierta** con centro en $\overline{x}_{0}$ y radio $r$ es:

    $$B_{r}(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid ||\overline{x} - \overline{x}_{0}|| < r\}$$

  - **b)** La **bola cerrada** con centro en $\overline{x}_{0}$ y radio $r$ es:

    $$\overline{B}_{r}(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid ||\overline{x} - \overline{x}_{0}|| \le r\}$$

  - **c)** La **bola reducida** con centro en $\overline{x}_{0}$ y radio $r$ es:

    $$B_{r}^\prime(\overline{x}_{0}) = \{\overline{x} \in \mathbb{R}^{n} \mid 0 < ||\overline{x} - \overline{x}_{0}|| < r\}$$

### Puntos Asociados a un Conjunto

- **Definición:** Dado $A \subseteq \mathbb{R}^{n}$ y $\overline{x}_{0} \in \mathbb{R}^{n}$:

  - **a)** $\overline{x}_{0}$ es un **punto interior** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \subseteq A$.
  - **b)** $\overline{x}_{0}$ es un **punto exterior** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \subseteq A^{c}$.
  - **c)** $\overline{x}_{0}$ es un **punto frontera** de $A$ si y solo si para todo $r \in \mathbb{R} > 0$: $B_{r}(\overline{x}_{0}) \cap A \ne \emptyset$ y $B_{r}(\overline{x}_{0}) \cap A^{c} \ne \emptyset$.
  - **d)** $\overline{x}_{0}$ es un **punto límite (o de acumulación)** de $A$ si y solo si para todo $r \in \mathbb{R} > 0$: $B_{r}^\prime(\overline{x}_{0}) \cap A \ne \emptyset$.
  - **e)** $\overline{x}_{0}$ es un **punto aislado** de $A$ si y solo si existe $r \in \mathbb{R} > 0$ tal que $B_{r}(\overline{x}_{0}) \cap A = \{\overline{x}_{0}\}$.

- **Observaciones:**

  - **a)** Si $\overline{x}_{0}$ es interior de $A$, se escribe $\overline{x}_{0} \in \text{Int}(A)$.
  - **b)** Análogamente para $\text{Ext}(A)$, $\text{Fr}(A)$, $\text{Aisl}(A)$ y $\text{Acum}(A)$.

### Conjuntos Abiertos y Cerrados

- **Definición:** Dado $A \subseteq \mathbb{R}^{n}$:

  - **a)** $A$ es **abierto** si y solo si $A = \text{Int}(A)$.
  - **b)** $A$ es **cerrado** si y solo si su complemento, $A^{c}$, es abierto.

- **Observaciones:**

  - **a)** $A$ es abierto si $A \cap \text{Fr}(A) = \emptyset$.
  - **b)** $A$ es cerrado si $\text{Fr}(A) \subseteq A$.
  - **c)** Un conjunto puede no ser ni abierto ni cerrado.
  - **d)** Los únicos conjuntos que son abiertos y cerrados a la vez son $\mathbb{R}^{n}$ y $\emptyset$.
  - **e)** Una **vecindad** de $\overline{x}_{0}$ es un conjunto abierto que lo contiene.

## Tipos de Funciones

### Funciones de Una Variable ($n=p=1$)

- $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$
- Para $x \in D \subseteq \mathbb{R}$, se cumple $f(x) \in \mathbb{R}$.
- Ejemplo: $f(x) = x^{2}+1$.

### Funciones Escalares o Campos Escalares ($p=1$)

- $f: D_{f} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}$.
- Para $\overline{x} = (x_{1}, ..., x_{n}) \in D_{f} \subseteq \mathbb{R}^{n}$, se cumple $f(\overline{x}) = f(x_{1}, ..., x_{n}) \in \mathbb{R}$.
- Ejemplos:

  - $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$ definido por $f(x,y) = x^{2}+y^{2}$.
  - $f: \mathbb{R}^{3} \rightarrow \mathbb{R}$ definido por $f(x,y,z) = x+y+z$.

### Curvas ($n=1$)

- $\gamma: [a,b] \subseteq \mathbb{R} \rightarrow \mathbb{R}^{p}$.
- Para $t \in [a,b]$, $\gamma(t) = (\gamma_{1}(t), \dots, \gamma_{p}(t)) = (x_{1}, \dots, x_{p}) \in \mathbb{R}^{p}$.
- Ejemplos:

  - $\gamma: [0, \pi) \rightarrow \mathbb{R}^{2}$ definido por $\gamma(t) = (2 \cos t, 2 \sin t)$.
  - $\gamma: [-6\pi, 6\pi) \rightarrow \mathbb{R}^{3}$ definido por $\gamma(t) = (3 \cos t, 3 \sin t, t)$.
  - $\gamma: \mathbb{R} \rightarrow \mathbb{R}^{2}$ definido por $\gamma(t) = (e^{t}, e^{2t})$.

    - Los puntos $\gamma(t)$ satisfacen $y=x^{2}$ con $x>0$. El gráfico es $\text{Gr}_{\gamma} = \{(e^{t}, e^{2t}, t) \mid t \in \mathbb{R}\}$.

### Superficies ($n=2$)

- $\overline{g}: D_{\overline{g}} \subseteq \mathbb{R}^{2} \rightarrow \mathbb{R}^{p}$.
- Caso más común: $p=3$.
- Para $\overline{u} = (u,v)$, $\overline{g}(u,v) = (g_{1}(u,v), g_{2}(u,v), g_{3}(u,v)) = (x,y,z)$.
- Ejemplos:

  - $\overline{g}(u,v) = (u+v, u-v, u)$.
  - $\overline{g}(u,v) = (u \cos v, u \sin v, u)$.

### Campos Vectoriales ($n=p$)

- $F: D_{F} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}^{n}$.
- Para $\overline{x} = (x_{1}, ..., x_{n})$, $F(\overline{x}) = (F_{1}(x_{1},...,x_{n}), ..., F_{n}(x_{1},...,x_{n}))$.
- Ejemplos:

  - $F(x,y) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x))$.
  - $F(x,y) = (x+y, x)$.

### Funciones de Varias Variables (Caso General)

- $\overline{f}: D_{\overline{f}} \subseteq \mathbb{R}^{n} \rightarrow \mathbb{R}^{p}$.
- Para $\overline{x} = (x_{1}, ..., x_{n})$, $\overline{f}(\overline{x}) = (f_{1}(x_{1},...,x_{n}), ..., f_{p}(x_{1},...,x_{n})) \in \mathbb{R}^{p}$.
- Las **funciones componentes** son $f_{1}, ..., f_{p}$, cada una escalar.

## Conjuntos Asociados a Funciones

### Dominio

- Toda función $\overline{f}$ tiene un dominio $D_{\overline{f}}$ definido junto con ella.
- Si no se especifica, se toma el mayor conjunto para el cual la regla tiene sentido.
- Siempre $D_{\overline{f}} \subseteq \mathbb{R}^{n}$.
- Ejemplo: $\overline{f}(x,y) = (\ln x, \sqrt{y}, \frac{1}{x-y})$.

### Imagen

- **Definición:** La **imagen** de $\overline{f}$ es $\text{Im}_{\overline{f}} = \{\overline{f}(\overline{x}) \mid \overline{x} \in D_{\overline{f}}\} \subseteq \mathbb{R}^{p}$.
- Ejemplo: Para $\gamma:[0,\pi) \rightarrow \mathbb{R}^{2}$ con $\gamma(t) = (2 \cos t, 2 \sin t)$, la imagen es $\text{Im}_{\gamma} = \{(2 \cos t, 2 \sin t) \mid t \in [0, \pi)\}$.

### Conjuntos de Nivel

- **Definición:** Dada $\overline{f}: D_{\overline{f}} \rightarrow \mathbb{R}^{p}$ y $\overline{z}_{0} \in \mathbb{R}^{p}$, el **conjunto de nivel** en $\overline{z}_{0}$ es $\text{CN}_{\overline{f}}(\overline{z}_{0}) = \{\overline{x} \in D_{\overline{f}} \mid \overline{f}(\overline{x}) = \overline{z}_{0}\}$.
- Ejemplo: $g(x,y) = x^{2}+y^{2}$ con $z_{0}=4$ y $D_{g} = \{(x,y) \mid y \ge 0\}$, entonces $\text{CN}_{g}(4) = \{(x,y) \in D_{g} \mid x^{2}+y^{2} = 4\}$.

### Gráfico

- **Definición:** El **gráfico** de $\overline{f}$ es $\text{Gr}_{\overline{f}} = \{(\overline{x}, \overline{f}(\overline{x})) \mid \overline{x} \in D_{\overline{f}}\} \subseteq \mathbb{R}^{n+p}$.
- Ejemplo: Para $f(x) = \sqrt{4-x^{2}}$, con $x \in [-2,2]$, el gráfico es $\text{Gr}_{f} = \{(x,y) \mid y = \sqrt{4-x^{2}}, x \in [-2,2]\}$.

## Representaciones de Conjuntos

- **Definición:** Dado $A \subseteq \mathbb{R}^{n+p}$:

  - **a)** $A$ tiene **forma explícita** si $A = \text{Gr}_{\overline{f}}$.
  - **b)** $A$ tiene **forma implícita** si $A = \text{CN}_{\overline{g}}(\overline{z}_{0})$ para algún $\overline{z}_{0}$.
  - **c)** $A$ tiene **forma paramétrica** si $A = \text{Im}_{\overline{h}}$.

- **Observaciones:**

  - $n+p$: dimensión del espacio donde vive $A$.
  - $n$: dimensión del conjunto (grados de libertad).
  - $p$: número de restricciones (ecuaciones que lo definen).

## Coordenadas Curvilíneas

### Coordenadas Cartesianas

- $(x,y,z)$ en $\mathbb{R}^{3}$.
- $(x,y)$ en $\mathbb{R}^{2}$.

### Coordenadas Polares ($\mathbb{R}^{2}$)

- $(s,\theta)$.
- Conversión polar a cartesiano: $(x,y) = (s \cos \theta, s \sin \theta)$.
- Conversión cartesiano a polar: $(s,\theta) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x))$.

### Coordenadas Cilíndricas ($\mathbb{R}^{3}$)

- $(s,\theta,z)$.
- Conversión cilíndricas a cartesianas: $(x,y,z) = (s \cos \theta, s \sin \theta, z)$.
- Conversión cartesianas a cilíndricas: $(s,\theta,z) = (\sqrt{x^{2}+y^{2}}, \arctan(y/x), z)$.

### Coordenadas Esféricas ($\mathbb{R}^{3}$)

- $(r,\varphi,\theta)$.
- Conversión esféricas a cartesianas: $(x,y,z) = (r \sin \varphi \cos \theta, r \sin \varphi \sin \theta, r \cos \varphi)$.
- Conversión cartesianas a esféricas: $(r,\varphi,\theta) = (\sqrt{x^{2}+y^{2}+z^{2}}, \arctan(\sqrt{x^{2}+y^{2}}/z), \arctan(y/x))$.
- Conversión cilíndricas a esféricas: $(r,\varphi,\theta) = (\sqrt{s^{2}+z^{2}}, \arctan(s/z), \theta)$.
- Conversión esféricas a cilíndricas: $(s,\theta,z) = (r \sin \varphi, \theta, r \cos \varphi)$.
