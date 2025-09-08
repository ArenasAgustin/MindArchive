---
title: "Unidad 2: Recursividad"
description: ""
sidebar_position: 2
tags: [matematicas, probabilidad, estadistica, distribuciones, binomial, poisson]
---

### Función recursiva

Una función es aquella que se llama a si misma en su cuerpo.

$$
f(x) = \dots f(x) \dots
$$

### Condiciones de una función recursiva

- Debe existir condicion de corte de la recursión
- Se debe garantizar que la condicion sea alcanzada eventualmente

Se escriben como una función definida por tramos

$$
f(x) = \begin{cases} \dots \Rightarrow \text{si se cumple condición} \\
x \times f(x-1) \Rightarrow \text{si no se cumple condición} \end{cases}
$$

### Función iterativa vs función recursiva

### Tipos de recursión

- **Recursión Simple:** Existe una única llama a la función en el cuerpo
- **Recursión Múltiple:** Hay dos o más llamadas a a función en el cuerpo
- **Recursión Directa:** La función se llama a sí misma
- **Recursión Indirecta:** La función a la que una segunda función que vuelve a llamar a la primera

### Ejemplos

- Función Factorial

$$
fact(n) = \begin{cases} 1 \Rightarrow n = 1 \\
n \times fact(n-1) \Rightarrow n > 1 \end{cases}
$$

$$
fact(5) = 5 \times fact(4) \\
= 5 \times 4 \times fact(3) \\
= 5 \times 4 \times 3 \times fact(2) \\
= 5 \times 4 \times 3 \times 2 \times fact(1) \\
= 5 \times 4 \times 3 \times 2 \times 1
$$

```cpp
int fact(int n) {
    if (n < 1) 
        throw std::runtime_error("El número tiene que er mayo a 0");
    if (n == 1)
        return 1;
    else
        return fact(n - 1) * n;
}
```

- Función Fibonacci

$$
fib(x) = \begin{cases} 1 \Rightarrow x = 1 \\
2 \Rightarrow x = 2 \\
fib(x-1) + fib(x-2) \Rightarrow x > 2 \end{cases}
$$

$$
fact(1) = 1 \\
fact(2) = 1 + 1 = fact(1) + fact(1) = 2 \\
fact(3) = 1 + 2 = fact(1) + fact(2) = 3 \\
fact(4) = 2 + 3 = fact(2) + fact(3) = 5 \\
fact(x) = fact(x - 2) + fact(x - 1)
$$

```cpp
int fib(int x) {
    if (x < 3) 
        return 1;
    else
        return fib(x - 1) + fib(x - 2);
}
```

### Stack Frame

Cada vez que se llama a una función se crea una nueva entrada en el Stack. Esta estructura se llama Stack Frame y consite en el los campos necesarios para continuar la ejecución luego de procesar la función.

El Stack Frame tiene:

- Un puntero a la instrucción próxima cuando retorne
- Todos los argumentos pasados a la función
- Las variables locales
- El valor de retorno

### Recursiva doble a recursiva simple

$$
fib(x) = \begin{cases} 1 \Rightarrow x < 3 \\
fib_{aux}(3, 1, 1, x) \Rightarrow x \geq 3 \end{cases}
$$

$$
fib_{aux}(y, a_1, a_2, x) = \begin{cases} a_1 + a_2 \Rightarrow y = x \\
fib_{aux}(y + 1, a_1 + a_2, a_1, x) \Rightarrow y < x \end{cases}
$$

### Fibonacci recursivo simple

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

### Optimización de la memoria

Sólo la función auxiliar es recursiva

**Recursión de cola:** El valor que retorna la función es el llamado a la función recursiva (no sería recursiva a la cola si al resultaod de la recursión le aplicara una nueva función).

En general es conveniente dejarlo expresado como una función recursiva de cola, para poder hacer el paso a una función iterativa. En principio siempre que se tenga esta condición, se puede transformar en una función iterativa que va a ser más eficiente en términos de memoria y no hay riesgo de quedarse sin memoria del stack por excesivas llamadas a la función recursiva.

Si $f$ es una función recursiva de cola $f : T_1 \times T_2 \Rightarrow T_3$, $T_1$ es un producto cartesiano de los dominios que no varian de llamada en llamada recursiva, $T_2$ es un producto cartesiano de los dominios que sí varian de llamada en llamada recursiva, $T_3$ es un producto cartesiano de los dominios de la imagen.

En la función recursiva simple tenemos las variables $t_1: T_1, t_2: T_2, t_3: T_3$.

Se hará una transformación de $f$ del tipo:

$$
f(t_1, t_1) = \begin{cases} h(t_1, t_2) \Rightarrow d(t_1, t_2) \\
f(t_1, s(t_1, t_2)) \Rightarrow !d(t_1, t_2) \end{cases}
$$

Donde $d: T_1 \times T_2 \Rightarrow Boolean \Rightarrow$ va a ser una función que devuelve $true$ si ha alcanzado la condición de recursión y false en caso contrario, $h T_1 \times T_2 \Rightarrow T_3 \Rightarrow$ caso devuelto por la funcion cuando se alcanza el corte (por eso devuelve variable de tipo $t_3$), $s: T_1 \times T_2 \Rightarrow T_2 \Rightarrow$ es la función que describe cómo varían los dominios ($t_2$) de llamada en llamada (depende de $t_1$ y $t_2$ pero siempre devuelve $t_2$)

El programa con recusión de cola quedaría

```cpp
t3 f(t1, t2) {
    if (d(t1, t2)) 
        return h(t1, t2);
    else 
        return f(t1, s(t1, t2));
}
```

Pado a iterativo

```cpp
t3 f(t1, t2) {
    while (!d(t1, t2)) {
        t2 = s(t1, t2);
    }
    
    return h(t1, t2);
}
```

### Pasos para pasar de recursico a iterativo

- Identificar las variables de tipo $t_1 \Rightarrow x$
- Identificar las variables de tipo $t_12\Rightarrow y, a_1, a_2$
- Identificar $d(t_1, t_2)$ (condición de corte de la recursión) $\Rightarrow y < x$
- Identidicar $h(t_1, t_2)$ (valor devuelto cuando la condición de corte es alcanzada) $\Rightarrow a_1 + a_2$
- Identificar $s(t_1, t_2)$ (como varían las variables de una iteracíón a otra) $y\prime = y + 1, {a\prime}_1 = a_1 + a_2, {a\prime}_2 = a_2$
- Estcibir la forma iterativa

### Ejemplo: Encontrar el mayor elemento de un arreglo

```cpp
int max(x, y) {
    if(x > y) 
        return x;
    else
        return y;
}

// Forma recursiva
int maxArray(a[]) {
    int size = a[].size();

    if(size > 1)
        return maxArrayAux(a[], 0, a[0], size);
    else
        return a[0];
}
int maxArrayAux(a[], int i, int m, int size) {
    if (i == size)
        return m;
    else
        return maxArrayAux(a[], i++, max(m, a[i]), size);
}

// Forma iterativa
int maxArraySec(a[]) {
    int i = 0;
    int m = a[0];
    int size = a[].size();

    while(i != size) {
        i++;
        m = max(m, a[i]);
    }

    return m;
}
```
