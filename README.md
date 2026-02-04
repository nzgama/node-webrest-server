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


## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (puedes usar `.env.example` como referencia):

```env
PORT=3000
PUBLIC_PATH=public
POSTGRES_USER=usuario
POSTGRES_DB=midb
POSTGRES_PASSWORD=secreto
```

## Uso con Docker (PostgreSQL)

Para levantar la base de datos PostgreSQL con Docker:

```bash
docker-compose up -d
```

Esto creará un contenedor con la base de datos accesible en el puerto 5432.

## Ejecutar con Node.js nativo (sin Express)

Puedes probar el servidor HTTP nativo:

```bash
npm run dev:http
# o
ts-node src/app.http.ts
```

Y el servidor HTTP2 (requiere certificados en la carpeta `keys/`):

```bash
ts-node src/app.http2.ts
```

## Endpoints de la API TODOs

La API RESTful para TODOs está disponible en `/api/todos`:

- `GET    /api/todos`         → Lista todos los TODOs
- `GET    /api/todos/:id`     → Obtiene un TODO por ID
- `POST   /api/todos`         → Crea un nuevo TODO (body: `{ text }`)
- `PUT    /api/todos/:id`     → Actualiza un TODO (body: `{ text, completedAt }`)
- `DELETE /api/todos/:id`     → Elimina un TODO

## Notas
- El servidor sirve archivos estáticos desde la carpeta `public`.
- Puedes modificar los certificados en la carpeta `keys/` para pruebas con HTTP2.
- Todas las rutas no gestionadas responderán con el archivo `index.html` (SPA).


Desarrollado por [Tu Nombre].
