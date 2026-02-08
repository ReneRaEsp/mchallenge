# User Management Dashboard - Tech Challenge
Este proyecto es una solución técnica desarrollada para un proceso de selección. Consiste en un Dashboard de gestión de usuarios construido con Vue 3, TypeScript y Vuetify, siguiendo las mejores prácticas de arquitectura de software y escalabilidad.

## 🚀 Demo
Puedes ver la aplicación en vivo aquí: https://6988d3cad3572e93d7ef0069--mchallenge.netlify.app/

## 🛠️ Tecnologías y Stack
Framework: Vue.js 3 (Composition API con <script setup>)

Lenguaje: TypeScript (Tipado estricto para modelos de datos)

State Management: Pinia (Gestión de estado global centralizada)

UI Framework: Vuetify 3 (Diseño basado en Material Design)

Herramienta de Construcción: Vite

Iconos: Material Design Icons (MDI)

## 📋 Características y Requerimientos
Listado de Usuarios: Consumo de API REST y almacenamiento en estado global (Pinia).

Componentes Reutilizables: Implementación de una BaseTable genérica utilizando Scoped Slots y Generics de TypeScript.

Gestión de Estado: Manejo de indicadores de carga (loading states) y persistencia en memoria durante la sesión.

Arquitectura Limpia: Separación de responsabilidades mediante Composables para lógica de negocio e Interfaces para contratos de datos.

## ⚙️ Instalación y Configuración
Clonar el repositorio:

git clone https://github.com/ReneRaEsp/mchallenge
cd mchallenge
Instalar dependencias:

npm install
Ejecutar en modo desarrollo:

npm run dev
Construir para producción:

npm run build
