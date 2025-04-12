import React from 'react'
import figma from "../img/figma.png"
import html from "../img/html-5.png"
import css from "../img/css-3.png"
import js from "../img/js.png"
// import react from "../img/react.png"
// import bootstrap from "../img/bootstrap.png"
// import github from "../img/github.png"
// import git from "../img/git.png"

function Habilidades() {
  return (
    <>

        <div className='habilidades'>

          <div className='habilidades-titulo'>
            <h2>Habilidades</h2>
          </div>

          <div className='habilidades-parrafo'>
            <p>Aquí están algunas de las tecnologías con las que trabajo y mi nivel de experiencia<br></br> adquirida a lo largo de mi carrera: </p>
          </div>

          <div className='habilidades-iconos'>

            <div className='habilidades-iconos-html'>
              {/* <i class="fa-brands fa-html5"></i> */}
              <img src={html} alt="" />
              <p>HTML</p>
            </div>

            <div className='habilidades-iconos-css'>
              {/* <i class="fa-brands fa-css3-alt"></i> */}
              <img src={css} alt="" />
              <p>CSS</p>
            </div>

            <div className='habilidades-iconos-js'>
              {/* <i class="fa-brands fa-js"></i> */}
              <img src={js} alt="" />
              <p>JavaScript</p>
            </div>

            <div className='habilidades-iconos-react'>
              <i class="fa-brands fa-react"></i>
              <p>REACT</p>
            </div>

            <div className='habilidades-iconos-bootstrap'>
              <i class="fa-brands fa-bootstrap"></i>
              {/* <img src={bootstrap} alt="" /> */}
              <p>Bootstrap</p>
            </div>

            <div className='habilidades-iconos-figma'>
              <img src={figma} alt="" />
              <p>FIGMA</p> 
            </div>

            <div className='habilidades-iconos-github'>
              <i class="fa-brands fa-github"></i>
              {/* <img src={github} alt="" /> */}
              <p>GITHUB</p>    
            </div>

            <div className='habilidades-iconos-git'>
              <i class="fa-brands fa-git-alt"></i>
              {/* <img src={git} alt="" /> */}
              <p>GIT</p> 
            </div>

          </div>
        </div>
    </>
  )
}

export default Habilidades
