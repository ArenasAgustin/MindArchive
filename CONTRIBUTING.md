# Guía para contribuir

¡Gracias por querer colaborar!

## Cómo reportar Issues

- Usa la plantilla **Bug Report** para errores.
- Usa la plantilla **Feature Request** para sugerencias.
- Proporcioná tantos detalles como puedas (entorno, pasos, resultados, capturas).

## Cómo enviar Pull Requests

1. Hacé fork del repositorio.
2. Creá una rama descriptiva:
   ```bash
   git checkout -b feature/mi-mejora
   ```
3. Implementá tus cambios.
4. Asegurate de seguir la plantilla de PR.
5. Enlazá el PR con una issue (por ejemplo: Closes #123).
6. Aguardá revisión o feedback.


## Estructura de Commits

Usamos el siguiente formato:
   ```bash
   tipo(scope): descripción breve
   Descripción detallada (opcional)
   ```

### Tipos permitidos

- **feat:** Nueva materia o contenido
- **docs:** Actualización de apuntes existentes
- **fix:** Corrección de errores o enlaces rotos
- **style:** Cambios de formato o estilo
- **refactor:** Reorganización de contenido
- **chore:** Tareas de mantenimiento

### Ejemplos

   ```bash
   feat(calculo): agregar apuntes unidad derivadas
   docs(fisica): actualizar ejercicios cinematica
   fix(links): corregir enlaces rotos en algebra
   ```

## Ramas

- **main:** Rama principal (siempre estable)
- **feature/nombre-materia:** Para agregar nuevas materias
- **update/materia-existente:** Para actualizar contenido existente

## Normas adicionales

- Usá nombres claros para commits ("Agrega sección de álgebra").
- Mantené el código limpio y legible.
- Documentá cambios relevantes en el README o en los docs, si corresponde.

— ¡Gracias por tu colaboración! —
