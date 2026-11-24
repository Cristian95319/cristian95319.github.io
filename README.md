# Web de C. Matías Ferreira Olazar · Reporting Designer

Web bilingüe (español / inglés) creada a partir del Deck-Lite. Es estática: `index.html` + carpeta `img/`.

## Subir a GitHub Pages

1. En tu repositorio `cristian95319.github.io`, pulsa **Add file → Upload files**.
2. Arrastra `index.html`, `README.md` y la carpeta `img` entera. Si ya habías subido la versión anterior, se sustituye.
3. Pulsa **Commit changes**.
4. Si aún no lo hiciste: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.

La web: `https://cristian95319.github.io` (español: `#es`, inglés: `#en`).

## Idiomas

- El botón ES / EN de la barra cambia todo el contenido.
- La primera visita se abre en inglés si el navegador está en inglés, y en español en los demás casos. Después recuerda la elección.
- Para compartir una versión concreta: `.../#en` o `.../#es`.
- Los textos están en el bloque `const T=` (textos generales) y `const P=` (proyectos) de `index.html`, con `es` y `en` uno junto al otro.

## Fuentes (Adobe Fonts)

Century Gothic y Eurostile Extended se cargan desde Adobe Fonts con esta línea en `<head>`:

    <link rel="stylesheet" href="https://use.typekit.net/glz7oer.css">

Si prefieres tu proyecto **mfo web**: en fonts.adobe.com → Proyectos web → mfo web, copia su código de inserción y sustituye esa línea. Los nombres CSS que usa la web son `century-gothic` y `eurostile-extended`. Comprueba que tu proyecto use los mismos.

## Añadir un proyecto

1. Sube 4 imágenes a `img/` con este patrón: `nuevo-cover.webp`, `nuevo-1.webp`, `nuevo-2.webp`, `nuevo-3.webp`.
2. Copia un bloque de `const P=[...]`, cambia `id:"nuevo"` y los textos en los dos idiomas.
