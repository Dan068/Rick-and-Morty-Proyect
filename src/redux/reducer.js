import { ADD_FAV, ORDER, REMOVE_FAV, FILTER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}// estados globales

export default function reducer(state= initialState, action){
    //*el reducer recibe la action, osea lo que tiene que hacer
    //*action = {type..., payload...}
    const {type, payload} = action
    switch(type){
        case ADD_FAV:{
            return {
                ...state,
                allCharacters:[...state.all, payload],
                myFavorites:[...state.all, payload]
            }}
            case REMOVE_FAV:{
                const filteredFavs = state.allCharacters.filter(favorite => favorite.id !== Number(payload))
    
            return{
                ...state,
                allCharacters: filteredFavs,
                myFavorites: filteredFavs 
            }}
            case FILTER:{
                //*{type: FILTER, payload: 'FEMALE'}
                if(payload==='All') return {...state,
                myFavorites: state.allCharacters
            }
                const filterFavs = state.allCharacters.filter(
                    char => char.gender === payload
                )
                return {
                    ...state,
                    myFavorites: filterFavs
                }}
                case ORDER:{
                    const orderCopy = [...myFavorites];
                    if(payload === 'A')
                    orderCopy.sort((a, b) => a.id - b.id);
                if(payload === 'D')
                orderCopy.sort((a, b) => b.id - a.id);
            return {
                ...state, myFavorites: orderCopy
            }}
                //

            default:
                return {...state,}
        
}
}
//action es un objeto con un type y un payload
//el initialState es un objeto para ir guardando cosas, en este caso los personajes enviados desde el action