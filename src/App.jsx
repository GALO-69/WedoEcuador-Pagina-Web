import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout/layout.jsx';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Community from './pages/Community';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Todas las páginas usan el mismo Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programas" element={<Programs />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>

        {/* 404 - Página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};


export default App;
