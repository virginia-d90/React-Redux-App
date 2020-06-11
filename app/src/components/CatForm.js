//should contain a button to retrieve api data
//this will need a connect/MSTP
import React from "react";
import { connect } from "react-redux";

import { getData, getImg } from "../actions/catActions";

const CatForm = props => {
    //create a handler for getData
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    

    //in the return the button will need an onclick that links to an axios call
    //button will also produce a fetching data alert of some sort
    return (
        <>
            {props.isFetchingData ? (
                 <div>**fetching data...sorry for the paws**</div>
                 ):(
                   <img src={props.catPic} alt='random cat' max-width="100px"/>  
                 )

            }
            <button onClick={(e) => { e.preventDefault(); 
                props.getImg();
            }}>Get Cat Pic</button>
            {props.isFetchingData ? (
                <div>**fetching data...sorry for the paws**</div>
            ) : (   
                <button onClick={handleGetData}>Press this button right meow!</button>
            )} 
         
        </>
    )
}
const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        catPic: state.catPic

    }
}

export default connect(mapStateToProps, { getData, getImg })(CatForm);