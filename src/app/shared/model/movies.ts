export interface ImovieDeatails {
    page: number
    results: Imovie[]
    total_pages: number
    total_results: number
}

export interface Imovie {
    adult: boolean
    backdrop_path: string
    id: number
    title?: string
    original_language: string
    original_title?: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date?: string
    video?: boolean
    vote_average: number
    vote_count: number
    name?: string
    original_name?: string
    first_air_date?: string
    origin_country?: string[]
}

export interface ItrailerRes {
    id: number
    results: Itrailer[]
}

export interface Itrailer {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}
