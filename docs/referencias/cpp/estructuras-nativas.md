---
title: "Estructuras nativas de C++ (std)"
description: "Resumen y ejemplos de las estructuras de datos nativas de la STL: `queue`, `stack`, `vector`, `list`, `map`, `set`, `bitset`, `unordered_map`"
tags: [cpp, stl, estructuras, referencias]
---

Este documento reúne ejemplos, operaciones habituales y consejos de uso para las estructuras de datos provistas por la Biblioteca Estándar de C++ (`std`). Los ejemplos usan C++ moderno (C++17/C++20 compatibles).

## Convenciones

- `O(...)` indica complejidad temporal típica en operaciones comunes.
- Los ejemplos usan `#include` explícitos y `using` limitado para claridad.

---

## `std::vector`

- Propósito: arreglo dinámico con acceso aleatorio O(1).
- Contenedor más usado para datos contiguos; compatible con algoritmos de la STL.
- Complejidades: `push_back()` O(1) amortizado, `operator[]` O(1), `insert/erase` en medio O(n).

Ejemplo básico:

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v;           // vacío
    v.reserve(100);               // reservar capacidad cuando se conoce el tamaño
    v.push_back(10);              // agregar al final
    v.emplace_back(20);           // construir en-place

    for (size_t i = 0; i < v.size(); ++i)
        std::cout << v[i] << " ";

    // Iteradores (compatibles con algoritmos)
    for (auto it = v.begin(); it != v.end(); ++it) {
        *it += 1;                 // modificar elementos
    }

    // usar range-for
    for (auto x : v) std::cout << x << '\n';

    return 0;
}

    Funciones útiles:

    ### Ejemplos de iteradores

    ```cpp
    // Iteradores en std::vector: iterador aleatorio, const_iterator y reverse_iterator
    #include <algorithm>
    #include <vector>
    #include <iostream>

    int main() {
        std::vector<int> v = {1,2,3,4,5};

        // iterador normal
        for (std::vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
            *it *= 2;
        }

        // const_iterator
        for (std::vector<int>::const_iterator it = v.cbegin(); it != v.cend(); ++it) {
            std::cout << *it << ' ';
        }

        // iterador inverso
        for (auto rit = v.rbegin(); rit != v.rend(); ++rit) std::cout << *rit << ' ';

        // usar algoritmos con iteradores
        auto it = std::find(v.begin(), v.end(), 4);
        if (it != v.end()) std::cout << "encontrado: " << *it << '\n';

        return 0;
    }
    ```

    Funciones útiles:
```

Funciones útiles:

- `v.reserve(n)`, `v.shrink_to_fit()`, `v.resize(n)`, `v.clear()`, `v.insert(it, val)`, `v.erase(it)`.
- Evitar `operator[]` cuando pueda producirse overflow; usar `at()` para comprobación en debug.

Tips:

- Use `emplace_back` para evitar copias de objetos pesados.
- Si necesita push/pop en ambos extremos, considere `std::deque`.

---

## `std::list`

- Propósito: lista doblemente enlazada. Inserciones/ borrados O(1) con iterador.
- No ofrece acceso aleatorio eficiente (no usar operator[]).

Ejemplo:

```cpp
#include <list>
#include <iostream>

int main() {
    std::list<int> L = {1,2,3};
    L.push_front(0); // O(1)
    L.push_back(4);  // O(1)

    // Splice: mover elementos entre listas en O(1)
    std::list<int> A = {10,11,12};
    L.splice(std::next(L.begin(),2), A, A.begin());

    for (int x : L) std::cout << x << ' ';
}
```

Funciones útiles:

- `push_front`, `push_back`, `insert`, `erase`, `splice`, `remove_if`.
- Iteradores son bidireccionales.

Usos apropiados: cuando necesita iteradores estables y muchas inserciones/eliminaciones en el medio.

### Ejemplos de iteradores

```cpp
#include <list>
#include <iostream>
#include <algorithm>
#include <iterator>

int main() {
    std::list<int> L = {1,2,3,4,5};

    // iteración normal con iteradores bidireccionales
    for (std::list<int>::iterator it = L.begin(); it != L.end(); ++it) {
        std::cout << *it << ' ';
    }

    // iteración inversa
    for (auto rit = L.rbegin(); rit != L.rend(); ++rit) std::cout << *rit << ' ';

    // avanzar con std::advance / std::next
    auto it = L.begin(); std::advance(it, 2); // mover 2 posiciones
    std::cout << "\ntercero: " << *it << '\n';

    // splice usando iteradores (mover primer elemento de A a la posición 2 de L)
    std::list<int> A = {10,11};
    L.splice(std::next(L.begin(),2), A, A.begin());

    // patrón seguro para borrar mientras iteramos
    for (auto it2 = L.begin(); it2 != L.end(); ) {
        if (*it2 % 2 == 0) { // borrar pares
            auto toErase = it2++;
            L.erase(toErase);
        } else ++it2;
    }

    return 0;
}
```

#### Ejemplo práctico: BFS usando iteradores en lista de adyacencia (comprobar bipartito)

Supongamos que el grafo está representado mediante una estructura de lista de adyacencia llamada `adj`.
Algunas formas válidas de declarar `adj` son:

- `std::vector<std::list<int>> adj;`        // vector de listas
- `std::vector<std::vector<int>> adj;`      // vector de vectores
- `std::list<int>* adj = new std::list<int>[V];` // arreglo dinámico de listas (como el ejemplo de la clase)

En todos estos casos `adj[u]` devuelve un contenedor iterable que contiene los vecinos de `u` (una
referencia a la `std::list<int>` o `std::vector<int>` correspondiente), por lo que el patrón
`for (auto it = adj[u].begin(); it != adj[u].end(); ++it)` funciona correctamente. La diferencia
principal es de ownership y seguridad: prefiera `std::vector<...>` (RAII) en vez de punteros crudos
cuando sea posible.

El siguiente método muestra un uso típico de iteradores para recorrer TODOS los vecinos de un vértice `u`
dentro de una búsqueda en anchura (BFS) para comprobar si el grafo es bipartito.

```cpp
// Ejemplo de clase para representar un grafo con lista de adyacencia
// (se muestra aquí como referencia; la implementación de los métodos
// utiliza la misma representación `adj`).

#include <iostream>
#include <vector>
#include <list>
#include <stdexcept>
#include <queue>

class Grafo {
private:
    int V;
    std::list<int> *adj; // arreglo dinámico de listas de adyacencia

    bool esBipartitoBFS(int inicio, int colores[]);

public:
    Grafo(int V) {
        this->V = V;
        this->adj = new std::list<int>[V];
    }

    ~Grafo() {
        delete[] adj;
    }

    void agregarArista(int u, int v) {
        if (u >= 0 && u < V && v >= 0 && v < V) {
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
    }

    bool esBipartito();
};

// colores[] debe inicializarse a -1 para todos los vértices antes de llamar a la función
// adj es la lista de adyacencia: adj[u] es un contenedor (lista/vector) de vecinos de u

    ```cpp
bool Grafo::esBipartito() {
    int colores[V];
    
    // Inicializar todos sin color (-1)
    for(int i = 0; i < V; i++){
        colores[i] = -1;
    }
    
    // Verificar cada componente del grafo
    for(int i = 0; i < V; i++){
        if(colores[i] == -1){
            // Iniciar BFS desde este nodo no visitado
            if(!esBipartitoBFS(i, colores)){
                return false;
            }
        }
    }
    
    return true;
}
```

Explicación paso a paso:

- Nota: la función driver `esBipartito()` inicializa el arreglo `colores` y lanza `esBipartitoBFS`
    para cada componente no visitada del grafo (esto es necesario cuando el grafo puede estar desconectado).

```cpp
bool Grafo::esBipartitoBFS(int inicio, int colores[]) {
    std::queue<int> cola;

    colores[inicio] = 0;  // Color inicial
    cola.push(inicio);

    while(!cola.empty()){
        int u = cola.front();
        cola.pop();

        // Recorrer TODOS los vecinos de u usando iteradores
        for(auto it = adj[u].begin(); it != adj[u].end(); ++it){
            int v = *it; // desreferenciar el iterador para obtener el vecino

            if(colores[v] == -1){
                // Vecino no visitado: asignar color opuesto
                colores[v] = 1 - colores[u];  // 0 -> 1, 1 -> 0
                cola.push(v);
            }
            else if(colores[v] == colores[u]){
                // Vecino ya visitado con el MISMO color -> no bipartito
                return false;
            }
        }
    }

    return true;
}

```

Explicación paso a paso:

- Precondiciones: `colores[]` debe contener `-1` para vértices no visitados. `adj` es la lista de adyacencia.
- Se usa `std::queue<int>` para implementar BFS; se encola el vértice inicial y se le asigna color `0`.
- Bucle principal: mientras la cola no esté vacía, se saca el vértice `u` y se recorren sus vecinos.
- Recorrido de vecinos: `for(auto it = adj[u].begin(); it != adj[u].end(); ++it)` es genérico y funciona
    tanto si `adj[u]` es `std::list<int>` como `std::vector<int>` u otro contenedor iterable.
    `*it` obtiene el vecino `v`.
- Si `v` no fue visitado (`colores[v] == -1`), se le asigna el color opuesto mediante `1 - colores[u]`
    y se encola para procesarlo más tarde.
- Si `v` ya fue visitado y tiene el mismo color que `u`, entonces el grafo no es bipartito y
    la función retorna `false` inmediatamente.
- Si se recorren todos los vértices sin conflicto de colores, la función retorna `true`.

Notas y variantes:

- Alternativa con range-for: si `adj[u]` soporta range-for (p. ej. `vector` o `list`) se puede escribir
    `for (int v : adj[u]) { ... }`, que es más conciso y evita la manipulación explícita del iterador.
- Complejidad: O(V + E) — cada vértice y cada arista se procesan como en una BFS clásica.
- Seguridad: usar iteradores hace el recorrido independiente del tipo exacto del contenedor interno,
    favoreciendo código genérico y reutilizable.

---

## `std::queue` y `std::stack`

- `std::queue<T>`: FIFO. Implementado sobre contenedor subyacente (por defecto `deque`).
- `std::stack<T>`: LIFO. Implementado sobre contenedor subyacente (por defecto `deque`).

Ejemplos:

```cpp
#include <queue>
#include <stack>
#include <iostream>

int main() {
    std::queue<int> q;
    q.push(1); q.push(2); q.push(3);
    while (!q.empty()) { std::cout << q.front() << ' '; q.pop(); }

    std::stack<int> s;
    s.push(1); s.push(2); s.push(3);
    while (!s.empty()) { std::cout << s.top() << ' '; s.pop(); }
}
```

Consejos:

- Para prioridad use `std::priority_queue`.
- Si necesita iteradores sobre `queue`/`stack`, use el contenedor subyacente (`std::deque` o `std::vector`) directamente.

---

## `std::map` (ordenado) y `std::set`

- `std::map<Key, T>`: árbol rojo-negro ordenado por `Key`. Búsqueda/inserción/erase O(log n).
- `std::set<Key>`: contenedor de llaves únicas ordenadas.

Ejemplo `map`:

```cpp
#include <map>
#include <string>
#include <iostream>

int main() {
    std::map<std::string,int> m;
    m["alice"] = 10;      // inserta o asigna
    m.insert({"bob", 5}); // insert devuelve pair<iterator,bool>

    auto it = m.find("alice");
    if (it != m.end()) std::cout << it->first << ": " << it->second << '\n';

    // recorrido ordenado por clave
    for (const auto& [k,v] : m) std::cout << k << ' ' << v << '\n';
}
```

Funciones y técnicas útiles:

- `m.lower_bound(k)`, `m.upper_bound(k)`, `m.erase(it)`, `m.emplace(k,v)`.
- Use `map::find` para comprobar existencia sin insertar.

`std::set`:

### Ejemplos de iteradores map

```cpp
#include <map>
#include <iostream>

int main() {
    std::map<std::string,int> m = {{"a",1},{"b",2},{"c",3}};

    // iterar con iteradores (mutable)
    for (auto it = m.begin(); it != m.end(); ++it) {
        std::cout << it->first << ' ' << it->second << '\n';
        if (it->first == "b") it->second = 20; // modificar valor via iterator
    }

    // borrar de forma segura durante iteración
    for (auto it = m.begin(); it != m.end(); ) {
        if (it->second < 2) {
            auto toErase = it++; // post-increment: guarda y avanza
            m.erase(toErase);
        } else ++it;
    }

    return 0;
}
```

```cpp
#include <set>
#include <iostream>
int main() {
    std::set<int> S = {3,1,4};
    S.insert(2);
    if (S.count(3)) { /* existe */ }
    for (int x : S) std::cout << x << ' ';
}
```

### Ejemplos de iteradores set

```cpp
#include <set>
#include <iostream>

int main() {
    std::set<int> S = {1,3,5,7};

    // iteración ordenada
    for (auto it = S.begin(); it != S.end(); ++it) std::cout << *it << ' ';

    // búsqueda por rango con lower_bound/upper_bound
    auto itlow = S.lower_bound(3); // primer >= 3
    if (itlow != S.end()) std::cout << "\nfrom lower_bound: " << *itlow << '\n';

    return 0;
}
```

---

## `std::unordered_map`

- Implementaciones hash-based (tabla hash). Operaciones promedio O(1), peor caso O(n).
- Requieren `std::hash<Key>` y `operator==` por defecto; para tipos personalizados suministre `hash` y `equal_to`.

Ejemplo `unordered_map`:

```cpp
#include <unordered_map>
#include <string>
#include <iostream>

int main() {
    std::unordered_map<std::string,int> um;
    um.reserve(100); // evita rehashes costosos
    um["k"] = 42;

    auto it = um.find("k");
    if (it != um.end()) std::cout << it->second << '\n';

    // iteración en orden arbitrario
    for (auto &p : um) std::cout << p.first << ' ' << p.second << '\n';
}
```

Funciones útiles:

- `reserve(n)`, `rehash(n)`, `max_load_factor(x)`, `bucket_count()`.
- Para rendimiento: llamar `reserve()` cuando se conoce el número aproximado de elementos.

### Ejemplos de iteradores

```cpp
#include <unordered_map>
#include <iostream>

int main() {
    std::unordered_map<std::string,int> um = {{"x",1},{"y",2}};

    // iteración con structured bindings
    for (const auto& [k,v] : um) std::cout << k << ' ' << v << '\n';

    // borrar durante iteración: usar patrón seguro
    for (auto it = um.begin(); it != um.end(); ) {
        if (it->second == 1) {
            auto toErase = it++;
            um.erase(toErase);
        } else ++it;
    }

    return 0;
}
```

---

## `std::bitset`

- Representa bits fijos en tiempo de compilación (size constante). Operaciones bitwise eficientes.

Ejemplo:

```cpp
#include <bitset>
#include <iostream>

int main() {
    std::bitset<16> b; // 16 bits
    b.set(3);
    b.flip();         // invierte todos los bits
    std::cout << b.count() << '\n'; // número de bits a 1
    std::cout << b.test(3) << '\n';
    std::cout << b.to_string() << '\n';
}
```

Alternativas: para tamaños dinámicos en tiempo de ejecución use `std::vector<bool>` (con cuidado) o bibliotecas externas (boost::dynamic_bitset).

---

## Buenas prácticas y consejos generales

- Prefiera `std::vector` cuando necesite almacenamiento contiguo y acceso aleatorio.
- Use `std::list` o `std::forward_list` sólo cuando inserciones/eliminaciones en el medio sean frecuentes y la localización en memoria no importe.
- Use `std::map`/`std::set` cuando necesite orden y búsqueda por rango; use `unordered_map`/`unordered_set` cuando la velocidad promedio sea crítica y el orden no importe.
- Reserve capacidad en `vector`/`unordered_map` si conoce el tamaño aproximado.
- Prefiera `emplace`/`emplace_back` para evitar copias innecesarias.
- Evite `vector<bool>` si necesita semántica de referencia completa; es una especialización proxy.

---

## `std::priority_queue`

- Propósito: cola de prioridad (heap). Por defecto es un max-heap: el elemento mayor está en `top()`.
- No expone iteradores; el acceso es por `top()` + `pop()`.

Ejemplo:

```cpp
#include <queue>
#include <vector>
#include <functional>
#include <iostream>

int main() {
    // max-heap (por defecto)
    std::priority_queue<int> pq;
    pq.push(5); pq.push(1); pq.push(7);
    while (!pq.empty()) { std::cout << pq.top() << ' '; pq.pop(); }

    // min-heap usando greater
    std::priority_queue<int, std::vector<int>, std::greater<int>> minpq;
    minpq.push(5); minpq.push(1); minpq.push(7);
    while (!minpq.empty()) { std::cout << minpq.top() << ' '; minpq.pop(); }

    // heap de pares (dist, nodo) para algoritmos como Dijkstra (min-heap)
    std::priority_queue<std::pair<int,int>, std::vector<std::pair<int,int>>, std::greater<>> heap;
    heap.emplace(10,2);
    heap.emplace(5,1);
    // top() devuelve una referencia const; se puede copiar
    auto p = heap.top();
    std::cout << "dist=" << p.first << " node=" << p.second << '\n';

    return 0;
}
```

Notas:

- Si necesita iteración sobre los elementos almacenados, use el contenedor subyacente directamente (ej.: `std::vector`/`std::deque`) o copie los elementos a otro contenedor; iterar el `priority_queue` internamente no es soportado por la API pública.

---

## `std::unordered_set`

- Propósito: conjunto hash-based (no ordenado) para membership/lookup promedio O(1).
- Iteración válida pero en orden arbitrario (no ordenado). Se pueden usar iteradores bidireccionales similares a otros contenedores de la STL.

Ejemplo:

```cpp
#include <unordered_set>
#include <string>
#include <iostream>

int main() {
    std::unordered_set<std::string> S;
    S.reserve(100); // evitar rehashes frecuentes
    S.insert("alice");
    S.insert("bob");

    if (S.find("alice") != S.end()) std::cout << "alice found\n";

    // iteración (orden arbitrario)
    for (const auto &x : S) std::cout << x << ' ';

    // borrar de forma segura durante la iteración
    for (auto it = S.begin(); it != S.end(); ) {
        if (it->size() <= 3) {
            auto toErase = it++;
            S.erase(toErase);
        } else ++it;
    }

    return 0;
}
```

Consejos:

- Reserve capacidad si conoce el tamaño aproximado para reducir rehashes: `S.reserve(n)`.
- Tenga en cuenta la carga maxima (`max_load_factor`) y use `rehash()` para controlar buckets cuando el rendimiento sea crítico.
