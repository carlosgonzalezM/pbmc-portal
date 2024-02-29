import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);

    // const {login} =  useAuth({
    //     middleware: 'guest',
    //     url: '/users'
    // });

    const onSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }
    
        //   login(datos, setErrores)
          
    }


 
    return (
            <>
                <section className="flex justify-between w-full h-[800px]">
                    <div className="flex w-1/2 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-30 w-auto"
                                src="/images/Logo.ico"
                                alt="perfect body"
                            />

                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-turquezapb">
                                Ingresa con tu cuenta
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" 
                                onSubmit={onSubmit}
                            >
                                <div>
                                    <div className='flex justify-center items-center'>
                                        <label htmlFor="email" 
                                            className="block text-sm font-medium leading-6 text-turquezapb"
                                        >
                                            Email
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
                                            className="block text-sm font-medium leading-6 text-turquezapb"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            ref={passwordRef}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="tu contraseña"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-magentapb px-3 py-1.5 text-sm font-semibold leading-6 text-[#ffffff] shadow-lg shadow-magentapb hover:bg-turquipb focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Ingresar
                                    </button>
                                </div>
                            </form>
                        
                            <Link to='/signup'>
                                <button
                                    className="flex w-full mt-5 justify-center rounded-md bg-turquezapb px-3 py-1.5 text-sm font-semibold leading-6 text-[#ffffff] shadow-lg shadow-turqueza hover:bg-turquezapb focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Registrarse
                                </button>
                            </Link>
                        
                        </div>
                    </div>

                    <div className="w-1/2 h-full">
                        <img className="h-full w-full object-cover rounded-lg" 
                            src="/images/perfectbody.jpg" 
                            alt="perfect" 
                        />
                    </div>

                </section>
            </>
        )
}
