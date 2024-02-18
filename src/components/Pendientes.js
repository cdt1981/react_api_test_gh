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
        <section className="d-xl-flex justfy-content-center flex-wrap m-2 border p-3 text-white">
            <div className='row p-3 d-flex flex-fill'>
                <div className='border border-solid rounded shadow bg-warning d-flex justify-content-center align-items-center mb-2' style={{ fontSize: "2rem" }}>
                    <span> Terminados: </span><br></br>
                    <span>{pendientes.Terminado}</span>
                </div>
                <div className='border border-solid rounded shadow bg-success d-flex justify-content-center align-items-center' style={{ fontSize: "2rem" }}>
                    Circulando: {pendientes.Circulando}
                </div>
            </div>
            <div className='row p-3 d-flex flex-fill'>
                <div className='border border-solid rounded shadow bg-primary d-flex justify-content-center align-items-center mb-2' style={{ fontSize: "2rem" }}>
                    Registrados: {pendientes.Registrado}
                </div>
                <div className='border border-solid rounded shadow bg-danger d-flex justify-content-center align-items-center' style={{ fontSize: "2rem" }}>
                    Pendientes: {pendientes.Pendiente}
                </div>
            </div>
        </section>
    )
}

