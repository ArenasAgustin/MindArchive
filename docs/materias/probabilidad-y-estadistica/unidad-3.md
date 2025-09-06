---
title: "Unidad 3: Distribuciones de Probabilidad"
description: "Estudio de las distribuciones de probabilidad discreta Binomial y Poisson, sus propiedades, funciones de probabilidad y aplicaciones en problemas de conteo y eventos raros."
sidebar_position: 3
tags: [matematicas, probabilidad, estadistica, distribuciones, binomial, poisson]
---

## Distribución Binomial: X ~ Binomial(n,p)

La variable aleatoria X tiene distribución Binomial con parámetros n y p, y su
función de probabilidad es:

$$
f(x;p,n) = \binom{n}{x} p^x (1-p)^{n-x}, \quad x = 0,\ldots,n
$$

donde $0 \leq p \leq 1$ y $n > 0$

- $E(X) = \mu = np$
- $\text{Var}(X) = \sigma^2 = np(1-p)$
- Función de distribución $\Rightarrow F_X(x) = P(X \leq x) = \sum_{k=0}^x \binom{n}{k} p^k (1-p)^{n-k}$

## Distribución Poisson: X ~ Poisson($\lambda$)

La variable aleatoria X tiene distribución Poisson con parámetro $\lambda$, y su
función de probabilidad es:

$$
f(x;\lambda) = \frac{e^{-\lambda}\lambda^x}{x!}, \quad x \in \{0, 1, 2, \ldots\}
$$

donde $\lambda \in (0,\infty)$ y representa la Tasa Promedio de ocurrencias del evento por unidad de tiempo, espacio, volumen, etc (es constante!)

- $E(X) = \lambda$
- $\text{Var}(X) = \lambda$
- Función de distribución $\Rightarrow F_X(x) = P(X \leq x) = \sum_{k=0}^x \frac{e^{-\lambda}\lambda^k}{k!}$
