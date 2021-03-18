import React,{useState, useEffect, useContext} from 'react';
import './Header.scss'
import DataContext from '../../../../utils/Context/Data/DataContext'

const Header = () => {

    const { getTrendingMovie } = useContext(DataContext) 
    const [movie,setMovie] = useState({})
    const [bgImg, setBgImg] = useState({})
    const {title, backdrop_path } = movie;

   useEffect( ()=> {
        const data = async () =>{
             setMovie(await getTrendingMovie() )
             
            }         
            data()
            setBgImg({backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`})                    
    },[])
    useEffect( ()=> { 
            setBgImg({backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`})                    
    },[movie])

  

    if(!title && !backdrop_path )
        return  <h1>Loading...</h1>
    
    return (
        <div className='header' style={bgImg}>
            <h1 className='header__title'>{title}</h1>
            <div className="header__options-container">
                <button className="header__options-container__more-details">+ Details</button>
                <button className="header__options-container__favorities">My Favorites</button>
            </div>
            <div className="header__gradient"></div>
        </div>
    );
}

export default Header;
