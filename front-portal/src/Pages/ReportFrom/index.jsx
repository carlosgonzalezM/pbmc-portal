import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../Contexts/ContextProvider';
import axiosClient from '../../Config/axios-client';

export default function ReportForm() {
  const navigate = useNavigate();
  let {id} = useParams();
  const [user] = useStateContext()
  const [noticia, SetNoticia] = useState({
    id: null,
    id_user: user.id,
    title: '',
    description: '',
    image: '',
    document: ''
  })
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  if(id){
    useEffect(()=>{
        setLoading(true)
        axiosClient.get(`/reports/${id}`)
        .then(({data})=>{
            setLoading(false)
            SetNoticia(data)
        })
        .catch(()=>{
            setLoading(false)
        })
    }, [])
  }

  const onSubmit = ev => {
    ev.preventDefault()

    if(noticia.id){
        axiosClient.put(`/reports/${notcia.id}`, noticia)
        .then(()=>{
            navigate('/newspaper')
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
        })
    }

  }
  
    return (
    <div>
        reportform

    </div>
  )
}
