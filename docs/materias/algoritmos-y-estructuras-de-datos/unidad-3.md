---
title: "Unidad 3: Estructuras lineales"
description: ""
sidebar_position: 3
tags: [informatica, algoritmos, estructuras-de-datos, listas, vectores, nodos]
last_update:
  date: 2025-09-04
  author: Agustin Arenas
---

## Listas enlazadas

Una lista enlazada es una estructura de datos lineal que consiste en una secuencia de elementos, donde cada elemento (nodo) contiene un valor y una referencia (enlace) al siguiente nodo en la secuencia. A diferencia de los arreglos, las listas enlazadas no requieren un bloque contiguo de memoria, lo que permite una inserción y eliminación más eficiente de elementos.

### Listas vs Arreglos

- **Arreglos:**
  - Tamaño fijo.
  - Acceso rápido a elementos mediante índices.
  - Requiere un bloque contiguo de memoria.
  - Inserciones y eliminaciones pueden ser costosas (O(n)).
- **Listas enlazadas:**
  - Tamaño dinámico.
  - Acceso secuencial a elementos.
  - No requiere memoria contigua.
  - Inserciones y eliminaciones son eficientes (O(1) si se tiene el puntero al nodo anterior).

### Estructura recursiva de una lista enlazada

Un lista tiene una estructura recursiva porque cada nodo contiene un valor y un puntero al siguiente nodo, que a su vez tiene la misma estructura. Esto permite definir operaciones sobre la lista de manera recursiva. Por ejemplo:

- Acceder al primer elemento (n) => siguiente elemento (n-1)
- Acceder al elemento (n-1) => siguiente elemento (n-2)
- ...
- Acceder al último elemento (1) => siguiente elemento (0) => NULL (comienzo de la lista)

### Implementación de Nodo

```cpp
// Definición de la estructura del nodo
struct Nodo {
    int value;     // Valor del nodo
    Nodo* next;    // Puntero al siguiente nodo
    Nodo(int val); // Constructor
    void print(); // Método para imprimir el nodo
};

// Implementación del constructor
Nodo::Nodo(int val) : value(val), next(nullptr) {}

// Implementación del método print
void Nodo::print() {
    std::cout << "[NODO] valor: " << value << ", siguiente: " << next << std::endl;
}
```

### Implementación de Lista Enlazada

```cpp
// Definición de la clase Lista
class List {
public:
    List();             // Constructor
    List(Nodo* head);   // Constructor con nodo inicial
    ~List();            // Destructor
    void push(int val); // Agregar al inicio
    bool isEmpty();     // Verificar si está vacía
    int getHead();      // Obtener valor del primer nodo
    List* getTail();    // Obtener la sublista sin el primer nodo
    void print();       // Imprimir la lista
private:
    Nodo* head;         // Puntero al primer nodo
};

// Implementación del constructor
List::List() : head(nullptr) {}
List::List(Nodo* head) : head(head) {}

// Implementación del destructor
List::~List() {
    std::cout << "Destruyendo lista..." << std::endl;
    while (!isEmpty()) {
        Nodo* temp = head;
        head = head->next;
        delete temp;
    }
}

// Implementación del método push
void List::push(int val) {
    auto Nodo* newNode = new Nodo(val);
    newNode->next = head;
    head = newNode;
}

// Implementación del método isEmpty
bool List::isEmpty() {
    return head == nullptr;
}

// Implementación del método getHead
int List::getHead() {
    if (isEmpty()) {
        throw std::runtime_error("La lista está vacía");
    }
    return head->value;
}

// Implementación del método getTail
List* List::getTail() {
    if (isEmpty()) {
        throw std::runtime_error("La lista está vacía");
    }
    return new List(head->next);
}

// Implementación del método print
void List::print() {
    std::cout << "[LISTA] ";
    if (isEmpty()) {
        std::cout << "La lista está vacía." << std::endl;
        return;
    }
    head->print();
    getTail()->print();
}
```

## Templates - Generics

Los templates en C++ permiten crear clases y funciones genéricas que pueden operar con cualquier tipo de dato. Esto es especialmente útil para estructuras de datos como listas enlazadas, donde queremos que la lista pueda contener elementos de cualquier tipo (int, float, objetos personalizados, etc.) sin tener que escribir múltiples versiones de la misma clase o función.

### Implementación de Nodo Genérico

```cpp
// Definición de la estructura del nodo genérico
template <typename T>
struct Nodo {
    T value;       // Valor del nodo de tipo genérico
    Nodo* next;    // Puntero al siguiente nodo
    Nodo(T val);   // Constructor
    void print();  // Método para imprimir el nodo
};

// Implementación del constructor
template <typename T>
Nodo<T>::Nodo(T val) : value(val), next(nullptr) {}

// Implementación del método print
template <typename T>
void Nodo<T>::print() {
    std::cout << "[NODO] valor: " << value << ", siguiente: " << next << std::endl;
}
```

### Implementación de Lista Enlazada Genérica

```cpp
// Definición de la clase Lista genérica
template <typename T>
class List {
public:
    List();              // Constructor
    List(Nodo<T>* head); // Constructor con nodo inicial
    ~List();             // Destructor
    void push(T val);    // Agregar al inicio
    bool isEmpty();      // Verificar si está vacía
    T getHead();         // Obtener valor del primer nodo
    List* getTail();     // Obtener la sublista sin el primer nodo
    void print();        // Imprimir la lista

private:
    Nodo<T>* head;       // Puntero al primer nodo
};

// Implementación del constructor
template <typename T>
List<T>::List() : head(nullptr) {}
template <typename T>
List<T>::List(Nodo<T>* head) : head(head) {}

// Implementación del destructor
template <typename T>
List<T>::~List() {
    std::cout << "Destruyendo lista..." << std::endl;

    while (!isEmpty()) {
        Nodo<T>* temp = head;
        head = head->next;

        delete temp;
    }
}

// Implementación del método push
template <typename T>
void List<T>::push(T val) {
    auto Nodo<T>* newNode = new Nodo<T>(val);
    newNode->next = head;
    head = newNode;
}

// Implementación del método isEmpty
template <typename T>
bool List<T>::isEmpty() {
    return head == nullptr;
}

// Implementación del método getHead
template <typename T>
T List<T>::getHead() {
    if (isEmpty()) {
        throw std::runtime_error("La lista está vacía");
    }

    return head->value;
}

// Implementación del método getTail
template <typename T>
List<T>* List<T>::getTail() {
    if (isEmpty()) {
        throw std::runtime_error("La lista está vacía");
    }

    return new List<T>(head->next);
}

// Implementación del método print
template <typename T>
void List<T>::print() {
    std::cout << "[LISTA] ";

    if (isEmpty()) {
        std::cout << "La lista está vacía." << std::endl;
        return;
    }

    head->print();
    getTail()->print();
}
```

## Vectores

Un vector es una estructura de datos que almacena elementos en un bloque contiguo de memoria, permitiendo el acceso rápido a los elementos mediante índices. A diferencia de los arreglos tradicionales, los vectores pueden redimensionarse dinámicamente, lo que facilita la gestión de colecciones de datos cuyo tamaño puede variar.
Se implementan comúnmente en C++ a través de la clase `std::vector` de la biblioteca estándar.
Tienen funciones miembro para agregar, eliminar y acceder a elementos, así como para gestionar la capacidad y el tamaño del vector.

### Implementación básica de un vector

```cpp
#include <iostream>
#include <vector>

int main() {
    // Crear un vector de enteros
    std::vector<int> vec;

    // Agregar elementos al vector
    for (int i = 0; i < 5; ++i) 
        vec.push_back(i); // Agrega 0, 1, 2, 3, 4
    
    // Acceder a elementos del vector
    std::cout << "Elementos del vector: ";
    for (int i = 0; i < vec.size(); ++i) 
        std::cout << vec[i] << " "; // Acceso mediante índice
    std::cout << std::endl;

    // Acceder mediante iteradores
    std::cout << "Elementos del vector (usando iteradores): ";
    for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) 
        std::cout << *it << " "; // Acceso mediante iterador
    std::cout << std::endl;

    // Tamaño y capacidad del vector
    std::cout << "Tamaño del vector: " << vec.size() << std::endl;
    std::cout << "Capacidad del vector: " << vec.capacity() << std::endl;
    std::cout << "Tamaño máximo del vector: " << vec.max_size() << std::endl;
    
    // Redimensionar el vector
    vec.resize(4); // Cambia el tamaño a 4
    std::cout << "Tamaño del vector después de redimensionar: " << vec.size() << std::endl;

    // Mostrar elementos después de redimensionar
    std::cout << "Elementos del vector después de redimensionar: ";
    for (int i = 0; i < vec.size(); ++i) 
        std::cout << vec[i] << " ";
    std::cout << std::endl;

    // Verificar si el vector está vacío
    if(!vec.empty())
        std::cout << "El vector no está vacío." << std::endl;
    else
        std::cout << "El vector está vacío." << std::endl;
    
    std::cout << "vec[2]: " << vec[2] << std::endl; // Acceso al tercer elemento
    std::cout << "vec.at(3): " << vec.at(3) << std::endl; // Acceso al cuarto elemento con verificación de límites
    std::cout << "vec.front(): " << vec.front() << std::endl; // Primer elemento
    std::cout << "vec.back(): " << vec.back() << std::endl; // Último elemento

    return 0;
}
```
