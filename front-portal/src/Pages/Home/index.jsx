import React from 'react'
import FeaturedNews from '../../Components/FeaturedNews'
import CardNews from '../../Components/CardNews'
import Banner from '../../Components/Banner'
import Birthday from '../../Components/Birthday'
import Footer from '../../Components/Footer'
import useEvento from '../../Hooks/useEvento'

export default function Home() {

    const {noticiasObtenidas} = useEvento();

    const noticias = noticiasObtenidas


  return (
    <>
        <FeaturedNews/>

        <div className='flex flex-col items-center mt-20'>
            <div className="w-full">
                <h1 className='w-[40%] text-4xl font-bold text-turquezapb p-4 text-start border-b-2 border-b-magentapb ml-2'>
                    NOTICIAS PERFECT BODY
                </h1>
            </div>
                    
            <div className='grid gap-3 grid-cols-3 items-center w-full h-[940px] mb-10'>
                
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
                Cumpleaños Perfect Body
            </h1>
        </div>

        <Birthday/>
        
        <Footer/>
    </>
  )
}
