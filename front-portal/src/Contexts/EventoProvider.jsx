import {createContext, useEffect, useState } from "react";
import clienteAxios from "../Config/axios";
import axios from "axios";


const EventoContext = createContext();

const EventoProvider = ({children}) => {

    const [noticiasObtenidas, setNoticiasObtenidas] = useState([]);
    const [documentosObtenidos, setDocumentosObtenidos] = useState([]);
    const [cumpleañosObtenidos, setCumpleañosObtenidos] = useState([]);
    const [fechaActual, setFechaActual] = useState([]);
    const [info, setInfo] = useState([]);
    const [paginaActual, setPaginaActual] = useState([]);
    const [paginaFinal, setPaginaFinal] = useState([]);
    const [noticiasImportantesObtenidas, setNoticiasImportantesObtenidas] = useState([]);

    const endpoint = 'http://127.0.0.1:8000/api/getnews'

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
            const {data} = await clienteAxios.get('/getnewsfeatured');
            setNoticiasImportantesObtenidas(data.data);
        }catch(error){
            console.log(error)
        }
    }

    const obtenerNoticiaSecundarias = (endpoint) => {
        clienteAxios.get(endpoint)
        .then((data)=>{
            setNoticiasObtenidas(data.data.data);
            setInfo(data.data.links);
            setPaginaActual(data.data.meta.current_page)
            setPaginaFinal(data.data.meta.last_page)
           
        })
        .catch((error)=>{
            console.log(error)
        })
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
        // obtenerNoticias();
        obtenerDocumentos();
        obtenerCumpleaños();
        obtenerNoticiaSecundarias(endpoint);
        obtenerNoticias();
    }, []);

    const handleNextPage = () => {
        obtenerNoticiaSecundarias(info.first);
        window.scrollTo(0, 0);
      };
      
      const handlePreviousPage = () => {
        obtenerNoticiaSecundarias(info.last);
        window.scrollTo(0, 0);
      };

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
                setFechaActual,
                info,
                setInfo,
                handleNextPage,
                handlePreviousPage,
                paginaActual,
                paginaFinal,
                noticiasImportantesObtenidas,
                setNoticiasImportantesObtenidas
            }}
        >
            {children}
        </EventoContext.Provider>
    )

}

export { EventoProvider };

export default EventoContext;