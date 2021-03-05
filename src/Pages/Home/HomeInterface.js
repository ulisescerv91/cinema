import React,{useState, useEffect} from 'react';
import './HomeInterface.scss'
import axios from '../../utils/axios'

const HomeInterface = ( {fetchURL} ) => {

    const [movies,setMovies] = useState([]);

    useEffect( ()=> {

        const fetchData = async () =>{
            const request = await axios.get(fetchURL)
            setMovies( request.data.results )
            console.log(request.data.results)
            return request;
        }
        fetchData();
        

    },[])

    return (
        <div>
            <ul>

                {
                    movies.map( (el,i)=>{
                        return <li>
                            <span>{el.name || el.title}</span><br/>
                            <img src={`https://image.tmdb.org/t/p/original${el.poster_path}`} alt={el.name}/>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default HomeInterface;
