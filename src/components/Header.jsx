import React from 'react'
import MenuHamburguesa from './MenuHamburguesa'
function Header() {
  return (
    <>
        <header id="inicio">
            <div className='headerdiv'>

                <div className='headerdiv-nombre'>
                    <h2>Jesús</h2>
                    <i class="fa-solid fa-code"></i>
                </div>

                <div className='headerdiv-enlaces'>
                    <nav>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li> <a href="#sobremi">Acerca de mi</a></li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#proyectos">Proyectos</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>

                </div>

                <div className='headerdiv-menuhamburguesa'>
                    <MenuHamburguesa/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
