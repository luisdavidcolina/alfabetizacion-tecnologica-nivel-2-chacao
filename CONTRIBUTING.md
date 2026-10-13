# Cómo agregar láminas al material

El sitio publicado es https://alfabetizacion.luisdavidcolina.com y sale de la rama `main` de
este repositorio. Cada push a `main` lo vuelve a publicar solo, en uno o dos minutos. No hay
que avisar a nadie ni ejecutar ningún comando de despliegue.

## Antes de empezar

```bash
git clone https://github.com/luisdavidcolina/alfabetizacion-tecnologica-nivel-2-chacao
cd alfabetizacion-tecnologica-nivel-2-chacao
```

Para ver el sitio en la máquina antes de subir nada:

```bash
python -m http.server 8080
```

Y abrir http://localhost:8080. Abrir el `index.html` con doble clic no sirve, el navegador
bloquea los archivos JS cuando no hay servidor.

## Agregar una lámina

Son dos pasos. **Copiar el PDF no basta**, la lista de láminas del sitio está escrita a mano,
así que un PDF que no se agregue a esa lista queda invisible para quien visita la página.

### Paso 1: copiar el PDF

Va en la carpeta `laminas/`. Nombre de archivo sin espacios, sin paréntesis y sin acentos, con
guiones. Así:

```
laminas/nivel3-redes-sociales.pdf
```

Los nombres con espacios funcionan, pero obligan a escribir la dirección con `%20` en cada
hueco y es de donde salen la mayoría de los enlaces roto.

### Paso 2: agregarla a la lista

La lista está en `index.html`, dentro del bloque `<ul class="laminas-list">`. Copiar este
molde, pegarlo dentro de la lista y cambiar solo las tres partes marcadas:

```html
<li><a class="lamina-link" href="laminas/ARCHIVO.pdf" target="_blank" rel="noopener">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  TÍTULO DE LA LÁMINA <span class="lamina-peso">PDF · PESO MB</span>
</a></li>
```

- `ARCHIVO.pdf` es el nombre exacto del archivo que se copió en `laminas/`, con la misma
  ortografía y las mismas mayúsculas.
- `TÍTULO DE LA LÁMINA` es el nombre que va a leer la gente, no el del archivo.
- `PESO MB` es el peso redondeado del PDF, que se ve con clic derecho y propiedades.

El `<svg>` del medio es el icono del documento y se deja igual.

## Subir el cambio

```bash
git add laminas/nivel3-redes-sociales.pdf index.html
git commit -m "Lamina de redes sociales del nivel 3"
git push
```

## Comprobar que quedó bien

Esperar un par de minutos y abrir https://alfabetizacion.luisdavidcolina.com, entrar a la
sección Temario y bajar hasta "Láminas del curso". La lámina nueva tiene que aparecer en la
lista, y al hacerle clic el PDF debe abrirse en una pestaña nueva.

Si la lámina aparece pero el clic da error, el nombre del archivo en el `href` no coincide con
el nombre real del PDF. Es la falla más común y se arregla corrigiendo esa línea.

## Lo que conviene no tocar

- `js/app.js` y `css/styles.css`, que son el motor y el diseño del sitio.
- `index.html` fuera del bloque de la lista de láminas.
- Los archivos de `js/data/`, que son el contenido de módulos, tests, glosario y tips.

Si hace falta cambiar algo de eso, mejor avisar antes. Un push a `main` publica en vivo de una
vez y el sitio es estático, así que un error no detiene la publicación, sale al aire.
