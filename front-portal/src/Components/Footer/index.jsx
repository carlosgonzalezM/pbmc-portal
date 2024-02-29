import React from 'react'

export default function Footer() {
  return (
        <footer className="w-full flex justify-between items-center pt-12">
            <div className="w-full flex justify-between p-5 m-5 px-11">
                <div className="flex justify-start ">
                    <h1 className=" text-2xl font-bold text-turquezapb">
                        Tecnologia Perfect Body 
                    </h1>
                </div>

                <div className="flex flex-col justify-start items-start">
                    <h3 className=" text-lg font-bold text-turquezapb mt-1  pb-3">
                        Nuestros Servicios
                    </h3>
                    <div className="flex flex-col justify-start items-start">
                        <p className=" text-sm font-medium">
                            Soporte para la herramienta SIOS
                        </p>
                    
                        <p className="text-sm font-medium">
                            Desarrollo de aplicaciones web
                        </p>
                        <p className="text-sm font-medium">
                            Diseño de aplicaciones web
                        </p>
                        <p className=" text-sm font-medium" >
                            Seguridad Informatica
                        </p>
                    </div>
                </div>
            
                <div className="flex flex-col justify-start items-start">
                    <h3 className="text-lg font-bold text-turquezapb mt-1 pb-3">
                        Contacto
                    </h3>

                    <div className="flex flex-col justify-start items-start" >
                        <p className=" text-sm font-medium" >
                            (605) 4237101 ext 6020
                        </p>
                    
                        <p className="text-sm font-medium">
                            tecnologia@perfectbody.com.co
                        </p>

                        <p className="text-sm font-medium">
                            Lunes a Viernes 7:30am-12:00m / 2:00pm-6:00pm, Sabados 8:00am-12:00m
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
