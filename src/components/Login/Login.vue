<script setup lang="ts">
import { useUserStore } from "@/lib/stores/userStore";
import { ofetch } from "ofetch";
import { useCookies } from '@vueuse/integrations/useCookies'
import type { IAuthUsuarioResponse } from '@/models/Auth';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router'

interface Props {
    apiUrl: string
}

const props = defineProps<Props>()
const emit = defineEmits(['successLogin'])
const correo = ref(null)
const password = ref(null)
const cookies = useCookies()
const userStore = useUserStore()

async function login(){
    await userStore.login(props.apiUrl, correo.value ?? "", password.value ?? "")
    //emit('successLogin', usuario as IAuthUsuarioResponse)
}



</script>

<template lang="pug">
div.w-full.bg-muted.relative
    .container(class="lg:grid  lg:grid-cols-6 ")
        div.flex.items-center.justify-center.py-12(class="lg:col-span-2")
            div.mx-auto.grid(class="gap-6")
                div.grid.gap-2.text-center
                    .flex.justify-center
                        img(src="https://www.redcollege.cl/wp-content/uploads/2023/07/LOGO-300x54.png", width="200")
                    h1.text-3xl.font-bold.text-sky-900
                        span ¡Nos encanta verte! 👋
                    p.text-balance.text-muted-foreground Por favor ingrese sus credenciales.
                form.grid.gap-4(@submit.prevent="login")
                    div.grid.gap-2
                        Label(for="email") Correo
                        Input#email(type="email" v-model="correo" placeholder="m@micolegio.com" required)
                    div.grid.gap-2
                        div.flex.items-center
                            Label(for="password") Contraseña
                            a.ml-auto.inline-block.text-sm.underline(href="https://login.redcollege.net/recover") ¿Olvidaste tu contraseña?
                        Input#password(type="password" v-model="password" required)
                    Button.w-full(type="submit") Iniciar Sesión
                div.mt-4.text-center.text-sm
                    | ¿Aún no eres partes de RedCollege?
                    a.underline(href="https://www.redcollege.cl/") Contáctanos
        div.hidden.h-screen(class="lg:block lg:col-span-4")
            div.flex.justify-center.items-center.h-full
                img(src="https://nido.redcollege.net/_nuxt/bgLogin.QiXsjYcd.svg" alt="Image"  class="object-cover dark:brightness-[0.2] dark:grayscale")
    .absolute.bottom-0.left-0.right-0.h-8.bg-sky-700
</template>
