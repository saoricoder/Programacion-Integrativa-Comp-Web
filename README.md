# Programación Integrativa - Computación Web

Proyecto de prácticas del semestre de Programación Web. Contiene ejercicios y ejemplos de:

- Manipulación del DOM con JavaScript
- Eventos y formularios
- Programación orientada a objetos en JavaScript
- Web Components y Custom Elements
- Ejercicios con frameworks tipo React
- Ejercicios de interfaces y persistencia de datos

## Estructura general

- `Actividades 1P/`
  - Prácticas del primer parcial: DOM, eventos, POO, Web Components.
- `Actividades 2P/`
  - Tareas del segundo parcial: controles UI, listas, formularios y persistencia.
- `Contenido Practice 1P/`
  - Ejemplos y prácticas adicionales de HTML/CSS/JS y Web Components.
- `Contenido Practice 2P/`
  - Trabajos más avanzados de Web Components y componentes personalizados.
- `PRE - Requisito 0 .../` y `PRE - Requisitos 1 .../`
  - Ejercicios previos de estructura web y manejo/manipulación del DOM.
- `binding/`
  - Ejemplos de enlace y actualización de datos en la interfaz.
- `wc/`
  - Ejemplos de Custom Elements, templates, slot, lifecycle callbacks y más.

## Tecnologías usadas

- HTML
- CSS
- JavaScript
- Web Components (Custom Elements, Shadow DOM, templates, slots)
- React (en algunas tareas de segundo parcial)
- Node.js/npm para ejecutar proyectos React localmente cuando corresponda

## Cómo ejecutar el proyecto

### 1. Abrir archivos HTML estáticos

La mayoría del contenido es estático y se puede abrir directamente en el navegador:

1. Navegar a la carpeta del ejercicio.
2. Abrir el archivo `index.html` con el navegador.

### 2. Usar un servidor local

Para evitar problemas con CORS o rutas relativas, se recomienda levantar un servidor local desde la raíz del proyecto:

```bash
cd /workspaces/Programacion-Integrativa-Comp-Web
python3 -m http.server 8000
```

Luego abrir en el navegador:

`http://127.0.0.1:8000`

### 3. Proyectos React

La tarea `Actividades 2P/Tarea 2.3 Manejo de FORMULARIOS en frameworks de web components React/src` incluye un proyecto React ejecutable.

Para levantarlo:

```bash
cd "Actividades 2P/Tarea 2.3 Manejo de FORMULARIOS en frameworks de web components React/src"
npm install
npm start
```

Esto abrirá la aplicación en el navegador normalmente en `http://localhost:3000`.

> Nota: otras carpetas de `Actividades 2P/` tienen archivos `.zip` con material y ejemplos adicionales que pueden requerir extracción antes de usarlos.

## Ejemplos de funcionamiento

- `Rodriguez_Betty_DOM_1_ClassName_Id_Name_1.2/`
  - Prácticas de selectores DOM: `getElementById`, `getElementsByClassName`, `querySelector`, etc.
- `Rodriguez_Betty_events_1.4/`
  - Ejemplos de eventos de usuario y manejo de listeners.
- `Rodriguez_Betty_js_poo_1.1/`
  - Ejercicios de programación orientada a objetos en JavaScript.
- `Rodriguez_Betty_ustom Element de Web Components_1.3/`
  - Componentes personalizados como calculadora y mensajes.
- `wc/`
  - Ejemplos de ciclos de vida de Web Components, atributos observados, `shadow DOM`, `slot`, `template`, etc.

## Recomendaciones

- Usar un editor moderno como VS Code.
- Si se abre el proyecto con un servidor, evitar abrir archivos directamente desde `file://`.
- Para las tareas React, verificar que `npm install` se ejecute correctamente antes de `npm start`.

