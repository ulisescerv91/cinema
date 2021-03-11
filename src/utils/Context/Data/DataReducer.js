import {SET_MOVIE_SELECTED,GET_GENRES,GET_TRENDING_MOVIES} from '../Types'

export default (state,action) => {
    //Payload -> Son los datos que me estan pasando en esta funcion (Es otro nombre con el que se conoce al DATA)
    const {payload, type} = action;

    switch(type){
        case GET_GENRES:{
            return{
                ...state,
                genres:payload
            }
        }
        case GET_TRENDING_MOVIES:{
            return{
                ...state,
                trending:payload
            }
        }
        case SET_MOVIE_SELECTED:{
            return{
                ...state,
                selectedMovie:payload
            }
        }
        default:{
            return state;
        }
    }
}