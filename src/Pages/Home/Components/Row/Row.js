import React,{useState, useEffect, useContext} from 'react';
import axios from '../../../../utils/axios'
import requests, {requestImg} from '../../../../utils/requests'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useHistory} from 'react-router-dom'
import DataContext from '../../../../utils/Context/Data/DataContext'


import popCorn from './img/popCorn.jpg'

import './Row.scss'
const Row = ({ genre}) => {

    const { setSelectedMovie } = useContext(DataContext) 

    const history = useHistory()
    const {name} = genre;

    const [movies,setMovies] = useState([]);
    const [bgImg,setBgImg] = useState({});

    const showMovieDetails = (el) => {
        setSelectedMovie(el)
        history.push('/movie')
    }

    const saveMovieLikeList = async () =>{
        const res = await axios.get('/authentication/token/new?api_key=14d344666a5abe82c56c471106d9ecde')
        const requestToken = res.data.request_token;


        const data = await axios({ url: `/authenticate/${requestToken}?redirect_to=https://localhost:3000/`, baseURL: 'https://www.themoviedb.org' })
        // await fetch(``)
            
    }
    
    useEffect( ()=> {

        const fetchMovies = async () =>{
            const request = await axios.get(requests.fetchMoviesByGenreID(genre.id))
            await setMovies( request.data.results )
            const pathBGimg = request.data.results[0].backdrop_path
            setBgImg({backgroundImage: `url( ${ requestImg.fetchMovieImg(pathBGimg) } )`})

            return request;
        }
        fetchMovies();
    },[])

    return (
        <div className='rowComponent' style={bgImg}>
            <h1>{ name }</h1>
            <ul>
                {
                    movies.length > 0 &&
                    movies.map( (el,i)=>{
                        return <li key={i}>
                            <span>{el.name || el.title}</span><br/>
                            <span className="like" onClick={saveMovieLikeList}>LIKE</span>
                            <LazyLoadImage
                            effect='blur'
                                height="200px"
                                width='180px'
                                src={requestImg.fetchMovieImg(el.poster_path)} // use normal <img> attributes as props
                                placeholderSrc={popCorn}
                                onClick ={ ()=> showMovieDetails(el)}
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
