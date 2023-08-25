# PracticaRN-Login

### Setup
1. Clonar el repositorio
2. Abrir en dos ventanas de consola distintas el **Server** (`..\PracticaRN-Login\Server`) y el **Cliente** (`..\PracticaRN-Login\Client`)
3. Ejecutar `npm i` en las dos ventanas
4. Crear una base de datos titulada `loginRN`
5. Ejecutar la Query de SQL `..\PracticaRN-Login\Server\DBsetup.sql` en Microsoft SQL Server Management Studio
6. Ejecutar la Query de SQL `..\PracticaRN-Login\Server\DBuserQuery.sql` en Microsoft SQL Server Management Studio
7. Crear un archivo `.env` en `..\PracticaRN-Login\Server\` con el siguiente formato:
   ```
   DB_USER = "user"
   DB_PASSWORD = "user"
   DB_SERVER = [ServerName]
   DB_DATABASE = "loginRN"
   ```
8. Ejecutar el server (`..\PracticaRN-Login\Server`) con `npm run start`
9. Ejecutar el cliente (`..\PracticaRN-Login\Client`) con `expo start`
10. Listo!
