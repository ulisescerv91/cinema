import React,{useState, useEffect} from 'react';
import './HomeInterface.scss'
import axios from '../../utils/axios'
import Header from './Components/Header/Header';
import Row from './Components/Row/Row';
import requests from '../../utils/requests'

const HomeInterface = () => {

    const [genres, setGenres] = useState([]);
    const [trending, setTrending] = useState([])


    useEffect( ()=> {

        const fetchData = async () =>{
            //Trending            
            const trendingRequest = await axios.get(requests.fetchTrending)
            setTrending(trendingRequest.data.results[3])

            // Genres
             const genresRequest = await axios.get(requests.fetchGenres)
             setGenres(genresRequest.data.genres)            
             
        }
        fetchData();
        
    },[])

    return (
        <div className='homeInterface'>
            <Header movie={trending}/>

            {
                genres.map( (el,i) => <Row genre={el} key={i}/>)
            }
            
            
            
        </div>
    );
}

export default HomeInterface;
