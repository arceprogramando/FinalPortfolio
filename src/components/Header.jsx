import Nav from "./Nav";

const Header = () => {
    const elements = ['Sobre mi', 'Proyectos', 'Contacto'];

    return (
        <div  className=" flex align-baseline  dark:bg-black bg-white shadow-md z-10  " >
            <header className="container max-w-5xl mx-auto flex items-center justify-between p-4 mt-15 pb-3">
                <h1>ArceProg</h1>
                <Nav elements={elements} />
            </header>
        </div>
    );
}

export default Header;