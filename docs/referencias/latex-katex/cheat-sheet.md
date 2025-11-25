---
title: "📐 LaTeX/KaTeX Cheat Sheet - Fórmulas Matemáticas"
description: "Guía rápida de sintaxis LaTeX/KaTeX para fórmulas matemáticas: operaciones, símbolos, matrices, límites, derivadas, integrales y más"
sidebar_position: 1
tags: [latex, katex, matematicas, formulas, referencia]
---

Guía de referencia rápida para escribir fórmulas matemáticas en LaTeX (compatible con KaTeX en Docusaurus).

:::tip Modo Matemático

- **Inline:** Usa `$...$` para fórmulas dentro del texto: $E = mc^2$
- **Display:** Usa `$$...$$` para fórmulas en bloque centrado
- **Display mejorado:** Usa ` ```math ... ``` ` para bloques de código LaTeX con resaltado de sintaxis
:::

---

## 🔢 Operaciones Básicas

### Operaciones Simples

| Operación | Código | Resultado |
|-----------|--------|-----------|
| Suma | `$a + b$` | $a + b$ |
| Resta | `$a - b$` | $a - b$ |
| Multiplicación (punto) | `$a \cdot b$` | $a \cdot b$ |
| Multiplicación (cruz) | `$a \times b$` | $a \times b$ |
| División | `$a \div b$` | $a \div b$ |
| Fracción | `$\frac{a}{b}$` | $\frac{a}{b}$ |
| Potencia | `$a^{n}$` | $a^{n}$ |
| Subíndice | `$a_{i}$` | $a_{i}$ |
| Raíz cuadrada | `$\sqrt{x}$` | $\sqrt{x}$ |
| Raíz n-ésima | `$\sqrt[n]{x}$` | $\sqrt[n]{x}$ |
| Valor absoluto | `$\lvert x \rvert$` | $\lvert x \rvert$ |

### Fracciones y Binomiales

```latex
$$\frac{numerador}{denominador}$$
$$\frac{a + b}{c - d}$$
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
```

$$\frac{numerador}{denominador}$$

$$\frac{a + b}{c - d}$$

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

---

## 🔣 Símbolos Matemáticos Comunes

### Símbolos de Comparación y Relación

| Símbolo | Código | Resultado |
|---------|--------|-----------|
| Igual | `$=$` | $=$ |
| No igual | `$\neq$` | $\neq$ |
| Menor que | `$<$` | $<$ |
| Mayor que | `$>$` | $>$ |
| Menor o igual | `$\leq$` | $\leq$ |
| Mayor o igual | `$\geq$` | $\geq$ |
| Aproximadamente | `$\approx$` | $\approx$ |
| Proporcional | `$\propto$` | $\propto$ |
| Equivalente | `$\equiv$` | $\equiv$ |

### Símbolos Griegos

| Letra | Minúscula | Mayúscula | Código Min. | Código May. |
|-------|-----------|-----------|-------------|-------------|
| Alpha | $\alpha$ | $A$ | `\alpha` | `A` |
| Beta | $\beta$ | $B$ | `\beta` | `B` |
| Gamma | $\gamma$ | $\Gamma$ | `\gamma` | `\Gamma` |
| Delta | $\delta$ | $\Delta$ | `\delta` | `\Delta` |
| Epsilon | $\epsilon$ | $E$ | `\epsilon` | `E` |
| Theta | $\theta$ | $\Theta$ | `\theta` | `\Theta` |
| Lambda | $\lambda$ | $\Lambda$ | `\lambda` | `\Lambda` |
| Mu | $\mu$ | $M$ | `\mu` | `M` |
| Pi | $\pi$ | $\Pi$ | `\pi` | `\Pi` |
| Sigma | $\sigma$ | $\Sigma$ | `\sigma` | `\Sigma` |
| Phi | $\phi$ | $\Phi$ | `\phi` | `\Phi` |
| Omega | $\omega$ | $\Omega$ | `\omega` | `\Omega` |

### Símbolos Especiales

| Símbolo | Código | Resultado |
|---------|--------|-----------|
| Infinito | `$\infty$` | $\infty$ |
| Parcial | `$\partial$` | $\partial$ |
| Nabla | `$\nabla$` | $\nabla$ |
| Por lo tanto | `$\therefore$` | $\therefore$ |
| Porque | `$\because$` | $\because$ |
| Vacío | `$\emptyset$` | $\emptyset$ |
| Existe | `$\exists$` | $\exists$ |
| Para todo | `$\forall$` | $\forall$ |
| Elemento de | `$\in$` | $\in$ |
| No elemento | `$\notin$` | $\notin$ |
| Subconjunto | `$\subset$` | $\subset$ |
| Unión | `$\cup$` | $\cup$ |
| Intersección | `$\cap$` | $\cap$ |
| Diferencia | `$\setminus$` | $\setminus$ |
| Puntos suspensivos | `$\ldots$` | $\ldots$ |
| Puntos verticales | `$\vdots$` | $\vdots$ |
| Puntos diagonales | `$\ddots$` | $\ddots$ |

---

## 📊 Sumatorias y Productorias

### Sumatoria

```latex
$$\sum_{i=1}^{n} x_i$$
$$\sum_{k=0}^{\infty} \frac{1}{2^k}$$
```

$$\sum_{i=1}^{n} x_i$$

$$\sum_{k=0}^{\infty} \frac{1}{2^k}$$

### Productoria

```latex
$$\prod_{i=1}^{n} x_i$$
$$\prod_{k=1}^{n} k = n!$$
```

$$\prod_{i=1}^{n} x_i$$

$$\prod_{k=1}^{n} k = n!$$

---

## 📏 Límites

### Sintaxis Básica

```latex
$$\lim_{x \to a} f(x)$$
$$\lim_{x \to \infty} \frac{1}{x} = 0$$
$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$
$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$
```

$$\lim_{x \to a} f(x)$$

$$\lim_{x \to \infty} \frac{1}{x} = 0$$

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

---

## 🎯 Derivadas

### Notación de Derivadas

```latex
$$\frac{d}{dx} f(x)$$
$$\frac{df}{dx}$$
$$f'(x)$$
$$f''(x)$$
$$\frac{d^2y}{dx^2}$$
```

$$\frac{d}{dx} f(x)$$

$$\frac{df}{dx}$$

$$f'(x) \quad f''(x)$$

$$\frac{d^2y}{dx^2}$$

### Derivadas Parciales

```latex
$$\frac{\partial f}{\partial x}$$
$$\frac{\partial^2 f}{\partial x \partial y}$$
```

$$\frac{\partial f}{\partial x}$$

$$\frac{\partial^2 f}{\partial x \partial y}$$

---

## ∫ Integrales

### Integral Indefinida

```latex
$$\int f(x) \, dx$$
$$\int x^2 \, dx = \frac{x^3}{3} + C$$
```

$$\int f(x) \, dx$$

$$\int x^2 \, dx = \frac{x^3}{3} + C$$

### Integral Definida

```latex
$$\int_{a}^{b} f(x) \, dx$$
$$\int_{0}^{1} x^2 \, dx = \frac{1}{3}$$
```

$$\int_{a}^{b} f(x) \, dx$$

$$\int_{0}^{1} x^2 \, dx = \frac{1}{3}$$

### Integrales Múltiples

```latex
$$\iint_{D} f(x,y) \, dA$$
$$\iiint_{V} f(x,y,z) \, dV$$
$$\oint_{C} \vec{F} \cdot d\vec{r}$$
```

$$\iint_{D} f(x,y) \, dA$$

$$\iiint_{V} f(x,y,z) \, dV$$

$$\oint_{C} \vec{F} \cdot d\vec{r}$$

---

## 📐 Matrices

### Matriz Básica

```latex
$$\begin{matrix}
a & b \\
c & d
\end{matrix}$$
```

```math
\begin{matrix}
a & b \\
c & d
\end{matrix}
```

### Matriz con Paréntesis

```latex
$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$$
```

```math
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
```

### Matriz con Corchetes

```latex
$$\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}$$
```

```math
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
```

### Matriz con Llaves

```latex
$$\left\{\begin{matrix}
a & b \\
c & d
\end{matrix}\right\}$$
```

```math
\left\{\begin{matrix}
a & b \\
c & d
\end{matrix}\right\}
```

### Determinante

```latex
$$\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc$$
```

```math
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
```

### Matriz Aumentada

```latex
$$\left[\begin{array}{cc|c}
1 & 2 & 3 \\
4 & 5 & 6
\end{array}\right]$$
```

```math
\left[\begin{array}{cc|c}
1 & 2 & 3 \\
4 & 5 & 6
\end{array}\right]
```

---

## 📝 Sistemas de Ecuaciones

### Sistema de Ecuaciones

```latex
$$\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}$$
```

```math
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
```

### Ecuaciones Alineadas

```latex
$$\begin{aligned}
f(x) &= x^2 + 2x + 1 \\
&= (x + 1)^2
\end{aligned}$$
```

```math
\begin{aligned}
f(x) &= x^2 + 2x + 1 \\
&= (x + 1)^2
\end{aligned}
```

---

## 🔤 Texto en Modo Matemático

:::warning Caracteres Acentuados
Para usar texto con acentos en modo matemático, **siempre** usa `\text{}`:
:::

```latex
$$X_{\text{máx}} - X_{\text{mín}}$$
$$\text{Distancia mínima en } (0,0)$$
```

$$X_{\text{máx}} - X_{\text{mín}}$$

$$\text{Distancia mínima en } (0,0)$$

---

## 🎨 Formato y Estilo

### Espaciado

| Espacio | Código | Uso |
|---------|--------|-----|
| Pequeño | `\,` | Entre número y unidad: $5\,\text{cm}$ |
| Mediano | `\:` | Separación media |
| Grande | `\;` | Separación grande |
| Quad | `\quad` | Espacio amplio |
| QQuad | `\qquad` | Espacio muy amplio |

### Tamaños de Fuente

```latex
$$\displaystyle \sum_{i=1}^{n}$$  (grande, para display)
$$\textstyle \sum_{i=1}^{n}$$    (texto normal)
$$\scriptstyle \sum_{i=1}^{n}$$  (subíndice)
```

### Colores (si KaTeX lo soporta)

```latex
$$\textcolor{red}{rojo} \quad \textcolor{blue}{azul}$$
```

---

## 🧮 Funciones Especiales

### Funciones Comunes

| Función | Código | Resultado |
|---------|--------|-----------|
| Seno | `$\sin(x)$` | $\sin(x)$ |
| Coseno | `$\cos(x)$` | $\cos(x)$ |
| Tangente | `$\tan(x)$` | $\tan(x)$ |
| Logaritmo natural | `$\ln(x)$` | $\ln(x)$ |
| Logaritmo base 10 | `$\log(x)$` | $\log(x)$ |
| Exponencial | `$\exp(x)$` | $\exp(x)$ |
| Máximo | `$\max(x,y)$` | $\max(x,y)$ |
| Mínimo | `$\min(x,y)$` | $\min(x,y)$ |

### Operadores

```latex
$$\sin^2(x) + \cos^2(x) = 1$$
$$\log_b(x) = \frac{\ln(x)}{\ln(b)}$$
```

$$\sin^2(x) + \cos^2(x) = 1$$

$$\log_b(x) = \frac{\ln(x)}{\ln(b)}$$

---

## 📊 Vectores y Flechas

### Vectores

```latex
$$\vec{v}$$
$$\overrightarrow{AB}$$
$$\hat{i}, \hat{j}, \hat{k}$$
$$\mathbf{v} = (v_1, v_2, v_3)$$
```

$$\vec{v}$$

$$\overrightarrow{AB}$$

$$\hat{i}, \hat{j}, \hat{k}$$

$$\mathbf{v} = (v_1, v_2, v_3)$$

### Flechas

| Flecha | Código | Resultado |
|--------|--------|-----------|
| Derecha | `$\rightarrow$` | $\rightarrow$ |
| Izquierda | `$\leftarrow$` | $\leftarrow$ |
| Doble derecha | `$\Rightarrow$` | $\Rightarrow$ |
| Doble izquierda | `$\Leftarrow$` | $\Leftarrow$ |
| Ambos lados | `$\leftrightarrow$` | $\leftrightarrow$ |
| Implica | `$\implies$` | $\implies$ |

---

## 🎓 Acentos y Decoraciones

| Decoración | Código | Resultado |
|------------|--------|-----------|
| Barra superior | `$\bar{x}$` | $\bar{x}$ |
| Sombrero | `$\hat{x}$` | $\hat{x}$ |
| Tilde | `$\tilde{x}$` | $\tilde{x}$ |
| Punto | `$\dot{x}$` | $\dot{x}$ |
| Dos puntos | `$\ddot{x}$` | $\ddot{x}$ |
| Vector | `$\vec{x}$` | $\vec{x}$ |
| Línea superior | `$\overline{ABC}$` | $\overline{ABC}$ |
| Línea inferior | `$\underline{ABC}$` | $\underline{ABC}$ |

---

## 📦 Paréntesis y Delimitadores

### Delimitadores que se Ajustan Automáticamente

```latex
$$\left( \frac{a}{b} \right)$$
$$\left[ \frac{a}{b} \right]$$
$$\left\{ \frac{a}{b} \right\}$$
$$\left| \frac{a}{b} \right|$$
$$\left\| \frac{a}{b} \right\|$$
```

$$\left( \frac{a}{b} \right)$$

$$\left[ \frac{a}{b} \right]$$

$$\left\{ \frac{a}{b} \right\}$$

$$\left| \frac{a}{b} \right|$$

$$\left\| \frac{a}{b} \right\|$$

:::tip Uso de \left y \right
Usa `\left` y `\right` para que los delimitadores se ajusten automáticamente al tamaño del contenido.
:::

### Notación de Dirac (Braket)

La notación braket se usa en mecánica cuántica para vectores de estado y productos internos.

| Notación | Código | Resultado | Descripción |
|----------|--------|-----------|-------------|
| Ket | `$\lvert \psi \rangle$` | $\lvert \psi \rangle$ | Vector de estado |
| Bra | `$\langle \phi \rvert$` | $\langle \phi \rvert$ | Vector dual |
| Braket | `$\langle \phi \| \psi \rangle$` | $\langle \phi \| \psi \rangle$ | Producto interno |
| Operador | `$\langle \phi \| \hat{H} \| \psi \rangle$` | $\langle \phi \| \hat{H} \| \psi \rangle$ | Elemento de matriz |

**Ejemplos:**

```latex
$$\lvert 0 \rangle, \lvert 1 \rangle$$
$$\langle \psi \| \psi \rangle = 1$$
$$\hat{H} \lvert \psi \rangle = E \lvert \psi \rangle$$
```

$$\lvert 0 \rangle, \lvert 1 \rangle$$

$$\langle \psi \| \psi \rangle = 1$$

$$\hat{H} \lvert \psi \rangle = E \lvert \psi \rangle$$

---

## 📌 Ejemplos Completos

### Fórmula Cuadrática

```latex
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
```

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Teorema de Pitágoras

```latex
$$a^2 + b^2 = c^2$$
```

$$a^2 + b^2 = c^2$$

### Serie de Taylor

```latex
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$
```

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Ecuación de Euler

```latex
$$e^{i\pi} + 1 = 0$$
```

$$e^{i\pi} + 1 = 0$$

### Integral de Gauss

```latex
$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$
```

$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$

---

## 🔗 Recursos Adicionales

- [KaTeX Supported Functions](https://katex.org/docs/supported.html)
- [Detexify - Buscar símbolos por dibujo](http://detexify.kirelabs.org/classify.html)
- [LaTeX Math Symbols](https://www.caam.rice.edu/~heinken/latex/symbols.pdf)
