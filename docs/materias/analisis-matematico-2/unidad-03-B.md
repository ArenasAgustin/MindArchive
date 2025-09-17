---
title: "Unidad 3B: Aplicaciones Básicas del Cálculo Diferencial"
description: "Análisis Matemático 2 - Unidad 3B: Función compuesta, derivación implícita, función inversa, tangentes y normales, variaciones de funciones, desarrollo de Taylor y extremos en varias variables."
sidebar_position: 5
tags: [analisis-matematico-2, funcion-compuesta, derivacion-implicita, taylor, extremos, regla-cadena, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Desarrollar las aplicaciones fundamentales del cálculo diferencial en varias variables, incluyendo la regla de la cadena, derivación implícita, análisis de extremos y aproximaciones de Taylor.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Aplicar la regla de la cadena para funciones compuestas multivariables
- Realizar derivación implícita en sistemas de ecuaciones
- Calcular derivadas de funciones inversas
- Determinar tangentes y normales a gráficos, conjuntos de nivel e imágenes
- Estimar variaciones de funciones usando diferenciales
- Aplicar desarrollos de Taylor en varias variables
- Clasificar extremos libres y ligados de funciones multivariables

## 📋 Contenidos y recursos

### 3B.1 Función Compuesta y Regla de la Cadena

- **3B.1.1** Derivación compuesta
- **3B.1.2** Regla de la cadena en una variable (repaso)
- **3B.1.3** Teorema de la función compuesta (regla de la cadena en varias variables)

### 3B.2 Función Implícita e Inversa

- **3B.2.1** Derivación implícita
- **3B.2.2** Teorema de la función implícita
- **3B.2.3** Derivación inversa
- **3B.2.4** Teorema de la función inversa

### 3B.3 Tangentes, Normales y Variaciones

- **3B.3.1** Tangentes y normales a gráficos, conjuntos de nivel e imágenes
- **3B.3.2** Diferencial total y estimación de pequeñas variaciones
- **3B.3.3** Variaciones máximas y dirección del gradiente

### 3B.4 Desarrollo de Taylor y Extremos

- **3B.4.1** Taylor en una y varias variables
- **3B.4.2** Extremos libres: condiciones necesarias y suficientes
- **3B.4.3** Extremos ligados: multiplicadores de Lagrange

### 🔗 Recursos Complementarios


- [Apunte Unidad 3 - Desarrollo de Taylor - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758077392/pdfs/pdf_1758077397_AM2%20-%20Notas%20U3%20-%20Desarrollo%20de%20Taylor%20%28Natali%29.pdf)
- [Apunte Unidad 3 - Derivadas Parciales y Diferenciabilidad - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758077387/pdfs/pdf_1758077391_AM2%20-%20Notas%20U3%20-%20Derivadas%20Parciales%20y%20Diferenciabilidad%20%28Natali%29.pdf)
- [Apunte Unidad 3 - Derivada de la Función Compuesta - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758077381/pdfs/pdf_1758077385_AM2%20-%20Notas%20U3%20-%20Derivada%20de%20la%20Funci%C3%B3n%20Compuesta%20%28Natali%29.pdf)
- [Apunte Unidad 3B - Ferreyra](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758146076/pdfs/Unidad_3B_-_AM2_dqqcod.pdf)

## Primer tema: 3B.1 Función Compuesta y Regla de la Cadena

### 3B.1.1 Derivación Compuesta

En general, tenemos un mapa de dependencias de la forma:

$$
z = f(\overline{y}) = f(y_1, \ldots, y_p)
$$

donde

$$
\overline{y} = \begin{pmatrix} y_1 \\ \vdots \\ y_p \end{pmatrix} = \begin{pmatrix} g_1(x_1, \ldots, x_n) \\ \vdots \\ g_p(x_1, \ldots, x_n) \end{pmatrix} = \overline{g}(\overline{x})
$$

Es decir, $z$ depende de las variables $y_j$ a través de la función $f$, y estas, a su vez, dependen de las $x_i$ a través de la función $\overline{g}$.

### 3B.1.2 Regla de la Cadena en Una Variable (Repaso)

Para funciones de una variable, si $z = f(y)$ y $y = g(x)$, entonces:

$$
\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}
$$

### 3B.1.3 Teorema de la Función Compuesta (Regla de la Cadena en VV)

**Enunciado:** Sean $\overline{g}: D_{\overline{g}} \subseteq \mathbb{R}^n \rightarrow \mathbb{R}^p$ y $f: D_f \subseteq \mathbb{R}^p \rightarrow \mathbb{R}$ funciones tales que $\text{Im}(\overline{g}) \subseteq D_f$. Si $\overline{g}$ es diferenciable en $\overline{x}_0$ y $f$ es diferenciable en $\overline{y}_0 = \overline{g}(\overline{x}_0)$, entonces la función compuesta $h = f \circ \overline{g}$ es diferenciable en $\overline{x}_0$ y:

$$
\frac{\partial h}{\partial x_i}(\overline{x}_0) = \sum_{j=1}^{p} \frac{\partial f}{\partial y_j}(\overline{y}_0) \cdot \frac{\partial g_j}{\partial x_i}(\overline{x}_0)
$$

En notación matricial: $\nabla h(\overline{x}_0) = \nabla f(\overline{y}_0) \cdot J_{\overline{g}}(\overline{x}_0)$

## Segundo tema: 3B.2 Función Implícita e Inversa

### 3B.2.1 Derivación Implícita

La derivación implícita permite encontrar las derivadas de variables dependientes cuando las relaciones están dadas en forma implícita a través de ecuaciones.

### 3B.2.2 Teorema de la Función Implícita

**Problema general:** Dada una ecuación $F(x, y) = 0$, ¿cuándo define $y$ como función de $x$ localmente?

**Teorema:** Sea $F: D_F \subseteq \mathbb{R}^{n+1} \rightarrow \mathbb{R}$ una función de clase $C^1$ y $(\overline{x}_0, y_0) \in D_F$ tal que:

1. $F(\overline{x}_0, y_0) = 0$
2. $\frac{\partial F}{\partial y}(\overline{x}_0, y_0) \neq 0$

Entonces existe un entorno $U$ de $\overline{x}_0$ y una función $y = \varphi(\overline{x})$ de clase $C^1$ tal que $F(\overline{x}, \varphi(\overline{x})) = 0$ para todo $\overline{x} \in U$.

### 3B.2.3 Derivación Inversa

Para funciones inversas, si $\overline{y} = \overline{f}(\overline{x})$ tiene inversa $\overline{x} = \overline{f}^{-1}(\overline{y})$, entonces:

$$
J_{\overline{f}^{-1}}(\overline{y}_0) = [J_{\overline{f}}(\overline{x}_0)]^{-1}
$$

### 3B.2.4 Teorema de la Función Inversa

**Teorema:** Sea $\overline{f}: D_{\overline{f}} \subseteq \mathbb{R}^n \rightarrow \mathbb{R}^n$ una función de clase $C^1$ y $\overline{x}_0 \in D_{\overline{f}}$ tal que $J_{\overline{f}}(\overline{x}_0)$ es invertible. Entonces $\overline{f}$ es localmente invertible en un entorno de $\overline{x}_0$.

## Tercer tema: 3B.3 Tangentes, Normales y Variaciones

### 3B.3.1 Tangentes y Normales

**Problema general:** Determinar tangentes y normales a:

- Gráficos de funciones
- Conjuntos de nivel
- Imágenes de funciones paramétricas

**Para gráficos:** Si $z = f(x, y)$, el plano tangente en $(x_0, y_0, f(x_0, y_0))$ es:

$$
z - f(x_0, y_0) = \frac{\partial f}{\partial x}(x_0, y_0)(x - x_0) + \frac{\partial f}{\partial y}(x_0, y_0)(y - y_0)
$$

### 3B.3.2 Diferencial Total

Para una función escalar $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ diferenciable en un punto $\overline{x}_0 \in D_f$, la **diferencial total** es la aplicación lineal $df(\overline{x}_0): \mathbb{R}^n \rightarrow \mathbb{R}$ definida como:

$$
df(\overline{x}_0)(\overline{h}) = \nabla f(\overline{x}_0) \cdot \overline{h}
$$

**Estimación de pequeñas variaciones:**

$$
\Delta f \approx df(\overline{x}_0) \approx \frac{\partial f}{\partial x_1}(\overline{x}_0)\Delta x_1 + \cdots + \frac{\partial f}{\partial x_n}(\overline{x}_0)\Delta x_n
$$

### 3B.3.3 Variaciones Máximas

**Dirección de máximo crecimiento:** La dirección de máximo crecimiento de la función en un punto $\overline{x}_0$ es la dirección del gradiente, $\nabla f(\overline{x}_0)$. La dirección de máximo decrecimiento es la de $-\nabla f(\overline{x}_0)$.

**Teorema:** Sean $f \in C^1(D_f)$ y $\overline{x}_0 \in \text{Int}(D_f)$ tales que $\nabla f(\overline{x}_0) \neq \overline{0}$. El máximo valor de la derivada direccional $D_{\overline{u}} f(\overline{x}_0)$ se produce en la dirección del vector unitario:

$$
\overline{u} = \frac{\nabla f(\overline{x}_0)}{||\nabla f(\overline{x}_0)||}
$$

**Demostración:**
$$
D_{\overline{u}} f(\overline{x}_0) = \nabla f(\overline{x}_0) \cdot \overline{u} = ||\nabla f(\overline{x}_0)|| \cdot ||\overline{u}|| \cdot \cos\theta = ||\nabla f(\overline{x}_0)|| \cos\theta
$$

El valor máximo de $\cos\theta$ es 1 (cuando $\theta = 0$), y el mínimo es -1 (cuando $\theta = \pi$).

## Cuarto tema: 3B.4 Desarrollo de Taylor y Extremos

### 3B.4.1 Desarrollo de Taylor

**Taylor en una variable (repaso):**
$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \cdots
$$

**Taylor en varias variables:**
$$
f(\overline{x}) = f(\overline{x}_0) + \nabla f(\overline{x}_0) \cdot (\overline{x} - \overline{x}_0) + \frac{1}{2}(\overline{x} - \overline{x}_0)^T H(\overline{x}_0) (\overline{x} - \overline{x}_0) + \cdots
$$

### 3B.4.2 Extremos en Varias Variables

**Definición:** Sea $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ y $\overline{x}_0 \in D_f$.

- $\overline{x}_0$ es un **máximo local** de $f$ si existe una bola $B_r(\overline{x}_0)$ tal que para todo $\overline{x} \in B_r(\overline{x}_0) \cap D_f$, $f(\overline{x}) \leq f(\overline{x}_0)$.
- $\overline{x}_0$ es un **mínimo local** de $f$ si existe una bola $B_r(\overline{x}_0)$ tal que para todo $\overline{x} \in B_r(\overline{x}_0) \cap D_f$, $f(\overline{x}) \geq f(\overline{x}_0)$.

Los extremos locales se conocen como **extremos relativos**. Si las desigualdades son estrictas, se habla de **extremos estrictos**.

### 3B.4.3 Criterios para Extremos Libres

**Criterio de la Primera Derivada (CN):**

Sea $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ diferenciable en $\overline{x}_0 \in \text{Int}(D_f)$. Si $\overline{x}_0$ es un extremo local de $f$, entonces el gradiente de $f$ en $\overline{x}_0$ es el vector nulo:

$$
\nabla f(\overline{x}_0) = \overline{0}
$$

Los puntos que satisfacen esta condición son los **puntos críticos** de $f$.

**Observación:** La condición es necesaria pero no suficiente. No todo punto crítico es un extremo.

**Criterio de la Segunda Derivada (CS):**

Sea $f \in C^2(D_f)$ y $\overline{x}_0 \in \text{Int}(D_f)$ un punto crítico de $f$ ($\nabla f(\overline{x}_0) = \overline{0}$).

Se analiza la matriz hessiana $H(\overline{x}_0)$:

- Si $H(\overline{x}_0)$ es **definida positiva**, $\overline{x}_0$ es un mínimo local estricto
- Si $H(\overline{x}_0)$ es **definida negativa**, $\overline{x}_0$ es un máximo local estricto
- Si $H(\overline{x}_0)$ es **indefinida**, $\overline{x}_0$ es un punto de silla
- Si $H(\overline{x}_0)$ es **semidefinida**, el criterio no decide

**Criterio de Sylvester para la definición de la matriz Hessiana:**

- **Definida positiva:** Todos los menores principales (determinantes de las submatrices superiores izquierdas) son positivos.
- **Definida negativa:** Los signos de los menores principales se alternan, empezando por negativo: $d_1 < 0, d_2 > 0, d_3 < 0, \ldots$
