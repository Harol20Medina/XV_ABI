# Invitación Digital XV Años

Proyecto de invitación digital para quinceañera con React, Vite y Tailwind.

## Características incluidas

- Sección de bienvenida con tipografía elegante.
- Contador dinámico para el evento.
- Reproductor de audio interactivo.
- Sección de misa y recepción con botones de Google Maps.
- Itinerario y código de vestimenta.
- Confirmación de asistencia vía WhatsApp.
- Diseño responsive con Tailwind CSS.

## Instalación

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre la URL que muestra Vite.

## Audio

Coloca tu archivo de música en `public/musica.mp3`.

> Si deseas usar un video promocional en MP4, puedes añadirlo en `public/video.mp4` y crear un nuevo componente o sección en `src/App.jsx` para cargarlo.

## Build producción

```bash
npm run build
```

## Notas

- Si deseas reemplazar las imágenes de fondo, cambia las URL en `src/App.jsx`.
- El countdown usa la zona horaria local del navegador.
- El botón de confirmación abre WhatsApp en el móvil.
