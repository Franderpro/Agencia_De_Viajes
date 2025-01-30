
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className="relative py-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/ejemplo1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center text-white mb-8">
          <h2 className="text-4xl font-bold mb-4">Tu próxima aventura está por comenzar...</h2>
          <p className="text-xl">Suscríbete a nuestra newsletter y recibe las mejores ofertas de viaje</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Suscribirse
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
