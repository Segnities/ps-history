import { RouterProvider } from 'react-router-dom'
import './App.scss';
import router from './routes';
import Logo from './components/logo/Logo';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <>
      <header>
        <Logo/>
        <Nav/>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
