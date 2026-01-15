---
title: "JavaScript Cheat Sheet"
description: "Referencia rápida de JavaScript con sintaxis, estructuras de datos, funciones y conceptos esenciales"
sidebar_position: 1
tags: [javascript, cheatsheet, referencia, sintaxis, es6, async]
---

Referencia rápida de los conceptos y sintaxis más importantes de JavaScript moderno (ES6+).

---

## 📋 Variables y Tipos de Datos

### Declaración de Variables

```javascript
// let - variable de alcance de bloque, reasignable
let edad = 25;
edad = 26; // ✅ Permitido

// const - constante de alcance de bloque, NO reasignable
const PI = 3.14159;
// PI = 3.14; // ❌ Error

// var - variable de alcance de función (evitar en código moderno)
var nombre = "Juan"; // ⚠️ Usar let o const en su lugar
```

### Tipos Primitivos

```javascript
// Number
let entero = 42;
let decimal = 3.14;
let negativo = -10;
let infinito = Infinity;
let noEsNumero = NaN;

// String
let texto1 = "Hola";
let texto2 = 'Mundo';
let template = `Hola ${nombre}`; // Template literals

// Boolean
let verdadero = true;
let falso = false;

// Undefined
let noDefinido;
console.log(noDefinido); // undefined

// Null
let vacio = null;

// Symbol (ES6)
let simbolo = Symbol("descripcion");

// BigInt (ES2020)
let numeroGrande = 123456789012345678901234567890n;
```

---

## 🔤 Strings (Cadenas)

### Métodos Comunes

```javascript
let texto = "Hola Mundo";

// Longitud
texto.length; // 10

// Acceso a caracteres
texto[0]; // "H"
texto.charAt(0); // "H"

// Búsqueda
texto.indexOf("Mundo"); // 5
texto.includes("Hola"); // true
texto.startsWith("Hola"); // true
texto.endsWith("Mundo"); // true

// Transformación
texto.toUpperCase(); // "HOLA MUNDO"
texto.toLowerCase(); // "hola mundo"
texto.trim(); // Elimina espacios al inicio y final
texto.replace("Mundo", "JavaScript"); // "Hola JavaScript"
texto.replaceAll("o", "0"); // "H0la Mund0"

// División y unión
texto.split(" "); // ["Hola", "Mundo"]
["Hola", "Mundo"].join(" "); // "Hola Mundo"

// Substring
texto.slice(0, 4); // "Hola"
texto.substring(5, 10); // "Mundo"
texto.substr(5, 5); // "Mundo" (deprecated)

// Repetición
"abc".repeat(3); // "abcabcabc"

// Padding
"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0"); // "500"
```

### Template Literals

```javascript
let nombre = "Ana";
let edad = 25;

// Template strings con interpolación
let mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;

// Multilínea
let parrafo = `
  Primera línea
  Segunda línea
  Tercera línea
`;

// Expresiones
let resultado = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"
```

---

## 📊 Arrays (Arreglos)

### Creación y Manipulación

```javascript
// Creación
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(5); // Array vacío de longitud 5
let array3 = Array.from("abc"); // ["a", "b", "c"]
let array4 = Array.of(1, 2, 3); // [1, 2, 3]

// Acceso
array1[0]; // 1
array1.at(-1); // 5 (último elemento)

// Longitud
array1.length; // 5
```

### Métodos de Modificación

```javascript
let arr = [1, 2, 3];

// Agregar elementos
arr.push(4); // [1, 2, 3, 4] - al final
arr.unshift(0); // [0, 1, 2, 3, 4] - al inicio

// Eliminar elementos
arr.pop(); // [0, 1, 2, 3] - del final
arr.shift(); // [1, 2, 3] - del inicio

// Splice - eliminar/insertar en cualquier posición
arr.splice(1, 1); // [1, 3] - elimina 1 elemento en índice 1
arr.splice(1, 0, 2); // [1, 2, 3] - inserta 2 en índice 1

// Concatenar
let arr2 = [4, 5];
arr.concat(arr2); // [1, 2, 3, 4, 5]
[...arr, ...arr2]; // [1, 2, 3, 4, 5] - spread operator

// Invertir y ordenar
arr.reverse(); // [3, 2, 1]
arr.sort(); // [1, 2, 3]
arr.sort((a, b) => b - a); // [3, 2, 1] - orden descendente

// Rellenar
arr.fill(0); // [0, 0, 0]
```

### Métodos de Iteración

```javascript
let numeros = [1, 2, 3, 4, 5];

// forEach - itera sobre cada elemento
numeros.forEach((num, index) => {
  console.log(`Índice ${index}: ${num}`);
});

// map - transforma cada elemento
let dobles = numeros.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - filtra elementos
let pares = numeros.filter(num => num % 2 === 0); // [2, 4]

// reduce - reduce a un solo valor
let suma = numeros.reduce((acc, num) => acc + num, 0); // 15

// find - encuentra el primer elemento que cumple condición
let encontrado = numeros.find(num => num > 3); // 4

// findIndex - encuentra el índice del primer elemento
let indice = numeros.findIndex(num => num > 3); // 3

// some - verifica si alguno cumple la condición
let hayMayorQue3 = numeros.some(num => num > 3); // true

// every - verifica si todos cumplen la condición
let todosPositivos = numeros.every(num => num > 0); // true

// includes - verifica si contiene un elemento
numeros.includes(3); // true

// flat - aplana arrays anidados
[1, [2, 3], [4, [5]]].flat(); // [1, 2, 3, 4, [5]]
[1, [2, 3], [4, [5]]].flat(2); // [1, 2, 3, 4, 5]

// flatMap - map + flat en un solo paso
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

### Desestructuración

```javascript
// Array destructuring
let [a, b, c] = [1, 2, 3];
console.log(a); // 1

// Con rest operator
let [primero, ...resto] = [1, 2, 3, 4];
console.log(resto); // [2, 3, 4]

// Valores por defecto
let [x = 10, y = 20] = [5];
console.log(x, y); // 5, 20

// Intercambiar variables
let num1 = 1, num2 = 2;
[num1, num2] = [num2, num1]; // num1=2, num2=1
```

---

## 🗂️ Objetos

### Creación y Propiedades

```javascript
// Creación literal
let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

// Acceso a propiedades
persona.nombre; // "Ana"
persona["edad"]; // 25

// Agregar/modificar propiedades
persona.profesion = "Ingeniera";
persona.edad = 26;

// Eliminar propiedades
delete persona.ciudad;

// Verificar existencia
"nombre" in persona; // true
persona.hasOwnProperty("edad"); // true

// Shorthand property
let nombre = "Juan";
let edad = 30;
let usuario = { nombre, edad }; // { nombre: "Juan", edad: 30 }

// Computed property names
let prop = "color";
let objeto = { [prop]: "rojo" }; // { color: "rojo" }

// Métodos
let calculadora = {
  suma(a, b) {
    return a + b;
  },
  // O con sintaxis tradicional
  resta: function(a, b) {
    return a - b;
  }
};
```

### Métodos de Object

```javascript
let obj = { a: 1, b: 2, c: 3 };

// Obtener claves, valores y entradas
Object.keys(obj); // ["a", "b", "c"]
Object.values(obj); // [1, 2, 3]
Object.entries(obj); // [["a", 1], ["b", 2], ["c", 3]]

// Copiar y fusionar objetos
let copia = Object.assign({}, obj);
let fusion = Object.assign({}, obj, { d: 4 });

// Spread operator (más común)
let copia2 = { ...obj };
let fusion2 = { ...obj, d: 4, a: 10 }; // Sobreescribe 'a'

// Congelar y sellar
Object.freeze(obj); // Inmutable
Object.seal(obj); // No se pueden agregar/eliminar propiedades

// Crear objeto con prototipo específico
let nuevoObj = Object.create(obj);

// Obtener/definir descriptores
Object.getOwnPropertyDescriptor(obj, "a");
Object.defineProperty(obj, "nueva", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
```

### Desestructuración

```javascript
let persona = {
  nombre: "Carlos",
  edad: 28,
  ciudad: "Barcelona",
  pais: "España"
};

// Desestructuración básica
let { nombre, edad } = persona;

// Renombrar variables
let { nombre: nombreCompleto, edad: años } = persona;

// Valores por defecto
let { profesion = "Desconocida" } = persona;

// Rest operator
let { nombre, ...resto } = persona;
console.log(resto); // { edad: 28, ciudad: "Barcelona", pais: "España" }

// Desestructuración anidada
let usuario = {
  id: 1,
  info: {
    nombre: "Ana",
    contacto: {
      email: "ana@example.com"
    }
  }
};
let { info: { contacto: { email } } } = usuario;
```

---

## ⚡ Funciones

### Declaración y Expresión

```javascript
// Declaración de función (hoisting)
function sumar(a, b) {
  return a + b;
}

// Expresión de función
const restar = function(a, b) {
  return a - b;
};

// Arrow function (ES6)
const multiplicar = (a, b) => a * b;

// Arrow function con cuerpo
const dividir = (a, b) => {
  if (b === 0) return "Error";
  return a / b;
};

// Arrow function sin parámetros
const saludar = () => console.log("Hola");

// Arrow function con un parámetro (paréntesis opcionales)
const cuadrado = x => x * x;
```

### Parámetros

```javascript
// Parámetros por defecto
function saludar(nombre = "Usuario") {
  return `Hola, ${nombre}`;
}

// Rest parameters
function sumarTodos(...numeros) {
  return numeros.reduce((sum, n) => sum + n, 0);
}
sumarTodos(1, 2, 3, 4); // 10

// Spread operator en llamadas
let nums = [1, 2, 3];
Math.max(...nums); // 3

// Desestructuración en parámetros
function mostrarUsuario({ nombre, edad }) {
  console.log(`${nombre} tiene ${edad} años`);
}
mostrarUsuario({ nombre: "Ana", edad: 25 });
```

### Funciones de Orden Superior

```javascript
// Función que retorna función
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}
const duplicar = crearMultiplicador(2);
duplicar(5); // 10

// Función que recibe función
function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}
aplicarOperacion(5, 3, (x, y) => x + y); // 8

// Closure
function contador() {
  let count = 0;
  return {
    incrementar: () => ++count,
    obtener: () => count
  };
}
const c = contador();
c.incrementar(); // 1
c.incrementar(); // 2
```

### IIFE (Immediately Invoked Function Expression)

```javascript
// Patrón para evitar contaminar el scope global
(function() {
  let privado = "No accesible fuera";
  console.log("Ejecutado inmediatamente");
})();

// Con parámetros
(function(nombre) {
  console.log(`Hola, ${nombre}`);
})("Mundo");

// Arrow IIFE
(() => {
  console.log("IIFE con arrow function");
})();
```

---

## 🔄 Control de Flujo

### Condicionales

```javascript
// if-else
if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad >= 13) {
  console.log("Adolescente");
} else {
  console.log("Menor de edad");
}

// Operador ternario
let mensaje = edad >= 18 ? "Adulto" : "Menor";

// Switch
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Otro día");
}

// Operadores lógicos con short-circuit
let nombre = usuario && usuario.nombre; // Si usuario existe, obtener nombre
let valor = inputUsuario || "Valor por defecto"; // Si no hay input, usar default

// Nullish coalescing operator (ES2020)
let resultado = valor ?? "Default"; // Solo si valor es null/undefined
```

### Bucles

```javascript
// for clásico
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of (itera sobre valores)
let array = [1, 2, 3];
for (let valor of array) {
  console.log(valor);
}

// for...in (itera sobre claves/índices)
let objeto = { a: 1, b: 2 };
for (let clave in objeto) {
  console.log(clave, objeto[clave]);
}

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// break y continue
for (let k = 0; k < 10; k++) {
  if (k === 3) continue; // Salta a la siguiente iteración
  if (k === 7) break; // Sale del bucle
  console.log(k);
}
```

---

## 🔗 Operadores

### Operadores Aritméticos

```javascript
let a = 10, b = 3;

a + b;  // 13 - suma
a - b;  // 7  - resta
a * b;  // 30 - multiplicación
a / b;  // 3.333... - división
a % b;  // 1  - módulo (resto)
a ** b; // 1000 - exponenciación

// Incremento y decremento
let x = 5;
x++;    // 6 - post-incremento
++x;    // 7 - pre-incremento
x--;    // 6 - post-decremento
--x;    // 5 - pre-decremento
```

### Operadores de Comparación

```javascript
// Igualdad (convierte tipos)
5 == "5";   // true
5 != "6";   // true

// Igualdad estricta (NO convierte tipos)
5 === "5";  // false ✅ Usar este
5 !== "6";  // true

// Comparación
5 > 3;      // true
5 < 3;      // false
5 >= 5;     // true
5 <= 3;     // false
```

### Operadores Lógicos

```javascript
// AND lógico
true && true;   // true
true && false;  // false

// OR lógico
true || false;  // true
false || false; // false

// NOT lógico
!true;  // false
!false; // true

// Short-circuit
let valor = obj && obj.propiedad; // Si obj es null, no evalúa obj.propiedad
let defecto = input || "default"; // Si input es falsy, usa "default"
```

### Operadores Especiales

```javascript
// typeof
typeof 42;              // "number"
typeof "texto";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" (bug histórico)
typeof {};              // "object"
typeof [];              // "object"
typeof function() {};   // "function"

// instanceof
[] instanceof Array;    // true
{} instanceof Object;   // true

// Optional chaining (ES2020)
let usuario = { info: { nombre: "Ana" } };
usuario?.info?.nombre;          // "Ana"
usuario?.direccion?.calle;      // undefined (no error)
obj?.metodo?.();                // Llamada segura a método

// Nullish coalescing (ES2020)
let valor = null ?? "default";  // "default"
let valor2 = 0 ?? "default";    // 0 (solo null/undefined son nullish)

// Spread operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];     // [1, 2, 3, 4]
let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 };   // { a: 1, b: 2 }
```

---

## 🧬 Clases y POO

### Sintaxis de Clases (ES6)

```javascript
class Persona {
  // Constructor
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método de instancia
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }

  // Getter
  get info() {
    return `${this.nombre}, ${this.edad} años`;
  }

  // Setter
  set nuevoNombre(nombre) {
    this.nombre = nombre;
  }

  // Método estático
  static especie() {
    return "Homo sapiens";
  }

  // Método privado (ES2022)
  #metodoPrivado() {
    return "Solo accesible dentro de la clase";
  }

  // Campo privado (ES2022)
  #campoPrivado = "privado";
}

// Instanciar
let persona = new Persona("Ana", 25);
persona.saludar(); // "Hola, soy Ana"
Persona.especie(); // "Homo sapiens"
```

### Herencia

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return "Algún sonido";
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llamar al constructor padre
    this.raza = raza;
  }

  // Override
  hacerSonido() {
    return "Guau!";
  }

  // Método específico
  moverCola() {
    return `${this.nombre} mueve la cola`;
  }
}

let perro = new Perro("Max", "Labrador");
perro.hacerSonido(); // "Guau!"
perro instanceof Perro;  // true
perro instanceof Animal; // true
```

---

## ⏱️ Asincronía

### Callbacks

```javascript
function obtenerDatos(callback) {
  setTimeout(() => {
    callback("Datos obtenidos");
  }, 1000);
}

obtenerDatos((datos) => {
  console.log(datos); // "Datos obtenidos" después de 1 segundo
});
```

### Promises

```javascript
// Crear una Promise
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Ocurrió un error");
  }
});

// Consumir una Promise
promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))
  .finally(() => console.log("Finalizado"));

// Encadenar Promises
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Promise.all - espera todas las promesas
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => console.log(resultados));

// Promise.race - retorna la primera que se resuelva
Promise.race([promesa1, promesa2])
  .then(resultado => console.log(resultado));

// Promise.allSettled - espera todas sin importar si fallan
Promise.allSettled([promesa1, promesa2])
  .then(resultados => console.log(resultados));

// Promise.any - primera que se resuelva exitosamente
Promise.any([promesa1, promesa2])
  .then(resultado => console.log(resultado));
```

### Async/Await

```javascript
// Función async siempre retorna una Promise
async function obtenerUsuario() {
  return { nombre: "Ana", edad: 25 };
}

// Uso de await (solo dentro de funciones async)
async function procesarDatos() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Múltiples awaits en paralelo
async function obtenerTodo() {
  let [usuarios, posts, comentarios] = await Promise.all([
    fetch("/api/usuarios").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
    fetch("/api/comentarios").then(r => r.json())
  ]);
  
  return { usuarios, posts, comentarios };
}

// IIFE async
(async () => {
  let datos = await obtenerDatos();
  console.log(datos);
})();
```

---

## 🚨 Manejo de Errores

### Try-Catch-Finally

```javascript
try {
  // Código que puede fallar
  let resultado = operacionPeligrosa();
  console.log(resultado);
} catch (error) {
  // Manejo del error
  console.error("Error:", error.message);
  console.error("Stack:", error.stack);
} finally {
  // Siempre se ejecuta
  console.log("Limpieza");
}

// Lanzar errores personalizados
function validarEdad(edad) {
  if (edad < 0) {
    throw new Error("La edad no puede ser negativa");
  }
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }
  return edad;
}

// Errores personalizados
class ErrorValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorValidacion";
  }
}

throw new ErrorValidacion("Datos inválidos");
```

---

## 🌐 Módulos (ES6)

### Export

```javascript
// Exportación nombrada
export const PI = 3.14159;
export function sumar(a, b) {
  return a + b;
}

// Exportar múltiples
const variable1 = "valor1";
const variable2 = "valor2";
export { variable1, variable2 };

// Exportar con alias
export { variable1 as v1, variable2 as v2 };

// Exportación por defecto (una por archivo)
export default function() {
  return "Función por defecto";
}

// O
export default class MiClase {
  // ...
}
```

### Import

```javascript
// Importar exportaciones nombradas
import { PI, sumar } from "./modulo.js";

// Importar con alias
import { PI as pi, sumar as sum } from "./modulo.js";

// Importar todo
import * as modulo from "./modulo.js";
modulo.PI;
modulo.sumar(2, 3);

// Importar exportación por defecto
import funcionPrincipal from "./modulo.js";

// Combinar default y nombradas
import funcionPrincipal, { PI, sumar } from "./modulo.js";

// Importación dinámica
const modulo = await import("./modulo.js");
// O con .then()
import("./modulo.js").then(modulo => {
  modulo.sumar(2, 3);
});
```

---

## 🛠️ Métodos Útiles

### Math

```javascript
Math.PI;              // 3.141592653589793
Math.E;               // 2.718281828459045

Math.abs(-5);         // 5
Math.ceil(4.2);       // 5
Math.floor(4.8);      // 4
Math.round(4.5);      // 5
Math.trunc(4.9);      // 4 (elimina decimales)

Math.max(1, 5, 3);    // 5
Math.min(1, 5, 3);    // 1

Math.pow(2, 3);       // 8
Math.sqrt(16);        // 4
Math.cbrt(27);        // 3 (raíz cúbica)

Math.random();        // Número aleatorio entre 0 y 1
Math.floor(Math.random() * 100); // Entero aleatorio 0-99

Math.sin(Math.PI / 2); // 1
Math.cos(0);           // 1
Math.tan(Math.PI / 4); // 1
```

### Date

```javascript
// Crear fechas
let ahora = new Date();
let fecha = new Date("2025-01-15");
let fecha2 = new Date(2025, 0, 15); // Mes es 0-indexed

// Obtener componentes
ahora.getFullYear();     // 2025
ahora.getMonth();        // 0-11 (0 = enero)
ahora.getDate();         // 1-31
ahora.getDay();          // 0-6 (0 = domingo)
ahora.getHours();        // 0-23
ahora.getMinutes();      // 0-59
ahora.getSeconds();      // 0-59
ahora.getMilliseconds(); // 0-999
ahora.getTime();         // Timestamp en milisegundos

// Establecer componentes
ahora.setFullYear(2026);
ahora.setMonth(11);
ahora.setDate(25);

// Formato
ahora.toISOString();     // "2026-12-25T12:00:00.000Z"
ahora.toLocaleDateString(); // "25/12/2026"
ahora.toLocaleTimeString(); // "12:00:00"

// Timestamp
Date.now();              // Timestamp actual
```

### JSON

```javascript
let objeto = { nombre: "Ana", edad: 25, activo: true };

// Convertir objeto a JSON
let json = JSON.stringify(objeto);
// '{"nombre":"Ana","edad":25,"activo":true}'

// Con formato
let jsonFormatted = JSON.stringify(objeto, null, 2);

// Parsear JSON a objeto
let objetoRecuperado = JSON.parse(json);

// Con revisor
JSON.stringify(objeto, (key, value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
});
```

### Console

```javascript
// Básicos
console.log("Mensaje");
console.info("Información");
console.warn("Advertencia");
console.error("Error");

// Con múltiples argumentos
console.log("Valor:", valor, "Objeto:", objeto);

// Tabla
console.table([{ nombre: "Ana" }, { nombre: "Luis" }]);

// Grupo
console.group("Mi Grupo");
console.log("Dentro del grupo");
console.groupEnd();

// Tiempo
console.time("operacion");
// ... código ...
console.timeEnd("operacion"); // "operacion: 15.234ms"

// Limpiar consola
console.clear();

// Assert
console.assert(valor > 10, "El valor debe ser mayor a 10");

// Conteo
console.count("evento"); // "evento: 1"
console.count("evento"); // "evento: 2"
console.countReset("evento");

// Trace
console.trace("Seguimiento de llamadas");
```

---

## 🎯 Conceptos Avanzados

### Prototipos

```javascript
// Cada objeto tiene un prototipo
let objeto = {};
Object.getPrototypeOf(objeto); // Object.prototype

// Herencia prototípica
function Persona(nombre) {
  this.nombre = nombre;
}
Persona.prototype.saludar = function() {
  return `Hola, soy ${this.nombre}`;
};

let persona = new Persona("Ana");
persona.saludar(); // Método heredado del prototipo
```

### This

```javascript
// El valor de 'this' depende del contexto

// En objeto
let objeto = {
  nombre: "Ana",
  saludar: function() {
    console.log(this.nombre); // "Ana"
  }
};

// Arrow functions no tienen 'this' propio
let objeto2 = {
  nombre: "Luis",
  saludar: () => {
    console.log(this.nombre); // undefined (this del contexto externo)
  }
};

// Métodos para controlar 'this'
function saludar() {
  console.log(this.nombre);
}

let persona = { nombre: "Carlos" };
saludar.call(persona);        // Llama función con 'this' = persona
saludar.apply(persona, []);   // Similar a call, pero con array de args
let saludarPersona = saludar.bind(persona); // Crea nueva función con 'this' fijo
```

### Destructuring Avanzado

```javascript
// Valores calculados
let clave = "nombre";
let { [clave]: valor } = { nombre: "Ana" };
console.log(valor); // "Ana"

// Intercambio de valores
let a = 1, b = 2;
[a, b] = [b, a];

// Ignorar valores
let [primero, , tercero] = [1, 2, 3];

// Parámetros con destructuring
function mostrar({ nombre, edad = 18 }) {
  console.log(nombre, edad);
}
```

### Map y Set

```javascript
// Map - colección clave-valor (claves pueden ser cualquier tipo)
let mapa = new Map();
mapa.set("clave", "valor");
mapa.set(1, "uno");
mapa.set({ id: 1 }, "objeto");

mapa.get("clave");    // "valor"
mapa.has("clave");    // true
mapa.delete("clave");
mapa.size;            // 2
mapa.clear();

// Iterar Map
for (let [clave, valor] of mapa) {
  console.log(clave, valor);
}

// Set - colección de valores únicos
let conjunto = new Set([1, 2, 3, 3, 4]);
conjunto.add(5);
conjunto.has(3);      // true
conjunto.delete(2);
conjunto.size;        // 4

// Convertir a array
let array = [...conjunto]; // [1, 3, 4, 5]

// WeakMap y WeakSet - permiten garbage collection de claves
let weakMap = new WeakMap();
let weakSet = new WeakSet();
```

### Symbols

```javascript
// Symbol - valor primitivo único e inmutable
let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion");
simbolo1 === simbolo2; // false (cada symbol es único)

// Uso en objetos (propiedades privadas)
let id = Symbol("id");
let usuario = {
  nombre: "Ana",
  [id]: 123
};

usuario[id]; // 123
Object.keys(usuario); // ["nombre"] - symbols no son enumerables

// Symbols globales
let globalSym = Symbol.for("app.id");
let same = Symbol.for("app.id");
globalSym === same; // true

Symbol.keyFor(globalSym); // "app.id"
```

### Generators

```javascript
// Generator function - puede pausar y reanudar ejecución
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generador();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }

// Uso en bucles
for (let valor of generador()) {
  console.log(valor); // 1, 2, 3
}

// Generator infinito
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

// Delegación de generators
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1();
  yield 3;
}

[...gen2()]; // [1, 2, 3]
```

### Proxy y Reflect

```javascript
// Proxy - interceptar operaciones en objetos
let objetivo = { nombre: "Ana" };

let proxy = new Proxy(objetivo, {
  get(target, prop) {
    console.log(`Leyendo ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Escribiendo ${prop} = ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.nombre; // "Leyendo nombre" -> "Ana"
proxy.edad = 25; // "Escribiendo edad = 25"

// Reflect - API para operaciones en objetos
Reflect.get(objetivo, "nombre");     // "Ana"
Reflect.set(objetivo, "edad", 25);   // true
Reflect.has(objetivo, "nombre");     // true
Reflect.deleteProperty(objetivo, "edad"); // true
```

---

## 📦 CommonJS vs ES Modules

### CommonJS (Node.js tradicional)

```javascript
// Exportar
module.exports = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b
};

// O
exports.sumar = (a, b) => a + b;

// Importar
const { sumar, restar } = require("./modulo");
const modulo = require("./modulo");
```

### ES Modules (Modern JavaScript)

```javascript
// Exportar
export const sumar = (a, b) => a + b;
export default class MiClase { }

// Importar
import { sumar } from "./modulo.js";
import MiClase from "./modulo.js";
```

---

## 💡 Buenas Prácticas

### Nombres Descriptivos

```javascript
// ❌ Evitar
let x = 5;
function f(a, b) { return a + b; }

// ✅ Preferir
let edad = 5;
function calcularSuma(numero1, numero2) {
  return numero1 + numero2;
}
```

### Usar const por defecto

```javascript
// ✅ Usar const para valores que no cambian
const API_URL = "https://api.example.com";
const configuracion = { tema: "oscuro" };

// Usar let solo cuando el valor cambie
let contador = 0;
contador++;
```

### Evitar var

```javascript
// ❌ Evitar var (scope de función, hoisting confuso)
var nombre = "Ana";

// ✅ Usar let o const (scope de bloque)
let nombre = "Ana";
const CONSTANTE = 42;
```

### Comparación Estricta

```javascript
// ❌ Evitar == (conversión de tipos implícita)
if (valor == "5") { }

// ✅ Usar === (sin conversión de tipos)
if (valor === 5) { }
```

### Manejo de Errores

```javascript
// ✅ Siempre manejar errores en async/await
async function obtenerDatos() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; // O manejar de otra forma
  }
}
```

### Inmutabilidad

```javascript
// ❌ Mutar objetos/arrays directamente
let array = [1, 2, 3];
array.push(4); // Muta el array original

// ✅ Crear nuevas referencias
let array = [1, 2, 3];
let nuevoArray = [...array, 4]; // No muta el original
```

### Código Limpio

```javascript
// ✅ Funciones pequeñas y específicas
function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

// ✅ Early return
function procesarUsuario(usuario) {
  if (!usuario) return;
  if (!usuario.activo) return;
  
  // Lógica principal
}

// ✅ Evitar anidación profunda
// ❌ Evitar
if (condicion1) {
  if (condicion2) {
    if (condicion3) {
      // ...
    }
  }
}

// ✅ Preferir
if (!condicion1) return;
if (!condicion2) return;
if (!condicion3) return;
// ...
```

---

## 🔧 Debugging

### Técnicas de Debugging

```javascript
// console.log estratégico
console.log("Valor de x:", x);

// debugger - pausa ejecución en DevTools
function calcular(a, b) {
  debugger; // La ejecución se pausa aquí
  return a + b;
}

// console.trace - muestra call stack
function nivel3() { console.trace(); }
function nivel2() { nivel3(); }
function nivel1() { nivel2(); }
nivel1();

// console.time - medir rendimiento
console.time("bucle");
for (let i = 0; i < 1000000; i++) { }
console.timeEnd("bucle"); // "bucle: 5.234ms"

// console.assert - validar condiciones
console.assert(array.length > 0, "El array está vacío");
```

---

## 🚀 Conceptos ES2015+ (ES6+)

### Características Modernas

```javascript
// Optional chaining
usuario?.direccion?.calle;

// Nullish coalescing
let valor = input ?? "default";

// Logical assignment operators (ES2021)
x ||= 10;  // x = x || 10
x &&= 5;   // x = x && 5
x ??= 20;  // x = x ?? 20

// Numeric separators (ES2021)
let millon = 1_000_000;
let bytes = 0b1111_1111;

// Promise.allSettled, Promise.any

// String.replaceAll
"hola hola".replaceAll("hola", "adios");

// Array.at() - índices negativos
let arr = [1, 2, 3];
arr.at(-1); // 3

// Object.hasOwn() - alternativa a hasOwnProperty
Object.hasOwn(obj, "propiedad");

// Top-level await (en módulos)
const data = await fetch(url);
```

---

## 📚 Recursos Adicionales

### Herramientas

- **Node.js** - Runtime de JavaScript
- **npm/yarn/pnpm** - Gestores de paquetes
- **Babel** - Transpilador ES6+ a ES5
- **ESLint** - Linter de código
- **Prettier** - Formateador de código
- **TypeScript** - Superset tipado de JavaScript

### Documentación

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specifications](https://tc39.es/ecma262/)
- [Lenguaje JS - Manz](https://lenguajejs.com)
- [Cheatsheets Js - Manz](https://lenguajejs.com/javascript/cheatsheets/download/)
- [Javascript - Apuntes de Majo](https://drive.google.com/file/d/1T6-jER5O_2RSvMOT9ZtvzUm56OMzp9cu/edit)
