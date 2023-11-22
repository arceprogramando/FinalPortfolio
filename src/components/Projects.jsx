import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
    return (
    <>
        <h3 id="proyectos" className="text-center p-8"  >Proyectos </h3>
        <div className="  mx-auto flex flex-wrap gap-2 justify-center items-start border-t border-b   -Z-10">
            {projects.map((project, index) => (
                <div key={index} className=' max-w-xs flex flex-col justify-start items-center '>
                    <p className='text-center p-4'>{project.name}</p>
                    <img src={project.image} alt={project.name} className='h-32' />
                    <p className='p-4 text-center'>{project.description}</p>
                </div>
            ))}
        </div>
    </>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default Projects;