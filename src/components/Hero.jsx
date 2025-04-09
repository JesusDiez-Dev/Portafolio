import React from 'react'
import img from '../img/image.png'
function Hero() {
  return (
    <>
        <div className="hero">

            <div className="heroizquierda">
                <img src={img} alt="" />
            </div>

            <div className="heroderecha">

                <div className="heroderecha-nombreycargo">
                    <h2>Jesús Alejandro</h2>
                    <h1>DESARROLLADOR FRONTEND</h1>
                </div>

                <div className="heroderecha-descripcion">
                    <p>Con más de 1 año de experiencia en la creación de experiencias web atractivas y funcionales. Buen nivel en tecnologías front-end, incluyendo HTML5, CSS3, JavaScript y frameworks como React. Capaz de traducir diseños creativos en código interactivo y optimizar la velocidad y el rendimiento del sitio web</p>
                </div>

                <div className='heroderecha-iconos'>
                    <p>Echa un vistaso a mi</p>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>

                <div className="heroderecha-cv">
                    <a href="#">ver Currículum</a>
                </div>



            </div>

        </div>
    </>
  )
}

export default Hero
