---
title: "Bash Cheat Sheet"
description: "Guía rápida de referencia de Bash: comandos esenciales, scripting y automatización"
sidebar_position: 1
tags: [bash, shell, linux, terminal, scripting, referencia, cheat-sheet]
---

Guía de referencia rápida con los comandos y técnicas más importantes de Bash.

---

## 💬 Comentarios

```bash
# Comentario de una línea

: '
Comentario de
múltiples líneas
(usando : y comillas simples)
'

# Comentarios en scripts
#!/bin/bash
# Descripción del script
# Autor: Tu nombre
# Fecha: 2024-01-01
```

---

## 📂 Navegación y Archivos

### Directorios

```bash
# Directorio actual
pwd

# Listar contenido
ls                    # Básico
ls -l                 # Formato largo (permisos, tamaño, fecha)
ls -la                # Incluir ocultos
ls -lh                # Tamaños legibles (KB, MB, GB)
ls -lt                # Ordenar por fecha modificación
ls -lS                # Ordenar por tamaño
ls -R                 # Recursivo (subdirectorios)

# Cambiar directorio
cd /ruta/absoluta     # Ruta absoluta
cd ruta/relativa      # Ruta relativa
cd ..                 # Directorio padre
cd ~                  # Home del usuario
cd -                  # Directorio anterior

# Crear directorio
mkdir carpeta
mkdir -p ruta/con/subdirectorios

# Eliminar directorio
rmdir carpeta         # Solo si está vacío
rm -r carpeta         # Recursivo (con archivos)
rm -rf carpeta        # Forzado sin confirmación
```

### Archivos

```bash
# Crear archivo vacío
touch archivo.txt

# Ver contenido
cat archivo.txt       # Completo
head archivo.txt      # Primeras 10 líneas
head -n 5 archivo.txt # Primeras 5 líneas
tail archivo.txt      # Últimas 10 líneas
tail -n 20 archivo.txt # Últimas 20 líneas
tail -f archivo.log   # Seguir cambios en tiempo real

# Ver con paginación
less archivo.txt      # Navegable (q para salir)
more archivo.txt      # Paginación simple

# Copiar
cp origen destino
cp archivo.txt copia.txt
cp -r carpeta/ destino/   # Recursivo

# Mover/Renombrar
mv origen destino
mv archivo.txt nuevo.txt
mv archivo.txt /otra/ruta/

# Eliminar
rm archivo.txt
rm -f archivo.txt     # Forzado
rm -i archivo.txt     # Interactivo (confirmar)

# Información de archivo
file archivo.txt      # Tipo de archivo
stat archivo.txt      # Información detallada
du -h archivo.txt     # Tamaño del archivo
du -sh carpeta/       # Tamaño de carpeta
```

---

## 🔍 Buscar

### Archivos y Directorios

```bash
# Buscar archivos por nombre
find . -name "archivo.txt"
find . -name "*.js"
find /ruta -iname "*.txt"  # Case insensitive

# Buscar por tipo
find . -type f            # Solo archivos
find . -type d            # Solo directorios

# Buscar por tamaño
find . -size +100M        # Mayores a 100MB
find . -size -1k          # Menores a 1KB

# Buscar por modificación
find . -mtime -7          # Modificados últimos 7 días
find . -mtime +30         # Modificados hace más de 30 días

# Buscar y ejecutar comando
find . -name "*.log" -delete
find . -name "*.txt" -exec cat {} \;

# Buscar ejecutables
which python
which git
whereis python            # Ubicaciones múltiples
```

### Contenido de Archivos

```bash
# Buscar texto en archivo
grep "palabra" archivo.txt
grep -i "palabra" archivo.txt    # Case insensitive
grep -r "palabra" .              # Recursivo en directorio
grep -n "palabra" archivo.txt    # Con número de línea
grep -v "palabra" archivo.txt    # Invertir (líneas sin palabra)
grep -c "palabra" archivo.txt    # Contar ocurrencias

# Expresiones regulares
grep -E "patrón|otro" archivo.txt
grep "^inicio" archivo.txt       # Líneas que empiezan con
grep "fin$" archivo.txt          # Líneas que terminan con

# Buscar en múltiples archivos
grep "palabra" *.txt
grep -r "palabra" /var/log/
```

---

## 📝 Edición de Texto

### Editores Básicos

```bash
# Nano (simple)
nano archivo.txt
# Ctrl+O: guardar, Ctrl+X: salir

# Vim (avanzado)
vim archivo.txt
# i: insertar, Esc: modo comando
# :w guardar, :q salir, :wq guardar y salir, :q! salir sin guardar

# Crear/Editar con echo
echo "texto" > archivo.txt        # Sobrescribir
echo "más texto" >> archivo.txt   # Agregar al final
```

### Manipulación de Texto

```bash
# Reemplazar texto
sed 's/buscar/reemplazar/' archivo.txt
sed 's/buscar/reemplazar/g' archivo.txt  # Todas las ocurrencias
sed -i 's/buscar/reemplazar/g' archivo.txt  # Modificar archivo

# Cortar columnas
cut -d':' -f1 /etc/passwd        # Primera columna
cut -c1-10 archivo.txt           # Caracteres 1-10

# Ordenar
sort archivo.txt
sort -r archivo.txt              # Reverso
sort -n archivo.txt              # Numérico
sort -u archivo.txt              # Único (eliminar duplicados)

# Eliminar duplicados
uniq archivo.txt
sort archivo.txt | uniq          # Ordenar primero

# Contar
wc archivo.txt                   # Líneas, palabras, bytes
wc -l archivo.txt                # Solo líneas
wc -w archivo.txt                # Solo palabras
wc -c archivo.txt                # Solo bytes
```

---

## 🔐 Permisos

### Ver y Cambiar Permisos

```bash
# Ver permisos
ls -l archivo.txt
# -rwxr-xr--  1 user group 1234 Jan 01 12:00 archivo.txt
# - rwx r-x r--
# │ │   │   └── otros (read)
# │ │   └────── grupo (read, execute)
# │ └────────── usuario (read, write, execute)
# └──────────── tipo (- archivo, d directorio, l link)

# Cambiar permisos (simbólico)
chmod u+x archivo.txt            # Usuario: agregar ejecución
chmod g-w archivo.txt            # Grupo: quitar escritura
chmod o+r archivo.txt            # Otros: agregar lectura
chmod a+x archivo.txt            # Todos: agregar ejecución

# Cambiar permisos (numérico)
chmod 755 archivo.txt            # rwxr-xr-x
chmod 644 archivo.txt            # rw-r--r--
chmod 777 archivo.txt            # rwxrwxrwx (todos los permisos)
chmod 600 archivo.txt            # rw------- (solo usuario)

# Recursivo
chmod -R 755 carpeta/

# Cambiar propietario
chown usuario archivo.txt
chown usuario:grupo archivo.txt
chown -R usuario:grupo carpeta/
```

### Valores Numéricos

| Número | Permisos | Binario | Descripción |
| ------ | -------- | ------- | ----------- |
| 0 | --- | 000 | Sin permisos |
| 1 | --x | 001 | Solo ejecución |
| 2 | -w- | 010 | Solo escritura |
| 3 | -wx | 011 | Escritura y ejecución |
| 4 | r-- | 100 | Solo lectura |
| 5 | r-x | 101 | Lectura y ejecución |
| 6 | rw- | 110 | Lectura y escritura |
| 7 | rwx | 111 | Todos los permisos |

---

## 🔄 Redirección y Pipes

### Redirección

```bash
# Salida estándar (stdout)
comando > archivo.txt            # Sobrescribir
comando >> archivo.txt           # Agregar al final

# Error estándar (stderr)
comando 2> errores.txt           # Solo errores
comando 2>> errores.txt          # Agregar errores

# Ambos (stdout y stderr)
comando > todo.txt 2>&1
comando &> todo.txt              # Forma corta

# Descartar salida
comando > /dev/null              # Descartar stdout
comando 2> /dev/null             # Descartar stderr
comando &> /dev/null             # Descartar todo

# Entrada estándar (stdin)
comando < archivo.txt
cat < archivo.txt
```

### Pipes (|)

```bash
# Encadenar comandos
ls -l | grep ".txt"
cat archivo.txt | grep "palabra" | wc -l
ps aux | grep python | grep -v grep

# Ejemplos útiles
history | grep "git"
ls -lh | sort -k5 -h            # Ordenar por tamaño
cat access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn
```

---

## ⚙️ Variables

### Variables de Sistema

```bash
# Variables comunes
echo $HOME                       # Directorio home
echo $USER                       # Usuario actual
echo $PATH                       # Rutas de ejecutables
echo $PWD                        # Directorio actual
echo $OLDPWD                     # Directorio anterior
echo $SHELL                      # Shell actual
echo $HOSTNAME                   # Nombre del host

# Variables de script
echo $0                          # Nombre del script
echo $1 $2 $3                    # Argumentos posicionales
echo $#                          # Cantidad de argumentos
echo $@                          # Todos los argumentos
echo $?                          # Código de salida último comando
echo $$                          # PID del proceso actual
```

### Definir Variables

```bash
# Definir variable
nombre="Juan"
edad=25
ruta="/home/user"

# Usar variable
echo $nombre
echo "Hola $nombre"
echo "Tengo $edad años"

# Variable sin espacios (importante)
var="valor"          # ✅ Correcto
var = "valor"        # ❌ Error

# Variables de entorno
export PATH=$PATH:/nueva/ruta
export EDITOR=vim

# Ver variables de entorno
env
printenv
printenv PATH
```

### Comillas

```bash
nombre="Juan"

# Comillas dobles - Expanden variables
echo "Hola $nombre"              # Hola Juan

# Comillas simples - Literal
echo 'Hola $nombre'              # Hola $nombre

# Sin comillas - Puede causar problemas
archivo="mi archivo.txt"
cat $archivo                     # ❌ Error (espacio)
cat "$archivo"                   # ✅ Correcto

# Backticks - Ejecutar comando (deprecado)
fecha=`date`

# $() - Ejecutar comando (preferido)
fecha=$(date)
archivos=$(ls -l | wc -l)
```

---

## 🔁 Estructuras de Control

### If / Else

```bash
# If básico
if [ condición ]; then
    echo "Verdadero"
fi

# If-else
if [ $edad -gt 18 ]; then
    echo "Mayor de edad"
else
    echo "Menor de edad"

fi

# If-elif-else
if [ $nota -ge 90 ]; then
    echo "Excelente"
elif [ $nota -ge 70 ]; then
    echo "Bueno"
elif [ $nota -ge 50 ]; then
    echo "Regular"
else
    echo "Insuficiente"
fi

# [[ ]] - Más robusto (recomendado)
if [[ $nombre == "Juan" ]]; then
    echo "Hola Juan"
fi

# Múltiples condiciones
if [[ $edad -gt 18 && $nombre == "Juan" ]]; then
    echo "Juan es mayor de edad"
fi

if [[ $edad -lt 18 || $edad -gt 65 ]]; then
    echo "Descuento especial"
fi
```

### Operadores de Comparación

#### Números

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `-eq` | Igual | `[ $a -eq $b ]` |
| `-ne` | Diferente | `[ $a -ne $b ]` |
| `-lt` | Menor que | `[ $a -lt $b ]` |
| `-le` | Menor o igual | `[ $a -le $b ]` |
| `-gt` | Mayor que | `[ $a -gt $b ]` |
| `-ge` | Mayor o igual | `[ $a -ge $b ]` |

#### Strings

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `=` o `==` | Igual | `[[ $a == $b ]]` |
| `!=` | Diferente | `[[ $a != $b ]]` |
| `<` | Menor (alfabético) | `[[ $a < $b ]]` |
| `>` | Mayor (alfabético) | `[[ $a > $b ]]` |
| `-z` | Cadena vacía | `[[ -z $a ]]` |
| `-n` | Cadena no vacía | `[[ -n $a ]]` |

#### Archivos

| Operador | Descripción |
| -------- | ----------- |
| `-e archivo` | Archivo existe |
| `-f archivo` | Es archivo regular |
| `-d archivo` | Es directorio |
| `-r archivo` | Es legible |
| `-w archivo` | Es escribible |
| `-x archivo` | Es ejecutable |
| `-s archivo` | No está vacío |

```bash
# Ejemplos con archivos
if [[ -f "archivo.txt" ]]; then
    echo "El archivo existe"
fi

if [[ -d "carpeta" ]]; then
    echo "Es un directorio"
fi

if [[ -x "script.sh" ]]; then
    echo "Es ejecutable"
fi
```

### Case

```bash
# Case statement
case $opcion in
    1)
        echo "Opción 1"
        ;;
    2)
        echo "Opción 2"
        ;;
    3|4)
        echo "Opción 3 o 4"
        ;;
    *)
        echo "Opción inválida"
        ;;
esac

# Ejemplo con extensión de archivo
case $archivo in
    *.txt)
        echo "Archivo de texto"
        ;;
    *.jpg|*.png)
        echo "Imagen"
        ;;
    *.sh)
        echo "Script de bash"
        ;;
    *)
        echo "Tipo desconocido"
        ;;
esac
```

### Bucles

```bash
# For - Iterando lista
for i in 1 2 3 4 5; do
    echo "Número: $i"
done

# For - Rango
for i in {1..10}; do
    echo $i
done

for i in {0..100..10}; do  # De 0 a 100, de 10 en 10
    echo $i
done

# For - Estilo C
for ((i=0; i<10; i++)); do
    echo $i
done

# For - Archivos
for archivo in *.txt; do
    echo "Procesando: $archivo"
    cat "$archivo"
done

# For - Líneas de comando
for linea in $(cat archivo.txt); do
    echo $linea
done

# While
contador=0
while [ $contador -lt 5 ]; do
    echo "Contador: $contador"
    ((contador++))
done

# While - Leer archivo línea por línea
while IFS= read -r linea; do
    echo "Línea: $linea"
done < archivo.txt

# Until (mientras sea falso)
contador=0
until [ $contador -ge 5 ]; do
    echo $contador
    ((contador++))
done

# Break y Continue
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        break  # Salir del bucle
    fi
    if [ $i -eq 3 ]; then
        continue  # Saltar a siguiente iteración
    fi
    echo $i
done
```

---

## 🔧 Funciones

```bash
# Definir función
function saludar() {
    echo "Hola $1"
}

# Forma alternativa
saludar() {
    echo "Hola $1"
}

# Llamar función
saludar "Juan"

# Función con retorno
sumar() {
    local resultado=$(($1 + $2))
    echo $resultado
}

suma=$(sumar 5 3)
echo "Suma: $suma"

# Función con return (código de salida)
es_par() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # Verdadero
    else
        return 1  # Falso
    fi
}

if es_par 4; then
    echo "4 es par"
fi

# Variables locales
ejemplo() {
    local var_local="solo aquí"
    var_global="visible afuera"
}

# Función con argumentos
procesar_archivos() {
    echo "Total argumentos: $#"
    echo "Argumentos: $@"
    
    for archivo in "$@"; do
        echo "Procesando: $archivo"
    done
}

procesar_archivos archivo1.txt archivo2.txt archivo3.txt
```

---

## 🧮 Operaciones Matemáticas

```bash
# Aritmética básica con $(( ))
a=5
b=3
suma=$((a + b))              # 8
resta=$((a - b))             # 2
multiplicacion=$((a * b))    # 15
division=$((a / b))          # 1 (división entera)
modulo=$((a % b))            # 2
potencia=$((a ** b))         # 125

# Incremento/Decremento
((a++))
((a--))
((a += 5))
((a -= 3))
((a *= 2))

# expr (antiguo, no recomendado)
suma=$(expr $a + $b)

# bc para decimales
resultado=$(echo "scale=2; 10 / 3" | bc)  # 3.33
resultado=$(echo "sqrt(16)" | bc)          # 4

# Operaciones complejas con bc
pi=$(echo "scale=10; 4*a(1)" | bc -l)
```

---

## 📋 Arrays

```bash
# Declarar array
frutas=("manzana" "banana" "naranja")
numeros=(1 2 3 4 5)

# Acceder elementos
echo ${frutas[0]}            # manzana
echo ${frutas[1]}            # banana

# Todos los elementos
echo ${frutas[@]}            # Todos
echo ${frutas[*]}            # Todos (diferente en comillas)

# Cantidad de elementos
echo ${#frutas[@]}           # 3

# Agregar elemento
frutas+=("uva")

# Modificar elemento
frutas[1]="pera"

# Iterar array
for fruta in "${frutas[@]}"; do
    echo $fruta
done

# Iterar con índice
for i in "${!frutas[@]}"; do
    echo "Índice $i: ${frutas[$i]}"
done

# Slice (subarray)
echo ${frutas[@]:1:2}        # Desde índice 1, 2 elementos

# Arrays asociativos (diccionarios)
declare -A edades
edades[Juan]=25
edades[María]=30
edades[Pedro]=28

echo ${edades[Juan]}         # 25

# Iterar array asociativo
for nombre in "${!edades[@]}"; do
    echo "$nombre tiene ${edades[$nombre]} años"
done
```

---

## 🛠️ Procesos y Trabajos

### Gestión de Procesos

```bash
# Ver procesos
ps                           # Procesos del usuario
ps aux                       # Todos los procesos
ps aux | grep python         # Filtrar por nombre

# Árbol de procesos
pstree
pstree -p                    # Con PIDs

# Procesos en tiempo real
top                          # Actualización continua
htop                         # Versión mejorada (si está instalado)

# Información de proceso
pidof nombre_proceso
pgrep nombre

# Matar proceso
kill PID
kill -9 PID                  # Forzar (SIGKILL)
kill -15 PID                 # Terminar limpiamente (SIGTERM)
killall nombre_proceso
pkill nombre_patron
```

### Jobs (Trabajos)

```bash
# Ejecutar en background
comando &

# Suspender proceso actual (Ctrl+Z)
# Luego reanudar en background
bg

# Traer a foreground
fg

# Listar trabajos
jobs

# Reanudar trabajo específico
fg %1
bg %2

# Nohup - Ejecutar aunque se cierre terminal
nohup comando &
nohup script.sh > output.log 2>&1 &
```

---

## 🌐 Red y Conectividad

```bash
# Ping
ping google.com
ping -c 4 google.com         # 4 paquetes

# Información de red
ifconfig                     # Interfaces (deprecado)
ip addr                      # Interfaces (moderno)
ip route                     # Tabla de rutas

# DNS lookup
nslookup google.com
dig google.com
host google.com

# Puertos abiertos
netstat -tuln                # Escuchando
netstat -tunap               # Todas las conexiones
ss -tuln                     # Moderno (recomendado)
lsof -i :8080                # Proceso en puerto específico

# Descargar archivos
wget https://example.com/archivo.zip
wget -O nombre.zip https://example.com/archivo.zip

curl https://api.example.com
curl -O https://example.com/archivo.zip
curl -X POST -d "data" https://api.example.com

# Conexión SSH
ssh usuario@servidor
ssh -p 2222 usuario@servidor  # Puerto específico
scp archivo.txt usuario@servidor:/ruta/destino
scp -r carpeta/ usuario@servidor:/ruta/

# Transferir archivos
rsync -avz origen/ destino/
rsync -avz --delete origen/ usuario@servidor:/destino/
```

---

## 📦 Compresión y Archivos

```bash
# tar - Archivar
tar -cvf archivo.tar carpeta/       # Crear
tar -xvf archivo.tar                # Extraer
tar -tvf archivo.tar                # Listar contenido

# tar.gz - Comprimir con gzip
tar -czvf archivo.tar.gz carpeta/   # Crear comprimido
tar -xzvf archivo.tar.gz            # Extraer

# tar.bz2 - Comprimir con bzip2 (mejor compresión)
tar -cjvf archivo.tar.bz2 carpeta/
tar -xjvf archivo.tar.bz2

# zip/unzip
zip archivo.zip archivo1 archivo2
zip -r archivo.zip carpeta/
unzip archivo.zip
unzip -l archivo.zip                # Listar contenido

# gzip/gunzip
gzip archivo.txt                    # Crea archivo.txt.gz
gunzip archivo.txt.gz

# Opciones comunes de tar
# c: create, x: extract, v: verbose, f: file
# z: gzip, j: bzip2, t: list
```

---

## 🔎 Información del Sistema

```bash
# Sistema operativo
uname -a                     # Todo
uname -s                     # Kernel name
uname -r                     # Kernel release
cat /etc/os-release          # Distribución Linux

# Fecha y hora
date
date "+%Y-%m-%d"            # 2024-01-01
date "+%H:%M:%S"            # 14:30:00

# Uptime
uptime                       # Tiempo encendido

# Uso de disco
df -h                        # Sistemas de archivos
df -h /                      # Partición específica
du -sh carpeta/              # Tamaño de carpeta
du -h --max-depth=1          # Tamaños subdirectorios

# Memoria
free -h                      # Uso de RAM
free -m                      # En MB

# CPU
lscpu                        # Información CPU
nproc                        # Cantidad de núcleos

# Usuarios
whoami                       # Usuario actual
who                          # Usuarios conectados
w                            # Usuarios y qué hacen
id                           # UID, GID, grupos
last                         # Últimos logins

# Hardware
lshw                         # Todo el hardware
lspci                        # Dispositivos PCI
lsusb                        # Dispositivos USB
lsblk                        # Dispositivos de bloque
```

---

## 📜 Historial de Comandos

```bash
# Ver historial
history
history 20                   # Últimos 20

# Buscar en historial
history | grep "git"

# Ejecutar comando del historial
!123                         # Comando número 123
!!                           # Último comando
!-2                          # Penúltimo comando
!git                         # Último comando que empieza con git

# Buscar interactivo
Ctrl+R                       # Búsqueda reversa

# Limpiar historial
history -c

# Archivo de historial
cat ~/.bash_history
```

---

## 🎨 Scripts Útiles

### Script Básico

```bash
#!/bin/bash
# Script de ejemplo

# Variables
nombre="Mundo"
echo "Hola $nombre"

# Argumentos
echo "Script: $0"
echo "Primer argumento: $1"
echo "Todos los argumentos: $@"

# Verificar argumentos
if [ $# -eq 0 ]; then
    echo "Uso: $0 <nombre>"
    exit 1
fi

echo "Hola $1"
```

### Backup Script

```bash
#!/bin/bash

# Configuración
ORIGEN="/home/user/documentos"
DESTINO="/backup"
FECHA=$(date +%Y%m%d_%H%M%S)
ARCHIVO="backup_$FECHA.tar.gz"

# Verificar que existe origen
if [ ! -d "$ORIGEN" ]; then
    echo "Error: $ORIGEN no existe"
    exit 1
fi

# Crear backup
echo "Creando backup..."
tar -czf "$DESTINO/$ARCHIVO" "$ORIGEN"

if [ $? -eq 0 ]; then
    echo "Backup creado: $ARCHIVO"
else
    echo "Error al crear backup"
    exit 1
fi

# Limpiar backups antiguos (más de 7 días)
find "$DESTINO" -name "backup_*.tar.gz" -mtime +7 -delete
echo "Backups antiguos eliminados"
```

### Script de Menú

```bash
#!/bin/bash

while true; do
    clear
    echo "=== Menú Principal ==="
    echo "1. Ver fecha"
    echo "2. Listar archivos"
    echo "3. Ver procesos"
    echo "4. Salir"
    echo
    read -p "Seleccione opción: " opcion
    
    case $opcion in
        1)
            date
            ;;
        2)
            ls -lh
            ;;
        3)
            ps aux | head -10
            ;;
        4)
            echo "Saliendo..."
            exit 0
            ;;
        *)
            echo "Opción inválida"
            ;;
    esac
    
    echo
    read -p "Presione Enter para continuar..."
done
```

### Procesamiento de Logs

```bash
#!/bin/bash

LOGFILE="/var/log/apache2/access.log"

echo "=== Análisis de Log ==="
echo

echo "Total de peticiones:"
wc -l < "$LOGFILE"

echo
echo "Top 10 IPs:"
awk '{print $1}' "$LOGFILE" | sort | uniq -c | sort -rn | head -10

echo
echo "Top 10 URLs:"
awk '{print $7}' "$LOGFILE" | sort | uniq -c | sort -rn | head -10

echo
echo "Códigos de estado:"
awk '{print $9}' "$LOGFILE" | sort | uniq -c | sort -rn
```

---

## 💡 Tips y Trucos

### Atajos de Teclado

| Atajo | Acción |
| ----- | ------ |
| `Ctrl+C` | Interrumpir comando |
| `Ctrl+D` | Salir (EOF) |
| `Ctrl+Z` | Suspender proceso |
| `Ctrl+L` | Limpiar pantalla |
| `Ctrl+A` | Inicio de línea |
| `Ctrl+E` | Fin de línea |
| `Ctrl+U` | Borrar hasta inicio |
| `Ctrl+K` | Borrar hasta final |
| `Ctrl+W` | Borrar palabra anterior |
| `Ctrl+R` | Buscar en historial |
| `Tab` | Autocompletar |
| `Tab Tab` | Mostrar opciones |

### One-liners Útiles

```bash
# Encontrar archivos grandes
find / -type f -size +100M -exec ls -lh {} \; 2>/dev/null

# Listar archivos por tamaño
ls -lhS

# Uso de CPU por proceso
ps aux --sort=-%cpu | head -10

# Uso de memoria por proceso
ps aux --sort=-%mem | head -10

# Archivos modificados hoy
find . -type f -mtime 0

# Reemplazar en múltiples archivos
find . -name "*.txt" -exec sed -i 's/viejo/nuevo/g' {} \;

# Contar archivos en directorio
ls -1 | wc -l

# Ver puertos escuchando
netstat -tuln | grep LISTEN

# Extraer columna específica
awk '{print $3}' archivo.txt

# Suma de números en archivo
awk '{sum += $1} END {print sum}' numeros.txt

# IP pública
curl ifconfig.me

# Monitorear uso de disco en tiempo real
watch -n 1 df -h

# Generar contraseña aleatoria
openssl rand -base64 12

# Encontrar archivos duplicados
find . -type f -exec md5sum {} \; | sort | uniq -w32 -dD
```

---

## 🎓 Mejores Prácticas

:::tip Consejos para Scripts

1. **Siempre usa shebang** - `#!/bin/bash` al inicio
2. **Variables entre comillas** - `"$variable"` evita problemas con espacios
3. **Verifica códigos de salida** - `if [ $? -eq 0 ]`
4. **Usa variables locales** - `local` en funciones
5. **Comentar código** - Explica qué hace el script
6. **Validar entrada** - Verifica argumentos y archivos
7. **Set opciones** - `set -e` (salir en error), `set -u` (error en variables no definidas)
8. **Usar [[ ]]** - Más robusto que [ ]
9. **Nombres descriptivos** - Variables y funciones claras
10. **Manejo de errores** - Siempre considera qué puede fallar

:::

```bash
#!/bin/bash
set -euo pipefail  # Salir en error, variables no definidas, error en pipes

# Verificar argumentos
if [ $# -ne 2 ]; then
    echo "Uso: $0 <origen> <destino>" >&2
    exit 1
fi

# Variables
origen="$1"
destino="$2"

# Verificar que existe origen
if [ ! -f "$origen" ]; then
    echo "Error: $origen no existe" >&2
    exit 1
fi

# Resto del script...
```

---

## 📚 Recursos Adicionales

- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial)
- [ShellCheck](https://www.shellcheck.net/) - Validador de scripts
- [Explain Shell](https://explainshell.com/) - Explica comandos
- [Bash Guide](https://mywiki.wooledge.org/BashGuide)
- [Cheat Sheet Linux - Manz](https://terminaldelinux.com/terminal/cheatsheets/download/)
