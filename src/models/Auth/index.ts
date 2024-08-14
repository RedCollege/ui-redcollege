export interface IAuthUsuarioResponse {
    id: number
    correo: string
    rut: string
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    avatarUrl: string
    cargo: string
    segundoNombre: string
    establecimientos: IEstablecimientoResponse[]
    roles: IRoleResponse[]
}

export interface IEstablecimientoResponse {
    id: number
    nombre: string
    rbd: string
    logo: string
}



export interface IRoleResponse {
    id: number
    nombre: string
}

