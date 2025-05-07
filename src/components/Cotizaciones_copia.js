import { useState, useEffect } from 'react';

export default function Cotizaciones_copia(props) {

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

    /*     setInterval(() => {
            setIsUpdated(!isUpdated);
        }, 300000); */

    return (
        <section className="d-flex flex-fill flex-wrap m-2 border p-3">
            <div className='d-flex gap-3'>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Dolar</h1>

            </div>
            <div className='d-flex col-12 gap-3 p-2 justify-content-center'>
                <div class="card text-bg-light mb-3 col-2">
                    <div class="card-header">Dólar Oficial</div>
                    <div class="card-body d-flex ">
                        <h5 class="card-title col-6">Venta: <p class="card-text"> $ 1.100,00</p> </h5>
                        <h5 class="card-title col-6">Compra: <p class="card-text"> $ 1.000,00</p> </h5>
                    </div>
                </div>
                <div class="card text-bg-light mb-3 col-2">
                    <div class="card-header">Dólar Blue</div>
                    <div class="card-body d-flex">
                        <h5 class="card-title col-6">Venta: <p class="card-text"> $ 1.100,00</p> </h5>
                        <h5 class="card-title col-6">Compra: <p class="card-text"> $ 1.000,00</p> </h5>
                    </div>
                </div>
                <div class="card text-bg-light mb-3 col-2">
                    <div class="card-header">Dólar Bolsa</div>
                    <div class="card-body d-flex">
                        <h5 class="card-title col-6">Venta: <p class="card-text"> $ 1.100,00</p> </h5>
                        <h5 class="card-title col-6">Compra: <p class="card-text"> $ 1.000,00</p> </h5>
                    </div>
                </div>
                <div class="card text-bg-light mb-3 col-2">
                    <div class="card-header">Dólar CCL</div>
                    <div class="card-body d-flex">
                        <h5 class="card-title col-6">Venta: <p class="card-text"> $ 1.100,00</p> </h5>
                        <h5 class="card-title col-6">Compra: <p class="card-text"> $ 1.000,00</p> </h5>
                    </div>
                </div>
                <div class="card text-bg-light mb-3 col-2">
                    <div class="card-header">Dólar Cripto</div>
                    <div class="card-body d-flex">
                        <h5 class="card-title col-6">Venta: <p class="card-text"> $ 1.100,00</p> </h5>
                        <h5 class="card-title col-6">Compra: <p class="card-text"> $ 1.000,00</p> </h5>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

