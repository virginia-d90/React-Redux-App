import {FETCH_DATA, UPDATE_FACTS, SET_ERROR } from "../actions/catActions";


export const initialState = {
    catFacts: [],
    catPic: {},
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
                catPic: {}
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
        
        default: 
            return state
    }
}