import { useState, useEffect } from 'react';

export default function Pendientes(props) {

    const [pendientes, setPendientes] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);
    
    function obtenerRepetidos() {
        return fetch("https://script.google.com/macros/s/AKfycbyB9MzospzpnpHWEQerbLLmJM-oufC7GzIwC2vP0uL3rsEkdWwj6WF5iyv7ImnODHki/exec?action=obtenerRepetidos",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setPendientes(data)
                console.log(pendientes)
            })
    }
    
    useEffect(() => {
        obtenerRepetidos()
    }, [isUpdated])

    return (
        <section className="d-flex flex-fill m-2 shadow bg-body-tertiary rounded border p-3">
            <div className='border border-solid rounded shadow bg-warning' style={{fontSize: "2rem"}}>
                Terminados: {pendientes.Terminado}
            </div>
            <div className='border border-solid rounded shadow bg-warning' style={{fontSize: "2rem"}}>
                Circulando: {pendientes.Circulando}
            </div>
            <div className='border border-solid rounded shadow bg-warning' style={{fontSize: "2rem"}}>
                Registrados: {pendientes.Registrado}
            </div>
            <div className='border border-solid rounded shadow bg-warning' style={{fontSize: "2rem"}}>
                Pendientes: {pendientes.Pendiente}
            </div>
        </section>
    )
}

