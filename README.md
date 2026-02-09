# Dashboard Listado de Usuarios - Desafío Técnico

Este proyecto es una solución técnica desarrollada para un proceso de selección. Consiste en un Dashboard de gestión de usuarios construido con Vue 3, TypeScript y Vuetify, siguiendo las mejores prácticas de arquitectura de software y escalabilidad.

## 🚀 Demo

Puedes ver la aplicación en vivo aquí: https://mchallenge.netlify.app/

## 🛠️ Tecnologías y Stack

Framework: Vue.js 3 (Composition API con <script setup>)

Lenguaje: TypeScript (Tipado estricto para modelos de datos)

Manejo de Estado: Pinia (Gestión de estado global de la aplicación)

Framework de UI: Vuetify 3 (Diseño basado en Material Design)

Herramienta de Construcción: Vite

Iconos: Material Design Icons (MDI)

Validaciones: VeeValidate

## 📋 Características y Requerimientos

Listado de Usuarios: Consumo de API REST, almacenamiento en estado global (Pinia) mediante la creación de una copia y la modificación de los registros dentro de dicha copia.

Componentes Reutilizables: Implementación de una Tabla genérica utilizando Scoped Slots y Generics de TypeScript.

Gestión de Estado: Manejo de indicadores de carga (loading) y persistencia en memoria durante la sesión.

Arquitectura Limpia: Separación de responsabilidades mediante Composables para lógica de negocio e Interfaces para contratos de datos.

## 🏗️ Estructura del Proyecto

src/ <br>
├── assets/ # Recursos estáticos <br>
├── components/ # Componentes de base y de negocio (Reutilizables) <br>
├── composables/ # Lógica de negocio extraída <br>
├── pages/ # Páginas principales de la aplicación <br>
├── schemas/ # Esquemas para las validaciones <br>
├── stores/ # Estados globales de la aplicación manejados con Pinia <br>
└── types/ # Definicion de typos de TypeScript <br>

## ⚙️ Instalación y Configuración

### Clonar el repositorio:

git clone https://github.com/ReneRaEsp/mchallenge

cd mchallenge

### Instalar dependencias:

npm install

### Ejecutar en modo desarrollo:

npm run dev

### Construir para producción:

npm run build
