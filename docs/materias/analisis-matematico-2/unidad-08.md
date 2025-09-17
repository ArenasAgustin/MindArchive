---
title: "Unidad 8: Ecuaciones Diferenciales Ordinarias (EDO)"
description: "Análisis Matemático 2 - Unidad 8: Ecuaciones diferenciales ordinarias, clasificación, métodos de resolución, EDO de primer y segundo orden, teorema de existencia y unicidad."
sidebar_position: 10
tags: [analisis-matematico-2, ecuaciones-diferenciales, edo, variables-separables, lineales, homogeneas, matematicas]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Estudiar ecuaciones diferenciales ordinarias y sus métodos de resolución, desarrollando herramientas para modelar fenómenos naturales y sistemas dinámicos mediante ecuaciones que involucran derivadas.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Comprender la importancia de las ecuaciones diferenciales en ciencia y tecnología
- Clasificar ecuaciones diferenciales según orden, linealidad y homogeneidad
- Resolver EDO de primer orden por variables separables, homogéneas y lineales
- Resolver EDO de segundo orden lineales con coeficientes constantes
- Aplicar el teorema de existencia y unicidad de soluciones
- Modelar problemas aplicados mediante ecuaciones diferenciales

## 📋 Contenidos y recursos

### 8.1 Fundamentos de Ecuaciones Diferenciales

- **8.1.1** Conceptos básicos y motivación
- **8.1.2** Clasificación de ecuaciones diferenciales
- **8.1.3** Soluciones generales y particulares

### 8.2 EDO de Primer Orden

- **8.2.1** Variables separables
- **8.2.2** Ecuaciones homogéneas
- **8.2.3** Ecuaciones lineales de primer orden

### 8.3 EDO de Segundo Orden

- **8.3.1** Ecuaciones lineales homogéneas
- **8.3.2** Ecuaciones lineales no homogéneas
- **8.3.3** Métodos de resolución

### 8.4 Teoría de Existencia y Unicidad

- **8.4.1** Teorema de existencia y unicidad
- **8.4.2** Condiciones de aplicabilidad
- **8.4.3** Interpretación geométrica

### 🔗 Recursos Complementarios

- [Apunte Unidad 8 - Natali, Valenzuela](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758149980/pdfs/AM2_-_Notas_U8_Natali_Valenzuela_v65zke.pdf)
- [Apunte Unidad 8 - Ferreyra](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758149728/pdfs/Unidad_8_-_AM2_efdns0.pdf)

## 💡 Idea Central

Las **ecuaciones diferenciales** son el área de la matemática más motivada por sus aplicaciones en la ciencia y tecnología modernas. Muchos principios de la naturaleza y sistemas en la ingeniería están gobernados por ecuaciones diferenciales.

### Tipos de Ecuaciones

**Ecuaciones algebraicas:** Plantean operaciones entre variables que son **números**.

**Ecuaciones funcionales:** Plantean operaciones entre variables que son **funciones**.

**Ecuaciones diferenciales:** Plantean operaciones entre **diferencias**, es decir, **derivadas de funciones**.

### Clasificación Principal

**Ecuaciones Diferenciales Ordinarias (EDO):** Involucran funciones de **una variable** y sus derivadas.

**Ecuaciones en Derivadas Parciales (EDP):** Son más complejas, ya que involucran funciones de **varias variables** y sus derivadas parciales.

### Aplicaciones

Las ecuaciones diferenciales modelan:

- Crecimiento poblacional
- Decaimiento radiactivo
- Oscilaciones mecánicas
- Circuitos eléctricos
- Transferencia de calor
- Dinámica de fluidos
- Sistemas económicos

## Primer tema: 8.1 Fundamentos de Ecuaciones Diferenciales

### 8.1.1 Conceptos Básicos y Motivación

**Definición:** Una **ecuación diferencial** es una ecuación que contiene una función desconocida y sus derivadas.

**Forma general de una EDO:**
$$
F(x, y, y', y'', \ldots, y^{(n)}) = 0
$$

donde:

- $x$ es la variable independiente
- $y = y(x)$ es la función desconocida (variable dependiente)
- $y', y'', \ldots, y^{(n)}$ son las derivadas de $y$

**Solución:** Una función $y = \phi(x)$ que satisface la ecuación diferencial en un intervalo dado.

### 8.1.2 Clasificación de Ecuaciones Diferenciales

**Según el Orden:**

El **orden** de una EDO es el de la mayor derivada que aparece en la ecuación.

- **Primer orden:** $F(x, y, y') = 0$
- **Segundo orden:** $F(x, y, y', y'') = 0$
- **n-ésimo orden:** $F(x, y, y', y'', \ldots, y^{(n)}) = 0$

**Según la Linealidad:**

Una EDO es **lineal** si es lineal en la variable dependiente y sus derivadas, y sus coeficientes son funciones de la variable independiente.

**EDO lineal de orden n:**
$$
a_n(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \cdots + a_1(x)y' + a_0(x)y = g(x)
$$

**Según la Homogeneidad:**

Una EDO lineal es **homogénea** si el término independiente es nulo.

- **Homogénea:** $a_n(x)y^{(n)} + \cdots + a_0(x)y = 0$
- **No homogénea:** $a_n(x)y^{(n)} + \cdots + a_0(x)y = g(x)$ con $g(x) \neq 0$

### 8.1.3 Soluciones Generales y Particulares

**Solución general:** Contiene todas las constantes arbitrarias correspondientes al orden de la ecuación.

**Solución particular:** Se obtiene asignando valores específicos a las constantes arbitrarias.

**Condiciones iniciales:** Condiciones que permiten determinar las constantes arbitrarias.

## Segundo tema: 8.2 EDO de Primer Orden

### 8.2.1 Variables Separables

**Definición:** Las EDO más simples, donde las variables pueden ser separadas de forma que cada lado de la ecuación solo contenga una de las variables.

**Forma:**
$$
y'(x) = \frac{p(x)}{q(y)}
$$

**Método de resolución:**
$$
\int q(y) dy = \int p(x) dx
$$

**Pasos del método:**

1. Separar las variables: $q(y) dy = p(x) dx$
2. Integrar ambos lados
3. Despejar $y$ si es posible
4. Aplicar condiciones iniciales

**Ejemplo:**
$$
\frac{dy}{dx} = \frac{x}{y}
$$

Separando variables: $y dy = x dx$

Integrando: $\int y dy = \int x dx$

Resultado: $\frac{y^2}{2} = \frac{x^2}{2} + C$

Solución: $y^2 = x^2 + 2C$

### 8.2.2 Ecuaciones Homogéneas

**Definición:** EDO de la forma:
$$
y'(x) = f\left(\frac{y}{x}\right)
$$

**Método de resolución:** Se usa el cambio de variable $v = \frac{y}{x}$, lo que la transforma en una de variables separables.

**Cambio de variable:**

- $y = vx$
- $y' = v'x + v$

**Sustitución:**
$$
v'x + v = f(v)
$$
$$
v'x = f(v) - v
$$
$$
\frac{dv}{dx} = \frac{f(v) - v}{x}
$$

Esta ecuación es de variables separables en $v$ y $x$.

### 8.2.3 Ecuaciones Lineales de Primer Orden

**Forma:**
$$
y'(x) + p(x)y = q(x)
$$

**Método de resolución:** Se usa un **factor de integración**.

**Factor de integración:**
$$
\mu(x) = e^{\int p(x) dx}
$$

**Procedimiento:**

1. Multiplicar la ecuación por $\mu(x)$
2. El lado izquierdo se convierte en $(\mu(x)y)'$
3. Integrar ambos lados
4. Despejar $y$

**Solución general:**
$$
y = \frac{1}{\mu(x)} \left[ \int \mu(x)q(x) dx + C \right]
$$

## Tercer tema: 8.3 EDO de Segundo Orden

### 8.3.1 Ecuaciones Lineales Homogéneas

Se resuelven de forma analítica solo si son **lineales con coeficientes constantes**.

**Forma:**
$$
ay'' + by' + cy = 0
$$

donde $a$, $b$, $c$ son constantes y $a \neq 0$.

**Ecuación característica:**
$$
ar^2 + br + c = 0
$$

**Casos según las raíces:**

**Caso 1:** Raíces reales distintas $r_1 \neq r_2$
$$
y = C_1 e^{r_1 x} + C_2 e^{r_2 x}
$$

**Caso 2:** Raíces reales iguales $r_1 = r_2 = r$
$$
y = (C_1 + C_2 x) e^{rx}
$$

**Caso 3:** Raíces complejas $r = \alpha \pm \beta i$
$$
y = e^{\alpha x}(C_1 \cos(\beta x) + C_2 \sin(\beta x))
$$

### 8.3.2 Ecuaciones Lineales No Homogéneas

**Forma:**
$$
ay'' + by' + cy = f(x)
$$

**Método de resolución:**

1. Resolver la ecuación homogénea asociada: $ay'' + by' + cy = 0$
2. Buscar una **solución particular** $y_p$ de la ecuación completa
3. La solución general es: $y = y_h + y_p$

### 8.3.3 Métodos para Encontrar Soluciones Particulares

**Método de coeficientes indeterminados:** Para $f(x)$ de formas específicas (polinomios, exponenciales, trigonométricas).

**Método de variación de parámetros:** Método general que funciona para cualquier $f(x)$ continua.

## Cuarto tema: 8.4 Teoría de Existencia y Unicidad

### 8.4.1 Teorema de Existencia y Unicidad

**Enunciado:** Para una EDO de la forma $y' = f(x, y)$, si $f$ y $\frac{\partial f}{\partial y}$ son **continuas** en un rectángulo $R$ que contiene al punto $(x_0, y_0)$, entonces existe una **única solución** que pasa por ese punto.

**Condiciones:**

1. $f(x, y)$ es continua en $R$
2. $\frac{\partial f}{\partial y}$ es continua en $R$
3. $(x_0, y_0) \in R$

**Conclusión:** Existe una única función $y = \phi(x)$ definida en un intervalo que contiene a $x_0$ tal que:

- $\phi(x_0) = y_0$
- $\phi'(x) = f(x, \phi(x))$

### 8.4.2 Condiciones de Aplicabilidad

**Importancia práctica:**

- Garantiza que el problema tiene solución
- Asegura que la solución es única
- Proporciona base teórica para métodos numéricos

**Limitaciones:**

- Solo garantiza existencia local
- No proporciona método de construcción
- Las condiciones son suficientes pero no necesarias

### 8.4.3 Interpretación Geométrica

**Campo de direcciones:** La EDO $y' = f(x, y)$ define un campo de direcciones en el plano.

**Curvas integrales:** Las soluciones son curvas que en cada punto tienen la dirección indicada por el campo.

**Unicidad geométrica:** Por cada punto pasa exactamente una curva integral (bajo las condiciones del teorema).

**Aplicaciones:**

- Modelado de poblaciones
- Circuitos eléctricos
- Mecánica clásica
- Cinética química
- Economía dinámica
