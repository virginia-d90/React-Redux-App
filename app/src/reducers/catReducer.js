import {FETCH_DATA, UPDATE_FACTS, SET_ERROR, SET_IMG, FETCH_IMG } from "../actions/catActions";


export const initialState = {
    catFacts: [],
    catPic: "",
    isFetchingData: false,
    error: ""
}

export const catReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                catFacts: [],
            };
        case UPDATE_FACTS:
            return {
                ...state,
                catFacts: action.payload,
                isFetchingData: false,
            };
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload 
            };
        case SET_IMG:
            return {
                ...state,
                isFetchingData:false,
                catPic: action.payload,

            }
        case FETCH_IMG:
            return{
                ...state,
                isFetchingData: true,
                
            }

        
        default: 
            return state
    }
}