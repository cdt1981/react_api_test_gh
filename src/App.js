import './App.css';
import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import Nav from './components/Nav';
import Interlocutorios from './components/Interlocutorios';
import Menu from './components/Menu';
import { Panel } from 'primereact/panel';

function App() {

  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setCotizaciones(data))
      .catch((error) => {
        console.log(error)
      });
  }, [])

  return (
    <>
      <Menu></Menu>
      <section className="d-flex flex-wrap gap-3 shadow bg-body-tertiary rounded border p-3 m-4">
        <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
          <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Valor del Dólar</h1>
        </div>
        {
          cotizaciones.map((cot) => {
            if (cot.casa != "mayorista" && cot.casa != "tarjeta") {
              return (
                <Panel header={cot.nombre} className='shadow' style={{ flex: 'auto', maxWidth: '19%' }} >
                  <ul className='list-group' >
                    <li className='list-group-item' style={{ fontWeight: 'bold', color: 'red', fontSize: '2rem' }}>
                      Venta: $ {cot.venta}
                    </li>
                    <li className='list-group-item'>
                      Compra: $ {cot.compra}
                    </li>
                    <li className='list-group-item'>
                      Actualizado: {cot.fechaActualizacion}
                    </li>
                  </ul>
                </Panel>
              )
            }
          })
        }

      </section>
      <Interlocutorios />
    </>
  );
}

export default App;
