// setup data layer

import React, { createContext, useContext, useReducer } from "react";

//This is Data Layer
export const StateContext = createContext();

//Build a PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
