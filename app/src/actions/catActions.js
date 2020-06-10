import axios from "axios"

export const FETCH_DATA = "FETCH_DATA"
export const UPDATE_FACTS = "UPDATE_FACTS"
export const SET_ERROR = "SET_ERROR"

//fairly certain payload is actually going to be res.data.all 
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get("https://cat-fact.herokuapp.com/facts")
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_FACTS, payload: res.data.all});
        })
        .catch(err => {
            console.error("error fetching data from api. err:", err);
            dispatch({ type: SET_ERROR, payload: "error fetching data from api"});
        });
    
  
}