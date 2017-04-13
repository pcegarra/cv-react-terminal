import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom'
import "./page-terminal.css"
import Works from "../work/Work.js"


export default class Welcome extends React.Component {
  render() {
    return (
      <Router>
        <div className="AboutMe">
          <div id="navigation">
              <ul>
                  <li><NavLink to="/pablo" activeClassName="selected">&#x1F913; Sobre mí<span className="blinking-cursor">_</span></NavLink></li>
                  <li><NavLink to="/trabajos" activeClassName="selected">&#x1F4BB; Trabajos<span className="blinking-cursor">_</span></NavLink></li>
                  <li><NavLink to="/estudios" activeClassName="selected">&#x1F4D3; Estudios<span className="blinking-cursor">_</span></NavLink></li>
                  <li><NavLink to="/contactar" activeClassName="selected">&#x1f4de; Contactar<span className="blinking-cursor">_</span></NavLink></li>
                  <li><a download target="_blank" href="./cv-pablo-cegarra.pdf" className="download-cv">&#x1f4ce; Descargar CV<span className="blinking-cursor">_</span></a></li>

              </ul>
          </div>


          <Switch>
            <Route path="/" exact component={AboutMe}/>
            <Route path="/pablo" exact component={AboutMe}/>
            <Route path="/trabajos" component={Works}/>
            <Route path="/estudios" component={Studies}/>
            <Route path="/contactar" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>

          <div id="footer"></div>
      </div>
      </Router>

    );
  }
}

const AboutMe = () => (
  <div id="about" className="content">
      <p>¡Hola!</p>
      <p>Soy Pablo Cegarra, programador multiplataforma apto para cualquier tipo de proyecto de desarrollo software, especializado en APPs.</p>
      <p>Actualmente trabajo en una pequeña empresa de programación en Vigo llamada Pumpún Dixital. En esta empresa me he responsabilizado del desarrollo Android y del diseño Frontend de las webs.</p>
      <p>También he trabajado como Backend creando la infrastructura del servidor de nuestras aplicaciones. Puedes ver mi experiencia en la sección <Link to="/trabajos">Trabajos</Link></p>
      <p><s>A partir del 4 de Abril de 2017 estoy disponible para formar parte de nuevos proyectos, así que si crees que puedo ayudaros, visíta la página de <Link to="/contactar">Contacto</Link> donde
      encontrarás mis datos personales.</s></p>
      <h2>Habilidades</h2>
      <p><u>Personal:</u></p>
      <li>Trabajador, Actualizado, Creativo, Coordinador de proyectos, Versátil, Detallista, Positivo.</li>
      <p><u>Aplicaciones móviles:</u></p>
      <li>Android, iOS, Ionic, Cordova, React-native.</li>
      <p><u>Frontend:</u></p>
      <li>Angular, React, Wordpress, Bootstrap, Django.</li>
      <p><u>Backend:</u></p>
      <li>Ubuntu-server, Nginx, Amazon Web Services, MongoDB, SQL, Meteor, Nginx, Parse Server, Firebase, PHP.</li>
      <p><u>Otros:</u></p>
      <li>Docker, C#, MailChimp, Clean Code, Amante de las motos.</li>
  </div>
)

const Studies = () => (
  <div id="writing" className="content">
     <p>Estoy titulado como Técnico Superior de Aplicaciones Multiplaforma. Como estudiante estoy constantemente actualizándome mediante cursos online y explorando nuevas tecnologías en respositorios trending de Github.</p>
     <h2>Títulos oficiales</h2>
     <ul>
        <li>Desarrollo de Aplicaciones Multiplataforma - Colegio Vivas 2013-2015</li>
        <li>Desarrollo de Aplicaciones Web - IES Teis 2012-2013</li>
     </ul>
     <h2>Formación online</h2>
     <ul>
        <li><a target="_blank" href="https://www.udemy.com/code-a-coming-soon-landing-page-in-bootstrap-4/?start=0">Bootstrap 4</a></li>
        <li><a target="_blank" href="https://www.udemy.com/react-redux/learn/v4/">Modern React with Redux</a></li>
        <li><a target="_blank" href="https://www.udemy.com/react-redux-tutorial/learn/v4/">Advanced React and Redux</a></li>
        <li><a target="_blank" href="https://www.udemy.com/bash-scripting/learn/v4/t/lecture/5739714?start=180">Bash Scripting and Shell programming</a></li>
        <li><a target="_blank" href="https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview">Angular 2 with Typescript</a></li>
        <li><a target="_blank" href="https://www.udemy.com/nginx-fundamentals/learn/v4/">Nginx high performance</a></li>
        <li><a target="_blank" href="https://www.udemy.com/ux-web-design-master-course-strategy-design-development/learn/v4/">UX & Web Design Master Course</a></li>
        <li><a target="_blank" href="https://www.udemy.com/kali-linux-web-app-testing/learn/v4/">Kali Linux web app testing</a></li>
        <li><a target="_blank" href="https://www.udemy.com/react-redux/learn/v4/">Modern React with Redux</a></li>
        <li><a target="_blank" href="https://www.udemy.com/introdjango/learn/v4/t/lecture/4252118?start=0">Guide to Django</a></li>
        <li><a target="_blank" href="https://escuela.it/cursos/virtualizacion-contenedores-cloud-computing">Curso de Virtualización, Contenedores y Cloud Computing</a></li>
        <li><a target="_blank" href="https://platzi.com/cursos/docker/">Curso de Docker</a></li>
        <li><a target="_blank" href="https://platzi.com/cursos/seguridad/">Introducción a la Seguridad Informática</a></li>
        <li><a target="_blank" href="https://platzi.com/cursos/diseno-interfaces-ux/">Curso de Diseño de Interfaces y UX</a></li>
        <li><a target="_blank" href="https://platzi.com/cursos/facebook-ads/">Curso de Facebook Ads</a></li>
        <li><a target="_blank" href="https://www.youtube.com/playlist?list=PLfW3im2fiA7Wp6H7FWNK8Mm53U2BqxjX4">Curso de Amazon Web Services</a></li>
     </ul>
  </div>
)

const Contact = () => (
  <div id="home" className="content">
    <p>Aquí encontrarás mis perfiles en internet:</p>
    <ul>
    <li><a target="_blank" href="https://www.linkedin.com/in/pablocegarra/">LinkedIn</a></li>
    <li><a href="#">Email</a> (pablocg26 [@] gmail.com)</li>
    <li><a target="_blank" href="https://www.infojobs.net/pablo-cegarra.prf">Infojobs</a></li>
    <li><a target="_blank" href="http://stackoverflow.com/story/pcegarra">Stackoverflow</a> </li>
    <li><a target="_blank" href="https://github.com/pcegarra">Github</a></li>
    </ul>
    <p>La mejor forma es llamarme al número 662 438 444.</p>


  </div>
)


const NoMatch = ({ location }) => (
  <div className="error-404">
    <p>404</p>
    <pre>
      ¯\_(ツ)_/¯
    </pre>
  </div>
)
