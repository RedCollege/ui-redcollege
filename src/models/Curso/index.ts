export interface ICursoEstablecimientoResponse {
    id: number
    curso: any
    seccion: string
    isDinamico: boolean
    created_at: string
    updated_at: string
    nombre: any
    decreto: any
    anio: any
    sige_id: number
    cupos: number
    identificadorSala: string
    isConfigured: boolean
    sige: Sige
    __meta__: Meta
}

export interface Sige {
    id: number
    tipo_ensenanza_id: number
    descripcion: string
    codigo_grado_id: number
    descripcion_grado: string
    tag: string
}

export interface Meta {
    matriculados: string
    estudiantesPie: string
}
