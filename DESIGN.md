# Sistema de Diseño y Estética Visual — Diego Barrio H.

Especificación detallada de la identidad visual, tokens de CSS, componentes interactivos y principios de maquetación del sitio web personal.

---

## Ficha Resumida (Design Tokens)

| Categoría | Propiedad | Tema Oscuro (Defecto) | Tema Claro |
| :--- | :--- | :--- | :--- |
| **Paleta Base** | Fondo (`--bg`) | `#06101a` (Azul profundo nocturno) | `#f4f9ff` (Azul glaciar claro) |
| | Superficie (`--surface`) | `#101f2e` (Azul marino medio) | `#ffffff` (Blanco puro) |
| | Texto Principal (`--text`) | `#e8f2ff` (Azul suave polar) | `#102335` (Azul marino oscuro) |
| **Identidad** | Color Marca (`--brand`) | `#7000ff` (Púrpura eléctrico) | `#7000ff` (Púrpura eléctrico) |
| | Brillo Marca (`--brand-glow`) | `rgba(112, 0, 255, 0.26)` | `rgba(112, 0, 255, 0.18)` |
| **Bordes/Sombras**| Radio Grande (`--radius-lg`) | `26px` (Paneles contenedores) | `26px` |
| | Radio Medio (`--radius-md`) | `18px` (Tarjetas internas) | `18px` |
| | Sombras (`--shadow-soft`) | `0 18px 48px rgba(4, 12, 20, 0.34)` | `0 12px 30px rgba(70, 107, 142, 0.12)` |

---

## Principios y Estructura Visual

El diseño está optimizado para transmitir rigor técnico y modernidad, utilizando principios de diseño UI premium:

### 1. Tipografía Cohesiva
* **Títulos y Texto:** Se utiliza **"Space Grotesk"** (Google Fonts) como tipografía principal. Destaca por su geometría limpia e industrial, ideal para perfiles técnicos.
* **Componentes y Datos:** Se emplea **"IBM Plex Mono"** para indicar fragmentos técnicos, tags, tecnologías, fechas y métricas, transmitiendo un tono ingenieril.

### 2. Estructura de Secciones (`.shell`)
Cada sección importante del portafolio (como *Proyectos*, *Experiencia*, *Lab*, *Contacto*) se agrupa dentro de una clase `.shell`:
* Cuenta con esquinas muy redondeadas (`26px`) y bordes semitransparentes mediante `color-mix`.
* Fondo de gradiente suave lineal de arriba a abajo.
* Un resplandor radial en la esquina superior izquierda (`::before`) que simula iluminación ambiental de fondo.

### 3. Grid Multicolumna
* El sistema emplea una rejilla de **12 columnas** (`.grid`) con un espacio entre celdas (`gap`) de `14px`.
* Las tarjetas estándares (`.card`) y las tarjetas de redes sociales (`.social-card`) ocupan un espacio de `span 6` (2 tarjetas por fila en escritorio).
* En pantallas móviles (inferiores a `820px`), el grid colapsa automáticamente a `1fr` (1 columna por fila) mediante media queries en [styles.css](file:///Users/diegobarrioh/code/diegobarrioh-dev/public/styles.css#L719-L728).

---

## Funcionalidades y Estado Dinámico

### Soporte Multilingüe Integrado (i18n)
La internacionalización es gestionada completamente en cliente mediante atributos HTML sin necesidad de frameworks de traducción pesados:
* Se usa el atributo `data-lang` en la etiqueta raíz `<html>`.
* Los bloques de texto traducibles usan las clases `.i18n` o `.i18n.inline`.
* La visibilidad de los elementos se controla dinámicamente mediante CSS:
  ```css
  [data-lang="es"] .i18n[data-lang="es"] { display: block; }
  [data-lang="en"] .i18n[data-lang="en"] { display: block; }
  ```

### Transición de Tema Claro/Oscuro
* Implementa una transición suave de colores mediante variables nativas CSS de modo que todo el sitio web responda dinámicamente al toggle de tema.
* El fondo principal del cuerpo (`body`) tiene un sutil patrón de ruido de fondo (`dbh-wall.jpg`) suavizado con gradientes de opacidad según el tema.

---

## Lista de Comprobación de Consistencia Visual

Cuando agregues nuevos módulos o modifiques layouts existentes, asegúrate de cumplir estos criterios:

- [ ] **Estructura semántica:** Utilizar `.section-header` con `<p class="eyebrow">` y `<h2>` para los títulos principales de sección.
- [ ] **Acciones principales:** Utilizar `.btn.primary` para el Call To Action destacado (e.g. reservar en Calendly, accesos primarios) y `.btn` simple para acciones secundarias.
- [ ] **Grid adaptativo:** Garantizar que los elementos dentro de `.grid` tengan asignado el span correcto (e.g., `span 6` para filas de 2 elementos) y respondan correctamente en móviles.
- [ ] **Textos multilingües:** Asegurarse de que cada nuevo párrafo o texto tenga su correspondiente duplicado en español (`data-lang="es"`) e inglés (`data-lang="en"`).
