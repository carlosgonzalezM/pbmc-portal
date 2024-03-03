import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 1,
        image: "https://www.perfectbody.com.co/wp-content/uploads/2021/04/Perfect-Body-Medical-Center-670x446.jpg",
        title: "Linea de atencion a salud mental sura arl",
        descripcion: "teleorientacion psicosocial y psicoeducativa",
    },
    {
        id: 2,
        image: "https://www.perfectbody.com.co/wp-content/uploads/2021/04/Perfect-Body-Medical-Center-670x446.jpg",
        title: "protocolo de atencion de violencia sexual",
        descripcion: "Herramientas conceptuales y prácticas para el abordaje de la atención que sea requerida en estos casos.",
    },
    {
        id: 3,
        image: "https://www.perfectbody.com.co/wp-content/uploads/2021/04/Perfect-Body-Medical-Center-670x446.jpg",
        title: "tCONSENTIMIENTO INFORMADO PARA VICTIMAS DE AGRESIONES SEXUALES Y LESIONES PERSONALES",
        descripcion: "FORMATO DE CONSENTIMIENTO INFORMADO",
    },
    {
        id: 4,
        image: "data:image/png;base64,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",
        title: "M3-P15-PR02 PROTOCOLO DE ATENCION CON RIESGO BIOLOGICO LABORAL Y NO LABORA",
        descripcion: "ATENCION DE ACCIDENTES CON RIESGO BIOLOGICO LABORAL Y NO LABORAL",
    },

]


export default function FeaturedNews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
       
        <Slider {...settings}>
            {
             data.map((d)=>(
                                <div className="w-full h-[480px] rounded-lg">
                                    <article className="w-full h-full flex justify-between mt-10 pb-5 rounded-lg">
                                        <div className="w-2/4 flex flex-col px-5">
                                            <h1 className="font-cibfont-sans font-bold text-start mb-5 text-4xl text-turquezapb">
                                                {d.title}
                                            </h1>
                                            <p className="font-cibfont-sans text-lg text-start font-semibold mb-5 text-turquezapb">
                                                {d.descripcion}
                                            </p>
                                            <div className="flex  justify-start">
                                                <Link to='/noticia'>
                                                    <button className=" text-[#FFFFFF] font-bold bg-magentapb text-white py-2 px-4 rounded-full shadow-md shadow-magenta/50">
                                                        Ver más
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <img className="w-2/4 rounded-lg object-cover" 
                                             src={d.image} 
                                             alt="" 
                                        />
                                    </article>
                                </div>
                            )
                    )
            }
        </Slider>
    )
}
