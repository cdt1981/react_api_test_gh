import { Panel } from 'primereact/panel';
import { useState, useEffect } from 'react';

export default function Vigencia(props) {

    const [vigenciaData, setVigenciaData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);

    function obtenerVigentes() {
        return fetch("https://script.google.com/macros/s/AKfycbxPGkP1Laa8s4wJXj9rTZUlZE2sQkEqp5uDmgs1thL4trGVbQnyEHYwIBoO3PKqVVZy/exec?action=obtenerVigentes",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setVigenciaData(data)
                //console.log(data)
            })
    }

    useEffect(() => {
        obtenerVigentes()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="d-flex flex-wrap gap-3 border p-3 m-2 overflow-scroll overflow-x-hidden" style={{ height: "25rem" }}>
            <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Normas. Vigencia</h1>
            </div>
            <table className='table table-striped'>
                <tr className='text-center'>
                    <th>Norma</th>
                    <th>B.O.</th>
                    <th>Vigente desde</th>
                    <th>Vigente hasta</th>
                    <th>Estado</th>
                </tr>
                <tbody>
                    {
                        vigenciaData.map((el) => {

                            if(el.norma ){
                                return (
                                <tr className={`text-center ${(el.estado === "VIGENTE") ? 'table-success' : 'table-danger'}`}>
                                    <td className='text-center w-25'>
                                        {el.norma}
                                    </td>
                                    <td className='text-center w-25'>
                                        {
                                            el.bo ? new Date(el.bo).toLocaleDateString("es-ES") : ""
                                        }
                                    </td>
                                    <td className='text-center w-25'>
                                        {
                                            el.desde ? new Date(el.desde).toLocaleDateString("es-ES") : ""
                                        }
                                    </td>
                                    <td className='text-center w-25'>
                                        {
                                            el.hasta ? new Date(el.hasta).toLocaleDateString("es-ES") : ""
                                        }
                                    </td>
                                    <td className='text-center w-25'>
                                        {el.estado}
                                    </td>
                                </tr>
                            )}
                            else
                                return (
                                    <tr className='table-info'>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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

