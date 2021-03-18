import axios from 'axios'

const API_KEY = '14d344666a5abe82c56c471106d9ecde';
const baseURL = 'https://api.themoviedb.org/3';
const baseImgURL = 'https://image.tmdb.org/t/p/original';
const trendingMoviesURL = `${baseURL}/trending/movie/week`


const request = {
    fetchTrending : `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchMoviesByGenreID : id=>`/discover/movie/?api_key=${API_KEY}&with_genres=${id}`,
    fetchMovieDetails : id=>`/movie/${id}?api_key=${API_KEY}`


}
export default request;


export const fetchTrendingMovies = async () =>{
    try {
        const res = await axios.get(trendingMoviesURL,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
        
        return res.data.results;

    } catch (error) {
        console.log(error)
    }
}

export const requestImg = {
    fetchMovieImg : (img) => `https://image.tmdb.org/t/p/original${img}`
}
