import { useContext } from "react"
import EventoContext from "../Contexts/EventoProvider"

const useEvento = () => {
    return useContext(EventoContext);
}

export default useEvento;