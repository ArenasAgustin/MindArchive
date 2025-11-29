---
title: "Git Cheat Sheet"
description: "Guía rápida de referencia de Git: comandos esenciales, flujo de trabajo y mejores prácticas"
sidebar_position: 1
tags: [git, control-de-versiones, github, referencia, cheat-sheet]
---

Guía de referencia rápida con los comandos más importantes de Git.

---

## ⚙️ Configuración Inicial

```bash
# Configurar nombre y email (obligatorio)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Ver configuración
git config --list
git config user.name

# Configurar editor por defecto
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim

# Alias útiles
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --all"
```

---

## 🚀 Crear y Clonar Repositorios

```bash
# Inicializar repositorio nuevo
git init
git init nombre-proyecto

# Clonar repositorio existente
git clone https://github.com/usuario/repo.git
git clone https://github.com/usuario/repo.git mi-carpeta

# Clonar una rama específica
git clone -b nombre-rama https://github.com/usuario/repo.git
```

---

## 📝 Cambios Básicos

### Estado y Diferencias

```bash
# Ver estado de archivos
git status
git status -s  # Formato corto

# Ver cambios no preparados
git diff

# Ver cambios preparados (staged)
git diff --staged
git diff --cached

# Ver cambios de un archivo específico
git diff archivo.txt
```

### Agregar Archivos (Staging)

```bash
# Agregar archivo específico
git add archivo.txt

# Agregar todos los archivos modificados
git add .
git add -A

# Agregar archivos por extensión
git add *.js

# Agregar interactivamente (elegir qué cambios incluir)
git add -p
```

### Confirmar Cambios (Commit)

```bash
# Commit con mensaje
git commit -m "Mensaje descriptivo del commit"

# Commit con mensaje multilínea
git commit -m "Título del commit" -m "Descripción detallada"

# Agregar y hacer commit en un paso (solo archivos ya trackeados)
git commit -am "Mensaje"

# Modificar el último commit
git commit --amend -m "Nuevo mensaje"

# Agregar archivos al último commit sin cambiar mensaje
git add archivo-olvidado.txt
git commit --amend --no-edit
```

---

## 🌿 Ramas (Branches)

### Crear y Cambiar Ramas

```bash
# Listar ramas
git branch              # Locales
git branch -r           # Remotas
git branch -a           # Todas

# Crear nueva rama
git branch nombre-rama

# Cambiar a una rama
git checkout nombre-rama
git switch nombre-rama  # Comando moderno (Git 2.23+)

# Crear y cambiar a nueva rama
git checkout -b nombre-rama
git switch -c nombre-rama

# Renombrar rama actual
git branch -m nuevo-nombre

# Renombrar otra rama
git branch -m nombre-viejo nombre-nuevo
```

### Fusionar y Eliminar Ramas

```bash
# Fusionar rama en la actual
git merge nombre-rama

# Fusionar sin fast-forward (crear commit de merge)
git merge --no-ff nombre-rama

# Eliminar rama local (solo si está fusionada)
git branch -d nombre-rama

# Forzar eliminación de rama
git branch -D nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama
```

---

## 🔄 Sincronizar con Remoto

### Trabajar con Remotos

```bash
# Ver repositorios remotos
git remote -v

# Agregar remoto
git remote add origin https://github.com/usuario/repo.git

# Cambiar URL del remoto
git remote set-url origin https://github.com/usuario/nuevo-repo.git

# Eliminar remoto
git remote remove origin
```

### Push y Pull

```bash
# Subir cambios al remoto
git push origin main
git push origin nombre-rama

# Primera vez (establecer upstream)
git push -u origin main

# Subir todas las ramas
git push --all

# Subir tags
git push --tags

# Descargar cambios sin fusionar
git fetch origin

# Descargar y fusionar cambios
git pull origin main
git pull  # Si hay upstream configurado

# Pull con rebase en lugar de merge
git pull --rebase
```

---

## 📜 Historial

### Ver Commits

```bash
# Log completo
git log

# Log en una línea por commit
git log --oneline

# Log con gráfico de ramas
git log --oneline --graph --all

# Ver últimos N commits
git log -n 5

# Log de un archivo específico
git log archivo.txt

# Ver cambios introducidos en cada commit
git log -p

# Buscar en commits
git log --grep="palabra"
git log --author="nombre"

# Ver commits entre fechas
git log --since="2024-01-01" --until="2024-12-31"
```

### Ver Commit Específico

```bash
# Ver detalles de un commit
git show <hash>
git show HEAD
git show HEAD~1  # Commit anterior

# Ver archivos cambiados en un commit
git show --name-only <hash>
```

---

## ↩️ Deshacer Cambios

### Archivos No Preparados

```bash
# Descartar cambios en archivo (volver a último commit)
git checkout -- archivo.txt
git restore archivo.txt  # Comando moderno

# Descartar todos los cambios no preparados
git checkout -- .
git restore .
```

### Archivos Preparados (Staged)

```bash
# Quitar archivo del staging (mantener cambios)
git reset HEAD archivo.txt
git restore --staged archivo.txt  # Comando moderno

# Quitar todos del staging
git reset HEAD
git restore --staged .
```

### Commits

```bash
# Volver al commit anterior (mantener cambios)
git reset --soft HEAD~1

# Volver al commit anterior (descartar cambios del staging)
git reset --mixed HEAD~1  # Por defecto
git reset HEAD~1

# Volver al commit anterior (DESCARTAR TODO)
git reset --hard HEAD~1

# Volver a un commit específico
git reset --hard <hash>

# Crear commit que revierte cambios
git revert <hash>
git revert HEAD
```

:::danger Cuidado con `git reset --hard`
Este comando **ELIMINA** permanentemente los cambios. Úsalo solo si estás seguro.
:::

---

## 🏷️ Tags (Etiquetas)

```bash
# Crear tag ligero
git tag v1.0.0

# Crear tag anotado (recomendado)
git tag -a v1.0.0 -m "Versión 1.0.0"

# Listar tags
git tag
git tag -l "v1.*"

# Ver información de un tag
git show v1.0.0

# Subir tag al remoto
git push origin v1.0.0

# Subir todos los tags
git push --tags

# Eliminar tag local
git tag -d v1.0.0

# Eliminar tag remoto
git push origin --delete v1.0.0
```

---

## 🔍 Stash (Guardar Temporalmente)

```bash
# Guardar cambios temporalmente
git stash
git stash save "Mensaje descriptivo"

# Guardar incluyendo archivos no trackeados
git stash -u

# Listar stashes
git stash list

# Aplicar último stash (mantenerlo en la lista)
git stash apply

# Aplicar stash específico
git stash apply stash@{1}

# Aplicar y eliminar último stash
git stash pop

# Eliminar último stash
git stash drop

# Eliminar stash específico
git stash drop stash@{1}

# Eliminar todos los stashes
git stash clear

# Ver cambios en un stash
git stash show
git stash show -p  # Ver diff completo
```

---

## 🔀 Rebase

```bash
# Rebase de rama actual sobre otra
git rebase main

# Rebase interactivo (últimos 3 commits)
git rebase -i HEAD~3

# Continuar rebase después de resolver conflictos
git rebase --continue

# Abortar rebase
git rebase --abort

# Saltar commit problemático
git rebase --skip
```

### Rebase Interactivo - Comandos

| Comando | Descripción |
|---------|-------------|
| `pick` | Usar commit |
| `reword` | Usar commit pero editar mensaje |
| `edit` | Usar commit pero pausar para modificar |
| `squash` | Fusionar con commit anterior |
| `fixup` | Como squash pero descartar mensaje |
| `drop` | Eliminar commit |

:::warning Rebase en Ramas Públicas
**NO** hagas rebase de commits que ya subiste a ramas compartidas. Usa rebase solo en ramas locales o personales.
:::

---

## 🔧 Comandos Útiles

### Buscar y Limpiar

```bash
# Buscar texto en archivos
git grep "palabra"
git grep -n "palabra"  # Con número de línea

# Ver quién modificó cada línea
git blame archivo.txt

# Limpiar archivos no trackeados (dry-run)
git clean -n

# Limpiar archivos no trackeados
git clean -f

# Limpiar archivos y directorios
git clean -fd

# Limpiar incluyendo ignorados
git clean -fdx
```

### Información

```bash
# Ver cambios de archivo entre commits
git diff commit1 commit2 archivo.txt

# Ver archivos cambiados entre commits
git diff --name-only commit1 commit2

# Estadísticas de commits
git shortlog -sn
git shortlog -sn --all --no-merges

# Ver tamaño del repositorio
git count-objects -vH
```

---

## 🚨 Resolver Conflictos

```bash
# Durante un merge/rebase, si hay conflictos:

# 1. Ver archivos con conflictos
git status

# 2. Editar archivos manualmente
#    Buscar marcadores: <<<<<<<, =======, >>>>>>>

# 3. Marcar como resuelto
git add archivo-resuelto.txt

# 4. Continuar merge/rebase
git commit  # Para merge
git rebase --continue  # Para rebase

# Abortar merge/rebase
git merge --abort
git rebase --abort

# Usar versión de una rama específica
git checkout --ours archivo.txt    # Versión actual
git checkout --theirs archivo.txt  # Versión entrante
```

---

## 📋 .gitignore

```bash
# Sintaxis del archivo .gitignore

# Ignorar archivo específico
archivo.txt

# Ignorar todos los archivos con extensión
*.log
*.tmp

# Ignorar directorio
node_modules/
build/

# Excepto un archivo
*.log
!important.log

# Ignorar en cualquier subdirectorio
**/temp

# Ignorar solo en raíz
/config.json

# Comentarios
# Esto es un comentario
```

### Gitignore Global

```bash
# Crear gitignore global
git config --global core.excludesfile ~/.gitignore_global

# Ejemplo de contenido:
# .DS_Store (macOS)
# Thumbs.db (Windows)
# *.swp (Vim)
# .vscode/ (VS Code)
```

---

## 🌐 Flujo de Trabajo Común

### Feature Branch Workflow

```bash
# 1. Actualizar main
git checkout main
git pull origin main

# 2. Crear rama para feature
git checkout -b feature/nueva-funcionalidad

# 3. Hacer cambios y commits
git add .
git commit -m "feat: agregar nueva funcionalidad"

# 4. Subir rama
git push -u origin feature/nueva-funcionalidad

# 5. Crear Pull Request en GitHub

# 6. Después de aprobar PR, actualizar local
git checkout main
git pull origin main

# 7. Eliminar rama local
git branch -d feature/nueva-funcionalidad
```

### Gitflow

```bash
# Ramas principales
main (o master)     # Código en producción
develop             # Desarrollo activo

# Ramas de soporte
feature/*           # Nuevas funcionalidades
release/*           # Preparar nueva versión
hotfix/*            # Arreglos urgentes en producción

# Ejemplo: Nueva funcionalidad
git checkout develop
git checkout -b feature/login
# ... hacer cambios ...
git checkout develop
git merge feature/login

# Ejemplo: Release
git checkout develop
git checkout -b release/1.0.0
# ... ajustes finales ...
git checkout main
git merge release/1.0.0
git tag -a v1.0.0 -m "Versión 1.0.0"
git checkout develop
git merge release/1.0.0
```

---

## 💡 Mejores Prácticas

### Mensajes de Commit

```bash
# Formato recomendado (Conventional Commits)
tipo(scope): descripción corta

# Tipos comunes:
feat:     # Nueva funcionalidad
fix:      # Corrección de bug
docs:     # Cambios en documentación
style:    # Formato, punto y coma, etc (no código)
refactor: # Refactorización de código
test:     # Agregar tests
chore:    # Tareas de mantenimiento

# Ejemplos:
git commit -m "feat(auth): agregar login con Google"
git commit -m "fix(api): corregir endpoint de usuarios"
git commit -m "docs: actualizar README con instrucciones"
```

### Consejos

:::tip Buenas Prácticas

1. **Commits frecuentes y pequeños** - Facilita encontrar bugs y revertir cambios
2. **Mensajes descriptivos** - Explica QUÉ y POR QUÉ, no CÓMO
3. **Revisar cambios antes de commit** - Usa `git diff` y `git status`
4. **Un commit = una tarea** - No mezcles correcciones con features
5. **Probar antes de push** - Asegura que el código funciona
6. **Pull antes de push** - Evita conflictos innecesarios
7. **No subir archivos sensibles** - Usa .gitignore para credenciales
8. **Ramas para features** - No trabajes directamente en main

:::

---

## 🆘 Comandos de Emergencia

```bash
# Recuperar archivo eliminado
git checkout HEAD -- archivo.txt

# Recuperar commit después de reset hard (reflog)
git reflog
git checkout <hash-del-commit>

# Ver todos los cambios incluso después de reset
git reflog show
git reset --hard HEAD@{2}

# Encontrar commit que introdujo un bug (bisect)
git bisect start
git bisect bad          # Commit actual tiene el bug
git bisect good <hash>  # Commit que funcionaba
# Git irá a commits intermedios, marca cada uno:
git bisect good  # o git bisect bad
# Al terminar:
git bisect reset

# Recuperar después de eliminar rama
git reflog
git checkout -b rama-recuperada <hash>

# Encontrar en qué commit se introdujo un cambio
git log -S "código_buscado" --source --all
```

:::danger Reflog es temporal
El reflog solo mantiene información por ~30 días. No confíes en él como backup permanente.
:::

---

## 🔑 SSH con GitHub

```bash
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu@email.com"

# Agregar a ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar clave pública (agregar en GitHub)
cat ~/.ssh/id_ed25519.pub

# Probar conexión
ssh -T git@github.com

# Cambiar remoto a SSH
git remote set-url origin git@github.com:usuario/repo.git
```

---

## 📊 Alias Útiles

```bash
# Agregar estos alias a tu configuración

git config --global alias.st 'status -s'
git config --global alias.lg 'log --oneline --graph --all --decorate'
git config --global alias.last 'log -1 HEAD'
git config --global alias.unstage 'reset HEAD --'
git config --global alias.undo 'reset --soft HEAD~1'
git config --global alias.amend 'commit --amend --no-edit'
git config --global alias.branch-name 'rev-parse --abbrev-ref HEAD'
git config --global alias.contributors 'shortlog -sn --all --no-merges'

# Usar:
git st
git lg
git unstage archivo.txt
```

---

## 🎯 Comandos por Escenario

### "Quiero deshacer el último commit pero mantener cambios"

```bash
git reset --soft HEAD~1
```

### "Quiero deshacer TODO el último commit"

```bash
git reset --hard HEAD~1
```

### "Cambié archivos equivocados en el último commit"

```bash
git reset --soft HEAD~1
# Ahora haz git add solo de los archivos correctos
git commit -m "Mensaje"
```

### "Olvidé cambiar de rama antes de hacer cambios"

```bash
git stash
git checkout rama-correcta
git stash pop
```

### "Necesito los cambios de un commit específico en mi rama"

```bash
git cherry-pick <hash-del-commit>
```

### "Subí código con bugs a main"

```bash
# Si nadie más ha bajado los cambios:
git reset --hard HEAD~1
git push --force

# Si otros ya bajaron (crear revert):
git revert HEAD
git push
```

### "Quiero ver cambios sin fusionar"

```bash
git fetch origin
git log HEAD..origin/main
git diff HEAD origin/main
```

---

## 📚 Recursos Adicionales

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Cómo arreglar errores comunes
- [Git Explorer](https://gitexplorer.com/) - Encontrar comandos por tarea

---

## 🎓 Glosario

| Término | Descripción |
|---------|-------------|
| **Repository (Repo)** | Proyecto versionado con Git |
| **Working Directory** | Archivos actuales en tu carpeta |
| **Staging Area** | Cambios preparados para commit |
| **Commit** | Snapshot de cambios guardados |
| **Branch** | Línea independiente de desarrollo |
| **HEAD** | Puntero al commit actual |
| **Origin** | Nombre por defecto del remoto |
| **Upstream** | Rama remota de la que haces pull |
| **Fast-forward** | Merge sin commit adicional |
| **Merge Conflict** | Cambios contradictorios |
| **Remote** | Repositorio en servidor (GitHub, etc.) |
| **Clone** | Copia completa de un repositorio |
| **Fork** | Copia de repo en tu cuenta GitHub |
| **Pull Request (PR)** | Solicitud para fusionar cambios |
| **Hash** | ID único del commit (SHA-1) |
