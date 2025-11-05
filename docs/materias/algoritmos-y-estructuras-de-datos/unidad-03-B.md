---
title: "Unidad 3B: Colas y Pilas"
description: "Algoritmos y Estructuras de Datos - Unidad 3B: Estructuras de datos lineales: implementación y aplicaciones de pilas (LIFO) y colas (FIFO)"
sidebar_position: 4
tags: [algoritmos, estructuras-de-datos, pilas, colas, LIFO, FIFO, notacion-postfija, balanceo-parentesis]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender y aplicar los conceptos fundamentales de pilas y colas como estructuras de datos lineales, implementando algoritmos eficientes para resolver problemas computacionales.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- **Diferenciar estructuras lineales LIFO y FIFO**: Comprender los principios Last In First Out (pilas) y First In First Out (colas), identificando sus características, ventajas y desventajas en diferentes contextos de aplicación
- **Implementar pilas con arrays y listas enlazadas**: Desarrollar implementaciones de Stack con operaciones push(), pop(), top(), empty() y size(), todas con complejidad temporal O(1), manejando casos de overflow y underflow
- **Implementar colas con arrays y listas enlazadas**: Desarrollar implementaciones de Queue con operaciones enqueue(), dequeue(), front(), empty() y size(), todas con complejidad temporal O(1), utilizando punteros a frente y final
- **Aplicar el algoritmo Shunting Yard**: Convertir expresiones aritméticas de notación infija a postfija usando pilas, considerando precedencia de operadores (^, ×÷, +-) y asociatividad, manejando paréntesis correctamente
- **Evaluar expresiones en notación postfija**: Implementar calculadora postfija usando pilas para procesar operandos y operadores secuencialmente, obteniendo resultados sin necesidad de paréntesis
- **Validar balanceo de paréntesis**: Desarrollar algoritmos de validación sintáctica usando pilas para verificar el correcto emparejamiento de paréntesis (), corchetes [] y llaves {}, detectando errores de apertura/cierre
- **Implementar variantes especializadas**: Desarrollar colas circulares (ring buffers) con índices modulares y colas de prioridad usando heaps para procesamiento ordenado por prioridad
- **Aplicar pilas y colas a problemas reales**: Implementar historial de navegación (undo/redo), buffer de comunicación, scheduler de procesos, algoritmos BFS/DFS, y sistemas de gestión de eventos

## 📋 Contenidos y recursos

### 4.1 Fundamentos de Estructuras Lineales

- **4.1.1** Concepto de lista y estructuras lineales
- **4.1.2** Diferencias entre pilas y colas
- **4.1.3** Principios LIFO y FIFO

### 4.2 Implementación de Pilas y Colas

- **4.2.1** Principios fundamentales de implementación
- **4.2.2** Operaciones básicas de pilas (Stack)
- **4.2.3** Operaciones básicas de colas (Queue)

### 4.3 Aplicaciones Algorítmicas

- **4.3.1** Notaciones de expresiones algebraicas
- **4.3.2** Evaluación de expresiones postfijas
- **4.3.3** Balanceo de paréntesis y validación sintáctica

### 🔗 Recursos Complementarios

- [Colas y Pilas](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758238283/pdfs/COLAS_PILAS_drn7kk.pdf)

## Primer tema: 4.1 Fundamentos de Estructuras Lineales

### 4.1.1 Concepto de lista y estructuras lineales

Una **estructura de datos lineal** es aquella en la que los elementos están organizados de forma secuencial, donde cada elemento tiene un único predecesor y un único sucesor (excepto el primero y el último).

**Características de las estructuras lineales:**

- Los elementos se almacenan en posiciones consecutivas
- Existe una relación de orden entre los elementos
- Se puede acceder a los elementos siguiendo una secuencia
- Ejemplos: arrays, listas enlazadas, pilas, colas

Una **lista** es una estructura de datos que almacena una cadena de datos mediante una referencia (puntero) al siguiente elemento, permitiendo el crecimiento dinámico y la inserción/eliminación eficiente en cualquier posición.

### 4.1.2 Diferencias entre pilas y colas

Las **pilas** y **colas** son estructuras de datos lineales fundamentales en ciencias de la computación:

- Pueden ser implementadas usando **arrays** o **listas enlazadas**
- **No permiten** agregar o remover elementos en cualquier índice arbitrario
- Al igual que las listas, son estructuras **lineales contenedoras** de datos
- Hacemos referencia a una pila o cola de datos de tipo `T`

### 4.1.3 Principios LIFO y FIFO

#### Principio LIFO (Last In, First Out)

El principio **LIFO** establece que el último elemento que entra es el primero en salir. Es como una **pila de platos**:

- Solo puedes tomar el plato del tope
- Solo puedes agregar un plato nuevo en el tope
- El último plato colocado será el primero en ser retirado

**Ventajas del LIFO:**

- Implementación simple y eficiente
- Memoria de acceso local excelente
- Ideal para llamadas de funciones recursivas

**Desventajas del LIFO:**

- No hay acceso aleatorio a elementos
- El primer elemento insertado es el último en salir

#### Principio FIFO (First In, First Out)

El principio **FIFO** establece que el primer elemento que entra es el primero en salir. Es como una **fila de personas**:

- La primera persona en llegar es la primera en ser atendida
- Las nuevas personas se agregan al final de la fila
- Se respeta el orden de llegada

**Ventajas del FIFO:**

- Justicia en el procesamiento (orden de llegada)
- Ideal para sistemas de buffering
- Comportamiento predecible

**Desventajas del FIFO:**

- Implementación más compleja que LIFO
- Requiere mantener referencias al frente y final

## Segundo tema: 4.2 Implementación de Pilas y Colas

### 4.2.1 Concepto de pila (Stack)

**Característica principal:** Es una estructura **LIFO** (Last In, First Out)

#### Ejemplo práctico: Historial de navegación

Cuando navegas por sitios web: Sitio A → B → C → D

1. A medida que el usuario navega, se **apilan** los diferentes sitios en la lista
2. Esto asegura que el **último sitio visitado** esté siempre en el **tope de la pila**
3. Cuando el usuario presiona el botón **"Volver"**:
   - Se **remueve** el tope de la pila (sitio D)
   - Se accede al sitio anterior (sitio C)
   - El sitio C queda como nuevo tope de la pila

#### Ejemplos de uso de pilas

- **Undo/Redo** en editores de texto
- **Llamadas a funciones** (call stack)
- **Parsing de expresiones** matemáticas
- **Navegación web** (historial de páginas visitadas)
- **Manejo de memoria** en programas recursivos
- **Compiladores** para análisis sintáctico
- **Evaluación de expresiones** aritméticas

### 4.2.2 Concepto de cola (Queue)

**Característica principal:** Es una estructura **FIFO** (First In, First Out)

#### Ejemplo práctico: Fila del supermercado

1. Cuando el cajero está cobrando a los clientes
2. Atenderá al **primero que llegó** a la fila
3. Los nuevos clientes se agregan al **final** de la fila

#### Otros ejemplos de uso

- **Buffers** de comunicación
- **Modelo productor-consumidor**
- **Sistemas de impresión**
- **Gestión de procesos** en sistemas operativos
- **Algoritmos de búsqueda BFS** (Breadth-First Search)
- **Simulación de eventos** discretos
- **Manejo de interrupciones** en sistemas embebidos
- **Streaming de datos** en tiempo real

#### Análisis de complejidad

**Operaciones en Pilas:**

| Operación | Complejidad Temporal | Complejidad Espacial |
|-----------|---------------------|---------------------|
| `push()` | $O(1)$ | $O(1)$ |
| `pop()` | $O(1)$ | $O(1)$ |
| `top()` | $O(1)$ | $O(1)$ |
| `empty()` | $O(1)$ | $O(1)$ |
| `size()` | $O(1)$ | $O(1)$ |

**Operaciones en Colas:**

| Operación | Complejidad Temporal | Complejidad Espacial |
|-----------|---------------------|---------------------|
| `enqueue()` | $O(1)$ | $O(1)$ |
| `dequeue()` | $O(1)$ | $O(1)$ |
| `front()` | $O(1)$ | $O(1)$ |
| `empty()` | $O(1)$ | $O(1)$ |
| `size()` | $O(1)$ | $O(1)$ |

### 4.2.3 Implementación práctica

#### Implementación de Pila con Array

```cpp
template<typename T>
class StackArray {
private:
    T* datos;
    int capacidad;
    int tope;
    
public:
    StackArray(int cap = 100) : capacidad(cap), tope(-1) {
        datos = new T[capacidad];
    }
    
    ~StackArray() {
        delete[] datos;
    }
    
    void push(const T& elemento) {
        if (tope >= capacidad - 1) {
            throw std::overflow_error("Stack overflow");
        }
        datos[++tope] = elemento;
    }
    
    T pop() {
        if (empty()) {
            throw std::underflow_error("Stack underflow");
        }
        return datos[tope--];
    }
    
    T& top() {
        if (empty()) {
            throw std::underflow_error("Stack is empty");
        }
        return datos[tope];
    }
    
    bool empty() const {
        return tope == -1;
    }
    
    size_t size() const {
        return tope + 1;
    }
};
```

#### Implementación de Cola con Lista Enlazada

```cpp
template<typename T>
class QueueLinked {
private:
    struct Nodo {
        T dato;
        Nodo* siguiente;
        Nodo(const T& d) : dato(d), siguiente(nullptr) {}
    };
    
    Nodo* frente;
    Nodo* final;
    size_t tamaño;
    
public:
    QueueLinked() : frente(nullptr), final(nullptr), tamaño(0) {}
    
    ~QueueLinked() {
        while (!empty()) {
            dequeue();
        }
    }
    
    void enqueue(const T& elemento) {
        Nodo* nuevo = new Nodo(elemento);
        if (empty()) {
            frente = final = nuevo;
        } else {
            final->siguiente = nuevo;
            final = nuevo;
        }
        tamaño++;
    }
    
    T dequeue() {
        if (empty()) {
            throw std::underflow_error("Queue is empty");
        }
        
        T valor = frente->dato;
        Nodo* temp = frente;
        frente = frente->siguiente;
        
        if (frente == nullptr) {
            final = nullptr;
        }
        
        delete temp;
        tamaño--;
        return valor;
    }
    
    T& front() {
        if (empty()) {
            throw std::underflow_error("Queue is empty");
        }
        return frente->dato;
    }
    
    bool empty() const {
        return frente == nullptr;
    }
    
    size_t size() const {
        return tamaño;
    }
};
```

## Tercer tema: 4.3 Aplicaciones Algorítmicas

### 4.3.1 Principios fundamentales de implementación

- **Debe respetarse** el comportamiento específico de cada tipo (FIFO/LIFO)
- Puede utilizarse un **array** o una **lista enlazada** (memoria estática/dinámica)

### 4.3.2 Operaciones básicas de estructuras lineales

#### Implementación de Pila (Stack)

```cpp
template<typename T>
class Stack {
public:
    void push(const T& elemento);    // Agregar al tope
    T pop();                         // Remover del tope
    T& top();                        // Acceder al tope
    bool empty() const;              // Verificar si está vacía
    size_t size() const;             // Obtener tamaño
};
```

#### Implementación de Cola (Queue)

```cpp
template<typename T>
class Queue {
public:
    void enqueue(const T& elemento); // Agregar al final
    T dequeue();                     // Remover del frente
    T& front();                      // Acceder al frente
    bool empty() const;              // Verificar si está vacía
    size_t size() const;             // Obtener tamaño
};
```

### 4.3.3 Notaciones y evaluación de expresiones

#### Algoritmo de conversión Infija a Postfija (Shunting Yard)

El **algoritmo Shunting Yard**, desarrollado por Edsger Dijkstra, convierte expresiones en notación infija a postfija:

**Algoritmo:**

1. **Crear** una pila de operadores y una cola de salida
2. **Para cada token** en la expresión:
   - Si es un **operando**: agregarlo a la salida
   - Si es un **operador**:
     - Mientras la pila no esté vacía y el operador del tope tenga mayor o igual precedencia:
       - Desapilar y agregar a la salida
     - Apilar el operador actual
   - Si es **paréntesis abierto** `(`: apilar
   - Si es **paréntesis cerrado** `)`:
     - Desapilar hasta encontrar `(`
     - Descartar el `(`
3. **Desapilar** todos los operadores restantes

**Ejemplo: Conversión de** $3 + 4 \times 2$

| Paso | Token | Pila | Salida | Acción |
|------|-------|------|--------|---------|
| 1 | 3 | [] | [3] | Operando → salida |
| 2 | + | [+] | [3] | Operador → pila |
| 3 | 4 | [+] | [3, 4] | Operando → salida |
| 4 | × | [+, ×] | [3, 4] | × tiene mayor precedencia |
| 5 | 2 | [+, ×] | [3, 4, 2] | Operando → salida |
| 6 | fin | [] | [3, 4, 2, ×, +] | Desapilar todo |

**Resultado:** $3 \; 4 \; 2 \; \times \; +$

#### Precedencia de operadores

| Operador | Precedencia | Asociatividad |
|----------|-------------|---------------|
| `^` | 4 | Derecha |
| `*`, `/` | 3 | Izquierda |
| `+`, `-` | 2 | Izquierda |
| `(`, `)` | 1 | N/A |

## Cuarto tema: Calculadora Postfija

### Notaciones de expresiones algebraicas

#### Expresión algebraica ejemplo

$$a - c \times (d + e)$$

$$a - c \times d + e \Rightarrow a - (c \times d) + e$$

#### Tipos de notación

1. **Notación prefija (Polaca):**
   - Operador se escribe **primero** y luego los operandos
   - Ejemplos: $(+ \; 1 \; 2)$, $(* \; 2 \; 3)$

2. **Notación infija:**
   - Operador va **entre medio** de los dos operandos
   - Ejemplos: $(1 + 2)$, $(2 \times 3)$
   - **Más familiar** para los humanos

3. **Notación postfija (Polaca inversa):**
   - Operador va **luego** de los dos operandos
   - Ejemplos: $(1 \; 2 \; +)$, $(2 \; 3 \; *)$
   - **Más eficiente** para computadoras

### Ventajas de la notación postfija

- **No requiere paréntesis** para determinar precedencia
- **Evaluación más eficiente** usando una pila
- **Menos ambigüedad** en la interpretación

### Evaluación de expresiones postfijas

#### Algoritmo básico

1. **Recorrer** la expresión de izquierda a derecha
2. Si encontramos un **operando**: lo apilamos
3. Si encontramos un **operador**:
   - Desapilamos dos operandos
   - Aplicamos la operación
   - Apilamos el resultado
4. El **resultado final** es el único elemento que queda en la pila

#### Ejemplo: Evaluación de $4 \; 5 \; 6 \; * \; +$

| Paso | Token | Acción | Pila |
|------|-------|--------|------|
| 1 | 4 | Apilar operando | [4] |
| 2 | 5 | Apilar operando | [4, 5] |
| 3 | 6 | Apilar operando | [4, 5, 6] |
| 4 | * | Desapilar 6 y 5, calcular $5 \times 6 = 30$, apilar | [4, 30] |
| 5 | + | Desapilar 30 y 4, calcular $4 + 30 = 34$, apilar | [34] |

**Resultado:** 34

### Ejemplo completo 1: $3 \; 8 \; +$

| Paso | Acción | Pila | Observación |
|------|--------|------|-------------|
| 1 | Apilar 3 | [3] | Tope en 3 |
| 2 | Apilar 8 | [3, 8] | Tope en 8 |
| 3 | Operador + | [11] | Desapilar 8 y 3, calcular $3 + 8 = 11$ |

### Ejemplo completo 2: $3 \; 8 \; + \; 2 \; *$

| Paso | Acción | Pila | Observación |
|------|--------|------|-------------|
| 1 | Resultado anterior | [11] | De la operación $3 \; 8 \; +$ |
| 2 | Apilar 2 | [11, 2] | |
| 3 | Operador * | [22] | Desapilar 2 y 11, calcular $11 \times 2 = 22$ |

**El resultado final es el último valor en la pila:** 22

## Quinto tema: Ejercicios y Aplicaciones

### Ejercicio 1: Conversión a postfijo

**Expresión infija:**

$$2 \times 3 + 3 - 2 \times 1 = 6 + 3 - 2 = 7$$

**Expresión postfija equivalente:**

$$2 \; 3 \; * \; 3 \; + \; 2 \; 1 \; * \; -$$

### Ejercicio 2: Expresión compleja

**Convertir a postfijo y resolver:**

$$2 \times ((3 + 3) - 2) \times 1 = 2 \times 4 \times 1 = 8$$

**Proceso de conversión:**

1. $(3 + 3) \rightarrow 3 \; 3 \; +$
2. $((3 + 3) - 2) \rightarrow 3 \; 3 \; + \; 2 \; -$
3. $2 \times ((3 + 3) - 2) \rightarrow 2 \; 3 \; 3 \; + \; 2 \; - \; *$
4. $2 \times ((3 + 3) - 2) \times 1 \rightarrow 2 \; 3 \; 3 \; + \; 2 \; - \; * \; 1 \; *$

**Expresión postfija final:**

$$2 \; 3 \; 3 \; + \; 2 \; - \; * \; 1 \; *$$

**Evaluación paso a paso:**

| Paso | Token | Pila | Operación |
|------|-------|------|-----------|
| 1 | 2 | [2] | Apilar |
| 2 | 3 | [2, 3] | Apilar |
| 3 | 3 | [2, 3, 3] | Apilar |
| 4 | + | [2, 6] | $3 + 3 = 6$ |
| 5 | 2 | [2, 6, 2] | Apilar |
| 6 | - | [2, 4] | $6 - 2 = 4$ |
| 7 | * | [8] | $2 \times 4 = 8$ |
| 8 | 1 | [8, 1] | Apilar |
| 9 | * | [8] | $8 \times 1 = 8$ |

**Resultado final:** 8

### Ejercicio 3: Evaluación con precedencia

**Expresión infija con precedencia:**

$$5 + 3 \times 2^2 - 1$$

**Aplicando precedencia** (^ > ×,÷ > +,-):

1. Primero: $2^2 = 4$
2. Segundo: $3 \times 4 = 12$  
3. Tercero: $5 + 12 = 17$
4. Cuarto: $17 - 1 = 16$

**Conversión a postfijo:**

$$5 \; 3 \; 2 \; 2 \; \hat{} \; \times \; + \; 1 \; -$$

**Verificación paso a paso:**

| Paso | Token | Pila | Operación |
|------|-------|------|-----------|
| 1 | 5 | [5] | Apilar |
| 2 | 3 | [5, 3] | Apilar |
| 3 | 2 | [5, 3, 2] | Apilar |
| 4 | 2 | [5, 3, 2, 2] | Apilar |
| 5 | ^ | [5, 3, 4] | $2^2 = 4$ |
| 6 | × | [5, 12] | $3 \times 4 = 12$ |
| 7 | + | [17] | $5 + 12 = 17$ |
| 8 | 1 | [17, 1] | Apilar |
| 9 | - | [16] | $17 - 1 = 16$ |

### Ejercicio 4: Expresión compleja con múltiples paréntesis

**Expresión:**

$$((15 \div (7 - (1 + 1))) \times 3) - (2 + (1 + 1))$$

**Conversión paso a paso:**

1. Resolver paréntesis más internos: $(1 + 1) = 2$
2. $((15 \div (7 - 2)) \times 3) - (2 + 2)$
3. $(15 \div 5) \times 3) - 4$
4. $(3 \times 3) - 4$
5. $9 - 4 = 5$

**Postfijo:** $15 \; 7 \; 1 \; 1 \; + \; - \; \div \; 3 \; \times \; 2 \; 1 \; 1 \; + \; + \; -$

## Sexto tema: Balanceo de Paréntesis

### Problema

Determinar si una expresión tiene los paréntesis correctamente balanceados.

### Algoritmo usando pila

1. **Por cada paréntesis** $($: apilar en la pila
2. **Por cada paréntesis** $)$: desapilar de la pila
3. **Al final**: si la pila está vacía, la expresión está balanceada

### Ejemplos

#### Expresión balanceada: $((()))$

| Paso | Carácter | Acción | Pila |
|------|----------|--------|------|
| 1 | $($  | Apilar | [1] |
| 2 | $($  | Apilar | [1, 1] |
| 3 | $($  | Apilar | [1, 1, 1] |
| 4 | $)$  | Desapilar | [1, 1] |
| 5 | $)$  | Desapilar | [1] |
| 6 | $)$  | Desapilar | [] |

**Resultado:** Balanceada ✅

#### Expresión no balanceada: $((())$

| Paso | Carácter | Acción | Pila |
|------|----------|--------|------|
| 1 | $($  | Apilar | [1] |
| 2 | $($  | Apilar | [1, 1] |
| 3 | $($  | Apilar | [1, 1, 1] |
| 4 | $)$  | Desapilar | [1, 1] |
| 5 | $)$  | Desapilar | [1] |

**Resultado:** No balanceada ❌ (pila no vacía)

### Extensión para múltiples tipos de paréntesis

```cpp
bool estaBalanceado(const string& expresion) {
    stack<char> pila;
    
    for (char c : expresion) {
        // Paréntesis de apertura
        if (c == '(' || c == '[' || c == '{') {
            pila.push(c);
        }
        // Paréntesis de cierre
        else if (c == ')' || c == ']' || c == '}') {
            if (pila.empty()) return false;
            
            char tope = pila.top();
            pila.pop();
            
            // Verificar que coincidan los tipos
            if ((c == ')' && tope != '(') ||
                (c == ']' && tope != '[') ||
                (c == '}' && tope != '{')) {
                return false;
            }
        }
    }
    
    return pila.empty();
}
```

#### Implementación mejorada con manejo de errores

```cpp
class ValidadorParentesis {
private:
    std::stack<char> pila;
    std::map<char, char> pares = {
        {')', '('}, 
        {']', '['}, 
        {'}', '{'}
    };
    
public:
    struct ResultadoValidacion {
        bool esValido;
        std::string mensaje;
        int posicionError;
    };
    
    ResultadoValidacion validar(const std::string& expresion) {
        pila = std::stack<char>(); // Limpiar pila
        
        for (int i = 0; i < expresion.length(); i++) {
            char c = expresion[i];
            
            // Paréntesis de apertura
            if (c == '(' || c == '[' || c == '{') {
                pila.push(c);
            }
            // Paréntesis de cierre
            else if (c == ')' || c == ']' || c == '}') {
                if (pila.empty()) {
                    return {false, "Paréntesis de cierre sin apertura", i};
                }
                
                char tope = pila.top();
                pila.pop();
                
                if (pares[c] != tope) {
                    return {false, "Tipos de paréntesis no coinciden", i};
                }
            }
        }
        
        if (!pila.empty()) {
            return {false, "Paréntesis de apertura sin cierre", -1};
        }
        
        return {true, "Expresión balanceada correctamente", -1};
    }
};
```

### Variantes especializadas de colas

#### Cola Circular (Ring Buffer)

Una **cola circular** utiliza un array de tamaño fijo donde los índices "dan la vuelta":

```cpp
template<typename T>
class ColaCircular {
private:
    T* buffer;
    int capacidad;
    int frente;
    int final;
    int tamaño;
    
public:
    ColaCircular(int cap) : capacidad(cap), frente(0), final(0), tamaño(0) {
        buffer = new T[capacidad];
    }
    
    bool enqueue(const T& elemento) {
        if (tamaño >= capacidad) {
            return false; // Cola llena
        }
        
        buffer[final] = elemento;
        final = (final + 1) % capacidad;
        tamaño++;
        return true;
    }
    
    bool dequeue(T& elemento) {
        if (tamaño == 0) {
            return false; // Cola vacía
        }
        
        elemento = buffer[frente];
        frente = (frente + 1) % capacidad;
        tamaño--;
        return true;
    }
};
```

#### Cola de Prioridad

Una **cola de prioridad** donde los elementos se procesan según su prioridad:

```cpp
template<typename T>
struct ElementoPrioridad {
    T dato;
    int prioridad;
    
    bool operator<(const ElementoPrioridad& otro) const {
        return prioridad < otro.prioridad; // Mayor prioridad primero
    }
};

template<typename T>
class ColaPrioridad {
private:
    std::priority_queue<ElementoPrioridad<T>> heap;
    
public:
    void enqueue(const T& elemento, int prioridad) {
        heap.push({elemento, prioridad});
    }
    
    T dequeue() {
        if (heap.empty()) {
            throw std::underflow_error("Cola vacía");
        }
        
        T elemento = heap.top().dato;
        heap.pop();
        return elemento;
    }
    
    bool empty() const {
        return heap.empty();
    }
};
```

## Resumen

### Conceptos clave aprendidos

1. **Pilas (LIFO)**: Útiles para historial, undo/redo, parsing
2. **Colas (FIFO)**: Útiles para buffers, sistemas de espera
3. **Notación postfija**: Evaluación eficiente sin paréntesis
4. **Balanceo de paréntesis**: Validación de sintaxis
5. **Complejidad temporal**: Todas las operaciones básicas son $O(1)$
6. **Variantes especializadas**: Colas circulares y colas de prioridad

### Aplicaciones prácticas en la industria

#### Sistemas Operativos

- **Gestión de procesos**: Scheduler de procesos usa colas FIFO
- **Manejo de memoria**: Stack frame para llamadas de función
- **Interrupciones**: Cola de prioridad para manejar interrupciones

#### Compiladores e Intérpretes

- **Análisis léxico**: Pilas para manejo de tokens
- **Análisis sintáctico**: Algoritmo Shunting Yard
- **Generación de código**: Evaluación de expresiones postfijas

#### Aplicaciones Web

- **Navegadores**: Pila para historial de navegación
- **Servidores**: Colas para manejo de requests HTTP
- **Bases de datos**: Buffer pools implementados como colas

#### Algoritmos de Grafos

- **BFS (Breadth-First Search)**: Utiliza colas FIFO
- **DFS (Depth-First Search)**: Utiliza pilas LIFO (implícita via recursión)

### Comparación de implementaciones

| Aspecto | Array | Lista Enlazada |
|---------|-------|----------------|
| **Acceso** | $O(1)$ | $O(1)$ solo extremos |
| **Memoria** | Contigua, cache-friendly | Dispersa, más overhead |
| **Tamaño** | Fijo (puede redimensionar) | Dinámico |
| **Implementación** | Más simple | Más compleja |

### Ejercicios de autoevaluación

1. **Implementar** una calculadora que evalúe expresiones infijas usando dos pilas
2. **Diseñar** un sistema de undo/redo para un editor de texto
3. **Crear** un simulador de cola de impresión con prioridades
4. **Desarrollar** un analizador sintáctico para validar código fuente

### Patrones de diseño relacionados

- **Command Pattern**: Implementación de undo/redo con pilas
- **Observer Pattern**: Notificación de cambios en colas
- **Strategy Pattern**: Diferentes algoritmos de scheduling en colas

Las pilas y colas son estructuras fundamentales que aparecen en muchos algoritmos y sistemas, siendo esenciales para cualquier programador. Su comprensión profunda es crucial para el diseño eficiente de software y la resolución de problemas computacionales complejos.
