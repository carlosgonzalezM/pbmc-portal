import React from 'react'
import FeaturedNews from '../../Components/FeaturedNews'
import CardNews from '../../Components/CardNews'
import Banner from '../../Components/Banner'
import Birthday from '../../Components/Birthday'
import Footer from '../../Components/Footer'
import useEvento from '../../Hooks/useEvento'
import TableDocument from '../../Components/TableDocument'
import Navbar from '../../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    const {noticiasObtenidas, fechaActual, info,handleNextPage, handlePreviousPage, paginaActual, paginaFinal } = useEvento();

    const noticias = noticiasObtenidas;
    const fecha = fechaActual;

  return (
    <>
        <Navbar/>
        <FeaturedNews/>

        <div className='flex flex-col items-center mt-20'>
            <div className="w-full">
                <h1 className='xl:w-[40%] w-full text-4xl font-bold text-turquezapb p-4 text-start xl:border-b-2 xl:border-b-magentapb ml-2 font-serif'>
                    NOTICIAS PERFECT BODY
                </h1>
            </div>
                    
            <div className='grid gap-2 grid-cols-1 xl:place-items-center xl:grid-cols-3 md:grid-cols-2  w-full h-full mb-10'>
                
                {
                    noticias.map(noticia =>(
                            <CardNews
                                key={noticia.id}
                                noticia={noticia}
                            />
                        )
                    )
                }
            </div>

            <nav className=' flex w-[15%] justify-around mb-4 items-center'>
                <ul  >
                    {info.last ? (
                        <li>
                            <button className=' rounded-full bg-turquezapb w-20 h-10 text-[#FFFFFF]' onClick={handleNextPage} >
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </button>
                        </li>
                    ):null}
                </ul>
                <ul>
                    <p>Pagina <span className=' font-bold'> {paginaActual} </span> de <span className=' font-bold' > {paginaFinal} </span> </p>
                </ul>
                <ul>
                    {info.first ? (
                        <li>
                            <button className='rounded-full bg-turquezapb w-20 h-10 text-[#FFFFFF]' onClick={handlePreviousPage} >
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </li>
                    ):null}
                </ul>
            </nav>

        </div>

        <Banner/>
        
        <div className="w-full">
            <h1 className='w-[30%] text-start text-3xl font-semibold font-serif text-turquezapb mt-10 border-b-2 pb-4  border-b-magentapb' >
                Cumpleaños {fecha} Perfect Body
            </h1>
        </div>
     
        <Birthday/>
        <TableDocument/>
        <Footer/>
    </>
  )
}
