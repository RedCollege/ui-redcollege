import { ref, inject } from 'vue'
import { defineStore } from 'pinia';
import type { IAuthUsuarioResponse } from '@/models/Auth';
import { useCookies } from '@vueuse/integrations/useCookies'
import { Router } from 'vue-router'
import { ofetch } from "ofetch";

export const useUserStore = defineStore('user', () => {

    const cookies = useCookies()
    const user = ref<IAuthUsuarioResponse>()
    const isLoggedIn = ref<Boolean>(false)
    const bearerToken = ref<String>()
    let router: Router



    function loadInstance(routerInstance: Router) {
        router = routerInstance
        isLoggedIn.value = cookies.get('isLoggedIn') as Boolean
        bearerToken.value = cookies.get('auth._token.local') ?? ""
        if(isLoggedIn.value){
            const userLocalStorage = localStorage.getItem('loggedUser')
            if(userLocalStorage && JSON.parse(userLocalStorage)){
                loadUser(JSON.parse(userLocalStorage) as IAuthUsuarioResponse)
            }
        }
    }



    async function login(apiUrl: string, correo: string, password: string){
        const { data } = await ofetch(`${apiUrl}/auth/iniciarSesion`, {
            method: 'POST',
            body: {
                correo: correo,
                clave: password
            }
        });

        if(data){
            const token = `${data.type} ${data.token}`
            const { data : usuario } = await ofetch(`${apiUrl}/auth/usuario/autenticado`, {
                method: 'GET',
                headers: {
                    Authorization: token
                },
            });

            if(usuario){
                cookies.set('auth._token.local', token, {
                    //domain: 'redcollege.net'
                })
                cookies.set('isLoggedIn', true, {
                    //domain: 'redcollege.net'
                })
                localStorage.setItem('loggedUser', JSON.stringify(usuario))
                loadUser(usuario as IAuthUsuarioResponse)
                isLoggedIn.value = true
                router?.push({
                    name: 'index'
                })
            }

        }

    }

    function loadUser(loggedUser: IAuthUsuarioResponse){
        user.value = loggedUser
    }

    function logout(){
        cookies.remove('auth._token.local')
        cookies.set('isLoggedIn', false)
        localStorage.removeItem('loggedUser')
        loadUser({} as IAuthUsuarioResponse)
        isLoggedIn.value = false
        router?.push({
            name: 'login'
        })
    }

    return {
        user, loadUser, logout, isLoggedIn, login, loadInstance
    }
})
