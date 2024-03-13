import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from '../../Config/axios';
import Footer from '../../Components/Footer';

export default function News() {
  let {id} = useParams();
  const [noticia, SetNoticia] = useState({
    id: '',
    user_id: '',
    title: '',
    description: '',
    image: '',
    document: ''
  })

  useEffect(()=>{
    clienteAxios.get(`/reports/${id}`)
    .then(({data})=>{
        SetNoticia(data)
    })
    .catch(()=>{
      console.log(error);
    })
}, [id])

  return (
    <>
    
    <article className='w-full flex flex-col items-center'>
      <div className='w-[80%]' >
        <h1 className=' w-full h-auto pb-2 my-4 text-4xl' >
          {noticia.title}
        </h1>
        
        <p className='w-full h-auto mb-3 text-xl' >
          {noticia.description}
        </p>
        
        <figure className='w-full h-full'  >
          <img 
              className=' object-contain w-full h-[480px]' 
              src={`http://127.0.0.1:8000/storage/${noticia.image}`}
              alt={noticia.title} 
          />
        </figure>

      </div>
    </article>
    <Footer/>
    </>
  )
}
