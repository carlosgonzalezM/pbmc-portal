import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../Contexts/ContextProvider';
import axiosClient from '../../Config/axios-client';
import './index.css'

export default function DocumentForm() {
  const navigate = useNavigate();
  let {id} = useParams();
  const {user} = useStateContext()
  const [documento, SetDocumento] = useState({
    id: null,
    user_id: user.id,
    title: '',
    description: '',
    document: ''
  })
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  // if(id){
  //   useEffect(()=>{
  //       setLoading(true)
  //       axiosClient.get(`/documents/${id}`)
  //       .then(({data})=>{
  //           setLoading(false)
  //           SetDocumento(data)
  //       })
  //       .catch(()=>{
  //           setLoading(false)
  //       })
  //   }, [id])
  // }

  // useEffect(() => {
  //   if (id) {
  //     setLoading(true);
  //     axiosClient.get(`/documents/${id}`)
  //       .then(({ data }) => {
  //         setLoading(false);
  //         setDocumento(data);
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, [id]);

  const onSubmit = ev => {
    ev.preventDefault()

    if(documento.id){
        axiosClient.put(`/documents/${documento.id}`, documento, {headers:{"Content-Type" : 'multipart/form-data'}} )
        .then(()=>{
          console.log(documento)
            navigate('/documents')
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
        })
    }else{
      console.log(user.id)
      console.log(documento)
      axiosClient.post('/documents', documento , {headers:{"Content-Type" : 'multipart/form-data'}})
      .then(()=>{
        navigate('/documents')
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
    }

  }

  

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    SetDocumento({ ...documento, document: file });
  };

  
  
    return (
    <>
      {documento.id && 
        <h1 className=' m-0 text-2xl font-semibold' >
          Actualizar Documento: {documento.title}
        </h1> 
      }
      {
        !documento.id &&
        <h1 className=' m-0 text-2xl font-semibold' >
          Agregar Documento
        </h1>
      }
      <div  style={{ WebkitAnimationDuration: '0.3s', animationDuration: '0.3s', WebkitAnimationFillMode: 'both', animationFillMode: 'both', WebkitAnimationName: 'fadeInDown', animationName: 'fadeIndown' }} 
        className='rounded-lg mb-4 mt-2 bg-[#FFF] shadow-md p-6 animate-faceInDown'  >
        {
          loading && (
            <div className=' text-center' >
              Cargando Documento...
            </div>
          )
        }
        {
          errors && 
          <div>
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        {
          !loading && (
            <form onSubmit={onSubmit}>
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                value={documento.title} 
                onChange={ev => SetDocumento({...documento, title: ev.target.value})} 
                placeholder='Titulo'
              />
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                value={documento.description} 
                onChange={ev => SetDocumento({...documento, description: ev.target.value})} 
                placeholder='descripción'
              />
              
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                type='file' 
                onChange={handleDocumentChange} 
                placeholder='Documento'
              />
              <button 
                className="rounded-lg border border-[#10B981] bg-[#10B981] px-5 py-2.5 text-center text-sm font-medium text-[#ffffff] shadow-sm transition-all hover:border-[#047857] hover:bg-[#047857] focus:ring focus:ring-[#A7F3D0] disabled:cursor-not-allowed disabled:border-[#6EE7B7] disabled:bg-[#6EE7B7]">
                Guardar
              </button>
            </form>
          )
        }
      </div>
    </>
  )
}
