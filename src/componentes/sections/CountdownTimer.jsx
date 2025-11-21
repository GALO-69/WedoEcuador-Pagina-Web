import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const target = new Date('November 19, 2025 00:00:00').getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTime({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          m: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          s: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(to right, #FFD700, #FF8C00)',
      padding: '60px 20px',
      textAlign: 'center',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>
        FALTAN PARA EL DÍA DEL EMPRENDIMIENTO FEMENINO
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', fontSize: '4rem', fontWeight: 'bold' }}>
        <div><div>{time.d}</div><div style={{ fontSize: '1.5rem' }}>DÍAS</div></div>
        <div><div>{time.h}</div><div style={{ fontSize: '1.5rem' }}>HORAS</div></div>
        <div><div>{time.m}</div><div style={{ fontSize: '1.5rem' }}>MINUTOS</div></div>
        <div><div>{time.s}</div><div style={{ fontSize: '1.5rem' }}>SEGUNDOS</div></div>
      </div>
    </div>
  );
};

export default CountdownTimer;