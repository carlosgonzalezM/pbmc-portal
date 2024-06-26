import React from 'react'
import useEvento from '../../Hooks/useEvento';


export default function Birthday() {


  const {cumpleañosObtenidos} = useEvento();

  const cumpleaños = cumpleañosObtenidos;

  return (
    <section className="flex justify-between ">
        <section className="w-1/3">
            <div className=" w-full bg-[#FFFFF] py-2 px-20 sm:py-16">
                <ul className=" flex flex-col justify-items-start text-left" >
                  {
                    cumpleaños.map(cumplea=>(
                      <li className="flex justify-start items-start text-left mb-3 " 
                      key={cumplea.id}
                  >                              
                      <p className=" text-magentapb font-bold text-xl mr-4 text-left font-serif">
                          {cumplea.date_birthday}
                      </p>

                      <p className=" font-semibold text-2xl text-[#003164] text-left font-serif">
                          {cumplea.full_name}
                      </p>
                  </li>
                    )) 
                  }  
                  
                </ul>
            </div>
        </section>

        <section className="w-2/3">
            <div className="bg-[#FFFFFF] w-full py-2 sm:py-16">
                <div className="mx-auto grid w-full gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                   <ul role="list" 
                       className="grid gap-x-10 gap-y-20 w-full sm:grid-cols-3 sm:gap-y-16 xl:col-span-4"
                   >
                    {
                      cumpleaños.map(cumplea=>(
                        <li key={cumplea.id}>
                        <div className="flex items-center gap-x-6">
                          <img className=" h-32 w-32 rounded-full" 
                            src={`http://127.0.0.1:8000/storage/${cumplea.image}`} alt="" 
                          />
                          <div>
                            <h3 className=" text-xl font-semibold font-serif leading-7 tracking-tight text-[#003164]">
                              {cumplea.full_name}
                            </h3>
                            <p className=" text-base font-semibold leading-6 text-[#00568C] font-serif">
                              {cumplea.area}
                            </p>
                          </div>
                        </div>
                      </li>       

                      ))
                    }
                       
                    </ul>
                 </div>
            </div>
        </section>
  </section>
  )
}
