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

### 🔗 Recursos Complementarios

- [Apunte Unidad 7 - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758149725/pdfs/AM2_-_Notas_U7_Natali_y9etho.pdf)
- [Apunte Unidad 7 - Ferreyra](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758149730/pdfs/Unidad_7_-_AM2_m2bnel.pdf)

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

### 7.3.4 Criterios prácticos de conservatividad

Sea $\overrightarrow{F}$ un campo $\mathbb{R}^n \to \mathbb{R}^n$ de clase $\mathcal{C}^1$ en un dominio abierto $D$.

- En $\mathbb{R}^2$ o $\mathbb{R}^3$, si $D$ es **simplemente conexo**, son equivalentes:
  1. $\exists\, f$ tal que $\overrightarrow{F} = \nabla f$ (conservativo)
  2. $\nabla \times \overrightarrow{F} = \overrightarrow{0}$ en $D$ (irrotacional)
  3. La integral de línea es **independiente del camino** entre dos puntos
  4. Para toda curva cerrada $C\subset D$:

$$
\oint_C \overrightarrow{F}\cdot d\overrightarrow{l} = 0
$$

- Si $D$ NO es simplemente conexo (tiene "agujeros"), puede ocurrir $\nabla\times\overrightarrow{F}=\overrightarrow{0}$ y sin embargo $\overrightarrow{F}$ no sea conservativo.

Contraejemplo clásico en $\mathbb{R}^2 \setminus \{(0,0)\}$:

$$
\overrightarrow{F}(x,y) = \left( -\frac{y}{x^2+y^2},\ \frac{x}{x^2+y^2} \right),\quad (x,y)\neq (0,0)
$$

Se verifica $\nabla\times\overrightarrow{F} = 0$ en su dominio, pero sobre la circunferencia unitaria $C: x^2+y^2=1$ (orientada en sentido antihorario):

$$
\oint_C \overrightarrow{F}\cdot d\overrightarrow{l} = 2\pi \neq 0
$$

Por lo tanto, no existe potencial global en ese dominio perforado.

Procedimiento para hallar un potencial $f$ cuando existe ($\mathbb{R}^3$):

1. Resolver $\nabla f = (P, Q, R)$ integrando por componentes.
2. Integrar $f_x = P$ respecto de $x$:

$$
f(x,y,z) = \int P(x,y,z)\, dx + g(y,z)
$$

1. Derivar y ajustar con $f_y=Q$ y $f_z=R$ para determinar $g(y,z)$ (hasta una constante).

Análogamente en $\mathbb{R}^2$ con $\overrightarrow{F}=(P,Q)$.

## 7.5 Orientación y convenciones; identidades útiles

### Orientación en Green, Stokes y Gauss

- Green (plano): la orientación positiva de la curva frontera $C=\partial R$ es **antihoraria** si la normal al plano $(0,0,1)$ apunta hacia "arriba".
- Stokes (superficie): la orientación de $\partial S$ viene dada por la **regla de la mano derecha** respecto de la normal elegida en $S$.
- Gauss (volumen): la normal sobre $\partial V$ es siempre la **saliente** del volumen.

Estas convenciones garantizan la coherencia del signo en las igualdades integrales.

### Identidades de cálculo vectorial

Para campos suficientemente suaves:

- $\nabla \times (\nabla f) = \overrightarrow{0}$
- $\nabla \cdot (\nabla \times \overrightarrow{F}) = 0$
- Regla del producto para divergencia: $\nabla \cdot (\phi\,\overrightarrow{F}) = \nabla \phi \cdot \overrightarrow{F} + \phi\, (\nabla \cdot \overrightarrow{F})$
- Regla del producto para rotacional: $\nabla \times (\phi\,\overrightarrow{F}) = \nabla \phi \times \overrightarrow{F} + \phi\,(\nabla \times \overrightarrow{F})$

## 7.6 Ejemplos resueltos

### 1) Teorema de Green en el círculo unidad

Sea $C$ la circunferencia unidad orientada en sentido antihorario y $R$ su disco.
Tome $\overrightarrow{F}(x,y)=(-y,\,x)$. Entonces

$$
  ext{rot}\,\overrightarrow{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - (-1) = 2.
$$

Por Green:

$$
\oint_C \overrightarrow{F}\cdot d\overrightarrow{l} = \iint_R 2\, dA = 2\,\text{area}(R) = 2\pi.
$$

Cálculo directo parametrizando $C(t)=(\cos t,\sin t)$, $t\in[0,2\pi]$:

$$
\overrightarrow{F}(C(t))=( -\sin t,\, \cos t),\quad d\overrightarrow{l}=(-\sin t,\,\cos t)\, dt \Rightarrow \overrightarrow{F}\cdot d\overrightarrow{l}= dt.
$$

Así, $\int_0^{2\pi} dt = 2\pi$ (coincide).

### 2) Teorema de Stokes en un disco plano

Sea $S=\{(x,y,0): x^2+y^2\le 1\}$ con normal $\overrightarrow{n}=(0,0,1)$ y $\partial S=C$ la circunferencia unidad antihoraria.
Con $\overrightarrow{F}(x,y,z)=(-y,\,x,\,0)$ se tiene

$$
\nabla \times \overrightarrow{F} = (0,0,2).
$$

Por Stokes:

$$
\oint_{\partial S} \overrightarrow{F}\cdot d\overrightarrow{l} = \iint_S (\nabla\times\overrightarrow{F})\cdot \overrightarrow{n}\, dA = \iint_S 2\, dA = 2\pi.
$$

Como se vio en el ejemplo anterior, el lado izquierdo también vale $2\pi$.

### 3) Teorema de Gauss en una esfera

Sea $V$ la bola de radio $R$ y $\partial V$ la esfera correspondiente, con normal saliente. Tome $\overrightarrow{F}(x,y,z)=(x,\,y,\,z)$.

Entonces $\nabla\cdot\overrightarrow{F} = 3$ y, por Gauss,

$$
\oint_{\partial V} \overrightarrow{F}\cdot d\overrightarrow{a} = \iiint_V 3\, dV = 3\,\text{Vol}(V) = 3\cdot \frac{4\pi R^3}{3} = 4\pi R^3.
$$

Directamente, sobre la esfera $\lVert \overrightarrow{r} \rVert = R$ se tiene $\overrightarrow{n}=\overrightarrow{r}/R$ y $\overrightarrow{F}\cdot \overrightarrow{n} = \overrightarrow{r}\cdot (\overrightarrow{r}/R)=R$.

Luego

$$
\oint_{\partial V} \overrightarrow{F}\cdot d\overrightarrow{a} = \int_{\partial V} R\, dA = R\cdot 4\pi R^2 = 4\pi R^3.
$$

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
\oint_{\partial V} \overrightarrow{F} \cdot d\overrightarrow{a} = \iiint_V (\nabla \cdot \overrightarrow{F})\, dV
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
