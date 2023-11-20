# Marketplace Baldo de Boldo

Este es un proyecto de comercio electrónico sencillo, desarrollado con fines meramente educativos durante el curso de React JS de Coderhouse. La aplicación permite explorar un catálogo de productos de mercado y realizar compras en línea. Tanto los productos como las órdenes de compra se almacenan en Firebase.

## Tecnologías empleadas
- Vite
- React
- React Router
- Firebase

## Funcionalidades
- Visualizar un listado de productos disponibles
- Añadir productos al carrito de compras
- Revisar el contenido del carrito de compras
- Realizar pedidos de compra

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y accede a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, sigue estos pasos:

1. Crea una cuenta en Firebase y establece un nuevo proyecto.
2. En la sección "Authentication" de Firebase, activa el proveedor de autenticación por correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solo a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
