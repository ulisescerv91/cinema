import React,{useContext, useEffect, useState} from 'react';
import './Movie.scss'
import {useHistory} from 'react-router-dom'
import axios from '../../utils/axios'
import requests, {requestImg} from '../../utils/requests'

import DataContext from '../../utils/Context/Data/DataContext'

const Movie = () => {
    const history = useHistory();
    const [movie, setMovie] = useState(null)
    const { selectedMovie } = useContext(DataContext) 
    useEffect( ()=>{
        const fetchMovieData = async () =>{
            const request = await axios.get(setMovie(requests.fetchMovieDetails(selectedMovie.id)))            
            console.log(request)
            // await setMovie( request.data.results )

            return true;
        }
        fetchMovieData();
        
        
    },[] )

    if(selectedMovie === null) {
        history.push('/')
        return false;
    }

    
    // const {title, original_title, overview, release_date, vote_average, genre_ids, backdrop_path} = selectedMovie;

    return (
        <div>
            hi
            {/* <img src={requestImg.fetchMovieImg(backdrop_path)} alt=""/>
            <h1>{title || original_title}</h1>
            <span>Release { release_date.substr(0,4)} </span>
            <span>{vote_average}</span>
            <div>
                {
                    //Genres
                }
            </div>
            <p>{overview}</p> */}
        </div>
    );
}

export default Movie;
