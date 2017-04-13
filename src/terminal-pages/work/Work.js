import React, { Component } from 'react';
import WorkItem from './WorkItem.js';
import "./page-works.css"

export default class Work extends React.Component {
  render() {

    let works = [
      {
        "title": "Metrominuto",
        "excerpt": "Una APP premiada en China para iOS y Android que fomenta los desplazamientos a pie en la ciudad de Pontevedra.",
        "description": "Mi trabajo consistió en el desarrollo completo de la app Android, utilizando las mejores tecnologías disponibles, con RxJava2 y Retrofit. La app cachea los datos de una manera muy sencilla. Cuenta con acceso a la localización, mapas de google y consultas a Google Places.",
        "link":"https://play.google.com/store/apps/details?id=com.pumpun.metrominuto&hl=es",
        "imageUrl":"",
        "tags":["Android","MongoDB","Geo-localización"]
      },
      {
        "title": "Fleap",
        "excerpt": "Una aplicación que se conecta a un wereable para monitorizar la forma de correr.",
        "description": "Fui el responsable de sincronizar al equipo de Pumpún para la puesta en marcha del primer prototipo de esta app en Android. El gran reto fue cumplir al cien por cien con el increíble diseño que se nos dio y estructurar el código para lograr escalabilidad y fácil mantenimiento.",
        "link":"http://www.farodevigo.es/vida-y-estilo/tecnologia/2016/11/24/disenar-app-invertir-ahorrar-recompensa/1576235.html",
        "imageUrl":"",
        "tags":["Android","MVP","Clean Architecture"]
      },
      {
        "title": "Fabula Simulator",
        "excerpt": "Un juego online en la web que permite simular mercados entre 50 jugadares por partida.",
        "description": "Encargado de buscar tecnologías adecuadas para crear un juego online web que soporte un gran número de jugadores simultáneos. Decidí utilizar ReactJS para el frontend y Meteor (NodeJS) para el backend. Junto a Jairo Chapela desarrollamos este espectacular juego en un tiempo récord.",
        "link":"https://e-fabula.com/",
        "imageUrl":"",
        "tags":["ReactJS","MeteorJS","NodeJS","MongoDB"]
      },
      {
        "title": "WAPP",
        "excerpt": "Una app híbrida Angular que se gestiona desde un Wordpress mediante una API Rest.",
        "description": "Actualicé esta aplicación a su versión 2.0 mejorando el existente plugin de Wordpress y modificando el código Angular. Las novedades entre otras fueron gestión de usuarios con OAuth, permisos para mostrar contenido por roles y publicidad con Google Ads.",
        "link":"https://pumpun.com/portfolio/wapp-wordpress-app-portal/",
        "imageUrl":"",
        "tags":["AngularJS","Wordpress","Rest API","Cordova","Ionic"]
      },
      {
        "title": "Tolemias TV",
        "excerpt": "Tolemias es una app tipo Netflix de conciertos en directo.",
        "description": "Responsable de la ejecución de la app para Android, cuenta con dos servicios de conexión, a la Rest API de Vimeo y a nuestro propio backend NodeJS. Es necesario tener una suscripción para poder disfrutar de los conciertos en tu bolsillo, además permite enviar a la TV los vídeos que ves en el móvil.",
        "link":"https://play.google.com/store/apps/details?id=com.pumpum.tolemias",
        "imageUrl":"",
        "tags":["Android","Cast SDK","Rest API","Notifaciones Push"]
      }
      ,
      {
        "title": "Calixtina",
        "excerpt": "Aplicación y portal web que permite crear guías interactivas con beacons bluetooth.",
        "description": "Trabajé en la investigación de la conexión Android/iOS con dispositivos blueetooh para notificar que te acercas o alejas de una cierta localización. Colaboré en el portal de admnistración Wordpress y llevé a cabo las aplicaciones Android e iOS.",
        "link":"http://calixtina.com/es/",
        "imageUrl":"",
        "tags":["Android","iOS","Wordpress","Blueetooh","Notifaciones locales"]
      }
      ,
      {
        "title": "O Corpiño",
        "excerpt": "La Iglesia de O Corpiño es ahora una de las más modernas de España con sus nuevos productos tecnológicos.",
        "description": "Implanté el motor de Calixtina para crear una guía multimedia sincronizada con su nuevo portal web, esta cuenta con una tienda online y permite crear peticiones a la Virgen, incluso encender velas desde nuestra casa. Además realicé amvas apps nativas para iOS y Android.",
        "link":"https://ocorpino.org/",
        "imageUrl":"",
        "tags":["Android","iOS","Wordpress","Woocommerce","Blueetooh"]
      }
      ,
      {
        "title": "Toobip",
        "excerpt": "Una página web al más puro estilo Kickstarter. Permite evaluar y dar a conocer tu start up.",
        "description": "Mi trabajo en esta web fue el completo diseño Frontend de cada sección. Exprimiendo al máximo el motor interno de Wordpress, creación de plantillas, shortcodes, plugins...",
        "link":"http://toobip.es/",
        "imageUrl":"",
        "tags":["Wordpress"]
      }
      ,
      {
        "title": "Mambo Gallery",
        "excerpt": "Tienda online de una galería de arte Gallega.",
        "description": "Diseño y puesta en marcha de una tienda online en wordpress.",
        "link":"http://mambogallery.com/",
        "imageUrl":"",
        "tags":["Wordpress","Woocommerce"]
      }
      ,
      {
        "title": "Corre APP",
        "excerpt": "Una aplicación para que las empresas organicen divertidas yincanas.",
        "description": "Desarrollé al completo la aplicación Corre, una app para la creación de Yincanas desde un portal web sincronizado con nuestro Backend. Cuenta con diversas pruebas que has de completar para conseguir el premio.",
        "link":"https://play.google.com/store/apps/details?id=com.pumpun.corre&hl=es",
        "imageUrl":"",
        "tags":["Android","NodeJS","Parse Server"]
      }
      ,
      {
        "title": "Farmapa",
        "excerpt": "Farmapa es una app que muestra las farmacias cercanas a tu situación geográfica.",
        "description": "Desarrollé la aplicación Android de Farmapa, destaca la forma de buscar puntos geolocalizados que optimiza las consultas al servidor gracias a la implementación de RxBinding, lo que permite consultar farmacias progresivamente cada X tiempo tras mover el mapa.",
        "link":"https://play.google.com/store/apps/details?id=com.pumpun.farmapa&hl=es",
        "imageUrl":"",
        "tags":["Android","GPS","Google Maps","RxBinding"]
      }
      ,
      {
        "title": "Códigos Sagrados",
        "excerpt": "Una aplicación propia que cuenta con más de 50.000 descargas.",
        "description": "Como trabajo de fin de curso desarrollé una app de auto-ayuda con un grán éxito en la play store. Actualmente me encargo de mantener el servidor ubuntu.",
        "link":"https://play.google.com/store/apps/details?id=com.pensamientopositivo.holynumbers",
        "imageUrl":"",
        "tags":["Android","Ubuntu-Server","Nginx","NodeJs"]
      }
      ,
      {
        "title": "Socib",
        "excerpt": "Desarrollo en Django de la web de investigación Socib.",
        "description": "Trabajo principalmente frontend con un CMS Python adaptando al gestor de plantillas Django de PSD a HTML. Utilicé un entorno Docker local para simular el entorno ubuntu de producción.",
        "link":"http://test.socib.es/es/",
        "imageUrl":"",
        "tags":["Django","Python","Docker","Bootstrap"]
      }
      ,
      {
        "title": "Low Pressure Fitnes",
        "excerpt": "LPF es un portal Wordpress que cuenta con muchas funcionalidades.",
        "description": "Trabajé en varias partes de esta web, principalmente en el desarrollo frontend. Cuenta con tienda online, reserva de cursos mediante tickets, exámenes online, etc..",
        "link":"http://lowpressurefitness.com/es/",
        "imageUrl":"",
        "tags":["Wordpress","Woocommerce","Event Tickets"]
      },
      {
        "title": "Más proyectos webs en los que he trabajado:",
        "excerpt": "",
        "description": "",
        "link":"",
        "imageUrl":"",
        "tags":["Diferenciart.com","Elevacionesrama.com","Pumpun.com","Emonte.es","Smab.audio","CentroGuerrero.es","EstudioJuanCodina.org","DenunciaSuLook.com","Par.es","PensamientoPositivo.es","einercial.com","archikubik.com","CelsoEmilioFerreiro.org"]
      }
    ];



    return (


      <div id="work" className="content">

         {works.map(function(work,index){

           return (
             <WorkItem
               key={index}
               title={work.title}
               excerpt={work.excerpt}
               description={work.description}
               link={work.link}
               tags={work.tags}
               imageUrl=""/>
           );

          })
        }

      </div>

    )
  }
}
