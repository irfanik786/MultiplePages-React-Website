import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

// create a context (warehouse)
// provider
// consumer / useContext


const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app/";

const intialState = {
    name: "",
    image: "",
    services: [],
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    
    const updateHomePage = () => {
        return dispatch( {
            type: "HOME_UPDATE",
            payload: {
            name: "Irfan Khan",
            image: "./images/hero.svg",
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch( {
            type: "ABOUT_UPDATE",
            payload: {
            name: "Irfan Khan",
            image: "./images/about1.svg",
            }
        })
    }

    

    // to get the api data
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data });
        } catch(error) {
            console.log(error);
        }
    }
    // to call the api
    useEffect(() => {
        getServices(API);
    }, []);



    return <AppContext.Provider value={{ ... state, updateHomePage, updateAboutPage }}>{children}
    </AppContext.Provider>
};

// global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };