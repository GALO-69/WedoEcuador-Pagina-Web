import Hero from '../componentes/sections/Hero';
import CountdownTimer from '../componentes/sections/CountdownTimer';

const Home = () => {
  return (
    <>
      <Hero />
      <CountdownTimer />
      <div style={{ padding: '100px 20px', textAlign: 'center', background: '#f8f8f8' }}>
        <h2 style={{ fontSize: '3rem', color: '#333' }}>¡Bienvenida a WEDO Ecuador!</h2>
      </div>
    </>
  );
};

export default Home;