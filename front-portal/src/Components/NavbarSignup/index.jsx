import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarSignup() {
  return (
    <header className=' bg-[#FFFFFF] shadow-lg w-full h-24' >
        <nav className=' mx-auto flex items-center justify-between' >
            <figure>
                <img
                className=' h-20 w-auto' 
                src="../../../images/Logo-Perfect-Body-Medical-Center.png" 
                alt="logo" />
            </figure>
            <Link to="/login" >
            <div className='flex items-center justify-between w-56 mx-6'>
                    <FontAwesomeIcon icon= {faArrowLeftLong}/>
                    <h3 className=' text-turquezapb font-medium'>
                        Regresar a Iniciar Sesion
                    </h3>
            </div>
            </Link>
            
        </nav>
    </header>
  )
}