import { Header } from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home';
import './index.css'
import { About } from './Components/Pages/About/About';
import { Footer } from './Components/Footer/Footer';
import { Projects } from './Components/Pages/Projects/Projects';
import { Shop } from './Components/Pages/Shop/Shop';
import { CartProvider } from './Components/Pages/Shop/CartContext';

function App() {

  return (
    <CartProvider>

    <div className='backGround'>
      <div className='fullPage flex flex-col justify-between h-screen text-white backdrop:backdrop-blur-full'>
        <Header />
        <Routes>
          <Route Component={Home} path='/' ></Route>
          <Route Component={About} path='/about'></Route>
          <Route Component={Projects} path='/projects'></Route>
          <Route Component={Shop} path='/Shop'></Route>
        </Routes>
        <Footer />
      </div>
    </div>
    </CartProvider>
  )
}

export default App

