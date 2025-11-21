import Hero from '../componentes/sections/Hero';
import CountdownTimer from '../componentes/sections/CountdownTimer';

const Home = () => {
  return (
    <>
      <Hero />
      <CountdownTimer />
      {/* Aquí irán las próximas secciones que te paso cuando quieras */}
      <div className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Próximamente: Programas • Impacto • Embajadoras • Eventos
        </h2>
      </div>
    </>
  );
};

export default Home;