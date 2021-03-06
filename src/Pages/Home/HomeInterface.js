import React,{useState, useEffect} from 'react';
import './HomeInterface.scss'
import axios from '../../utils/axios'
import Header from './Components/Header/Header';
import Row from './Components/Row/Row';
import requests from '../../utils/requests'

const HomeInterface = () => {

    const [genres, setGenres] = useState([])

    useEffect( ()=> {

        const fetchGenres = async () =>{
             const genresRequest = await axios.get(requests.fetchGenres)
             setGenres(genresRequest.data.genres)
        }
        fetchGenres();
        
    },[])

    return (
        <div className='homeInterface'>
            <Header/>

            {
                genres.map( (el,i) => <Row genre={el} key={i}/>)
            }
            
            
            
        </div>
    );
}

export default HomeInterface;
