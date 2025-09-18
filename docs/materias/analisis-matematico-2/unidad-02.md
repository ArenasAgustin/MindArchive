---
title: "Unidad 2: Límites y Continuidad"
description: "Análisis Matemático 2 - Unidad 2: Extensión de los conceptos de límite y continuidad a funciones de varias variables, condiciones necesarias y suficientes, y aplicaciones en el análisis multivariable."
sidebar_position: 3
tags: [analisis-matematico-2, limites, continuidad, teoremas, matematicas]
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
- **2.2.4** Criterio secuencial (Heine)

### 2.3 Continuidad en Varias Variables

- **2.3.1** Definición de continuidad
- **2.3.2** Condiciones equivalentes
- **2.3.3** Puntos aislados vs puntos de acumulación

### 2.4 Condiciones para Existencia de Límites

- **2.4.1** Condiciones necesarias y suficientes
- **2.4.2** Límites restringidos y direccionales
- **2.4.3** Límites iterados
- **2.4.4** Teorema del sándwich

### 2.5 Técnicas prácticas para límites

- **2.5.1** Cambio a coordenadas polares/esféricas
- **2.5.2** Acotaciones y sándwich
- **2.5.3** Comparación de caminos (rectas y parábolas)
- **2.5.4** Desigualdades útiles y equivalencia de normas
- **2.5.5** Reescrituras y trucos frecuentes

### 2.6 Ejemplos resueltos

### 2.7 Ejercicios propuestos

### 🔗 Recursos Complementarios

- [Apunte Unidad 2 - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758076928/pdfs/pdf_1758076932_AM2%20-%20Notas%20U2%20%28Natali%29.pdf)
- [Apunte Unidad 2 - Ferreyra](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758076944/pdfs/pdf_1758076948_Unidad%202%20-%20AM2.pdf)

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

### 2.2.4 Criterio Secuencial (Heine)

**Enunciado (criterio secuencial):** Sea $\overline{f}: D\subseteq \mathbb{R}^n \to \mathbb{R}^p$ y $\overrightarrow{x}_0\in\mathbb{R}^n$ punto de acumulación de $D$. Entonces

$$
\lim_{\overrightarrow{x}\to\overrightarrow{x}_0} \overline{f}(\overrightarrow{x}) = \overline{L}
\iff
\exists\text{ }\forall \text{ sucesión }  (\overrightarrow{x}_k)\subset D\setminus\{\overrightarrow{x}_0\} \text{ con } \overrightarrow{x}_k\to\overrightarrow{x}_0,\ \overline{f}(\overrightarrow{x}_k)\to \overline{L}.
$$

Este criterio es muy útil para:

- Probar límites: basta verificar la convergencia de $\overline{f}(\overrightarrow{x}_k)$ para toda sucesión que converge a $\overrightarrow{x}_0$.
- Negar la existencia: si existen dos sucesiones $\overrightarrow{x}_k,\overrightarrow{y}_k \to \overrightarrow{x}_0$ tales que $\overline{f}(\overrightarrow{x}_k)$ y $\overline{f}(\overrightarrow{y}_k)$ tienen límites distintos, el límite global no existe.

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

## Quinto tema: 2.5 Técnicas Prácticas para Límites

### 2.5.1 Cambio a coordenadas polares/esféricas

Cuando $n=2$, si $\overrightarrow{x}=(x,y)$ y el punto es $(0,0)$, usar $x=r\cos\theta$, $y=r\sin\theta$ y estudiar $r\to 0^{+}$. En $\mathbb{R}^3$, usar esféricas $(r,\varphi,\theta)$ con $r\to 0^{+}$.

- Si el resultado en polares depende de $\theta$, el límite global no existe.
- Si se obtiene una cota que sólo depende de $r$ y tiende a $0$, suele concluirse el límite (técnica de acotación con $r$).

### 2.5.2 Acotaciones y sándwich

Construir $f\le g \le h$ y forzar el límite de $g$ usando que los de $f$ y $h$ coinciden (Teorema del Sándwich). Útil con funciones acotadas como $\sin$ y $\cos$:

$$
|\sin t| \le |t|,\quad 1-\cos t \le \tfrac{t^2}{2},\quad |\cos t - 1| \le \tfrac{t^2}{2}.
$$

### 2.5.3 Comparación de caminos (rectas y parábolas)

Probar por caminos distintos (rectas $y=mx$ o parábolas $y=\alpha x^2$). Si dos caminos producen límites distintos, el límite global no existe. Atención: obtener el mismo valor en varios caminos no garantiza la existencia del límite global (es sólo condición necesaria).

### 2.5.4 Desigualdades útiles y equivalencia de normas

En $\mathbb{R}^2$: $x^2+y^2 \ge 2|xy| \Rightarrow |xy| \le \tfrac{x^2+y^2}{2}$. En general, $\lVert\overrightarrow{x}\rVert_\infty \le \lVert\overrightarrow{x}\rVert_2 \le \sqrt{n}\, \lVert\overrightarrow{x}\rVert_\infty$.

Todas las normas en $\mathbb{R}^n$ son equivalentes: las nociones de límite y continuidad no dependen de la norma elegida.

### 2.5.5 Reescrituras y trucos frecuentes

Factorizar, racionalizar denominadores, multiplicar y dividir por la conjugada, y usar identidades trigonométricas para exponer términos que tienden a $0$.

## Sexto tema: 2.6 Ejemplos Resueltos

### Ejemplo A (existe y vale 0 por acotación)

Sea $f(x,y)=\dfrac{x^2 y^2}{x^2+y^2}$ con $f(0,0)=0$. Para $(x,y)\ne (0,0)$,

$$
0 \le \left|\frac{x^2 y^2}{x^2+y^2}\right| = \frac{|xy|\,|xy|}{x^2+y^2} \le \frac{\tfrac{x^2+y^2}{2}\, |xy|}{x^2+y^2} = \tfrac{1}{2}\, |xy| \le \tfrac{1}{4}\,(x^2+y^2).
$$

Luego $\lim\limits_{(x,y)\to(0,0)} f(x,y)=0$ por sándwich.

### Ejemplo B (no existe por caminos)

Sea $g(x,y)=\dfrac{x^2 - y^2}{x^2+y^2}$. Sobre $y=0$ se obtiene $g(x,0)=1$ para $x\ne 0$, mientras que sobre $x=0$ se obtiene $g(0,y)=-1$ para $y\ne 0$. Por lo tanto, el límite en $(0,0)$ no existe.

### Ejemplo C (límites iterados existen e iguales, pero no hay límite doble)

Considere $h(x,y)=\dfrac{x y}{x^2+y^2}$ con $h(0,0)=0$.

- Para todo $x\ne 0$, $\lim\limits_{y\to 0} h(x,y)=0$, luego $\lim\limits_{x\to 0} \bigl(\lim\limits_{y\to 0} h(x,y)\bigr) = 0$.
- Análogamente, $\lim\limits_{y\to 0} \bigl(\lim\limits_{x\to 0} h(x,y)\bigr) = 0$.

Sin embargo, sobre $y=mx$ se tiene $h(x,mx)=\dfrac{m}{1+m^2}$, que depende de $m$, por lo que el límite doble en $(0,0)$ no existe.

### Ejemplo D (sándwich con función acotada)

Sea $q(x,y)=\dfrac{x\,\sin(x^2+y^2)}{\sqrt{x^2+y^2}}$. Usando $|\sin t|\le |t|$,

$$
|q(x,y)| \le \frac{|x|\, (x^2+y^2)}{\sqrt{x^2+y^2}} = |x|\, \sqrt{x^2+y^2} \le x^2+y^2 \to 0.
$$

Luego $\lim\limits_{(x,y)\to(0,0)} q(x,y)=0$.

## Séptimo tema: 2.7 Ejercicios Propuestos

1) Estudiar $\displaystyle \lim_{(x,y)\to(0,0)} \frac{x^3 - y^3}{x^2+y^2}$.

1) Probar (o refutar) que $\displaystyle \lim_{(x,y)\to(0,0)} \frac{x^2 y}{x^2+y^2}$ existe usando caminos y criterio secuencial.

1) Usar polares para evaluar $\displaystyle \lim_{(x,y)\to(0,0)} \frac{\sqrt{x^2+y^2}\, \sin(x^2+y^2)}{x^2+y^2}$.

1) Dar un ejemplo de función con límites iterados existentes e iguales pero sin límite doble en $(0,0)$, y justificar.

1) Demostrar el criterio secuencial de límite para funciones $\mathbb{R}^n\to\mathbb{R}^p$ (pista: usar las definiciones de límite de sucesión y de función).
