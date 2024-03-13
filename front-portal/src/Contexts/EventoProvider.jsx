import {createContext, useEffect, useState } from "react";
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
            setFechaActual(data.currentMonth)
            setCumpleañosObtenidos(data.birthdays)
        }catch(error){
            console.log(error)
        }
    }

    const obtenerNoticias = async () => {
        try {
            const {data} = await clienteAxios.get('/getnews');
            setNoticiasObtenidas(data.data);
        }catch(error){
            console.log(error)
        }
    }

    const obtenerDocumentos = async () => {
        try {
            const {data} = await clienteAxios.get('/getdocuments');
            setDocumentosObtenidos(data.data);
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