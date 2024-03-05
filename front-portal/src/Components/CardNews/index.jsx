import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Contexts/ContextProvider';
import useEvento from '../../Hooks/useEvento';

export default function CardNews() {

const {noticiasObtenidas} = useEvento();

const noticia = noticiasObtenidas

  return (
    noticia.map((d)=>(
        console.log(d.image),
        <div className=" w-70 h-130 m-4 rounded-lg  shadow-xl shadow-turquezapb">
           <div className="bg-white flex-col rounded-lg m-1">
               <figure className=" mb-2 w-full h-2/5">
                   <img 
                       className=" h-full w-full object-cover rounded-lg rounded-b-none" 
                       src={`http://127.0.0.1:8000/storage/${d.image}`}
                       alt={d.title} 
                   />
               </figure>
               <div className=" h-3/5 flex flex-col justify-start items-start m-2">
                   {/* <span className=" text-xs font-semibold mb-1">
                       {d.fechaPublicacion}
                   </span> */}
                   
                   <h2 className=" text-xl font-bold text-start justify-center mb-3">
                       {d.title}
                   </h2>
                   <p className=" text-sm text-start mb-2">
                       {d.description}
                   </p>
                   <div className="flex  justify-start pb-2">
                        <Link to='/noticia'>
                               <button className=" text-[#FFFFFF] font-bold text-xs bg-turquezapb text-white py-2 px-4 rounded-full shadow-turquezapb">
                                   Ver más
                               </button>
                        </Link>
                   </div>
               </div>
           </div>
        </div>
   ))
  )
}
