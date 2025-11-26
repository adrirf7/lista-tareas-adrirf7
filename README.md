# 📝 Lista de Tareas - Vanilla JavaScript

Aplicación de gestión de tareas construida con **JavaScript vanilla** siguiendo patrones y arquitecturas profesionales. Este proyecto está diseñado para dominar fundamentos sólidos que facilitan la transición a frameworks modernos.

## 🎯 Propósito del Proyecto

Esta aplicación aplica **patrones arquitectónicos escalables** sin usar frameworks, lo que permite:

- **Comprender conceptos base** que frameworks como React, Vue o Angular abstraen
- **Dominar el patrón Store/State Management** similar a Redux o Pinia
- **Aplicar separación de responsabilidades** con casos de uso reutilizables
- **Entender el ciclo de vida del DOM** y la manipulación reactiva de la UI

## 🏗️ Arquitectura y Patrones

### **1. Patrón Store Centralizado**

```
src/store/todo.store.js
```

- Estado global centralizado (similar a Redux/Vuex)
- Funciones puras para gestionar el estado
- Persistencia en `localStorage`
- Sistema de filtros (All, Completed, Pending)

**Beneficio**: Al entender este patrón, trabajar con Redux, Zustand, Pinia o Context API será natural.

### **2. Modelo de Datos (Data Models)**

```
src/todos/models/todo.models.js
```

- Clases para definir la estructura de datos
- Generación de IDs únicos con `uuid`
- Timestamps automáticos (`createdAdd`)

**Beneficio**: Este concepto es fundamental en TypeScript y frameworks tipados.

### **3. Use Cases (Casos de Uso)**

```
src/todos/uses-cases/
  ├── create-todo-html.js
  ├── render-todos.js
  ├── render-pending.js
  └── index.js (barrel export)
```

- Funciones especializadas y reutilizables
- Lógica de negocio separada de la vista
- Renderizado condicional y dinámico

**Beneficio**: Este patrón es idéntico a los **custom hooks en React** o **composables en Vue 3**.

### **4. Componente Principal (App Component)**

```
src/todos/app.js + app.html
```

- Punto de entrada de la aplicación
- Event delegation y gestión de eventos
- Comunicación con el Store

**Beneficio**: Estructura equivalente a componentes en frameworks modernos.

## 🎨 Características Técnicas

### **CSS Moderno**

- Variables CSS para temas (modo claro/oscuro)
- Sistema de diseño con tokens (colores, espaciados, sombras)
- Responsive design con media queries
- Detección de dispositivos táctiles (`hover: none`)

### **JavaScript ES6+**

- Módulos ES6 (`import/export`)
- Destructuring y spread operators
- Arrow functions y template literals
- Classes y métodos estáticos

### **Persistencia de Datos**

- LocalStorage API para guardar estado
- Serialización/deserialización JSON
- Recuperación de datos al recargar

### **Herramientas de Desarrollo**

- **Vite**: Build tool ultrarrápido (HMR, bundling optimizado)
- Estructura modular y escalable

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 💡 Beneficios para el Futuro

| Concepto Aprendido | Equivalente en Frameworks               |
| ------------------ | --------------------------------------- |
| Store centralizado | Redux, Zustand, Pinia, Context API      |
| Use Cases          | Custom Hooks (React), Composables (Vue) |
| Event delegation   | Event handlers en componentes           |
| Render functions   | JSX, Template Syntax                    |
| Data models        | TypeScript interfaces, Props typing     |
| CSS Variables      | CSS-in-JS, Styled Components            |
| Estado reactivo    | useState, ref/reactive                  |

### **Por qué esta base es poderosa:**

1. **Entiende el "cómo" y el "por qué"** - Los frameworks abstraen la complejidad, pero saber qué hay debajo te hace un mejor desarrollador

2. **Transición natural a frameworks** - La arquitectura de esta app es casi idéntica a una app React/Vue, solo cambia la sintaxis

3. **Debugging efectivo** - Conocer vanilla JS te permite debuggear problemas que otros no entienden

4. **Código mantenible** - Los patrones aplicados son estándares de la industria

## 🛠️ Stack Tecnológico

- **Vanilla JavaScript** (ES6+)
- **Vite** - Build tool
- **CSS3** - Variables, Flexbox, Grid
- **UUID** - Generación de identificadores únicos
- **LocalStorage API** - Persistencia

## 📚 Conceptos Clave Dominados

✅ State management  
✅ Separación de responsabilidades  
✅ Event-driven architecture  
✅ Functional programming patterns  
✅ Component-based architecture  
✅ Responsive & Accessible design  
✅ Theme switching (dark mode)  
✅ Module bundling (Vite)

---

**Desarrollado por** [adrirf7](https://adrirf7.vercel.app/)
