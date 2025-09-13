# React Component Patterns

Implementación práctica de distintos **patrones de componentes avanzados** en React con TypeScript, donde se exploramos técnicas de diseño modernas para crear componentes reutilizables, escalables y mantenibles.

> **Este proyecto contiene múltiples ramas, cada una dedicada a una práctica o patrón diferente de componentes en React. La rama `master` solo muestra una parte del contenido.**
>
> Para ver ejemplos completos y todas las prácticas, explora las siguientes ramas:
>
> - `master`: Introducción y base del proyecto
> - `component-control-props`: Ejemplo de Control Props Pattern
> - `component-control-props-alt`: Variante alternativa de Control Props
> - `component-control-props-alternative`: Otra alternativa de Control Props
> - `component-state-initializer`: Inicialización de estado en componentes
> - `control-props`: Práctica de control de props
> - `forms`: Ejemplos de formularios con Formik y Yup
> - `forms-dynamic`: Formularios dinámicos generados desde JSON
> - `pre-npm`: Versión previa a la gestión con npm
>
> Puedes cambiar de rama con:
> ```bash
> git checkout <nombre-de-la-rama>
> ```

## Objetivo

El proyecto demuestra la implementación de varios patrones de diseño de componentes en React, incluyendo:

- **Compound Component Pattern** - Componentes que trabajan juntos como una unidad
- **Extensible Styles** - Estilos flexibles y personalizables
- **Control Props Pattern** - Control externo del estado de componentes
- **Higher-Order Components (HOC)** - Componentes de orden superior
- **Custom Hooks** - Lógica reutilizable
- **Lazy Loading** - Carga diferida de componentes
- **Dynamic Forms** - Formularios generados dinámicamente

## Tecnologías Utilizadas

- **React 18.3** - Biblioteca de interfaz de usuario
- **TypeScript 5.5** - Tipado estático
- **Vite 5.4** - Herramienta de construcción y desarrollo
- **React Router DOM 6.27** - Enrutamiento
- **Formik 2.4** - Manejo de formularios
- **Yup 1.6** - Validación de esquemas
- **CSS Modules** - Estilos modulares

## Patrones Implementados

### 1. Compound Component Pattern
Implementado en `ProductCard`, permite usar componentes de forma declarativa:

```tsx
<ProductCard product={product}>
  <ProductCard.Image />
  <ProductCard.Title />
  <ProductCard.Buttons />
</ProductCard>
```

### 2. Extensible Styles
Soporte para estilos personalizables a través de props:

```tsx
<ProductCard 
  className="custom-class" 
  style={{ backgroundColor: '#70D1F8' }}
>
  <ProductCard.Image className="custom-image" />
</ProductCard>
```

### 3. Control Props Pattern
Control externo del estado del componente:

```tsx
const { count, increaseBy } = useProduct();
// Estado controlado externamente
```

### 4. Dynamic Forms
Formularios generados dinámicamente desde JSON:

```tsx
// Configuración desde custom-form.json
<DynamicForm />
```

## Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone <repository-url>
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```
