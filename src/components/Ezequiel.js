import { useState, useEffect } from 'react';

export default function Ezequiel(props) {

    const [sentenciasEzequiel, setSentenciasEzequiel] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);

    function obtenerEzequiel() {
        return fetch("https://script.google.com/macros/s/AKfycbwEufDO4ky5gvITXxloor5L1irHrCseb8BHH5jFwa08zn6VWw6ON1Xzqu9tev4pSFRT/exec?action=obtenerEzequiel",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setSentenciasEzequiel(data)
                //console.log(data)
            })
    }

    useEffect(() => {
        obtenerEzequiel()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="d-flex flex-wrap flex-fill gap-3 border p-3 m-4 overflow-scroll overflow-x-hidden" style={{ height: "25rem" }}>
            <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Sentencias de Ezequiel</h1>
            </div>
            <table className='table table-striped'>
                <tr className='text-center'>
                    <th>Orden</th>
                    <th>Retirado</th>
                    <th>Número</th>
                    <th>Carátula</th>
                    <th>Pase a DC</th>
                    <th>Estado</th>
                </tr>
                <tbody>
                    {
                        sentenciasEzequiel.map((el) => {
                            return (
                                <tr className={`text-center ${(el.estado === "TERMINADA") ? 'table-success' : ''}`}>
                                    <td className='text-center w-auto'>
                                        {el.orden}
                                    </td>
                                    <td className='text-center w-auto'>
                                        {
                                            new Date(el.retirado).toLocaleDateString("es-ES")
                                        }
                                    </td>
                                    <td className='text-center w-auto'>
                                        {el.numero}
                                    </td>
                                    <td className='text-start w-auto'>
                                        {el.caratula}
                                    </td>
                                    <td className='text-center w-auto'>
                                        {
                                           el.pasedc? new Date(el.pasedc).toLocaleDateString("es-ES"): ""
                                        }
                                    </td>
                                    <td className='text-start w-auto'>
                                        {el.estado}
                                    </td>
                                </tr>
                            )

                        }
                        )
                    }
                </tbody>
            </table>
        </section >
    )
}

