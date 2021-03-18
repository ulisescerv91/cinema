
import React, { useReducer } from 'react'
import axios from '../../axios'
//Definicion del estado
//Aqui se pondra el estado que se consumira y las funciones que alteran el estado
// useReducer -> alternativa a useState - 
import DataContext from './DataContext'
import DataReducer from './DataReducer';
import requests,{fetchTrendingMovies} from '../../requests'

const DataState = (props) => {

    const initialState = {
        genres: [],
        trending: [],
        selectedMovie: null,
    }

    const [state, dispatch] = useReducer(DataReducer, initialState)// !important to the context


    /**
     * 
     * @param TYPE Option to handle in DataReducer.js
     * @param PAYLOAD Data is send to  DataReducer.js save in the context
     * 
     */


    /**
     * * Get array with all name of genres movies
     */
    // const getGenres = async () => {
    //     try {
    //         const res = await axios.get(requests.fetchGenres).catch(error => console.log(error))
    //         const data = res.data.genres;
    //         dispatch({
    //             type: 'GET_GENRES',
    //             payload: data? data : []
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    /**
     * * Get Array with data of trendig movies
     */
    const getTrendingMovie = async () => {
        try {

            
            const data = await fetchTrendingMovies();
    // const movie = trendingArrayCtx[ Math.floor(Math.random() * trendingArrayCtx.length)  ]
           let movie = data[ Math.floor(Math.random() * data.length) ]
            dispatch({
                type: 'GET_TRENDING_MOVIES',
                payload: movie? movie : []
            })
            return movie;
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 
     *' Set the movie seleceted by user
     */
    const setSelectedMovie = (movie) => {
        dispatch({
            type: 'SET_MOVIE_SELECTED',
            payload: movie
        })
    }

    return (
        /**
         * * a la propiedad getGenres, ya no se le asigna nada, por que es como si se pusiera getGenres: getGenres
         */
        <DataContext.Provider value={{
            genresArrayCtx: state.genres,
            trendingRandomMovieCtx: state.trending,
            selectedMovie: state.selectedMovie,
            getTrendingMovie,
            setSelectedMovie
        }}>
            {
                props.children
            }
        </DataContext.Provider>
    )
}

export default DataState