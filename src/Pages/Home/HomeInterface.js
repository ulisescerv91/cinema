import React,{useContext, useEffect} from 'react';
import './HomeInterface.scss'
import Header from './Components/Header/Header';
// import Row from './Components/Row/Row';
// import DataContext from '../../utils/Context/Data/DataContext'

const HomeInterface = () => {
    // const {  getTrendingMovies } = useContext(DataContext) 

    useEffect( ()=> {    
        const getData = async()=>{
            
        //    await  console.log(getTrendingMovies())
        }
        getData()
    },[])


    // if( getTrendingMovies.length === 0 ){
    //    return  <h1>Loading...</h1>
    // }
    

    return (        
        <div className='homeInterface'>
            <Header  />        
            {
                //genresArrayCtx.map( (el,i) => <Row genre={el} key={i}/>)
            }
               
        </div>
    );
}

export default HomeInterface;
