import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../Contexts/ContextProvider';
import axiosClient from '../../Config/axios-client';

export default function ReportForm() {
  const navigate = useNavigate();
  let {id} = useParams();
  const {user} = useStateContext()
  const [noticia, SetNoticia] = useState({
    id: null,
    user_id: user.id,
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
            setInputs(data)
        })
        .catch(()=>{
            setLoading(false)
        })
    }, [id])
  }


  const [inputs, setInputs] = useState([]);
  const [fileImage, setFileImage]=useState('');
  const [fileDocument, setFileDocument] = useState('');

  const handleChangePrueba = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const onSubmit = ev => {
    ev.preventDefault()

    const formData = new FormData();
    if(noticia.id){
      formData.append('_method','PUT');
      formData.append('id', inputs.id)
      formData.append('user_id', inputs.user_id)
      formData.append('title', inputs.title)
      formData.append('description', inputs.description)
      formData.append('image', fileImage)
      formData.append('document', fileDocument)
        axiosClient.post(`/reports/${noticia.id}`, formData, {headers:{"Content-Type" : 'multipart/form-data'}})
        .then(()=>{
            navigate('/newspaper')
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
        })
    }else{
      console.log(noticia)
      axiosClient.post('/reports', noticia, {headers:{"Content-Type" : 'multipart/form-data'}})
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

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   SetNoticia({ ...noticia, image: file });
  // };

  // const handleDocumentChange = (event) => {
  //   const file = event.target.files[0];
  //   SetNoticia({ ...noticia, document: file });
  // };

  
  
    return (
    <>
      { noticia.id && 
        <h1 className=' m-0 text-2xl font-semibold' >
          Actualizar Noticia: {noticia.title}
        </h1> 
      }
      {
        !noticia.id &&
        <h1 className=' m-0 text-2xl font-semibold' >
          Agregar Noticia
        </h1>
      }
      <div  style={{ WebkitAnimationDuration: '0.3s', animationDuration: '0.3s', WebkitAnimationFillMode: 'both', animationFillMode: 'both', WebkitAnimationName: 'fadeInDown', animationName: 'fadeIndown' }} 
        className='rounded-lg mb-4 mt-2 bg-[#FFF] shadow-md p-6 animate-faceInDown'  >
        {
          loading && (
            <div className=' text-center' >
              Cargando Noticia...
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
                value={inputs.title} 
                onChange={handleChangePrueba} 
                placeholder='Titulo'
                name="title"
              />
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                value={inputs.description} 
                onChange={handleChangePrueba} 
                placeholder='descripción'
                name='description'
              />
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                type='file' 
                onChange={(e)=> setFileImage(e.target.files[0])} 
                placeholder='imagen'
              />
              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                type='file' 
                onChange={(e)=> setFileDocument(e.target.files[0])} 
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