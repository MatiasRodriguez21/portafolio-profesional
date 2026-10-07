# Matías Rodríguez — Portafolio profesional

Sitio para postulaciones: experiencia, proyectos con su caso completo, habilidades y CV (online y en PDF). En español e inglés.

## Estructura

```
index.html              Inicio: perfil, experiencia, proyectos, habilidades, formación y contacto
proyectos/*.html        Un caso por proyecto: contexto, qué construí, decisiones y resultado
cv/                     CV online en formato documento (listo para imprimir)
Rodriguez_Matias_CV.pdf CV descargable
styles.css · script.js  Estilos y lógica (idioma ES/EN, copiar email)
```

Sitio estático, sin dependencias. Cada texto tiene su versión `lang="es"` y `lang="en"`: al editar uno, actualizar los dos.

## Publicar con GitHub Pages

1. Subir el repositorio a GitHub.
2. En **Settings → Pages**, elegir la rama `main` y la carpeta `/ (root)`.
3. El sitio queda en `https://<usuario>.github.io/<repositorio>/`.

## Ver en local

```bash
python -m http.server 8000
```
