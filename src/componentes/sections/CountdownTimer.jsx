import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('November 19, 2025 00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          FALTAN PARA EL DÍA DEL EMPRENDIMIENTO FEMENINO
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-5xl md:text-7xl font-bold">
          <div>
            <div>{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xl md:text-2xl mt-2">DÍAS</div>
          </div>
          <div>
            <div>{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xl md:text-2xl mt-2">HORAS</div>
          </div>
          <div>
            <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xl md:text-2xl mt-2">MINUTOS</div>
          </div>
          <div>
            <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xl md:text-2xl mt-2">SEGUNDOS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;