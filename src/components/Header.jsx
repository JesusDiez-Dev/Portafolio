import React from 'react'
import MenuHamburguesa from './MenuHamburguesa'
function Header() {
  return (
    <>
        <header>
            <div className='headerdiv'>

                <div className='headerdiv-nombre'>
                    <h2>Jesús</h2>
                    <i class="fa-solid fa-code"></i>
                </div>

                <div className='headerdiv-enlaces'>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Acerca de mi</li>
                            <li>Habilidades</li>
                            <li>Proyectos</li>
                            <li>Contacto</li>
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
