//Components
export { Navbar } from './components/Navbar/index';
export { Login } from './components/Login/index';

//Models
export * from './models/Auth';

//Api

//Stores

import { useUserStore } from './lib/stores/userStore';

export default function (pinia) {
    const userStore = useUserStore(pinia)
    return {
        install(app: any) {
            app.provide('userStore', useUserStore)
        },
        userStore
    }
}
