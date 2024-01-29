import './App.css';
import Interlocutorios from './components/Interlocutorios';
import Menu from './components/Menu';
import Dollar from './components/Dollar';
import Cotizaciones from './components/Cotizaciones';
import Pendientes from './components/Pendientes';


function App() {

  return (
    <>
      <Menu></Menu>
      <div className='d-xl-flex m-4'>
        <Cotizaciones></Cotizaciones>
        <Pendientes></Pendientes>
      </div>
      <Interlocutorios />
    </>
  );
}

export default App;
