import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src="src/assets/fondo.jpg"
        alt="Alquileres"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Animación de la casa (logo) */}
      <motion.img
        src="src/assets/logo.png"
        alt="Logo Casa"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-90 h-90 mb-4 relative z-20"
      />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-20 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Encuentra tu hogar ideal
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Más de 100 propiedades exclusivas en alquiler. Descubre la excelencia en servicio inmobiliario.
        </p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-700 transition-colors">
          Ver Propiedades
        </button>
      </motion.div>
    </section>
  );
};

export default MainContent;