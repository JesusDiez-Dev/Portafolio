import React from 'react'
import jugador from "../img/jugador.png"
function Acercademi() {
  return (
    <>
        <div className="acercademi" >

            <div className='acercademi-izquierda' id="sobremi">

                <div className='acercademi-izquierda-texto'>
                    <h2>Sobre mi</h2>
                    <p>Soy un profesional del desarrollo de software, especializado en el desarrollo web front-end. Desde que comencé mis estudios en programación, descubrí mi interés por crear interfaces web intuitivas y atractivas. Cada día me dedico a aprender y practicar nuevas tecnologías para seguir mejorando mis habilidades. Me considero una persona responsable, dinámica y creativa, con una gran capacidad de adaptación y un constante deseo de trabajar y aprender. Tengo iniciativa para resolver problemas y disfruto enfrentando nuevos desafíos en el campo de la tecnología. En el futuro, planeo expandir mis conocimientos y dominar una variedad aún mayor de herramientas y técnicas en el desarrollo web</p>
                </div>

                <div className='acercademi-izquierda-info'>
                    <ul>
                        <li className='acercademi-izquierda-info-linkedin'><span>LinkedIn:</span><a href="https://www.linkedin.com/in/jes%C3%BAsdiez/"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li className='acercademi-izquierda-info-correo'><span>Correo:</span><a href="mailto:jesu.alejandrox@gmail.com?subject=Consulta%20sobre%20un%20servicio&body=Hola,%20estoy%20interesado%20en%20más%20información%20sobre..."><i class="fa-regular fa-envelope"></i></a></li>
                        
                    </ul>
                </div>

            </div>

            <div className='acercademi-derecha'>
                <img src={jugador} alt="" /> 
            </div>

        </div>
        {/* <img src={jugador} alt="" /> */}
    </>
  )
}

export default Acercademi
