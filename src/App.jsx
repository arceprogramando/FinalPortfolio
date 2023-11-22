import { useEffect } from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import { initializeTheme } from './utils/themeToggle';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <>
      <div className='min-h-full relative pb-2 '>
        <Header />
        <div className=" max-w-5xl  mx-auto mt-2 rounded-xl bg-[#fffffff7] text-black dark:bg-[#000000f7] dark:text-white border-2 border-black dark:border-white "  >
          <Main />
          <Footer />
        </div>
        <div className='dark:bg-[#872528e3] bg-[#ffd86da6] absolute top-0 left-0 h-full w-full z-[-10] overflow-hidden bg-repeat '
          style={{ backgroundImage: 'url("./brutalism.svg")' }} />
      </div>
    </>
  );
}

export default App;
