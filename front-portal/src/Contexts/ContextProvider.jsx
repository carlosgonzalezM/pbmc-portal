import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../Config/axios-client";

const StateContext = createContext({
    user : null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

   

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            // noticiasObtenidas,
            // setNoticiasObtenidas
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)