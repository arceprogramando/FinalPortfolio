import Contact from "./Contact";
import HandleDownloadCV from "./HandleDownloadCV"
import Projects from "./Projects";
import Time from "./Time"

const Main = () => {
  const projects = [
    {
      name: 'Microgenesis.net',
      description: 'Primer proyecto web para una empresa de argentina. En donde mi principal tarea se baso en el uso de css exclusivamente siguiendo un diseño ya elaborado',
      image: 'microgenesis.png'
    },
    {
      name: 'Primer Portfolio',
      description: 'Primer portfolio de practica',
      image: 'primerportfolio.png'
    },
    {
      name: 'Coderhouse - Desarrollo Web',
      description: 'Proyecto Frontend para mi introduccion al desarrollo web en un curso de coderhouse implementando HTML/CSS',
      image: 'desarrollojavascript.png'
    },
    {
      name: 'Coderhouse - Javascript',
      description: 'Segundo proyecto de Coderhouse implementando un poco de inserciones de libreria y javascript',
      image: 'desarrolloweb.png'
    },
    {
      name: 'Coderhouse - React',
      description: 'Segui con el mismo diseño que tenia aplicandolo a una aplicacion react , aplicandole el js que no habia aplicado en el curso anterior',
      image: 'desarrolloreact.png'
    },
    {
      name: 'Coderhouse - Backend',
      description: 'Desarrollo del Backend utilizando Express como framework web, MongoDB como base de datos, y Mongoose como ODM en un proyecto de arquitectura de un servidor RESTAPI.',
      image: 'desarrollobackend.png'
    }
  ];

  return (
    <main>
      <div className="max-w-5xl mx-auto ">

        <h2 id="sobremi" className="text-center p-8">Sobre mí</h2>
        <div className="flex justify-center items-center p-4 border-b border-t border-black dark:border-white  ">
          <div className="flex flex-col items-center gap-4 ">
            <Time />
            <HandleDownloadCV />
          </div>
          <img src="/felipearce.png" alt="felipe arce" className=" w-40 h-40" />
        </div>
      </div>
      <div className="max-w-5xl  mx-auto  ">


        <Projects projects={projects} />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
