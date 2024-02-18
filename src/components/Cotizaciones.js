import { useState, useEffect } from 'react';

export default function Cotizaciones(props) {

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
        <section className="d-flex flex-fill flex-wrap m-2 border p-3">
            <div>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Dolar</h1>
            </div>
            {/*             <div className='d-flex flex-wrap col-2 fs-4 mx-3'>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Valor del Dólar</h1>
            </div> */}
            <div className='d-flex col-12 p-2'>
                <table className='table table-striped'>
                    <tr className='text-center'>
                        <th>Tipo</th>
                        <th>Compra</th>
                        <th>Venta</th>
                        <th>Act.</th>
                    </tr>
                    <tbody>
                        {
                            cotizaciones.map((cot) => {
                                if (cot.casa != "mayorista" && cot.casa != "tarjeta") {
                                    return (
                                        <tr className='text-center'>
                                            <td className='text-start'>
                                                {cot.nombre}
                                            </td>
                                            <td className='text-end'>
                                                {new Intl.NumberFormat('es-AR', {
                                                    style: "currency",
                                                    currency: "ARS",
                                                    maximumFractionDigits: 2
                                                }).format(cot.compra)}
                                            </td>
                                            <td className='text-end'>
                                                {new Intl.NumberFormat('es-AR', {
                                                    style: "currency",
                                                    currency: "ARS",
                                                    maximumFractionDigits: 2
                                                }).format(cot.venta)}
                                            </td>
                                            <td>
                                                {new Date(cot.fechaActualizacion).toLocaleString('es-AR', { hour12: false })}
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

