import { RouterProvider } from 'react-router-dom'
import './App.scss';
import router from './routes';
import Logo from './components/logo/Logo';

function App() {
  return (
    <>
      <header>
        <Logo/>
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
