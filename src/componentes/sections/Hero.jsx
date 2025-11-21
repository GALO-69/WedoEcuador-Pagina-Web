import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-yellow-600">
      {/* Imagen de fondo real (descarga y ponla en public/hero-ecuador.jpg) */}
      <div className="absolute inset-0">
        <img
          src="/hero-ecuador.jpg"
          alt="Mujeres emprendedoras de Ecuador"
          className="w-full h-full object-cover opacity-40"
          loading="eager" // Es el hero → carga rápido
          fetchPriority="high"
        />
        {/* Overlay oscuro para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo + Título */}
        <div className="mb-8">
          <img
            src="/logo-wedo-white.png"
            alt="WEDO Ecuador"
            className="h-20 md:h-28 mx-auto mb-6"
            loading="eager"
          />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-white drop-shadow-2xl">
            WEDO <span className="text-yellow-400">ECUADOR</span>
          </h1>
        </div>

        <p className="text-lg sm:text-2xl md:text-3xl font-light text-white mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          Empoderamos a las mujeres emprendedoras del Ecuador con{' '}
          <span className="font-bold text-yellow-300">educación en IA</span>, innovación y redes de apoyo
          para romper la pobreza y construir un futuro equitativo.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/programas"
            className="group bg-yellow-500 text-black font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
            aria-label="Únete al Programa de IA para mujeres"
          >
            ÚNETE AL PROGRAMA IA
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            to="/contacto"
            className="border-4 border-white text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 backdrop-blur-sm"
            aria-label="Conviértete en embajadora WEDO Ecuador"
          >
            SER EMB AJADORA
          </Link>
        </div>

        {/* Bandera sutil en la esquina */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-80">
          <span className="text-4xl">Ecuador</span>
          <div className="w-24 h-16 bg-yellow-400 border-2 border-white shadow-lg rounded-sm flex flex-col">
            <div className="h-1/3 bg-blue-700"></div>
            <div className="h-1/3 bg-red-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;