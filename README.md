# Web de Matías · _mfo studio

Web estática (un solo `index.html`), lista para GitHub Pages. Sin dependencias ni compilación.

## Publicarla gratis en GitHub Pages (unos 10 minutos)

1. Entra en github.com y crea una cuenta si no tienes.
2. Pulsa **New repository**.
   - Nombre: `TU-USUARIO.github.io` (con tu usuario exacto). Así la web queda en `https://TU-USUARIO.github.io`.
   - Visibilidad: **Public** (Pages gratis lo exige).
   - Pulsa **Create repository**.
3. En el repositorio vacío, pulsa **uploading an existing file**.
   - Arrastra `index.html`, `README.md` y la carpeta `proyectos`.
   - Pulsa **Commit changes**.
4. Ve a **Settings → Pages**.
   - En *Source*, elige **Deploy from a branch**.
   - En *Branch*, elige `main` y la carpeta `/ (root)`. Pulsa **Save**.
5. En uno o dos minutos la web estará en `https://TU-USUARIO.github.io`.

## Añadir tus proyectos reales

1. Sube las imágenes a la carpeta `proyectos/` (JPG o WebP, unos 1600 px de ancho y menos de 500 KB).
2. En `index.html`, busca la lista `const P=[` y en cada proyecto añade, por ejemplo:
   `img:"proyectos/informe-anual.jpg"`
3. Cambia los textos `t` (título), `goal` (objetivo), `ch` (reto), `sol` (solución), `del` (entregables) y `ext` (extensión).
4. Para editar desde GitHub: abre el archivo, pulsa el lápiz, guarda con **Commit changes**. La web se actualiza sola.

## Usar tu dominio mfo.studio (opcional, gratis)

1. En **Settings → Pages → Custom domain**, escribe `mfo.studio` y guarda.
2. En el panel de tu proveedor de dominio, cambia los DNS:
   - Cuatro registros **A** para `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Un registro **CNAME** para `www` apuntando a `TU-USUARIO.github.io`
3. Cuando el certificado esté listo, activa **Enforce HTTPS**.

Ojo: al cambiar los DNS, mfo.studio deja de apuntar a tu web de Framer.

## Pendiente

- Retrato propio: sustituir el bloque con la "M" de la tarjeta de perfil.
- Enlaces reales de LinkedIn, Behance e Instagram (ahora apuntan a la página principal de cada red).
