import { faClosedCaptioning, faDownload, faFileExcel, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useEvento from '../../Hooks/useEvento';

export default function TableDocument() {

    const {documentosObtenidos} = useEvento()

    const documentos = documentosObtenidos

    function adivinarFormato(doc) {
        // Convertir el nombre del archivo a minúsculas para una comparación insensible a mayúsculas y minúsculas
    
        // Expresiones regulares para diferentes formatos
        const formatoPDF = /\.pdf$/i;
        const formatoWord = /\.(docx?|rtf)$/i;
    
        // Verificar el formato del archivo
        switch (true) {
            case formatoPDF.test(doc):
                return faFilePdf
            case formatoWord.test(doc):
                return faFileWord
            default:
                return faClosedCaptioning
        }
    }

  return (
    <section className="w-full flex justify-center pb-20">
        <div className="w-4/5 border rounded-lg bg-[#fff] shadow-md p-6">
            <h1 className=" font-semibold text-lg" >
                Encuentre aqui los documentos
            </h1>
              <table class="table-auto w-full">
                <thead>
                      <tr className="p-3">
                        <th className="p-3 text-start">
                            Fecha de Publicacion
                        </th>
                        <th className="p-3 text-start">
                            Tipo
                        </th>
                        <th className="p-3 text-start ">
                            Titulo
                        </th>
                        <th className="p-3 text-start">
                            Descripcion
                        </th>
                        <th className="p-3 text-start">
                            Ver/Descargar 
                        </th>
                      </tr>
                </thead>

                  <tbody>
                    {
                        documentos.map(documento=>(
                            <tr>
                        <td className="p-3 text-start">
                            01/12/2023
                        </td>
                        <td className="p-3 justify-start"> 
                            <FontAwesomeIcon 
                                icon={adivinarFormato(documento.document)} 
                            /> 
                        </td>
                        <td className="p-3 font-semibold text-start">
                            {documento.title}
                        </td>
                        <td className="p-3 text-start">
                            {documento.description}
                        </td>
                        <td className="p-3 flex text-start"> 
                            <FontAwesomeIcon 
                                icon={faDownload} 
                                className="w-8 h-8 cursor-pointer"
                            />
                        </td>
                        </tr>

                        ))
                        

                    }
                        
                  </tbody>
              </table>
         </div>  
      </section>
  )
}
