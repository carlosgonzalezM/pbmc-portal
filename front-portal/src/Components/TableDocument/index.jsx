import { faClosedCaptioning, faDownload, faFileExcel, faFilePdf, faFilePowerpoint, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useEvento from '../../Hooks/useEvento';
import axios from 'axios';

export default function TableDocument() {

    const {documentosObtenidos} = useEvento()

    const documentos = documentosObtenidos

    function adivinarFormato(doc) {
        
        const formatoPDF = /\.pdf$/i;
        const formatoWord = /\.(docx?|rtf)$/i;
        const formatoExcel = /\.xlsx?$/i;
        const formatoPowerPoint = /\.pptx?$/i;
    
        switch (true) {
            case formatoPDF.test(doc):
                return faFilePdf;
            case formatoWord.test(doc):
                return faFileWord;
            case formatoExcel.test(doc):
                return faFileExcel;
            case formatoPowerPoint.test(doc):
                return faFilePowerpoint;
            default:
                return faClosedCaptioning;
        }
    }

    function obtenerColorIcono(tipo){
        switch(tipo){
            case faFilePdf:
                return 'text-[#EF4444]'
            case faFileWord:
                return 'text-[#3B82F6]'
            case faFileExcel:
                return 'text-[#10B981]'
        }
    }

    const download = (archivo) => {
        axios({
            url: `http://127.0.0.1:8000/api/download/${archivo}`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${archivo}` )
            document.body.appendChild(link);
            link.click()

            window.URL.revokeObjectURL(url);
        }
        )
    }

  return (
    <section className="w-full flex justify-center pb-20">
        <div className="w-4/5  rounded-lg bg-[#fff] shadow-md p-6">
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
                                                                <FontAwesomeIcon className={`w-8 h-8 ${obtenerColorIcono(adivinarFormato(documento.document))}`}
                                                                    icon={adivinarFormato(documento.document)} 
                                                                /> 
                                                            </td>
                                                            
                                                            <td className="p-3 font-semibold text-start">
                                                                {documento.title}
                                                            </td>
                                                            
                                                            <td className="p-3 text-start">
                                                                {documento.description}
                                                                
                                                            </td>
                                                          
                                                            <td  className="p-3 flex justify-start items-center"> 
                                                                <FontAwesomeIcon 
                                                                    onClick={()=>download(documento.document)}
                                                                    icon={faDownload} 
                                                                    className="w-8 h-8 cursor-pointer text-turquezapb"
                                                                />
                                                            </td>
                                                        </tr>

                                                    )
                                        )
                    }
                </tbody>
            </table>
        </div>  
    </section>
  )
}
