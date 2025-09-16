---
title: "Unidad 7: Campos Vectoriales"
description: "Análisis Matemático 2 - Unidad 7: Campos vectoriales, rotacional, divergencia, teoremas fundamentales del cálculo (Green, Stokes, Gauss), campos conservativos e irrotacionales."
sidebar_position: 9
tags: [analisis-matematico-2, campos-vectoriales, rotacional, divergencia, green, stokes, gauss, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Estudiar campos vectoriales y sus propiedades geométricas, desarrollando herramientas para analizar rotación, divergencia y flujo, culminando con los teoremas fundamentales del cálculo vectorial.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Comprender la geometría de campos vectoriales y sus aplicaciones
- Calcular rotacional y divergencia de campos vectoriales
- Clasificar campos según sus propiedades (conservativos, irrotacionales, solenoidales)
- Aplicar los teoremas de Green, Stokes y Gauss
- Relacionar los diferentes teoremas fundamentales del cálculo
- Analizar transformaciones y cambios de variable como campos vectoriales

## 📋 Contenidos y recursos

### 7.1 Fundamentos de Campos Vectoriales

- **7.1.1** Definición y representación geométrica
- **7.1.2** Líneas de campo y flujo
- **7.1.3** Aplicaciones en física y ingeniería

### 7.2 Operadores Diferenciales

- **7.2.1** Rotacional de un campo vectorial
- **7.2.2** Divergencia de un campo vectorial
- **7.2.3** Clasificación de campos vectoriales

### 7.3 Teoremas Fundamentales del Cálculo

- **7.3.1** Versiones clásicas del TFC
- **7.3.2** Extensiones vectoriales del TFC
- **7.3.3** Campos conservativos y primitivas

### 7.4 Teoremas de Green, Stokes y Gauss

- **7.4.1** Teorema de Green (TFC5)
- **7.4.2** Teorema de Stokes (TFC6)
- **7.4.3** Teorema de Gauss (TFC7)

## 💡 Idea Central

Un **campo vectorial** es una función $\overrightarrow{F}$ con tantas variables de entrada como de salida:

$$
\overrightarrow{F}: \mathbb{R}^n \rightarrow \mathbb{R}^n
$$

Sobre cada punto del espacio se puede dibujar entonces el vector $\overrightarrow{F}(\overrightarrow{x})$ que le corresponde, y formar así un **campo de vectores**, de donde viene su nombre.

### Aplicaciones Geométricas

Analizar la **geometría del campo de vectores** (rotación, líneas de campo, flujo, etc.) tiene enormes aplicaciones en ciencia y tecnología, por ejemplo para estudiar:

- Campos electromagnéticos
- Velocidades de un fluido
- Campos gravitacionales
- Distribuciones de temperatura

### Cambios de Variable

Todos los **cambios de variable** vistos a lo largo de la materia son campos vectoriales. Su uso requiere entender qué regiones del dominio se transforman en qué regiones de la imagen. El análisis de estos mapeos es otra gran aplicación de estas funciones.

### Importancia Teórica

A nivel teórico, los campos vectoriales tienen un **lugar privilegiado**, ya que:

- Todo **gradiente** de una función escalar $f$ es un campo vectorial
- Su **integración** permite recuperar $f$
- Esto se puede extender a toda **Jacobiana**, para recuperar su primitiva $\overrightarrow{f}$
- La teoría de **campos conservativos** permite decidir cuándo es posible hacerlo

Sus aplicaciones son centrales para las ciencias naturales y la solución de ecuaciones diferenciales.

### Teoremas Fundamentales

Se pueden definir nuevas versiones del **Teorema Fundamental del Cálculo**, según el tipo de integral que se haga con los campos vectoriales. En particular, los **teoremas de Green, Stokes y Gauss**, que son la cúspide del cálculo de varias variables y un corolario de toda la teoría vista.

## Primer tema: 7.1 Fundamentos de Campos Vectoriales

### 7.1.1 Definición y Representación Geométrica

**Definición:** Un **campo vectorial** en $\mathbb{R}^n$ es una función:

$$
\overrightarrow{F}: D \subseteq \mathbb{R}^n \rightarrow \mathbb{R}^n
$$

donde $\overrightarrow{F}(\overrightarrow{x}) = (F_1(\overrightarrow{x}), F_2(\overrightarrow{x}), \ldots, F_n(\overrightarrow{x}))$.

**Representación geométrica:** A cada punto $\overrightarrow{x} \in D$ se le asocia el vector $\overrightarrow{F}(\overrightarrow{x})$ con origen en $\overrightarrow{x}$.

### 7.1.2 Líneas de Campo y Flujo

**Líneas de campo:** Son curvas cuyo vector tangente en cada punto coincide con el campo vectorial en ese punto.

**Ecuación diferencial:** $\frac{d\overrightarrow{r}}{dt} = \overrightarrow{F}(\overrightarrow{r}(t))$

**Flujo:** Representa el "caudal" del campo vectorial a través de una superficie.

### 7.1.3 Aplicaciones en Física e Ingeniería

**Campos de velocidad:** $\overrightarrow{v}(\overrightarrow{x})$ en mecánica de fluidos

**Campos eléctricos:** $\overrightarrow{E}(\overrightarrow{x})$ en electromagnetismo

**Campos gravitacionales:** $\overrightarrow{g}(\overrightarrow{x})$ en gravitación

**Campos de temperatura:** $\nabla T(\overrightarrow{x})$ en transferencia de calor

## Segundo tema: 7.2 Operadores Diferenciales

### 7.2.1 Rotacional de un Campo Vectorial

**Definición:** Para $\overrightarrow{F}: \mathbb{R}^3 \rightarrow \mathbb{R}^3$, donde $\overrightarrow{F} = (P, Q, R)$:

$$
\text{rot}(\overrightarrow{F}) = \nabla \times \overrightarrow{F} = \begin{vmatrix}
\overrightarrow{i} & \overrightarrow{j} & \overrightarrow{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$

$$
= \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)
$$

**Interpretación física:** Mide la **tendencia rotacional** del campo en cada punto.

### 7.2.2 Divergencia de un Campo Vectorial

**Definición:** Para $\overrightarrow{F}: \mathbb{R}^n \rightarrow \mathbb{R}^n$, donde $\overrightarrow{F} = (F_1, F_2, \ldots, F_n)$:

$$
\text{div}(\overrightarrow{F}) = \nabla \cdot \overrightarrow{F} = \frac{\partial F_1}{\partial x_1} + \frac{\partial F_2}{\partial x_2} + \cdots + \frac{\partial F_n}{\partial x_n}
$$

**Interpretación física:** Mide la **tendencia expansiva** del campo en cada punto (fuentes y sumideros).

### 7.2.3 Clasificación de Campos Vectoriales

**Según el Rotacional:**

- Si $\nabla \times \overrightarrow{F} = \overrightarrow{0}$, el campo es **irrotacional** o **conservativo**
- Si $\nabla \times \overrightarrow{F} \neq \overrightarrow{0}$, el campo es **rotacional**

**Según la Divergencia:**

- Si $\nabla \cdot \overrightarrow{F} = 0$, el campo es **incompresible** o **solenoidal**
- Si $\nabla \cdot \overrightarrow{F} \neq 0$, el campo es **compresible** o **no solenoidal**

## Tercer tema: 7.3 Teoremas Fundamentales del Cálculo

### 7.3.1 Versiones Clásicas del TFC

**Teorema Fundamental del Cálculo (versión 1):**
$$
\int_a^b f'(x) dx = f(b) - f(a)
$$

**Teorema Fundamental del Cálculo (versión 2):**
$$
\frac{d}{dx} \int_a^x f(t) dt = f(x)
$$

### 7.3.2 Extensiones Vectoriales del TFC

**Teorema Fundamental del Cálculo para Integrales de Línea (TFC3):**
$$
\int_{A}^{B} \nabla f(\overrightarrow{x}) \cdot d\overrightarrow{l} = f(B) - f(A)
$$

**Teorema Fundamental del Cálculo para Funciones Vectoriales (TFC4):**
$$
\int_{A}^{B} \overrightarrow{f}'(\overrightarrow{x}) \cdot d\overrightarrow{l} = \overrightarrow{f}(B) - \overrightarrow{f}(A)
$$

### 7.3.3 Campos Conservativos y Primitivas

**Campo conservativo:** Un campo $\overrightarrow{F}$ es conservativo si existe una función escalar $f$ tal que $\overrightarrow{F} = \nabla f$.

**Función potencial:** La función $f$ se llama función potencial de $\overrightarrow{F}$.

**Criterio:** En una región simplemente conexa, $\overrightarrow{F}$ es conservativo si y solo si $\nabla \times \overrightarrow{F} = \overrightarrow{0}$.

## Cuarto tema: 7.4 Teoremas de Green, Stokes y Gauss

### 7.4.1 Teorema de Green (TFC5)

**Enunciado:** Relaciona una integral de línea sobre una curva cerrada $C$ en el plano con una integral doble sobre la región $R$ que encierra.

$$
\oint_C \overrightarrow{F} \cdot d\overrightarrow{l} = \iint_R \text{rot}(\overrightarrow{F}) dA = \iint_R \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx dy
$$

donde $\overrightarrow{F} = (P, Q)$ en $\mathbb{R}^2$.

**Interpretación:**

- **Lado izquierdo:** Circulación del campo a lo largo de la frontera
- **Lado derecho:** Rotación total en el interior de la región

### 7.4.2 Teorema de Stokes (TFC6)

**Enunciado:** Relaciona una integral de línea sobre el borde $\partial S$ de una superficie $S$ en el espacio con una integral de superficie del rotacional sobre $S$.

$$
\oint_{\partial S} \overrightarrow{F} \cdot d\overrightarrow{l} = \iint_S (\nabla \times \overrightarrow{F}) \cdot d\overrightarrow{a}
$$

**Interpretación:**

- **Lado izquierdo:** Circulación del campo a lo largo del borde de la superficie
- **Lado derecho:** Flujo del rotacional a través de la superficie

### 7.4.3 Teorema de Gauss (TFC7)

**Enunciado:** Relaciona una integral de superficie cerrada $\partial V$ que encierra un volumen $V$ con una integral triple sobre ese volumen de la divergencia del campo.

$$
oint_{\partial V} \overrightarrow{F} \cdot d\overrightarrow{a} = \iiint_V (\nabla \cdot \overrightarrow{F}) dV
$$

**Interpretación:**

- **Lado izquierdo:** Flujo del campo a través de la superficie cerrada
- **Lado derecho:** Divergencia total en el interior del volumen

### 7.4.4 Unificación de los Teoremas

**Estructura común:** Todos estos teoremas tienen la forma:

$$
\int_{\partial \Omega} \omega = \int_{\Omega} d\omega
$$

donde:

- $\Omega$ es una región (intervalo, superficie, volumen)
- $\partial \Omega$ es su frontera
- $\omega$ es una forma diferencial
- $d$ es el operador diferencial exterior

**Jerarquía dimensional:**

1. **TFC1:** Intervalo → Puntos
2. **Green:** Región plana → Curva cerrada
3. **Stokes:** Superficie → Curva cerrada
4. **Gauss:** Volumen → Superficie cerrada

**Significado geométrico:** El comportamiento en la frontera está completamente determinado por el comportamiento en el interior.
