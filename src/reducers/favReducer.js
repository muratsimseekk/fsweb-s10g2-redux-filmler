
// - [ ] `switch` deyimine `default` case'ini ekleyin.

import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";



const favInitialState = {
    favorites: [],
    displayFavorites: false
}

// TOGGLE_FAVORITES : displayFavorites state'ini tersine çevirsin.

const favReducer = (state = favInitialState , action) => {

    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state , displayFavorites : !state.displayFavorites
            }
            break;
        
        case ADD_FAVORITE:
            return {
                ...state, favorites: [...state.favorites , action.payload]
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