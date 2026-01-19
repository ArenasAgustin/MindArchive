---
title: "TypeScript Cheat Sheet"
description: "Referencia completa de TypeScript con tipos, interfaces, genéricos, decoradores y configuración"
sidebar_position: 2
tags: [typescript, cheatsheet, referencia, tipos, interfaces, generics, decorators]
---

Referencia completa de TypeScript - el superset tipado de JavaScript que compila a JavaScript puro.

---

## 📋 Conceptos Básicos

### ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** que añade:

- ✅ **Tipado estático** - detecta errores en tiempo de compilación
- ✅ **IntelliSense mejorado** - autocompletado y navegación
- ✅ **Características modernas** - antes que JavaScript estándar
- ✅ **Refactorización segura** - cambios con confianza
- ✅ **Documentación implícita** - los tipos documentan el código

### Instalación y Configuración

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Verificar versión
tsc --version

# Crear tsconfig.json
tsc --init

# Compilar archivo
tsc archivo.ts

# Watch mode
tsc --watch

# Compilar todo el proyecto
tsc
```

---

## 🎯 Tipos Básicos

### Tipos Primitivos

```typescript
// String
let nombre: string = "Ana";
let apellido: string = 'García';
let template: string = `Hola, ${nombre}`;

// Number
let edad: number = 25;
let decimal: number = 3.14;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// Boolean
let esActivo: boolean = true;
let estaCompleto: boolean = false;

// Null y Undefined
let valorNulo: null = null;
let noDefinido: undefined = undefined;

// Any - evitar en lo posible
let cualquierCosa: any = "texto";
cualquierCosa = 42;
cualquierCosa = true; // ✅ Permitido pero no recomendado

// Unknown - tipo seguro de any
let valorDesconocido: unknown = "algo";
// valorDesconocido.toUpperCase(); // ❌ Error
if (typeof valorDesconocido === "string") {
  valorDesconocido.toUpperCase(); // ✅ OK después de type guard
}

// Void - para funciones sin retorno
function saludar(): void {
  console.log("Hola");
}

// Never - funciones que nunca retornan
function error(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {}
}
```

### Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4];
let numeros2: Array<number> = [1, 2, 3, 4];

// Array de strings
let nombres: string[] = ["Ana", "Luis", "Carlos"];

// Array de cualquier tipo
let mixto: any[] = [1, "texto", true];

// Array readonly
let lecturaUnicamente: ReadonlyArray<number> = [1, 2, 3];
// lecturaUnicamente.push(4); // ❌ Error

// Forma abreviada readonly
let readonly2: readonly number[] = [1, 2, 3];
```

### Tuplas

```typescript
// Tupla - array con tipos y longitud fija
let persona: [string, number] = ["Ana", 25];
let coordenadas: [number, number] = [10, 20];

// Acceso
let nombre = persona[0]; // string
let edad = persona[1];   // number

// Tupla con elementos opcionales
let punto: [number, number, number?] = [10, 20]; // z es opcional

// Tupla con rest elements
let tupla: [string, ...number[]] = ["inicio", 1, 2, 3, 4];

// Tuplas readonly
let tuplaSoloLectura: readonly [string, number] = ["Ana", 25];

// Labeled tuples (TypeScript 4.0+)
type Rango = [inicio: number, fin: number];
let rango: Rango = [0, 100];
```

### Enums

```typescript
// Enum numérico
enum Direccion {
  Norte,    // 0
  Sur,      // 1
  Este,     // 2
  Oeste     // 3
}

let dir: Direccion = Direccion.Norte;
console.log(dir); // 0

// Enum con valores personalizados
enum EstadoHTTP {
  OK = 200,
  NoEncontrado = 404,
  ErrorServidor = 500
}

// Enum de strings
enum Color {
  Rojo = "RED",
  Verde = "GREEN",
  Azul = "BLUE"
}

let colorFavorito: Color = Color.Azul;
console.log(colorFavorito); // "BLUE"

// Const enum (más eficiente, se elimina en compilación)
const enum Operacion {
  Suma,
  Resta,
  Multiplicacion
}

let op = Operacion.Suma; // Se reemplaza por 0 en JS compilado

// Heterogenous enums (no recomendado)
enum Mixto {
  No = 0,
  Si = "YES"
}
```

### Literales

```typescript
// Literal types
let literalString: "hola" = "hola";
// literalString = "adios"; // ❌ Error

let literalNumber: 42 = 42;

// Union de literales
type Direccion = "norte" | "sur" | "este" | "oeste";
let direccion: Direccion = "norte"; // ✅
// let direccion2: Direccion = "arriba"; // ❌ Error

type EstadoConexion = "conectado" | "desconectado" | "reconectando";
let estado: EstadoConexion = "conectado";

// Combinado con otros tipos
type RespuestaExito = { status: 200; data: string };
type RespuestaError = { status: 404 | 500; error: string };
type Respuesta = RespuestaExito | RespuestaError;
```

---

## 🔗 Tipos Compuestos

### Union Types

```typescript
// Union - puede ser uno de varios tipos
let id: number | string;
id = 42;        // ✅ OK
id = "ABC123";  // ✅ OK
// id = true;   // ❌ Error

// Función con union type
function imprimirId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// Union de literales
type Estado = "cargando" | "exito" | "error";

// Union con null/undefined
let nombre: string | null = null;
nombre = "Ana"; // ✅ OK
```

### Intersection Types

```typescript
// Intersection - combina múltiples tipos
type Persona = {
  nombre: string;
  edad: number;
};

type Empleado = {
  id: number;
  departamento: string;
};

// PersonaEmpleado tiene TODAS las propiedades
type PersonaEmpleado = Persona & Empleado;

let empleado: PersonaEmpleado = {
  nombre: "Ana",
  edad: 25,
  id: 123,
  departamento: "IT"
};

// Intersección de tipos con métodos
type Loggeable = {
  log(): void;
};

type Serializable = {
  serialize(): string;
};

type Logger = Loggeable & Serializable;
```

### Type Aliases

```typescript
// Type alias - crear nombres para tipos
type Texto = string;
type Numero = number;
type ID = number | string;

// Type alias para objetos
type Usuario = {
  id: ID;
  nombre: string;
  email: string;
  edad?: number; // Opcional
};

// Type alias para funciones
type Operacion = (a: number, b: number) => number;
const suma: Operacion = (a, b) => a + b;

// Type alias genérico
type Respuesta<T> = {
  data: T;
  error?: string;
  timestamp: number;
};

let respuesta: Respuesta<string> = {
  data: "Éxito",
  timestamp: Date.now()
};
```

---

## 🏗️ Interfaces

### Declaración de Interfaces

```typescript
// Interface básica
interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Ana",
  edad: 25
};

// Propiedades opcionales
interface Usuario {
  id: number;
  nombre: string;
  email?: string;      // Opcional
  telefono?: string;   // Opcional
}

// Propiedades readonly
interface Punto {
  readonly x: number;
  readonly y: number;
}

let punto: Punto = { x: 10, y: 20 };
// punto.x = 5; // ❌ Error - es readonly

// Index signatures
interface Diccionario {
  [clave: string]: string;
}

let colores: Diccionario = {
  rojo: "#FF0000",
  verde: "#00FF00",
  azul: "#0000FF"
};

// Numeric index signature
interface ListaNumeros {
  [indice: number]: string;
}

let lista: ListaNumeros = ["uno", "dos", "tres"];
```

### Interfaces de Funciones

```typescript
// Interface para función
interface Comparador {
  (a: number, b: number): number;
}

let ordenar: Comparador = (a, b) => a - b;

// Interface con métodos
interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
}

let calc: Calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b
};

// Callable y constructible
interface FuncionConstructora {
  new (nombre: string): Persona;
  (valor: string): string;
}
```

### Extensión de Interfaces

```typescript
// Extender interfaces
interface Animal {
  nombre: string;
  edad: number;
}

interface Perro extends Animal {
  raza: string;
  ladrar(): void;
}

let perro: Perro = {
  nombre: "Max",
  edad: 3,
  raza: "Labrador",
  ladrar: () => console.log("Guau!")
};

// Extender múltiples interfaces
interface Volador {
  volar(): void;
}

interface Nadador {
  nadar(): void;
}

interface Pato extends Animal, Volador, Nadador {
  graznar(): void;
}
```

### Interface vs Type Alias

```typescript
// Similitudes - ambos pueden describir objetos
interface IPersona {
  nombre: string;
}

type TPersona = {
  nombre: string;
};

// ✅ Interface puede extenderse
interface IEmpleado extends IPersona {
  id: number;
}

// ✅ Type puede usar intersección
type TEmpleado = TPersona & {
  id: number;
};

// ✅ Interface puede ser implementada por clases
class Usuario implements IPersona {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

// ✅ Type puede representar unions y primitivos
type ID = number | string;
type Direccion = "norte" | "sur";

// ✅ Interface permite declaration merging
interface Config {
  timeout: number;
}
interface Config {
  retries: number;
}
// Config ahora tiene ambas propiedades

// ❌ Type no permite declaration merging
// type Config = { timeout: number };
// type Config = { retries: number }; // Error
```

**Recomendación:** Usar `interface` para definir objetos y contratos de clases. Usar `type` para unions, intersecciones y tipos complejos.

---

## 🎓 Clases en TypeScript

### Clases Básicas

```typescript
class Persona {
  // Propiedades
  nombre: string;
  edad: number;

  // Constructor
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método
  saludar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}

let persona = new Persona("Ana", 25);
console.log(persona.saludar());
```

### Modificadores de Acceso

```typescript
class Empleado {
  public nombre: string;        // Accesible desde cualquier lugar (default)
  private salario: number;      // Solo dentro de la clase
  protected departamento: string; // Dentro de la clase y subclases
  readonly id: number;          // Solo lectura

  constructor(nombre: string, salario: number, departamento: string, id: number) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;
    this.id = id;
  }

  obtenerSalario(): number {
    return this.salario; // ✅ Accesible dentro de la clase
  }
}

let emp = new Empleado("Ana", 50000, "IT", 123);
console.log(emp.nombre);        // ✅ OK (public)
// console.log(emp.salario);    // ❌ Error (private)
// console.log(emp.departamento); // ❌ Error (protected)
console.log(emp.id);            // ✅ OK (readonly)
// emp.id = 456;                // ❌ Error (readonly)
```

### Shorthand de Constructor

```typescript
// Forma tradicional
class Persona1 {
  nombre: string;
  edad: number;
  
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// ✅ Shorthand - más conciso
class Persona2 {
  constructor(
    public nombre: string,
    public edad: number,
    private id: number = 0
  ) {}
}

let p = new Persona2("Ana", 25);
console.log(p.nombre); // ✅ Accesible
```

### Getters y Setters

```typescript
class Empleado {
  private _salario: number = 0;

  get salario(): number {
    return this._salario;
  }

  set salario(valor: number) {
    if (valor < 0) {
      throw new Error("El salario no puede ser negativo");
    }
    this._salario = valor;
  }
}

let emp = new Empleado();
emp.salario = 50000;  // Llama al setter
console.log(emp.salario); // Llama al getter
```

### Propiedades y Métodos Estáticos

```typescript
class Utilidades {
  static readonly VERSION: string = "1.0.0";
  static contador: number = 0;

  static incrementar(): number {
    return ++Utilidades.contador;
  }

  static calcularArea(radio: number): number {
    return Math.PI * radio ** 2;
  }
}

console.log(Utilidades.VERSION);
console.log(Utilidades.calcularArea(5));
Utilidades.incrementar();
```

### Clases Abstractas

```typescript
// Clase abstracta - no se puede instanciar directamente
abstract class Forma {
  constructor(public color: string) {}

  // Método abstracto - debe ser implementado por subclases
  abstract calcularArea(): number;

  // Método concreto
  describir(): string {
    return `Forma de color ${this.color}`;
  }
}

class Circulo extends Forma {
  constructor(color: string, public radio: number) {
    super(color);
  }

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}

// let forma = new Forma("rojo"); // ❌ Error - clase abstracta
let circulo = new Circulo("rojo", 5); // ✅ OK
console.log(circulo.calcularArea());
```

### Herencia

```typescript
class Animal {
  constructor(public nombre: string) {}

  moverse(distancia: number = 0): void {
    console.log(`${this.nombre} se movió ${distancia}m`);
  }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) {
    super(nombre);
  }

  ladrar(): void {
    console.log("Guau! Guau!");
  }

  // Override
  moverse(distancia: number = 5): void {
    console.log("Corriendo...");
    super.moverse(distancia);
  }
}

let perro = new Perro("Max", "Labrador");
perro.ladrar();
perro.moverse(10);
```

### Implementación de Interfaces

```typescript
interface Volador {
  volar(): void;
  altura: number;
}

interface Nadador {
  nadar(): void;
}

// Implementar una o más interfaces
class Pato implements Volador, Nadador {
  altura: number = 0;

  volar(): void {
    console.log("Volando...");
  }

  nadar(): void {
    console.log("Nadando...");
  }
}
```

---

## 🎁 Genéricos (Generics)

### Funciones Genéricas

```typescript
// Función genérica básica
function identidad<T>(valor: T): T {
  return valor;
}

let numero = identidad<number>(42);
let texto = identidad<string>("Hola");
let autoInferido = identidad(true); // TypeScript infiere boolean

// Función genérica con array
function primerElemento<T>(array: T[]): T | undefined {
  return array[0];
}

let primero = primerElemento([1, 2, 3]); // number
let primeraLetra = primerElemento(["a", "b"]); // string

// Múltiples parámetros genéricos
function par<T, U>(primero: T, segundo: U): [T, U] {
  return [primero, segundo];
}

let resultado = par<string, number>("edad", 25);
```

### Interfaces Genéricas

```typescript
// Interface genérica
interface Respuesta<T> {
  data: T;
  status: number;
  mensaje?: string;
}

let respuestaString: Respuesta<string> = {
  data: "Éxito",
  status: 200
};

let respuestaUsuario: Respuesta<Usuario> = {
  data: { id: 1, nombre: "Ana" },
  status: 200
};

// Interface genérica para funciones
interface Transformador<T, U> {
  (input: T): U;
}

let stringANumero: Transformador<string, number> = (str) => parseInt(str);
```

### Clases Genéricas

```typescript
// Clase genérica
class Contenedor<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtener(indice: number): T {
    return this.items[indice];
  }

  obtenerTodos(): T[] {
    return this.items;
  }
}

let numeros = new Contenedor<number>();
numeros.agregar(1);
numeros.agregar(2);

let strings = new Contenedor<string>();
strings.agregar("Hola");
strings.agregar("Mundo");

// Clase genérica con múltiples tipos
class Par<K, V> {
  constructor(public clave: K, public valor: V) {}
}

let par = new Par<string, number>("edad", 25);
```

### Constraints (Restricciones)

```typescript
// Restricción básica
interface ConLongitud {
  length: number;
}

function imprimirLongitud<T extends ConLongitud>(elemento: T): number {
  return elemento.length;
}

imprimirLongitud("Hola");     // ✅ string tiene length
imprimirLongitud([1, 2, 3]);  // ✅ array tiene length
// imprimirLongitud(42);      // ❌ number no tiene length

// Restricción con keyof
function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
  return obj[clave];
}

let persona = { nombre: "Ana", edad: 25 };
let nombre = obtenerPropiedad(persona, "nombre"); // ✅ "Ana"
// let invalido = obtenerPropiedad(persona, "direccion"); // ❌ Error

// Restricción de tipo genérico con otro
function crear<T extends { new(...args: any[]): any }>(Constructor: T, ...args: any[]) {
  return new Constructor(...args);
}
```

### Tipos Genéricos Predeterminados

```typescript
// Tipo genérico con valor por defecto
interface Opciones<T = string> {
  valor: T;
}

let opcion1: Opciones = { valor: "texto" }; // string por defecto
let opcion2: Opciones<number> = { valor: 42 };

// Múltiples defaults
type Resultado<T = string, E = Error> = {
  data?: T;
  error?: E;
};
```

---

## 🛠️ Utility Types

TypeScript incluye tipos utilitarios integrados para transformar tipos existentes:

### `Partial<T>`

```typescript
// Hace todas las propiedades opcionales
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

type UsuarioParcial = Partial<Usuario>;
// Equivalente a:
// {
//   id?: number;
//   nombre?: string;
//   email?: string;
// }

function actualizarUsuario(id: number, cambios: Partial<Usuario>) {
  // Solo necesitas pasar las propiedades que quieres cambiar
}

actualizarUsuario(1, { email: "nuevo@email.com" });
```

### `Required<T>`

```typescript
// Hace todas las propiedades requeridas
interface Configuracion {
  host?: string;
  puerto?: number;
}

type ConfiguracionCompleta = Required<Configuracion>;
// Todas las propiedades son ahora obligatorias
```

### `Readonly<T>`

```typescript
// Hace todas las propiedades readonly
interface Punto {
  x: number;
  y: number;
}

type PuntoInmutable = Readonly<Punto>;

let punto: PuntoInmutable = { x: 10, y: 20 };
// punto.x = 5; // ❌ Error
```

### `Record<K, T>`

```typescript
// Crea un objeto con claves K y valores T
type Roles = "admin" | "usuario" | "invitado";
type Permisos = Record<Roles, string[]>;

let permisos: Permisos = {
  admin: ["leer", "escribir", "eliminar"],
  usuario: ["leer", "escribir"],
  invitado: ["leer"]
};

// Record para diccionarios
type Diccionario = Record<string, number>;
let puntuaciones: Diccionario = {
  matematicas: 95,
  fisica: 87,
  quimica: 92
};
```

### `Pick<T, K>`

```typescript
// Selecciona solo ciertas propiedades
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

type UsuarioBasico = Pick<Usuario, "id" | "nombre">;
// { id: number; nombre: string; }

let usuario: UsuarioBasico = {
  id: 1,
  nombre: "Ana"
};
```

### `Omit<T, K>`

```typescript
// Excluye ciertas propiedades
interface Usuario {
  id: number;
  nombre: string;
  password: string;
  email: string;
}

type UsuarioPublico = Omit<Usuario, "password">;
// { id: number; nombre: string; email: string; }

let publico: UsuarioPublico = {
  id: 1,
  nombre: "Ana",
  email: "ana@example.com"
};
```

### `Exclude<T, U>`

```typescript
// Excluye de T los tipos asignables a U
type T1 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T2 = Exclude<string | number | boolean, boolean>; // string | number
```

### `Extract<T, U>`

```typescript
// Extrae de T los tipos asignables a U
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T2 = Extract<string | number | boolean, boolean | string>; // string | boolean
```

### `NonNullable<T>`

```typescript
// Excluye null y undefined
type T1 = NonNullable<string | number | null | undefined>; // string | number
```

### `ReturnType<T>`

```typescript
// Obtiene el tipo de retorno de una función
function obtenerUsuario() {
  return { id: 1, nombre: "Ana" };
}

type Usuario = ReturnType<typeof obtenerUsuario>;
// { id: number; nombre: string; }

type T1 = ReturnType<() => string>; // string
type T2 = ReturnType<(x: number) => number>; // number
```

### `Parameters<T>`

```typescript
// Obtiene los tipos de parámetros como tupla
function crearUsuario(nombre: string, edad: number) {
  return { nombre, edad };
}

type Params = Parameters<typeof crearUsuario>; // [string, number]

function wrapper(...args: Parameters<typeof crearUsuario>) {
  return crearUsuario(...args);
}
```

### `ConstructorParameters<T>`

```typescript
// Obtiene tipos de parámetros del constructor
class Usuario {
  constructor(public nombre: string, public edad: number) {}
}

type UsuarioParams = ConstructorParameters<typeof Usuario>; // [string, number]
```

### `Awaited<T>`

```typescript
// Desenvuelve el tipo de una Promise
type T1 = Awaited<Promise<string>>; // string
type T2 = Awaited<Promise<Promise<number>>>; // number

async function obtenerDatos(): Promise<{ id: number }> {
  return { id: 1 };
}

type Datos = Awaited<ReturnType<typeof obtenerDatos>>; // { id: number }
```

---

## 🎭 Type Guards y Narrowing

### typeof

```typescript
function imprimir(valor: string | number) {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // TypeScript sabe que es string
  } else {
    console.log(valor.toFixed(2)); // TypeScript sabe que es number
  }
}
```

### instanceof

```typescript
class Perro {
  ladrar() { console.log("Guau!"); }
}

class Gato {
  maullar() { console.log("Miau!"); }
}

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    animal.ladrar(); // TypeScript sabe que es Perro
  } else {
    animal.maullar(); // TypeScript sabe que es Gato
  }
}
```

### in operator

```typescript
interface Ave {
  volar(): void;
}

interface Pez {
  nadar(): void;
}

function mover(animal: Ave | Pez) {
  if ("volar" in animal) {
    animal.volar(); // TypeScript sabe que es Ave
  } else {
    animal.nadar(); // TypeScript sabe que es Pez
  }
}
```

### Type Predicates (Custom Type Guards)

```typescript
// User-defined type guard
interface Perro {
  tipo: "perro";
  ladrar(): void;
}

interface Gato {
  tipo: "gato";
  maullar(): void;
}

// Type predicate: parámetro is Tipo
function esPerro(animal: Perro | Gato): animal is Perro {
  return animal.tipo === "perro";
}

function interactuar(animal: Perro | Gato) {
  if (esPerro(animal)) {
    animal.ladrar(); // ✅ TypeScript sabe que es Perro
  } else {
    animal.maullar(); // ✅ TypeScript sabe que es Gato
  }
}
```

### Discriminated Unions

```typescript
// Union con propiedad discriminante
interface Circulo {
  tipo: "circulo";
  radio: number;
}

interface Rectangulo {
  tipo: "rectangulo";
  ancho: number;
  alto: number;
}

interface Triangulo {
  tipo: "triangulo";
  base: number;
  altura: number;
}

type Forma = Circulo | Rectangulo | Triangulo;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "rectangulo":
      return forma.ancho * forma.alto;
    case "triangulo":
      return (forma.base * forma.altura) / 2;
    default:
      // Exhaustiveness checking
      const _exhaustivo: never = forma;
      return _exhaustivo;
  }
}
```

### Assertion Functions

```typescript
// Assert function
function afirmar(condicion: any, mensaje?: string): asserts condicion {
  if (!condicion) {
    throw new Error(mensaje || "Aserción falló");
  }
}

function procesarUsuario(usuario: Usuario | null) {
  afirmar(usuario !== null, "Usuario no puede ser null");
  // Después de esta línea, TypeScript sabe que usuario no es null
  console.log(usuario.nombre);
}

// Assert tipo específico
function esString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("No es string");
  }
}

function procesar(valor: unknown) {
  esString(valor);
  // TypeScript sabe que valor es string aquí
  console.log(valor.toUpperCase());
}
```

---

## 🎨 Tipos Avanzados

### Mapped Types

```typescript
// Mapped type básico
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

interface Usuario {
  nombre: string;
  edad: number;
}

type UsuarioOpcional = Opcional<Usuario>;
// { nombre?: string; edad?: number; }

// Mapped type con modificadores
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Immutable<T> = {
  +readonly [P in keyof T]: T[P];
};

// Mapped type con transformación de claves
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type UsuarioGetters = Getters<Usuario>;
// {
//   getNombre: () => string;
//   getEdad: () => number;
// }
```

### Conditional Types

```typescript
// Tipo condicional básico
type EsString<T> = T extends string ? true : false;

type T1 = EsString<string>;  // true
type T2 = EsString<number>;  // false

// Tipo condicional útil
type NoArray<T> = T extends any[] ? never : T;

type T3 = NoArray<string>;   // string
type T4 = NoArray<number[]>; // never

// Inferencia en conditional types
type UnboxArray<T> = T extends (infer U)[] ? U : T;

type T5 = UnboxArray<string[]>;  // string
type T6 = UnboxArray<number>;    // number

// Tipo condicional anidado
type TipoDeVariable<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "otro";

type T7 = TipoDeVariable<"hola">; // "string"
type T8 = TipoDeVariable<42>;     // "number"
```

### Template Literal Types

```typescript
// Template literal types (TypeScript 4.1+)
type Mundo = "mundo";
type Saludo = `hola ${Mundo}`; // "hola mundo"

// Combinaciones
type Direccion = "norte" | "sur" | "este" | "oeste";
type Accion = "mover" | "girar";
type Comando = `${Accion}-${Direccion}`;
// "mover-norte" | "mover-sur" | ... | "girar-oeste"

// Con Capitalize, Uppercase, etc.
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"

// Tipo de eventos
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

let person = makeWatchedObject({
  firstName: "Ana",
  age: 25
});

person.on("firstNameChanged", (newName) => {
  console.log(newName.toUpperCase());
});
```

### Recursive Types

```typescript
// Tipo recursivo para árbol
type ArbolJSON = 
  | string
  | number
  | boolean
  | null
  | { [key: string]: ArbolJSON }
  | ArbolJSON[];

let datos: ArbolJSON = {
  nombre: "Ana",
  edad: 25,
  direccion: {
    calle: "Main St",
    ciudad: "Madrid"
  },
  hobbies: ["leer", "nadar"]
};

// Tipo recursivo para nested objects
type DeeplyNested<T> = {
  [K in keyof T]: T[K] extends object ? DeeplyNested<T[K]> : T[K];
};
```

### Index Accessed Types

```typescript
interface Usuario {
  id: number;
  nombre: string;
  rol: {
    tipo: "admin" | "usuario";
    permisos: string[];
  };
}

// Acceder a tipo de propiedad
type ID = Usuario["id"];              // number
type Nombre = Usuario["nombre"];      // string
type Rol = Usuario["rol"];            // { tipo: ..., permisos: ... }
type TipoRol = Usuario["rol"]["tipo"]; // "admin" | "usuario"

// Acceder a múltiples propiedades
type NombreOId = Usuario["nombre" | "id"]; // string | number

// Acceder a todas las propiedades
type TodosLosValores = Usuario[keyof Usuario];
```

---

## 🎯 Decoradores (Experimental)

Los decoradores son una característica experimental. Habilitar en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### Class Decorators

```typescript
// Decorador de clase
function sellado(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sellado
class Usuario {
  constructor(public nombre: string) {}
}

// Decorador con parámetros (factory)
function logger(prefijo: string) {
  return function(constructor: Function) {
    console.log(`${prefijo}: ${constructor.name}`);
  };
}

@logger("Clase")
class Producto {
  constructor(public nombre: string) {}
}
```

### Method Decorators

```typescript
// Decorador de método
function enumerable(valor: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = valor;
  };
}

class Persona {
  constructor(public nombre: string) {}

  @enumerable(false)
  obtenerNombre() {
    return this.nombre;
  }
}
```

### Property Decorators

```typescript
// Decorador de propiedad
function minLength(length: number) {
  return function(target: any, propertyKey: string) {
    let valor: string;

    const getter = function() {
      return valor;
    };

    const setter = function(nuevoValor: string) {
      if (nuevoValor.length < length) {
        throw new Error(`La longitud mínima es ${length}`);
      }
      valor = nuevoValor;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

class Usuario {
  @minLength(3)
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
```

### Parameter Decorators

```typescript
// Decorador de parámetro
function required(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(`Parámetro ${parameterIndex} de ${propertyKey} es requerido`);
}

class Servicio {
  saludar(@required mensaje: string) {
    console.log(mensaje);
  }
}
```

---

## ⚙️ Configuración (tsconfig.json)

### Configuración Básica

```json
{
  "compilerOptions": {
    /* Opciones del lenguaje */
    "target": "ES2022",              // Versión JS objetivo
    "module": "ESNext",              // Sistema de módulos
    "lib": ["ES2022", "DOM"],        // Bibliotecas incluidas
    
    /* Resolución de módulos */
    "moduleResolution": "node",      // Estrategia de resolución
    "baseUrl": "./src",              // Base para rutas no relativas
    "paths": {                       // Alias de rutas
      "@/*": ["./*"],
      "@components/*": ["./components/*"]
    },
    "resolveJsonModule": true,       // Importar archivos JSON
    
    /* Emisión */
    "outDir": "./dist",              // Carpeta de salida
    "rootDir": "./src",              // Carpeta raíz de entrada
    "removeComments": true,          // Eliminar comentarios
    "noEmit": false,                 // No emitir archivos (solo check)
    "declaration": true,             // Generar archivos .d.ts
    "declarationMap": true,          // Source maps para .d.ts
    "sourceMap": true,               // Generar source maps
    
    /* Interoperabilidad */
    "esModuleInterop": true,         // Interop CommonJS/ES6
    "allowSyntheticDefaultImports": true, // Imports default sintéticos
    "forceConsistentCasingInFileNames": true, // Case-sensitive
    
    /* Type Checking estricto */
    "strict": true,                  // Habilitar TODAS las opciones estrictas
    "noImplicitAny": true,           // Error en 'any' implícito
    "strictNullChecks": true,        // null/undefined son tipos distintos
    "strictFunctionTypes": true,     // Checks estrictos en funciones
    "strictBindCallApply": true,     // Checks en bind/call/apply
    "strictPropertyInitialization": true, // Props de clase inicializadas
    "noImplicitThis": true,          // Error en 'this' implícito
    "alwaysStrict": true,            // 'use strict' en archivos
    
    /* Checks adicionales */
    "noUnusedLocals": true,          // Error en variables no usadas
    "noUnusedParameters": true,      // Error en params no usados
    "noImplicitReturns": true,       // Todas las ramas retornan valor
    "noFallthroughCasesInSwitch": true, // No fallthroughs en switch
    "noUncheckedIndexedAccess": true, // Index access puede ser undefined
    
    /* Características avanzadas */
    "experimentalDecorators": true,  // Habilitar decoradores
    "emitDecoratorMetadata": true,   // Metadata para decoradores
    "skipLibCheck": true             // Saltear check de .d.ts
  },
  
  /* Archivos a incluir/excluir */
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.spec.ts"
  ]
}
```

### Configuraciones Comunes por Tipo de Proyecto

#### React/Vite

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true
  }
}
```

#### Node.js

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true
  }
}
```

#### Library/Package

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "strict": true
  }
}
```

---

## 📦 Módulos y Namespaces

### ES6 Modules

```typescript
// ===== math.ts =====
export function sumar(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

export default class Calculadora {
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

// ===== main.ts =====
import Calculadora, { sumar, PI } from "./math";

console.log(sumar(2, 3));
console.log(PI);

let calc = new Calculadora();
console.log(calc.multiplicar(4, 5));
```

### Re-exports

```typescript
// ===== models/index.ts =====
export { Usuario } from "./usuario";
export { Producto } from "./producto";
export * from "./categoria";

// ===== main.ts =====
import { Usuario, Producto } from "./models";
```

### Namespaces (menos común en código moderno)

```typescript
namespace Geometria {
  export interface Punto {
    x: number;
    y: number;
  }

  export function distancia(p1: Punto, p2: Punto): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

let p1: Geometria.Punto = { x: 0, y: 0 };
let p2: Geometria.Punto = { x: 3, y: 4 };
console.log(Geometria.distancia(p1, p2)); // 5
```

### Ambient Modules (Declaration Files)

```typescript
// ===== types/custom.d.ts =====
declare module "mi-libreria" {
  export function hacerAlgo(): void;
  export const VERSION: string;
}

// ===== main.ts =====
import { hacerAlgo, VERSION } from "mi-libreria";
```

---

## 🔍 Type Assertions

### as syntax

```typescript
// Type assertion con 'as'
let algunValor: unknown = "esto es un string";
let longitudString: number = (algunValor as string).length;

// Con objetos
interface Usuario {
  nombre: string;
  edad: number;
}

let obj: any = { nombre: "Ana", edad: 25 };
let usuario = obj as Usuario;
```

### Angle-bracket syntax

```typescript
// Sintaxis de angle brackets (no en JSX)
let algunValor: unknown = "esto es un string";
let longitudString: number = (<string>algunValor).length;
```

### as const

```typescript
// as const - hace el tipo lo más literal posible
let obj = { nombre: "Ana" };
// Tipo: { nombre: string }

let objConst = { nombre: "Ana" } as const;
// Tipo: { readonly nombre: "Ana" }

// Con arrays
let arr = [1, 2, 3];
// Tipo: number[]

let arrConst = [1, 2, 3] as const;
// Tipo: readonly [1, 2, 3]

// Uso común: configuraciones
const COLORES = {
  primario: "#007bff",
  secundario: "#6c757d",
  exito: "#28a745"
} as const;

type Color = typeof COLORES[keyof typeof COLORES];
// "#007bff" | "#6c757d" | "#28a745"
```

### Non-null Assertion (!)

```typescript
// Non-null assertion operator
function procesar(texto: string | null) {
  // Le decimos a TypeScript que estamos seguros que no es null
  console.log(texto!.length);
}

// Con optional chaining
let usuario = obtenerUsuario();
let nombre = usuario?.nombre!; // Puede ser undefined antes del !
```

---

## 🎪 Tipos Especiales

### any

```typescript
// any - desactiva type checking (evitar)
let algo: any = 4;
algo = "string"; // ✅ OK
algo = true;     // ✅ OK
algo.metodoInexistente(); // ✅ OK (no error en compilación)
```

### unknown

```typescript
// unknown - tipo seguro de any
let valor: unknown = 4;
valor = "string"; // ✅ OK

// Pero necesitas verificar el tipo antes de usar
// valor.toUpperCase(); // ❌ Error

if (typeof valor === "string") {
  valor.toUpperCase(); // ✅ OK
}
```

### never

```typescript
// never - representa valores que nunca ocurren
function error(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {}
}

// Útil en exhaustive checks
type Forma = "circulo" | "cuadrado";

function calcularArea(forma: Forma) {
  switch (forma) {
    case "circulo":
      return 0;
    case "cuadrado":
      return 0;
    default:
      const _check: never = forma; // Error si falta un caso
      return _check;
  }
}
```

### void

```typescript
// void - ausencia de valor (funciones sin return)
function log(mensaje: string): void {
  console.log(mensaje);
  // No retorna nada
}
```

### object

```typescript
// object - cualquier tipo no primitivo
function crear(obj: object) {
  // ...
}

crear({ prop: 0 }); // ✅ OK
crear([1, 2, 3]);   // ✅ OK
// crear(42);       // ❌ Error - number es primitivo
```

---

## 🎯 Best Practices

### 1. Preferir Interfaces para Objetos Públicos

```typescript
// ✅ Usar interface para APIs públicas
interface Usuario {
  id: number;
  nombre: string;
}

// ✅ Usar type para unions, intersecciones, tuples
type ID = number | string;
type Punto = [number, number];
```

### 2. Usar strict mode

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 3. Evitar any

```typescript
// ❌ Evitar
function procesar(data: any) {
  return data.valor;
}

// ✅ Preferir unknown o tipos específicos
function procesar(data: unknown) {
  if (typeof data === "object" && data !== null && "valor" in data) {
    return (data as { valor: any }).valor;
  }
}
```

### 4. Usar Type Guards

```typescript
// ✅ Type guards para narrowing seguro
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}
```

### 5. Readonly cuando sea posible

```typescript
// ✅ Props inmutables con readonly
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

// ✅ Arrays inmutables
function procesar(items: readonly string[]) {
  // items.push("nuevo"); // ❌ Error
  return items.map(i => i.toUpperCase()); // ✅ OK
}
```

### 6. Usar Utility Types

```typescript
// ✅ Aprovechar utility types
type UsuarioParcial = Partial<Usuario>;
type UsuarioSinPassword = Omit<Usuario, "password">;
```

### 7. Nombrar Tipos Descriptivamente

```typescript
// ❌ Evitar
type T = string | number;
interface I {
  n: string;
}

// ✅ Preferir
type UserId = string | number;
interface UserProfile {
  name: string;
}
```

### 8. Usar const assertions

```typescript
// ✅ Para valores constantes
const CONFIG = {
  apiUrl: "https://api.example.com",
  timeout: 5000
} as const;
```

### 9. Evitar Type Assertions innecesarios

```typescript
// ❌ Innecesario
let x: number = 5 as number;

// ✅ Dejar que TypeScript infiera
let x = 5; // TypeScript infiere number
```

### 10. Documentar con JSDoc

```typescript
/**
 * Calcula el área de un círculo
 * @param radio - El radio del círculo
 * @returns El área calculada
 */
function calcularArea(radio: number): number {
  return Math.PI * radio ** 2;
}
```

---

## 🚨 Errores Comunes

### 1. Confundir == con ===

```typescript
// ❌ Evitar
if (valor == 5) {}

// ✅ Usar siempre ===
if (valor === 5) {}
```

### 2. No manejar null/undefined

```typescript
// ❌ Puede fallar
function obtenerNombre(usuario: Usuario | null) {
  return usuario.nombre; // Error si usuario es null
}

// ✅ Verificar null
function obtenerNombre(usuario: Usuario | null) {
  return usuario?.nombre ?? "Desconocido";
}
```

### 3. Usar any cuando no es necesario

```typescript
// ❌ Pierde type safety
function procesar(data: any) {
  return data.propiedad;
}

// ✅ Usar generics o unknown
function procesar<T extends { propiedad: string }>(data: T) {
  return data.propiedad;
}
```

### 4. No especificar tipos de retorno

```typescript
// ⚠️ Menos claro
function calcular(a: number, b: number) {
  return a + b;
}

// ✅ Más explícito y previene errores
function calcular(a: number, b: number): number {
  return a + b;
}
```

### 5. Mutar parámetros readonly

```typescript
function procesar(items: readonly string[]) {
  // items.push("nuevo"); // ❌ Error (correcto)
  return [...items, "nuevo"]; // ✅ Crear nuevo array
}
```

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - Repositorio de @types
