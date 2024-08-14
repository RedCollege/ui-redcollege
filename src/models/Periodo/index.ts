export interface IPeriodoEscolarResponse {
    anio: PeriodoEscolar
}

export interface PeriodoEscolar {
    id: number
    periodo: number
    estado_id: number
    establecimiento_id: number
    created_at: string
    updated_at: string
    notaMinima: string
    porcentajeExigencia: number
}
