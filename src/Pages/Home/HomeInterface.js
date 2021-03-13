import React,{useContext, useEffect} from 'react';
import './HomeInterface.scss'
import Header from './Components/Header/Header';
import Row from './Components/Row/Row';
import DataContext from '../../utils/Context/Data/DataContext'

const HomeInterface = () => {
    const { genresArrayCtx, getGenres, getTrendingMovies,trendingArrayCtx } = useContext(DataContext) 

    useEffect( ()=> {    
        getGenres()
        getTrendingMovies()        
    },[])


    if( trendingArrayCtx.length === 0 || genresArrayCtx.length === 0 ){
       return  <h1>Loading...</h1>
    }
    

    return (        
        <div className='homeInterface'>
            <Header movie={ trendingArrayCtx[3] } />        
            {
                genresArrayCtx.map( (el,i) => <Row genre={el} key={i}/>)
            }
               
        </div>
    );
}

export default HomeInterface;
