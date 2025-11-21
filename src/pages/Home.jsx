import Hero from '../componentes/sections/Hero';
import CountdownTimer from '../componentes/sections/CountdownTimer';

const Home = () => {
  return (
    <>
      < Hero />
      < CountdownTimer />
      <div className="h-96 bg-gradient-to-b from-blue-900 to-yellow-600 flex items-center justify-center">
        <h2 className="text-white text-5xl font-bold">¡WEDO ECUADOR YA ESTÁ VIVO!</h2>
      </div>
    </>
  );
};

export default Home;