# Proyecto 07-RESTWEB

Este proyecto es un ejemplo de servidor web utilizando Node.js y Express.

## Estructura del proyecto

- **src/**: Código fuente principal.
  - **presentation/server.ts**: Configuración y arranque del servidor Express.
- **public/**: Archivos estáticos servidos por el servidor (HTML, CSS, JS, imágenes).
- **package.json**: Dependencias y scripts del proyecto.
- **tsconfig.json**: Configuración de TypeScript.

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

O para compilar y ejecutar el servidor:

```bash
npm run build
npm start
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Notas
- El servidor sirve archivos estáticos desde la carpeta `public`.
- Todas las rutas no gestionadas responderán con "Hello World".

---

Desarrollado por [Tu Nombre].
