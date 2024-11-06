import React, { createContext, useReducer } from 'react';

const initialState = {
    people: [],
    vehicles: [],
    planets: [],
    favorites: []
};

const SWAPIContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PEOPLE':
            return { ...state, people: action.payload };
        case 'SET_VEHICLES':
            return { ...state, vehicles: action.payload };
        case 'SET_PLANETS':
            return { ...state, planets: action.payload };
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(fav => fav.uid !== action.payload.uid) };
        default:
            return state;
    }
};

const SWAPIProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SWAPIContext.Provider value={{ state, dispatch }}>
            {children}
        </SWAPIContext.Provider>
    );
};

export { SWAPIContext, SWAPIProvider };
