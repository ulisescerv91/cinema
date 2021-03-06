const API_KEY = '14d344666a5abe82c56c471106d9ecde'

const request = {
    fetchTrending : `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchMoviesByGenreID : (id) => `/discover/movie/?api_key=${API_KEY}&with_genres=${id}`

}
export default request;

export const requestImg = {
    fetchMovieImg : (img) => `https://image.tmdb.org/t/p/original${img}`
}
