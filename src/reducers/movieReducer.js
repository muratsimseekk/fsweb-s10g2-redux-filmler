import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

// data.js den den movies ARRAY ini  cekiyoruz ve initialState'a atıyoruz.

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

//movieReducer.js içindeki initialState reducer'ın başlangıç değeri olarak atanmalıdır.


const reducer = (state = initialState,action) => {
  console.log(movies);
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }
    default:
      return state;
  }
}

export default reducer;