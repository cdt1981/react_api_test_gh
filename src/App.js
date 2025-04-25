import './App.css';
import { Route, Routes } from 'react-router-dom';
import Interlocutorios from './components/Interlocutorios';
import Menu from './components/Menu';
import Jus from './components/Jus';
import Cotizaciones from './components/Cotizaciones';
import Pendientes from './components/Pendientes';
import Tareas from './components/Tareas';
import Vigencia from './components/Vigencia';
import Sentencias from './components/Sentencias';
import Modelos from './components/Modelos';

const Home = () => {
  return (
    <>
      <div className='d-xl-flex m-4'>
        <Cotizaciones></Cotizaciones>
        <Tareas></Tareas>
      </div>
      <div className='d-xl-flex m-4'>
        <Pendientes></Pendientes>
        <Jus></Jus>
        <Vigencia></Vigencia>
      </div>
      <Interlocutorios />
    </>
  )
}

function App() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='/react_api_test_gh/' element={<Home/>}></Route>
        <Route path='/react_api_test_gh/sentencias' element={<Sentencias/>}></Route>
        <Route path='/react_api_test_gh/modelos' element={<Modelos/>}></Route>
      </Routes>
    </>
  );
}

export default App;
