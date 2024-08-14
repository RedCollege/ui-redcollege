<script setup lang="ts">
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { storeToRefs } from 'pinia'
import { useUserStore } from "@/lib/stores/userStore";
import { IconLayout2, IconHelp, IconHome, IconLogout } from '@tabler/icons-vue';
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
    logoUrl: string
}

const props = defineProps<Props>()
const selectedEstablecimientoId = ref(null)
const selectedPeriodoId = ref(null)
const selectedCursoId = ref(null)
const cookies = useCookies()
const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const modules : { link: string, title: string, subtitle: string, img: string, doHighlight: boolean } [] = [
{
    link: "https://convivenciaescolar.redcollege.net/",
    title: "Ayün",
    img: "https://login.redcollege.net/logos/modulos/ayun.svg",
    subtitle: "Convivencia Escolar",
    doHighlight: true
},
{
    link: "https://librodigital.redcollege.net",
    title: "Libro de Clases Digital",
    img: "https://login.redcollege.net/logos/modulos/libroClases.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://planificacion.redcollege.net",
    title: "Planificaciones Gantt",
    img: "https://login.redcollege.net/logos/modulos/planificacion.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://evaluaciones.redcollege.net",
    title: "Evaluaciones y Retroalimentación",
    img: "https://login.redcollege.net/logos/modulos/evaluaciones.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://nido.redcollege.net",
    title: "Nido",
    img: "https://login.redcollege.net/logos/modulos/nido.svg",
    subtitle: "Gestión de alumnos NEE",
    doHighlight: false
},
{
    link: "https://comunicaciones.redcollege.net/bandeja/recibidos",
    title: "Visto, +Comunicación",
    img: "https://login.redcollege.net/logos/modulos/comunicacion.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://centrodedatos.redcollege.net",
    title: "Centro de Datos",
    img: "https://login.redcollege.net/logos/modulos/centroDatos.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://aulavirtual.redcollege.net",
    title: "Aula Virtual",
    img: "https://login.redcollege.net/logos/modulos/aula.svg",
    subtitle: "",
    doHighlight: false
},
{
    link: "https://evaluaciones.redcollege.net/rubricas-v2/mibanco/listado",
    title: "Rúbricas",
    subtitle: "(En Mantención)",
    img: "https://login.redcollege.net/logos/modulos/rubricas.svg",
    doHighlight: false
}
]

const emit = defineEmits(['sucessLogout'])

function logout(){
    userStore.logout()
    emit('sucessLogout')
}

</script>

<template lang="pug">
.bg-white.py-2.shadow-sm
    .container.mx-auto(v-if="Boolean(cookies.get('isLoggedIn')) && user")
        .flex.items-center.gap-4
            .grow
                .flex.gap-2.items-center
                    img(:src="logoUrl", width="280")
                    NavigationMenu
                        NavigationMenuList
                            NavigationMenuItem
                                NavigationMenuTrigger
                                    .flex.gap-2.items-center.text-sky-700
                                        IconLayout2(size="25")
                                        p Mis Módulos
                                NavigationMenuContent
                                    ul(class="grid w-[500px] gap-2 p-4 grid-cols-2")
                                        li(v-for="module in modules", :key="module.title")
                                            NavigationMenuLink(as-child)
                                                a.relative(:href="module.link", target="_blank" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")
                                                    .flex.gap-2.items-center
                                                        img(:src="module.img", width="30px")
                                                        div
                                                            .text-sm.font-medium.leading-none {{  module.title  }}
                                                            p.line-clamp-2.text-sm.leading-snug.text-muted-foreground {{  module.subtitle  }}
                                                    .absolute.top-2.right-2(v-if="module.doHighlight")
                                                        p.bg-sky-700.text-white.font-medium.rounded-md.uppercase.px-2.py-1.animate-bounce(class="text-[.4rem]") Nuevo Módulo
            .flex-none
                NavigationMenu
                    NavigationMenuList(class="gap-2")
                        NavigationMenuItem
                            Select(v-model="selectedEstablecimientoId")
                                SelectTrigger
                                    SelectValue(placeholder="Elige un establecimiento")
                                SelectContent
                                    SelectGroup
                                        SelectLabel Mis Establecimientos
                                        SelectItem(:value="establecimiento.id", v-for="establecimiento in user.establecimientos", :key="establecimiento.id")
                                            .flex.gap-2.items-center
                                                img(:src="establecimiento.logo", width="25px")
                                                span {{  establecimiento.nombre }}
                        NavigationMenuItem
                            Select(:disabled="Number(selectedEstablecimientoId) <= 0", v-model="selectedPeriodoId")
                                SelectTrigger
                                    SelectValue(placeholder="Elige un año escolar")
                                SelectContent
                                    SelectGroup
                                        SelectLabel Años Escolares
                                        SelectItem(value="1") 2024
                                        SelectItem(value="2") 2023

                        NavigationMenuItem
                            Select(:disabled="Number(selectedPeriodoId) <= 0", v-model="selectedPeriodoId")
                                SelectTrigger
                                    SelectValue(placeholder="Elige un curso")
                                SelectContent
                                    SelectGroup
                                        SelectLabel Años Escolares
                                        SelectItem(value="1") 2024
                                        SelectItem(value="2") 2023

                        NavigationMenuItem
                            Separator(orientation="vertical", class="h-10")
                        NavigationMenuItem
                            DropdownMenu
                                DropdownMenuTrigger(as-child)
                                    Button(variant="ghost")
                                        Avatar(class="!h-8 !w-8")
                                            AvatarImage(:src="user.avatarUrl")
                                            AvatarFallback
                                DropdownMenuContent.w-56
                                    DropdownMenuLabel Mi Cuenta
                                    DropdownMenuSeparator
                                    DropdownMenuGroup
                                        DropdownMenuItem
                                            a.flex.gap-2.items-center(href="https://login.redcollege.net/")
                                                IconHome(size="20")
                                                span Inicio
                                        DropdownMenuItem
                                            a.flex.gap-2.items-center(href="https://redcollege.freshdesk.com/support/home", target="_blank")
                                                IconHelp(size="20")
                                                span Ayuda
                                        DropdownMenuSeparator
                                        DropdownMenuItem
                                            div.flex.gap-2.items-center(@click="logout")
                                                IconLogout(size="20")
                                                span Cerrar Sesión
</template>
