import { Panel } from 'primereact/panel';
import { useState, useEffect } from 'react';

export default function Dollar(props) {

    const [cotizaciones, setCotizaciones] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);

    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares")
            .then(response => response.json())
            .then(data => setCotizaciones(data))
            .catch((error) => {
                console.log(error)
            });
    }, [isUpdated])

    setInterval(() => {
        setIsUpdated(!isUpdated);
    }, 300000);

    return (
        <section className="d-flex flex-wrap gap-3 shadow bg-body-tertiary rounded border p-3 m-4">
            <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Valor del Dólar</h1>
            </div>
            {
                cotizaciones.map((cot) => {
                    if (cot.casa != "mayorista" && cot.casa != "tarjeta") {
                        return (
                            <Panel header={cot.nombre} className='shadow' style={{ flex: 'auto', maxWidth: '19%' }} >
                                <ul className='list-group' key={cot.nombre} >
                                    <li className='list-group-item' style={{ fontWeight: 'bold', color: 'red', fontSize: '2rem' }}>
                                        Venta: {new Intl.NumberFormat('es-AR', {
                                            style: "currency",
                                            currency: "ARS",
                                            maximumFractionDigits: 2
                                        }).format(cot.venta)}
                                    </li>
                                    <li className='list-group-item'>
                                        Compra: {new Intl.NumberFormat('es-AR', {
                                            style: "currency",
                                            currency: "ARS",
                                            maximumFractionDigits: 2
                                        }).format(cot.compra)}
                                    </li>
                                    <li className='list-group-item'>
                                        Actualizado: {new Date(cot.fechaActualizacion).toLocaleString('es-AR', { hour12: false })}
                                    </li>
                                </ul>
                            </Panel>
                        )
                    }
                })
            }

        </section>
    )
}

