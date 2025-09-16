---
title: "Unidad 2: Recursividad"
description: "Algoritmos y Estructuras de Datos - Unidad 2: Estudio de la recursividad, tipos de recursión, optimización y transformación a forma iterativa"
sidebar_position: 2
tags: [algoritmos, estructuras-de-datos, programacion, recursividad, funciones, optimizacion, cpp]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender y aplicar los conceptos de recursividad en el diseño de algoritmos, dominando las técnicas de optimización y transformación a formas iterativas.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Definir y caracterizar las funciones recursivas
- Identificar y aplicar los diferentes tipos de recursión
- Optimizar funciones recursivas transformándolas de múltiple a simple
- Convertir funciones recursivas a iterativas para mejorar eficiencia
- Analizar el uso de memoria mediante Stack Frames

## 📋 Contenidos y recursos

### 2.1 Fundamentos de Recursividad

- **2.1.1** Definición de función recursiva
- **2.1.2** Condiciones de una función recursiva
- **2.1.3** Comparación entre iterativo vs recursivo

### 2.2 Tipos de Recursión

- **2.2.1** Recursión simple vs múltiple
- **2.2.2** Recursión directa vs indirecta
- **2.2.3** Ejemplos: Factorial y Fibonacci

### 2.3 Optimización y Transformación

- **2.3.1** Stack Frame y uso de memoria
- **2.3.2** Recursión de cola
- **2.3.3** Transformación de recursiva a iterativa

## Fundamentos de Recursividad

### 2.1.1 Definición de función recursiva

Una función es aquella que se llama a si misma en su cuerpo. Este concepto fundamental permite resolver problemas complejos dividiéndolos en subproblemas más pequeños de la misma naturaleza.

$$
f(x) = \dots f(x) \dots
$$

La recursividad es una técnica de programación que permite escribir código más elegante y expresivo para ciertos tipos de problemas, especialmente aquellos que tienen una estructura naturalmente recursiva como árboles, fractales, o problemas de divide y vencerás.

### 2.1.2 Condiciones de una función recursiva

Para que una función recursiva sea válida y no cause un bucle infinito, debe cumplir dos condiciones esenciales:

- **Caso base:** Debe existir condición de corte de la recursión (una situación donde la función no se llama a sí misma)
- **Convergencia:** Se debe garantizar que la condición sea alcanzada eventualmente (cada llamada recursiva debe acercarse al caso base)

Sin estas condiciones, la función recursiva continuaría ejecutándose indefinidamente hasta agotar la memoria del sistema.

Las funciones recursivas se escriben como una función definida por tramos:

$$
f(x) = \begin{cases} \text{valor base} \Rightarrow \text{si se cumple condición de corte} \\
\text{expresión con } f(x') \Rightarrow \text{si no se cumple condición, donde } x' \text{ se acerca al caso base} \end{cases}
$$

### 2.1.3 Función iterativa vs función recursiva

La elección entre implementación iterativa y recursiva depende del problema específico y las consideraciones de rendimiento:

**Ventajas de la recursividad:**

- Código más limpio y legible para problemas con estructura naturalmente recursiva
- Implementación más directa de algoritmos matemáticos recursivos
- Menos propenso a errores en problemas complejos de divide y vencerás

**Desventajas de la recursividad:**

- Mayor uso de memoria debido al stack de llamadas
- Posible overhead de llamadas a funciones
- Riesgo de stack overflow en recursiones profundas

**Ventajas de la iteración:**

- Uso más eficiente de memoria
- Mejor rendimiento en términos de tiempo de ejecución
- No hay límite de profundidad como en la recursión

![Iterativa vs Recursiva](/img/algoritmos-y-estructuras-de-datos/iterativa-vs-recursiva.webp)

## Tipos de Recursión

### 2.2.1 Clasificación de la recursión

Existen diferentes formas de clasificar la recursión según su estructura y comportamiento:

**Por número de llamadas recursivas:**

- **Recursión Simple:** Existe una única llamada a la función en el cuerpo. Es más fácil de analizar y optimizar.
- **Recursión Múltiple:** Hay dos o más llamadas a la función en el cuerpo. Puede ser menos eficiente pero es natural para ciertos problemas como árboles.

**Por forma de invocación:**

- **Recursión Directa:** La función se llama a sí misma directamente. Es la forma más común y fácil de identificar.
- **Recursión Indirecta:** La función llama a una segunda función que eventualmente vuelve a llamar a la primera. Útil para problemas con múltiples estados.

La elección del tipo de recursión depende de la naturaleza del problema y los objetivos de eficiencia.

![Tipos de Recursión](/img/algoritmos-y-estructuras-de-datos/tipos-de-recursion.webp)

### 2.2.2 Ejemplos clásicos

#### Función Factorial

El factorial es uno de los ejemplos clásicos de recursión. Matemáticamente, el factorial de un número n (representado como n!) es el producto de todos los números enteros positivos desde 1 hasta n.

$$
fact(n) = \begin{cases} 1 \Rightarrow n = 1 \text{ (caso base)} \\
n \times fact(n-1) \Rightarrow n > 1 \text{ (caso recursivo)} \end{cases}
$$

**Proceso de ejecución para fact(5):**

$$
fact(5) = 5 \times fact(4) \\
= 5 \times 4 \times fact(3) \\
= 5 \times 4 \times 3 \times fact(2) \\
= 5 \times 4 \times 3 \times 2 \times fact(1) \\
= 5 \times 4 \times 3 \times 2 \times 1 = 120
$$

```cpp
int fact(int n) {
    // Validación de entrada
    if (n < 1) 
        throw std::runtime_error("El número tiene que ser mayor a 0");
    
    // Caso base: el factorial de 1 es 1
    if (n == 1)
        return 1;
    else
        // Caso recursivo: n * factorial(n-1)
        return fact(n - 1) * n;
}
```

**Análisis:** Esta implementación tiene una complejidad temporal de O(n) y espacial de O(n) debido al stack de llamadas.

#### Función Fibonacci

La secuencia de Fibonacci es un ejemplo clásico de recursión múltiple, donde cada número es la suma de los dos anteriores. Esta secuencia aparece frecuentemente en la naturaleza y tiene importantes aplicaciones matemáticas.

**Definición matemática:**

$$
fib(x) = \begin{cases} 1 \Rightarrow x = 1 \text{ (primer caso base)} \\
1 \Rightarrow x = 2 \text{ (segundo caso base)} \\
fib(x-1) + fib(x-2) \Rightarrow x > 2 \text{ (caso recursivo)} \end{cases}
$$

**Secuencia de Fibonacci:** 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

**Proceso de cálculo:**

$$
fib(1) = 1 \\
fib(2) = 1 \\
fib(3) = fib(2) + fib(1) = 1 + 1 = 2 \\
fib(4) = fib(3) + fib(2) = 2 + 1 = 3 \\
fib(5) = fib(4) + fib(3) = 3 + 2 = 5
$$

```cpp
int fib(int x) {
    // Casos base: los primeros dos números de la secuencia
    if (x < 3) 
        return 1;
    else
        // Caso recursivo: suma de los dos anteriores
        return fib(x - 1) + fib(x - 2);
}
```

**Problema de eficiencia:** Esta implementación tiene una complejidad exponencial O(2^n) porque calcula los mismos valores repetidamente. Por ejemplo, fib(5) calcula fib(3) dos veces.

## Optimización y Transformación

![Optimización y Transformación](/img/algoritmos-y-estructuras-de-datos/optimizacion-de-memoria.webp)

### 2.3.1 Stack Frame y gestión de memoria

Cada vez que se llama a una función, el sistema operativo crea una nueva entrada en la pila de llamadas (call stack). Esta estructura se llama **Stack Frame** o **marco de pila** y contiene toda la información necesaria para continuar la ejecución después de que la función termine.

**Componentes de un Stack Frame:**

- **Puntero de retorno:** Dirección de la instrucción donde debe continuar la ejecución
- **Parámetros:** Todos los argumentos pasados a la función
- **Variables locales:** Variables declaradas dentro del ámbito de la función
- **Espacio para valor de retorno:** Memoria reservada para el resultado de la función

**Implicaciones para la recursión:**

- Cada llamada recursiva crea un nuevo Stack Frame
- La memoria se acumula hasta llegar al caso base
- Si la recursión es muy profunda, puede causar **stack overflow**
- La liberación de memoria ocurre en orden LIFO (Last In, First Out)

![Stack Frame](/img/algoritmos-y-estructuras-de-datos/stack-frame.webp)

**Ejemplo práctico:** En factorial(5), se crean 5 Stack Frames simultáneamente antes de comenzar a resolverse.

### 2.3.2 Recursiva doble a recursiva simple

$$
fib(x) = \begin{cases} 1 \Rightarrow x < 3 \\
fib_{aux}(3, 1, 1, x) \Rightarrow x \geq 3 \end{cases}
$$

$$
fib_{aux}(y, a_1, a_2, x) = \begin{cases} a_1 + a_2 \Rightarrow y = x \\
fib_{aux}(y + 1, a_1 + a_2, a_1, x) \Rightarrow y < x \end{cases}
$$

#### Fibonacci recursivo simple

```cpp
int fibaux(int y, int a1, int a2, int x) {
    if (y == x) 
        return a1 + a2;
    else
        return fibaux(y + 1, a1 + a2, a1, x);
}

int fib2(int x) {
    if (x < 3) 
        return 1;
    else
        return fibaux(3, 1, 1, x);
}
```

### 2.3.3 Optimización de la memoria y recursión de cola

La **recursión de cola** (tail recursion) es una técnica de optimización fundamental donde la llamada recursiva es la última operación que realiza la función.

**Características de la recursión de cola:**

- El valor que retorna la función es exactamente el resultado de la llamada recursiva
- No se realizan operaciones adicionales después de la llamada recursiva
- Permite optimización del compilador para reducir el uso de memoria
- Se puede transformar fácilmente a una versión iterativa

**Ventajas:**

- **Eficiencia de memoria:** Algunos compiladores pueden optimizar y reutilizar el Stack Frame
- **Prevención de stack overflow:** Reduce el riesgo de agotar la memoria de la pila
- **Facilidad de transformación:** Se puede convertir directamente a un bucle iterativo

**Transformación matemática general:**

Si $f$ es una función recursiva de cola $f : T_1 \times T_2 \Rightarrow T_3$, donde:

- $T_1$: dominios que no varían entre llamadas recursivas (parámetros constantes)
- $T_2$: dominios que sí varían entre llamadas recursivas (acumuladores)
- $T_3$: dominio de la imagen (tipo de retorno)

La función tiene la forma:

$$
f(t_1, t_2) = \begin{cases} h(t_1, t_2) \Rightarrow d(t_1, t_2) \text{ (condición de parada)} \\
f(t_1, s(t_1, t_2)) \Rightarrow \neg d(t_1, t_2) \text{ (llamada recursiva)} \end{cases}
$$

Donde:

- $d: T_1 \times T_2 \Rightarrow Boolean$ es la función de condición de parada
- $h: T_1 \times T_2 \Rightarrow T_3$ es la función que calcula el resultado final
- $s: T_1 \times T_2 \Rightarrow T_2$ es la función que actualiza las variables que cambian

**Implementación de recursión de cola:**

```cpp
t3 f(t1, t2) {
    if (d(t1, t2)) 
        return h(t1, t2);    // Caso base
    else 
        return f(t1, s(t1, t2));  // Llamada recursiva (tail call)
}
```

#### Transformación de recursiva a iterativa

La gran ventaja de la recursión de cola es que se puede transformar mecánicamente a una versión iterativa más eficiente:

```cpp
t3 f(t1, t2) {
    // El bucle reemplaza las llamadas recursivas
    while (!d(t1, t2)) {
        t2 = s(t1, t2);  // Actualizar variables que cambian
    }
    
    return h(t1, t2);    // Retornar resultado final
}
```

**Ventajas de la versión iterativa:**

- **Memoria constante:** O(1) en lugar de O(n)
- **Mayor velocidad:** Sin overhead de llamadas a funciones
- **Sin límite de profundidad:** No hay riesgo de stack overflow

#### Pasos para pasar de recursivo a iterativo

Para transformar sistemáticamente una función recursiva de cola a su versión iterativa, sigue estos pasos:

1. **Identificar variables constantes ($t_1$):** Parámetros que no cambian entre llamadas (ej: $x$ en fibonacci)

2. **Identificar variables que cambian ($t_2$):** Parámetros que se actualizan en cada iteración (ej: $y, a_1, a_2$ en fibonacci)

3. **Identificar condición de parada ($d(t_1, t_2)$):** La condición que determina cuándo terminar (ej: $y = x$)

4. **Identificar función de resultado ($h(t_1, t_2)$):** El valor devuelto cuando se alcanza la condición de parada (ej: $a_1 + a_2$)

5. **Identificar función de transición ($s(t_1, t_2)$):** Cómo se actualizan las variables en cada iteración:
   - $y' = y + 1$
   - $a_1' = a_1 + a_2$
   - $a_2' = a_1$

6. **Escribir la versión iterativa:** Reemplazar la recursión con un bucle while

**Ejemplo aplicado al fibonacci optimizado:**

- $t_1 = x$ (constante)
- $t_2 = (y, a_1, a_2)$ (variables que cambian)
- $d(t_1, t_2) = (y = x)$ (condición de parada)
- $h(t_1, t_2) = a_1 + a_2$ (resultado final)
- $s(t_1, t_2) = (y+1, a_1+a_2, a_1)$ (actualización)

#### Ejemplo práctico: Encontrar el mayor elemento de un arreglo

Este ejemplo demuestra la aplicación práctica de los conceptos de recursión y su optimización:

```cpp
// Función auxiliar para comparar dos números
int max(int x, int y) {
    if(x > y) 
        return x;
    else
        return y;
}

// Versión recursiva (no optimizada)
int maxArray(int a[]) {
    int size = a.size();

    if(size > 1)
        return maxArrayAux(a, 0, a[0], size);
    else
        return a[0];  // Caso base: array de un elemento
}

// Función auxiliar recursiva de cola
int maxArrayAux(int a[], int i, int m, int size) {
    if (i == size)
        return m;    // Caso base: hemos recorrido todo el array
    else
        return maxArrayAux(a, i+1, max(m, a[i]), size);  // Tail recursion
}

// Versión iterativa optimizada (más eficiente)
int maxArrayIterative(int a[]) {
    int i = 0;
    int m = a[0];        // Inicializar con el primer elemento
    int size = a.size();

    // Recorrer el resto del array
    while(i < size) {
        m = max(m, a[i]); // Actualizar máximo si es necesario
        i++;              // Avanzar al siguiente elemento
    }

    return m;
}
```

**Análisis de complejidad:**

- **Versión recursiva:** O(n) tiempo, O(n) espacio (debido al stack)
- **Versión iterativa:** O(n) tiempo, O(1) espacio (más eficiente)

**Ventajas de la transformación:**

- Eliminación del riesgo de stack overflow
- Menor uso de memoria
- Mejor rendimiento en tiempo de ejecución
