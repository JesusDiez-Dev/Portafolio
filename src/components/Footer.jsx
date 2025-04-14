import React from 'react'

function Footer() {
  return (
    <>
        <footer>
            <div className='footerdiv' id="contacto">

                <div className='footerdiv-h2'>
                    <h2>Contactame:</h2>
                </div>

                <div className='footerdiv-parrafo'>
                    <span>¡Hola! Estoy entusiasmado por la posibilidad de formar parte de tu equipo.</span>
                    <p>Si estás buscando un desarrollador web comprometido, con experiencia en tecnologías como JavaScript, React, SQL, TypeScript, y una pasión por la innovación tecnológica, ¡has llegado al lugar correcto! </p>
                </div>

                <div className='footerdiv-redes'>
                    <a href="https://www.linkedin.com/in/jes%C3%BAsdiez/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:jesu.alejandrox@gmail.com?subject=Consulta%20sobre%20un%20servicio&body=Hola,%20estoy%20interesado%20en%20más%20información%20sobre..."><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
