import React from 'react'
import { Link } from 'react-router-dom';


export default function CardNews({noticia}) {

    const {id, title, description, image} = noticia;

  return (
        <div className=" m-4 max-w-[480px] max-h-[450px] rounded-lg  shadow-lg shadow-turquezapb">
           <div className="bg-[#FFFFF] flex-col rounded-lg m-1">
               <figure className=" mb-2 w-full h-2/5">
                   <img 
                       className="w-full h-52 object-cover rounded-lg rounded-b-none" 
                       src={`http://127.0.0.1:8000/storage/${image}`}
                       alt={title} 
                   />
               </figure>
               <div className=" h-3/5 flex flex-col justify-start items-start m-2">
                   <h2 className=" text-xl font-bold text-start justify-center mb-3 font-serif text-[#003164]">
                       {title}
                   </h2>
                   <p className=" text-sm text-start mb-2 font-serif text-[#00568C]">
                       {description}
                   </p>
                   <div className="flex  justify-start pb-2 font-serif">
                        <Link to={'/news/'+id}>
                               <button className=" text-[#FFFFFF] font-bold text-xs bg-magentapb text-white py-2 px-4 rounded-full shadow-sm shadow-magentapb">
                                   Ver más
                               </button>
                        </Link>
                   </div>
               </div>
           </div>
        </div>
    )
}
