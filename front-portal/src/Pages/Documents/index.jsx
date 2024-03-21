import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axiosClient from '../../Config/axios-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faClosedCaptioning, faDownload, faFileExcel, faFilePdf, faFilePowerpoint, faFileWord } from '@fortawesome/free-solid-svg-icons'


export default function Documents() {
  
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    getDocuments();
  },[])

  const getDocuments = () => {
    setLoading(true)
    axiosClient.get('/documents')
      .then(({data})=>{
        setLoading(false)
        console.log(data.data)
        setDocumentos(data.data)
      })
      .catch(()=>{
        setLoading(true)
      })
  }

  const onDelete = (u) => {
    if(!window.confirm("Are you sure you want to delete this user?")){
        return
    }

    axiosClient.delete(`/documents/${u.id}`)
     .then(()=>{
        //TODO show notificacion
        getDocuments();
     })
}

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



  return (
    <div>
      <div className='flex justify-between items-center' >
        <h1 className=' m-0 text-4xl font-semibold font-serif text-[#001F45]' >
          Documentos
        </h1>
        <Link to="/documents/new">
          <button 
            className='rounded-lg font-serif border border-[#10B981] bg-[#10B981] px-5 py-2.5 text-center text-sm font-medium text-[#ffffff] shadow-sm transition-all hover:border-[#047857] hover:bg-[#047857] focus:ring focus:ring-[#A7F3D0] disabled:cursor-not-allowed disabled:border-[#6EE7B7] disabled:bg-[#6EE7B7]' 
          >
            Agregar Documento
          </button>
        </Link>
      </div>

      <div 
        style={{ WebkitAnimationDuration: '0.3s', animationDuration: '0.3s', WebkitAnimationFillMode: 'both', animationFillMode: 'both', WebkitAnimationName: 'fadeInDown', animationName: 'fadeIndown' }} 
        className='rounded-lg mb-4 mt-2 bg-[#FFF] shadow-md p-6 animate-faceInDown' 
        
      >
        <table className='w-full border-collapse' >
          <thead>
            <tr>
              <th className='text-left bg-[#E5E7EB] p-2 font-serif  text-xl '>Id</th>
              <th className='text-left bg-[#E5E7EB] p-2 font-serif text-xl'>titulo</th>
              <th className='text-left bg-[#E5E7EB] p-2 font-serif text-xl' >Descripcion</th>
              <th className='text-left bg-[#E5E7EB] p-2 font-serif text-xl' >documento</th>
              <th className='text-left bg-[#E5E7EB] p-2 font-serif text-xl' >Accion</th>
            </tr>
          </thead>
          {
            loading && 
            <tbody>
              <tr>
                  <td colSpan="5" className=' text-center p-2 font-serif'  >
                    Cargando Documentos...
                  </td>    
              </tr>
            </tbody>
          }
          {
            !loading &&
            <tbody>
              {
                documentos.map(n =>(
                  <tr>
                    <td className='p-2 border-b border-[#efefef] font-serif  text-lg' >{n.id}</td>
                    <td className='p-2 border-b border-[#efefef] font-serif text-lg' >{n.title}</td>
                    <td className='p-2 border-b border-[#efefef] font-serif text-lg' >{n.description}</td>
                    <td className='p-2 border-b border-[#efefef] font-serif text-lg' >
                      <FontAwesomeIcon
                        className={` w-6 h-6 ${obtenerColorIcono(adivinarFormato(n.document))}`}
                        icon={adivinarFormato(n.document)}
                      />
                    </td>
                    
                    <td className='p-2 border-b border-[#efefef] justify-center font-serif'>
                      <Link to={'/documents/'+ n.id}>
                        <button> 
                          <FontAwesomeIcon className='w-5 h-5' icon={faPenToSquare}/> 
                        </button>
                      </Link>
                      &nbsp; &nbsp;
                      <button onClick={ev => onDelete(n)} >
                        <FontAwesomeIcon icon={faTrashCan} className=' text-[#ff0000] w-5 h-5'/>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          }

        </table>
      </div>

    </div>
  )
}