const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-bold mb-4">WEDO Ecuador</p>
        <p className="mb-6">Educate • Empower • Celebrate • Support</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-yellow-400">Instagram</a>
          <a href="#" className="hover:text-yellow-400">LinkedIn</a>
          <a href="#" className="hover:text-yellow-400">WhatsApp</a>
        </div>
        <p className="text-sm">© 2025 WEDO Ecuador • Todos los derechos reservados</p>
        <p className="text-xs mt-2">Inspirado en <a href="https://www.joinwedo.org" className="underline">joinwedo.org</a></p>
      </div>
    </footer>
  );
};

export default Footer;