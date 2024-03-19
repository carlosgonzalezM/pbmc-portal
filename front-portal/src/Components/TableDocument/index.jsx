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
                return 'text-[#AC223A]'
            case faFileWord:
                return 'text-[#1D4AB1]'
            case faFileExcel:
                return 'text-[#176F28]'
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
            <h1 className=" font-semibold text-lg mb-6 font-serif text-[#002351]" >
                Encuentre aqui los documentos
            </h1>
            
            <table class="w-full border-collapse">
                <thead>
                    <tr className="bg-[#E5E7EB]">

                        <th className="p-3 text-left text-[#001943] font-serif ">
                            Fecha de Publicacion
                        </th>
                        <th className="p-3 text-left text-[#001943] font-serif ">
                            Tipo
                        </th>
                        <th className="p-3 text-left text-[#001943] font-serif ">
                            Titulo
                        </th>
                        <th className="p-3 text-left text-[#001943] font-serif ">
                            Descripcion
                        </th>
                        <th className="p-3 text-left text-[#001943] font-serif ">
                            Ver/Descargar 
                        </th>
                    </tr>
                </thead>

                
                <tbody>
                    {
                        documentos.map(documento=>(
                                                        <tr key={documento.id} className=' border-b border-[#E5E7EB]' >
                                                            <td className="p-3 font-serif text-[#004278] text-xl">
                                                                {documento.created_at}
                                                            </td>
                                                            
                                                            <td className="p-3"> 
                                                                <FontAwesomeIcon className={`w-8 h-8 ${obtenerColorIcono(adivinarFormato(documento.document))}`}
                                                                    icon={adivinarFormato(documento.document)} 
                                                                /> 
                                                            </td>
                                                            
                                                            <td className="p-3 font-semibold text-xl font-serif text-[#002351]">
                                                                {documento.title}
                                                            </td>
                                                            
                                                            <td className="p-3 font-serif text-lg text-[#004278] ">
                                                                {documento.description}
                                                                
                                                            </td>
                                                          
                                                            <td  className="p-3 flex justify-start items-center"> 
                                                                <FontAwesomeIcon 
                                                                    onClick={()=>download(documento.document)}
                                                                    icon={faDownload} 
                                                                    className="w-8 h-8 cursor-pointer text-[#004278] hover:text-[#001943]"
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
