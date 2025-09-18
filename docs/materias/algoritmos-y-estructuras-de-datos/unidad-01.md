---
title: "Unidad 1: Fundamentos de C++ y Gestión de Memoria"
description: "Algoritmos y Estructuras de Datos - Unidad 1: Punteros, gestión de memoria, estructuras de datos básicas, programación orientada a objetos y templates en C++"
sidebar_position: 1
tags: [algoritmos, estructuras-de-datos, programacion, punteros, memoria, cpp, oop, templates]
---

## 🎯 Objetivos de Aprendizaje

### Objetivo General

Comprender y aplicar los conceptos fundamentales de C++ necesarios para el desarrollo de algoritmos y estructuras de datos eficientes, incluyendo gestión de memoria, programación orientada a objetos y programación genérica.

### Objetivos Específicos

Al finalizar esta unidad, el estudiante será capaz de:

- Manipular punteros y gestionar memoria dinámica de forma segura y eficiente
- Distinguir entre memoria stack y heap, aplicando cada una según el contexto apropiado
- Implementar estructuras y clases con constructores, destructores y métodos especializados
- Aplicar conceptos de herencia, polimorfismo y encapsulación en diseños orientados a objetos
- Desarrollar código genérico utilizando templates para maximizar la reutilización
- Identificar y prevenir problemas comunes como memory leaks y errores de punteros

## 📋 Contenidos y recursos

### 1.1 Punteros y Referencias

- **1.1.1** Conceptos fundamentales y declaración de punteros
- **1.1.2** Operadores de dirección y desreferenciación
- **1.1.3** Aritmética de punteros y punteros a punteros

### 1.2 Gestión de Memoria

- **1.2.1** Memoria dinámica con new y delete
- **1.2.2** Stack vs Heap: características y usos
- **1.2.3** Memory leaks y técnicas de prevención

### 1.3 Estructuras y Clases

- **1.3.1** Definición de estructuras y diferencias con clases
- **1.3.2** Constructores especiales y destructores
- **1.3.3** Métodos de inicialización y gestión de recursos

### 1.4 Programación Orientada a Objetos

- **1.4.1** Encapsulación y niveles de acceso
- **1.4.2** Herencia y polimorfismo
- **1.4.3** Características avanzadas: métodos virtuales, clases abstractas

### 1.5 Tipos de Datos Avanzados

- **1.5.1** Uniones (unions) y enumeraciones (enums)
- **1.5.2** Combinación de tipos para estructuras complejas
- **1.5.3** Optimización de memoria y uso eficiente

### 1.6 Programación Genérica

- **1.6.1** Templates de funciones y clases
- **1.6.2** Especialización de templates
- **1.6.3** Consideraciones de rendimiento y memoria

### 🔗 Recursos Complementarios

- [OOP y Punteros](https://res.cloudinary.com/dmwto06rn/raw/upload/v1758237788/pdfs/OOP_y_punteros_pl52uk.pdf)

## Primer tema: 1.1 Punteros y Referencias

### 1.1.1 Conceptos fundamentales y declaración de punteros

Un **puntero** es una variable especial que almacena la dirección de memoria donde reside otro objeto. Esta característica fundamental permite la implementación eficiente de estructuras de datos dinámicas y algoritmos complejos.

#### ¿Por qué son importantes los punteros?

Los punteros resuelven limitaciones fundamentales de los arreglos estáticos:

**Problema con arreglos contiguos:**

- **Tamaño fijo**: Definido en tiempo de compilación
- **Inserción costosa**: Insertar en el medio requiere desplazar todos los elementos posteriores
- **Fragmentación**: Necesitan bloques grandes de memoria contigua

**Solución con punteros:**

- **Memoria no contigua**: Cada elemento puede estar en cualquier ubicación de memoria
- **Tamaño dinámico**: Se puede crecer o decrecer durante la ejecución
- **Inserción eficiente**: Solo requiere cambiar enlaces entre elementos
- **Flexibilidad**: Permite estructuras como listas enlazadas, árboles, grafos

#### Anatomía de un puntero

Un puntero contiene dos aspectos importantes:

1. **Valor**: La dirección de memoria que almacena
2. **Tipo**: El tipo de dato al que apunta (determina cómo interpretar la memoria)

```cpp
// Esquema conceptual de memoria
// Dirección    | Contenido
// 0x1000      | int valor = 42
// 0x2000      | int* ptr = 0x1000
```

#### Declaración y sintaxis

**Sintaxis básica:**

```cpp
tipo* nombre_puntero = valor_inicial;
```

**Estilos de declaración equivalentes:**

```cpp
int* p1;    // Estilo preferido: el * se asocia con el tipo
int *p2;    // Estilo alternativo: el * se asocia con la variable  
int* p3, p4; // ¡CUIDADO! p3 es puntero, p4 es int normal
```

#### Inicialización segura

**Regla fundamental**: Siempre inicializar punteros

```cpp
// ✅ CORRECTO - Inicialización segura
int *p = nullptr;        // C++11: puntero nulo tipo-seguro
double *q = nullptr;     // Preferible sobre NULL
char *c = nullptr;       // Evita punteros "salvajes"

// ❌ INCORRECTO - Puntero no inicializado
int *peligroso;          // Contiene valor basura - comportamiento indefinido
*peligroso = 10;         // ¡Error! Acceso a memoria no válida
```

#### Operadores fundamentales

**Operador de dirección (&):**

- Obtiene la dirección de memoria de una variable
- Se lee como "dirección de"

**Operador de desreferenciación (*):**

- Accede al valor almacenado en la dirección apuntada
- Se lee como "valor en"

```cpp
int a = 10;
int *p = nullptr;

// Asignación de dirección
p = &a;                  // p ahora apunta a la dirección de a

// Acceso al valor
std::cout << "Valor de a: " << *p << std::endl;           // Imprime: 10
std::cout << "Dirección de a: " << p << std::endl;        // Imprime: 0x... (dirección)
std::cout << "Dirección de p: " << &p << std::endl;       // Dirección del puntero mismo

// Modificación a través del puntero
*p = 20;                 // Cambia el valor de 'a' indirectamente
std::cout << "Nuevo valor de a: " << a << std::endl;      // Imprime: 20
```

#### Conceptos de alias y indirección

```cpp
int valor = 100;
int *ptr1 = &valor;
int *ptr2 = &valor;      // Múltiples punteros al mismo objeto

// Ambos punteros son "alias" del mismo objeto
*ptr1 = 200;             // Modifica 'valor'
std::cout << *ptr2;      // Imprime: 200

// Niveles de indirección
int **ptr_to_ptr = &ptr1; // Puntero a puntero
std::cout << **ptr_to_ptr; // Doble desreferenciación: imprime 200
```

#### Punteros constantes vs punteros a constantes

```cpp
int a = 10, b = 20;

// Puntero a constante - no se puede modificar el valor apuntado
const int *ptr1 = &a;
// *ptr1 = 30;           // ❌ Error de compilación
ptr1 = &b;               // ✅ OK - se puede cambiar la dirección

// Puntero constante - no se puede cambiar la dirección
int * const ptr2 = &a;
*ptr2 = 30;              // ✅ OK - se puede modificar el valor
// ptr2 = &b;            // ❌ Error de compilación

// Puntero constante a constante - nada se puede cambiar
const int * const ptr3 = &a;
// *ptr3 = 40;           // ❌ Error
// ptr3 = &b;            // ❌ Error
```

#### Validación y seguridad

**Verificación de punteros nulos:**

```cpp
void funcion_segura(int* ptr) {
    if (ptr == nullptr) {
        std::cerr << "Error: puntero nulo pasado a la función" << std::endl;
        return;
    }
    
    // Uso seguro del puntero
    *ptr = 42;
}

// Uso moderno con assert para debugging
#include <cassert>
void funcion_debug(int* ptr) {
    assert(ptr != nullptr && "Puntero no debe ser nulo");
    *ptr = 42;
}
```

### 1.1.2 Operadores de dirección y desreferenciación

Los operadores `&` y `*` son complementarios y forman la base de la manipulación de punteros en C++.

#### Operador de dirección (&) - "Address-of"

**Función**: Obtiene la dirección de memoria de una variable

**Sintaxis**:

```cpp
tipo* puntero = &variable;
```

**Casos de uso comunes:**

```cpp
// 1. Inicialización de punteros
int numero = 42;
int* ptr_numero = &numero;

// 2. Reasignación de punteros
int otro_numero = 84;
ptr_numero = &otro_numero;

// 3. Paso por referencia simulado
void modificar_valor(int* valor) {
    *valor = 100;
}

int main() {
    int mi_valor = 50;
    modificar_valor(&mi_valor);  // Pasa la dirección
    std::cout << mi_valor;       // Imprime: 100
}

// 4. Obtener direcciones para debugging
void debug_variables() {
    int a = 10, b = 20, c = 30;
    
    std::cout << "Dirección de a: " << &a << std::endl;
    std::cout << "Dirección de b: " << &b << std::endl;
    std::cout << "Dirección de c: " << &c << std::endl;
    
    // Las variables locales consecutivas suelen tener direcciones decrecientes
    // debido a como crece el stack
}
```

#### Operador de desreferenciación (*) - "Dereference"

**Función**: Accede al valor almacenado en la dirección apuntada

**Sintaxis**:

```cpp
tipo valor = *puntero;
*puntero = nuevo_valor;
```

**Casos de uso y precauciones:**

```cpp
// 1. Lectura de valores
int numero = 75;
int* ptr = &numero;
int copia = *ptr;            // copia = 75

// 2. Modificación de valores
*ptr = 150;                  // numero ahora vale 150

// 3. Uso en expresiones
int resultado = (*ptr) + 10; // resultado = 160
int otro = *ptr * 2;         // otro = 300

// 4. Desreferenciación múltiple (punteros a punteros)
int valor = 99;
int* ptr1 = &valor;
int** ptr2 = &ptr1;          // Puntero a puntero

std::cout << valor;          // 99 - acceso directo
std::cout << *ptr1;          // 99 - una desreferenciación
std::cout << **ptr2;         // 99 - doble desreferenciación

// 5. Verificación antes de desreferenciar (CRÍTICO)
void uso_seguro(int* ptr) {
    if (ptr != nullptr) {    // ✅ SIEMPRE verificar
        *ptr = 42;           // Seguro de usar
    } else {
        std::cerr << "Error: intento de desreferenciar puntero nulo" << std::endl;
    }
}
```

#### Patrones comunes y errores frecuentes

**Intercambio de valores usando punteros:**

```cpp
void intercambiar(int* a, int* b) {
    if (a == nullptr || b == nullptr) return;  // Verificación de seguridad
    
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    std::cout << "Antes: x=" << x << ", y=" << y << std::endl;
    
    intercambiar(&x, &y);
    
    std::cout << "Después: x=" << x << ", y=" << y << std::endl;
    // Salida: Antes: x=10, y=20
    //         Después: x=20, y=10
}
```

**Errores comunes a evitar:**

```cpp
// ❌ ERROR 1: Desreferenciar puntero nulo
int* ptr = nullptr;
// int valor = *ptr;         // ¡Comportamiento indefinido!

// ❌ ERROR 2: Confundir & y *
int numero = 10;
int* ptr = &numero;
// int* otro = *numero;      // Error: *numero es int, no int*
// int valor = &ptr;         // Error: &ptr es int**, no int

// ❌ ERROR 3: Punteros colgantes (dangling pointers)
int* obtener_puntero_peligroso() {
    int local = 42;
    return &local;            // ¡Peligro! Retorna dirección de variable local
}                            // 'local' se destruye al salir de la función

// ✅ CORRECTO: Usar memoria dinámica o pasar por referencia
int* obtener_puntero_seguro() {
    int* ptr = new int(42);   // Memoria dinámica - persiste
    return ptr;               // ¡Recordar hacer delete!
}
```

### 1.1.3 Aritmética de punteros y punteros a punteros

La aritmética de punteros permite navegar por estructuras de datos contiguas de manera eficiente, mientras que los punteros a punteros habilitan estructuras de datos más complejas.

#### Aritmética de punteros

**Operaciones válidas:**

- Suma y resta de enteros: `ptr + n`, `ptr - n`
- Incremento y decremento: `++ptr`, `--ptr`, `ptr++`, `ptr--`
- Diferencia entre punteros: `ptr1 - ptr2`
- Comparación: `ptr1 < ptr2`, `ptr1 == ptr2`, etc.

**Importante**: La aritmética de punteros opera en unidades del tipo apuntado, no en bytes.

```cpp
// Ejemplo con array de enteros
int numeros[] = {10, 20, 30, 40, 50};
int* ptr = numeros;              // Apunta al primer elemento

std::cout << "Valor inicial: " << *ptr << std::endl;      // 10

// Aritmética de punteros
ptr++;                           // Avanza un int (4 bytes en sistemas de 32-bit)
std::cout << "Después de ++: " << *ptr << std::endl;      // 20

ptr += 2;                        // Avanza 2 posiciones más
std::cout << "Después de +2: " << *ptr << std::endl;      // 40

ptr--;                           // Retrocede una posición
std::cout << "Después de --: " << *ptr << std::endl;      // 30

// Acceso directo por índice (equivalente a aritmética)
int* base = numeros;
for (int i = 0; i < 5; i++) {
    std::cout << "numeros[" << i << "] = " << *(base + i) << std::endl;
    // Equivalente a: numeros[i]
}
```

**Navegación segura con límites:**

```cpp
void recorrer_array_seguro(int* arr, size_t tamaño) {
    int* inicio = arr;
    int* fin = arr + tamaño;     // Puntero past-the-end
    
    for (int* ptr = inicio; ptr < fin; ++ptr) {
        std::cout << *ptr << " ";
    }
    std::cout << std::endl;
}

// Cálculo de distancia entre punteros
void analizar_distancia() {
    int array[] = {1, 2, 3, 4, 5};
    int* inicio = &array[0];
    int* fin = &array[4];
    
    ptrdiff_t distancia = fin - inicio;  // Tipo específico para diferencias
    std::cout << "Distancia: " << distancia << " elementos" << std::endl; // 4
    std::cout << "Bytes: " << distancia * sizeof(int) << std::endl;       // 16
}
```

#### Punteros a punteros (doble indirección)

Los punteros a punteros permiten modificar el puntero mismo, no solo el valor apuntado.

**Declaración y uso básico:**

```cpp
int valor = 42;
int* ptr = &valor;               // Puntero a int
int** ptr_to_ptr = &ptr;         // Puntero a puntero a int

// Tres formas de acceder al valor
std::cout << valor;              // Acceso directo: 42
std::cout << *ptr;               // Una indirección: 42  
std::cout << **ptr_to_ptr;       // Doble indirección: 42

// Modificación del valor original
**ptr_to_ptr = 100;              // valor ahora es 100

// Modificación del puntero intermedio
int nuevo_valor = 200;
*ptr_to_ptr = &nuevo_valor;      // Ahora ptr apunta a nuevo_valor
std::cout << **ptr_to_ptr;       // 200
```

**Casos de uso prácticos:**

**1. Modificación de punteros en funciones:**

```cpp
// Función que puede modificar el puntero mismo
void redireccionar(int** ptr, int* nuevo_destino) {
    *ptr = nuevo_destino;        // Modifica hacia dónde apunta el puntero original
}

void ejemplo_redireccion() {
    int a = 10, b = 20;
    int* mi_ptr = &a;
    
    std::cout << "Antes: " << *mi_ptr << std::endl;        // 10
    
    redireccionar(&mi_ptr, &b);
    
    std::cout << "Después: " << *mi_ptr << std::endl;      // 20
}
```

**2. Arrays de punteros:**

```cpp
void ejemplo_array_punteros() {
    // Array de strings (cada string es un char*)
    const char* nombres[] = {"Alice", "Bob", "Charlie", "Diana"};
    const char** ptr_nombres = nombres;    // Puntero al primer puntero
    
    // Recorrer array de punteros
    for (int i = 0; i < 4; i++) {
        std::cout << "Nombre " << i << ": " << *(ptr_nombres + i) << std::endl;
        // Equivalente a: nombres[i] o ptr_nombres[i]
    }
}
```

**3. Estructuras de datos dinámicas:**

```cpp
// Nodo para lista enlazada con doble puntero para inserción
struct Nodo {
    int dato;
    Nodo* siguiente;
    
    Nodo(int valor) : dato(valor), siguiente(nullptr) {}
};

void insertar_al_inicio(Nodo** cabeza, int valor) {
    Nodo* nuevo_nodo = new Nodo(valor);
    nuevo_nodo->siguiente = *cabeza;     // El nuevo nodo apunta a la cabeza actual
    *cabeza = nuevo_nodo;                // La cabeza ahora apunta al nuevo nodo
}

void imprimir_lista(Nodo* cabeza) {
    while (cabeza != nullptr) {
        std::cout << cabeza->dato << " -> ";
        cabeza = cabeza->siguiente;
    }
    std::cout << "NULL" << std::endl;
}

void ejemplo_lista_enlazada() {
    Nodo* lista = nullptr;              // Lista inicialmente vacía
    
    insertar_al_inicio(&lista, 10);
    insertar_al_inicio(&lista, 20);
    insertar_al_inicio(&lista, 30);
    
    imprimir_lista(lista);              // 30 -> 20 -> 10 -> NULL
    
    // Limpieza de memoria
    while (lista != nullptr) {
        Nodo* temp = lista;
        lista = lista->siguiente;
        delete temp;
    }
}
```

#### Consideraciones de rendimiento y seguridad

**Ventajas de la aritmética de punteros:**

- **Eficiencia**: Acceso directo a memoria sin overhead de indexación
- **Flexibilidad**: Navegación arbitraria por estructuras contiguas
- **Compatibilidad**: Interface directa con APIs de C

**Precauciones importantes:**

- **Bounds checking**: Los punteros no verifican límites automáticamente
- **Tipos compatibles**: Solo operar entre punteros del mismo tipo
- **Lifetime management**: Asegurar que la memoria apuntada sea válida

```cpp
// Ejemplo de verificación de límites
void operacion_segura(int* array, size_t tamaño, int offset) {
    if (offset >= 0 && offset < static_cast<int>(tamaño)) {
        int* ptr = array + offset;
        *ptr = 42;                   // Operación segura
    } else {
        std::cerr << "Offset fuera de rango" << std::endl;
    }
}
```

## Segundo tema: 1.2 Gestión de Memoria

### 1.2.1 Memoria dinámica con new y delete

La gestión de memoria dinámica permite a los programas solicitar y liberar memoria durante la ejecución, proporcionando flexibilidad para estructuras de datos cuyo tamaño no se conoce en tiempo de compilación.

#### Conceptos fundamentales

**Memoria estática vs dinámica:**

- **Memoria estática**: Asignada en tiempo de compilación, tamaño fijo, gestión automática
- **Memoria dinámica**: Asignada en tiempo de ejecución, tamaño variable, gestión manual

#### Operador new - Asignación de memoria

**Sintaxis básica:**

```cpp
tipo* puntero = new tipo;              // Objeto individual
tipo* puntero = new tipo(argumentos);  // Objeto individual con constructor
tipo* puntero = new tipo[tamaño];      // Array de objetos
```

**Ejemplos de asignación:**

```cpp
// 1. Asignación de tipos primitivos
int* p = new int;                      // Asigna memoria para un entero (valor no inicializado)
*p = 42;                               // Asigna valor después de la creación

double* r = new double;                // Asigna memoria para un double (contiene basura)
double* q = new double(3.14159);       // Asigna e inicializa con valor específico

// 2. Asignación de arrays
int* array_int = new int[100];         // Array de 100 enteros no inicializados
int* array_init = new int[100]();      // Array de 100 enteros inicializados a 0

// 3. Asignación con inicialización (C++11)
int* numero = new int{42};             // Inicialización uniforme
double* precio = new double{99.99};    // Más explícito y consistente

// 4. Arrays con inicialización
int* numeros = new int[5]{1, 2, 3, 4, 5};  // C++11: array con valores iniciales
```

#### Proceso interno de new

Cuando se ejecuta `new`, ocurren tres pasos:

1. **Solicitud de memoria**: Se pide memoria al heap del sistema operativo
2. **Verificación**: Se verifica si hay memoria suficiente disponible
3. **Inicialización**: Se llama al constructor (para objetos) o se deja sin inicializar (para tipos primitivos)
4. **Retorno**: Se devuelve la dirección de memoria asignada

```cpp
// Ejemplo detallado del proceso
class MiClase {
public:
    int valor;
    MiClase(int v) : valor(v) {
        std::cout << "Constructor llamado, valor: " << valor << std::endl;
    }
    ~MiClase() {
        std::cout << "Destructor llamado, valor: " << valor << std::endl;
    }
};

void ejemplo_proceso_new() {
    std::cout << "Antes de new" << std::endl;
    
    MiClase* obj = new MiClase(100);   // 1. Solicita memoria
                                       // 2. Verifica disponibilidad  
                                       // 3. Llama constructor MiClase(100)
                                       // 4. Retorna dirección
    
    std::cout << "Después de new, valor: " << obj->valor << std::endl;
    
    delete obj;                        // Libera memoria y llama destructor
    
    std::cout << "Después de delete" << std::endl;
}
```

#### Operador delete - Liberación de memoria

**Sintaxis básica:**

```cpp
delete puntero;         // Libera objeto individual
delete[] puntero;       // Libera array de objetos
```

**Reglas fundamentales:**

1. **Correspondencia exacta**: Cada `new` debe tener exactamente un `delete` correspondiente
2. **Tipo correcto**: `new` ↔ `delete`, `new[]` ↔ `delete[]`
3. **Solo una vez**: Nunca hacer `delete` al mismo puntero dos veces
4. **Solo memory dinámica**: No hacer `delete` a punteros que no fueron creados con `new`

```cpp
// ✅ CORRECTO - Gestión apropiada
void gestion_correcta() {
    int* numero = new int(42);         // Asignación individual
    delete numero;                     // Liberación individual
    numero = nullptr;                  // Evitar puntero colgante
    
    int* array = new int[100];         // Asignación de array
    delete[] array;                    // Liberación de array
    array = nullptr;                   // Evitar puntero colgante
}

// ❌ ERRORES COMUNES
void errores_comunes() {
    int* numero = new int(42);
    
    // Error 1: Double delete
    delete numero;
    // delete numero;                  // ¡Error! Comportamiento indefinido
    
    // Error 2: Tipo incorrecto de delete
    int* array = new int[10];
    // delete array;                   // ¡Error! Debería ser delete[]
    delete[] array;                    // ✅ Correcto
    
    // Error 3: Delete a puntero no dinámico
    int local = 42;
    int* ptr = &local;
    // delete ptr;                     // ¡Error! No fue creado con new
}
```

#### Manejo de errores de asignación

**Verificación de fallo en asignación:**

```cpp
// Método 1: Verificación explícita (comportamiento por defecto)
void verificacion_explicita() {
    try {
        int* gran_array = new int[1000000000];  // Puede fallar
        // Usar el array...
        delete[] gran_array;
    } catch (const std::bad_alloc& e) {
        std::cerr << "Error de asignación: " << e.what() << std::endl;
        // Manejar el error apropiadamente
    }
}

// Método 2: new nothrow (no lanza excepción)
void verificacion_nothrow() {
    int* ptr = new(std::nothrow) int[1000000000];
    
    if (ptr == nullptr) {
        std::cerr << "Error: no se pudo asignar memoria" << std::endl;
        return;
    }
    
    // Usar ptr de forma segura...
    delete[] ptr;
}
```

#### Patrones de gestión segura

**RAII (Resource Acquisition Is Initialization):**

```cpp
class GestorMemoria {
private:
    int* datos;
    size_t tamaño;
    
public:
    // Constructor adquiere el recurso
    GestorMemoria(size_t n) : tamaño(n) {
        datos = new int[tamaño];
        std::cout << "Memoria asignada para " << tamaño << " enteros" << std::endl;
    }
    
    // Destructor libera el recurso automáticamente
    ~GestorMemoria() {
        delete[] datos;
        std::cout << "Memoria liberada" << std::endl;
    }
    
    // Prevenir copia accidental (C++11)
    GestorMemoria(const GestorMemoria&) = delete;
    GestorMemoria& operator=(const GestorMemoria&) = delete;
    
    // Acceso seguro a los datos
    int& operator[](size_t index) {
        if (index >= tamaño) {
            throw std::out_of_range("Índice fuera de rango");
        }
        return datos[index];
    }
    
    size_t size() const { return tamaño; }
};

void ejemplo_raii() {
    {
        GestorMemoria gestor(100);     // Memoria asignada automáticamente
        gestor[0] = 42;
        gestor[99] = 84;
        // ... usar gestor
    }  // Memoria liberada automáticamente al salir del scope
}
```

### 1.2.2 Stack vs Heap: características y usos

La comprensión de las diferencias entre stack y heap es fundamental para escribir código eficiente y evitar problemas de memoria.

![Stack vs Heap](/img/algoritmos-y-estructuras-de-datos/heap-vs-stack.webp)

#### El Stack (Pila)

**Características:**

- **Gestión automática**: Las variables se crean y destruyen automáticamente
- **Velocidad**: Asignación y liberación muy rápidas (solo mover un puntero)
- **Orden LIFO**: Last In, First Out (último en entrar, primero en salir)
- **Tamaño limitado**: Típicamente 1-8 MB dependiendo del sistema
- **Localidad**: Excelente localidad espacial para el cache

**Estructura y funcionamiento:**

```cpp
void ejemplo_stack() {
    // Stack frame de ejemplo_stack
    int a = 10;              // Se aloja en el stack
    double b = 3.14;         // Se aloja en el stack
    char array[100];         // Se aloja en el stack
    
    {
        int c = 20;          // Nuevo scope, se aloja en el stack
        // Variables: a, b, array, c (en ese orden en memoria)
    }   // c se destruye automáticamente
    
    // Solo existen: a, b, array
    
    funccion_recursiva(5);   // Cada llamada añade un frame al stack
}   // a, b, array se destruyen automáticamente

void funccion_recursiva(int n) {
    if (n <= 0) return;
    
    int local = n * 2;       // Cada llamada tiene su propio 'local'
    funccion_recursiva(n - 1);
}
```

**Ventajas del Stack:**

```cpp
// 1. Gestión automática - no hay memory leaks
void ventaja_automatica() {
    int numeros[1000];       // Se destruye automáticamente
    // No necesita delete
}

// 2. Velocidad de acceso
void ventaja_velocidad() {
    // Estas asignaciones son extremadamente rápidas
    int a = 1;
    int b = 2;
    int c = 3;
    // El stack pointer simplemente se mueve
}

// 3. Localidad de cache excelente
void ventaja_cache() {
    int array[100];
    // Todos los elementos están contiguos en memoria
    for (int i = 0; i < 100; i++) {
        array[i] = i;        // Cache-friendly
    }
}
```

**Limitaciones del Stack:**

```cpp
// ❌ PROBLEMA 1: Tamaño limitado
void problema_tamaño() {
    // int gran_array[10000000];    // Puede causar stack overflow
}

// ❌ PROBLEMA 2: Lifetime limitado
int* problema_lifetime() {
    int local = 42;
    return &local;               // ¡Peligro! Retorna dirección de variable local
}   // 'local' se destruye aquí

// ❌ PROBLEMA 3: Tamaño fijo en tiempo de compilación
void problema_tamano_fijo(int n) {
    // int array[n];                // Error en C++ estándar (VLA no estándar)
}
```

#### El Heap (Montón)

**Características:**

- **Gestión manual**: El programador debe explícitamente asignar y liberar
- **Velocidad moderada**: Asignación más lenta que el stack (búsqueda de bloques libres)
- **Acceso aleatorio**: Se puede acceder a cualquier ubicación en cualquier momento
- **Tamaño grande**: Limitado principalmente por la RAM disponible
- **Fragmentación**: Puede sufrir fragmentación interna y externa

**Estructura y funcionamiento:**

```cpp
void ejemplo_heap() {
    // Asignación en heap
    int* numero = new int(42);           // Búsqueda de bloque libre
    double* array = new double[1000];    // Búsqueda de bloque contiguo grande
    
    // La memoria persiste independientemente del scope
    {
        int* otro = new int(84);
        // 'otro' se puede usar fuera de este scope si se pasa afuera
        // pero se debe liberar manualmente
        delete otro;
    }
    
    // numero y array siguen siendo válidos
    delete numero;
    delete[] array;
}

// Ventaja: Lifetime independiente del scope
int* crear_entero_heap(int valor) {
    int* ptr = new int(valor);
    return ptr;                          // ✅ Válido - memoria persiste
}   // El objeto sigue existiendo en el heap
```

**Ventajas del Heap:**

```cpp
// 1. Tamaño dinámico
void ventaja_dinamico() {
    int n;
    std::cout << "Ingrese tamaño: ";
    std::cin >> n;
    
    int* array = new int[n];             // Tamaño determinado en runtime
    // ... usar array
    delete[] array;
}

// 2. Lifetime independiente
struct Nodo {
    int dato;
    Nodo* siguiente;
    Nodo(int valor) : dato(valor), siguiente(nullptr) {}
};

Nodo* crear_lista() {
    Nodo* cabeza = new Nodo(1);
    cabeza->siguiente = new Nodo(2);
    cabeza->siguiente->siguiente = new Nodo(3);
    return cabeza;                       // La lista persiste
}

// 3. Tamaño grande
void ventaja_tamaño_grande() {
    // Millones de elementos - imposible en stack
    int* gran_array = new int[10000000];
    // ... procesar
    delete[] gran_array;
}
```

**Problemas del Heap:**

```cpp
// ❌ PROBLEMA 1: Memory leaks
void problema_leak() {
    int* ptr = new int(42);
    // ¿Olvido delete? ¡Memory leak!
    // delete ptr;                       // Necesario pero olvidado
}

// ❌ PROBLEMA 2: Fragmentación
void problema_fragmentacion() {
    // Múltiples asignaciones pequeñas pueden fragmentar el heap
    std::vector<int*> punteros;
    for (int i = 0; i < 1000; i++) {
        punteros.push_back(new int(i));
    }
    // Fragmentación: pequeños bloques dispersos por todo el heap
    
    for (int* ptr : punteros) {
        delete ptr;                      // Liberación necesaria
    }
}

// ❌ PROBLEMA 3: Rendimiento variable
void problema_rendimiento() {
    // El tiempo de new/delete puede variar dependiendo del estado del heap
    auto inicio = std::chrono::high_resolution_clock::now();
    
    int* ptr = new int(42);              // Tiempo variable
    
    auto fin = std::chrono::high_resolution_clock::now();
    delete ptr;
}
```

#### Tabla comparativa Stack vs Heap

| Aspecto | Stack | Heap |
|---------|-------|------|
| **Velocidad de asignación** | Muy rápida (O(1)) | Moderada (O(log n) típicamente) |
| **Gestión de memoria** | Automática | Manual |
| **Tamaño disponible** | Limitado (1-8 MB) | Limitado por RAM |
| **Fragmentación** | No hay | Sí puede ocurrir |
| **Localidad de cache** | Excelente | Variable |
| **Lifetime** | Limitado al scope | Independiente del scope |
| **Tamaño de objetos** | Determinado en compilación | Determinado en runtime |
| **Seguridad** | Alta (gestión automática) | Baja (gestión manual) |
| **Uso típico** | Variables locales, parámetros | Estructuras dinámicas grandes |

#### Estrategias de decisión

**Use Stack cuando:**

```cpp
// ✅ Tamaño conocido y pequeño
void usar_stack_caso1() {
    int contadores[10];                  // Tamaño pequeño y fijo
    double matriz[100][100];             // Tamaño conocido en compilación
}

// ✅ Lifetime limitado al scope
void usar_stack_caso2() {
    std::string mensaje = "Temporal";    // Solo necesario en esta función
    // Destrucción automática garantizada
}

// ✅ Variables de trabajo temporal
void usar_stack_caso3() {
    int suma = 0;
    double promedio = 0.0;
    // Variables auxiliares para cálculos
}
```

**Use Heap cuando:**

```cpp
// ✅ Tamaño determinado en runtime
void usar_heap_caso1() {
    size_t n = obtener_tamano_usuario();
    int* array = new int[n];             // Tamaño variable
    // ... usar array
    delete[] array;
}

// ✅ Estructuras que deben persistir
Nodo* usar_heap_caso2() {
    return new Nodo(42);                 // Debe sobrevivir al scope
}

// ✅ Objetos muy grandes
void usar_heap_caso3() {
    // Estructura de 100MB - imposible en stack
    double* matriz_gigante = new double[10000000];
    // ... procesar
    delete[] matriz_gigante;
}
```

### 1.2.3 Memory leaks y técnicas de prevención

Los memory leaks son uno de los errores más comunes y peligrosos en programas C++, especialmente en aplicaciones de larga duración como servidores o sistemas embebidos.

#### ¿Qué es un memory leak?

Un **memory leak** ocurre cuando un programa asigna memoria dinámicamente pero no la libera correctamente cuando ya no es necesaria. Esta memoria queda "perdida" - el programa no puede usarla pero tampoco está disponible para otros procesos.

![Memory Leak](/img/algoritmos-y-estructuras-de-datos/memory-leak.webp)

**Consecuencias de memory leaks:**

- **Consumo creciente de memoria**: El programa usa cada vez más RAM
- **Degradación del rendimiento**: El sistema operativo debe manejar más memoria
- **Agotamiento de recursos**: Eventualmente puede agotar toda la RAM disponible
- **Crash del sistema**: En casos extremos, puede causar fallo del sistema operativo

#### Tipos comunes de memory leaks

**1. Leak por olvido de delete:**

```cpp
// ❌ LEAK BÁSICO - Olvido de liberación
void leak_basico() {
    int* ptr = new int(42);
    // ... usar ptr
    // ¡Falta delete ptr!
}   // ptr sale de scope, pero la memoria en heap permanece allocated

// ❌ LEAK EN ARRAYS
void leak_array() {
    double* array = new double[1000];
    // ... usar array
    // ¡Falta delete[] array!
}

// ✅ CORRECCIÓN
void sin_leak() {
    int* ptr = new int(42);
    // ... usar ptr
    delete ptr;                          // Liberación explícita
    ptr = nullptr;                       // Prevenir uso accidental
}
```

**2. Leak por excepción:**

```cpp
// ❌ LEAK POR EXCEPCIÓN
void leak_por_excepcion() {
    int* ptr = new int(42);
    
    // Si esta función lanza excepción, delete nunca se ejecuta
    funcion_que_puede_fallar();          // Puede lanzar excepción
    
    delete ptr;                          // ¡Nunca se ejecuta si hay excepción!
}

// ✅ CORRECCIÓN CON TRY-CATCH
void sin_leak_try_catch() {
    int* ptr = new int(42);
    
    try {
        funcion_que_puede_fallar();
        delete ptr;                      // Liberación en caso exitoso
    } catch (...) {
        delete ptr;                      // Liberación en caso de excepción
        throw;                           // Re-lanzar la excepción
    }
}

// ✅ MEJOR CORRECCIÓN CON RAII
void sin_leak_raii() {
    std::unique_ptr<int> ptr(new int(42));
    
    // No importa si hay excepción - unique_ptr se encarga de la liberación
    funcion_que_puede_fallar();
    
    // delete automático al salir del scope
}
```

**3. Leak por pérdida de referencia:**

```cpp
// ❌ LEAK POR PÉRDIDA DE REFERENCIA
void leak_por_perdida() {
    int* ptr = new int[100];             // Asigna memoria
    
    ptr = new int[200];                  // ¡Pérdida! La memoria original se pierde
    
    delete[] ptr;                        // Solo libera la segunda asignación
}   // La primera asignación (100 enteros) nunca se libera

// ✅ CORRECCIÓN
void sin_leak_perdida() {
    int* ptr1 = new int[100];
    // ... usar ptr1
    
    delete[] ptr1;                       // Liberar antes de reasignar
    
    int* ptr2 = new int[200];
    // ... usar ptr2
    
    delete[] ptr2;
}
```

**4. Leak en estructuras de datos complejas:**

```cpp
struct Nodo {
    int dato;
    Nodo* siguiente;
    
    Nodo(int valor) : dato(valor), siguiente(nullptr) {}
};

// ❌ LEAK EN LISTA ENLAZADA
void leak_lista_enlazada() {
    Nodo* cabeza = new Nodo(1);
    cabeza->siguiente = new Nodo(2);
    cabeza->siguiente->siguiente = new Nodo(3);
    
    delete cabeza;                       // ¡Solo libera el primer nodo!
}   // Los nodos 2 y 3 quedan como leak

// ✅ CORRECCIÓN - Liberación recursiva
void liberar_lista(Nodo* nodo) {
    if (nodo != nullptr) {
        liberar_lista(nodo->siguiente);   // Liberar recursivamente
        delete nodo;                     // Liberar el nodo actual
    }
}

void sin_leak_lista() {
    Nodo* cabeza = new Nodo(1);
    cabeza->siguiente = new Nodo(2);
    cabeza->siguiente->siguiente = new Nodo(3);
    
    liberar_lista(cabeza);               // Liberación completa
}
```

#### Técnicas de prevención de memory leaks

**1. RAII (Resource Acquisition Is Initialization):**

RAII es el principio fundamental en C++ para gestión automática de recursos.

```cpp
// Implementación básica de RAII
template<typename T>
class MiPuntero {
private:
    T* ptr;
    
public:
    // Constructor adquiere el recurso
    explicit MiPuntero(T* p = nullptr) : ptr(p) {}
    
    // Destructor libera el recurso automáticamente
    ~MiPuntero() {
        delete ptr;
    }
    
    // Prevenir copia accidental
    MiPuntero(const MiPuntero&) = delete;
    MiPuntero& operator=(const MiPuntero&) = delete;
    
    // Permitir movimiento (C++11)
    MiPuntero(MiPuntero&& other) noexcept : ptr(other.ptr) {
        other.ptr = nullptr;
    }
    
    MiPuntero& operator=(MiPuntero&& other) noexcept {
        if (this != &other) {
            delete ptr;
            ptr = other.ptr;
            other.ptr = nullptr;
        }
        return *this;
    }
    
    // Operadores de acceso
    T& operator*() { return *ptr; }
    T* operator->() { return ptr; }
    T* get() const { return ptr; }
    
    // Liberación manual si es necesaria
    T* release() {
        T* temp = ptr;
        ptr = nullptr;
        return temp;
    }
};

// Uso de RAII personalizado
void ejemplo_raii_personalizado() {
    MiPuntero<int> ptr(new int(42));
    
    // Usar ptr normalmente
    *ptr = 100;
    
    // No necesita delete - se hace automáticamente
}   // Destructor de MiPuntero libera la memoria automáticamente
```

**2. Smart Pointers de la biblioteca estándar (C++11+):**

```cpp
#include <memory>

// std::unique_ptr - Propiedad única
void ejemplo_unique_ptr() {
    std::unique_ptr<int> ptr(new int(42));
    // o mejor: auto ptr = std::make_unique<int>(42);  // C++14
    
    *ptr = 100;
    
    // Transfer de propiedad
    std::unique_ptr<int> otro_ptr = std::move(ptr);
    // ptr ahora es nullptr, otro_ptr posee la memoria
    
    // No necesita delete - automático
}

// std::shared_ptr - Propiedad compartida
void ejemplo_shared_ptr() {
    std::shared_ptr<int> ptr1 = std::make_shared<int>(42);
    
    {
        std::shared_ptr<int> ptr2 = ptr1;   // Comparten la propiedad
        // Reference count = 2
        
        *ptr2 = 100;                        // Modifica el valor compartido
    }   // ptr2 sale de scope, reference count = 1
    
    // ptr1 aún válido
    std::cout << *ptr1;                     // Imprime: 100
    
}   // ptr1 sale de scope, reference count = 0, memoria liberada automáticamente

// std::weak_ptr - Prevenir ciclos circulares
struct Nodo {
    int dato;
    std::shared_ptr<Nodo> siguiente;
    std::weak_ptr<Nodo> anterior;           // Evita ciclo circular
    
    Nodo(int valor) : dato(valor) {}
};

void ejemplo_weak_ptr() {
    auto nodo1 = std::make_shared<Nodo>(1);
    auto nodo2 = std::make_shared<Nodo>(2);
    
    nodo1->siguiente = nodo2;
    nodo2->anterior = nodo1;                // weak_ptr no incrementa reference count
    
    // No hay ciclo circular - se libera automáticamente
}
```

**3. Contenedores STL:**

```cpp
#include <vector>
#include <list>
#include <memory>

// Usar contenedores en lugar de arrays dinámicos
void ejemplo_contenedores() {
    // En lugar de: int* array = new int[100];
    std::vector<int> array(100);            // Gestión automática
    
    // En lugar de lista enlazada manual
    std::list<int> lista = {1, 2, 3, 4, 5}; // Gestión automática
    
    // Para objetos complejos
    std::vector<std::unique_ptr<MiClase>> objetos;
    objetos.push_back(std::make_unique<MiClase>(42));
    
    // Todo se libera automáticamente
}
```

**4. Técnicas de debugging y detección:**

```cpp
// Debugging manual básico
class DebugMemoria {
private:
    static int conteo_objetos;
    
public:
    DebugMemoria() {
        ++conteo_objetos;
        std::cout << "Objeto creado. Total: " << conteo_objetos << std::endl;
    }
    
    ~DebugMemoria() {
        --conteo_objetos;
        std::cout << "Objeto destruido. Total: " << conteo_objetos << std::endl;
    }
    
    static int get_conteo() { return conteo_objetos; }
};

int DebugMemoria::conteo_objetos = 0;

// Verificación al final del programa
void verificar_leaks() {
    if (DebugMemoria::get_conteo() != 0) {
        std::cerr << "¡ADVERTENCIA! Posible memory leak: " 
                  << DebugMemoria::get_conteo() << " objetos no liberados" << std::endl;
    }
}
```

#### Herramientas de detección de memory leaks

**1. Valgrind (Linux/macOS):**

```bash
# Compilar con símbolos de debug
g++ -g -o programa programa.cpp

# Ejecutar con Valgrind
valgrind --leak-check=full --show-leak-kinds=all ./programa
```

**2. AddressSanitizer (GCC/Clang):**

```bash
# Compilar con AddressSanitizer
g++ -fsanitize=address -g -o programa programa.cpp

# Ejecutar normalmente - detecta leaks automáticamente
./programa
```

**3. Visual Studio Diagnostic Tools (Windows):**

```cpp
// Habilitar detección en Visual Studio
#ifdef _DEBUG
#define _CRTDBG_MAP_ALLOC
#include <crtdbg.h>
#endif

int main() {
#ifdef _DEBUG
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);
#endif
    
    // Tu código aquí
    
    return 0;
}
```

#### Mejores prácticas para prevenir memory leaks

**1. Preferir gestión automática:**

```cpp
// ✅ PREFERIR
std::vector<int> datos(1000);           // Gestión automática
auto ptr = std::make_unique<MiClase>(); // Smart pointer

// ❌ EVITAR
int* datos = new int[1000];             // Gestión manual
MiClase* ptr = new MiClase();           // Propenso a leaks
```

**2. Usar RAII consistentemente:**

```cpp
// ✅ RAII para cualquier recurso
class GestorArchivo {
    std::FILE* archivo;
public:
    GestorArchivo(const char* nombre) {
        archivo = std::fopen(nombre, "r");
        if (!archivo) throw std::runtime_error("No se pudo abrir archivo");
    }
    
    ~GestorArchivo() {
        if (archivo) std::fclose(archivo);
    }
    
    // ... métodos de acceso
};
```

**3. Testear sistemáticamente:**

```cpp
// Test unitario para verificar ausencia de leaks
void test_sin_leaks() {
    int objetos_iniciales = DebugMemoria::get_conteo();
    
    {
        // Operaciones que pueden causar leaks
        auto ptr = std::make_unique<DebugMemoria>();
        std::vector<std::unique_ptr<DebugMemoria>> contenedor;
        contenedor.push_back(std::make_unique<DebugMemoria>());
    }   // Todo debe liberarse aquí
    
    int objetos_finales = DebugMemoria::get_conteo();
    assert(objetos_iniciales == objetos_finales);
}
```

## Tercer tema: 1.3 Estructuras y Clases

### 1.3.1 Definición de estructuras y diferencias con clases

Las **estructuras** (struct) y **clases** (class) en C++ son fundamentalmente similares, pero difieren en sus convenciones de acceso por defecto. Ambas permiten agrupar diferentes tipos de datos y funcionalidades bajo un solo nombre, facilitando la organización y encapsulación del código.

#### Conceptos fundamentales de struct

Un `struct` es una estructura de datos que permite agrupar diferentes tipos de datos bajo un solo nombre, creando tipos de datos personalizados que modelan entidades del mundo real.

**Definición básica:**

```cpp
struct Persona {
    // Miembros de datos (por defecto públicos)
    std::string nombre;
    int edad;
    double altura;
    
    // Métodos (funciones miembro)
    void mostrarInfo() const {
        std::cout << "Nombre: " << nombre 
                  << ", Edad: " << edad 
                  << ", Altura: " << altura << "m" << std::endl;
    }
    
    void cumplirAnios() {
        edad++;
        std::cout << nombre << " ahora tiene " << edad << " años" << std::endl;
    }
};
```

#### Diferencias principales entre struct y class

| Aspecto | struct | class |
|---------|--------|-------|
| **Visibilidad por defecto** | `public` | `private` |
| **Herencia por defecto** | `public` | `private` |
| **Uso convencional** | Datos agrupados, POD | Objetos complejos, encapsulación |
| **Compatibilidad con C** | Sí (sin métodos) | No |

#### Ejemplos comparativos

**Estructura tradicional (estilo C):**

```cpp
// Struct simple - compatible con C
struct Punto2D {
    double x;
    double y;
};

void usar_punto_c_style() {
    Punto2D punto;              // Declaración
    punto.x = 3.5;              // Acceso directo a miembros
    punto.y = 2.8;
    
    // Operaciones mediante funciones libres
    double distancia = sqrt(punto.x * punto.x + punto.y * punto.y);
    std::cout << "Distancia al origen: " << distancia << std::endl;
}
```

**Estructura moderna (estilo C++):**

```cpp
struct Punto2D_Moderno {
    double x, y;
    
    // Constructor por defecto
    Punto2D_Moderno() : x(0.0), y(0.0) {}
    
    // Constructor con parámetros
    Punto2D_Moderno(double x_val, double y_val) : x(x_val), y(y_val) {}
    
    // Métodos de conveniencia
    double distanciaAlOrigen() const {
        return std::sqrt(x * x + y * y);
    }
    
    double distanciaA(const Punto2D_Moderno& otro) const {
        double dx = x - otro.x;
        double dy = y - otro.y;
        return std::sqrt(dx * dx + dy * dy);
    }
    
    // Sobrecarga de operadores
    Punto2D_Moderno operator+(const Punto2D_Moderno& otro) const {
        return Punto2D_Moderno(x + otro.x, y + otro.y);
    }
    
    // Método para debugging
    void imprimir() const {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }
};

void usar_punto_cpp_style() {
    Punto2D_Moderno p1(3.5, 2.8);         // Constructor con parámetros
    Punto2D_Moderno p2{1.2, 4.1};         // Inicialización uniforme (C++11)
    
    std::cout << "Distancia de p1 al origen: " << p1.distanciaAlOrigen() << std::endl;
    std::cout << "Distancia entre p1 y p2: " << p1.distanciaA(p2) << std::endl;
    
    Punto2D_Moderno suma = p1 + p2;        // Uso del operador sobrecargado
    std::cout << "Suma de puntos: ";
    suma.imprimir();
}
```

**Clase equivalente:**

```cpp
class Punto2D_Clase {
private:                                   // Por defecto privado
    double x, y;
    
public:
    // Constructores
    Punto2D_Clase() : x(0.0), y(0.0) {}
    Punto2D_Clase(double x_val, double y_val) : x(x_val), y(y_val) {}
    
    // Getters (acceso controlado)
    double getX() const { return x; }
    double getY() const { return y; }
    
    // Setters (modificación controlada)
    void setX(double x_val) { 
        if (x_val >= -1000 && x_val <= 1000) {    // Validación
            x = x_val; 
        }
    }
    void setY(double y_val) { 
        if (y_val >= -1000 && y_val <= 1000) {    // Validación
            y = y_val; 
        }
    }
    
    // Métodos públicos
    double distanciaAlOrigen() const {
        return std::sqrt(x * x + y * y);
    }
    
    void imprimir() const {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }
};
```

#### Cuándo usar struct vs class

**Use `struct` cuando:**

- Los datos son principalmente pasivos (POD - Plain Old Data)
- Todos los miembros son públicos por naturaleza
- Se requiere compatibilidad con C
- Representa una simple agrupación de datos relacionados

```cpp
// Ejemplos apropiados para struct
struct RGB {
    uint8_t rojo, verde, azul;
};

struct ConfiguracionJuego {
    int ancho_pantalla;
    int alto_pantalla;
    bool pantalla_completa;
    double volumen_musica;
};

struct EstadisticasJugador {
    std::string nombre;
    int puntuacion;
    double tiempo_juego;
    int nivel_actual;
};
```

**Use `class` cuando:**

- Necesita encapsulación y control de acceso
- Tiene lógica de negocio compleja
- Requiere invariantes que deben mantenerse
- Implementa abstracciones complejas

```cpp
// Ejemplos apropiados para class
class CuentaBancaria {
private:
    double saldo;
    std::string numero_cuenta;
    std::vector<std::string> historial_transacciones;
    
public:
    CuentaBancaria(const std::string& numero, double saldo_inicial);
    
    bool depositar(double cantidad);
    bool retirar(double cantidad);
    double consultarSaldo() const;
    void imprimirHistorial() const;
};

class Motor3D {
private:
    std::vector<Objeto3D> objetos;
    Camara camara_actual;
    ConfiguracionRender config;
    
public:
    void agregarObjeto(const Objeto3D& objeto);
    void configurarCamara(const Camara& camara);
    void renderizar();
    void actualizar(double delta_tiempo);
};
```

### 1.3.2 Constructores especiales y destructores

Los constructores y destructores son métodos especiales que controlan la creación, copia, movimiento y destrucción de objetos. C++ proporciona varios tipos de constructores que se generan automáticamente si no se definen explícitamente.

#### Constructores básicos

**Constructor por defecto:**

```cpp
struct Persona {
    std::string nombre;
    int edad;
    double altura;
    
    // Constructor por defecto explícito
    Persona() : nombre(""), edad(0), altura(0.0) {
        std::cout << "Constructor por defecto llamado" << std::endl;
    }
    
    // Constructor con parámetros
    Persona(const std::string& n, int e, double a) 
        : nombre(n), edad(e), altura(a) {
        std::cout << "Constructor con parámetros llamado para " << nombre << std::endl;
    }
};

void ejemplo_constructores_basicos() {
    Persona p1;                           // Llama constructor por defecto
    Persona p2("Ana", 25, 1.65);         // Llama constructor con parámetros
    Persona p3{"Luis", 30, 1.80};        // C++11: inicialización uniforme
}
```

#### Lista de inicialización vs asignación en el cuerpo

**Comparación de eficiencia:**

```cpp
class EjemploInicializacion {
private:
    std::string nombre;
    const int id;                        // Debe inicializarse en lista de inicialización
    std::vector<int> datos;
    
public:
    // ✅ EFICIENTE - Lista de inicialización
    EjemploInicializacion(const std::string& n, int i, size_t tamaño) 
        : nombre(n), id(i), datos(tamaño) {
        // Los miembros se construyen directamente con los valores correctos
        // nombre se construye una vez con n
        // datos se construye una vez con tamaño
    }
    
    // ❌ INEFICIENTE - Asignación en el cuerpo
    /*
    EjemploInicializacion(const std::string& n, int i, size_t tamaño) {
        // Primero se llaman constructores por defecto (desperdicio)
        // Luego se asignan valores (operación adicional)
        nombre = n;              // Constructor por defecto + asignación
        // id = i;               // ¡Error! const no se puede asignar
        datos = std::vector<int>(tamaño);  // Constructor por defecto + asignación
    }
    */
};
```

#### Constructor de copia

El constructor de copia se llama cuando se crea un objeto como copia de otro objeto existente.

```cpp
struct PersonaConCopia {
    std::string nombre;
    int edad;
    std::unique_ptr<std::vector<std::string>> hobbies;  // Recurso complejo
    
    // Constructor normal
    PersonaConCopia(const std::string& n, int e) 
        : nombre(n), edad(e), hobbies(std::make_unique<std::vector<std::string>>()) {
    }
    
    // Constructor de copia personalizado (deep copy)
    PersonaConCopia(const PersonaConCopia& other) 
        : nombre(other.nombre), edad(other.edad) {
        
        // Deep copy del unique_ptr
        if (other.hobbies) {
            hobbies = std::make_unique<std::vector<std::string>>(*other.hobbies);
        }
        
        std::cout << "Copia profunda creada para " << nombre << std::endl;
    }
    
    // Operador de asignación de copia
    PersonaConCopia& operator=(const PersonaConCopia& other) {
        if (this != &other) {           // Protección contra auto-asignación
            nombre = other.nombre;
            edad = other.edad;
            
            // Deep copy del unique_ptr
            if (other.hobbies) {
                hobbies = std::make_unique<std::vector<std::string>>(*other.hobbies);
            } else {
                hobbies.reset();
            }
        }
        return *this;
    }
    
    void agregarHobby(const std::string& hobby) {
        hobbies->push_back(hobby);
    }
};

void ejemplo_constructor_copia() {
    PersonaConCopia original("María", 28);
    original.agregarHobby("Lectura");
    original.agregarHobby("Natación");
    
    PersonaConCopia copia = original;    // Constructor de copia
    PersonaConCopia otra("Juan", 30);
    otra = original;                     // Operador de asignación de copia
    
    // Cada objeto tiene su propia copia independiente de hobbies
}
```

#### Constructor de movimiento (C++11)

El constructor de movimiento permite transferir eficientemente recursos de un objeto temporal a un nuevo objeto.

```cpp
struct PersonaConMovimiento {
    std::string nombre;
    int edad;
    std::unique_ptr<std::vector<std::string>> hobbies;
    
    // Constructor normal
    PersonaConMovimiento(const std::string& n, int e) 
        : nombre(n), edad(e), hobbies(std::make_unique<std::vector<std::string>>()) {
    }
    
    // Constructor de copia
    PersonaConMovimiento(const PersonaConMovimiento& other) 
        : nombre(other.nombre), edad(other.edad) {
        if (other.hobbies) {
            hobbies = std::make_unique<std::vector<std::string>>(*other.hobbies);
        }
        std::cout << "Copia creada para " << nombre << std::endl;
    }
    
    // Constructor de movimiento
    PersonaConMovimiento(PersonaConMovimiento&& other) noexcept 
        : nombre(std::move(other.nombre))        // Move del string
        , edad(other.edad)                       // Copy de int (económico)
        , hobbies(std::move(other.hobbies)) {    // Move del unique_ptr
        
        // Dejar el objeto origen en estado válido pero no especificado
        other.edad = 0;
        
        std::cout << "Movimiento realizado para " << nombre << std::endl;
    }
    
    // Operador de asignación de movimiento
    PersonaConMovimiento& operator=(PersonaConMovimiento&& other) noexcept {
        if (this != &other) {
            nombre = std::move(other.nombre);
            edad = other.edad;
            hobbies = std::move(other.hobbies);
            
            other.edad = 0;
        }
        return *this;
    }
    
    void agregarHobby(const std::string& hobby) {
        if (hobbies) {
            hobbies->push_back(hobby);
        }
    }
};

PersonaConMovimiento crearPersonaTemporal() {
    PersonaConMovimiento temp("Temporal", 25);
    temp.agregarHobby("Deportes");
    return temp;                         // Return Value Optimization (RVO) o movimiento
}

void ejemplo_constructor_movimiento() {
    // Movimiento desde función
    PersonaConMovimiento p1 = crearPersonaTemporal();  // Movimiento (o RVO)
    
    // Movimiento explícito
    PersonaConMovimiento p2("Original", 30);
    PersonaConMovimiento p3 = std::move(p2);           // Movimiento explícito
    
    // p2 queda en estado válido pero indefinido
    // p3 tiene los recursos que tenía p2
}
```

#### Destructores

El destructor es responsable de limpiar recursos cuando un objeto es destruido.

```cpp
struct RecursoComplejo {
    std::string nombre;
    int* datos_dinamicos;
    std::FILE* archivo;
    size_t tamaño_datos;
    
    // Constructor
    RecursoComplejo(const std::string& n, size_t tamaño) 
        : nombre(n), tamaño_datos(tamaño) {
        
        // Asignar recursos
        datos_dinamicos = new int[tamaño_datos];
        
        std::string nombre_archivo = nombre + ".log";
        archivo = std::fopen(nombre_archivo.c_str(), "w");
        
        std::cout << "Recursos asignados para " << nombre << std::endl;
    }
    
    // Destructor - CRÍTICO para evitar leaks
    ~RecursoComplejo() {
        std::cout << "Destruyendo " << nombre << std::endl;
        
        // Liberar en orden inverso a la asignación
        if (archivo) {
            std::fclose(archivo);
            archivo = nullptr;
        }
        
        delete[] datos_dinamicos;
        datos_dinamicos = nullptr;
        
        std::cout << "Recursos liberados para " << nombre << std::endl;
    }
    
    // Prevenir copia accidental (regla de tres/cinco)
    RecursoComplejo(const RecursoComplejo&) = delete;
    RecursoComplejo& operator=(const RecursoComplejo&) = delete;
    
    // Permitir movimiento si es necesario
    RecursoComplejo(RecursoComplejo&& other) noexcept 
        : nombre(std::move(other.nombre))
        , datos_dinamicos(other.datos_dinamicos)
        , archivo(other.archivo)
        , tamaño_datos(other.tamaño_datos) {
        
        // Transferir propiedad
        other.datos_dinamicos = nullptr;
        other.archivo = nullptr;
        other.tamaño_datos = 0;
    }
};

void ejemplo_destructor() {
    {
        RecursoComplejo recurso("MiRecurso", 1000);
        // Usar recurso...
        
    }   // Destructor llamado automáticamente aquí
    
    std::cout << "Recurso destruido fuera del scope" << std::endl;
}
```

#### Regla de Tres/Cinco/Cero

**Regla de Tres (C++03):**

Si una clase necesita uno de estos, probablemente necesita los tres:

- Destructor
- Constructor de copia  
- Operador de asignación de copia

**Regla de Cinco (C++11):**

Agregar:

- Constructor de movimiento
- Operador de asignación de movimiento

**Regla de Cero (Moderna):**
Prefiera usar smart pointers y contenedores STL para evitar gestión manual de recursos.

```cpp
// ✅ REGLA DE CERO - Preferida
struct PersonaModerna {
    std::string nombre;
    int edad;
    std::unique_ptr<std::vector<std::string>> hobbies;
    
    PersonaModerna(const std::string& n, int e) 
        : nombre(n), edad(e), hobbies(std::make_unique<std::vector<std::string>>()) {
    }
    
    // ¡No se necesitan destructores ni constructores especiales!
    // Los smart pointers y strings se encargan automáticamente
};

// ❌ REGLA DE CINCO - Solo cuando es necesario
struct PersonaManual {
    std::string nombre;
    int edad;
    std::vector<std::string>* hobbies;  // Puntero crudo - requiere gestión manual
    
    // Constructor
    PersonaManual(const std::string& n, int e) 
        : nombre(n), edad(e), hobbies(new std::vector<std::string>()) {
    }
    
    // Destructor
    ~PersonaManual() {
        delete hobbies;
    }
    
    // Constructor de copia
    PersonaManual(const PersonaManual& other) 
        : nombre(other.nombre), edad(other.edad)
        , hobbies(new std::vector<std::string>(*other.hobbies)) {
    }
    
    // Operador de asignación de copia
    PersonaManual& operator=(const PersonaManual& other) {
        if (this != &other) {
            PersonaManual temp(other);    // Copy-and-swap idiom
            std::swap(nombre, temp.nombre);
            std::swap(edad, temp.edad);
            std::swap(hobbies, temp.hobbies);
        }
        return *this;
    }
    
    // Constructor de movimiento
    PersonaManual(PersonaManual&& other) noexcept 
        : nombre(std::move(other.nombre)), edad(other.edad), hobbies(other.hobbies) {
        other.hobbies = nullptr;
        other.edad = 0;
    }
    
    // Operador de asignación de movimiento
    PersonaManual& operator=(PersonaManual&& other) noexcept {
        if (this != &other) {
            delete hobbies;
            nombre = std::move(other.nombre);
            edad = other.edad;
            hobbies = other.hobbies;
            other.hobbies = nullptr;
            other.edad = 0;
        }
        return *this;
    }
};
```

### 1.3.3 Métodos de inicialización y gestión de recursos

La inicialización apropiada y gestión de recursos es crucial para crear software robusto y eficiente. C++ ofrece múltiples formas de inicializar objetos y gestionar recursos automáticamente.

#### Formas de inicialización en C++

**1. Inicialización por defecto:**

```cpp
struct ConfiguracionJuego {
    int ancho = 1920;                    // C++11: inicialización en lugar de declaración
    int alto = 1080;
    bool pantalla_completa = false;
    double volumen = 0.8;
    std::string idioma = "español";
    
    ConfiguracionJuego() = default;      // C++11: constructor por defecto explícito
};

void ejemplo_inicializacion_defecto() {
    ConfiguracionJuego config;           // Usa valores por defecto
    // config.ancho == 1920, config.alto == 1080, etc.
}
```

**2. Inicialización directa:**

```cpp
void ejemplo_inicializacion_directa() {
    ConfiguracionJuego config(1024, 768, true, 0.6, "inglés");  // Si hay constructor apropiado
    
    // Para tipos básicos
    int edad(25);                        // Inicialización directa
    double precio(99.99);
    std::string nombre("Juan");
}
```

**3. Inicialización de copia:**

```cpp
void ejemplo_inicializacion_copia() {
    ConfiguracionJuego config1;
    ConfiguracionJuego config2 = config1;   // Constructor de copia
    ConfiguracionJuego config3(config1);    // También constructor de copia
}
```

**4. Inicialización uniforme (C++11):**

```cpp
struct Producto {
    std::string nombre;
    double precio;
    int stock;
    std::vector<std::string> categorias;
    
    Producto(const std::string& n, double p, int s, std::initializer_list<std::string> cats)
        : nombre(n), precio(p), stock(s), categorias(cats) {
    }
};

void ejemplo_inicializacion_uniforme() {
    // Inicialización uniforme - más consistente y segura
    Producto producto1{"Laptop", 899.99, 15, {"Electrónicos", "Computadoras"}};
    
    // También funciona con tipos básicos
    int edad{25};                        // Previene conversiones peligrosas
    double precio{99.99};
    
    // Inicialización de contenedores
    std::vector<int> numeros{1, 2, 3, 4, 5};
    std::map<std::string, int> edades{{"Ana", 25}, {"Luis", 30}, {"María", 28}};
}
```

**5. Inicialización in-place (emplace):**

```cpp
void ejemplo_emplace() {
    std::vector<Producto> inventario;
    
    // emplace_back construye el objeto directamente en el vector
    inventario.emplace_back("Mouse", 25.99, 50, std::initializer_list<std::string>{"Electrónicos", "Accesorios"});
    
    // Más eficiente que:
    // inventario.push_back(Producto{"Mouse", 25.99, 50, {"Electrónicos", "Accesorios"}});
}
```

#### Gestión automática de recursos con RAII

**Implementación de RAII para recursos de archivo:**

```cpp
class GestorArchivo {
private:
    std::FILE* archivo;
    std::string nombre_archivo;
    
public:
    // Constructor adquiere el recurso
    explicit GestorArchivo(const std::string& nombre, const char* modo = "r") 
        : nombre_archivo(nombre) {
        
        archivo = std::fopen(nombre.c_str(), modo);
        if (!archivo) {
            throw std::runtime_error("No se pudo abrir el archivo: " + nombre);
        }
        
        std::cout << "Archivo abierto: " << nombre << std::endl;
    }
    
    // Destructor libera el recurso automáticamente
    ~GestorArchivo() {
        if (archivo) {
            std::fclose(archivo);
            std::cout << "Archivo cerrado: " << nombre_archivo << std::endl;
        }
    }
    
    // Prevenir copia accidental
    GestorArchivo(const GestorArchivo&) = delete;
    GestorArchivo& operator=(const GestorArchivo&) = delete;
    
    // Permitir movimiento
    GestorArchivo(GestorArchivo&& other) noexcept 
        : archivo(other.archivo), nombre_archivo(std::move(other.nombre_archivo)) {
        other.archivo = nullptr;
    }
    
    GestorArchivo& operator=(GestorArchivo&& other) noexcept {
        if (this != &other) {
            // Cerrar archivo actual si existe
            if (archivo) {
                std::fclose(archivo);
            }
            
            // Transferir recursos
            archivo = other.archivo;
            nombre_archivo = std::move(other.nombre_archivo);
            other.archivo = nullptr;
        }
        return *this;
    }
    
    // Métodos de acceso seguro
    bool escribir(const std::string& texto) {
        if (!archivo) return false;
        
        return std::fputs(texto.c_str(), archivo) != EOF;
    }
    
    std::string leer_linea() {
        if (!archivo) return "";
        
        char buffer[1024];
        if (std::fgets(buffer, sizeof(buffer), archivo)) {
            return std::string(buffer);
        }
        return "";
    }
    
    bool esta_abierto() const {
        return archivo != nullptr;
    }
};

void ejemplo_gestor_archivo() {
    try {
        GestorArchivo archivo("datos.txt", "w");
        
        archivo.escribir("Línea 1\n");
        archivo.escribir("Línea 2\n");
        
        // Archivo se cierra automáticamente al salir del scope
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    
    std::cout << "Archivo procesado correctamente" << std::endl;
}
```

**Pool de objetos para gestión eficiente:**

```cpp
template<typename T, size_t POOL_SIZE = 100>
class PoolObjetos {
private:
    alignas(T) char buffer[POOL_SIZE * sizeof(T)];  // Memoria alineada
    std::bitset<POOL_SIZE> ocupados;                 // Tracking de slots ocupados
    size_t siguiente_libre = 0;
    
public:
    PoolObjetos() = default;
    
    ~PoolObjetos() {
        // Destruir todos los objetos activos
        for (size_t i = 0; i < POOL_SIZE; ++i) {
            if (ocupados[i]) {
                reinterpret_cast<T*>(&buffer[i * sizeof(T)])->~T();
            }
        }
    }
    
    // Crear objeto in-place
    template<typename... Args>
    T* crear(Args&&... args) {
        // Buscar slot libre
        for (size_t i = siguiente_libre; i < POOL_SIZE; ++i) {
            if (!ocupados[i]) {
                ocupados[i] = true;
                siguiente_libre = i + 1;
                
                // Construir objeto in-place
                T* ptr = reinterpret_cast<T*>(&buffer[i * sizeof(T)]);
                new (ptr) T(std::forward<Args>(args)...);
                
                return ptr;
            }
        }
        
        // Buscar desde el inicio si no se encontró
        for (size_t i = 0; i < siguiente_libre; ++i) {
            if (!ocupados[i]) {
                ocupados[i] = true;
                siguiente_libre = i + 1;
                
                T* ptr = reinterpret_cast<T*>(&buffer[i * sizeof(T)]);
                new (ptr) T(std::forward<Args>(args)...);
                
                return ptr;
            }
        }
        
        return nullptr;  // Pool lleno
    }
    
    // Destruir objeto
    void destruir(T* ptr) {
        if (!ptr) return;
        
        // Calcular índice
        char* char_ptr = reinterpret_cast<char*>(ptr);
        size_t offset = char_ptr - buffer;
        size_t index = offset / sizeof(T);
        
        if (index < POOL_SIZE && ocupados[index]) {
            ptr->~T();                    // Llamar destructor
            ocupados[index] = false;      // Marcar como libre
            siguiente_libre = std::min(siguiente_libre, index);
        }
    }
    
    size_t objetos_activos() const {
        return ocupados.count();
    }
    
    bool esta_lleno() const {
        return ocupados.all();
    }
};

// Ejemplo de uso del pool
void ejemplo_pool_objetos() {
    PoolObjetos<Producto, 50> pool_productos;
    
    // Crear objetos eficientemente
    Producto* p1 = pool_productos.crear("Teclado", 45.99, 20, 
                                       std::initializer_list<std::string>{"Electrónicos"});
    
    Producto* p2 = pool_productos.crear("Monitor", 299.99, 10,
                                       std::initializer_list<std::string>{"Electrónicos", "Pantallas"});
    
    std::cout << "Objetos activos: " << pool_productos.objetos_activos() << std::endl;
    
    // Destruir cuando no se necesiten más
    pool_productos.destruir(p1);
    pool_productos.destruir(p2);
    
    std::cout << "Objetos después de destruir: " << pool_productos.objetos_activos() << std::endl;
}
```

#### Patrones de inicialización segura

**Builder pattern para inicialización compleja:**

```cpp
class ConfiguracionCompleja {
private:
    std::string servidor;
    int puerto;
    bool ssl_habilitado;
    std::chrono::seconds timeout;
    std::map<std::string, std::string> headers;
    
    // Constructor privado - solo el builder puede crear
    ConfiguracionCompleja() = default;
    
public:
    class Builder {
    private:
        ConfiguracionCompleja config;
        
    public:
        Builder& servidor(const std::string& srv) {
            config.servidor = srv;
            return *this;
        }
        
        Builder& puerto(int p) {
            if (p <= 0 || p > 65535) {
                throw std::invalid_argument("Puerto inválido");
            }
            config.puerto = p;
            return *this;
        }
        
        Builder& ssl(bool habilitado) {
            config.ssl_habilitado = habilitado;
            return *this;
        }
        
        Builder& timeout(std::chrono::seconds t) {
            config.timeout = t;
            return *this;
        }
        
        Builder& header(const std::string& clave, const std::string& valor) {
            config.headers[clave] = valor;
            return *this;
        }
        
        ConfiguracionCompleja build() {
            // Validaciones finales
            if (config.servidor.empty()) {
                throw std::runtime_error("Servidor no especificado");
            }
            if (config.puerto == 0) {
                config.puerto = config.ssl_habilitado ? 443 : 80;  // Valor por defecto
            }
            
            return std::move(config);
        }
    };
    
    // Getters
    const std::string& get_servidor() const { return servidor; }
    int get_puerto() const { return puerto; }
    bool ssl_habilitado_get() const { return ssl_habilitado; }
    std::chrono::seconds get_timeout() const { return timeout; }
    const std::map<std::string, std::string>& get_headers() const { return headers; }
};

void ejemplo_builder_pattern() {
    try {
        auto config = ConfiguracionCompleja::Builder()
            .servidor("api.ejemplo.com")
            .puerto(8080)
            .ssl(true)
            .timeout(std::chrono::seconds(30))
            .header("User-Agent", "MiApp/1.0")
            .header("Accept", "application/json")
            .build();
        
        std::cout << "Configuración creada para: " << config.get_servidor() 
                  << ":" << config.get_puerto() << std::endl;
                  
    } catch (const std::exception& e) {
        std::cerr << "Error en configuración: " << e.what() << std::endl;
    }
}
```

## Cuarto tema: 1.4 Programación Orientada a Objetos

### 1.4.1 Encapsulación y niveles de acceso

La **encapsulación** es uno de los pilares fundamentales de la programación orientada a objetos. Permite agrupar datos y métodos en una sola unidad (clase) y controlar el acceso a estos elementos mediante especificadores de acceso.

#### Diferencias fundamentales entre struct y class

**Visibilidad predeterminada:**

- **En una clase**: Los miembros son `private` por defecto
- **En un struct**: Los miembros son `public` por defecto

**Herencia predeterminada:**

- **En una clase**: La herencia es `private` por defecto, lo que significa que los miembros públicos de la clase base no son accesibles directamente a través de la clase derivada
- **En un struct**: La herencia es `public` por defecto, lo que significa que los miembros públicos de la estructura base son accesibles directamente a través de la estructura derivada

#### Especificadores de acceso

```cpp
class EjemploEncapsulacion {
private:
    // Solo accesible desde métodos de esta clase
    std::string datos_secretos;
    int contador_privado;
    
    void metodo_interno() {
        std::cout << "Operación interna realizada" << std::endl;
    }

protected:
    // Accesible desde esta clase y sus clases derivadas
    std::string datos_protegidos;
    int valor_heredable;
    
    void operacion_protegida() {
        std::cout << "Operación disponible para clases derivadas" << std::endl;
    }

public:
    // Accesible desde cualquier lugar
    std::string nombre_publico;
    
    // Constructor público
    EjemploEncapsulacion(const std::string& nombre) 
        : nombre_publico(nombre), contador_privado(0), valor_heredable(0) {
        datos_secretos = "Información confidencial de " + nombre;
        datos_protegidos = "Datos para herencia de " + nombre;
    }
    
    // Métodos públicos para acceso controlado
    void incrementar_contador() {
        contador_privado++;
        metodo_interno();  // Puede llamar métodos privados
    }
    
    int obtener_contador() const {
        return contador_privado;  // Lectura controlada de datos privados
    }
    
    // Setter con validación
    void establecer_valor_protegido(int nuevo_valor) {
        if (nuevo_valor >= 0 && nuevo_valor <= 1000) {
            valor_heredable = nuevo_valor;
        } else {
            throw std::invalid_argument("Valor fuera del rango permitido");
        }
    }
};
```

#### Implementación de una clase completamente encapsulada

```cpp
class CuentaBancaria {
private:
    std::string numero_cuenta;
    std::string titular;
    double saldo;
    std::vector<std::string> historial_transacciones;
    const double LIMITE_RETIRO_DIARIO = 1000.0;
    double retiros_hoy = 0.0;
    
    // Métodos auxiliares privados
    void registrar_transaccion(const std::string& tipo, double monto) {
        auto ahora = std::chrono::system_clock::now();
        auto tiempo_t = std::chrono::system_clock::to_time_t(ahora);
        
        std::string transaccion = tipo + ": $" + std::to_string(monto) 
                                + " - " + std::ctime(&tiempo_t);
        historial_transacciones.push_back(transaccion);
    }
    
    bool validar_monto(double monto) const {
        return monto > 0 && monto <= 1000000;  // Validaciones de negocio
    }

public:
    // Constructor que garantiza estado válido
    CuentaBancaria(const std::string& numero, const std::string& titular_nombre, double saldo_inicial = 0.0) {
        if (numero.empty() || titular_nombre.empty()) {
            throw std::invalid_argument("Número de cuenta y titular son obligatorios");
        }
        if (saldo_inicial < 0) {
            throw std::invalid_argument("El saldo inicial no puede ser negativo");
        }
        
        numero_cuenta = numero;
        titular = titular_nombre;
        saldo = saldo_inicial;
        
        if (saldo_inicial > 0) {
            registrar_transaccion("Depósito inicial", saldo_inicial);
        }
    }
    
    // Getters (acceso de solo lectura)
    std::string get_numero_cuenta() const { return numero_cuenta; }
    std::string get_titular() const { return titular; }
    double get_saldo() const { return saldo; }
    
    // Operaciones bancarias con validación
    bool depositar(double monto) {
        if (!validar_monto(monto)) {
            std::cerr << "Monto inválido para depósito" << std::endl;
            return false;
        }
        
        saldo += monto;
        registrar_transaccion("Depósito", monto);
        std::cout << "Depósito exitoso. Nuevo saldo: $" << saldo << std::endl;
        return true;
    }
    
    bool retirar(double monto) {
        if (!validar_monto(monto)) {
            std::cerr << "Monto inválido para retiro" << std::endl;
            return false;
        }
        
        if (monto > saldo) {
            std::cerr << "Fondos insuficientes" << std::endl;
            return false;
        }
        
        if (retiros_hoy + monto > LIMITE_RETIRO_DIARIO) {
            std::cerr << "Límite de retiro diario excedido" << std::endl;
            return false;
        }
        
        saldo -= monto;
        retiros_hoy += monto;
        registrar_transaccion("Retiro", monto);
        std::cout << "Retiro exitoso. Nuevo saldo: $" << saldo << std::endl;
        return true;
    }
    
    // Acceso controlado al historial
    void mostrar_historial(int ultimas_transacciones = 10) const {
        std::cout << "=== Historial de " << titular << " ===" << std::endl;
        
        int inicio = std::max(0, static_cast<int>(historial_transacciones.size()) - ultimas_transacciones);
        for (int i = inicio; i < historial_transacciones.size(); ++i) {
            std::cout << historial_transacciones[i];
        }
    }
    
    // Operación administrativa (podría requerir autenticación adicional)
    void resetear_limite_diario() {
        retiros_hoy = 0.0;
        std::cout << "Límite de retiro diario restablecido" << std::endl;
    }
};

void ejemplo_encapsulacion() {
    try {
        CuentaBancaria cuenta("001-123456", "María García", 1000.0);
        
        // Uso de la interfaz pública
        cuenta.depositar(500.0);
        cuenta.retirar(200.0);
        
        // ❌ Esto no compilaría - miembros privados no accesibles
        // cuenta.saldo += 1000000;  // Error de compilación
        // cuenta.historial_transacciones.clear();  // Error de compilación
        
        // ✅ Acceso controlado a través de métodos públicos
        std::cout << "Saldo actual: $" << cuenta.get_saldo() << std::endl;
        cuenta.mostrar_historial();
        
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
}
```

### 1.4.2 Herencia y polimorfismo

La **herencia** permite crear nuevas clases basadas en clases existentes, heredando sus propiedades y comportamientos. El **polimorfismo** permite que objetos de diferentes tipos respondan a la misma interfaz de manera específica.

#### Herencia básica

```cpp
class Persona {
private:
    std::string nombre;
    int edad;
    double altura;

public:
    Persona() : nombre(""), edad(0), altura(0.0) {}
    
    Persona(const std::string& n, int e, double a) 
        : nombre(n), edad(e), altura(a) {
        if (edad < 0 || altura < 0) {
            throw std::invalid_argument("Edad y altura deben ser positivas");
        }
    }
    
    // Getters
    std::string get_nombre() const { return nombre; }
    int get_edad() const { return edad; }
    double get_altura() const { return altura; }
    
    // Setters con validación
    void set_edad(int nueva_edad) {
        if (nueva_edad >= 0 && nueva_edad <= 150) {
            edad = nueva_edad;
        }
    }
    
    virtual void mostrar_info() const {
        std::cout << "Persona: " << nombre 
                  << ", Edad: " << edad 
                  << ", Altura: " << altura << "m" << std::endl;
    }
    
    // Destructor virtual para polimorfismo seguro
    virtual ~Persona() = default;
};

class Estudiante : public Persona {
private:
    std::string carrera;
    int anio_ingreso;
    double promedio;
    std::vector<std::string> materias_cursadas;

public:
    Estudiante(const std::string& nombre, int edad, double altura, 
               const std::string& carrera_nombre, int anio) 
        : Persona(nombre, edad, altura)  // Llamada al constructor base
        , carrera(carrera_nombre)
        , anio_ingreso(anio)
        , promedio(0.0) {
        
        if (anio_ingreso < 1900 || anio_ingreso > 2030) {
            throw std::invalid_argument("Año de ingreso inválido");
        }
    }
    
    // Getters específicos
    std::string get_carrera() const { return carrera; }
    int get_anio_ingreso() const { return anio_ingreso; }
    double get_promedio() const { return promedio; }
    
    // Métodos específicos de Estudiante
    void agregar_materia(const std::string& materia, double calificacion) {
        if (calificacion >= 0.0 && calificacion <= 10.0) {
            materias_cursadas.push_back(materia);
            // Recalcular promedio (simplificado)
            promedio = (promedio * (materias_cursadas.size() - 1) + calificacion) 
                      / materias_cursadas.size();
        }
    }
    
    int materias_aprobadas() const {
        return materias_cursadas.size();  // Simplificado
    }
    
    // Override del método virtual
    void mostrar_info() const override {
        Persona::mostrar_info();  // Llamar al método base
        std::cout << "Estudiante de: " << carrera 
                  << ", Ingreso: " << anio_ingreso
                  << ", Promedio: " << promedio
                  << ", Materias cursadas: " << materias_cursadas.size() << std::endl;
    }
};

class Empleado : public Persona {
private:
    std::string puesto;
    double salario;
    std::string departamento;
    int anios_experiencia;

public:
    Empleado(const std::string& nombre, int edad, double altura,
             const std::string& puesto_trabajo, double salario_inicial, 
             const std::string& depto)
        : Persona(nombre, edad, altura)
        , puesto(puesto_trabajo)
        , salario(salario_inicial)
        , departamento(depto)
        , anios_experiencia(0) {
        
        if (salario < 0) {
            throw std::invalid_argument("El salario no puede ser negativo");
        }
    }
    
    // Getters específicos
    std::string get_puesto() const { return puesto; }
    double get_salario() const { return salario; }
    std::string get_departamento() const { return departamento; }
    
    // Métodos específicos
    void aumentar_salario(double porcentaje) {
        if (porcentaje > 0 && porcentaje <= 100) {
            salario *= (1.0 + porcentaje / 100.0);
        }
    }
    
    void cambiar_puesto(const std::string& nuevo_puesto, double nuevo_salario) {
        puesto = nuevo_puesto;
        if (nuevo_salario > 0) {
            salario = nuevo_salario;
        }
    }
    
    // Override del método virtual
    void mostrar_info() const override {
        Persona::mostrar_info();
        std::cout << "Empleado: " << puesto 
                  << ", Departamento: " << departamento
                  << ", Salario: $" << salario
                  << ", Experiencia: " << anios_experiencia << " años" << std::endl;
    }
};

void ejemplo_herencia() {
    // Crear objetos de diferentes tipos
    Persona persona("Juan Pérez", 30, 1.75);
    Estudiante estudiante("Ana López", 22, 1.68, "Ingeniería en Software", 2020);
    Empleado empleado("Carlos Ruiz", 35, 1.80, "Desarrollador Senior", 75000, "TI");
    
    // Usar métodos específicos
    estudiante.agregar_materia("Algoritmos", 9.5);
    estudiante.agregar_materia("Estructuras de Datos", 8.8);
    
    empleado.aumentar_salario(10.0);  // Aumento del 10%
    
    // Mostrar información
    persona.mostrar_info();
    estudiante.mostrar_info();
    empleado.mostrar_info();
}
```

#### Polimorfismo dinámico

```cpp
// Función que demuestra polimorfismo
void procesar_persona(const Persona& p) {
    p.mostrar_info();  // Llama al método apropiado según el tipo real del objeto
}

void procesar_persona_ptr(const Persona* p) {
    if (p != nullptr) {
        p->mostrar_info();  // Polimorfismo a través de puntero
    }
}

void ejemplo_polimorfismo() {
    // Crear diferentes tipos de objetos
    Persona persona("María", 28, 1.65);
    Estudiante estudiante("Pedro", 20, 1.78, "Medicina", 2022);
    Empleado empleado("Laura", 32, 1.70, "Gerente", 85000, "Ventas");
    
    std::cout << "=== Polimorfismo por referencia ===" << std::endl;
    procesar_persona(persona);      // Llama Persona::mostrar_info()
    procesar_persona(estudiante);   // Llama Estudiante::mostrar_info()
    procesar_persona(empleado);     // Llama Empleado::mostrar_info()
    
    std::cout << "\n=== Polimorfismo por puntero ===" << std::endl;
    std::vector<std::unique_ptr<Persona>> personas;
    personas.push_back(std::make_unique<Persona>("Ana", 25, 1.60));
    personas.push_back(std::make_unique<Estudiante>("Luis", 19, 1.85, "Física", 2023));
    personas.push_back(std::make_unique<Empleado>("Carmen", 40, 1.68, "Directora", 120000, "Administración"));
    
    for (const auto& p : personas) {
        p->mostrar_info();  // Polimorfismo dinámico
    }
}
```

### 1.4.3 Características avanzadas: métodos virtuales, clases abstractas

#### Métodos virtuales y override

```cpp
class Animal {
public:
    // Método virtual - puede ser sobrescrito
    virtual void hacer_sonido() const {
        std::cout << "El animal hace un sonido genérico." << std::endl;
    }
    
    // Método virtual - comportamiento común pero sobrescribible
    virtual void mover() const {
        std::cout << "El animal se mueve." << std::endl;
    }
    
    // Método no virtual - comportamiento fijo
    void dormir() const {
        std::cout << "El animal duerme." << std::endl;
    }
    
    // Destructor virtual - CRÍTICO para herencia
    virtual ~Animal() {
        std::cout << "Destructor de Animal llamado" << std::endl;
    }
};

class Perro : public Animal {
public:
    // Override explícito (C++11) - mejora legibilidad y detección de errores
    void hacer_sonido() const override {
        std::cout << "El perro ladra: ¡Guau, guau!" << std::endl;
    }
    
    void mover() const override {
        std::cout << "El perro corre con cuatro patas." << std::endl;
    }
    
    // Método específico de Perro
    void traer_pelota() const {
        std::cout << "El perro trae la pelota." << std::endl;
    }
    
    ~Perro() override {
        std::cout << "Destructor de Perro llamado" << std::endl;
    }
};

class Gato : public Animal {
public:
    void hacer_sonido() const override {
        std::cout << "El gato maúlla: ¡Miau!" << std::endl;
    }
    
    void mover() const override {
        std::cout << "El gato camina silenciosamente." << std::endl;
    }
    
    // Método específico de Gato
    void escalar() const {
        std::cout << "El gato escala el árbol." << std::endl;
    }
    
    ~Gato() override {
        std::cout << "Destructor de Gato llamado" << std::endl;
    }
};

void ejemplo_metodos_virtuales() {
    std::cout << "=== Uso directo de objetos ===" << std::endl;
    Perro mi_perro;
    Gato mi_gato;
    
    mi_perro.hacer_sonido();    // Perro::hacer_sonido()
    mi_gato.hacer_sonido();     // Gato::hacer_sonido()
    
    std::cout << "\n=== Polimorfismo con punteros ===" << std::endl;
    std::vector<std::unique_ptr<Animal>> animales;
    animales.push_back(std::make_unique<Perro>());
    animales.push_back(std::make_unique<Gato>());
    animales.push_back(std::make_unique<Animal>());
    
    for (const auto& animal : animales) {
        animal->hacer_sonido();  // Llama al método correcto según el tipo
        animal->mover();
        animal->dormir();        // Método no virtual - siempre Animal::dormir()
        std::cout << "---" << std::endl;
    }
}
```

#### Métodos virtuales puros y clases abstractas

```cpp
// Clase abstracta - no se puede instanciar directamente
class Figura {
protected:
    std::string nombre;
    
public:
    explicit Figura(const std::string& n) : nombre(n) {}
    
    // Métodos virtuales puros - deben ser implementados por clases derivadas
    virtual double calcular_area() const = 0;
    virtual double calcular_perimetro() const = 0;
    virtual void dibujar() const = 0;
    
    // Método virtual con implementación por defecto
    virtual void mostrar_info() const {
        std::cout << "Figura: " << nombre << std::endl;
        std::cout << "Área: " << calcular_area() << std::endl;
        std::cout << "Perímetro: " << calcular_perimetro() << std::endl;
    }
    
    // Getter no virtual
    std::string get_nombre() const { return nombre; }
    
    // Destructor virtual
    virtual ~Figura() = default;
};

class Rectangulo : public Figura {
private:
    double ancho, alto;
    
public:
    Rectangulo(double a, double h) 
        : Figura("Rectángulo"), ancho(a), alto(h) {
        if (ancho <= 0 || alto <= 0) {
            throw std::invalid_argument("Dimensiones deben ser positivas");
        }
    }
    
    // Implementación obligatoria de métodos virtuales puros
    double calcular_area() const override {
        return ancho * alto;
    }
    
    double calcular_perimetro() const override {
        return 2 * (ancho + alto);
    }
    
    void dibujar() const override {
        std::cout << "Dibujando rectángulo " << ancho << "x" << alto << std::endl;
        for (int i = 0; i < static_cast<int>(alto); ++i) {
            for (int j = 0; j < static_cast<int>(ancho); ++j) {
                std::cout << "* ";
            }
            std::cout << std::endl;
        }
    }
    
    // Getters específicos
    double get_ancho() const { return ancho; }
    double get_alto() const { return alto; }
};

class Circulo : public Figura {
private:
    double radio;
    static constexpr double PI = 3.14159265359;
    
public:
    explicit Circulo(double r) 
        : Figura("Círculo"), radio(r) {
        if (radio <= 0) {
            throw std::invalid_argument("Radio debe ser positivo");
        }
    }
    
    double calcular_area() const override {
        return PI * radio * radio;
    }
    
    double calcular_perimetro() const override {
        return 2 * PI * radio;
    }
    
    void dibujar() const override {
        std::cout << "Dibujando círculo con radio " << radio << std::endl;
        int diameter = static_cast<int>(radio * 2);
        for (int i = 0; i < diameter; ++i) {
            for (int j = 0; j < diameter; ++j) {
                double distance = std::sqrt((i - radio) * (i - radio) + (j - radio) * (j - radio));
                if (distance <= radio) {
                    std::cout << "* ";
                } else {
                    std::cout << "  ";
                }
            }
            std::cout << std::endl;
        }
    }
    
    double get_radio() const { return radio; }
};

// Clase que usa figuras polimórficamente
class GestorFiguras {
private:
    std::vector<std::unique_ptr<Figura>> figuras;
    
public:
    void agregar_figura(std::unique_ptr<Figura> figura) {
        if (figura) {
            figuras.push_back(std::move(figura));
        }
    }
    
    void mostrar_todas() const {
        for (const auto& figura : figuras) {
            figura->mostrar_info();
            figura->dibujar();
            std::cout << "=========================" << std::endl;
        }
    }
    
    double area_total() const {
        double total = 0.0;
        for (const auto& figura : figuras) {
            total += figura->calcular_area();
        }
        return total;
    }
    
    void figuras_por_tipo() const {
        std::map<std::string, int> contador;
        for (const auto& figura : figuras) {
            contador[figura->get_nombre()]++;
        }
        
        std::cout << "Resumen de figuras:" << std::endl;
        for (const auto& [tipo, cantidad] : contador) {
            std::cout << tipo << ": " << cantidad << std::endl;
        }
    }
};

void ejemplo_clases_abstractas() {
    try {
        GestorFiguras gestor;
        
        // ❌ Esto no compilaría - Figura es abstracta
        // auto figura = std::make_unique<Figura>("Test");
        
        // ✅ Crear instancias de clases concretas
        gestor.agregar_figura(std::make_unique<Rectangulo>(4, 3));
        gestor.agregar_figura(std::make_unique<Circulo>(2.5));
        gestor.agregar_figura(std::make_unique<Rectangulo>(2, 2));
        
        gestor.mostrar_todas();
        
        std::cout << "Área total: " << gestor.area_total() << std::endl;
        gestor.figuras_por_tipo();
        
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
}
```

## Quinto tema: 1.5 Tipos de Datos Avanzados

### 1.5.1 Enumeraciones (enum y enum class)

Las enumeraciones proporcionan una forma de crear tipos de datos con un conjunto limitado de valores nombrados, mejorando la legibilidad del código y reduciendo errores.

#### Enumeraciones clásicas (enum)

```cpp
// Enumeración tradicional de C
enum Estado {
    INACTIVO,     // 0
    ACTIVO,       // 1
    PAUSADO,      // 2
    ERROR         // 3
};

enum Prioridad {
    BAJA = 1,     // Valor específico
    MEDIA = 5,    // Valor específico
    ALTA = 10     // Valor específico
};

void ejemplo_enum_clasico() {
    Estado estado_actual = ACTIVO;
    Prioridad prioridad_tarea = ALTA;
    
    // Conversión implícita a int (puede ser problemática)
    int valor_estado = estado_actual;  // valor_estado = 1
    int valor_prioridad = prioridad_tarea;  // valor_prioridad = 10
    
    // Comparaciones
    if (estado_actual == ACTIVO) {
        std::cout << "El sistema está activo" << std::endl;
    }
    
    // Problemas potenciales:
    // 1. Contaminación del espacio de nombres
    // 2. Conversión implícita a enteros
    if (estado_actual == valor_prioridad) {  // ¡Comparación sin sentido pero válida!
        std::cout << "Esto puede compilar pero no tiene sentido lógico" << std::endl;
    }
}
```

#### Enumeraciones con ámbito (enum class) - C++11

```cpp
// Enumeración moderna con ámbito fuerte
enum class TipoArchivo {
    TEXTO,
    IMAGEN,
    VIDEO,
    AUDIO,
    DOCUMENTO,
    EJECUTABLE
};

enum class NivelAcceso {
    PUBLICO = 1,
    PROTEGIDO = 5,
    PRIVADO = 10,
    ADMINISTRADOR = 15
};

// Enumeración con tipo base específico
enum class CodigoError : unsigned char {
    SIN_ERROR = 0,
    ARCHIVO_NO_ENCONTRADO = 1,
    ACCESO_DENEGADO = 2,
    MEMORIA_INSUFICIENTE = 3,
    CONEXION_PERDIDA = 4,
    DATOS_CORRUPTOS = 5
};

class GestorArchivos {
private:
    struct InfoArchivo {
        std::string nombre;
        TipoArchivo tipo;
        NivelAcceso acceso;
        size_t tamaño;
        std::chrono::system_clock::time_point fecha_modificacion;
    };
    
    std::vector<InfoArchivo> archivos;
    
public:
    CodigoError agregar_archivo(const std::string& nombre, TipoArchivo tipo, NivelAcceso acceso, size_t tamaño) {
        if (nombre.empty()) {
            return CodigoError::ARCHIVO_NO_ENCONTRADO;
        }
        
        // Verificar si el archivo ya existe
        for (const auto& archivo : archivos) {
            if (archivo.nombre == nombre) {
                return CodigoError::ARCHIVO_NO_ENCONTRADO;  // Ya existe
            }
        }
        
        InfoArchivo nuevo_archivo{
            nombre,
            tipo,
            acceso,
            tamaño,
            std::chrono::system_clock::now()
        };
        
        archivos.push_back(nuevo_archivo);
        return CodigoError::SIN_ERROR;
    }
    
    std::string obtener_descripcion_tipo(TipoArchivo tipo) const {
        switch (tipo) {
            case TipoArchivo::TEXTO:     return "Archivo de texto";
            case TipoArchivo::IMAGEN:    return "Archivo de imagen";
            case TipoArchivo::VIDEO:     return "Archivo de video";
            case TipoArchivo::AUDIO:     return "Archivo de audio";
            case TipoArchivo::DOCUMENTO: return "Documento";
            case TipoArchivo::EJECUTABLE: return "Archivo ejecutable";
            default:                     return "Tipo desconocido";
        }
    }
    
    std::string obtener_descripcion_error(CodigoError error) const {
        switch (error) {
            case CodigoError::SIN_ERROR:             return "Operación exitosa";
            case CodigoError::ARCHIVO_NO_ENCONTRADO: return "Archivo no encontrado";
            case CodigoError::ACCESO_DENEGADO:       return "Acceso denegado";
            case CodigoError::MEMORIA_INSUFICIENTE:  return "Memoria insuficiente";
            case CodigoError::CONEXION_PERDIDA:      return "Conexión perdida";
            case CodigoError::DATOS_CORRUPTOS:       return "Datos corruptos";
            default:                                 return "Error desconocido";
        }
    }
    
    std::vector<InfoArchivo> filtrar_por_tipo(TipoArchivo tipo) const {
        std::vector<InfoArchivo> resultado;
        for (const auto& archivo : archivos) {
            if (archivo.tipo == tipo) {
                resultado.push_back(archivo);
            }
        }
        return resultado;
    }
    
    bool puede_acceder(const InfoArchivo& archivo, NivelAcceso nivel_usuario) const {
        return static_cast<int>(nivel_usuario) >= static_cast<int>(archivo.acceso);
    }
};

void ejemplo_enum_class() {
    GestorArchivos gestor;
    
    // Uso con ámbito fuerte - más claro y seguro
    CodigoError resultado = gestor.agregar_archivo("documento.pdf", TipoArchivo::DOCUMENTO, NivelAcceso::PUBLICO, 1024);
    
    if (resultado == CodigoError::SIN_ERROR) {
        std::cout << "Archivo agregado exitosamente" << std::endl;
    } else {
        std::cout << "Error: " << gestor.obtener_descripcion_error(resultado) << std::endl;
    }
    
    // ❌ Estas líneas no compilarían - no hay conversión implícita
    // int valor = TipoArchivo::IMAGEN;  // Error de compilación
    // if (TipoArchivo::VIDEO == NivelAcceso::PUBLICO) { }  // Error de compilación
    
    // ✅ Conversión explícita cuando sea necesaria
    int tipo_como_int = static_cast<int>(TipoArchivo::IMAGEN);
    std::cout << "Tipo imagen como entero: " << tipo_como_int << std::endl;
}
```

### 1.5.2 Uniones (union) y variantes (std::variant)

#### Uniones tradicionales

Las uniones permiten que diferentes tipos de datos compartan la misma ubicación de memoria.

```cpp
// Unión básica - todos los miembros comparten la misma memoria
union DatoBasico {
    int entero;
    float flotante;
    char caracter;
    bool booleano;
};

// Unión con constructor y destructor (C++11)
union DatoAvanzado {
    int numero;
    double decimal;
    
    // Constructor por defecto
    DatoAvanzado() : numero(0) {}
    
    // Constructor específico
    explicit DatoAvanzado(int n) : numero(n) {}
    explicit DatoAvanzado(double d) : decimal(d) {}
    
    // Destructor (necesario si hay miembros no triviales)
    ~DatoAvanzado() {}
};

// Unión etiquetada - incluye información sobre qué tipo está activo
class ValorVariado {
public:
    enum class Tipo {
        ENTERO,
        DECIMAL,
        TEXTO
    };
    
private:
    Tipo tipo_actual;
    
    union {
        int valor_entero;
        double valor_decimal;
        std::string valor_texto;  // Requiere manejo manual de constructor/destructor
    };
    
public:
    // Constructor para entero
    ValorVariado(int valor) : tipo_actual(Tipo::ENTERO), valor_entero(valor) {}
    
    // Constructor para decimal
    ValorVariado(double valor) : tipo_actual(Tipo::DECIMAL), valor_decimal(valor) {}
    
    // Constructor para texto
    ValorVariado(const std::string& valor) : tipo_actual(Tipo::TEXTO) {
        new(&valor_texto) std::string(valor);  // Placement new
    }
    
    // Constructor de copia
    ValorVariado(const ValorVariado& otro) : tipo_actual(otro.tipo_actual) {
        switch (tipo_actual) {
            case Tipo::ENTERO:
                valor_entero = otro.valor_entero;
                break;
            case Tipo::DECIMAL:
                valor_decimal = otro.valor_decimal;
                break;
            case Tipo::TEXTO:
                new(&valor_texto) std::string(otro.valor_texto);
                break;
        }
    }
    
    // Destructor
    ~ValorVariado() {
        if (tipo_actual == Tipo::TEXTO) {
            valor_texto.~string();  // Destructor manual
        }
    }
    
    Tipo obtener_tipo() const { return tipo_actual; }
    
    int como_entero() const {
        if (tipo_actual != Tipo::ENTERO) {
            throw std::runtime_error("El valor no es un entero");
        }
        return valor_entero;
    }
    
    double como_decimal() const {
        if (tipo_actual != Tipo::DECIMAL) {
            throw std::runtime_error("El valor no es un decimal");
        }
        return valor_decimal;
    }
    
    const std::string& como_texto() const {
        if (tipo_actual != Tipo::TEXTO) {
            throw std::runtime_error("El valor no es texto");
        }
        return valor_texto;
    }
    
    void mostrar() const {
        switch (tipo_actual) {
            case Tipo::ENTERO:
                std::cout << "Entero: " << valor_entero << std::endl;
                break;
            case Tipo::DECIMAL:
                std::cout << "Decimal: " << valor_decimal << std::endl;
                break;
            case Tipo::TEXTO:
                std::cout << "Texto: " << valor_texto << std::endl;
                break;
        }
    }
};

void ejemplo_unions() {
    // Unión básica
    DatoBasico dato;
    dato.entero = 42;
    std::cout << "Como entero: " << dato.entero << std::endl;
    
    dato.flotante = 3.14f;
    std::cout << "Como flotante: " << dato.flotante << std::endl;
    // Nota: dato.entero ahora contiene datos no válidos
    
    // Unión etiquetada
    std::vector<ValorVariado> valores;
    valores.emplace_back(100);
    valores.emplace_back(3.14159);
    valores.emplace_back(std::string("Hola mundo"));
    
    for (const auto& valor : valores) {
        valor.mostrar();
    }
}
```

#### Variantes modernas (std::variant) - C++17

```cpp
#include <variant>

// std::variant - alternativa moderna y segura a las uniones
using VarianteDato = std::variant<int, double, std::string, bool>;

class ProcesadorVariantes {
public:
    // Visitor pattern para procesar variantes
    struct Visitor {
        void operator()(int valor) const {
            std::cout << "Procesando entero: " << valor << std::endl;
        }
        
        void operator()(double valor) const {
            std::cout << "Procesando decimal: " << std::fixed << std::setprecision(2) << valor << std::endl;
        }
        
        void operator()(const std::string& valor) const {
            std::cout << "Procesando texto: '" << valor << "'" << std::endl;
        }
        
        void operator()(bool valor) const {
            std::cout << "Procesando booleano: " << (valor ? "true" : "false") << std::endl;
        }
    };
    
    static void procesar_variante(const VarianteDato& var) {
        std::visit(Visitor{}, var);
    }
    
    static std::string convertir_a_string(const VarianteDato& var) {
        return std::visit([](const auto& valor) -> std::string {
            using T = std::decay_t<decltype(valor)>;
            if constexpr (std::is_same_v<T, std::string>) {
                return valor;
            } else if constexpr (std::is_same_v<T, bool>) {
                return valor ? "true" : "false";
            } else {
                return std::to_string(valor);
            }
        }, var);
    }
    
    static double convertir_a_numero(const VarianteDato& var) {
        return std::visit([](const auto& valor) -> double {
            using T = std::decay_t<decltype(valor)>;
            if constexpr (std::is_same_v<T, int>) {
                return static_cast<double>(valor);
            } else if constexpr (std::is_same_v<T, double>) {
                return valor;
            } else if constexpr (std::is_same_v<T, bool>) {
                return valor ? 1.0 : 0.0;
            } else if constexpr (std::is_same_v<T, std::string>) {
                try {
                    return std::stod(valor);
                } catch (...) {
                    return 0.0;
                }
            }
            return 0.0;
        }, var);
    }
};

void ejemplo_variant() {
    std::vector<VarianteDato> datos = {
        42,
        3.14159,
        std::string("C++ moderno"),
        true,
        -17,
        std::string("123.45")
    };
    
    std::cout << "=== Procesamiento con visitor ===" << std::endl;
    for (const auto& dato : datos) {
        ProcesadorVariantes::procesar_variante(dato);
    }
    
    std::cout << "\n=== Conversión a string ===" << std::endl;
    for (const auto& dato : datos) {
        std::cout << "Como string: " << ProcesadorVariantes::convertir_a_string(dato) << std::endl;
    }
    
    std::cout << "\n=== Verificación de tipos ===" << std::endl;
    for (const auto& dato : datos) {
        if (std::holds_alternative<int>(dato)) {
            std::cout << "Es un entero: " << std::get<int>(dato) << std::endl;
        } else if (std::holds_alternative<std::string>(dato)) {
            std::cout << "Es una cadena: " << std::get<std::string>(dato) << std::endl;
        }
    }
    
    std::cout << "\n=== Acceso seguro ===" << std::endl;
    for (const auto& dato : datos) {
        try {
            // Acceso que puede fallar si el tipo no coincide
            auto valor_entero = std::get<int>(dato);
            std::cout << "Entero encontrado: " << valor_entero << std::endl;
        } catch (const std::bad_variant_access&) {
            // No es un entero, intentar otros tipos o usar get_if
            if (auto ptr = std::get_if<double>(&dato)) {
                std::cout << "Es un double: " << *ptr << std::endl;
            }
        }
    }
}
```

### 1.5.3 Estructuras de datos personalizadas y typedef

#### Alias de tipos con typedef y using

```cpp
// Typedef tradicional
typedef unsigned long long ULL;
typedef std::vector<int> VectorEnteros;
typedef std::map<std::string, double> MapaPrecios;

// Using (C++11) - sintaxis más clara
using Byte = unsigned char;
using Entero64 = long long;
using ListaStrings = std::vector<std::string>;
using FuncionCallback = std::function<void(const std::string&)>;

// Alias para punteros a función
using FuncionOperacion = double(*)(double, double);
using FuncionComparacion = bool(*)(const std::string&, const std::string&);

// Templates con using (más legible que typedef)
template<typename T>
using VectorPtr = std::vector<std::unique_ptr<T>>;

template<typename K, typename V>
using MapaPersonalizado = std::unordered_map<K, V>;
```

#### Estructuras de datos personalizadas complejas

```cpp
// Sistema de gestión de estudiantes con estructuras personalizadas
namespace SistemaAcademico {
    
    // Enumeraciones para el sistema
    enum class TipoMateria {
        OBLIGATORIA,
        OPTATIVA,
        ELECTIVA,
        PRACTICA_PROFESIONAL
    };
    
    enum class EstadoMateria {
        NO_CURSADA,
        CURSANDO,
        APROBADA,
        DESAPROBADA,
        ABANDONO
    };
    
    // Estructura para calificaciones
    struct Calificacion {
        double nota;
        std::string tipo;  // "Parcial", "Final", "TP", etc.
        std::chrono::system_clock::time_point fecha;
        std::string observaciones;
        
        Calificacion(double n, const std::string& t, const std::string& obs = "")
            : nota(n), tipo(t), fecha(std::chrono::system_clock::now()), observaciones(obs) {}
        
        bool es_aprobatoria() const {
            return nota >= 6.0;  // Criterio de aprobación
        }
    };
    
    // Alias para colecciones comunes
    using ListaCalificaciones = std::vector<Calificacion>;
    using MapaNotas = std::map<std::string, ListaCalificaciones>;
    
    // Estructura para materias
    struct Materia {
        std::string codigo;
        std::string nombre;
        int creditos;
        TipoMateria tipo;
        std::vector<std::string> prerequisitos;
        
        Materia(const std::string& cod, const std::string& nom, int cred, TipoMateria t)
            : codigo(cod), nombre(nom), creditos(cred), tipo(t) {}
        
        void agregar_prerequisito(const std::string& codigo_prerequisito) {
            prerequisitos.push_back(codigo_prerequisito);
        }
        
        bool tiene_prerequisitos() const {
            return !prerequisitos.empty();
        }
    };
    
    // Estructura para el historial académico
    struct HistorialAcademico {
        std::string codigo_materia;
        EstadoMateria estado;
        ListaCalificaciones calificaciones;
        std::string anio_cursada;
        std::string cuatrimestre;
        
        HistorialAcademico(const std::string& codigo, const std::string& anio, const std::string& cuatr)
            : codigo_materia(codigo), estado(EstadoMateria::NO_CURSADA), anio_cursada(anio), cuatrimestre(cuatr) {}
        
        void agregar_calificacion(const Calificacion& cal) {
            calificaciones.push_back(cal);
            actualizar_estado();
        }
        
        double promedio_calificaciones() const {
            if (calificaciones.empty()) return 0.0;
            
            double suma = 0.0;
            for (const auto& cal : calificaciones) {
                suma += cal.nota;
            }
            return suma / calificaciones.size();
        }
        
        bool materia_aprobada() const {
            return estado == EstadoMateria::APROBADA;
        }
        
    private:
        void actualizar_estado() {
            if (calificaciones.empty()) {
                estado = EstadoMateria::NO_CURSADA;
                return;
            }
            
            // Lógica simplificada: materia aprobada si todas las notas son >= 6
            bool todas_aprobadas = true;
            for (const auto& cal : calificaciones) {
                if (!cal.es_aprobatoria()) {
                    todas_aprobadas = false;
                    break;
                }
            }
            
            estado = todas_aprobadas ? EstadoMateria::APROBADA : EstadoMateria::CURSANDO;
        }
    };
    
    // Clase principal del estudiante
    class Estudiante {
    private:
        std::string legajo;
        std::string nombre;
        std::string apellido;
        std::string carrera;
        std::vector<HistorialAcademico> historial;
        std::map<std::string, Materia> materias_disponibles;
        
    public:
        Estudiante(const std::string& leg, const std::string& nom, const std::string& ap, const std::string& carr)
            : legajo(leg), nombre(nom), apellido(ap), carrera(carr) {}
        
        void agregar_materia_disponible(const Materia& materia) {
            materias_disponibles[materia.codigo] = materia;
        }
        
        bool inscribir_materia(const std::string& codigo_materia, const std::string& anio, const std::string& cuatrimestre) {
            // Verificar que la materia existe
            auto it = materias_disponibles.find(codigo_materia);
            if (it == materias_disponibles.end()) {
                std::cerr << "Materia no encontrada: " << codigo_materia << std::endl;
                return false;
            }
            
            // Verificar prerequisitos
            const Materia& materia = it->second;
            for (const auto& prerequisito : materia.prerequisitos) {
                if (!materia_cursada_y_aprobada(prerequisito)) {
                    std::cerr << "Prerequisito no cumplido: " << prerequisito << std::endl;
                    return false;
                }
            }
            
            // Verificar que no esté ya inscripto
            for (const auto& hist : historial) {
                if (hist.codigo_materia == codigo_materia && 
                    (hist.estado == EstadoMateria::CURSANDO || hist.estado == EstadoMateria::APROBADA)) {
                    std::cerr << "Ya está inscripto o aprobó la materia: " << codigo_materia << std::endl;
                    return false;
                }
            }
            
            // Inscribir
            historial.emplace_back(codigo_materia, anio, cuatrimestre);
            std::cout << "Inscripción exitosa en: " << materia.nombre << std::endl;
            return true;
        }
        
        void agregar_calificacion(const std::string& codigo_materia, const Calificacion& calificacion) {
            for (auto& hist : historial) {
                if (hist.codigo_materia == codigo_materia) {
                    hist.agregar_calificacion(calificacion);
                    return;
                }
            }
            std::cerr << "No está inscripto en la materia: " << codigo_materia << std::endl;
        }
        
        double promedio_general() const {
            double suma_notas = 0.0;
            int cantidad_materias = 0;
            
            for (const auto& hist : historial) {
                if (hist.materia_aprobada()) {
                    suma_notas += hist.promedio_calificaciones();
                    cantidad_materias++;
                }
            }
            
            return cantidad_materias > 0 ? suma_notas / cantidad_materias : 0.0;
        }
        
        int creditos_aprobados() const {
            int total_creditos = 0;
            for (const auto& hist : historial) {
                if (hist.materia_aprobada()) {
                    auto it = materias_disponibles.find(hist.codigo_materia);
                    if (it != materias_disponibles.end()) {
                        total_creditos += it->second.creditos;
                    }
                }
            }
            return total_creditos;
        }
        
        void mostrar_resumen() const {
            std::cout << "=== Resumen Académico ===" << std::endl;
            std::cout << "Estudiante: " << apellido << ", " << nombre << std::endl;
            std::cout << "Legajo: " << legajo << std::endl;
            std::cout << "Carrera: " << carrera << std::endl;
            std::cout << "Promedio general: " << std::fixed << std::setprecision(2) << promedio_general() << std::endl;
            std::cout << "Créditos aprobados: " << creditos_aprobados() << std::endl;
            
            std::cout << "\nMaterias cursadas:" << std::endl;
            for (const auto& hist : historial) {
                auto it = materias_disponibles.find(hist.codigo_materia);
                std::string nombre_materia = (it != materias_disponibles.end()) ? it->second.nombre : "Desconocida";
                
                std::cout << "- " << nombre_materia << " (" << hist.codigo_materia << "): ";
                
                switch (hist.estado) {
                    case EstadoMateria::APROBADA:
                        std::cout << "APROBADA (Promedio: " << std::fixed << std::setprecision(1) << hist.promedio_calificaciones() << ")";
                        break;
                    case EstadoMateria::CURSANDO:
                        std::cout << "CURSANDO";
                        break;
                    case EstadoMateria::DESAPROBADA:
                        std::cout << "DESAPROBADA";
                        break;
                    default:
                        std::cout << "NO CURSADA";
                        break;
                }
                std::cout << std::endl;
            }
        }
        
    private:
        bool materia_cursada_y_aprobada(const std::string& codigo_materia) const {
            for (const auto& hist : historial) {
                if (hist.codigo_materia == codigo_materia && hist.materia_aprobada()) {
                    return true;
                }
            }
            return false;
        }
    };
}

void ejemplo_estructuras_personalizadas() {
    using namespace SistemaAcademico;
    
    // Crear estudiante
    Estudiante estudiante("12345", "Juan", "Pérez", "Ingeniería en Software");
    
    // Crear materias
    Materia algoritmos("ALG001", "Algoritmos y Estructuras de Datos", 6, TipoMateria::OBLIGATORIA);
    Materia calculo("MAT001", "Cálculo I", 8, TipoMateria::OBLIGATORIA);
    Materia programacion("PRG001", "Programación I", 6, TipoMateria::OBLIGATORIA);
    
    // Agregar prerequisito
    algoritmos.agregar_prerequisito("PRG001");
    
    // Registrar materias
    estudiante.agregar_materia_disponible(programacion);
    estudiante.agregar_materia_disponible(calculo);
    estudiante.agregar_materia_disponible(algoritmos);
    
    // Inscribir en materias
    estudiante.inscribir_materia("PRG001", "2023", "1C");
    estudiante.inscribir_materia("MAT001", "2023", "1C");
    
    // Agregar calificaciones
    estudiante.agregar_calificacion("PRG001", Calificacion(8.5, "Parcial 1"));
    estudiante.agregar_calificacion("PRG001", Calificacion(9.0, "Parcial 2"));
    estudiante.agregar_calificacion("MAT001", Calificacion(7.5, "Parcial 1"));
    estudiante.agregar_calificacion("MAT001", Calificacion(8.0, "Final"));
    
    // Ahora puede inscribirse en Algoritmos (tiene el prerequisito)
    estudiante.inscribir_materia("ALG001", "2023", "2C");
    estudiante.agregar_calificacion("ALG001", Calificacion(9.5, "Parcial 1"));
    
    // Mostrar resumen
    estudiante.mostrar_resumen();
}
```

## Sexto tema: 1.6 Programación Genérica

### 1.6.1 Templates de función

Los **templates** (plantillas) permiten escribir código genérico que funciona con diferentes tipos de datos sin duplicar código. Son una característica fundamental de C++ que permite la programación genérica.

#### Templates básicos de función

```cpp
// Template simple - parámetro de tipo
template<typename T>
T maximo(T a, T b) {
    return (a > b) ? a : b;
}

// Sintaxis alternativa usando 'class' (equivalente a 'typename')
template<class T>
T minimo(T a, T b) {
    return (a < b) ? a : b;
}

// Template con múltiples parámetros de tipo
template<typename T, typename U>
auto sumar(T a, U b) -> decltype(a + b) {  // C++11: auto con trailing return type
    return a + b;
}

// C++14: auto return type deduction (más simple)
template<typename T, typename U>
auto multiplicar(T a, U b) {
    return a * b;
}

void ejemplo_templates_basicos() {
    // Instanciación implícita - el compilador deduce el tipo
    std::cout << "Máximo(10, 20): " << maximo(10, 20) << std::endl;           // T = int
    std::cout << "Máximo(3.14, 2.71): " << maximo(3.14, 2.71) << std::endl;  // T = double
    std::cout << "Máximo('a', 'z'): " << maximo('a', 'z') << std::endl;      // T = char
    
    // Instanciación explícita - especificamos el tipo
    std::cout << "Máximo<double>(10, 20.5): " << maximo<double>(10, 20.5) << std::endl;
    
    // Templates con múltiples tipos
    std::cout << "Sumar(10, 3.14): " << sumar(10, 3.14) << std::endl;        // T=int, U=double
    std::cout << "Multiplicar(5, 2.5f): " << multiplicar(5, 2.5f) << std::endl; // T=int, U=float
}
```

#### Templates con parámetros no-tipo

```cpp
// Template con parámetro entero
template<typename T, int N>
class Array {
private:
    T datos[N];  // Array de tamaño fijo conocido en tiempo de compilación
    
public:
    constexpr int size() const { return N; }
    
    T& operator[](int index) {
        if (index >= 0 && index < N) {
            return datos[index];
        }
        throw std::out_of_range("Índice fuera de rango");
    }
    
    const T& operator[](int index) const {
        if (index >= 0 && index < N) {
            return datos[index];
        }
        throw std::out_of_range("Índice fuera de rango");
    }
    
    // Inicializar todos los elementos con un valor
    void llenar(const T& valor) {
        for (int i = 0; i < N; ++i) {
            datos[i] = valor;
        }
    }
    
    // Iteradores para usar con range-based for
    T* begin() { return datos; }
    T* end() { return datos + N; }
    const T* begin() const { return datos; }
    const T* end() const { return datos + N; }
};

// Template de función con parámetro no-tipo
template<int N>
void imprimir_tabla(int base) {
    std::cout << "Tabla del " << base << " (primeros " << N << " múltiplos):" << std::endl;
    for (int i = 1; i <= N; ++i) {
        std::cout << base << " x " << i << " = " << (base * i) << std::endl;
    }
}

void ejemplo_parametros_no_tipo() {
    // Array de tamaño fijo conocido en compilación
    Array<int, 5> numeros;
    Array<std::string, 3> nombres;
    
    // Llenar y usar el array
    numeros.llenar(42);
    numeros[0] = 10;
    numeros[1] = 20;
    
    std::cout << "Array de números (tamaño " << numeros.size() << "):" << std::endl;
    for (const auto& num : numeros) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Función template con parámetro no-tipo
    imprimir_tabla<5>(7);  // Tabla del 7, primeros 5 múltiplos
}
```

### 1.6.2 Templates de clase

#### Clases template básicas

```cpp
// Template de clase contenedor genérico
template<typename T>
class Contenedor {
private:
    T* datos;
    size_t capacidad;
    size_t tamaño_actual;
    
    void redimensionar() {
        size_t nueva_capacidad = capacidad * 2;
        T* nuevos_datos = new T[nueva_capacidad];
        
        // Copiar elementos existentes
        for (size_t i = 0; i < tamaño_actual; ++i) {
            nuevos_datos[i] = std::move(datos[i]);  // Move si es posible
        }
        
        delete[] datos;
        datos = nuevos_datos;
        capacidad = nueva_capacidad;
    }
    
public:
    // Constructor
    explicit Contenedor(size_t cap_inicial = 4) 
        : capacidad(cap_inicial), tamaño_actual(0) {
        datos = new T[capacidad];
    }
    
    // Constructor de copia
    Contenedor(const Contenedor& otro) 
        : capacidad(otro.capacidad), tamaño_actual(otro.tamaño_actual) {
        datos = new T[capacidad];
        for (size_t i = 0; i < tamaño_actual; ++i) {
            datos[i] = otro.datos[i];
        }
    }
    
    // Operador de asignación
    Contenedor& operator=(const Contenedor& otro) {
        if (this != &otro) {
            delete[] datos;
            
            capacidad = otro.capacidad;
            tamaño_actual = otro.tamaño_actual;
            datos = new T[capacidad];
            
            for (size_t i = 0; i < tamaño_actual; ++i) {
                datos[i] = otro.datos[i];
            }
        }
        return *this;
    }
    
    // Destructor
    ~Contenedor() {
        delete[] datos;
    }
    
    // Métodos de acceso
    void agregar(const T& elemento) {
        if (tamaño_actual >= capacidad) {
            redimensionar();
        }
        datos[tamaño_actual++] = elemento;
    }
    
    T& obtener(size_t indice) {
        if (indice >= tamaño_actual) {
            throw std::out_of_range("Índice fuera de rango");
        }
        return datos[indice];
    }
    
    const T& obtener(size_t indice) const {
        if (indice >= tamaño_actual) {
            throw std::out_of_range("Índice fuera de rango");
        }
        return datos[indice];
    }
    
    size_t tamaño() const { return tamaño_actual; }
    bool vacio() const { return tamaño_actual == 0; }
    
    // Operador []
    T& operator[](size_t indice) { return obtener(indice); }
    const T& operator[](size_t indice) const { return obtener(indice); }
    
    // Método para mostrar contenido
    void mostrar() const {
        std::cout << "[";
        for (size_t i = 0; i < tamaño_actual; ++i) {
            std::cout << datos[i];
            if (i < tamaño_actual - 1) std::cout << ", ";
        }
        std::cout << "]" << std::endl;
    }
};

void ejemplo_clase_template() {
    // Contenedor de enteros
    Contenedor<int> numeros;
    numeros.agregar(10);
    numeros.agregar(20);
    numeros.agregar(30);
    
    std::cout << "Contenedor de enteros: ";
    numeros.mostrar();
    
    // Contenedor de strings
    Contenedor<std::string> palabras;
    palabras.agregar("Hola");
    palabras.agregar("mundo");
    palabras.agregar("C++");
    
    std::cout << "Contenedor de strings: ";
    palabras.mostrar();
    
    // Contenedor de contenedores (template anidado)
    Contenedor<Contenedor<double>> matriz;
    
    Contenedor<double> fila1;
    fila1.agregar(1.1);
    fila1.agregar(2.2);
    
    Contenedor<double> fila2;
    fila2.agregar(3.3);
    fila2.agregar(4.4);
    
    matriz.agregar(fila1);
    matriz.agregar(fila2);
    
    std::cout << "Matriz (contenedor de contenedores):" << std::endl;
    for (size_t i = 0; i < matriz.tamaño(); ++i) {
        std::cout << "Fila " << i << ": ";
        matriz[i].mostrar();
    }
}
```

### 1.6.3 Metaprogramación y especialización

#### Metaprogramación básica

```cpp
// Factorial en tiempo de compilación
template<int N>
struct Factorial {
    static constexpr int valor = N * Factorial<N-1>::valor;
};

// Especialización para caso base
template<>
struct Factorial<0> {
    static constexpr int valor = 1;
};

// Fibonacci en tiempo de compilación
template<int N>
struct Fibonacci {
    static constexpr int valor = Fibonacci<N-1>::valor + Fibonacci<N-2>::valor;
};

template<>
struct Fibonacci<0> {
    static constexpr int valor = 0;
};

template<>
struct Fibonacci<1> {
    static constexpr int valor = 1;
};

// Type traits personalizados
template<typename T>
struct EsPuntero {
    static constexpr bool valor = false;
};

template<typename T>
struct EsPuntero<T*> {
    static constexpr bool valor = true;
};

// Metafunción para eliminar const
template<typename T>
struct EliminarConst {
    using tipo = T;
};

template<typename T>
struct EliminarConst<const T> {
    using tipo = T;
};

// C++14: variable templates
template<typename T>
constexpr bool es_puntero_v = EsPuntero<T>::valor;

template<typename T>
using eliminar_const_t = typename EliminarConst<T>::tipo;

void ejemplo_metaprogramacion() {
    // Cálculos en tiempo de compilación
    constexpr int fact5 = Factorial<5>::valor;  // 120
    constexpr int fib10 = Fibonacci<10>::valor; // 55
    
    std::cout << "5! = " << fact5 << std::endl;
    std::cout << "Fibonacci(10) = " << fib10 << std::endl;
    
    // Type traits
    std::cout << "int es puntero: " << es_puntero_v<int> << std::endl;
    std::cout << "int* es puntero: " << es_puntero_v<int*> << std::endl;
    
    // Manipulación de tipos
    using tipo_original = const int;
    using tipo_sin_const = eliminar_const_t<tipo_original>;
    
    std::cout << "Tipo original: " << typeid(tipo_original).name() << std::endl;
    std::cout << "Sin const: " << typeid(tipo_sin_const).name() << std::endl;
}
```

### Consideraciones de memoria y rendimiento

Cuando se utilizan templates, es importante entender cómo afectan al rendimiento y uso de memoria:

#### Instantiación de templates

```cpp
// El compilador genera código específico para cada tipo
template<typename T>
void procesar(T valor) {
    std::cout << "Procesando: " << valor << std::endl;
}

void ejemplo_instantiacion() {
    // Cada llamada con diferente tipo genera código separado
    procesar(42);          // Genera procesar<int>
    procesar(3.14);        // Genera procesar<double>
    procesar("texto");     // Genera procesar<const char*>
    
    // Mismo tipo = mismo código generado
    procesar(100);         // Reutiliza procesar<int>
    procesar(200);         // Reutiliza procesar<int>
}
```

#### Especialización para optimización

```cpp
// Template genérico
template<typename T>
class MemoryOptimized {
    T* data;
    size_t size;
public:
    MemoryOptimized(size_t n) : size(n) {
        data = new T[size];
        std::cout << "Asignando " << (size * sizeof(T)) << " bytes para tipo genérico" << std::endl;
    }
    ~MemoryOptimized() { delete[] data; }
};

// Especialización para bool - optimización de memoria
template<>
class MemoryOptimized<bool> {
    std::vector<bool> data;  // std::vector<bool> usa bit packing
public:
    MemoryOptimized(size_t n) : data(n) {
        std::cout << "Usando especialización optimizada para bool" << std::endl;
    }
};

void ejemplo_optimizacion() {
    MemoryOptimized<int> enteros(1000);     // Usa template genérico
    MemoryOptimized<bool> flags(1000);      // Usa especialización optimizada
}
```
