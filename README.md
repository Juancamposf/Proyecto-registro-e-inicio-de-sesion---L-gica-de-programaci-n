# Proyecto de Gestión de Usuarios

Este proyecto permite a los usuarios registrarse, iniciar sesión y gestionar su inventario en una tienda. La aplicación utiliza HTML, CSS y JavaScript, junto con la biblioteca SweetAlert2 para mostrar alertas.

## Descripción General

### Funcionalidades

- **Registro de Usuarios:** Los usuarios pueden crear una cuenta proporcionando un nombre, correo electrónico y contraseña. Los datos se almacenan en el almacenamiento local del navegador.
  
- **Inicio de Sesión:** Los usuarios pueden iniciar sesión utilizando su correo electrónico y contraseña. Se verifica que las credenciales coincidan con las almacenadas.

- **Gestión de Inventario:** Los usuarios pueden gestionar su inventario en una tienda (aunque esta funcionalidad no se ha detallado en el código proporcionado).

### Estructura de Archivos

- **index.html:** Página principal donde se muestra el contenido y el botón de cierre de sesión.
- **login.html:** Página para que los usuarios inicien sesión.
- **signup.html:** Página para el registro de nuevos usuarios.
- **js/**: Carpeta que contiene los scripts JavaScript para manejar la lógica de la aplicación.
  - **index.js:** Maneja la lógica de cierre de sesión.
  - **login.js:** Maneja el inicio de sesión de los usuarios.
  - **signup.js:** Maneja el registro de nuevos usuarios.

## Funcionamiento

1. **Registro de Usuarios:**
   - Cuando un usuario se registra, se verifica si el correo electrónico ya existe en el almacenamiento local. Si no existe, se almacenan los datos del nuevo usuario.

2. **Inicio de Sesión:**
   - Al intentar iniciar sesión, se busca al usuario en el almacenamiento local. Si las credenciales son correctas, se redirige al usuario a la página principal.

3. **Cierre de Sesión:**
   - Al hacer clic en el botón de cierre de sesión, se realiza una confirmación de la decisión y si esta es aceptada, se lleva al usuario a la página de registro.

## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `signup.html` en tu navegador.
3. Regístrate o inicia sesión para comenzar a gestionar tu inventario.

