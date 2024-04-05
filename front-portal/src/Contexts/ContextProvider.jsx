import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../Config/axios-client";

const StateContext = createContext({
    user : null,
    token: null,
    rol: null,
    setUser: () => {},
    setToken: () => {},
    setRol: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [rol, setRol] = useState({});

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
            rol,
            setUser,
            setToken,
            setRol
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)