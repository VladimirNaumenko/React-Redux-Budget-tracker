import {combineReducers} from "redux";
import BudgetReducer from "./BudgetReducer.js";

export default combineReducers({
    budget: BudgetReducer
});
