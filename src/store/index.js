import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "../reducers";
//import thunk from "redux-thunk";
//export const store = createStore(allReducers);
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//export default createStore(allReducers);
export default store;
