import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

// data.js den den movies ARRAY ini  cekiyoruz ve initialState'a atıyoruz.

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

//movieReducer.js içindeki initialState reducer'ın başlangıç değeri olarak atanmalıdır.

//Bu yeni case'in, `payload` aracılığıyla iletilen film datasını `movies` listesine ekleyin.
const reducer = (state = initialState,action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }
    case ADD_MOVIE:
      return { ...state ,
      movies : [...state.movies,action.payload]
      }
    default:
      return state;
  }
}

export default reducer;