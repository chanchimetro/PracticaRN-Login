<!-- Improved compatibility of volver al inicio link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PracticaRN-Login</h3>

  <p align="center">
    Este es un servicio de Login y Registro, armado en React Native 
    <br />
    <a href="https://github.com/chanchimetro/PracticaRN-Login"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="T">View Demo</a>
    ·
    <a href="https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/issues">Report Bug</a>
    ·
    <a href="https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Setup</a>
      <ul>
        <li><a href="#prerequisites">Pre-requisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Este es un proyecto que provee un simple servicio de Login y Registro, ademas de un sistema de usuarios editables.

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>



### Construido con

* [![React][React.js]][React-url]
* ![Static Badge](https://img.shields.io/badge/React%20Native-black?style=for-the-badge&logo=react)
* ![Static Badge](https://img.shields.io/badge/Expo-black?style=for-the-badge&logo=expo)
* ![Static Badge](https://img.shields.io/badge/Axios-black?style=for-the-badge&logo=axios)

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>



<!-- GETTING STARTED -->
## Setup

### Prerequisitos

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* expo
  ```sh
  npx create-expo-app --template
  ```
* Microsoft SQL Server
  <p><a href="https://www.microsoft.com/es-ar/sql-server/sql-server-downloads">Descargar aquí</a></p>

### Instalación

1. Cloná el repo
   ```sh
   git clone https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main.git
   ```
2. Abrir en dos ventanas de consola distintas el **Server** (`..\PracticaRN-Login\Server`) y el **Cliente** (`..\PracticaRN-Login\Client`)
3. Ejecutar `npm i` en tanto en el **Server** como en el **Cliente**
4. Crear una base de datos titulada `loginRN` en Microsoft SQL Server Management Studio
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

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Login
- [X] Registro
- [X] Perfil
    - [X] Edición de perfil

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

<!-- CONTACT -->
## Contacto

Ignacio - chanchimetro@gmail.com

Project Link: [https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main](https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main)

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/https://github.com/chanchimetro/PracticaRN-Login/tree/main.svg?style=for-the-badge
[contributors-url]: https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/https://github.com/chanchimetro/PracticaRN-Login/tree/main.svg?style=for-the-badge
[forks-url]: https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/network/members
[stars-shield]: https://img.shields.io/github/stars/https://github.com/chanchimetro/PracticaRN-Login/tree/main.svg?style=for-the-badge
[stars-url]: https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/stargazers
[issues-shield]: https://img.shields.io/github/issues/https://github.com/chanchimetro/PracticaRN-Login/tree/main.svg?style=for-the-badge
[issues-url]: https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/issues
[license-shield]: https://img.shields.io/github/license/https://github.com/chanchimetro/PracticaRN-Login/tree/main.svg?style=for-the-badge
[license-url]: https://github.com/https://github.com/chanchimetro/PracticaRN-Login/tree/main/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[ReactNative.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
