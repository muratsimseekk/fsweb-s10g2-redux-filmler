import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers/movieReducer";



const store = createStore(reducer);



export default store;