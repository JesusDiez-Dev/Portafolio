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
                    <p>Con más de 2 años de experiencia en la creación de experiencias web atractivas y funcionales. Buen nivel en tecnologías front-end, incluyendo HTML5, CSS3, JavaScript y frameworks como React. Capaz de traducir diseños creativos en código interactivo y optimizar la velocidad y el rendimiento del sitio web</p>
                </div>

                <div className='heroderecha-iconos'>
                    <p>Echa un vistaso a mi</p>
                    <a href="https://www.linkedin.com/in/jes%C3%BAsdiez/"><i class="fa-brands fa-linkedin"></i></a>
                </div>

                <div className="heroderecha-cv">
                    <a href="https://drive.google.com/file/d/1ESEtW8yFAX2ScyHOh-hfGWqkwaRqoavo/view?usp=drive_link">Ver Currículum</a>
                </div>
            



            </div>

        </div>
        <div className="uwu">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        </div>
    </>
  )
}

export default Hero
