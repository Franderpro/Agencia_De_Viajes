  import React from 'react';
  import { FaHome, FaPlane, FaHeadset, FaEnvelope, FaUsers } from 'react-icons/fa';

  const Nav = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-8">
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#c567ce] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-[#c567ce] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaHome className="text-xl" /> Home
          </button>
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#c567ce] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-[#c567ce] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaPlane className="text-xl" /> Ver paquetes
          </button>
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#c567ce] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-[#c567ce] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaHeadset className="text-xl" /> Solicitar asesoría gratuita
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#c567ce] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-[#c567ce] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaEnvelope className="text-xl" /> Contacto
          </button>
          <button className="flex items-center gap-2 text-gray-800 hover:text-[#c567ce] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-[#c567ce] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaUsers className="text-xl" /> Nosotros
          </button>
        </div>
      </div>
    );
  };

  export default Nav;