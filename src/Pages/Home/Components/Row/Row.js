import React,{useState, useEffect} from 'react';
import axios from '../../../../utils/axios'
import requests, {requestImg} from '../../../../utils/requests'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import popCorn from './img/popCorn.jpg'

import './Row.scss'
const Row = ({ genre}) => {
    const {name} = genre;

    const [movies,setMovies] = useState([]);

    useEffect( ()=> {

        const fetchMovies = async () =>{
            const request = await axios.get(requests.fetchMoviesByGenreID(genre.id))
            setMovies( request.data.results )
            console.log(request.data.results )
            return request;
        }
        fetchMovies();
        

    },[])

    return (
        <div className='row'>
            <h1>{ name }</h1>
            <ul>

                {

                    movies.length > 0 &&
                    movies.map( (el,i)=>{
                        return <li key={i}>
                            <span>{el.name || el.title}</span><br/>
                            {/* <img src={} alt={el.name}/> */}
                            <LazyLoadImage
                            effect='blur'
                                height="200px"
                                width='180px'
                                src={requestImg.fetchMovieImg(el.poster_path)} // use normal <img> attributes as props
                                placeholderSrc={popCorn}
                                 />
                                {/* src={requestImg.fetchMovieImg(el.backdrop_path)} // use normal <img> attributes as props */}

                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Row;
