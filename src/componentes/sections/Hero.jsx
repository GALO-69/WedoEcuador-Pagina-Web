const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url("/images/hero-ecuador.jpg") center/cover no-repeat',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <div style={{ maxWidth: '1000px' }}>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '900',
          marginBottom: '20px',
          textShadow: '3px 3px 10px rgba(0,0,0,0.8)'
        }}>
          WEDO <span style={{ color: '#FFD700' }}>ECUADOR</span>
        </h1>
        <p style={{
          fontSize: '1.8rem',
          marginBottom: '40px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.5'
        }}>
          Empoderamos a las mujeres emprendedoras del Ecuador con educación en IA,
          innovación y redes de apoyo para romper la pobreza.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <a href="/programas" style={{
            background: '#FFD700',
            color: 'black',
            padding: '18px 40px',
            borderRadius: '50px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            ÚNETE AL PROGRAMA IA →
          </a>
          <a href="/contacto" style={{
            border: '4px solid white',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '50px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            SER EMBAJADORA
          </a>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.5)',
          padding: '15px 30px',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <span style={{ fontSize: '2.5rem' }}>Ecuador</span>
          <div style={{ width: '90px', height: '60px', background: '#FFD700', border: '3px solid white', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '50%', background: '#0066CC' }}></div>
            <div style={{ height: '50%', background: '#CC0000' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;