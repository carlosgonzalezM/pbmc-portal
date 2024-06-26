import React, { useRef, useState } from 'react'
import { useStateContext } from '../../Contexts/ContextProvider';
import axiosClient from '../../Config/axios-client';
import Footer from '../../Components/Footer';
import NavbarSignup from '../../Components/NavbarSignup';

export default function Signup() {
    
    const nameRef = useRef();
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
  
    const {setUser, setToken, setRol} = useStateContext()
  
    const [errors, setErrors] = useState(null)
    
    const onSubmit = (ev) => {
      ev.preventDefault()
  
      const datos = {
        name: nameRef.current.value,
        user_name: userRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      }

      axiosClient.post('signup', datos)
        .then(({data})=>{
            setUser(data.user)
            setToken(data.token)
            setRol(data.roles.name)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                setErrors(response.data.errors)
            }
        })
    }
  
    return (
      <>
        
          <NavbarSignup/>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 mt-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-25 w-25"
                src="/images/Logo.ico"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold font-serif leading-9 tracking-tight text-turquezapb">
                Crea tu cuenta
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" 
                    onSubmit={onSubmit}
                >
  
                    <div>
                        <div className='flex items-center justify-center' >
                            <label htmlFor="name" 
                                    className="block text-sm font-medium leading-6 font-serif text-turquezapb"
                            >
                                Nombre Completo
                            </label>
                        </div>
                            
                        <div className="mt-2">
                            <input
                                ref={nameRef}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
    
                    <div>
                        <div className='flex items-center justify-center' >
                            <label htmlFor="user" 
                            className="block text-sm font-medium leading-6 text-turquezapb font-serif"
                            >
                            Nombre de Usuario
                            </label>
                        </div>
                        
                        <div className="mt-2">
                            <input
                                ref={userRef}
                                id="user"
                                name="user"
                                type="text"
                                autoComplete="user"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
    
                    <div>
                        <div className='flex items-center justify-center' >
                            <label htmlFor="email" 
                            className="block text-sm font-medium leading-6 text-turquezapb font-serif "
                            >
                            Correo Electronico
                            </label>
                        </div>
                        
                        <div className="mt-2">
                            <input
                                ref={emailRef}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-center">
                        <label htmlFor="password" 
                            className="block text-sm font-medium leading-6 text-turquezapb font-serif"
                        >
                            Contraseña
                        </label>
                        </div>
                        
                        <div className="mt-2">
                        <input
                            ref={passwordRef}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
    
                    <div>
                        <div className="flex items-center justify-center">
                        <label htmlFor="password" 
                            className="block text-sm font-medium leading-6 text-turquezapb font-serif "
                        >
                            Confirmar Contraseña
                        </label>
                        </div>
    
                        <div className="mt-2">
                        <input
                            ref={passwordConfirmationRef}
                            id="confirmation-password"
                            name="confirmation-password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
        
                    <div>
                    <button
                        type="submit"
                        className="flex w-full font-serif justify-center rounded-md bg-magentapb px-3 py-1.5 text-sm font-semibold leading-6 text-[#ffffff] shadow-lg shadow-violetapb  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Crear Cuenta
                    </button>
                    </div>
              </form>
            </div>
          </div>

          <Footer/>
        </>
    )
}
