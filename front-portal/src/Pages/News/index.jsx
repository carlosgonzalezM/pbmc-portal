import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from '../../Config/axios';

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
      console.log(data)
        SetNoticia(data)
    })
    .catch(()=>{
      console.log(error);
    })
}, [id])

  return (
    <article className=' w-full flex flex-col' >
      <h1>{noticia.title}</h1>
      <div>
        <p>
          {noticia.description}
        </p>
      </div>
      <figure>
        <img src={`http://127.0.0.1:8000/storage/${noticia.image}`}
             alt={noticia.title}  />
      </figure>
    </article>
  )
}
