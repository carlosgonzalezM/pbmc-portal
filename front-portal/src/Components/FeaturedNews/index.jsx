import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useEvento from '../../Hooks/useEvento';


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

      const {noticiasImportantesObtenidas} = useEvento();

      const noticias = noticiasImportantesObtenidas;

    return (
        <Slider {...settings}>
            {
             noticias.map((noticia)=>(
                                <div className="w-full h-[600px] rounded-lg -z-10">
                                    <article className="w-full h-full flex justify-between sm:flex sm:col-auto mt-10 pb-5 rounded-lg">
                                        <div className="w-2/4 flex flex-col px-5">
                                            <h1 className=" font-serif font-bold text-start mb-5 text-xl xl:text-4xl text-[#003164]">
                                                {noticia.title}
                                            </h1>
                                            <p className="font-cibfont-sans text-sm xl:text-lg text-start font-semibold mb-5 text-[#004278]">
                                                {noticia.description}
                                            </p>
                                            <div className="flex  justify-start">
                                                <Link to={'/news/'+noticia.id}>
                                                    <button className=" text-[#FFFFFF] font-bold bg-magentapb py-2 px-4 rounded-full shadow-md shadow-magenta/50">
                                                        Ver más
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <img className="w-2/4 rounded-lg object-cover" 
                                             src={`http://127.0.0.1:8000/storage/${noticia.image}`}
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
