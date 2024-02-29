import React from 'react'
import { Link } from 'react-router-dom';

let data = [
    {
        id: 1,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Nuevo tratamiento para enfermedades cardiovasculares',
        fechaPublicacion: '2023-11-28',
        descripcion: 'Se ha descubierto un tratamiento innovador que muestra prometedores resultados en pacientes con enfermedades cardíacas'
    },
    {
        id: 2,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Avances en la investigación del cáncer de pulmón',
        fechaPublicacion: '2023-11-27',
        descripcion: 'Investigadores reportan nuevos avances en la comprensión del cáncer de pulmón que podrían conducir a terapias más efectivas'
    },
    {
        id: 3,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Nueva vacuna contra enfermedades infecciosas',
        fechaPublicacion: '2023-11-26',
        descripcion: 'Se ha desarrollado una vacuna prometedora que muestra alta eficacia contra diversas enfermedades infecciosas, ofreciendo esperanzas en la preve'
    },
    {
        id: 4,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Estudio revela avances en el tratamiento de la diabetes tipo 2',
        fechaPublicacion: '2023-11-25',
        descripcion: 'Un estudio clínico reciente muestra resultados positivos en un nuevo enfoque para el tratamiento de la diabetes tipo 2'
    },
    {
        id: 5,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Investigación sobre la salud mental en tiempos de pandemia',
        fechaPublicacion: '2023-11-24',
        descripcion: 'Un estudio examina el impacto de la pandemia en la salud mental y propone estrategias para mitigar sus efectos a largo plazo en la población'
    },
    {
        id: 6,
        imagen: 'https://www.clikisalud.net/wp-content/uploads/2016/11/cardiovasculares.jpg',
        titulo: 'Descubrimiento de un tratamiento para enfermedades neurodegenerativas',
        fechaPublicacion: '2023-11-23',
        descripcion: 'Científicos descubren una molécula que podría ser clave en el tratamiento de enfermedades neurodegenerativas'
    },
    
];

export default function CardNews() {
  return (
    data.map((d)=>(
        <div className=" w-70 h-130 m-4 rounded-lg  shadow-xl shadow-turquezapb">
           <div className="bg-white flex-col rounded-lg m-1">
               <figure className=" mb-2 w-full h-2/5">
                   <img 
                       className=" h-full w-full object-cover rounded-lg rounded-b-none" 
                       src={d.imagen} 
                       alt={d.titulo} 
                   />
               </figure>
               <div className=" h-3/5 flex flex-col justify-start items-start m-2">
                   <span className=" text-xs font-semibold mb-1">
                       {d.fechaPublicacion}
                   </span>
                   
                   <h2 className=" text-xl font-bold text-start justify-center mb-3">
                       {d.titulo}
                   </h2>
                   <p className=" text-sm text-start mb-2">
                       {d.descripcion}
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
