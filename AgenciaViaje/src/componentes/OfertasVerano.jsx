  import React from 'react';
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';

  const OfertasVerano = () => {
    const ofertasDestacadas = [
      {
        id: 1,
        titulo: "Playas del Caribe",
        imagen: "/img/ejemplo1.jpg",
        precio: "999€",
        descripcion: "7 días todo incluido"
      },
      {
        id: 2,
        titulo: "Santorini, Grecia",
        imagen: "/img/ejemplo2.jpg",
        precio: "1299€",
        descripcion: "5 días con desayuno"
      },
      {
        id: 3,
        titulo: "Maldivas",
        imagen: "/img/ejemplo3.jpg",
        precio: "1599€",
        descripcion: "10 días en resort"
      },
      {
        id: 4,
        titulo: "Bali, Indonesia",
        imagen: "/img/ejemplo4.jpg",
        precio: "1199€",
        descripcion: "8 días en villa privada"
      },
      {
        id: 5,
        titulo: "Phuket, Tailandia",
        imagen: "/img/ejemplo5.jpg",
        precio: "899€",
        descripcion: "6 días con excursiones"
      },
      {
        id: 6,
        titulo: "Riviera Maya",
        imagen: "/img/ejemplo6.jpg",
        precio: "1099€",
        descripcion: "7 días todo incluido"
      }
    ];

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 768, min: 480 },
        items: 2,
        slidesToSlide: 1
      },
      smallMobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    const CustomButtonGroup = ({ next, previous }) => {
      return (
        <div className="absolute w-[108%] top-1/2 left-[-4%] transform -translate-y-1/2 flex justify-between z-10">
          <button onClick={previous} className="bg-transparent border-none cursor-pointer">
            <span className="text-4xl text-[#4b164c]">‹</span>
          </button>
          <button onClick={next} className="bg-transparent border-none cursor-pointer">
            <span className="text-4xl text-[#4b164c]">›</span>
          </button>
        </div>
      );
    };

    return (
      <div className="container-fluid py-20">
        <h2 className="text-left mb-8">Destacados del Verano</h2>
        <div className="relative px-5">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customButtonGroup={<CustomButtonGroup />}
            arrows={false}
            renderButtonGroupOutside={true}
            className="pb-5"
          >
            {ofertasDestacadas.map((oferta) => (
              <div key={oferta.id} className="px-2 h-full">
                <div className="rounded overflow-hidden shadow-lg h-[400px] flex flex-col">
                  <div className="h-[200px] overflow-hidden">
                    <img 
                      src={oferta.imagen} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      alt={oferta.titulo}
                    />
                  </div>
                  <div className="p-4 bg-[#4b164c] bg-opacity-75 text-white flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-2">{oferta.titulo}</h3>
                      <p className="text-gray-300">{oferta.descripcion}</p>
                    </div>
                    <p className="text-yellow-400 text-2xl mt-2">{oferta.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };

  export default OfertasVerano;