---
title: "Unidad 3A: Diferenciación"
description: "Análisis Matemático 2 - Unidad 3A: Desarrollo del cálculo diferencial de varias variables, derivadas direccionales, parciales, diferenciabilidad y aplicaciones básicas."
sidebar_position: 4
tags: [analisis-matematico-2, diferenciacion, derivadas-parciales, gradiente, jacobiana, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Desarrollar el cálculo diferencial de varias variables y sus aplicaciones básicas, extendiendo los conceptos de derivada y diferencial desde una variable a múltiples variables.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Extender el concepto de derivada/diferencial de una variable a derivadas/diferencial en varias variables
- Interpretar gráficamente las derivadas direccionales
- Analizar condiciones de diferenciabilidad de funciones
- Derivar funciones compuestas, inversas e implícitas
- Caracterizar planos y rectas tangentes y normales a conjuntos dados
- Aproximar funciones escalares localmente
- Determinar y clasificar extremos de funciones escalares

## 📋 Contenidos y recursos

### 3A.1 Tipos de Derivadas

- **3A.1.1** Repaso: Derivada de una variable
- **3A.1.2** Derivadas direccionales
- **3A.1.3** Derivadas parciales
- **3A.1.4** Gradiente

### 3A.2 Herramientas Matriciales

- **3A.2.1** Matriz jacobiana
- **3A.2.2** Derivadas parciales de orden superior
- **3A.2.3** Matriz hessiana

### 3A.3 Condiciones de Diferenciación

- **3A.3.1** Diferenciación en una variable vs varias variables
- **3A.3.2** Condiciones necesarias y suficientes
- **3A.3.3** Teorema del límite de la diferenciación

### 3A.4 Aplicaciones y Teoremas

- **3A.4.1** Diferenciales
- **3A.4.2** Teorema de Clairaut-Schwarz
- **3A.4.3** Continuidad de derivadas parciales

## 💡 Idea Central

Estudiar funciones es estudiar dependencias entre variables. Esto es, cómo varía una cuando las otras lo hacen. Es decir, **estudiar funciones es estudiar variaciones**.

El cálculo diferencial es la aplicación inmediata del concepto de límite al estudio de funciones. Analiza variaciones infinitesimales y sus relaciones (tasas de cambio) y las usa para describir el comportamiento local (alrededor de un punto) de las funciones y sus conjuntos asociados.

Al ser varias variables, la tasa de cambio depende de cuál de ellas se está modificando, lo que da lugar a varias derivadas posibles. Pero, al igual que en una variable, existe como mucho una única función afín (tangente) que aproxima bien a la función alrededor de un punto.

## Primer tema: 3A.1 Tipos de Derivadas

### 3A.1.1 Repaso: Derivada en Una Variable

Sea $f:D_f \subseteq \mathbb{R} \rightarrow \mathbb{R}$, $x_0 \in D_f$ y $x_0$ es un punto de acumulación de $D_f$.

**Definición:** La derivada de $f$ en $x_0$ es:

$$
f'(x_0) = \lim_{x \rightarrow x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{h \rightarrow 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

Se dice que $f$ es derivable en $x_0$ si el límite existe y es finito.

### 3A.1.2 Derivada Direccional

**Definición:** Sean $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ un campo escalar, $\overline{x}_0 \in D_f$ un punto de acumulación de $D_f$, y $\overline{u} \in \mathbb{R}^n$ un vector unitario ($||\overline{u}|| = 1$).

La **derivada direccional** de $f$ en el punto $\overline{x}_0$ en la dirección del vector $\overline{u}$ es:

$$
D_{\overline{u}} f(\overline{x}_0) = \lim_{t \rightarrow 0} \frac{f(\overline{x}_0 + t\overline{u}) - f(\overline{x}_0)}{t}
$$

**Interpretación:** Esta derivada mide la tasa de cambio de la función $f$ al moverse desde el punto $\overline{x}_0$ en la dirección de $\overline{u}$.

### 3A.1.3 Derivadas Parciales

Las derivadas parciales son un caso particular de las derivadas direccionales.

**Definición:** Sea $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ un campo escalar y $\overline{x}_0 \in \text{Int}(D_f)$. La **derivada parcial** de $f$ con respecto a la $i$-ésima variable, $x_i$, en el punto $\overline{x}_0$ se define como:

$$
\frac{\partial f}{\partial x_i}(\overline{x}_0) = D_{\overline{e}_i} f(\overline{x}_0) = \lim_{t \rightarrow 0} \frac{f(\overline{x}_0 + t\overline{e}_i) - f(\overline{x}_0)}{t}
$$

Aquí, $\overline{e}_i$ es el $i$-ésimo vector canónico de la base de $\mathbb{R}^n$.

**Notación:** $\frac{\partial f}{\partial x_i}$, $D_{x_i} f$, $f'_{x_i}$.

### 3A.1.4 Gradiente

**Definición:** Sea $f$ una función escalar de $n$ variables. El **gradiente** de $f$ en $\overline{x}$, denotado $\nabla f(\overline{x})$, es el vector de $\mathbb{R}^n$ cuyas componentes son las derivadas parciales de $f$ en $\overline{x}$.

$$
\nabla f(\overline{x}) = \begin{pmatrix} \frac{\partial f}{\partial x_1}(\overline{x}) \\ \vdots \\ \frac{\partial f}{\partial x_n}(\overline{x}) \end{pmatrix} = \left(\frac{\partial f}{\partial x_1}(\overline{x}), \ldots, \frac{\partial f}{\partial x_n}(\overline{x})\right)^T
$$

**Observación importante:**
$$
D_{\overline{u}} f(\overline{x}_0) = \nabla f(\overline{x}_0) \cdot \overline{u}
$$

## Segundo tema: 3A.2 Herramientas Matriciales

### 3A.2.1 Matriz Jacobiana

**Definición:** Sea $\overline{f}: D_{\overline{f}} \subseteq \mathbb{R}^n \rightarrow \mathbb{R}^p$ una función vectorial. La **matriz jacobiana** de $\overline{f}$ en $\overline{x}_0$ es la matriz $J(\overline{x}_0)$ de tamaño $p \times n$ cuyas filas son los gradientes de las funciones componentes de $\overline{f}$.

$$
J(\overline{x}_0) = \begin{pmatrix} \nabla f_1(\overline{x}_0) \\ \vdots \\ \nabla f_p(\overline{x}_0) \end{pmatrix} = \begin{pmatrix} \frac{\partial f_1}{\partial x_1}(\overline{x}_0) & \cdots & \frac{\partial f_1}{\partial x_n}(\overline{x}_0) \\ \vdots & \ddots & \vdots \\ \frac{\partial f_p}{\partial x_1}(\overline{x}_0) & \cdots & \frac{\partial f_p}{\partial x_n}(\overline{x}_0) \end{pmatrix}
$$

### 3A.2.2 Derivadas Parciales de Orden Superior

Si $\frac{\partial f}{\partial x_i}$ existe para todo $\overline{x}$ en un entorno de $\overline{x}_0$, la función $\frac{\partial f}{\partial x_i}$ puede tener sus propias derivadas parciales. A estas se las llama **derivadas parciales de segundo orden**.

$$
\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial}{\partial x_j}\left(\frac{\partial f}{\partial x_i}\right)
$$

Las **derivadas cruzadas** son aquellas donde $i \neq j$.

**Teorema de Clairaut-Schwarz (Teorema del orden de derivación):**

Si las derivadas parciales de segundo orden $\frac{\partial^2 f}{\partial x_i \partial x_j}$ y $\frac{\partial^2 f}{\partial x_j \partial x_i}$ son continuas en un entorno del punto, entonces son iguales en ese punto.

$$
\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}
$$

### 3A.2.3 Matriz Hessiana

**Definición:** La **matriz hessiana** de $f$ en $\overline{x}$ es la matriz de $n \times n$ cuyas entradas son las derivadas parciales de segundo orden de $f$.

$$
H(\overline{x}) = \begin{pmatrix} \frac{\partial^2 f}{\partial x_1^2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial^2 f}{\partial x_n \partial x_1} & \cdots & \frac{\partial^2 f}{\partial x_n^2} \end{pmatrix}
$$

**Propiedad importante:** La matriz hessiana es simétrica si las derivadas de segundo orden son continuas (por el Teorema de Clairaut-Schwarz).

## Tercer tema: 3A.3 Condiciones de Diferenciación

### 3A.3.1 Diferenciación en Una Variable vs Varias Variables

**Esquema de diferenciación en una variable:**

- Derivabilidad → Continuidad
- La derivada proporciona la mejor aproximación lineal local

**Diferenciación en varias variables:**

- Existencia de derivadas parciales ≠ Diferenciabilidad
- Se requieren condiciones adicionales para garantizar diferenciabilidad

### 3A.3.2 Condiciones Necesarias y Suficientes (CNS) de Diferenciación

**Teorema del Límite de la Diferenciación:**

Una función $f: D_f \subseteq \mathbb{R}^n \rightarrow \mathbb{R}$ es diferenciable en $\overline{x}_0$ si y solo si existe una transformación lineal $L: \mathbb{R}^n \rightarrow \mathbb{R}$ tal que:

$$
\lim_{||\overline{h}|| \rightarrow 0} \frac{f(\overline{x}_0 + \overline{h}) - f(\overline{x}_0) - L(\overline{h})}{||\overline{h}||} = 0
$$

### 3A.3.3 Condiciones Prácticas

**Condiciones Necesarias (CN) de Diferenciación:**

1. **Continuidad:** Si $f$ es diferenciable en $\overline{x}_0$, entonces $f$ es continua en $\overline{x}_0$
2. **Derivadas direccionales:** Si $f$ es diferenciable en $\overline{x}_0$, entonces existen todas las derivadas direccionales
3. **Derivadas parciales:** Si $f$ es diferenciable en $\overline{x}_0$, entonces existen todas las derivadas parciales

**Condiciones Suficientes (CS) de Diferenciación:**

**Continuidad de las derivadas parciales:** Si las derivadas parciales de $f$ existen en un entorno de $\overline{x}_0$ y son continuas en $\overline{x}_0$, entonces $f$ es diferenciable en $\overline{x}_0$.

## Cuarto tema: 3A.4 Aplicaciones y Teoremas

### 3A.4.1 Diferenciales

**Definición:** Si $f$ es diferenciable en $\overline{x}_0$, el **diferencial** de $f$ en $\overline{x}_0$ es la transformación lineal:

$$
df(\overline{x}_0, \overline{h}) = \nabla f(\overline{x}_0) \cdot \overline{h} = \sum_{i=1}^{n} \frac{\partial f}{\partial x_i}(\overline{x}_0) h_i
$$

**Notación alternativa:**
$$
df = \frac{\partial f}{\partial x_1}dx_1 + \frac{\partial f}{\partial x_2}dx_2 + \cdots + \frac{\partial f}{\partial x_n}dx_n
$$

### 3A.4.2 Esquema Completo de la Unidad

**Tipos de Derivadas:**

- Repaso: Derivada de 1V
- Derivadas direccionales
- Derivadas parciales
- Gradiente
- Matriz jacobiana
- Derivadas parciales de orden superior
- Matriz hessiana

**CNS de Diferenciación:**

- Diferenciación en 1V vs VV
- Teorema del límite de la diferenciación
- Diferenciales
- CN: Continuidad, derivadas direccionales, derivadas parciales
- CS: Continuidad de derivadas parciales

### 3A.4.3 Aplicaciones Inmediatas

El desarrollo de estos conceptos permite:

1. **Análisis local de funciones:** Aproximaciones lineales y cuadráticas
2. **Optimización:** Condiciones necesarias para extremos
3. **Geometría:** Planos tangentes y normales a superficies
4. **Física y ingeniería:** Modelado de fenómenos multivariables
5. **Ecuaciones diferenciales:** Sistemas de ecuaciones con múltiples variables