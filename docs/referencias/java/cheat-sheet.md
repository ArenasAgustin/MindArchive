---
title: "☕ Java Cheat Sheet"
description: "Guía rápida de referencia de Java con lo más usado"
sidebar_position: 1
tags: [java, programación, referencia, cheat-sheet, poo]
---

Guía rápida de referencia con los elementos más utilizados de Java.

---

## 📝 Estructura Básica

### Programa Básico

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
    }
}
```

### Comentarios

```java
// Comentario de una línea

/* 
 * Comentario de
 * múltiples líneas
 */

/**
 * Comentario de documentación (JavaDoc)
 * @param nombre Descripción del parámetro
 * @return Descripción del retorno
 */
```

---

## 📚 Bibliotecas Comunes

```java
import java.util.*;              // Colecciones (ArrayList, HashMap, etc.)
import java.util.Scanner;        // Entrada de datos
import java.io.*;                // Entrada/Salida de archivos
import java.math.*;              // BigInteger, BigDecimal
import java.time.*;              // Fechas y horas (Java 8+)
import java.util.stream.*;       // Streams (Java 8+)
```

---

## 🔤 Tipos de Datos

### Primitivos

| Tipo | Tamaño | Rango | Valor por Defecto |
|------|--------|-------|-------------------|
| `byte` | 8 bits | -128 a 127 | 0 |
| `short` | 16 bits | -32,768 a 32,767 | 0 |
| `int` | 32 bits | -2³¹ a 2³¹-1 | 0 |
| `long` | 64 bits | -2⁶³ a 2⁶³-1 | 0L |
| `float` | 32 bits | ~±3.4e38 | 0.0f |
| `double` | 64 bits | ~±1.7e308 | 0.0 |
| `char` | 16 bits | 0 a 65,535 | '\u0000' |
| `boolean` | 1 bit | true/false | false |

### Declaración de Variables

```java
int numero = 42;
double pi = 3.14159;
char letra = 'A';
boolean esVerdadero = true;
String texto = "Hola";

// Constantes
final int MAX = 100;
final double PI = 3.14159;

// Inferencia de tipo (Java 10+)
var nombre = "Juan";  // String
var edad = 25;        // int
```

---

## 🖨️ Entrada y Salida

### Salida por Consola

```java
System.out.print("Sin salto de línea");
System.out.println("Con salto de línea");
System.out.printf("Número: %d, Decimal: %.2f\n", 42, 3.14159);

// Formato
System.out.printf("%d", numero);      // Entero
System.out.printf("%.2f", decimal);   // Decimal con 2 decimales
System.out.printf("%s", texto);       // String
System.out.printf("%b", booleano);    // Boolean
```

### Entrada por Consola

```java
Scanner scanner = new Scanner(System.in);

// Leer diferentes tipos
int entero = scanner.nextInt();
double decimal = scanner.nextDouble();
String palabra = scanner.next();
String linea = scanner.nextLine();
boolean bool = scanner.nextBoolean();

scanner.close();  // Cerrar el scanner
```

---

## ➕ Operadores

### Aritméticos

```java
int a = 10, b = 3;
a + b   // 13 - Suma
a - b   // 7  - Resta
a * b   // 30 - Multiplicación
a / b   // 3  - División (entera)
a % b   // 1  - Módulo (resto)

a++     // Post-incremento
++a     // Pre-incremento
a--     // Post-decremento
--a     // Pre-decremento
```

### Comparación

```java
a == b  // Igual a
a != b  // Diferente de
a > b   // Mayor que
a < b   // Menor que
a >= b  // Mayor o igual que
a <= b  // Menor o igual que
```

### Lógicos

```java
&&  // AND (y)
||  // OR (o)
!   // NOT (no)

// Ejemplo
if (edad >= 18 && tienePermiso) {
    System.out.println("Puede conducir");
}
```

### Asignación

```java
a = 5     // Asignación simple
a += 5    // a = a + 5
a -= 5    // a = a - 5
a *= 5    // a = a * 5
a /= 5    // a = a / 5
a %= 5    // a = a % 5
```

### Operador Ternario

```java
// Sintaxis: condicion ? valorSiVerdadero : valorSiFalso

int max = (a > b) ? a : b;
String resultado = (edad >= 18) ? "Mayor" : "Menor";

// Asignación condicional
String estado = (temperatura > 30) ? "Calor" : "Frío";
int absoluto = (numero >= 0) ? numero : -numero;

// En retornos
public static String obtenerEstado(int edad) {
    return (edad >= 18) ? "Adulto" : "Menor";
}

// Ternario anidado
String categoria = (edad < 13) ? "Niño" 
                 : (edad < 18) ? "Adolescente"
                 : (edad < 65) ? "Adulto" 
                 : "Adulto Mayor";
```

### Alternativas al Operador Ternario (Java)

```java
// Optional (Java 8+) - Manejo seguro de nulos
import java.util.Optional;

String valor = null;
String resultado = Optional.ofNullable(valor).orElse("default");  // "default"
String resultado2 = Optional.ofNullable(valor).orElseGet(() -> "computed");

// Objects.requireNonNullElse (Java 9+)
import java.util.Objects;

String nombre = Objects.requireNonNullElse(input, "Anónimo");
int edad = Objects.requireNonNullElse(edadInput, 0);

// Switch Expression (Java 14+) - Asignación directa
String dia = switch (numero) {
    case 1 -> "Lunes";
    case 2 -> "Martes";
    case 3 -> "Miércoles";
    default -> "Otro día";
};

int dias = switch (mes) {
    case 1, 3, 5, 7, 8, 10, 12 -> 31;
    case 4, 6, 9, 11 -> 30;
    case 2 -> 28;
    default -> 0;
};
```

---

## 🔀 Estructuras de Control

### If-Else

```java
if (condicion) {
    // código si verdadero
} else if (otraCondicion) {
    // código si otra condición es verdadera
} else {
    // código si todas son falsas
}
```

### Switch

```java
int dia = 3;
switch (dia) {
    case 1:
        System.out.println("Lunes");
        break;
    case 2:
        System.out.println("Martes");
        break;
    default:
        System.out.println("Otro día");
        break;
}

// Switch moderno (Java 14+)
String resultado = switch (dia) {
    case 1 -> "Lunes";
    case 2 -> "Martes";
    case 3 -> "Miércoles";
    default -> "Otro día";
};
```

### Bucles

```java
// For tradicional
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// For-each
int[] numeros = {1, 2, 3, 4, 5};
for (int num : numeros) {
    System.out.println(num);
}

// While
while (condicion) {
    // código
}

// Do-While
do {
    // código (se ejecuta al menos una vez)
} while (condicion);

// Control de bucles
break;     // Sale del bucle
continue;  // Salta a la siguiente iteración
```

---

## 🧮 Métodos (Funciones)

### Declaración y Uso

```java
// Método sin retorno
public static void saludar() {
    System.out.println("Hola");
}

// Método con parámetros y retorno
public static int suma(int a, int b) {
    return a + b;
}

// Método con varargs (parámetros variables)
public static int sumar(int... numeros) {
    int total = 0;
    for (int num : numeros) {
        total += num;
    }
    return total;
}

// Uso
saludar();
int resultado = suma(5, 3);
int total = sumar(1, 2, 3, 4, 5);  // Varargs
```

### Sobrecarga de Métodos

```java
public static int suma(int a, int b) {
    return a + b;
}

public static double suma(double a, double b) {
    return a + b;
}

public static int suma(int a, int b, int c) {
    return a + b + c;
}
```

---

## 📦 Arrays (Arreglos)

### Declaración y Uso

```java
// Declaración
int[] numeros = new int[5];
int[] valores = {1, 2, 3, 4, 5};
String[] nombres = {"Ana", "Luis", "Pedro"};

// Acceso
numeros[0] = 10;
int primero = valores[0];

// Recorrer
for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}

// For-each
for (int num : numeros) {
    System.out.println(num);
}
```

### Arrays Multidimensionales

```java
// Matriz 2D
int[][] matriz = new int[3][4];
int[][] valores = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Acceso
matriz[0][0] = 1;
int valor = valores[1][2];  // 6

// Recorrer
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println();
}
```

---

## 📋 Colecciones (Collections)

### ArrayList

```java
import java.util.ArrayList;

ArrayList<Integer> lista = new ArrayList<>();

// Agregar elementos
lista.add(10);
lista.add(20);
lista.add(1, 15);  // Insertar en posición 1

// Acceder
int primero = lista.get(0);
int ultimo = lista.get(lista.size() - 1);

// Modificar
lista.set(0, 5);  // Cambiar elemento en posición 0

// Eliminar
lista.remove(0);           // Por índice
lista.remove(Integer.valueOf(20));  // Por valor

// Utilidades
lista.size();              // Tamaño
lista.contains(15);        // ¿Contiene?
lista.isEmpty();           // ¿Está vacío?
lista.clear();             // Vaciar

// Recorrer
for (int num : lista) {
    System.out.println(num);
}
```

### HashMap

```java
import java.util.HashMap;

HashMap<String, Integer> edades = new HashMap<>();

// Agregar
edades.put("Ana", 25);
edades.put("Luis", 30);

// Obtener
int edad = edades.get("Ana");  // 25
int edadDefault = edades.getOrDefault("Pedro", 0);  // 0

// Verificar
edades.containsKey("Ana");     // true
edades.containsValue(25);      // true

// Eliminar
edades.remove("Luis");

// Recorrer
for (String nombre : edades.keySet()) {
    System.out.println(nombre + ": " + edades.get(nombre));
}

for (Map.Entry<String, Integer> entry : edades.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

### HashSet

```java
import java.util.HashSet;

HashSet<String> conjunto = new HashSet<>();

// Agregar
conjunto.add("A");
conjunto.add("B");
conjunto.add("A");  // No se agrega (duplicado)

// Verificar
conjunto.contains("A");  // true

// Eliminar
conjunto.remove("A");

// Tamaño
conjunto.size();
```

---

## 🔤 Strings

### Operaciones Comunes

```java
String texto = "Hola Mundo";

// Longitud
int longitud = texto.length();  // 10

// Concatenación
String saludo = "Hola" + " " + "Mundo";
String nombre = "Juan";
String mensaje = String.format("Hola %s", nombre);

// Comparación
texto.equals("Hola Mundo");         // true
texto.equalsIgnoreCase("HOLA MUNDO"); // true
texto.compareTo("Hola");            // > 0

// Búsqueda
texto.contains("Mundo");            // true
texto.startsWith("Hola");           // true
texto.endsWith("Mundo");            // true
texto.indexOf("Mundo");             // 5
texto.lastIndexOf("o");             // 8

// Extracción
char caracter = texto.charAt(0);    // 'H'
String sub = texto.substring(0, 4); // "Hola"
String sub2 = texto.substring(5);   // "Mundo"

// Transformación
texto.toUpperCase();                // "HOLA MUNDO"
texto.toLowerCase();                // "hola mundo"
texto.trim();                       // Elimina espacios al inicio/final
texto.replace("Mundo", "Java");     // "Hola Java"

// División
String[] palabras = texto.split(" "); // ["Hola", "Mundo"]

// Conversión
String numero = String.valueOf(123);
int num = Integer.parseInt("123");
double dec = Double.parseDouble("3.14");
```

### StringBuilder

```java
StringBuilder sb = new StringBuilder();

sb.append("Hola");
sb.append(" ");
sb.append("Mundo");

sb.insert(5, "Bello ");
sb.delete(5, 11);
sb.reverse();

String resultado = sb.toString();
```

---

## 🏗️ Programación Orientada a Objetos

### Clases y Objetos

```java
public class Persona {
    // Atributos
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Constructor por defecto
    public Persona() {
        this.nombre = "";
        this.edad = 0;
    }
    
    // Getters
    public String getNombre() {
        return nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setEdad(int edad) {
        if (edad >= 0) {
            this.edad = edad;
        }
    }
    
    // Métodos
    public void presentarse() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años.");
    }
}

// Uso
Persona p1 = new Persona("Juan", 25);
p1.presentarse();

Persona p2 = new Persona();
p2.setNombre("María");
p2.setEdad(30);
```

### Modificadores de Acceso

| Modificador | Clase | Paquete | Subclase | Global |
|------------|-------|---------|----------|--------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

### Herencia

```java
// Clase base
public class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
    
    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }
}

// Clase derivada
public class Perro extends Animal {
    public Perro(String nombre) {
        super(nombre);  // Llamar al constructor de la clase base
    }
    
    @Override
    public void hacerSonido() {
        System.out.println("Guau guau!");
    }
    
    public void moverCola() {
        System.out.println(nombre + " mueve la cola");
    }
}

// Uso
Perro miPerro = new Perro("Max");
miPerro.hacerSonido();  // "Guau guau!"
miPerro.dormir();       // "Max está durmiendo"
miPerro.moverCola();    // "Max mueve la cola"
```

### Polimorfismo

```java
Animal[] animales = new Animal[3];
animales[0] = new Perro("Max");
animales[1] = new Gato("Luna");
animales[2] = new Pajaro("Pío");

for (Animal animal : animales) {
    animal.hacerSonido();  // Llama al método correcto para cada tipo
}
```

### Clases Abstractas

```java
public abstract class Figura {
    protected String color;
    
    public Figura(String color) {
        this.color = color;
    }
    
    // Método abstracto (sin implementación)
    public abstract double calcularArea();
    
    // Método concreto
    public void mostrarColor() {
        System.out.println("Color: " + color);
    }
}

public class Circulo extends Figura {
    private double radio;
    
    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }
    
    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}
```

### Interfaces

```java
public interface Volador {
    void volar();  // Métodos son públicos y abstractos por defecto
    void aterrizar();
}

public class Pajaro implements Volador {
    @Override
    public void volar() {
        System.out.println("El pájaro está volando");
    }
    
    @Override
    public void aterrizar() {
        System.out.println("El pájaro aterrizó");
    }
}

// Múltiples interfaces
public class Avion implements Volador, Transportable {
    // Implementar todos los métodos de ambas interfaces
}
```

---

## 🧮 Clase Math

```java
// Constantes
Math.PI     // 3.141592653589793
Math.E      // 2.718281828459045

// Funciones básicas
Math.abs(-5)           // 5 - Valor absoluto
Math.max(10, 20)       // 20 - Máximo
Math.min(10, 20)       // 10 - Mínimo

// Potencias y raíces
Math.pow(2, 3)         // 8.0 - Potencia
Math.sqrt(16)          // 4.0 - Raíz cuadrada
Math.cbrt(27)          // 3.0 - Raíz cúbica

// Redondeo
Math.ceil(3.2)         // 4.0 - Redondeo hacia arriba
Math.floor(3.8)        // 3.0 - Redondeo hacia abajo
Math.round(3.5)        // 4 - Redondeo al entero más cercano

// Trigonometría (radianes)
Math.sin(Math.PI / 2)  // 1.0
Math.cos(0)            // 1.0
Math.tan(Math.PI / 4)  // 1.0

// Aleatorios
Math.random()          // 0.0 a 1.0 (exclusivo)
(int)(Math.random() * 100)  // 0 a 99
```

---

## 🎲 Números Aleatorios

```java
import java.util.Random;

Random rand = new Random();

// Generar aleatorios
int entero = rand.nextInt();           // Cualquier int
int dado = rand.nextInt(6) + 1;        // 1 a 6
int rango = rand.nextInt(max - min + 1) + min;  // min a max
double decimal = rand.nextDouble();    // 0.0 a 1.0
boolean bool = rand.nextBoolean();     // true o false
```

---

## 📁 Manejo de Archivos

### Lectura de Archivos

```java
import java.io.*;

// Lectura línea por línea
try {
    BufferedReader br = new BufferedReader(new FileReader("archivo.txt"));
    String linea;
    while ((linea = br.readLine()) != null) {
        System.out.println(linea);
    }
    br.close();
} catch (IOException e) {
    e.printStackTrace();
}

// Con try-with-resources (cierra automáticamente)
try (BufferedReader br = new BufferedReader(new FileReader("archivo.txt"))) {
    String linea;
    while ((linea = br.readLine()) != null) {
        System.out.println(linea);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Escritura de Archivos

```java
// Escribir en archivo
try (BufferedWriter bw = new BufferedWriter(new FileWriter("salida.txt"))) {
    bw.write("Línea 1\n");
    bw.write("Línea 2\n");
} catch (IOException e) {
    e.printStackTrace();
}

// Agregar al final (append)
try (BufferedWriter bw = new BufferedWriter(new FileWriter("salida.txt", true))) {
    bw.write("Nueva línea\n");
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## ⚠️ Manejo de Excepciones

```java
// Try-catch básico
try {
    int resultado = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: División por cero");
}

// Múltiples catch
try {
    // código que puede lanzar excepciones
} catch (ArithmeticException e) {
    System.out.println("Error aritmético");
} catch (NullPointerException e) {
    System.out.println("Error: objeto nulo");
} catch (Exception e) {
    System.out.println("Error general");
}

// Try-catch-finally
try {
    // código
} catch (Exception e) {
    // manejar error
} finally {
    // código que siempre se ejecuta
}

// Lanzar excepciones
public static void validarEdad(int edad) throws IllegalArgumentException {
    if (edad < 0) {
        throw new IllegalArgumentException("Edad no puede ser negativa");
    }
}
```

---

## λ Lambda Expressions (Java 8+)

### Sintaxis Básica

```java
// Sintaxis: (parámetros) -> expresión
// o: (parámetros) -> { bloque de código }

// Sin parámetros
() -> System.out.println("Hola")
() -> 42
() -> { return "Resultado"; }

// Un parámetro (paréntesis opcionales)
x -> x * 2
(x) -> x * 2
x -> { return x * 2; }

// Múltiples parámetros
(x, y) -> x + y
(x, y) -> { return x + y; }
(a, b) -> {
    int suma = a + b;
    return suma;
}
```

### Interfaces Funcionales

```java
// Interfaz funcional (solo un método abstracto)
@FunctionalInterface
interface Operacion {
    int calcular(int a, int b);
}

// Uso con lambda
Operacion suma = (a, b) -> a + b;
Operacion resta = (a, b) -> a - b;
Operacion multiplicacion = (a, b) -> a * b;

int resultado = suma.calcular(5, 3);  // 8
```

### Interfaces Funcionales Predefinidas

```java
import java.util.function.*;

// Predicate<T> - Recibe T, retorna boolean
Predicate<Integer> esPar = n -> n % 2 == 0;
boolean resultado = esPar.test(4);  // true

// Function<T, R> - Recibe T, retorna R
Function<String, Integer> longitud = s -> s.length();
int len = longitud.apply("Hola");  // 4

// Consumer<T> - Recibe T, no retorna nada
Consumer<String> imprimir = s -> System.out.println(s);
imprimir.accept("Hola Mundo");

// Supplier<T> - No recibe nada, retorna T
Supplier<Double> aleatorio = () -> Math.random();
double num = aleatorio.get();

// BiFunction<T, U, R> - Recibe T y U, retorna R
BiFunction<Integer, Integer, Integer> suma = (a, b) -> a + b;
int total = suma.apply(5, 3);  // 8
```

### Lambdas con Colecciones

```java
import java.util.*;

List<String> nombres = Arrays.asList("Ana", "Luis", "Pedro", "María");

// forEach
nombres.forEach(nombre -> System.out.println(nombre));
nombres.forEach(System.out::println);  // Referencia a método

// sort
nombres.sort((a, b) -> a.compareTo(b));
nombres.sort(String::compareTo);  // Referencia a método

// removeIf
nombres.removeIf(n -> n.startsWith("A"));

// replaceAll
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);
numeros.replaceAll(n -> n * 2);  // [2, 4, 6, 8, 10]
```

### Lambdas con Streams

```java
import java.util.stream.*;

List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// filter - Filtrar elementos
List<Integer> pares = numeros.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());  // [2, 4, 6, 8, 10]

// map - Transformar elementos
List<Integer> cuadrados = numeros.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());  // [1, 4, 9, 16, 25, ...]

// reduce - Reducir a un solo valor
int suma = numeros.stream()
    .reduce(0, (a, b) -> a + b);  // 55

Optional<Integer> max = numeros.stream()
    .reduce((a, b) -> a > b ? a : b);  // Optional[10]

// Combinaciones
int sumaPares = numeros.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .reduce(0, (a, b) -> a + b);  // 60

// Operaciones con Strings
List<String> palabras = Arrays.asList("hola", "mundo", "java", "lambda");

List<String> mayusculas = palabras.stream()
    .map(s -> s.toUpperCase())
    .collect(Collectors.toList());

long count = palabras.stream()
    .filter(s -> s.length() > 4)
    .count();  // 2
```

### Referencias a Métodos

```java
// Referencia a método estático
// Clase::metodoEstatico
Function<String, Integer> parser = Integer::parseInt;
int num = parser.apply("123");  // 123

// Referencia a método de instancia
// objeto::metodoInstancia
String texto = "Hola";
Supplier<Integer> longitud = texto::length;
int len = longitud.get();  // 4

// Referencia a método de instancia de un tipo arbitrario
// Clase::metodoInstancia
Function<String, String> mayusculas = String::toUpperCase;
String upper = mayusculas.apply("hola");  // "HOLA"

List<String> nombres = Arrays.asList("Ana", "Luis", "Pedro");
nombres.forEach(System.out::println);

// Referencia a constructor
// Clase::new
Supplier<ArrayList<String>> listSupplier = ArrayList::new;
ArrayList<String> lista = listSupplier.get();

Function<Integer, ArrayList<String>> listWithSize = ArrayList::new;
ArrayList<String> lista10 = listWithSize.apply(10);
```

### Ejemplos Prácticos

```java
// Calculadora con lambdas
Map<String, BiFunction<Integer, Integer, Integer>> operaciones = new HashMap<>();
operaciones.put("+", (a, b) -> a + b);
operaciones.put("-", (a, b) -> a - b);
operaciones.put("*", (a, b) -> a * b);
operaciones.put("/", (a, b) -> a / b);

int resultado = operaciones.get("+").apply(10, 5);  // 15

// Validaciones
Predicate<String> esEmail = s -> s.contains("@") && s.contains(".");
Predicate<String> noVacio = s -> s != null && !s.isEmpty();
Predicate<String> emailValido = noVacio.and(esEmail);

boolean valido = emailValido.test("user@example.com");  // true

// Procesamiento de lista de personas
class Persona {
    String nombre;
    int edad;
    
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public String getNombre() { return nombre; }
    public int getEdad() { return edad; }
}

List<Persona> personas = Arrays.asList(
    new Persona("Ana", 25),
    new Persona("Luis", 30),
    new Persona("Pedro", 20)
);

// Filtrar mayores de 21 y obtener nombres
List<String> nombresMayores = personas.stream()
    .filter(p -> p.getEdad() > 21)
    .map(Persona::getNombre)
    .sorted()
    .collect(Collectors.toList());  // ["Ana", "Luis"]

// Promedio de edades
double promedioEdad = personas.stream()
    .mapToInt(Persona::getEdad)
    .average()
    .orElse(0.0);  // 25.0
```

### Ventajas de Lambdas

| Ventaja | Descripción |
|---------|-------------|
| 🎯 **Código conciso** | Menos verbosidad que clases anónimas |
| 📖 **Legibilidad** | Expresa la intención de forma clara |
| 🔄 **Programación funcional** | Facilita el estilo funcional en Java |
| ⚡ **Rendimiento** | Más eficiente que clases anónimas |
| 🧩 **Composición** | Fácil combinación de funciones |

:::tip Comparación: Clase Anónima vs Lambda

```java
// ❌ Clase anónima (verbosa)
List<String> nombres = Arrays.asList("Ana", "Luis", "Pedro");
Collections.sort(nombres, new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// ✅ Lambda (concisa)
Collections.sort(nombres, (a, b) -> a.compareTo(b));

// ✅✅ Referencia a método (más concisa)
Collections.sort(nombres, String::compareTo);
```

:::

---

## 🔗 Recursos Adicionales

- [Documentación Oficial de Java](https://docs.oracle.com/en/java/)
- [Java Tutorial - Oracle](https://docs.oracle.com/javase/tutorial/)
- [Java API Documentation](https://docs.oracle.com/en/java/javase/17/docs/api/)
