
// - [ ] `switch` deyimine `default` case'ini ekleyin.

import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";



const favInitialState = {
    favorites: [],
    displayFavorites: false
}

const favReducer = (state = favInitialState , action) => {

    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {

            }
            break;
        
        case ADD_FAVORITE:
            return {
                ...state, favorites: [...state.favorites , action.payload]
            }
            break;
        
        case REMOVE_FAVORITE:
            return {}
            break;
        default:
            return state;
            break;
    }
}

export default favReducer;