  import React from 'react';
  import { Carousel } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Nav from './Nav'
  import Footer from './Footer';
  import { FaPlane, FaGlobeAmericas, FaCompass } from 'react-icons/fa';

  const HomeC = () => {
    return (
      <>
        <div className="w-full overflow-hidden bg-white">
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <div className="w-full h-[600px] bg-cover bg-center relative">
                <img
                  src="/img/ejemplo1.jpg"
                  alt="Primera imagen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(75,22,76,0.7)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h1 className="text-5xl font-bold mb-4 text-white flex items-center gap-4"><FaPlane className="text-4xl" /> Tu viaje soñado comienza aquí</h1>
                  <p className="text-2xl text-white">Descubre destinos increíbles y crea memorias inolvidables</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-full h-[600px] bg-cover bg-center relative">
                <img
                  src="/img/ejemplo2.jpg"
                  alt="Segunda imagen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(95,28,96,0.7)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h1 className="text-5xl font-bold mb-4 text-white flex items-center gap-4"><FaGlobeAmericas className="text-4xl" /> Explora el mundo con nosotros</h1>
                  <p className="text-2xl text-white">Las mejores experiencias te esperan</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-full h-[600px] bg-cover bg-center relative">
                <img
                  src="/img/ejemplo3.jpg"
                  alt="Tercera imagen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(55,16,56,0.7)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <h1 className="text-5xl font-bold mb-4 text-white flex items-center gap-4"><FaCompass className="text-4xl" /> Vive la aventura</h1>
                  <p className="text-2xl text-white">Destinos exclusivos a precios increíbles</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <Nav/>
          <Footer/>
        </div>
      </>
    );
  };

  export default HomeC;