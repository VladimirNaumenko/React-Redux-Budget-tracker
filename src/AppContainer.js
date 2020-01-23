import "../styles/index.scss";
import React from "react";
import {bindActionCreators} from "redux";
import App from "./App";
import * as actions from "./actions";
import {connect} from "react-redux";



const AppContainer = ({state,actions})=>(
    <App {...state} actions = {actions}/>
)

const mapStateToProps = (state) =>({
    state
})
const mapDispachToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispachToProps)(AppContainer);
