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
            <li>Inicio</li>
            <li>Acerca de mí</li>
            <li>Habilidades</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
