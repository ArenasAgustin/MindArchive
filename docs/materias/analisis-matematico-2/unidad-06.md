---
title: "Unidad 6: Superficies e integral de superficie"
description: "Análisis Matemático 2 - Unidad 6: Superficies en R^3, área, orientación e integral de superficie de funciones escalares y de campos vectoriales, con aplicaciones."
sidebar_position: 6
tags: [analisis-matematico-2, superficies, integral-de-superficie, campos-vectoriales]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Estudiar las superficies en R^3, su parametrización, orientación y área, y definir y calcular integrales de superficie de funciones escalares y de campos vectoriales, aplicándolas a problemas geométricos y físicos.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Clasificar y parametrizar superficies comunes en R^3 (planos, esferas, cilindros, superficies de revolución, gráficas z = g(x, y)).
- Determinar vectores normales y establecer una orientación consistente de una superficie.
- Calcular el área de una superficie mediante parametrizaciones y como gráfica.
- Definir y evaluar integrales de superficie de funciones escalares f sobre S: ∫∫_S f dS.
- Definir y evaluar integrales de flujo de un campo vectorial F a través de S: ∫∫_S F · n dS.
- Elegir parametrizaciones convenientes y efectuar cambios de variables adecuados.
- Interpretar resultados en aplicaciones (masa de una lámina, flujo de un campo, intercambio de calor, etc.).

## 📋 Contenidos y recursos

### [6.1] Superficies en R^3

- **[6.1.1]** Concepto de superficie y ejemplos: planos, esferas, cilindros, paraboloides, superficies de revolución.
- **[6.1.2]** Parametrizaciones: $r(u, v) = (x(u, v), y(u, v), z(u, v))$. Curvas coordenadas.
- **[6.1.3]** Superficies como gráficas: $S = \{(x, y, g(x, y))\}$.

### [6.2] Área y orientación de superficies

- **[6.2.1]** Vectores tangentes r_u, r_v y vector normal r_u × r_v.
- **[6.2.2]** Área de una superficie: dS = |r_u × r_v| dudv; caso de gráficas: dS = sqrt(1 + |∇g|^2) dxdy.
- **[6.2.3]** Orientación y elección del campo normal unitario n.

### [6.3] Integral de superficie

- **[6.3.1]** Integral de superficie de funciones escalares: ∫∫_S f dS = ∫∫_D f(r(u, v)) |r_u × r_v| dudv.
- **[6.3.2]** Integral de superficie de campos vectoriales (flujo): ∫∫_S F · n dS.
- **[6.3.3]** Independencia de la parametrización. Subdivisión en parches. Cambio de variables.

### 🔗 Recursos Complementarios

- [Apunte Unidad 6 - Natali](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758232773/pdfs/AM2_-_Notas_U6_Natali_rzgmnf.pdf)

## Primer tema: [6.1] Superficies en R^3

### [6.1.1] Concepto y ejemplos

Una superficie S ⊂ R^3 puede describirse localmente como el conjunto imagen de una aplicación regular r: D ⊂ R^2 → R^3, (u, v) ↦ (x(u, v), y(u, v), z(u, v)). Ejemplos clásicos:

- Plano: ax + by + cz = d.
- Esfera de radio R: x^2 + y^2 + z^2 = R^2.
- Cilindro circular: x^2 + y^2 = R^2.
- Paraboloide: z = ax^2 + by^2.
- Superficie de revolución: generada al rotar una curva plana alrededor de un eje.

### [6.1.2] Parametrizaciones

Una parametrización $r(u, v)$ induce los vectores tangentes $r_u = \tfrac{\partial r}{\partial u}$ y $r_v = \tfrac{\partial r}{\partial v}$. Debe verificarse que $r_u \times r_v \ne 0$ en el dominio para que $r$ sea regular (sin pliegues).

Ejemplos de parametrizaciones:

- Esfera (sin polos): r(φ, θ) = (R sin φ cos θ, R sin φ sin θ, R cos φ), con φ ∈ (0, π), θ ∈ (0, 2π).
- Superficie de revolución a partir de (ρ(t), z(t)): r(t, θ) = (ρ(t) cos θ, ρ(t) sin θ, z(t)).
- Gráfica z = g(x, y): r(x, y) = (x, y, g(x, y)).

### [6.1.3] Gráficas

Si S es una gráfica $z = g(x, y)$ con $g$ de clase $C^1$, entonces es una superficie regular siempre que $\nabla g$ sea acotado localmente. Esta representación es útil para calcular áreas e integrales usando variables $(x, y)$.

## Segundo tema: [6.2] Área y orientación

### [6.2.1] Vector normal y orientación

Dados $r_u$ y $r_v$, un vector normal es $N = r_u \times r_v$. La orientación de $S$ se fija eligiendo el campo normal unitario $n = N / \lVert N\rVert$ de manera continua. Para superficies cerradas, se suele usar la orientación exterior ($n$ apuntando hacia fuera).

### [6.2.2] Elemento de área y fórmulas prácticas

El elemento de área es $dS = \lvert r_u \times r_v\rvert\, du\, dv$, por lo que el área de $S$ parametrizada por $r$ sobre $D \subset \mathbb{R}^2$ es

$$
Area(S) = \iint_D \bigl\lvert r_u(u, v) \times r_v(u, v) \bigr\rvert\, du\, dv
$$

Si $S$ es una gráfica $z = g(x, y)$, entonces

$$
dS = \sqrt{1 + (g_x)^2 + (g_y)^2}\, dx\, dy = \sqrt{1 + \lVert\nabla g\rVert^2}\, dx\, dy
$$

Ejemplos rápidos:

- Área de un casquete esférico: usar coordenadas esféricas o una parametrización adecuada.
- Área de una superficie de revolución: si $r(t, \theta) = (\rho(t) \cos \theta, \rho(t) \sin \theta, z(t))$, entonces $\lvert r_t \times r_\theta\rvert = \sqrt{(\rho')^2 + (z')^2}\, \rho$.

### [6.2.3] Observaciones sobre orientación

Para integrales de flujo (ver 6.3.2), el signo del resultado depende de la orientación. Cambiar n por −n cambia el signo del flujo. En problemas físicos, la orientación suele especificarse (por ejemplo, normal saliente).

## Tercer tema: [6.3] Integral de superficie

### [6.3.1] Integral de superficie de funciones escalares

Dada f: S → R y una parametrización r: D → S, se define

$$
\iint_S f\, dS = \iint_D f\bigl(r(u, v)\bigr)\, \lvert r_u \times r_v \rvert\, du\, dv
$$

Caso gráfica z = g(x, y):

$$
\iint_S f\, dS = \iint_{\Omega} f\bigl(x, y, g(x, y)\bigr)\, \sqrt{1 + \lVert\nabla g(x, y)\rVert^2}\, dx\, dy
$$

Aplicación típica: masa de una lámina con densidad superficial f sobre S.

### [6.3.2] Integral de flujo de un campo vectorial

Sea F: R^3 → R^3 un campo vectorial y n el normal unitario orientado. El flujo de F a través de S es

$$
\iint_S F \cdot n\, dS
$$

Si S está parametrizada por r(u, v), entonces

$$
\begin{aligned}
\iint_S F \cdot n\, dS
&= \iint_D F\bigl(r(u, v)\bigr) \cdot \frac{r_u \times r_v}{\lVert r_u \times r_v \rVert}\, \lVert r_u \times r_v \rVert\, du\, dv \\
&= \iint_D F\bigl(r(u, v)\bigr) \cdot (r_u \times r_v)\, du\, dv
\end{aligned}
$$

En el caso de gráficas $z = g(x, y)$, una normal orientada hacia arriba es proporcional a $(-g_x, -g_y, 1)$.

### [6.3.3] Observaciones prácticas y cambios de variables

- La integral no depende de la parametrización elegida siempre que sea regular y respete la orientación.
- Puede ser necesario dividir S en parches y sumar contribuciones.
- En superficies de revolución o esferas, usar coordenadas adecuadas (cilíndricas/esféricas) simplifica el cálculo.

### Ejemplos resueltos

1. Área de la esfera de radio R.

Parametrización: r(φ, θ) = (R sin φ cos θ, R sin φ sin θ, R cos φ). Se verifica que $|r_\phi \times r_\theta| = R^2 \sin \phi$. Entonces

$$
Area(\mathbb{S}^2_R) = \int_0^{2\pi} \int_0^{\pi} R^2 \sin \phi\, d\phi\, d\theta = 4\pi R^2
$$

1. Flujo saliente de F(x, y, z) = (x, y, z) a través de la esfera de radio R.

Por simetría (o por cálculo directo con la normal exterior),

$$
\iint_S F \cdot n\, dS = \iint_S R\, dS = R \cdot 4\pi R^2 = 4\pi R^3
$$

Comentario: En la Unidad 7, el Teorema de Gauss permite obtener este resultado aún más rápido usando la divergencia de F.
