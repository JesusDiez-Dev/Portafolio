import React from "react";
import clonmercado from "../img/Screenshot 2025-04-12 at 18-42-33 Libre.png";
import veterinaria from "../img/veterinaria.png"
import labarberia from "../img/labarberia.png"
import blog from "../img/Blog Games.png"
import portafoliodesactualizado from "../img/Portafoliodesactualizado.png"
import pokeapi from "../img/pokeapi.png"
import tailwind from "../img/tailwindcss.png"
import figma from "../img/figma.png";
import html from "../img/html-5.png";
import css from "../img/css-3.png";
import js from "../img/js.png";
import api from "../img/api.png"
function Proyectos() {
  return (
    <>
      <div className="proyectos" id="proyectos">

        <div className="proyectos-titulo">
          <h2>Proyectos</h2>
        </div>

        <div className="proyectos-parrafo">
          <p>
            Alguno de los proyectos en los que practico varias de las
            tecnologias de las que voy adquiriendo conocimiento.{" "}
          </p>
        </div>

        <div className="proyectos-grid">



          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={clonmercado} alt="clonmercado" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Clon Mercado Libre</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>
                  Proyecto de un clon de la pagina de Mercado Libre, en el cual
                  practique el uso de React y Redux.
                </p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  {/* <i class="fa-brands fa-html5"></i> */}
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  {/* <i class="fa-brands fa-css3-alt"></i> */}
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  {/* <i class="fa-brands fa-js"></i> */}
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-react">
                  <i class="fa-brands fa-react"></i>
                  <p>REACT</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  {/* <img src={github} alt="" /> */}
                  <p>GITHUB</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-git">
                  {/* <i class="fa-brands fa-git-alt"></i> */}
                  {/* <img src={git} alt="" /> */}
                  {/* <p>GIT</p> */}
                </div>
                
              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/ClonMercado/">Ver proyecto</a>
              </div>
            </div>
          </div>

          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={veterinaria} alt="veterinaria" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Agendar Citas, Veterinaria</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>Permite al usuario agendar citas y modificarlas con LocalStorage</p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  {/* <i class="fa-brands fa-html5"></i> */}
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  {/* <i class="fa-brands fa-css3-alt"></i> */}
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  {/* <i class="fa-brands fa-js"></i> */}
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-react">
                  <i class="fa-brands fa-react"></i>
                  <p>REACT</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-tailwind">
                  <img src={tailwind} alt="" />
                  <p>Tailwind</p>
                </div>


                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  {/* <img src={github} alt="" /> */}
                  <p>GITHUB</p>
                </div>

              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/AgendarCitas/">Ver proyecto</a>
              </div>
            </div>
          </div>

          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={pokeapi} alt="clonmercado" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Busca tu pokemon con PokeApi</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>
                  Proyecto de consumo de API de PokeApi en el cual
                  practique como consumir una API con AXIOS
                </p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  {/* <i class="fa-brands fa-html5"></i> */}
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  {/* <i class="fa-brands fa-css3-alt"></i> */}
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  {/* <i class="fa-brands fa-js"></i> */}
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-react">
                  <i class="fa-brands fa-react"></i>
                  <p>REACT</p>
                </div>

                {/* <div className="proyectos-grid-item-flex-iconos-bootstrap">
                  <i class="fa-brands fa-bootstrap"></i> 
                  <img src={bootstrap} alt="" />
                  <p>Bootstrap</p>
                </div> */}

                {/* <div className="proyectos-grid-item-flex-iconos-figma">
                <img src={figma} alt="" />
                <p>FIGMA</p>
                </div> */}

                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  {/* <img src={github} alt="" /> */}
                  <p>GITHUB</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-git">
                  {/* <i class="fa-brands fa-git-alt"></i> */}
                  {/* <img src={git} alt="" /> */}
                  {/* <p>GIT</p> */}
                </div>

                <div className="proyectos-grid-item-flex-iconos-api">
                  {/* <i class="fa-brands fa-git-alt"></i> */}
                  <img src={api} alt="" />
                  <p>API REST</p>
                </div>
              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/LaBarber/">Ver proyecto</a>
              </div>
            </div>
          </div>

          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={labarberia} alt="clonmercado" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Clon La Barberia</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>
                  Proyecto de un clon de la pagina de La barberia, en el cual
                  practique el uso CSS y JavaScript Vanilla
                </p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  {/* <i class="fa-brands fa-html5"></i> */}
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  {/* <i class="fa-brands fa-css3-alt"></i> */}
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  {/* <i class="fa-brands fa-js"></i> */}
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                {/* <div className="proyectos-grid-item-flex-iconos-react">
                  <i class="fa-brands fa-react"></i>
                  <p>REACT</p>
                </div> */}

                {/* <div className="proyectos-grid-item-flex-iconos-bootstrap">
                  <i class="fa-brands fa-bootstrap"></i> 
                  <img src={bootstrap} alt="" />
                  <p>Bootstrap</p>
                </div> */}

                {/* <div className="proyectos-grid-item-flex-iconos-figma">
                <img src={figma} alt="" />
                <p>FIGMA</p>
                </div> */}

                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  {/* <img src={github} alt="" /> */}
                  <p>GITHUB</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-git">
                  {/* <i class="fa-brands fa-git-alt"></i> */}
                  {/* <img src={git} alt="" /> */}
                  {/* <p>GIT</p> */}
                </div>
              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/LaBarber/">Ver proyecto</a>
              </div>
            </div>
          </div>

          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={blog} alt="clonmercado" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Clon PureGaming</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>
                  Proyecto de un clon de la pagina de Mercado Libre, en el cual
                  practique el uso de JavaScript
                </p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  {/* <i class="fa-brands fa-html5"></i> */}
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  {/* <i class="fa-brands fa-css3-alt"></i> */}
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  {/* <i class="fa-brands fa-js"></i> */}
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  {/* <img src={github} alt="" /> */}
                  <p>GITHUB</p>
                </div>

              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/Blog-Games/">Ver Proyecto</a>
              </div>
            </div>
          </div>

          <div className="proyectos-grid-item">
            <div className="proyectos-grid-item-flex">
              <div className="proyectos-grid-item-flex-img">
                <img src={portafoliodesactualizado} alt="clonmercado" />
              </div>

              <div className="proyectos-grid-item-flex-titulo">
                <h2>Portafolio Hecho en Carrera</h2>
              </div>

              <div className="proyectos-grid-item-flex-parrafo">
                <p>
                  Proyecto de un Portafolio que desmostraba en ese entonces mis habilidades
                </p>
              </div>

              <div className="proyectos-grid-item-flex-tecnologias">
                <h2>Tecnologías</h2>
              </div>

              <div className="proyectos-grid-item-flex-iconos">
                <div className="proyectos-grid-item-flex-iconos-html">
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-css">
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-js">
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-react">
                  <i class="fa-brands fa-react"></i>
                  <p>REACT</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-github">
                  <i class="fa-brands fa-github"></i>
                  <p>GITHUB</p>
                </div>

                <div className="proyectos-grid-item-flex-iconos-git">
                  <i class="fa-brands fa-git-alt"></i>
                  <p>GIT</p>
                </div>

              </div>

              <div className="proyectos-grid-item-flex-boton">
                <a href="https://yisus01.github.io/Portafolio-Web/">Ver proyecto</a>
              </div>
            </div>
          </div>

          
        </div>




      </div>
    </>
  );
}

export default Proyectos;
