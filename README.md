# @redcollege/ui

![Logo de RedCollege](https://www.redcollege.cl/wp-content/uploads/2023/07/LOGO-300x54.png) <!-- Agrega tu logo aquí -->

@redcollege/ui es una colección de componentes de interfaz de usuario reutilizables diseñados para los productos de RedCollege. Construido con la API de composición de Vue 3 y estilizado con TailwindCSS, estos componentes tienen como objetivo proporcionar una interfaz de usuario coherente y flexible en todos nuestros proyectos. También se integra con Pinia para la gestión del estado, permitiendo almacenar datos como la información del usuario autenticado.

## Instalación

Para instalar el paquete, simplemente ejecuta:

```bash
npm install @redcollege/ui
```

## Uso

### Integración con Nuxt 3

Para usar `@redcollege/ui` en un proyecto Nuxt 3, necesitas crear un plugin con la siguiente configuración:

```javascript
// plugins/redcollege-ui.ts

import RedCollegeUI from '@redcollege/ui'
import { Navbar, Login } from '@redcollege/ui'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = useNuxtApp().$pinia;
    const router = useRouter();

    const { install, userStore } = RedCollegeUI(pinia);
    install(nuxtApp.vueApp)

    userStore.loadInstance(router)

    nuxtApp.vueApp.component('Navbar', Navbar)
    nuxtApp.vueApp.component('Login', Login)

    return {
        provide: {
            userStore
        }
    }
});
```

### Ejemplo de uso de componentes

Después de configurar el plugin, puedes utilizar los componentes en tus páginas o componentes de Vue 3:

```vue
<template>
  <div>
    <Navbar />
    <Login />
  </div>
</template>

<script setup lang="ts">
const { $userStore } = useNuxtApp();
</script>

<style>
/* Tus estilos personalizados aquí */
</style>
```

## Documentación

Para documentación detallada y ejemplos, por favor visita nuestro [repositorio en GitHub](https://github.com/RedCollege/ui-redcollege).

## Soporte

Si encuentras algún problema o tienes preguntas, no dudes en abrir un issue en nuestro [repositorio en GitHub](https://github.com/RedCollege/ui-redcollege/issues) o contactarnos en informatica@redcollege.net.

---

**¡Feliz coding!**
