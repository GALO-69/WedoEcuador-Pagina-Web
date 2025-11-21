import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/logo-wedo.png" alt="WEDO Ecuador" className="h-10" />
            <span className="font-bold text-xl text-yellow-600">WEDO Ecuador</span>
          </NavLink>

          {/* Menú */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600 font-bold" : "text-gray-700 hover:text-yellow-600"}>
              Inicio
            </NavLink>
            <NavLink to="/programas" className={({ isActive }) => isActive ? "text-yellow-600 font-bold" : "text-gray-700 hover:text-yellow-600"}>
              Programas
            </NavLink>
            <NavLink to="/eventos" className={({ isActive }) => isActive ? "text-yellow-600 font-bold" : "text-gray-700 hover:text-yellow-600"}>
              Eventos
            </NavLink>
            <NavLink to="/comunidad" className={({ isActive }) => isActive ? "text-yellow-600 font-bold" : "text-gray-700 hover:text-yellow-600"}>
              Comunidad
            </NavLink>
            <NavLink to="/contacto" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition">
              ¡Únete!
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;