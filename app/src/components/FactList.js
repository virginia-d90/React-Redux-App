//should produce a list from the api results
//will have a connect/MSTP

import React from "react";
import {connect} from "react-redux";


const FactList = props => {

    //this return will map over the resulting data and return a list of cat facts 
    return (
        <div className="container">
          {props.error ? (
            <div className="error">{props.error}</div>
          ) : (
          props.catFacts.map(fact => 
            <div className= "card">
                <p key={fact.id}>{fact.text}</p>
            </div>
          )
         )}  
        </div>
    )
}
const mapStateToProps = state => {
    return {
        catFacts: state.catFacts,
        error: state.error
    }
}


export default connect(
    mapStateToProps, 
    {}
)(FactList);