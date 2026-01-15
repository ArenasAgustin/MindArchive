---
title: "λ Haskell Cheat Sheet"
description: "Guía rápida de referencia de Haskell con lo más usado"
sidebar_position: 1
tags: [haskell, programación, funcional, referencia, cheat-sheet]
---

Guía rápida de referencia con los elementos más utilizados de Haskell.

---

## 📝 Estructura Básica

### Programa Básico

```haskell
-- Archivo: Main.hs
main :: IO ()
main = putStrLn "Hola Mundo"

-- Compilar: ghc Main.hs
-- Ejecutar: ./Main
```

### Comentarios

```haskell
-- Comentario de una línea

{-
  Comentario de
  múltiples líneas
-}

{-|
  Comentario de documentación (Haddock)
  @param x descripción del parámetro
  @return descripción del retorno
-}

-- Comentarios anidados
{- 
  Primer nivel
  {- Segundo nivel anidado -}
  sigue el primer nivel
-}
```

---

## 🔤 Tipos de Datos Básicos

### Primitivos

```haskell
-- Números
42 :: Int              -- Entero (tamaño fijo)
42 :: Integer          -- Entero (precisión arbitraria)
3.14 :: Float          -- Punto flotante (precisión simple)
3.14159 :: Double      -- Punto flotante (doble precisión)

-- Caracteres y Cadenas
'A' :: Char            -- Carácter
"Hola" :: String       -- Cadena (lista de caracteres)
"Hola" :: [Char]       -- Equivalente a String

-- Booleanos
True :: Bool
False :: Bool

-- Unidad (equivalente a void)
() :: ()
```

### Declaración de Variables

```haskell
-- Variables inmutables (por defecto)
numero :: Int
numero = 42

pi :: Double
pi = 3.14159

nombre :: String
nombre = "Juan"

-- Inferencia de tipos
valor = 100            -- Haskell infiere Int o Integer
texto = "Hola"         -- Haskell infiere String
```

---

## 📋 Listas

### Creación y Operaciones Básicas

```haskell
-- Creación
lista = [1, 2, 3, 4, 5]
vacia = []
letras = ['a', 'b', 'c']

-- Rangos
nums = [1..10]         -- [1,2,3,4,5,6,7,8,9,10]
pares = [2,4..20]      -- [2,4,6,8,10,12,14,16,18,20]
infinito = [1..]       -- Lista infinita
descendente = [10,9..1]  -- [10,9,8,7,6,5,4,3,2,1]

-- Construcción con cons (:)
lista = 1 : 2 : 3 : []  -- [1,2,3]
nueva = 0 : [1,2,3]     -- [0,1,2,3]

-- Concatenación
[1,2] ++ [3,4]         -- [1,2,3,4]
concat [[1,2], [3,4]]  -- [1,2,3,4]

-- Acceso
head [1,2,3]           -- 1 (primer elemento)
tail [1,2,3]           -- [2,3] (todos menos el primero)
last [1,2,3]           -- 3 (último elemento)
init [1,2,3]           -- [1,2] (todos menos el último)
[1,2,3] !! 1           -- 2 (elemento en índice 1)

-- Propiedades
length [1,2,3,4]       -- 4
null []                -- True (¿está vacía?)
null [1,2]             -- False

-- Operaciones
take 3 [1..10]         -- [1,2,3]
drop 3 [1..10]         -- [4,5,6,7,8,9,10]
reverse [1,2,3]        -- [3,2,1]
elem 3 [1,2,3,4]       -- True (¿contiene?)
```

### Comprensión de Listas

```haskell
-- Sintaxis: [expresion | generador, condicion]

-- Básico
[x*2 | x <- [1..5]]                    -- [2,4,6,8,10]

-- Con condición (filtro)
[x | x <- [1..10], x `mod` 2 == 0]     -- [2,4,6,8,10] (pares)
[x | x <- [1..10], even x]             -- [2,4,6,8,10]

-- Múltiples generadores
[(x,y) | x <- [1,2], y <- [3,4]]       -- [(1,3),(1,4),(2,3),(2,4)]

-- Con múltiples condiciones
[x | x <- [1..20], x `mod` 2 == 0, x > 10]  -- [12,14,16,18,20]

-- Anidada
[[x*y | y <- [1..3]] | x <- [1..3]]    -- [[1,2,3],[2,4,6],[3,6,9]]
```

---

## 🔧 Funciones

### Definición y Uso

```haskell
-- Función simple
suma :: Int -> Int -> Int
suma x y = x + y

-- Uso
resultado = suma 3 5   -- 8

-- Función de un parámetro
doble :: Int -> Int
doble x = x * 2

cuadrado :: Int -> Int
cuadrado x = x * x

-- Función sin parámetros (constante)
pi :: Double
pi = 3.14159

-- Función con where
hipotenusa :: Double -> Double -> Double
hipotenusa a b = sqrt (a2 + b2)
  where
    a2 = a * a
    b2 = b * b

-- Función con let
cilindroArea :: Double -> Double -> Double
cilindroArea r h =
  let areaBase = pi * r * r
      areaLateral = 2 * pi * r * h
  in 2 * areaBase + areaLateral
```

### Pattern Matching

```haskell
-- Con números
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Con listas
longitud :: [a] -> Int
longitud [] = 0
longitud (_:xs) = 1 + longitud xs

-- Con tuplas
suma2D :: (Int, Int) -> Int
suma2D (x, y) = x + y

-- Múltiples patrones
describir :: Int -> String
describir 0 = "Cero"
describir 1 = "Uno"
describir 2 = "Dos"
describir _ = "Otro número"

-- Guards (guardas)
clasificar :: Int -> String
clasificar n
  | n < 0     = "Negativo"
  | n == 0    = "Cero"
  | n > 0     = "Positivo"

-- Case
evaluar :: Int -> String
evaluar x = case x of
  0 -> "Cero"
  1 -> "Uno"
  _ -> "Otro"
```

### Funciones de Orden Superior

```haskell
-- map: Aplica función a cada elemento
map (*2) [1,2,3,4]           -- [2,4,6,8]
map toUpper "hola"           -- "HOLA"

-- filter: Filtra elementos
filter even [1..10]          -- [2,4,6,8,10]
filter (>5) [1..10]          -- [6,7,8,9,10]

-- foldl: Reduce de izquierda a derecha
foldl (+) 0 [1,2,3,4]        -- 10
foldl (*) 1 [1,2,3,4]        -- 24

-- foldr: Reduce de derecha a izquierda
foldr (+) 0 [1,2,3,4]        -- 10
foldr (:) [] [1,2,3]         -- [1,2,3]

-- Funciones lambda (anónimas)
(\x -> x * 2) 5              -- 10
map (\x -> x * x) [1,2,3]    -- [1,4,9]
filter (\x -> x > 5) [1..10] -- [6,7,8,9,10]
```

### Composición y Aplicación

```haskell
-- Composición (.)
-- (f . g) x = f (g x)

dobleYCuadrado = (^2) . (*2)
dobleYCuadrado 3             -- 36 (porque (3*2)^2 = 36)

-- Aplicación ($)
-- f $ x = f x (evita paréntesis)

sum (map (*2) [1..5])        -- Con paréntesis
sum $ map (*2) [1..5]        -- Con $ (equivalente)

-- Cadenas de composición
procesarTexto = reverse . map toUpper . filter (/= ' ')
procesarTexto "hola mundo"   -- "ODMNMALOH"
```

---

## 📦 Tuplas

```haskell
-- Creación
par :: (Int, String)
par = (42, "Hola")

trio :: (Int, String, Bool)
trio = (1, "A", True)

-- Acceso (solo para pares)
fst (1, 2)                   -- 1 (primer elemento)
snd (1, 2)                   -- 2 (segundo elemento)

-- Pattern matching
suma :: (Int, Int) -> Int
suma (x, y) = x + y

-- Listas de tuplas
coordenadas = [(1,2), (3,4), (5,6)]

-- zip: Combina dos listas
zip [1,2,3] ['a','b','c']    -- [(1,'a'),(2,'b'),(3,'c')]
```

---

## 🔀 Estructuras de Control

### Condicionales

```haskell
-- if-then-else (expresión, no statement)
maximo :: Int -> Int -> Int
maximo x y = if x > y then x else y

absoluto :: Int -> Int
absoluto x = if x < 0 then -x else x

-- Guards
signo :: Int -> String
signo n
  | n > 0     = "Positivo"
  | n < 0     = "Negativo"
  | otherwise = "Cero"

-- Case
clasificar :: Char -> String
clasificar c = case c of
  'a' -> "Vocal"
  'e' -> "Vocal"
  'i' -> "Vocal"
  'o' -> "Vocal"
  'u' -> "Vocal"
  _   -> "Consonante"
```

### Recursión

```haskell
-- Factorial
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- Fibonacci
fib :: Integer -> Integer
fib 0 = 0
fib 1 = 1
fib n = fib (n-1) + fib (n-2)

-- Suma de lista
sumaLista :: [Int] -> Int
sumaLista [] = 0
sumaLista (x:xs) = x + sumaLista xs

-- Longitud
longitud :: [a] -> Int
longitud [] = 0
longitud (_:xs) = 1 + longitud xs

-- Inversión
invertir :: [a] -> [a]
invertir [] = []
invertir (x:xs) = invertir xs ++ [x]

-- Recursión de cola (tail recursion)
factorialTR :: Integer -> Integer
factorialTR n = aux n 1
  where
    aux 0 acc = acc
    aux n acc = aux (n-1) (n*acc)
```

---

## 📐 Tipos Algebraicos

### Tipos Enumerados

```haskell
-- Definición
data DiaSemana = Lunes | Martes | Miercoles | Jueves | Viernes | Sabado | Domingo
  deriving (Show, Eq)

-- Uso
hoy :: DiaSemana
hoy = Lunes

esFinDeSemana :: DiaSemana -> Bool
esFinDeSemana Sabado = True
esFinDeSemana Domingo = True
esFinDeSemana _ = False
```

### Tipos con Constructores

```haskell
-- Tipo producto (como struct)
data Punto = Punto Double Double
  deriving (Show)

-- Uso
p1 = Punto 3.0 4.0

distancia :: Punto -> Punto -> Double
distancia (Punto x1 y1) (Punto x2 y2) =
  sqrt ((x2-x1)^2 + (y2-y1)^2)

-- Tipo suma (unión)
data Forma = Circulo Double
           | Rectangulo Double Double
           | Triangulo Double Double
  deriving (Show)

-- Pattern matching
area :: Forma -> Double
area (Circulo r) = pi * r * r
area (Rectangulo a b) = a * b
area (Triangulo b h) = b * h / 2

-- Tipos recursivos
data Lista a = Vacia | Cons a (Lista a)
  deriving (Show)

-- Lista: Cons 1 (Cons 2 (Cons 3 Vacia))

data Arbol a = Hoja a | Nodo a (Arbol a) (Arbol a)
  deriving (Show)
```

### Maybe y Either

```haskell
-- Maybe: Representa valor opcional
data Maybe a = Nothing | Just a

-- Uso
divide :: Double -> Double -> Maybe Double
divide _ 0 = Nothing
divide x y = Just (x / y)

buscar :: Eq a => a -> [a] -> Maybe Int
buscar _ [] = Nothing
buscar x (y:ys)
  | x == y    = Just 0
  | otherwise = fmap (+1) (buscar x ys)

-- Either: Representa éxito o error
data Either a b = Left a | Right b

-- Uso
dividir :: Double -> Double -> Either String Double
dividir _ 0 = Left "Error: división por cero"
dividir x y = Right (x / y)

parseEntero :: String -> Either String Int
parseEntero s =
  case reads s of
    [(n, "")] -> Right n
    _         -> Left "No es un número válido"
```

---

## 🔤 Strings

```haskell
-- Strings son listas de caracteres
texto :: String
texto = "Hola"

-- Operaciones de listas funcionan en strings
head "Hola"                  -- 'H'
tail "Hola"                  -- "ola"
"Hola" ++ " Mundo"           -- "Hola Mundo"
reverse "Hola"               -- "aloH"

-- Funciones específicas
import Data.Char

map toUpper "hola"           -- "HOLA"
map toLower "HOLA"           -- "hola"
filter isDigit "abc123"      -- "123"
filter isAlpha "abc123"      -- "abc"

-- Conversión
show 42                      -- "42"
show 3.14                    -- "3.14"
read "42" :: Int             -- 42
read "3.14" :: Double        -- 3.14

-- words y unwords
words "Hola mundo cruel"     -- ["Hola","mundo","cruel"]
unwords ["Hola","mundo"]     -- "Hola mundo"

-- lines y unlines
lines "uno\ndos\ntres"       -- ["uno","dos","tres"]
unlines ["uno","dos","tres"] -- "uno\ndos\ntres\n"
```

---

## 🖨️ Entrada y Salida

### IO Básico

```haskell
-- Salida
main :: IO ()
main = do
  putStrLn "Hola Mundo"      -- Con salto de línea
  putStr "Sin salto"         -- Sin salto de línea
  print 42                   -- Muestra cualquier tipo Show

-- Entrada
main = do
  putStrLn "¿Cómo te llamas?"
  nombre <- getLine          -- Leer línea
  putStrLn ("Hola, " ++ nombre)

-- Leer múltiples valores
main = do
  linea <- getLine
  let numero = read linea :: Int
  print (numero * 2)

-- Secuencia de acciones
main = do
  putStrLn "Primera línea"
  putStrLn "Segunda línea"
  putStrLn "Tercera línea"
```

### Lectura de Archivos

```haskell
import System.IO

-- Leer archivo completo
main = do
  contenido <- readFile "archivo.txt"
  putStrLn contenido

-- Escribir archivo
main = do
  writeFile "salida.txt" "Contenido del archivo"

-- Agregar a archivo
main = do
  appendFile "salida.txt" "\nNueva línea"

-- Manejo manual
main = do
  handle <- openFile "archivo.txt" ReadMode
  contenido <- hGetContents handle
  putStrLn contenido
  hClose handle
```

---

## 📊 Funciones Comunes

### Listas

```haskell
-- Agregación
sum [1,2,3,4]              -- 10
product [1,2,3,4]          -- 24
maximum [1,5,3,2]          -- 5
minimum [1,5,3,2]          -- 1

-- Búsqueda
elem 3 [1,2,3,4]           -- True
notElem 5 [1,2,3,4]        -- True
find even [1,2,3,4]        -- Just 2

-- Ordenamiento
import Data.List

sort [3,1,4,2]             -- [1,2,3,4]
reverse [1,2,3]            -- [3,2,1]

-- Agrupación
group [1,1,2,2,2,3,3]      -- [[1,1],[2,2,2],[3,3]]
nub [1,2,1,3,2,4]          -- [1,2,3,4] (elimina duplicados)

-- Partición
splitAt 3 [1..10]          -- ([1,2,3],[4,5,6,7,8,9,10])
partition even [1..10]     -- ([2,4,6,8,10],[1,3,5,7,9])
```

### Matemáticas

```haskell
-- Operadores
5 + 3                      -- 8
5 - 3                      -- 2
5 * 3                      -- 15
5 / 3                      -- 1.6666...
5 `div` 3                  -- 1 (división entera)
5 `mod` 3                  -- 2 (módulo)
5 ^ 3                      -- 125 (potencia)

-- Funciones
abs (-5)                   -- 5
signum (-5)                -- -1
even 4                     -- True
odd 4                      -- False
gcd 12 18                  -- 6
lcm 12 18                  -- 36

-- Matemáticas avanzadas
sqrt 16                    -- 4.0
exp 1                      -- 2.718... (e^1)
log 10                     -- 2.302... (ln)
logBase 10 100             -- 2.0 (log₁₀)
sin (pi/2)                 -- 1.0
cos 0                      -- 1.0
```

---

## 🎯 Aplicación Parcial y Currificación

```haskell
-- Todas las funciones en Haskell están currificadas
suma :: Int -> Int -> Int
suma x y = x + y

-- Aplicación parcial
suma5 = suma 5             -- Int -> Int
suma5 10                   -- 15

-- Ejemplos prácticos
doblar = map (*2)
doblar [1,2,3]             -- [2,4,6]

mayorQue5 = filter (>5)
mayorQue5 [1..10]          -- [6,7,8,9,10]

-- Secciones (operadores)
(+1) 5                     -- 6
(*2) 3                     -- 6
(^2) 4                     -- 16
(10-) 3                    -- 7
(10/) 2                    -- 5.0
```

---

## 🧩 Type Classes

### Principales Type Classes

```haskell
-- Eq: Igualdad
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool

-- Ord: Ordenamiento
class Eq a => Ord a where
  compare :: a -> a -> Ordering
  (<), (<=), (>), (>=) :: a -> a -> Bool
  max, min :: a -> a -> a

-- Show: Convertir a String
class Show a where
  show :: a -> String

-- Read: Parsear desde String
class Read a where
  read :: String -> a

-- Num: Números
class Num a where
  (+), (-), (*) :: a -> a -> a
  negate :: a -> a
  abs :: a -> a
  signum :: a -> a
```

### Uso en Tipos Propios

```haskell
data Punto = Punto Double Double

-- Derivación automática
data Punto = Punto Double Double
  deriving (Show, Eq)

-- Implementación manual
instance Show Punto where
  show (Punto x y) = "(" ++ show x ++ ", " ++ show y ++ ")"

instance Eq Punto where
  (Punto x1 y1) == (Punto x2 y2) = x1 == x2 && y1 == y2
```

---

## 💡 Consejos y Buenas Prácticas

### Preferir Inmutabilidad

```haskell
-- ❌ No hay mutación en Haskell (por diseño)
-- Las "variables" son inmutables

-- ✅ Crear nuevos valores
duplicar :: [Int] -> [Int]
duplicar xs = map (*2) xs
```

### Usar Pattern Matching

```haskell
-- ✅ Claro y expresivo
primero :: [a] -> Maybe a
primero []     = Nothing
primero (x:_)  = Just x

-- ❌ Menos idiomático
primero xs = if null xs then Nothing else Just (head xs)
```

### Aprovechar Lazy Evaluation

```haskell
-- Listas infinitas (solo evalúa lo necesario)
naturales = [1..]
primerosDiez = take 10 naturales  -- [1..10]

-- Fibonacci infinito
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
take 10 fibs  -- [0,1,1,2,3,5,8,13,21,34]
```

### Composición sobre Aplicación

```haskell
-- ✅ Composición (punto-free style)
procesarLista = reverse . filter even . map (*2)

-- ❌ Aplicación anidada
procesarLista xs = reverse (filter even (map (*2) xs))
```

---

## 📋 Ejemplos Completos

### Quicksort

```haskell
quicksort :: Ord a => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
  menores ++ [x] ++ mayores
  where
    menores = quicksort [y | y <- xs, y <= x]
    mayores = quicksort [y | y <- xs, y > x]
```

### Números Primos

```haskell
esPrimo :: Int -> Bool
esPrimo n
  | n < 2     = False
  | otherwise = null [x | x <- [2..raiz], n `mod` x == 0]
  where raiz = floor (sqrt (fromIntegral n))

primos :: [Int]
primos = filter esPrimo [2..]

primeros100Primos = take 100 primos
```

### Calculadora RPN

```haskell
rpn :: String -> Double
rpn = head . foldl procesar [] . words
  where
    procesar (x:y:ys) "+" = (y + x):ys
    procesar (x:y:ys) "-" = (y - x):ys
    procesar (x:y:ys) "*" = (y * x):ys
    procesar (x:y:ys) "/" = (y / x):ys
    procesar xs numero = read numero : xs

-- Uso: rpn "10 4 3 + 2 * -"  -- -4.0
```

---

## 🔗 Recursos Adicionales

- [Haskell Official](https://www.haskell.org/)
- [Learn You a Haskell](http://learnyouahaskell.com/)
- [Hoogle (búsqueda de funciones)](https://hoogle.haskell.org/)
- [Real World Haskell](http://book.realworldhaskell.org/)
