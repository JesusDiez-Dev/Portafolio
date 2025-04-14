import React, { useState } from "react";  // Asegúrate de importar el archivo CSS donde se encuentra el estilo.

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="botonhamburguesa" onClick={toggleMenu}>
          <i className="fa fa-bars"></i> {/* Icono de Font Awesome */}
        </div>
        <nav className={isMenuOpen ? "active" : ""}>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li> <a href="#sobremi">Acerca de mi</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
