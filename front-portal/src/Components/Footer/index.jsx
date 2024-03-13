import React from 'react'

export default function Footer() {
  return (
        <footer className=' bg-turquezapb w-full h-auto border-t-4 border-t-magentapb mt-20' >
            <div className="w-full flex justify-between items-center pt-12">
                <div className="w-full flex justify-between p-5 m-5 px-11">
                    <div className="flex justify-center items-center flex-col ">
                        <h1 className=" text-2xl text-start font-bold text-[#FFFFFF] mb-6 pb-2">
                            <span className=' pb-2 border-b-2  border-b-magentapb'>
                                Tecn</span>ologia 
                        </h1>

                        <img 
                            src="../../../images/Logo-Perfect-body-blanco.png" 
                            alt="perfect"  
                            className='w-[240px] h-auto'
                        />
                
                        <img 
                            src="../../../images/Supersalud-1-300x120.png" 
                            alt="perfect"  
                            className='w-[240px] h-auto'
                        />

                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <h1 className=" text-2xl text-start font-bold text-[#FFFFFF] mb-6 pb-2">
                            <span className=' pb-2 border-b-2  border-b-magentapb'>Nuest</span>ros Servicios 
                        </h1>
                        <div className="flex flex-col justify-start items-start">
                            <p className="  text-sm mb-4 text-[#FFFFFF] font-medium">
                                Soporte para la herramienta SIOS
                            </p>
                    
                            <p className="text-sm mb-4 text-[#FFFFFF] font-medium">
                                Desarrollo de aplicaciones web
                            </p>
                            <p className="text-sm mb-4 text-[#FFFFFF] font-medium">
                                Diseño de aplicaciones web
                            </p>
                            <p className=" text-sm mb-4 text-[#FFFFFF] font-medium" >
                                Seguridad Informatica
                            </p>
                        </div>
                    </div>
            
                    <div className="flex flex-col justify-start items-start">
                        <h1 className=" text-2xl text-start font-bold text-[#FFFFFF] mb-6 pb-2">
                            <span className=' pb-2 border-b-2  border-b-magentapb'>Cont</span>acto 
                        </h1>

                        <div className="flex flex-col justify-start items-start" >
                            <p className=" text-sm mb-4 text-[#FFFFFF] font-medium" >
                                (605) 4237101 ext 6020
                            </p>
                    
                            <p className="text-sm mb-4 text-[#ffffff] font-medium">
                                tecnologia@perfectbody.com.co
                            </p>

                            <p className="text-sm  mb-4 text-[#FFFFFF] font-medium">
                                Lunes a Viernes 7:30am-12:00m / 2:00pm-6:00pm, Sabados 8:00am-12:00m
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}
