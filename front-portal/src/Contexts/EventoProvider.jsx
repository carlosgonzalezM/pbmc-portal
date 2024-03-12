import { Children, createContext, useEffect, useState } from "react";
import axiosClient from "../Config/axios-client";
import clienteAxios from "../Config/axios";


const EventoContext = createContext();

const EventoProvider = ({children}) => {

    const [noticiasObtenidas, setNoticiasObtenidas] = useState([]);
    const [documentosObtenidos, setDocumentosObtenidos] = useState([]);
    const [cumpleañosObtenidos, setCumpleañosObtenidos] = useState([]);
    const [fechaActual, setFechaActual] = useState([]);

    const obtenerCumpleaños = async () => {
        try {
            const {data} = await clienteAxios.get('/getbirthdays')
            console.log(data)
            console.log(data.currentMonth)
            console.log(data.birthdays)
            setFechaActual(data.currentMonth)
            setCumpleañosObtenidos(data.birthdays)
        }catch(error){
            console.log(error)
        }
    }

    const obtenerNoticias = async () => {
        try {
            const {data} = await clienteAxios.get('/getnews');
            console.log(data)
            setNoticiasObtenidas(data.data);
            console.log(data.data)
        }catch(error){
            console.log(error)
        }
    }

    const obtenerDocumentos = async () => {
        try {
            const {data} = await clienteAxios.get('/getdocuments');
            setDocumentosObtenidos(data.data);
            console.log(data.data)
        }catch(error){
            console.log(error)
        }
    }

    

    useEffect(()=>{
        obtenerNoticias();
        obtenerDocumentos();
        obtenerCumpleaños();
    }, []);

    return (
        <EventoContext.Provider
            value={{
                noticiasObtenidas, 
                setNoticiasObtenidas,
                documentosObtenidos,
                setDocumentosObtenidos,
                cumpleañosObtenidos,
                setCumpleañosObtenidos,
                fechaActual,
                setFechaActual
            }}
        >
            {children}
        </EventoContext.Provider>
    )

}

export { EventoProvider };

export default EventoContext;