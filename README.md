# API - Hour App (TEST IAS)

_Rest API para prueba ingreso de IAS, Hour App_

## Empezamos 🚀

_Puedes usar esta API de forma local con las siguientes indicaciones:_

### Pre-requisitos 📋

_Necesitas tener instalado en tu servidor local:_

- [NPM](https://www.npmjs.com/) (Node package manager o gestor de paquetes de node)
- [Node](https://nodejs.org/es/) (Lenguaje de programación basado en JS)
- [Mysql](https://www.mysql.com/) (Gestor de base de datos)
- [Visual Studio Code](https://code.visualstudio.com/) (Text editor)
- [Git](https://git-scm.com/) (Control version to handle project's change)

### Instalación 🔧

_Además de tener instalado las herramientas anteriormente mencionadas, debe clonar el repositorio:_

```
$ git clone ...
```

_Esto, descargará los archivos del proyecto, paso siguiente, debe ingresar al root del proyecto e instalar las dependencias necesarias:_

```
$ cd ias_backend
$ npm install
```

_Luego, debe crear la BD en Mysql_

```
$ sudo mysql
mysql> create database ias_back;
mysql> use ias_back;
mysql> source database.sql;
mysql> exit;
```

_Esto generará una base de datos con un respaldo de datos existentes en el archivo database.sql situado en el root del proyecto_

## Ejecutando pruebas unitarias ⚙️

_Aún no hay pruebas unitarias_

## Desarrollado con 🛠️

_Herramientas usadas para el desarrollo de esta Rest API_

- [Nodejs](https://nodejs.org/es/) - Lenguaje de programación basado en JS
- [Express](https://expressjs.com/es/) - Framework de Nodejs
- [NPM](https://www.npmjs.com/) - Gestor de paquetes
- [Mysql](https://www.mysql.com/) - Gestor de BD
- [Postman](https://www.postman.com/) - Cliente Rest

## Documentation 📖

Puedes ver la documentación de los endpoints desarrollados en el siguiente link: [Postman](https://warped-meadow-174085.postman.co/collections/7073048-66a0d9fd-8672-47ea-af10-bce61eaf0fe9?version=latest&workspace=f74bb8ec-1537-4074-80f6-0b56bd3ee09b)

## Versions 📌

## Se usó [SemVer](http://semver.org/) para manejar el versionamiento. Se puede ver el versionamiento del proyecto en el link de [versiones](...).

⌨️ Coding with love ❤️ by Carlos Echeverria 😊
