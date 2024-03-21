import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../Contexts/ContextProvider';
import axiosClient from '../../Config/axios-client';

export default function BirthdayForm() {
  const navigate = useNavigate();
  let {id} = useParams();
  const {user} = useStateContext()
  const [cumpleaños, SetCumpleaños] = useState({
    id: null,
    user_id: user.id,
    first_name: '',
    last_name: '',
    area: '',
    date_birthday: '',
    image: '',
  })

  const [cumpleañosAuxiliar, SetCumpleañosAuxiliar] = useState({
    id: null,
    user_id: user.id,
    first_name: '',
    last_name: '',
    area: '',
    date_birthday: '',
    image: '',
  })

  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  if(id){
    useEffect(()=>{
        setLoading(true)
        axiosClient.get(`/birthdays/${id}`)
        .then(({data})=>{
            setLoading(false)
            SetCumpleaños(data)
            SetCumpleañosAuxiliar(data)
        })
        .catch(()=>{
            setLoading(false)
        })
    }, [id])
  }

 


  const onSubmit = ev => {
    ev.preventDefault()

    const formData = new FormData();

    if(cumpleaños.id){
      formData.append('_method', 'PUT')
      formData.append('user_id', cumpleaños.user_id)
      formData.append('first_name', cumpleaños.first_name)
      formData.append('last_name', cumpleaños.last_name)
      formData.append('area', cumpleaños.area)
      formData.append('date_birthday', cumpleaños.date_birthday)

      if(cumpleaños.image != cumpleañosAuxiliar.image){
        formData.append('image', cumpleaños.image)
      }
        axiosClient.post(`/birthdays/${cumpleaños.id}`, formData, {headers:{"Content-Type" : 'multipart/form-data'}})
        .then(()=>{
            navigate('/birthdays')
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
        })
    }else{
      axiosClient.post('/birthdays', cumpleaños, {headers:{"Content-Type" : 'multipart/form-data'}})
      .then(()=>{
        navigate('/birthdays')
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
    }

  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    SetCumpleaños({ ...cumpleaños, image: file });
  };


    return (
    <>
      { cumpleaños.id && 
        <h1 className=' m-0 text-4xl font-semibold font-serif text-[#001F45]' >
          Actualizar Cumpleaños: {cumpleaños.first_name}
        </h1> 
      }
      {
        !cumpleaños.id &&
        <h1 className=' m-0 text-4xl font-semibold font-serif text-[#001F45]' >
          Agregar Cumpleaños
        </h1>
      }
      <div  style={{ WebkitAnimationDuration: '0.3s', animationDuration: '0.3s', WebkitAnimationFillMode: 'both', animationFillMode: 'both', WebkitAnimationName: 'fadeInDown', animationName: 'fadeIndown' }} 
        className='rounded-lg mb-4 mt-2 bg-[#FFF] shadow-md p-6 animate-faceInDown'  >
        {
          loading && (
            <div className=' text-center text-[#001F45]' >
              Cargando cumpleaños...
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
                className="outline-none bg-[#FFFFFF] w-full font-serif text-xl border-2 border-[#e6e6e6] mb-4 p-4 box-border transition-all duration-300 ease-in-out" 
                value={cumpleaños.first_name} 
                onChange={ev => SetCumpleaños({...cumpleaños, first_name: ev.target.value})} 
                placeholder='primer nombre'
              />

              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 font-serif text-xl border-[#e6e6e6] mb-4 p-4 box-border transition-all duration-300 ease-in-out" 
                value={cumpleaños.last_name} 
                onChange={ev => SetCumpleaños({...cumpleaños, last_name: ev.target.value})} 
                placeholder='primer apellido'
              />

              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-xl font-serif transition-all duration-300 ease-in-out" 
                value={cumpleaños.area} 
                onChange={ev => SetCumpleaños({...cumpleaños, area: ev.target.value})} 
                placeholder='area de trabajo'
              />

              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-xl font-serif transition-all duration-300 ease-in-out" 
                type='date'
                value={cumpleaños.date_birthday} 
                onChange={ev => SetCumpleaños({...cumpleaños, date_birthday: ev.target.value})} 
                
              />

              <input 
                className="outline-none bg-[#FFFFFF] w-full border-2 border-[#e6e6e6] mb-4 p-4 box-border text-base transition-all duration-300 ease-in-out" 
                type='file' 
                onChange={handleImageChange} 
                placeholder='imagen'
              />

              <button 
                className="rounded-lg font-serif border border-[#10B981] bg-[#10B981] px-5 py-2.5 text-center text-sm font-medium text-[#ffffff] shadow-sm transition-all hover:border-[#047857] hover:bg-[#047857] focus:ring focus:ring-[#A7F3D0] disabled:cursor-not-allowed disabled:border-[#6EE7B7] disabled:bg-[#6EE7B7]">
                Guardar
              </button>

            </form>
          )
        }
      </div>
    </>
  )
}


