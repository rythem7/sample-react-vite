import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import NavBar from './components/Navbar';
import Hero from './components/HeroLeftImg';
import ThemeSwitcher from './assets/ThemeSwitcher';
import Footer from './components/Footer';



function App() {

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return(
    <div className='flex flex-col w-screen h-full justify-between'>

      <header>
          <NavBar />
      </header>

      <main>
        <Hero />
      </main>

      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App
