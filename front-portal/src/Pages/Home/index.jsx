import React from 'react'
import FeaturedNews from '../../Components/FeaturedNews'
import CardNews from '../../Components/CardNews'
import Banner from '../../Components/Banner'
import Birthday from '../../Components/Birthday'
import Footer from '../../Components/Footer'
import useEvento from '../../Hooks/useEvento'
import TableDocument from '../../Components/TableDocument'

export default function Home() {

    const {noticiasObtenidas, cumpleañosObtenidos, fechaActual } = useEvento();

    const noticias = noticiasObtenidas;
    const cumpleaños = cumpleañosObtenidos;
    const fecha = fechaActual;

    console.log(noticias)
    console.log(cumpleaños)

  return (
    <>
        <FeaturedNews/>

        <div className='flex flex-col items-center mt-20'>
            <div className="w-full">
                <h1 className='xl:w-[40%] w-full text-4xl font-bold text-turquezapb p-4 text-start xl:border-b-2 xl:border-b-magentapb ml-2'>
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
        </div>

        <Banner/>
        
        <div className="w-full">
            <h1 className='w-[30%] text-start text-3xl font-semibold text-turquezapb mt-10 border-b-2 pb-4  border-b-magentapb' >
                Cumpleaños {fecha} Perfect Body
            </h1>
        </div>
            {
                cumpleaños.map(cumple =>(
                    <Birthday
                        key={cumple.id}
                        cumple = {cumple}
                    />
                ))
            }
        

        <TableDocument/>
    
        <Footer/>
    </>
  )
}
