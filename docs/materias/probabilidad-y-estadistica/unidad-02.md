---
title: "Unidad 2: Probabilidad y Variables Aleatorias"
description: "Probabilidad y Estadística - Unidad 2: Conceptos fundamentales de probabilidad, variables aleatorias y distribuciones"
sidebar_position: 2
tags: [probabilidad, variables-aleatorias, eventos, distribuciones]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender los conceptos fundamentales de probabilidad y variables aleatorias, estableciendo las bases matemáticas para el análisis estadístico y la modelización de fenómenos aleatorios.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Interpretar los conceptos de experimento aleatorio, espacio muestral y eventos
- Formalizar el concepto de probabilidad y reconocer sus axiomas y propiedades
- Operar aritméticamente con probabilidades (suma y producto)
- Definir e interpretar el concepto de variable aleatoria
- Describir la distribución de probabilidades de una variable aleatoria y evaluar sus propiedades

## 📋 Contenidos y recursos

### 2.1 Conceptos Fundamentales

- **2.1.1** Experimento aleatorio
- **2.1.2** Espacio muestral
- **2.1.3** Eventos o sucesos

### 2.2 Probabilidad y Operaciones

- **2.2.1** Axiomas de probabilidad
- **2.2.2** Operaciones con probabilidades
- **2.2.3** Probabilidad condicional

### 2.3 Variables Aleatorias

- **2.3.1** Definición y tipos
- **2.3.2** Distribución de probabilidades
- **2.3.3** Medidas de variables aleatorias

### 2.4 Estudio de Caso

- **2.4.1** Análisis de reclamos diarios
- **2.4.2** Cálculos de probabilidad
- **2.4.3** Interpretación de resultados

## Primer tema: 2.1 Conceptos Fundamentales

### Esquema Conceptual

Esta unidad aborda el paso de los **fenómenos aleatorios** a su **modelado matemático**, estableciendo las bases para el análisis estadístico posterior. El estudio de la probabilidad nos permite cuantificar la incertidumbre y tomar decisiones basadas en información probabilística.

### 2.1.1 Experimento Aleatorio

Un **experimento aleatorio** es todo proceso cuyo resultado no puede predecirse de forma determinista, pero del cual es posible describir el conjunto de todos sus resultados posibles.

**Características:**

- El resultado es incierto antes de realizarlo
- Se conocen todos los posibles resultados
- Puede repetirse bajo las mismas condiciones

**Ejemplos:**

- Lanzar una moneda
- Tirar un dado
- Seleccionar una pieza y verificar si es defectuosa
- Contar el número de clientes que llegan a un banco en una hora

### 2.1.2 Espacio Muestral ($\Omega$ o $S$)

El **espacio muestral** es el conjunto de todos los resultados posibles de un experimento aleatorio.

**Ejemplos:**

- Lanzar una moneda: $\Omega = \{\text{Cara, Cruz}\}$
- Tirar un dado: $\Omega = \{1, 2, 3, 4, 5, 6\}$
- Contar reclamos diarios: $\Omega = \{0, 1, 2, 3, 4, 5, ...\}$

### 2.1.3 Eventos o Sucesos

Un **evento o suceso** es cualquier subconjunto del espacio muestral.

#### Tipos de Sucesos

| Tipo de Suceso | Descripción | Ejemplo |
|----------------|-------------|---------|
| **Simple** | Un único resultado del espacio muestral | Obtener un 3 al tirar un dado |
| **Compuesto** | Formado por dos o más sucesos simples | Obtener un número par al tirar un dado |
| **Excluyentes** | No tienen elementos en común (A ∩ B = ∅) | Obtener cara Y cruz al mismo tiempo |
| **Exhaustivos** | Cubren todo el espacio muestral (A ∪ B = Ω) | Obtener número par O impar |
| **Complementarios** | A y Aᶜ son mutuamente excluyentes y exhaustivos | Obtener cara O no obtener cara |

**Propiedades de eventos complementarios:**
$$P(A) + P(A^c) = 1$$

## Segundo tema: 2.2 Probabilidad y Operaciones

La **probabilidad** es una medida numérica de la posibilidad de que ocurra un evento, proporcionando un marco matemático para cuantificar la incertidumbre.

### 2.2.1 Axiomas de Probabilidad

Los axiomas fundamentales que debe cumplir cualquier función de probabilidad son:

#### Axioma 1: No negatividad

$$0 \leq P(A) \leq 1$$
La probabilidad de cualquier evento está entre 0 y 1.

#### Axioma 2: Normalización

$$P(\Omega) = 1$$
La probabilidad del espacio muestral es 1.

#### Axioma 3: Aditividad

Si A₁, A₂, ... son eventos mutuamente excluyentes, entonces:
$$P(A_1 \cup A_2 \cup ...) = P(A_1) + P(A_2) + ...$$

### 2.2.2 Operaciones con Probabilidades

#### Suma (Unión - "o")

Probabilidad de que ocurra A **o** B:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Caso especial:** Si A y B son mutuamente excluyentes:
$$P(A \cup B) = P(A) + P(B)$$

#### Producto (Intersección - "y")

Probabilidad de que ocurra A **y** B:

$$P(A \cap B)$$

**Eventos independientes:**
$$P(A \cap B) = P(A) \cdot P(B)$$

**Eventos dependientes (Probabilidad Condicional):**
$$P(A \cap B) = P(A) \cdot P(B|A)$$

### 2.2.3 Probabilidad Condicional

La probabilidad condicional P(B|A) es la probabilidad de que ocurra B dado que A ya ha ocurrido:

$$P(B|A) = \frac{P(A \cap B)}{P(A)}$$

siempre que P(A) > 0.

## Tercer tema: 2.3 Variables Aleatorias

### 2.3.1 Definición y Tipos

#### Definición

Una **variable aleatoria** es una función que asocia un número real a cada suceso elemental del espacio muestral (Ω) de un experimento aleatorio.

$$X: \Omega \rightarrow \mathbb{R}$$

#### Tipos de Variables Aleatorias

**Variable Aleatoria Discreta:**

- Puede tomar un número contable de valores
- **Ejemplos:** número de reclamos, cantidad de defectos, número de clientes

**Variable Aleatoria Continua:**

- Puede tomar cualquier valor dentro de un intervalo
- **Ejemplos:** tiempo de vida útil, altura, volumen, temperatura

### 2.3.2 Distribución de Probabilidades

La **distribución de probabilidades** es la descripción de los posibles valores que puede tomar la variable aleatoria y sus probabilidades asociadas.

**Para variables discretas:** p(x) - función de probabilidad
**Para variables continuas:** f(x) - función de densidad

#### Propiedades de la distribución discreta

1. $$p(x) \geq 0$$ para todo x
2. $$\sum_x p(x) = 1$$

### 2.3.3 Medidas de Variables Aleatorias

#### Propiedades de Variables Aleatorias Discretas

| Propiedad | Fórmula | Descripción |
|-----------|---------|-------------|
| **Esperanza (Media) (μ)** | $$\mu = E(X) = \sum_x x \cdot p(x)$$ | Valor promedio o esperado de la variable |
| **Varianza (σ²)** | $$\sigma^2 = V(X) = \sum_x (x-\mu)^2 \cdot p(x)$$ | Medida de dispersión respecto a la media |

#### Fórmula alternativa para la varianza

$$\sigma^2 = E(X^2) - [E(X)]^2$$

## Cuarto tema: 2.4 Estudio de Caso - Reclamos Diarios

### 2.4.1 Análisis de Reclamos Diarios

Consideremos la variable discreta X: "Número de reclamos recibidos por día".

#### Distribución de Probabilidades

| X = x (Nº Reclamos) | P(X = x) (Probabilidad) |
|:-------------------:|:----------------------:|
| 0 | 0.19 |
| 1 | 0.27 |
| 2 | 0.22 |
| 3 | 0.15 |
| 4 | 0.10 |
| 5 | 0.07 |
| **Total** | **1.00** |

### 2.4.2 Cálculos de Probabilidad

#### Medidas Calculadas

**Media (Esperanza):**
$$\mu = E(X) = \sum x \cdot p(x)$$
$$\mu = 0(0.19) + 1(0.27) + 2(0.22) + 3(0.15) + 4(0.10) + 5(0.07)$$
$$\mu = 0 + 0.27 + 0.44 + 0.45 + 0.40 + 0.35 = 1.95$$

**Varianza:**
$$\sigma^2 = \sum (x-\mu)^2 \cdot p(x)$$
$$\sigma^2 = 35.72$$

#### Cálculo de Probabilidad (Atención Satisfactoria)

A la empresa le interesa atender satisfactoriamente hasta dos reclamos diarios, es decir, P(X ≤ 2):

$$P(X \leq 2) = P(X = 0) + P(X = 1) + P(X = 2)$$
$$P(X \leq 2) = 0.19 + 0.27 + 0.22 = 0.68$$

#### Cálculo de Probabilidad (Actividad Resentida)

La actividad se ve resentida si el número de reclamos es superior a dos, es decir, P(X > 2):

$$P(X > 2) = 1 - P(X \leq 2) = 1 - 0.68 = 0.32$$

### 2.4.3 Interpretación de Resultados

**Conclusiones del análisis:**

1. **Esperanza:** En promedio, se reciben 1.95 reclamos por día
2. **Atención satisfactoria:** La probabilidad de atender satisfactoriamente hasta 2 reclamos diarios es del **68%**
3. **Actividad resentida:** La probabilidad de que la actividad se vea resentida (más de 2 reclamos) es del **32%**

**Implicaciones para la gestión:**

- La empresa puede esperar aproximadamente 1.95 reclamos diarios
- Existe una probabilidad considerable (32%) de días con alta carga de reclamos
- Es recomendable planificar recursos para manejar hasta 3 reclamos eficientemente

**Conclusión del Caso:** La probabilidad de atender satisfactoriamente hasta 2 reclamos diarios es del 68%, y la probabilidad de que la actividad se vea resentida (más de 2 reclamos) es del 32%.

Este análisis proporciona información valiosa para la toma de decisiones operativas y la asignación de recursos en el área de atención al cliente.
