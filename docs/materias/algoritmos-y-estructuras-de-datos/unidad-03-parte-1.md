---
title: "Unidad 3: Estructuras lineales"
description: "Algoritmos y Estructuras de Datos - Unidad 3: Estudio de estructuras lineales como listas enlazadas y vectores, implementación con templates y análisis comparativo"
sidebar_position: 3
tags: [algoritmos, estructuras-de-datos, programacion, listas, vectores, nodos, templates, cpp]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender y aplicar las estructuras de datos lineales fundamentales, analizando sus características, implementaciones y casos de uso apropiados.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Implementar y manipular listas enlazadas simples
- Comparar ventajas y desventajas entre listas y arreglos
- Aplicar templates para crear estructuras genéricas
- Utilizar vectores de la STL de C++ eficientemente
- Seleccionar la estructura apropiada según el contexto del problema

## 📋 Contenidos y recursos

### 3.1 Listas Enlazadas

- **3.1.1** Conceptos fundamentales y características
- **3.1.2** Comparación con arreglos
- **3.1.3** Implementación básica de nodos y listas

### 3.2 Programación Genérica

- **3.2.1** Templates en C++
- **3.2.2** Implementación de estructuras genéricas
- **3.2.3** Ventajas de la programación genérica

### 3.3 Vectores

- **3.3.1** Características y funcionalidades
- **3.3.2** Uso de std::vector
- **3.3.3** Operaciones y métodos principales

## Listas Enlazadas

### 3.1.1 Conceptos fundamentales

Una **lista enlazada** es una estructura de datos lineal que consiste en una secuencia de elementos, donde cada elemento (nodo) contiene un valor y una referencia (enlace) al siguiente nodo en la secuencia. A diferencia de los arreglos, las listas enlazadas no requieren un bloque contiguo de memoria, lo que permite una inserción y eliminación más eficiente de elementos.

#### Características Principales

**Estructura del Nodo:**
Cada nodo en una lista enlazada contiene dos componentes fundamentales:

- **Dato**: El valor almacenado en el nodo (puede ser de cualquier tipo: entero, cadena, objeto, etc.)
- **Enlace/Puntero**: Una referencia al siguiente nodo en la secuencia

**Propiedades Fundamentales:**

- **Dinamismo**: El tamaño puede cambiar durante la ejecución del programa
- **Memoria no contigua**: Los nodos pueden estar dispersos en diferentes ubicaciones de memoria
- **Acceso secuencial**: Para llegar al n-ésimo elemento, debemos atravesar los n-1 elementos anteriores
- **Gestión manual de memoria**: Requiere allocación y liberación explícita de memoria

#### Ventajas de las Listas Enlazadas

1. **Tamaño dinámico**: Pueden crecer o decrecer según las necesidades del programa
2. **Inserción/eliminación eficiente**: Operaciones O(1) si tenemos acceso directo al nodo
3. **Uso eficiente de memoria**: Solo usa la memoria necesaria para los elementos actuales
4. **Flexibilidad**: Fácil reorganización de elementos

#### Desventajas de las Listas Enlazadas

1. **Acceso secuencial**: No hay acceso directo por índice (O(n) para buscar un elemento)
2. **Overhead de memoria**: Cada nodo requiere espacio adicional para el puntero
3. **Localidad de memoria pobre**: Los nodos pueden estar dispersos, afectando el rendimiento del cache
4. **No hay aritmética de punteros**: No se pueden realizar operaciones como ptr + n

![Listas enlazadas](/img/algoritmos-y-estructuras-de-datos/listas-enlazadas.webp)

### 3.1.2 Listas vs Arreglos

La comparación entre listas enlazadas y arreglos es fundamental para entender cuándo usar cada estructura de datos. Ambas son estructuras lineales, pero difieren significativamente en su implementación y características de rendimiento.

#### Análisis Comparativo Detallado

**Arreglos (Arrays):**

- **Tamaño fijo**: Definido en tiempo de compilación o al momento de la creación
- **Acceso rápido**: Acceso directo O(1) a cualquier elemento mediante índices
- **Memoria contigua**: Todos los elementos están almacenados consecutivamente en memoria
- **Inserciones/eliminaciones costosas**: Requieren desplazamiento de elementos O(n)
- **Eficiencia de cache**: Excelente localidad espacial, aprovecha el cache del procesador
- **Overhead mínimo**: Solo almacena los datos, sin punteros adicionales

**Listas enlazadas:**

- **Tamaño dinámico**: Puede crecer o decrecer durante la ejecución
- **Acceso secuencial**: Debe recorrer la lista desde el inicio O(n)
- **Memoria no contigua**: Los nodos pueden estar dispersos en diferentes ubicaciones
- **Inserciones/eliminaciones eficientes**: O(1) si se tiene referencia al nodo anterior
- **Localidad de cache pobre**: Los nodos dispersos pueden causar cache misses
- **Overhead de memoria**: Cada nodo requiere espacio adicional para el puntero

#### Complejidad Temporal Comparativa

| Operación | Arreglos | Listas Enlazadas |
|-----------|----------|------------------|
| Acceso por índice | O(1) | O(n) |
| Inserción al inicio | O(n) | O(1) |
| Inserción al final | O(1) | O(n) sin tail, O(1) con tail |
| Inserción en posición | O(n) | O(n) para encontrar + O(1) para insertar |
| Eliminación al inicio | O(n) | O(1) |
| Eliminación al final | O(1) | O(n) |
| Búsqueda | O(n) | O(n) |

#### Consideraciones de Memoria

**Fragmentación de memoria:**

- **Arreglos**: Requieren un bloque contiguo grande, pueden fallar si no hay suficiente memoria contigua
- **Listas**: Pueden usar fragmentos pequeños de memoria dispersos

**Overhead por elemento:**

- **Arreglos**: Solo el tamaño del dato
- **Listas**: Tamaño del dato + tamaño del puntero (4-8 bytes adicionales)

#### Cuándo usar cada una

**Use arreglos cuando:**

- Necesite acceso aleatorio frecuente a elementos
- El tamaño de los datos sea relativamente estable
- La eficiencia de memoria sea crítica
- Requiera alta performance para operaciones numéricas

**Use listas enlazadas cuando:**

- El tamaño de los datos cambie frecuentemente
- Las inserciones y eliminaciones sean operaciones comunes
- No necesite acceso aleatorio a elementos
- La memoria esté fragmentada

![Comparación de listas vs arreglos](/img/algoritmos-y-estructuras-de-datos/lista-vs-arreglos.webp)

### 3.1.3 Estructura recursiva de una lista enlazada

Una lista enlazada tiene una **estructura recursiva** porque cada nodo contiene un valor y un puntero al siguiente nodo, que a su vez tiene la misma estructura. Esta propiedad recursiva es fundamental para entender cómo funcionan las operaciones sobre listas y por qué muchos algoritmos de listas se implementan de manera recursiva.

#### Definición Recursiva

Matemáticamente, una lista enlazada se puede definir recursivamente como:

```plain
Lista = ∅ (lista vacía)
      | Nodo(dato, Lista) (un nodo seguido de otra lista)
```

Esta definición indica que una lista es:

- O bien una lista vacía (caso base)
- O bien un nodo que contiene un dato y apunta a otra lista (caso recursivo)

#### Ejemplos de Recorrido Recursivo

**Acceso secuencial recursivo:**

- Acceder al primer elemento (n) → siguiente elemento (n-1)
- Acceder al elemento (n-1) → siguiente elemento (n-2)
- ...
- Acceder al último elemento (1) → siguiente elemento (0) → NULL (comienzo de la lista)

#### Operaciones Recursivas Fundamentales

**1. Impresión recursiva:**

```cpp
void imprimirLista(Nodo* nodo) {
    if (nodo == nullptr) return;  // Caso base
    std::cout << nodo->value << " ";
    imprimirLista(nodo->next);    // Llamada recursiva
}
```

**2. Búsqueda recursiva:**

```cpp
bool buscar(Nodo* nodo, int valor) {
    if (nodo == nullptr) return false;           // Caso base: no encontrado
    if (nodo->value == valor) return true;       // Caso base: encontrado
    return buscar(nodo->next, valor);            // Llamada recursiva
}
```

**3. Cálculo de longitud recursivo:**

```cpp
int longitud(Nodo* nodo) {
    if (nodo == nullptr) return 0;              // Caso base
    return 1 + longitud(nodo->next);            // Caso recursivo
}
```

#### Ventajas de la Implementación Recursiva

1. **Código más limpio**: Las operaciones recursivas son más fáciles de leer y entender
2. **Correspondencia natural**: La estructura recursiva de la lista se refleja en el código
3. **Facilita la prueba de correctitud**: Más fácil verificar usando inducción matemática
4. **Menos propenso a errores**: Reduce la complejidad del manejo manual de punteros

#### Desventajas de la Implementación Recursiva

1. **Overhead de función**: Cada llamada recursiva consume espacio en la pila
2. **Riesgo de stack overflow**: Listas muy largas pueden agotar la pila
3. **Rendimiento**: Las llamadas a función pueden ser más lentas que los bucles
4. **Debugging complejo**: Puede ser más difícil depurar código recursivo

#### Patrones de Recursión en Listas

**Recursión de cola (Tail Recursion):**

```cpp
void imprimirInverso(Nodo* nodo) {
    if (nodo == nullptr) return;
    imprimirInverso(nodo->next);  // Llamada recursiva primero
    std::cout << nodo->value << " ";  // Procesamiento después
}
```

**Recursión con acumulador:**

```cpp
int sumaRecursiva(Nodo* nodo, int acumulador = 0) {
    if (nodo == nullptr) return acumulador;
    return sumaRecursiva(nodo->next, acumulador + nodo->value);
}
```

#### Implementación de Nodo

La implementación del nodo es el fundamento de cualquier lista enlazada. Cada nodo debe encapsular tanto los datos como la referencia al siguiente elemento, proporcionando una interfaz clara para la manipulación de la estructura.

**Consideraciones de Diseño:**

1. **Encapsulación**: Los miembros deben ser apropiadamente públicos o privados
2. **Inicialización**: El constructor debe garantizar un estado válido del nodo
3. **Gestión de memoria**: Considerar si el nodo es responsable de la memoria de sus datos
4. **Métodos auxiliares**: Funciones para facilitar operaciones comunes

```cpp
// Definición de la estructura del nodo
struct Nodo {
    int value;     // Valor del nodo
    Nodo* next;    // Puntero al siguiente nodo
    
    Nodo(int val); // Constructor
    void print();  // Método para imprimir el nodo
};

// Implementación del constructor
// Inicializa el valor y establece el puntero a nullptr por seguridad
Nodo::Nodo(int val) : value(val), next(nullptr) {}

// Implementación del método print
// Muestra tanto el valor como la dirección del siguiente nodo
void Nodo::print() {
    std::cout << "[NODO] valor: " << value << ", siguiente: " << next << std::endl;
}
```

**Análisis de la Implementación:**

- **Lista de inicialización**: Se usa `: value(val), next(nullptr)` para inicialización eficiente
- **Puntero seguro**: Inicializar `next` a `nullptr` previene errores de acceso a memoria
- **Método de debugging**: `print()` facilita la visualización del estado del nodo
- **Simplicidad**: Estructura mínima pero funcional para casos básicos

#### Implementación de Lista Enlazada

La clase `List` encapsula la funcionalidad completa de una lista enlazada, proporcionando una interfaz de alto nivel para las operaciones más comunes. Esta implementación demuestra principios fundamentales de estructuras de datos y gestión de memoria.

**Principios de Diseño:**

1. **Responsabilidad única**: La clase se encarga únicamente de la gestión de la lista
2. **Gestión automática de memoria**: El destructor libera todos los nodos automáticamente
3. **Interfaz intuitiva**: Métodos con nombres claros y funcionalidad predecible
4. **Seguridad**: Validación de precondiciones antes de las operaciones

```cpp
// Definición de la clase Lista
class List {
public:
    List();             // Constructor por defecto (lista vacía)
    List(Nodo* head);   // Constructor con nodo inicial
    ~List();            // Destructor (libera memoria)
    void push(int val); // Agregar al inicio
    bool isEmpty();     // Verificar si está vacía
    int getHead();      // Obtener valor del primer nodo
    List* getTail();    // Obtener la sublista sin el primer nodo
    void print();       // Imprimir la lista

private:
    Nodo* head;         // Puntero al primer nodo
};

// Constructor por defecto - crea lista vacía
List::List() : head(nullptr) {}

// Constructor con nodo inicial - permite inicializar con un nodo existente
List::List(Nodo* head) : head(head) {}

// Destructor - implementa RAII (Resource Acquisition Is Initialization)
List::~List() {
    std::cout << "Destruyendo lista..." << std::endl;

    // Liberación iterativa de todos los nodos
    while (!isEmpty()) {
        Nodo* temp = head;    // Guarda referencia al nodo actual
        head = head->next;    // Avanza al siguiente nodo
        delete temp;          // Libera el nodo actual
    }
}

// Inserción al inicio - O(1) complejidad temporal
void List::push(int val) {
    Nodo* newNode = new Nodo(val);  // Crea nuevo nodo
    newNode->next = head;           // El nuevo nodo apunta al anterior primer nodo
    head = newNode;                 // El nuevo nodo se convierte en la cabeza
}

// Verificación de lista vacía - O(1) complejidad temporal
bool List::isEmpty() {
    return head == nullptr;
}

// Acceso al primer elemento - O(1) complejidad temporal
int List::getHead() {
    if (isEmpty()) 
        throw std::runtime_error("La lista está vacía");
    
    return head->value;
}

// Obtener sublista (cola) - O(1) complejidad temporal
// Nota: Crea una nueva lista que comparte nodos con la original
List* List::getTail() {
    if (isEmpty()) 
        throw std::runtime_error("La lista está vacía");
    
    return new List(head->next);
}

// Impresión recursiva de la lista
void List::print() {
    std::cout << "[LISTA] ";

    if (isEmpty()) {
        std::cout << "La lista está vacía." << std::endl;
        return;
    }

    head->print();           // Imprime el primer nodo
    getTail()->print();      // Llamada recursiva para el resto
}
```

**Análisis de Complejidad:**

- **push()**: O(1) - inserción directa al inicio
- **isEmpty()**: O(1) - simple verificación de puntero
- **getHead()**: O(1) - acceso directo al primer elemento
- **getTail()**: O(1) - creación de nueva lista compartiendo nodos
- **print()**: O(n) - debe visitar todos los nodos

**Consideraciones de Memoria:**

- **RAII**: El destructor garantiza la liberación automática de memoria
- **Compartición de nodos**: `getTail()` crea listas que comparten nodos, requiere cuidado
- **Gestión manual**: Uso de `new` y `delete` requiere disciplina en la gestión de memoria

**Patrones de Diseño Implementados:**

- **Constructor múltiple**: Diferentes formas de inicializar la lista
- **Validación de precondiciones**: Verificación antes de operaciones críticas
- **Recursión estructural**: `print()` aprovecha la estructura recursiva de la lista

## Programación Genérica

### 3.2.1 Templates - Generics

Los **templates** en C++ son una característica fundamental que permite crear clases y funciones genéricas que pueden operar con cualquier tipo de dato. Esta funcionalidad es especialmente valiosa para estructuras de datos como listas enlazadas, donde queremos que la lista pueda contener elementos de cualquier tipo (int, float, objetos personalizados, etc.) sin tener que escribir múltiples versiones de la misma clase o función.

#### Conceptos Fundamentales de Templates

**¿Qué son los Templates?**

Los templates son un mecanismo de **metaprogramación** que permite al compilador generar código específico para diferentes tipos de datos a partir de una única definición genérica. Esto se conoce como **programación genérica**.

**Proceso de Compilación:**

1. **Definición**: Se escribe el template con parámetros de tipo genérico
2. **Instanciación**: El compilador genera código específico para cada tipo usado
3. **Optimización**: El código generado es tan eficiente como el código escrito manualmente

#### Ventajas de la Programación Genérica

**1. Reutilización de código:**

- Una sola implementación para múltiples tipos
- Reduce duplicación y mantenimiento de código
- Consistencia en la implementación

**2. Seguridad de tipos:**

- Verificación de tipos en tiempo de compilación
- No hay overhead de runtime como en polimorfismo dinámico
- Detección temprana de errores de tipo

**3. Rendimiento:**

- Sin overhead de virtual functions
- Optimizaciones específicas por tipo
- Inlining más efectivo

**4. Flexibilidad:**

- Especialización para tipos específicos
- Parámetros de template no solo tipos (valores, funciones)
- Metaprogramación avanzada

#### Sintaxis de Templates

**Template básico:**

```cpp
template <typename T>
class MiClase {
    T dato;
public:
    MiClase(T valor) : dato(valor) {}
    T obtener() const { return dato; }
};
```

**Template con múltiples parámetros:**

```cpp
template <typename T, typename U>
class Par {
    T primero;
    U segundo;
public:
    Par(T p, U s) : primero(p), segundo(s) {}
};
```

#### Consideraciones Importantes

**Instanciación de Templates:**

Si trabajamos con archivos .hpp y .cpp separados, en el archivo .cpp debemos instanciar explícitamente los templates para los tipos que vamos a usar, ya que el compilador necesita ver la definición completa del template para generar el código adecuado.

```cpp
// En el archivo .cpp
template class Clase<int>;
template class Clase<double>;
template class Clase<std::string>;
template class Clase<MiClase>;
```

**Problemas Comunes:**

1. **Linking errors**: Cuando las definiciones no están disponibles
2. **Code bloat**: Múltiples instanciaciones pueden aumentar el tamaño del ejecutable
3. **Tiempo de compilación**: Templates complejos pueden ralentizar la compilación
4. **Mensajes de error**: Los errores de template pueden ser difíciles de interpretar

#### Especialización de Templates

**Especialización total:**

```cpp
template <>
class MiClase<bool> {
    // Implementación específica para bool
};
```

**Especialización parcial:**

```cpp
template <typename T>
class MiClase<T*> {
    // Implementación específica para punteros
};
```

![Templates - Generics](/img/algoritmos-y-estructuras-de-datos/templates-generics.webp)

#### Implementación de Nodo Genérico

La transformación de una estructura específica a una genérica requiere comprender cómo los templates permiten abstraer el tipo de dato manteniendo la funcionalidad completa. Esta implementación genérica del nodo demuestra los principios fundamentales de la programación con templates.

**Diseño Genérico del Nodo:**

```cpp
// Definición de la estructura del nodo genérico
template <typename T>
struct Nodo {
    T value;         // Valor del nodo de tipo genérico T
    Nodo<T>* next;   // Puntero al siguiente nodo del mismo tipo
    
    // Constructor explícito para evitar conversiones implícitas
    explicit Nodo(T val);
    
    // Método para imprimir - requiere que T soporte operator<<
    void print();
    
    // Destructor por defecto (el compilador genera uno apropiado)
    ~Nodo() = default;
};

// Implementación del constructor fuera de la clase
template <typename T>
Nodo<T>::Nodo(T val) : value(val), next(nullptr) {
    // Lista de inicialización para eficiencia
    // value se inicializa por copia del parámetro val
    // next se inicializa a nullptr para seguridad
}

// Implementación del método print
template <typename T>
void Nodo<T>::print() {
    std::cout << "[NODO] valor: " << value 
              << ", siguiente: " << next << std::endl;
    // Requiere que T tenga operator<< definido
    // Para tipos personalizados, debe implementarse este operador
}
```

**Análisis de la Implementación Genérica:**

**1. Declaración del Template:**

- `template <typename T>` define T como parámetro de tipo
- T puede ser cualquier tipo: primitivo, clase, struct, puntero, etc.
- La palabra clave `typename` es equivalente a `class` en este contexto

**2. Sintaxis de Referencia:**

- `Nodo<T>*` especifica que el puntero es al mismo tipo de nodo
- Sin `<T>`, el compilador no sabría a qué especialización del template se refiere

**3. Restricciones Implícitas:**

- El tipo T debe ser copiable (para el constructor)
- Para usar `print()`, T debe tener `operator<<` definido
- T debe tener constructor por defecto si se requiere inicialización sin parámetros

#### Consideraciones Avanzadas

**1. Gestión de Memoria Especializada:**

```cpp
template <typename T>
struct Nodo {
    T value;
    Nodo<T>* next;
    
    // Constructor que usa perfect forwarding para eficiencia
    template <typename U>
    explicit Nodo(U&& val) : value(std::forward<U>(val)), next(nullptr) {}
    
    // Método para verificar si T es un tipo puntero
    bool esValorPuntero() const {
        return std::is_pointer<T>::value;
    }
};
```

**2. Especialización para Tipos Específicos:**

```cpp
// Especialización para punteros - gestión especial de memoria
template <typename T>
struct Nodo<T*> {
    T* value;
    Nodo<T*>* next;
    
    explicit Nodo(T* val) : value(val), next(nullptr) {}
    
    // Destructor que libera la memoria del puntero
    ~Nodo() {
        delete value;
    }
    
    void print() {
        std::cout << "[NODO PTR] valor: " << *value 
                  << " (addr: " << value << "), siguiente: " << next << std::endl;
    }
};
```

**3. SFINAE (Substitution Failure Is Not An Error):**

```cpp
template <typename T>
struct Nodo {
    T value;
    Nodo<T>* next;
    
    explicit Nodo(T val) : value(val), next(nullptr) {}
    
    // Solo disponible si T tiene operator<<
    template <typename U = T>
    typename std::enable_if<std::is_arithmetic<U>::value>::type
    printNumeric() {
        std::cout << "[NODO NUMERIC] " << value << std::endl;
    }
};
```

#### Implementación de Lista Enlazada Genérica

La implementación genérica de la lista enlazada representa la evolución natural de la versión específica, incorporando todos los beneficios de la programación genérica mientras mantiene la funcionalidad y eficiencia de la implementación original.

**Diseño de la Clase Genérica:**

```cpp
// Definición de la clase Lista genérica
template <typename T>
class List {
public:
    // Constructores
    List();                          // Constructor por defecto
    explicit List(Nodo<T>* head);    // Constructor con nodo inicial
    List(const List<T>& other);      // Constructor de copia
    List(List<T>&& other) noexcept;  // Constructor de movimiento (C++11)
    
    // Destructor
    ~List();
    
    // Operadores de asignación
    List<T>& operator=(const List<T>& other);      // Asignación por copia
    List<T>& operator=(List<T>&& other) noexcept;  // Asignación por movimiento
    
    // Operaciones de modificación
    void push(const T& val);         // Agregar por copia
    void push(T&& val);              // Agregar por movimiento
    template <typename... Args>
    void emplace(Args&&... args);    // Construcción in-place
    
    void pop();                      // Eliminar primer elemento
    void clear();                    // Eliminar todos los elementos
    
    // Operaciones de acceso
    bool isEmpty() const noexcept;   // Verificar si está vacía
    T& getHead();                    // Obtener referencia al primer elemento
    const T& getHead() const;        // Versión const
    
    List<T> getTail() const;         // Obtener copia de la sublista
    size_t size() const;             // Obtener número de elementos
    
    // Operaciones de búsqueda
    bool contains(const T& val) const;
    typename List<T>::Iterator find(const T& val);
    
    // Métodos de utilidad
    void print() const;
    void reverse();
    
    // Clase Iterator interna para recorrido seguro
    class Iterator {
    public:
        explicit Iterator(Nodo<T>* node) : current(node) {}
        
        T& operator*() { return current->value; }
        Iterator& operator++() { 
            current = current->next; 
            return *this; 
        }
        Iterator operator++(int) {
            Iterator temp = *this;
            current = current->next;
            return temp;
        }
        bool operator!=(const Iterator& other) const {
            return current != other.current;
        }
        bool operator==(const Iterator& other) const {
            return current == other.current;
        }
        
    private:
        Nodo<T>* current;
    };
    
    // Métodos para iteradores
    Iterator begin() { return Iterator(head); }
    Iterator end() { return Iterator(nullptr); }

private:
    Nodo<T>* head;           // Puntero al primer nodo
    size_t node_count;       // Contador de nodos para eficiencia
    
    // Métodos privados auxiliares
    void copyFrom(const List<T>& other);
    void deleteAll();
};

// ===== IMPLEMENTACIONES =====

// Constructor por defecto
template <typename T>
List<T>::List() : head(nullptr), node_count(0) {}

// Constructor con nodo inicial
template <typename T>
List<T>::List(Nodo<T>* head) : head(head), node_count(0) {
    // Contar nodos existentes
    Nodo<T>* current = head;
    while (current != nullptr) {
        ++node_count;
        current = current->next;
    }
}

// Constructor de copia - implementa deep copy
template <typename T>
List<T>::List(const List<T>& other) : head(nullptr), node_count(0) {
    copyFrom(other);
}

// Constructor de movimiento
template <typename T>
List<T>::List(List<T>&& other) noexcept 
    : head(other.head), node_count(other.node_count) {
    other.head = nullptr;
    other.node_count = 0;
}

// Destructor con logging opcional
template <typename T>
List<T>::~List() {
    #ifdef DEBUG_LIST
    std::cout << "Destruyendo lista con " << node_count << " elementos..." << std::endl;
    #endif
    deleteAll();
}

// Operador de asignación por copia
template <typename T>
List<T>& List<T>::operator=(const List<T>& other) {
    if (this != &other) {  // Evitar auto-asignación
        deleteAll();
        copyFrom(other);
    }
    return *this;
}

// Operador de asignación por movimiento
template <typename T>
List<T>& List<T>::operator=(List<T>&& other) noexcept {
    if (this != &other) {
        deleteAll();
        head = other.head;
        node_count = other.node_count;
        other.head = nullptr;
        other.node_count = 0;
    }
    return *this;
}

// Inserción por copia
template <typename T>
void List<T>::push(const T& val) {
    Nodo<T>* newNode = new Nodo<T>(val);
    newNode->next = head;
    head = newNode;
    ++node_count;
}

// Inserción por movimiento (más eficiente para objetos costosos de copiar)
template <typename T>
void List<T>::push(T&& val) {
    Nodo<T>* newNode = new Nodo<T>(std::move(val));
    newNode->next = head;
    head = newNode;
    ++node_count;
}

// Construcción in-place usando perfect forwarding
template <typename T>
template <typename... Args>
void List<T>::emplace(Args&&... args) {
    Nodo<T>* newNode = new Nodo<T>(T(std::forward<Args>(args)...));
    newNode->next = head;
    head = newNode;
    ++node_count;
}

// Eliminación del primer elemento
template <typename T>
void List<T>::pop() {
    if (isEmpty()) 
        throw std::runtime_error("Cannot pop from empty list");
    
    Nodo<T>* temp = head;
    head = head->next;
    delete temp;
    --node_count;
}

// Verificación de lista vacía
template <typename T>
bool List<T>::isEmpty() const noexcept {
    return head == nullptr;
}

// Acceso al primer elemento (versión no-const)
template <typename T>
T& List<T>::getHead() {
    if (isEmpty()) 
        throw std::runtime_error("List is empty");

    return head->value;
}

// Acceso al primer elemento (versión const)
template <typename T>
const T& List<T>::getHead() const {
    if (isEmpty()) 
        throw std::runtime_error("List is empty");

    return head->value;
}

// Obtener sublista (implementación eficiente sin recursión)
template <typename T>
List<T> List<T>::getTail() const {
    if (isEmpty()) 
        throw std::runtime_error("Cannot get tail of empty list");
    
    List<T> result;
    Nodo<T>* current = head->next;
    
    // Construcción iterativa de la nueva lista
    while (current != nullptr) {
        result.push(current->value);
        current = current->next;
    }
    
    return result;
}

// Obtener tamaño (O(1) gracias al contador)
template <typename T>
size_t List<T>::size() const {
    return node_count;
}

// Búsqueda de elemento
template <typename T>
bool List<T>::contains(const T& val) const {
    Nodo<T>* current = head;
    while (current != nullptr) {
        if (current->value == val) 
            return true;

        current = current->next;
    }
    return false;
}

// Impresión iterativa (más eficiente que la recursiva)
template <typename T>
void List<T>::print() const {
    std::cout << "[LISTA GENERICA] ";
    
    if (isEmpty()) {
        std::cout << "Lista vacía." << std::endl;
        return;
    }
    
    std::cout << "Elementos (" << node_count << "): ";
    Nodo<T>* current = head;
    while (current != nullptr) {
        std::cout << current->value;
        if (current->next != nullptr) {
            std::cout << " -> ";
        }
        current = current->next;
    }
    std::cout << " -> NULL" << std::endl;
}

// Método auxiliar para copia profunda
template <typename T>
void List<T>::copyFrom(const List<T>& other) {
    if (other.isEmpty()) 
        return;
    
    // Copia iterativa para evitar stack overflow en listas grandes
    Nodo<T>* other_current = other.head;
    Nodo<T>* last_created = nullptr;
    
    while (other_current != nullptr) {
        Nodo<T>* newNode = new Nodo<T>(other_current->value);
        
        if (head == nullptr) 
            head = newNode;
        else 
            last_created->next = newNode;
        
        last_created = newNode;
        other_current = other_current->next;
        ++node_count;
    }
}

// Método auxiliar para liberación de memoria
template <typename T>
void List<T>::deleteAll() {
    while (!isEmpty()) {
        Nodo<T>* temp = head;
        head = head->next;
        delete temp;
    }

    node_count = 0;
}
```

#### Características Avanzadas de la Implementación

**1. Semántica de Movimiento (C++11+):**

- Constructores y operadores de movimiento para eficiencia
- Uso de `std::move` para evitar copias innecesarias
- Perfect forwarding con `emplace` para construcción in-place

**2. Gestión Robusta de Memoria:**

- RAII garantiza liberación automática
- Protección contra auto-asignación
- Deep copy vs shallow copy apropiadamente manejados

**3. Iteradores Seguros:**

- Implementación de iterator pattern
- Compatible con range-based for loops
- Verificación de límites implícita

**4. Optimizaciones de Rendimiento:**

- Contador de nodos para `size()` O(1)
- Implementaciones iterativas para evitar stack overflow
- Versiones const y no-const apropiadas

**5. Características de Tipo:**

```cpp
// Ejemplo de uso con diferentes tipos
List<int> lista_enteros;
List<std::string> lista_strings;
List<std::unique_ptr<MiClase>> lista_smart_ptrs;

// Uso con emplace para eficiencia
lista_strings.emplace("Texto", 5, 'x'); // Construye string("xxxxx")
```

## Vectores

### 3.3.1 Características de los vectores

Un **vector** es una estructura de datos que almacena elementos en un bloque contiguo de memoria, permitiendo el acceso rápido a los elementos mediante índices. A diferencia de los arreglos tradicionales, los vectores pueden redimensionarse dinámicamente, lo que facilita la gestión de colecciones de datos cuyo tamaño puede variar durante la ejecución del programa.

#### Implementación en C++

Los vectores se implementan comúnmente en C++ a través de la clase `std::vector` de la biblioteca estándar (STL - Standard Template Library). Esta implementación combina las ventajas de los arreglos (acceso rápido) con la flexibilidad de las estructuras dinámicas.

#### Características Principales

**1. Memoria Contigua:**

- Los elementos están almacenados consecutivamente en memoria
- Excelente localidad espacial para el cache del procesador
- Permite aritmética de punteros y acceso directo por índice

**2. Redimensionamiento Dinámico:**

- Capacidad para crecer automáticamente cuando se necesita más espacio
- Estrategia de crecimiento exponencial para amortizar el costo de realocación
- Típicamente duplica la capacidad cuando se agota el espacio

**3. Gestión Automática de Memoria:**

- Allocación y deallocación automática de memoria
- RAII (Resource Acquisition Is Initialization)
- Destructor automático de elementos

**4. Interfaz Rica:**

- Amplia gama de métodos para manipulación de datos
- Compatibilidad con algoritmos STL
- Iteradores para recorrido seguro

#### Categorías de Operaciones

**Operaciones de Modificación:**

- `push_back()`: Agregar elemento al final - O(1) amortizado
- `pop_back()`: Eliminar último elemento - O(1)
- `insert()`: Insertar en posición específica - O(n)
- `erase()`: Eliminar elemento(s) - O(n)
- `clear()`: Eliminar todos los elementos - O(n)

**Operaciones de Acceso:**

- `operator[]`: Acceso directo sin verificación de límites - O(1)
- `at()`: Acceso con verificación de límites - O(1)
- `front()`: Primer elemento - O(1)
- `back()`: Último elemento - O(1)
- `data()`: Puntero al array subyacente - O(1)

**Operaciones de Iteración:**

- `begin()`: Iterador al inicio - O(1)
- `end()`: Iterador al final - O(1)
- `rbegin()`: Iterador reverso al inicio - O(1)
- `rend()`: Iterador reverso al final - O(1)

**Operaciones de Capacidad:**

- `size()`: Número actual de elementos - O(1)
- `capacity()`: Espacio total allocated - O(1)
- `max_size()`: Máximo número posible de elementos - O(1)
- `empty()`: Verificar si está vacío - O(1)
- `reserve()`: Reservar capacidad mínima - O(n) en el peor caso
- `shrink_to_fit()`: Reducir capacidad al tamaño actual - O(n)

#### Gestión de Memoria Interna

**Estrategia de Crecimiento:**

Cuando un vector necesita más espacio:

1. Alloca un nuevo bloque de memoria (típicamente 2x el tamaño actual)
2. Copia/mueve todos los elementos existentes al nuevo bloque
3. Libera el bloque de memoria anterior
4. Actualiza los punteros internos

**Factor de Crecimiento:**

- Típicamente 1.5 o 2.0 dependiendo de la implementación
- Balance entre uso de memoria y eficiencia de realocación
- Crecimiento exponencial garantiza complejidad amortizada O(1) para `push_back()`

#### Ventajas de los Vectores

1. **Acceso aleatorio eficiente**: O(1) para acceder a cualquier elemento
2. **Cache-friendly**: Excelente localidad espacial de memoria
3. **Compatibilidad**: Funciona con toda la STL y algoritmos estándar
4. **Gestión automática**: No requiere manejo manual de memoria
5. **Flexibilidad**: Tamaño dinámico con rendimiento de array

#### Desventajas de los Vectores

1. **Inserciones/eliminaciones costosas**: O(n) en posiciones intermedias
2. **Realocación ocasional**: Puede ser costosa cuando se agota la capacidad
3. **Uso de memoria**: Puede tener capacidad sin usar
4. **Invalidación de iteradores**: Las realocaciones invalidan punteros/iteradores

![Vectores](/img/algoritmos-y-estructuras-de-datos/vectores.webp)

### 3.3.2 Implementación básica de un vector

La siguiente implementación demuestra el uso práctico de `std::vector` y sus operaciones más importantes. Este ejemplo ilustra conceptos fundamentales como inicialización, manipulación de datos, gestión de capacidad y diferentes métodos de acceso a elementos.

#### Ejemplo Completo con Análisis

```cpp
#include <iostream>
#include <vector>

int main() {
    // 1. CREACIÓN E INICIALIZACIÓN
    // Constructor por defecto - crea vector vacío
    std::vector<int> vec;
    
    // Vector con tamaño inicial y valor por defecto
    std::vector<int> vec_sized(10, 5); // 10 elementos, todos con valor 5
    
    // Vector inicializado con lista
    std::vector<int> vec_init = {1, 2, 3, 4, 5};

    // 2. OPERACIONES DE INSERCIÓN
    // push_back() - Complejidad: O(1) amortizado
    std::cout << "=== INSERTANDO ELEMENTOS ===" << std::endl;
    for (int i = 0; i < 5; ++i) {
        vec.push_back(i); // Agrega 0, 1, 2, 3, 4
        std::cout << "Agregado: " << i << ", Tamaño: " << vec.size() 
                  << ", Capacidad: " << vec.capacity() << std::endl;
    }
    
    // 3. ACCESO A ELEMENTOS
    std::cout << "\n=== ACCESO A ELEMENTOS ===" << std::endl;
    
    // Acceso mediante índice (sin verificación de límites)
    std::cout << "Elementos del vector (operator[]): ";
    for (size_t i = 0; i < vec.size(); ++i) {
        std::cout << vec[i] << " "; // O(1) - acceso directo
    }
    std::cout << std::endl;

    // 4. ITERADORES
    std::cout << "\n=== USANDO ITERADORES ===" << std::endl;
    
    // Iterador tradicional
    std::cout << "Elementos (iterador tradicional): ";
    for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;
    
    // Iterador auto (C++11+)
    std::cout << "Elementos (auto iterator): ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;
    
    // Range-based for loop (C++11+)
    std::cout << "Elementos (range-based for): ";
    for (const auto& elemento : vec) {
        std::cout << elemento << " ";
    }
    std::cout << std::endl;

    // 5. INFORMACIÓN DE CAPACIDAD
    std::cout << "\n=== INFORMACIÓN DEL VECTOR ===" << std::endl;
    std::cout << "Tamaño actual: " << vec.size() << std::endl;
    std::cout << "Capacidad: " << vec.capacity() << std::endl;
    std::cout << "Tamaño máximo teórico: " << vec.max_size() << std::endl;
    std::cout << "¿Está vacío?: " << (vec.empty() ? "Sí" : "No") << std::endl;
    
    // 6. GESTIÓN DE CAPACIDAD
    std::cout << "\n=== GESTIÓN DE CAPACIDAD ===" << std::endl;
    size_t capacidad_inicial = vec.capacity();
    
    // reserve() - reserva espacio sin cambiar el tamaño
    vec.reserve(20);
    std::cout << "Después de reserve(20) - Tamaño: " << vec.size() 
              << ", Capacidad: " << vec.capacity() << std::endl;
    
    // resize() - cambia el tamaño del vector
    vec.resize(8); // Reduce a 8 elementos
    std::cout << "Después de resize(8) - Tamaño: " << vec.size() 
              << ", Capacidad: " << vec.capacity() << std::endl;

    // 7. MÉTODOS DE ACCESO ESPECÍFICOS
    std::cout << "\n=== MÉTODOS DE ACCESO ===" << std::endl;
    
    if (!vec.empty()) {
        // Acceso seguro con verificación de límites
        try {
            std::cout << "vec[2]: " << vec[2] << std::endl;                    // Acceso directo
            std::cout << "vec.at(3): " << vec.at(3) << std::endl;             // Acceso con verificación
            std::cout << "vec.front(): " << vec.front() << std::endl;         // Primer elemento
            std::cout << "vec.back(): " << vec.back() << std::endl;           // Último elemento
            
            // Acceso al array subyacente
            int* ptr = vec.data();
            std::cout << "Primer elemento via data(): " << *ptr << std::endl;
            
        } catch (const std::out_of_range& e) {
            std::cout << "Error de acceso: " << e.what() << std::endl;
        }
    }
    
    // 8. OPERACIONES DE MODIFICACIÓN AVANZADAS
    std::cout << "\n=== OPERACIONES AVANZADAS ===" << std::endl;
    
    // insert() - insertar en posición específica
    auto it_insert = vec.begin() + 2;
    vec.insert(it_insert, 99); // Inserta 99 en la posición 2
    
    std::cout << "Después de insertar 99 en posición 2: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;
    
    // erase() - eliminar elemento específico
    auto it_erase = vec.begin() + 2;
    vec.erase(it_erase); // Elimina el elemento en posición 2
    
    std::cout << "Después de eliminar elemento en posición 2: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;
    
    // 9. COMPARACIÓN DE RENDIMIENTO
    std::cout << "\n=== ANÁLISIS DE RENDIMIENTO ===" << std::endl;
    
    // Demostración del crecimiento de capacidad
    std::vector<int> vec_growth;
    std::cout << "Crecimiento de capacidad:" << std::endl;
    
    for (int i = 0; i < 10; ++i) {
        size_t old_capacity = vec_growth.capacity();
        vec_growth.push_back(i);
        size_t new_capacity = vec_growth.capacity();
        
        if (new_capacity != old_capacity) {
            std::cout << "Realocación: de " << old_capacity 
                      << " a " << new_capacity << " elementos" << std::endl;
        }
    }

    return 0;
}
```

#### Análisis del Código

**1. Inicialización Multiple:**

- Constructor por defecto para vectores vacíos
- Constructor con tamaño y valor para inicialización uniforme
- Lista de inicialización para valores específicos

**2. Estrategias de Acceso:**

- `operator[]`: Más rápido, sin verificación de límites
- `at()`: Más seguro, lanza excepción si está fuera de rango
- Iteradores: Más flexible, compatible con algoritmos STL

**3. Gestión de Memoria:**

- `reserve()`: Optimiza el rendimiento pre-allocando memoria
- `resize()`: Cambia el tamaño efectivo del vector
- Crecimiento automático con factor de multiplicación

**4. Patrones de Uso Común:**

- Range-based for loops para recorrido simple
- Iteradores para operaciones complejas
- Verificación de `empty()` antes del acceso

**5. Optimizaciones:**

- Uso de `reserve()` cuando se conoce el tamaño aproximado
- Preferir `emplace_back()` sobre `push_back()` para objetos complejos
- Considerar `shrink_to_fit()` después de grandes reducciones de tamaño

## 📚 Ejemplos Prácticos y Casos de Uso

### Ejemplo Comparativo: Lista vs Vector

Para ilustrar las diferencias prácticas entre listas enlazadas y vectores, consideremos un escenario de gestión de inventario donde necesitamos realizar diferentes tipos de operaciones.

#### Escenario: Sistema de Gestión de Inventario

```cpp
#include <iostream>
#include <vector>
#include <chrono>
#include <random>

// Estructura para representar un producto
struct Producto {
    int id;
    std::string nombre;
    double precio;
    int stock;
    
    Producto(int i, std::string n, double p, int s) 
        : id(i), nombre(std::move(n)), precio(p), stock(s) {}
    
    friend std::ostream& operator<<(std::ostream& os, const Producto& p) {
        return os << "ID:" << p.id << " " << p.nombre << " $" << p.precio;
    }
};

// Clase para medir tiempo de ejecución
class Cronometro {
    std::chrono::high_resolution_clock::time_point inicio;
public:
    void start() { inicio = std::chrono::high_resolution_clock::now(); }
    
    double elapsed_ms() {
        auto fin = std::chrono::high_resolution_clock::now();
        auto duracion = std::chrono::duration_cast<std::chrono::microseconds>(fin - inicio);
        return duracion.count() / 1000.0;
    }
};

void comparacionRendimiento() {
    const int NUM_PRODUCTOS = 10000;
    Cronometro timer;
    
    // ===== PRUEBA CON VECTOR =====
    std::cout << "=== PRUEBA CON VECTOR ===" << std::endl;
    std::vector<Producto> inventario_vector;
    inventario_vector.reserve(NUM_PRODUCTOS); // Optimización importante
    
    // Inserción al final (caso común en inventarios)
    timer.start();
    for (int i = 0; i < NUM_PRODUCTOS; ++i) {
        inventario_vector.emplace_back(i, "Producto" + std::to_string(i), 
                                      10.0 + i * 0.5, 100 - i % 50);
    }
    std::cout << "Inserción de " << NUM_PRODUCTOS << " productos: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // Acceso aleatorio (búsqueda por índice)
    timer.start();
    double suma_precios = 0;
    for (int i = 0; i < NUM_PRODUCTOS; i += 100) {
        suma_precios += inventario_vector[i].precio; // O(1)
    }
    std::cout << "Acceso aleatorio a 100 elementos: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // Inserción en el medio (reorganización de inventario)
    timer.start();
    auto it = inventario_vector.begin() + NUM_PRODUCTOS / 2;
    inventario_vector.insert(it, Producto(99999, "Producto_Especial", 999.99, 1));
    std::cout << "Inserción en el medio: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // ===== PRUEBA CON LISTA ENLAZADA =====
    std::cout << "\n=== PRUEBA CON LISTA ENLAZADA ===" << std::endl;
    List<Producto> inventario_lista;
    
    // Inserción al inicio (característica natural de listas)
    timer.start();
    for (int i = 0; i < NUM_PRODUCTOS; ++i) {
        inventario_lista.emplace(i, "Producto" + std::to_string(i), 
                                10.0 + i * 0.5, 100 - i % 50);
    }
    std::cout << "Inserción de " << NUM_PRODUCTOS << " productos: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // Acceso secuencial (recorrido completo)
    timer.start();
    double suma_precios_lista = 0;
    int contador = 0;
    for (const auto& producto : inventario_lista) {
        if (contador % 100 == 0) {
            suma_precios_lista += producto.precio;
        }
        ++contador;
    }
    std::cout << "Acceso secuencial con filtro: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // Inserción al inicio (muy eficiente en listas)
    timer.start();
    inventario_lista.emplace(99999, "Producto_Especial", 999.99, 1);
    std::cout << "Inserción al inicio: " 
              << timer.elapsed_ms() << " ms" << std::endl;
    
    // Comparación de uso de memoria
    size_t memoria_vector = inventario_vector.capacity() * sizeof(Producto);
    size_t memoria_lista = inventario_lista.size() * (sizeof(Producto) + sizeof(void*));
    
    std::cout << "\n=== COMPARACIÓN DE MEMORIA ===" << std::endl;
    std::cout << "Vector - Memoria usada: " << memoria_vector / 1024 << " KB" << std::endl;
    std::cout << "Lista - Memoria usada: " << memoria_lista / 1024 << " KB" << std::endl;
    std::cout << "Overhead de punteros en lista: " 
              << ((memoria_lista - memoria_vector) * 100.0 / memoria_vector) 
              << "%" << std::endl;
}
```

### Casos de Uso Recomendados

#### Cuándo usar Vectores (`std::vector`)

**1. Aplicaciones numéricas y científicas:**

```cpp
// Procesamiento de señales digitales
std::vector<double> muestras_audio(48000); // 1 segundo a 48kHz
for (size_t i = 0; i < muestras_audio.size(); ++i) {
    muestras_audio[i] = std::sin(2 * M_PI * 440 * i / 48000); // 440Hz
}

// Operaciones vectorizadas eficientes
std::transform(muestras_audio.begin(), muestras_audio.end(),
               muestras_audio.begin(),
               [](double x) { return x * 0.5; }); // Reducir volumen
```

**2. Buffers y caches:**

```cpp
class BufferCircular {
    std::vector<int> buffer;
    size_t head, tail, count;
    
public:
    BufferCircular(size_t size) : buffer(size), head(0), tail(0), count(0) {}
    
    void push(int value) {
        buffer[tail] = value;
        tail = (tail + 1) % buffer.size();
        if (count < buffer.size()) ++count;
        else head = (head + 1) % buffer.size();
    }
    
    int get(size_t index) const {
        return buffer[(head + index) % buffer.size()]; // O(1)
    }
};
```

**3. Matrices y estructuras multidimensionales:**

```cpp
class Matriz2D {
    std::vector<std::vector<double>> datos;
    
public:
    Matriz2D(size_t filas, size_t columnas) 
        : datos(filas, std::vector<double>(columnas, 0.0)) {}
    
    double& operator()(size_t i, size_t j) {
        return datos[i][j]; // Acceso O(1)
    }
    
    void multiplicar_escalar(double escalar) {
        for (auto& fila : datos) {
            for (auto& elemento : fila) {
                elemento *= escalar; // Vectorización eficiente
            }
        }
    }
};
```

#### Cuándo usar Listas Enlazadas

**1. Implementación de otras estructuras de datos:**

```cpp
// Pila (Stack) usando lista enlazada
template <typename T>
class Stack {
    List<T> elementos;
    
public:
    void push(const T& valor) { elementos.push(valor); } // O(1)
    T pop() { 
        T valor = elementos.getHead();
        elementos.pop();
        return valor;
    } // O(1)
    bool empty() const { return elementos.isEmpty(); }
};

// Cola (Queue) con lista doblemente enlazada
template <typename T>
class Queue {
    struct Nodo {
        T value;
        Nodo* next;
        Nodo* prev;
    };
    Nodo* front;
    Nodo* back;
    
public:
    void enqueue(const T& valor); // O(1) al final
    T dequeue();                  // O(1) al inicio
};
```

**2. Listas de elementos con tamaño muy variable:**

```cpp
// Sistema de notificaciones donde el número cambia constantemente
class SistemaNotificaciones {
    List<std::string> notificaciones_pendientes;
    
public:
    void agregar_notificacion(const std::string& mensaje) {
        notificaciones_pendientes.push(mensaje); // O(1)
    }
    
    void procesar_notificaciones() {
        while (!notificaciones_pendientes.isEmpty()) {
            std::cout << "Procesando: " << notificaciones_pendientes.getHead() << std::endl;
            notificaciones_pendientes.pop(); // O(1)
        }
    }
};
```

**3. Implementación de algoritmos que requieren inserción/eliminación frecuente:**

```cpp
// Algoritmo de ordenamiento por inserción optimizado para listas
template <typename T>
void insertion_sort_lista(List<T>& lista) {
    if (lista.size() <= 1) return;
    
    List<T> ordenada;
    
    while (!lista.isEmpty()) {
        T elemento = lista.getHead();
        lista.pop();
        
        // Insertar en posición correcta en lista ordenada
        insertar_ordenado(ordenada, elemento); // O(n) pero sin desplazamientos
    }
    
    lista = std::move(ordenada);
}
```

### Conclusiones y Mejores Prácticas

#### Guías de Decisión

**Prefiera vectores cuando:**

- Necesite acceso aleatorio frecuente (por índice)
- Realice operaciones numéricas intensivas
- El tamaño sea relativamente estable
- La eficiencia de memoria sea crítica
- Necesite compatibilidad con APIs de C

**Prefiera listas enlazadas cuando:**

- Las inserciones/eliminaciones sean frecuentes
- El tamaño varíe dramáticamente
- No necesite acceso aleatorio
- Implemente estructuras de datos más complejas
- La predictibilidad del tiempo de inserción sea importante

#### Optimizaciones Generales

**Para vectores:**

1. Use `reserve()` cuando conozca el tamaño aproximado
2. Prefiera `emplace_back()` sobre `push_back()` para objetos complejos
3. Considere `shrink_to_fit()` después de reducciones significativas
4. Use iteradores en lugar de índices para compatibilidad con algoritmos STL

**Para listas enlazadas:**

1. Mantenga referencias a nodos frecuentemente accedidos
2. Considere listas doblemente enlazadas para eliminación eficiente
3. Implemente pool de memoria para reducir fragmentación
4. Use smart pointers para gestión automática de memoria en implementaciones complejas

Esta comprensión profunda de las estructuras lineales permite tomar decisiones informadas sobre cuál usar en cada situación específica, optimizando tanto el rendimiento como la mantenibilidad del código.
