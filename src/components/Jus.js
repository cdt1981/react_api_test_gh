import { Panel } from 'primereact/panel';
import { useState, useEffect } from 'react';

export default function Jus(props) {

    const [valorJus, setValorJus] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);

    function obtenerJus() {
        return fetch("https://script.google.com/macros/s/AKfycbxDtb_uNF1fT52usCb_CdJUz3Fl7DQxaBytIcExug63bb6dCW8jFJi1yivuHUzq9A/exec?action=obtenerJUS",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setValorJus(data)

            })
    }

    useEffect(() => {
        obtenerJus()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="d-flex flex-wrap gap-3 border p-3 m-2 overflow-scroll overflow-x-hidden" style={{ height: "25rem" }}>
            <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Valor del JUS (ley 14.967)</h1>
            </div>
            <table className='table table-striped'>
                <tr className='text-center'>
                    <th>Fecha de vigencia</th>
                    <th>Valor</th>
                    <th>Acuerdo SCBA</th>
                </tr>
                <tbody>
                    {
                        valorJus.map((valor) => {
                            return (
                                <tr className='text-center'>
                                    <td className='text-start w-25'>
                                        {valor.date}
                                    </td>
                                    <td className='text-center w-25'>
                                        {new Intl.NumberFormat('es-AR', {
                                            style: "currency",
                                            currency: "ARS",
                                            maximumFractionDigits: 2
                                        }).format(valor.value)}
                                    </td>
                                    <td className='text-center w-25'>
                                        {valor.acuerdo}
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

