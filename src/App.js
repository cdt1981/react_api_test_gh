import './App.css';
import Interlocutorios from './components/Interlocutorios';
import Menu from './components/Menu';
import Jus from './components/Jus';
import Cotizaciones from './components/Cotizaciones';
import Pendientes from './components/Pendientes';
import Tareas from './components/Tareas';
import Vigencia from './components/Vigencia';
import Ezequiel from './components/Ezequiel';


function App() {

  return (
    <>
      <Menu></Menu>
      <div className='d-xl-flex m-4'>
        <Cotizaciones></Cotizaciones>
        <Tareas></Tareas>
      </div>
      <div className='d-xl-flex m-4'>
        <Pendientes></Pendientes>
        <Jus></Jus>
        <Vigencia></Vigencia>
      </div>
      <div>
        <Ezequiel></Ezequiel>
      </div>
      <Interlocutorios />
    </>
  );
}

export default App;
