

import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";



const favInitialState = {
    favorites: [],
    displayFavorites: false
}



const favReducer = (state = favInitialState , action) => {

    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state , displayFavorites : !state.displayFavorites
            }
            break;
        
        case ADD_FAVORITE:
            return {
                ...state, favorites: [...state.favorites , state.favorites.some(item => item.id === action.payload.id) ? null : action.payload].filter(item => item !== null)
            }
            break;
        
        case REMOVE_FAVORITE:
            return {
                ...state , favorites : state.favorites.filter(item => (action.payload !== item.id))
            }
            break;
        default:
            return state;
            break;
    }
}

export default favReducer;