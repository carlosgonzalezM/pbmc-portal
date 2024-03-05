import { Children, createContext, useEffect, useState } from "react";
import axiosClient from "../Config/axios-client";
import clienteAxios from "../Config/axios";


const EventoContext = createContext();

const EventoProvider = ({children}) => {

    const [noticiasObtenidas, setNoticiasObtenidas] = useState([]);

    const obtenerNoticias = async () => {
        try {
            const {data} = await clienteAxios.get('/getnews');
            setNoticiasObtenidas(data.data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        obtenerNoticias();
    }, []);

    return (
        <EventoContext.Provider
            value={{
                noticiasObtenidas, 
                setNoticiasObtenidas
            }}
        >
            {children}
        </EventoContext.Provider>
    )

}

export { EventoProvider };

export default EventoContext;