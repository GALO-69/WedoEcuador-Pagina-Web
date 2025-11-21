import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />   {/* Aquí se renderiza Home, Programs, etc. */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;