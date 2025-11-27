---
title: "C++ Cheat Sheet"
description: "Guía rápida de referencia de C++: sintaxis, operadores, funciones, entrada/salida y más"
sidebar_position: 1
tags: [cpp, c++, programacion, referencia, cheat-sheet]
---

Guía de referencia rápida para programación en C++.

---

## 📋 Estructura Básica de un Programa

```cpp
#include <iostream>
using namespace std;

int main() {
    // Tu código aquí
    cout << "Hola Mundo" << endl;
    return 0;
}
```

---

## 📚 Bibliotecas Comunes

| Biblioteca | Uso | Ejemplo |
|-----------|-----|---------|
| `<iostream>` | Entrada/Salida estándar | `cout`, `cin` |
| `<string>` | Manejo de cadenas | `string texto` |
| `<cmath>` | Funciones matemáticas | `sqrt()`, `pow()` |
| `<vector>` | Vectores dinámicos | `vector<int> v` |
| `<algorithm>` | Algoritmos (sort, find) | `sort()`, `reverse()` |
| `<cstdlib>` | Utilidades generales | `rand()`, `abs()` |
| `<ctime>` | Funciones de tiempo | `time()`, `clock()` |
| `<fstream>` | Archivos | `ifstream`, `ofstream` |
| `<iomanip>` | Manipuladores de E/S | `setw()`, `setprecision()` |

---

## 🔢 Tipos de Datos

### Tipos Básicos

```cpp
int numero = 42;           // Entero (-2147483648 a 2147483647)
short s = 100;            // Entero corto (-32768 a 32767)
long largo = 1000000L;    // Entero largo
long long ll = 9223372036854775807LL;  // Entero muy largo

float decimal = 3.14f;    // Punto flotante (precisión simple)
double preciso = 3.14159; // Punto flotante (doble precisión)
long double ld = 3.14159265358979L;  // Precisión extendida

char letra = 'A';         // Carácter (1 byte)
bool bandera = true;      // Booleano (true/false)

string texto = "Hola";    // Cadena de texto (require <string>)
```

### Modificadores

```cpp
unsigned int positivo = 42;  // Solo valores positivos
signed int conSigno = -42;   // Valores positivos y negativos (por defecto)
const int CONSTANTE = 100;   // Valor constante (no se puede modificar)
```

---

## 🎯 Entrada y Salida

### Salida con `cout`

```cpp
cout << "Texto" << endl;           // Imprimir con salto de línea
cout << "Valor: " << variable;     // Imprimir variable
cout << a << " " << b << endl;     // Múltiples valores
cout << "Pi: " << 3.14159 << endl; // Números
```

### Entrada con `cin`

```cpp
int numero;
cin >> numero;              // Leer un entero

string nombre;
cin >> nombre;              // Leer una palabra (sin espacios)
getline(cin, nombre);       // Leer línea completa (con espacios)

int a, b;
cin >> a >> b;              // Leer múltiples valores
```

### Manipuladores de Formato

```cpp
#include <iomanip>

cout << fixed << setprecision(2) << 3.14159 << endl;  // 3.14 (2 decimales)
cout << setw(10) << numero << endl;       // Ancho de 10 caracteres
cout << left << setw(10) << "Izq" << endl;  // Alineado a la izquierda
cout << right << setw(10) << "Der" << endl; // Alineado a la derecha
```

---

## ➕ Operadores Aritméticos

| Operador | Descripción | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| `+` | Suma | `5 + 3` | `8` |
| `-` | Resta | `5 - 3` | `2` |
| `*` | Multiplicación | `5 * 3` | `15` |
| `/` | División | `5 / 2` | `2` (división entera) |
| `/` | División | `5.0 / 2` | `2.5` (división real) |
| `%` | Módulo (resto) | `5 % 2` | `1` |
| `++` | Incremento | `a++` | Incrementa en 1 |
| `--` | Decremento | `a--` | Decrementa en 1 |

### Pre-incremento vs Post-incremento

```cpp
int a = 5;
int b = ++a;  // b = 6, a = 6 (incrementa primero)
int c = a++;  // c = 6, a = 7 (usa el valor, luego incrementa)
```

---

## 🔀 Operadores de Comparación

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `==` | Igual a | `a == b` |
| `!=` | Diferente de | `a != b` |
| `>` | Mayor que | `a > b` |
| `<` | Menor que | `a < b` |
| `>=` | Mayor o igual | `a >= b` |
| `<=` | Menor o igual | `a <= b` |

---

## 🔗 Operadores Lógicos

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `&&` | AND (Y lógico) | `(a > 5) && (b < 10)` |
| `\|\|` | OR (O lógico) | `(a == 5) \|\| (b == 10)` |
| `!` | NOT (Negación) | `!(a > 5)` |

---

## 🎲 Operadores de Asignación

| Operador | Equivalente | Ejemplo |
|----------|-------------|---------|
| `=` | Asignación | `a = 5` |
| `+=` | `a = a + b` | `a += 3` |
| `-=` | `a = a - b` | `a -= 3` |
| `*=` | `a = a * b` | `a *= 3` |
| `/=` | `a = a / b` | `a /= 3` |
| `%=` | `a = a % b` | `a %= 3` |

---

## ❓ Operador Ternario

```cpp
// Sintaxis: condicion ? valor_si_true : valor_si_false

int max = (a > b) ? a : b;  // Máximo entre a y b
string resultado = (edad >= 18) ? "Mayor" : "Menor";
int signo = (num > 0) ? 1 : (num < 0) ? -1 : 0;  // Signo de un número

// Asignación condicional
string estado = (temperatura > 30) ? "Calor" : "Frío";
int absoluto = (numero >= 0) ? numero : -numero;

// En retornos
int obtenerMax(int a, int b) {
    return (a > b) ? a : b;
}

// Ternario anidado
string categoria = (edad < 13) ? "Niño" 
                 : (edad < 18) ? "Adolescente"
                 : (edad < 65) ? "Adulto" 
                 : "Adulto Mayor";
```

### Alternativas al Operador Ternario (C++)

```cpp
// std::optional (C++17) - Manejo seguro de valores opcionales
#include <optional>

std::optional<int> obtenerValor(bool valido) {
    if (valido) return 42;
    return std::nullopt;
}

std::optional<int> valor = obtenerValor(true);
int resultado = valor.value_or(0);  // 42 si tiene valor, 0 si no

if (valor.has_value()) {
    cout << valor.value() << endl;
}

// std::optional con tipos complejos
std::optional<string> nombre = obtenerNombre();
string final = nombre.value_or("Anónimo");
```

---

## 🔢 Operador Coma (Único de C++)

```cpp
// Sintaxis: expresion1, expresion2, ..., expresionN
// Evalúa todas las expresiones de izquierda a derecha
// Retorna el valor de la última expresión

// Ejemplo básico
int a, b = 5;
int resultado = (a = 3, b = a + 2, a + b);  // resultado = 8
// Evalúa: a=3, luego b=5, luego retorna 3+5=8

// Uso práctico en bucles for
for (int i = 0, j = 10; i < j; i++, j--) {
    cout << i << " " << j << endl;
}
// Inicializa dos variables: i=0, j=10
// Incrementa i y decrementa j en cada iteración

// Múltiples operaciones en una expresión
int x = (cout << "Calculando...\n", 42);  // Imprime y asigna 42
int y = (x++, x *= 2, x);  // Incrementa, multiplica, retorna

// En expresiones complejas
int max = (a > b) ? (temp = a, a = b, b = temp, a) : b;

// Declaración múltiple (NO es operador coma)
int m = 1, n = 2, p = 3;  // Declaración, no operador coma
```

:::warning Cuidado con el Operador Coma

**Diferencia importante:**

```cpp
// Declaración múltiple (sintaxis de declaración)
int a = 1, b = 2, c = 3;  // Esto NO es el operador coma

// Operador coma (entre paréntesis)
int x = (a = 1, b = 2, c = 3);  // x = 3 (valor de la última expresión)
```

:::

---

## 🔄 Estructuras de Control

### If / Else

```cpp
if (condicion) {
    // código si es verdadero
} else if (otra_condicion) {
    // código si otra_condicion es verdadera
} else {
    // código si ninguna es verdadera
}
```

### Switch

```cpp
switch (variable) {
    case 1:
        // código para caso 1
        break;
    case 2:
        // código para caso 2
        break;
    default:
        // código si ningún caso coincide
        break;
}
```

### Bucle For

```cpp
for (int i = 0; i < 10; i++) {
    // código que se repite 10 veces
}

// For con rango (C++11)
vector<int> nums = {1, 2, 3, 4, 5};
for (int num : nums) {
    cout << num << endl;
}
```

### Bucle While

```cpp
while (condicion) {
    // código mientras condicion sea verdadera
}

do {
    // código que se ejecuta al menos una vez
} while (condicion);
```

### Control de Bucles

```cpp
break;     // Sale del bucle
continue;  // Salta a la siguiente iteración
```

---

## 🧮 Funciones Matemáticas

:::note Biblioteca Requerida
Incluye `#include <cmath>` para usar estas funciones
:::

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `abs(x)` | Valor absoluto (enteros) | `abs(-5)` → `5` |
| `fabs(x)` | Valor absoluto (decimales) | `fabs(-3.14)` → `3.14` |
| `sqrt(x)` | Raíz cuadrada | `sqrt(16)` → `4.0` |
| `pow(x, y)` | x elevado a la y | `pow(2, 3)` → `8.0` |
| `ceil(x)` | Redondeo hacia arriba | `ceil(3.2)` → `4.0` |
| `floor(x)` | Redondeo hacia abajo | `floor(3.8)` → `3.0` |
| `round(x)` | Redondeo al más cercano | `round(3.5)` → `4.0` |
| `sin(x)` | Seno (radianes) | `sin(3.14159/2)` → `1.0` |
| `cos(x)` | Coseno (radianes) | `cos(0)` → `1.0` |
| `tan(x)` | Tangente (radianes) | `tan(0)` → `0.0` |
| `log(x)` | Logaritmo natural | `log(2.718)` → `1.0` |
| `log10(x)` | Logaritmo base 10 | `log10(100)` → `2.0` |
| `exp(x)` | e elevado a x | `exp(1)` → `2.718...` |

### Constantes Matemáticas

```cpp
#include <cmath>

M_PI      // Pi: 3.14159265358979323846
M_E       // e: 2.71828182845904523536
```

### Funciones Min/Max

```cpp
#include <algorithm>

int maximo = max(a, b);        // Máximo entre dos valores
int minimo = min(a, b);        // Mínimo entre dos valores
int resultado = max({a, b, c}); // Máximo entre varios (C++11)
```

---

## 🔢 Números Aleatorios

```cpp
#include <cstdlib>
#include <ctime>

// Inicializar semilla (una sola vez al inicio)
srand(time(0));

// Generar número aleatorio
int aleatorio = rand();              // 0 a RAND_MAX
int dado = rand() % 6 + 1;          // 1 a 6
int rango = rand() % (max - min + 1) + min;  // min a max
```

---

## 📝 Funciones

### Declaración y Definición

```cpp
// Declaración (prototipo)
int suma(int a, int b);
double calcularArea(double radio);
void imprimirMensaje();

// Definición
int suma(int a, int b) {
    return a + b;
}

double calcularArea(double radio) {
    return M_PI * radio * radio;
}

void imprimirMensaje() {
    cout << "Hola" << endl;
    // void no retorna nada
}
```

### Parámetros por Valor y por Referencia

```cpp
// Por valor (copia el valor)
void porValor(int x) {
    x = x + 10;  // No modifica la variable original
}

// Por referencia (modifica el original)
void porReferencia(int &x) {
    x = x + 10;  // SÍ modifica la variable original
}

// Referencia constante (eficiente, no modifica)
void mostrar(const string &texto) {
    cout << texto << endl;
}
```

### Parámetros Constantes

```cpp
// Parámetro constante por valor
void procesarNumero(const int num) {
    // num = 10;  // ❌ Error: no se puede modificar
    cout << num * 2 << endl;  // ✅ Se puede leer
}

// Parámetro constante por referencia (eficiente para objetos grandes)
void imprimirVector(const vector<int> &v) {
    // v.push_back(10);  // ❌ Error: no se puede modificar
    for (int num : v) {  // ✅ Se puede leer
        cout << num << " ";
    }
}

// Puntero a constante
void mostrar(const int* ptr) {
    // *ptr = 100;  // ❌ Error: no se puede modificar el valor
    cout << *ptr << endl;  // ✅ Se puede leer
}

// Puntero constante
void procesar(int* const ptr) {
    *ptr = 100;  // ✅ Se puede modificar el valor
    // ptr = nullptr;  // ❌ Error: no se puede cambiar el puntero
}

// Puntero constante a constante
void verValor(const int* const ptr) {
    // *ptr = 100;  // ❌ Error: no se puede modificar el valor
    // ptr = nullptr;  // ❌ Error: no se puede cambiar el puntero
    cout << *ptr << endl;  // ✅ Solo lectura
}
```

#### Ventajas de Parámetros Constantes

| Ventaja | Descripción |
|---------|-------------|
| 🔒 **Seguridad** | Previene modificaciones accidentales |
| ⚡ **Eficiencia** | Evita copias innecesarias con `const &` |
| 📖 **Claridad** | Documenta que no se modificará el parámetro |
| 🐛 **Menos errores** | El compilador detecta intentos de modificación |

:::tip Buena Práctica
Usa `const &` para pasar objetos grandes (strings, vectores, clases) sin copiarlos ni modificarlos.

```cpp
// ❌ Ineficiente (copia todo el vector)
void procesar(vector<int> v);

// ✅ Eficiente (no copia, no modifica)
void procesar(const vector<int> &v);
```

:::

### Valores por Defecto

```cpp
int potencia(int base, int exponente = 2) {
    return pow(base, exponente);
}

// Uso:
potencia(5);     // 5^2 = 25
potencia(5, 3);  // 5^3 = 125
```

---

## 📦 Arrays (Arreglos)

### Arrays Estáticos

```cpp
// Declaración
int numeros[5];               // Array de 5 enteros
int valores[3] = {1, 2, 3};   // Con inicialización
int datos[] = {1, 2, 3, 4};   // Tamaño inferido (4)

// Acceso
numeros[0] = 10;              // Asignar
int valor = numeros[0];       // Leer

// Recorrer
for (int i = 0; i < 5; i++) {
    cout << numeros[i] << endl;
}

// Tamaño
int tamano = sizeof(datos) / sizeof(datos[0]);  // 4
```

### Vectores Dinámicos

```cpp
#include <vector>

// Declaración
vector<int> numeros;              // Vector vacío
vector<int> valores = {1, 2, 3};  // Con valores iniciales
vector<int> datos(10);            // 10 elementos (valor 0)
vector<int> copia(10, 5);         // 10 elementos con valor 5

// Operaciones
numeros.push_back(42);     // Agregar al final
numeros.pop_back();        // Eliminar del final
int primero = numeros[0];  // Acceder por índice
int ultimo = numeros.back();  // Último elemento
int tamano = numeros.size();  // Tamaño actual
numeros.clear();           // Vaciar vector
bool vacio = numeros.empty();  // ¿Está vacío?

// Recorrer
for (int i = 0; i < numeros.size(); i++) {
    cout << numeros[i] << endl;
}

// Rango (C++11)
for (int num : numeros) {
    cout << num << endl;
}
```

---

## 🔤 Strings (Cadenas)

```cpp
#include <string>

// Declaración
string texto = "Hola";
string vacio;

// Concatenación
string saludo = "Hola" + string(" ") + "Mundo";  // "Hola Mundo"
saludo += "!";  // "Hola Mundo!"

// Acceso
char primera = texto[0];     // 'H'
char ultima = texto.back();  // 'a'

// Operaciones
int longitud = texto.length();     // 4
int tamano = texto.size();         // 4 (equivalente)
bool vacio = texto.empty();        // false
texto.clear();                     // Vaciar

// Subcadenas
string sub = texto.substr(0, 2);   // "Ho" (desde pos 0, 2 chars)

// Búsqueda
size_t pos = texto.find("la");     // 2 (posición donde inicia)
if (pos != string::npos) {         // Encontrado
    cout << "Encontrado en " << pos << endl;
}

// Comparación
if (texto == "Hola") { }           // Igualdad
if (texto < "Mundo") { }           // Orden alfabético

// Conversión
int numero = stoi("123");          // String to int
double decimal = stod("3.14");     // String to double
string texto = to_string(42);      // Número to string
```

---

## 🔧 Algoritmos Comunes

```cpp
#include <algorithm>

vector<int> nums = {5, 2, 8, 1, 9};

// Ordenar
sort(nums.begin(), nums.end());              // Ascendente
sort(nums.begin(), nums.end(), greater<int>()); // Descendente

// Invertir
reverse(nums.begin(), nums.end());

// Buscar
auto it = find(nums.begin(), nums.end(), 8);
if (it != nums.end()) {
    cout << "Encontrado en posición: " << (it - nums.begin()) << endl;
}

// Mínimo y máximo
int minimo = *min_element(nums.begin(), nums.end());
int maximo = *max_element(nums.begin(), nums.end());

// Suma de elementos
#include <numeric>
int suma = accumulate(nums.begin(), nums.end(), 0);
```

---

## 🎨 Manipulación de Bits

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `&` | AND bit a bit | `5 & 3` → `1` |
| `\|` | OR bit a bit | `5 \| 3` → `7` |
| `^` | XOR bit a bit | `5 ^ 3` → `6` |
| `~` | NOT bit a bit | `~5` → `-6` |
| `<<` | Desplazamiento izq. | `5 << 1` → `10` |
| `>>` | Desplazamiento der. | `5 >> 1` → `2` |

---

## 📂 Archivos

### Lectura

```cpp
#include <fstream>

ifstream archivo("datos.txt");
if (archivo.is_open()) {
    string linea;
    while (getline(archivo, linea)) {
        cout << linea << endl;
    }
    archivo.close();
}
```

### Escritura

```cpp
#include <fstream>

ofstream archivo("salida.txt");
if (archivo.is_open()) {
    archivo << "Línea 1" << endl;
    archivo << "Línea 2" << endl;
    archivo.close();
}
```

---

## 💡 Consejos y Buenas Prácticas

### Usar `auto` (C++11)

```cpp
auto numero = 42;           // int
auto decimal = 3.14;        // double
auto texto = "Hola";        // const char*
auto cadena = string("Hola"); // string

// Útil con iteradores
for (auto it = vec.begin(); it != vec.end(); ++it) {
    cout << *it << endl;
}
```

### nullptr vs NULL

```cpp
int* ptr = nullptr;  // C++11 (preferido)
int* ptr = NULL;     // Estilo antiguo
```

### Inicialización Uniforme (C++11)

```cpp
int a{5};
vector<int> nums{1, 2, 3, 4, 5};
string texto{"Hola"};
```

---

## 🔍 Depuración

```cpp
// Imprimir para depurar
#define DEBUG 1
#if DEBUG
    cout << "Debug: valor = " << valor << endl;
#endif

// Assert (verificar condiciones)
#include <cassert>
assert(numero > 0);  // Termina el programa si es falso
```

---

## 🎯 Plantillas Comunes

### Lectura de N números

```cpp
int n;
cin >> n;
vector<int> nums(n);
for (int i = 0; i < n; i++) {
    cin >> nums[i];
}
```

### Swap (Intercambio)

```cpp
// Con función de librería
#include <algorithm>
swap(a, b);

// Manual
int temp = a;
a = b;
b = temp;
```

### Máximo Común Divisor (GCD)

```cpp
#include <algorithm>  // C++17
int resultado = gcd(a, b);

// Manual (algoritmo de Euclides)
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

---

## 📌 Ejemplos Completos

### Ejemplo 1: Suma de Elementos

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    int suma = 0;
    
    for (int num : nums) {
        suma += num;
    }
    
    cout << "Suma: " << suma << endl;
    return 0;
}
```

### Ejemplo 2: Número Mayor

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    int mayor = max({a, b, c});
    cout << "Mayor: " << mayor << endl;
    
    return 0;
}
```

### Ejemplo 3: Palíndromo

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool esPalindromo(string texto) {
    string invertido = texto;
    reverse(invertido.begin(), invertido.end());
    return texto == invertido;
}

int main() {
    string palabra;
    cin >> palabra;
    
    if (esPalindromo(palabra)) {
        cout << "Es palíndromo" << endl;
    } else {
        cout << "No es palíndromo" << endl;
    }
    
    return 0;
}
```

---

## 🎯 Punteros y Referencias

### Punteros

```cpp
// Declaración
int numero = 42;
int* ptr = &numero;      // ptr apunta a la dirección de numero
int* ptr2 = nullptr;     // Puntero nulo (C++11)

// Operadores
&variable   // Dirección de memoria de variable
*ptr        // Valor al que apunta ptr (desreferencia)

// Uso
cout << numero << endl;    // 42
cout << &numero << endl;   // Dirección de memoria (ej: 0x7ffc...)
cout << ptr << endl;       // Misma dirección
cout << *ptr << endl;      // 42 (valor al que apunta)

*ptr = 100;               // Modifica numero a 100
```

### Punteros a Arrays

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr = arr;           // arr es equivalente a &arr[0]

// Acceso
cout << *ptr << endl;     // 1 (primer elemento)
cout << *(ptr + 2) << endl; // 3 (tercer elemento)
cout << ptr[2] << endl;   // 3 (notación de array)

// Recorrer con puntero
for (int i = 0; i < 5; i++) {
    cout << *(ptr + i) << endl;
}
```

### Punteros a Funciones

```cpp
// Función simple
int suma(int a, int b) {
    return a + b;
}

// Puntero a función
int (*ptrFunc)(int, int) = suma;

// Uso
int resultado = ptrFunc(3, 4);  // 7
```

### Referencias

```cpp
int numero = 42;
int& ref = numero;      // ref es una referencia a numero

ref = 100;              // Modifica numero a 100
cout << numero << endl; // 100

// Las referencias NO pueden ser nulas
// Las referencias NO pueden cambiar a qué apuntan
```

### Punteros vs Referencias

| Característica | Puntero | Referencia |
|---------------|---------|------------|
| Puede ser nulo | ✅ Sí (`nullptr`) | ❌ No |
| Puede cambiar | ✅ Sí | ❌ No |
| Notación | `*ptr`, `&var` | Transparente |
| Debe inicializarse | ❌ No | ✅ Sí |

---

## 🏗️ Estructuras y Clases

### Estructuras (struct)

```cpp
// Definición
struct Punto {
    int x;
    int y;
};

// Uso
Punto p1;
p1.x = 10;
p1.y = 20;

Punto p2 = {5, 15};  // Inicialización

// Con funciones
struct Rectangulo {
    int ancho;
    int alto;
    
    int area() {
        return ancho * alto;
    }
};

Rectangulo r = {10, 5};
cout << r.area() << endl;  // 50
```

### Clases Básicas

```cpp
class Persona {
private:
    string nombre;
    int edad;

public:
    // Constructor
    Persona(string n, int e) {
        nombre = n;
        edad = e;
    }
    
    // Constructor por defecto
    Persona() {
        nombre = "";
        edad = 0;
    }
    
    // Métodos getter
    string getNombre() {
        return nombre;
    }
    
    int getEdad() {
        return edad;
    }
    
    // Métodos setter
    void setNombre(string n) {
        nombre = n;
    }
    
    void setEdad(int e) {
        if (e >= 0) {
            edad = e;
        }
    }
    
    // Método normal
    void presentarse() {
        cout << "Hola, soy " << nombre << " y tengo " << edad << " años." << endl;
    }
};

// Uso
Persona p1("Juan", 25);
p1.presentarse();

Persona p2;
p2.setNombre("María");
p2.setEdad(30);
cout << p2.getNombre() << endl;
```

### Modificadores de Acceso

| Modificador | Acceso desde la clase | Acceso desde derivadas | Acceso externo |
|-------------|----------------------|------------------------|----------------|
| `private` | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ |

### Constructor y Destructor

```cpp
class Ejemplo {
private:
    int* datos;
    int tamano;

public:
    // Constructor
    Ejemplo(int t) {
        tamano = t;
        datos = new int[tamano];
        cout << "Constructor llamado" << endl;
    }
    
    // Destructor
    ~Ejemplo() {
        delete[] datos;
        cout << "Destructor llamado" << endl;
    }
    
    // Constructor de copia
    Ejemplo(const Ejemplo& otro) {
        tamano = otro.tamano;
        datos = new int[tamano];
        for (int i = 0; i < tamano; i++) {
            datos[i] = otro.datos[i];
        }
    }
};
```

### Herencia

```cpp
// Clase base
class Animal {
protected:
    string nombre;

public:
    Animal(string n) : nombre(n) {}
    
    virtual void hacerSonido() {
        cout << "Sonido genérico" << endl;
    }
    
    void dormir() {
        cout << nombre << " está durmiendo" << endl;
    }
};

// Clase derivada
class Perro : public Animal {
public:
    Perro(string n) : Animal(n) {}
    
    void hacerSonido() override {
        cout << "Guau guau!" << endl;
    }
    
    void moverCola() {
        cout << nombre << " mueve la cola" << endl;
    }
};

// Uso
Perro miPerro("Max");
miPerro.hacerSonido();  // "Guau guau!"
miPerro.dormir();       // "Max está durmiendo"
miPerro.moverCola();    // "Max mueve la cola"
```

### Polimorfismo

```cpp
Animal* animales[3];
animales[0] = new Perro("Max");
animales[1] = new Gato("Luna");
animales[2] = new Pajaro("Pío");

for (int i = 0; i < 3; i++) {
    animales[i]->hacerSonido();  // Llama al método correcto para cada tipo
}

// Liberar memoria
for (int i = 0; i < 3; i++) {
    delete animales[i];
}
```

---

## 💾 Memoria Dinámica

### new y delete

```cpp
// Asignar memoria para un entero
int* ptr = new int;
*ptr = 42;
delete ptr;  // Liberar memoria

// Asignar con inicialización
int* num = new int(100);
delete num;

// Arrays dinámicos
int* arr = new int[10];
for (int i = 0; i < 10; i++) {
    arr[i] = i * 2;
}
delete[] arr;  // ¡Importante usar delete[] para arrays!

// Matriz dinámica
int filas = 3, cols = 4;
int** matriz = new int*[filas];
for (int i = 0; i < filas; i++) {
    matriz[i] = new int[cols];
}

// Liberar matriz
for (int i = 0; i < filas; i++) {
    delete[] matriz[i];
}
delete[] matriz;
```

### Problemas Comunes

```cpp
// ❌ Memory Leak (fuga de memoria)
void funcionMala() {
    int* ptr = new int(42);
    // ¡No se libera la memoria!
}

// ✅ Correcto
void funcionBuena() {
    int* ptr = new int(42);
    // ... usar ptr ...
    delete ptr;
}

// ❌ Dangling Pointer (puntero colgante)
int* ptr = new int(42);
delete ptr;
*ptr = 100;  // ¡Error! Memoria ya liberada

// ❌ Double Delete
int* ptr = new int(42);
delete ptr;
delete ptr;  // ¡Error! Ya se liberó
```

### Punteros Inteligentes (C++11)

```cpp
#include <memory>

// unique_ptr - Un solo propietario
{
    unique_ptr<int> ptr1(new int(42));
    unique_ptr<int> ptr2 = make_unique<int>(100);  // C++14 (preferido)
    
    cout << *ptr1 << endl;  // 42
    
    // No se puede copiar
    // unique_ptr<int> ptr3 = ptr1;  // ❌ Error
    
    // Se puede mover
    unique_ptr<int> ptr3 = move(ptr1);  // ✅
    // Ahora ptr1 es nullptr
    
}  // Se libera automáticamente al salir del scope

// shared_ptr - Múltiples propietarios
{
    shared_ptr<int> ptr1 = make_shared<int>(42);
    shared_ptr<int> ptr2 = ptr1;  // Comparten propiedad
    
    cout << ptr1.use_count() << endl;  // 2 (dos propietarios)
    
}  // Se libera cuando el último propietario sale del scope

// weak_ptr - Referencia débil (no aumenta el contador)
{
    shared_ptr<int> shared = make_shared<int>(42);
    weak_ptr<int> weak = shared;
    
    if (auto ptr = weak.lock()) {  // Obtener shared_ptr temporal
        cout << *ptr << endl;
    }
}

// unique_ptr con arrays
unique_ptr<int[]> arr(new int[10]);
arr[0] = 100;

// shared_ptr con clases
shared_ptr<Persona> persona = make_shared<Persona>("Juan", 25);
persona->presentarse();
```

### Ventajas de Punteros Inteligentes

| Característica | unique_ptr | shared_ptr | weak_ptr |
|---------------|------------|------------|----------|
| Propiedad única | ✅ | ❌ | ❌ |
| Propiedad compartida | ❌ | ✅ | ❌ |
| Referencia sin propiedad | ❌ | ❌ | ✅ |
| Overhead | Bajo | Medio | Bajo |
| Liberación automática | ✅ | ✅ | ❌ |

:::tip Recomendación
Usa `make_unique` y `make_shared` en lugar de `new` directo para evitar fugas de memoria y tener código más seguro.
:::

---

## 🔗 Recursos Adicionales

- [C++ Reference](https://en.cppreference.com/)
- [CPlusPlus.com](http://www.cplusplus.com/)
- [Learn C++](https://www.learncpp.com/)
