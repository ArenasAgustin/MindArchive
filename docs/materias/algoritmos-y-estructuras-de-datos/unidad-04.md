---
title: "Unidad 4: Algoritmos de Ordenamiento"
description: "Algoritmos y Estructuras de Datos - Unidad 4: Métodos de ordenamiento fundamentales y avanzados"
sidebar_position: 5
tags: [algoritmos, estructuras-de-datos, programacion, ordenamiento, bubble-sort, insertion-sort, selection-sort, shell-sort, merge-sort, heap-sort, cpp]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender y aplicar los principales algoritmos de ordenamiento, analizando su funcionamiento, complejidad y casos de uso apropiados.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Definir el concepto y características del ordenamiento
- Implementar algoritmos de ordenamiento fundamentales y avanzados
- Analizar la complejidad temporal y espacial de cada algoritmo
- Comparar la eficiencia y estabilidad de diferentes métodos de ordenamiento

## 📋 Contenidos y recursos

### 4.1 Fundamentos del Ordenamiento

- **4.1.1** Definición y características
- **4.1.2** Tipos de algoritmos
- **4.1.3** Notación Big O y complejidad

### 4.2 Algoritmos Fundamentales

- **4.2.1** Bubble Sort (Burbuja)
- **4.2.2** Insertion Sort (Inserción)
- **4.2.3** Selection Sort (Selección)
- **4.2.4** Shell Sort

### 4.3 Algoritmos Avanzados

- **4.3.1** Merge Sort
- **4.3.2** QuickSort
- **4.3.3** Heap Sort

### 4.4 Análisis y Ejemplo

- **4.4.1** Comparación de complejidades
- **4.4.2** Casos de uso recomendados
- **4.4.3** Ejemplo completo de uso

### 🔗 Recursos Complementarios

- [Ordenamiento](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758667985/pdfs/ORDENAMIENTO_e5lhq0.pdf)
- [Sorting 01](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758667983/pdfs/AyED_03_-_Sorting_01_staat9.pdf)
- [Sorting 02](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758667983/pdfs/AyED_03_-_Sorting_02_v5dsxo.pdf)

## Primer tema: 4.1 Fundamentos del Ordenamiento

El ordenamiento de datos es un concepto fundamental en la informática. Se trata de organizar una secuencia de valores para que sigan un orden específico, ya sea creciente o decreciente. Para lograrlo, los datos deben ser de un tipo que admita operaciones de comparación, como menor que (`<`) o mayor que (`>`).

Una secuencia está ordenada si, para todo elemento, el valor de un elemento es menor o igual (o mayor o igual) al valor del siguiente. Por ejemplo, la secuencia `1, 3, 5, 6, 7, 8` está ordenada de forma creciente.

### 4.1.1 Definición y características

El ordenamiento es el proceso de organizar los elementos de una lista o secuencia en un orden específico, generalmente en orden ascendente o descendente. Este proceso es fundamental en la informática y tiene aplicaciones en diversas áreas, como la búsqueda, la optimización y la presentación de datos.

### 4.1.2 Tipos de algoritmos

Los algoritmos de ordenamiento se pueden clasificar en varias categorías según su enfoque y características:

- **Algoritmos de intercambio:** Estos algoritmos funcionan comparando y, si es necesario, intercambiando elementos adyacentes. Ejemplos incluyen Bubble Sort y QuickSort.
- **Algoritmos de inserción:** Estos algoritmos construyen la secuencia ordenada uno a uno, insertando cada nuevo elemento en su posición correcta. Un ejemplo es Insertion Sort.
- **Algoritmos de selección:** Estos algoritmos dividen la lista en una parte ordenada y otra desordenada, seleccionando repetidamente el elemento más pequeño (o más grande) del sub-arreglo desordenado y colocándolo en la parte ordenada. Un ejemplo es Selection Sort.
- **Algoritmos de mezcla:** Estos algoritmos dividen la lista en sublistas más pequeñas, las ordenan y luego las combinan para formar una lista ordenada. Un ejemplo es Merge Sort.
- **Algoritmos de distribución:** Estos algoritmos distribuyen los elementos en diferentes "cubetas" o "buckets" y luego ordenan cada cubeta individualmente. Un ejemplo es Radix Sort.
- **Algoritmos híbridos:** Combinan características de varios tipos de algoritmos para mejorar la eficiencia en diferentes escenarios. Un ejemplo es Timsort, que combina Merge Sort e Insertion Sort.
- **Algoritmos in-place vs. no in-place:** Algunos algoritmos, como QuickSort y Heap Sort, ordenan los datos utilizando una cantidad constante de espacio adicional (in-place), mientras que otros, como Merge Sort, requieren espacio adicional proporcional al tamaño de la entrada (no in-place).
- **Algoritmos estables vs. no estables:** Un algoritmo es estable si mantiene el orden relativo de los elementos con valores iguales. Por ejemplo, Merge Sort es estable, mientras que QuickSort no lo es.

### 4.1.3 Notación Big O y complejidad

La notación Big O es una herramienta matemática utilizada en ciencias de la computación para describir el comportamiento asintótico o el rendimiento de un algoritmo cuando el tamaño de los datos de entrada (n) crecen.

Esta notación nos permite expresar la eficiencia de los algoritmos en términos de tiempo de ejecución, o espacio de memoria utilizado, enfocándose en el peor caso posible cuando la entrada tiende al infinito.

Sirve para comparar la eficiencia de algoritmos, sin tener en cuenta detalles específicos de la implementación o del hardware.

### Puntos Clave de la Notación Big O

**Mide la Tasa de Crecimiento:** Se centra en cómo cambia el número de operaciones (o la memoria utilizada) cuando el tamaño de la entrada (n) aumenta. ¿Crece linealmente? ¿Cuadráticamente? ¿Logarítmicamente?

**Describe el Peor Caso:** Generalmente, Big O describe el comportamiento del algoritmo en el peor escenario posible.

**Ignora Constantes y Términos de Menor Orden:** La notación Big O se simplifica para mostrar solo el factor dominante en el crecimiento. Por ejemplo, si un algoritmo tarda 5n+3 operaciones, Big O es O(n).

**Independiente del Hardware:** La notación Big O te da una idea de la eficiencia fundamental de un algoritmo, sin importar el hardware donde se ejecuta. Permite comparar algoritmos de manera abstracta.

### Características del Ordenamiento

**Estabilidad:** Un algoritmo de ordenamiento es estable si mantiene el orden relativo de elementos con valores iguales.

**Ordenamiento in-place:** Un algoritmo ordena in-place si utiliza una cantidad constante de memoria adicional.

**Complejidad temporal:** Tiempo que tarda el algoritmo en ejecutarse en función del tamaño de la entrada.

**Complejidad espacial:** Cantidad de memoria adicional que requiere el algoritmo.

## Segundo tema: 4.2 Algoritmos Fundamentales

### 4.2.1 Bubble Sort (Burbuja)

El algoritmo de ordenamiento de burbuja compara elementos adyacentes repetidamente e intercambia los que no están en el orden correcto. En cada pasada, el elemento más grande "burbujea" hasta su posición final.

**Idea principal:** Los elementos más grandes "burbujean" hacia el final del arreglo en cada pasada.

**Características:**

- **Tiempo:** O(n²) en el peor caso, O(n) en el mejor caso (arreglo ya ordenado)
- **Espacio:** O(1) - ordenamiento in-place
- **Estabilidad:** Estable

#### Especificación Algebraica del Bubble Sort

$$
\begin{aligned}
&\text{burb}: \text{Seq} \rightarrow \text{Seq} \\
&\text{burb}(a) = \text{burbaux}(a, n-1, 1) \text{ donde } n \text{ es la cantidad de elementos}
\end{aligned}
$$

$$
\begin{aligned}
\text{burbaux}(a, ni, p) = \begin{cases}
a & \text{si } ni = 0 \\
\text{burbaux}(a, ni-1, 1) & \text{si } ni > 0 \text{ y } p = n \\
\text{burbaux}(\text{swapb}(a, p), ni, p+1) & \text{si } ni > 0 \text{ y } p < n
\end{cases}
\end{aligned}
$$

#### Implementación del Bubble Sort

```cpp
void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Realizar n-1 pasadas
    for (int i = 0; i < n - 1; i++) {
        bool intercambio = false;
        
        // En cada pasada, comparar elementos adyacentes
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar si están en orden incorrecto
                std::swap(arr[j], arr[j + 1]);
                intercambio = true;
            }
        }
        
        // Si no hubo intercambios, el arreglo ya está ordenado
        if (!intercambio) {
            break;
        }
    }
}
```

### 4.2.2 Insertion Sort (Inserción)

El ordenamiento por inserción es un algoritmo simple que construye la secuencia final ordenada de uno en uno. Funciona de manera similar a cómo se ordenarían las cartas en una mano de póker: se toma un elemento y se lo inserta en su posición correcta dentro del subconjunto de elementos ya ordenados.

**Idea principal:** Similar a ordenar cartas en la mano, insertando cada nueva carta en su posición correcta.

#### Proceso Paso a Paso

**Pasada 1:**

- Se toma el segundo elemento como clave
- Se compara con los elementos a su izquierda
- Si la clave es menor que el elemento a su izquierda, se intercambian

**Pasada 2:**

- Se toma el tercer elemento como clave
- Se compara con los elementos a su izquierda (que ya están ordenados)
- Se inserta en la posición correcta

**Pasada 3:**

- Se repite el procedimiento para el resto de los elementos

**Características:**

- **Complejidad temporal:** O(n²) en el peor caso, O(n) en el mejor caso
- **Complejidad espacial:** O(1) - ordenamiento in-place
- **Estabilidad:** Estable

#### Implementación del Insertion Sort

```cpp
void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Comenzar desde el segundo elemento (índice 1)
    for (int i = 1; i < n; i++) {
        int clave = arr[i];
        int j = i - 1;
        
        // Mover elementos mayores que la clave una posición adelante
        while (j >= 0 && arr[j] > clave) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insertar la clave en su posición correcta
        arr[j + 1] = clave;
    }
}
```

#### Especificación Algebraica del Insertion Sort

$$
\begin{aligned}
&\text{insercion}: \text{Seq} \rightarrow \text{Seq} \\
&\text{insercion}(a) = \text{insaux}(a, 2) \text{ donde } n \text{ es la cantidad de elementos}
\end{aligned}
$$

$$
\begin{aligned}
\text{insaux}(a, i) = \begin{cases}
a & \text{si } i > n \\
\text{insaux}(\text{insertar}(a, i, a[i]), i+1) & \text{si } i \leq n
\end{cases}
\end{aligned}
$$

### 4.2.3 Selection Sort (Selección)

El ordenamiento por selección es un algoritmo de ordenamiento in-place que divide la lista en dos partes: el sub-arreglo ordenado y el sub-arreglo desordenado. Encuentra el elemento mínimo (o máximo) del sub-arreglo desordenado y lo coloca en el sub-arreglo ordenado.

**Idea principal:** En cada pasada, selecciona el elemento más pequeño y lo coloca en su posición final.

**Características:**

- **Complejidad temporal:** O(n²) en todos los casos
- **Complejidad espacial:** O(1) - ordenamiento in-place
- **Estabilidad:** No estable (puede cambiar el orden de elementos iguales)

#### Especificación Algebraica del Selection Sort

$$
\begin{aligned}
&\text{selec}: \text{Seq} \rightarrow \text{Seq} \\
&\text{selec}(a) = \text{selaux}(a, 1) \text{ donde } n \text{ es la cantidad de elementos}
\end{aligned}
$$

$$
\begin{aligned}
\text{selaux}(a, i) = \begin{cases}
a & \text{si } i = n \\
\text{selaux}(\text{swap}(a, i, \text{pos\_min}(a, i)), i+1) & \text{si } i < n
\end{cases}
\end{aligned}
$$

$$
\begin{aligned}
&\text{pos\_min}(a, i) = \text{min\_pos}(a, i+1, i) \\
\\
\text{min\_pos}(a, i, p) = \begin{cases}
p & \text{si } i = n+1 \\
\text{min\_pos}(a, i+1, i) & \text{si } a[i] < a[p] \\
\text{min\_pos}(a, i+1, p) & \text{si } a[i] \geq a[p]
\end{cases}
\end{aligned}
$$

#### Implementación del Selection Sort

```cpp
void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Realizar n-1 pasadas
    for (int i = 0; i < n - 1; i++) {
        // Encontrar el índice del elemento mínimo
        int minIndex = i;
        
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Intercambiar el elemento mínimo con el primer elemento no ordenado
        if (minIndex != i) {
            std::swap(arr[i], arr[minIndex]);
        }
    }
}
```

### 4.2.4 Shell Sort

El ordenamiento de Shell es una versión mejorada del ordenamiento por inserción. La idea principal es ordenar sub-arreglos más pequeños mediante el ordenamiento por inserción antes de ordenar todo el arreglo.

**Características:**

- **Complejidad temporal:** Depende de la secuencia de gaps utilizada
  - Con potencias de 2: O(n²)
  - Con secuencia de Hibbard (2^k - 1): O(n^(3/2))
- **Complejidad espacial:** O(1)
- **Estabilidad:** No estable

#### Implementación del Shell Sort

```cpp
void shellSort(std::vector<int>& arr) {
    int n = arr.size();
    
    // Comenzar con un gap grande y reducirlo
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Hacer un ordenamiento por inserción con gap
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            // Mover elementos que están a gap distancia
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}

// Implementación con secuencia de Hibbard
void shellSortHibbard(std::vector<int>& arr) {
    int n = arr.size();
    
    // Generar secuencia de Hibbard: 2^k - 1
    std::vector<int> gaps;
    for (int k = 1; (1 << k) - 1 < n; k++) {
        gaps.push_back((1 << k) - 1);
    }
    
    // Usar los gaps en orden descendente
    for (int i = gaps.size() - 1; i >= 0; i--) {
        int gap = gaps[i];
        
        for (int j = gap; j < n; j++) {
            int temp = arr[j];
            int k;
            
            for (k = j; k >= gap && arr[k - gap] > temp; k -= gap) {
                arr[k] = arr[k - gap];
            }
            
            arr[k] = temp;
        }
    }
}
```

## Tercer tema: 4.3 Algoritmos Avanzados

### 4.3.1 Merge Sort

El ordenamiento por fusión (Merge Sort) es un algoritmo de divide y vencerás que divide el arreglo en dos mitades, llama a sí mismo para las dos mitades, y luego fusiona las dos mitades ordenadas.

Un enfoque natural para la resolución de problemas es "divide y vencerás". En cuanto al ordenamiento, podríamos considerar dividir la lista (a ordenar) en partes, procesarlas (ordenarlas) y luego volver a unirlas. La operación fundamental de este algoritmo es fusionar dos listas ordenadas.

El algoritmo Mergesort se ejecuta en un tiempo de ejecución de O(N log N), en el peor de los casos, y el número de comparaciones utilizadas es casi óptimo. Es un buen ejemplo de algoritmo recursivo.

#### Algoritmo para Merge Sort

Podemos modificar la fusión para que sirva como un enfoque para ordenar una sola tabla desordenada de la siguiente manera:

1. Divide la tabla en dos mitades
2. Ordena la mitad izquierda
3. Ordena la mitad derecha
4. Fusiona las dos

**El algoritmo detallado para Merge Sort es:**

1. Si la tabla tiene más de un elemento:
   - Almacena la primera mitad de la tabla en `left_table`
   - Almacena la segunda mitad de la tabla en `right_table`
   - Aplica recursivamente el algoritmo merge sort a `left_table`
   - Aplica recursivamente el algoritmo merge sort a `right_table`
   - Llama a la función de fusión con `left_table` y `right_table` como secuencias de entrada y la tabla original como la secuencia de salida

#### Algoritmo de Fusión

1. Accede al primer elemento de ambas secuencias
2. Mientras no se haya terminado con ninguna de las secuencias:
   - Compara los elementos actuales de las dos secuencias
   - Copia el elemento actual más pequeño en la secuencia de salida
   - Avanza al siguiente elemento en la secuencia de la que se copió
3. Copia cualquier elemento restante de la secuencia que no se terminó

**Características:**

- **Complejidad temporal:** O(n log n) en todos los casos
- **Complejidad espacial:** O(n)
- **Estabilidad:** Estable

#### Implementación del Merge Sort

```cpp
void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Crear arreglos temporales
    std::vector<int> leftArr(n1), rightArr(n2);
    
    // Copiar datos a los arreglos temporales
    for (int i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];
    
    // Fusionar los arreglos temporales de vuelta en arr[left..right]
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copiar los elementos restantes
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left >= right) return;
    
    int mid = left + (right - left) / 2;
    
    // Ordenar primera y segunda mitad
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    
    // Fusionar las mitades ordenadas
    merge(arr, left, mid, right);
}
```

### 4.3.2 QuickSort

Quicksort es un algoritmo de "divide y vencerás" que selecciona un elemento 'pivote' del arreglo y particiona los otros elementos en dos sub-arreglos, según si son menores o mayores que el pivote. Los sub-arreglos se ordenan recursivamente.

**Proceso del algoritmo:**

1. **Selección del pivote:** Se elige un elemento del arreglo como pivote
2. **Partición:** Se reorganizan los elementos de manera que:
   - Los elementos menores que el pivote quedan a la izquierda
   - Los elementos mayores que el pivote quedan a la derecha
3. **Recursión:** Se aplica el mismo proceso a los sub-arreglos izquierdo y derecho

**Características:**

- **Complejidad temporal:** O(n log n) promedio, O(n²) peor caso
- **Complejidad espacial:** O(log n)
- **Estabilidad:** No estable

#### Implementación del QuickSort

```cpp
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];  // Elegir el último elemento como pivote
    int i = (low - 1);      // Índice del elemento más pequeño
    
    for (int j = low; j <= high - 1; j++) {
        // Si el elemento actual es menor o igual al pivote
        if (arr[j] <= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        // pi es el índice de partición
        int pi = partition(arr, low, high);
        
        // Ordenar elementos antes y después de la partición
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

#### Mejoras para QuickSort

Para optimizar el rendimiento de QuickSort en la práctica, se pueden aplicar las siguientes mejoras:

**1. Híbrido con Insertion Sort:**

- Aplicar un ordenamiento por inserción a los sub-arreglos menores de 20 elementos
- Esto mejora el rendimiento para arreglos pequeños donde insertion sort es más eficiente

**2. Selección de Pivote Mejorada:**

- Utilizar como pivote la mediana de tres elementos del sub-arreglo (ej: A[primero], A[mitad], A[último])
- Esto reduce significativamente la probabilidad del peor caso O(n²)

#### Implementación Optimizada de QuickSort

```cpp
void insertionSort(std::vector<int>& arr, int low, int high) {
    for (int i = low + 1; i <= high; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= low && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int medianOfThree(std::vector<int>& arr, int low, int high) {
    int mid = low + (high - low) / 2;

    // Ordenar los tres elementos
    if (arr[mid] < arr[low]) std::swap(arr[low], arr[mid]);
    if (arr[high] < arr[low]) std::swap(arr[low], arr[high]);
    if (arr[high] < arr[mid]) std::swap(arr[mid], arr[high]);

    // Colocar la mediana al final
    std::swap(arr[mid], arr[high]);
    return arr[high];
}

int partitionOptimized(std::vector<int>& arr, int low, int high) {
    // Usar mediana de tres como pivote
    int pivot = medianOfThree(arr, low, high);
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSortOptimized(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        // Usar insertion sort para arreglos pequeños
        if (high - low + 1 < 20) {
            insertionSort(arr, low, high);
        } else {
            int pi = partitionOptimized(arr, low, high);
            quickSortOptimized(arr, low, pi - 1);
            quickSortOptimized(arr, pi + 1, high);
        }
    }
}
```

### 4.3.3 Heap Sort

Heap Sort es un algoritmo de ordenamiento basado en la estructura de datos llamada montículo (heap). Utiliza un heap máximo para ordenar los elementos de un arreglo de forma eficiente y sin necesidad de memoria adicional significativa.

**Idea principal:**

- Construir un heap máximo a partir del arreglo.
- Extraer el elemento máximo (raíz del heap) y colocarlo al final del arreglo.
- Reducir el tamaño del heap y repetir el proceso hasta que el arreglo esté ordenado.

**Características:**

- **Complejidad temporal:** O(n log n) en todos los casos.
- **Complejidad espacial:** O(1) (ordenamiento in-place).
- **Estabilidad:** No estable (puede cambiar el orden de elementos iguales).

#### Implementación de Heap Sort

```cpp
void heapify(std::vector<int>& arr, int n, int i) {
    int largest = i; // Inicializar el mayor como raíz
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    // Si el hijo izquierdo es mayor que la raíz
    if (left < n && arr[left] > arr[largest])
        largest = left;

    // Si el hijo derecho es mayor que el mayor hasta ahora
    if (right < n && arr[right] > arr[largest])
        largest = right;

    // Si el mayor no es la raíz
    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        // Recursivamente heapificar el subárbol afectado
        heapify(arr, n, largest);
    }
}

void heapSort(std::vector<int>& arr) {
    int n = arr.size();

    // Construir heap máximo
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extraer elementos del heap uno por uno
    for (int i = n - 1; i > 0; i--) {
        // Mover la raíz actual al final
        std::swap(arr[0], arr[i]);
        // Llamar heapify en el heap reducido
        heapify(arr, i, 0);
    }
}
```

## Cuarto tema: 4.4 Análisis y Ejemplo

### 4.4.1 Comparación de complejidades

A continuación se presenta una tabla comparativa de los algoritmos de ordenamiento discutidos, incluyendo su complejidad en el mejor caso, caso promedio y peor caso, así como su uso de espacio y si son estables o no.

| Algoritmo | Mejor Caso | Caso Promedio | Peor Caso | Espacio | Estable |
|-----------|------------|---------------|-----------|---------|---------|
| Burbuja   | O(n)       | O(n²)         | O(n²)     | O(1)    | Sí      |
| Inserción | O(n)       | O(n²)         | O(n²)     | O(1)    | Sí      |
| Selección | O(n²)      | O(n²)         | O(n²)     | O(1)    | No      |
| Shell Sort| O(n log n) | Depende       | O(n²)     | O(1)    | No      |
| Merge Sort| O(n log n) | O(n log n)    | O(n log n)| O(n)    | Sí      |
| QuickSort | O(n log n) | O(n log n)    | O(n²)     | O(log n)| No      |
| Heap Sort | O(n log n) | O(n log n)    | O(n log n)| O(1)    | No      |
| Optimizado QuickSort | O(n log n) | O(n log n) | O(n log n) | O(log n) | No |

Los algoritmos de ordenamiento son fundamentales para optimizar el rendimiento de muchas aplicaciones. La elección del algoritmo correcto depende del tamaño de los datos, su estado inicial y los recursos disponibles.

### 4.4.2 Casos de uso recomendados

- **Burbuja:** Útil para listas pequeñas o casi ordenadas.
- **Inserción:** Eficiente para listas pequeñas o casi ordenadas.
- **Selección:** Útil cuando la memoria es limitada.
- **Shell Sort:** Bueno para listas medianas.
- **Merge Sort:** Ideal para listas grandes y datos externos.
- **QuickSort:** Generalmente rápido para listas grandes, pero cuidado con el peor caso.
- **Heap Sort:** Útil cuando se requiere un ordenamiento in-place con complejidad garantizada.
- **Optimizado QuickSort:** Recomendado para la mayoría de los casos prácticos debido a su eficiencia y adaptabilidad.

### 4.4.3 Ejemplo completo de uso

```cpp
#include <iostream>
#include <vector>
#include <chrono>

// Función auxiliar para mostrar el arreglo
void mostrarArreglo(const std::vector<int>& arr) {
    for (int x : arr) {
        std::cout << x << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr1 = {64, 34, 25, 12, 22, 11, 90};
    std::vector<int> arr2 = arr1; // Copia para inserción
    std::vector<int> arr3 = arr1; // Copia para selección
    std::vector<int> arr4 = arr1; // Copia para shell
    std::vector<int> arr5 = arr1; // Copia para merge
    std::vector<int> arr6 = arr1; // Copia para quick
    std::vector<int> arr7 = arr1; // Copia para heap
    
    std::cout << "Arreglo original: ";
    mostrarArreglo(arr1);
    
    // Ordenamiento burbuja
    auto inicio = std::chrono::high_resolution_clock::now();
    bubbleSort(arr1);
    auto fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento burbuja: ";
    mostrarArreglo(arr1);
    
    // Ordenamiento por inserción
    inicio = std::chrono::high_resolution_clock::now();
    insertionSort(arr2);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento inserción: ";
    mostrarArreglo(arr2);
    
    // Ordenamiento por selección
    inicio = std::chrono::high_resolution_clock::now();
    selectionSort(arr3);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento selección: ";
    mostrarArreglo(arr3);
    
    // Ordenamiento Shell
    inicio = std::chrono::high_resolution_clock::now();
    shellSort(arr4);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento Shell: ";
    mostrarArreglo(arr4);
    
    // Ordenamiento Merge
    inicio = std::chrono::high_resolution_clock::now();
    mergeSort(arr5, 0, arr5.size() - 1);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento Merge: ";
    mostrarArreglo(arr5);
    
    // Ordenamiento Quick
    inicio = std::chrono::high_resolution_clock::now();
    quickSort(arr6, 0, arr6.size() - 1);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento Quick: ";
    mostrarArreglo(arr6);
    
    // Ordenamiento Heap
    inicio = std::chrono::high_resolution_clock::now();
    heapSort(arr7);
    fin = std::chrono::high_resolution_clock::now();
    
    std::cout << "Ordenamiento Heap: ";
    mostrarArreglo(arr7);
    
    return 0;
}
```
