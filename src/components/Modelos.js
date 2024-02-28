import { useState, useEffect, useMemo } from 'react';

export default function Modelos(props) {

    const [modelos, setModelos] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);
    const [query, setQuery] = useState("");
    const [state, setState] = useState({
        query: '',
        list: []
    })

    function obtenerModelos() {
        return fetch("https://script.google.com/macros/s/AKfycbyWnnNekSGg_cBf22MZ8f4di3yFkXQzuXzIbzHxnztkYsRgtTiZefIXuXKp-mygazm9/exec?action=obtenerModelos",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setModelos(data)
                //console.log(data)
            })
    }

    useEffect(() => {
        obtenerModelos()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (e) => {
        setQuery(e.target.value)
        
        
    }

    return (
        <section className="d-flex flex-wrap flex-fill gap-3 border p-3 m-4 " style={{ height: "25rem" }}>
            <div className='d-flex justify-content-between col-12 fs-4' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Modelos</h1>
                <form>
                    <input type='search' value={query} placeholder='Buscar...' onChange={handleChange} />
                </form>
            </div>
            <table className='table table-striped'>
                <tr className='text-center'>
                    <th>Título</th>
                    <th>Descripción</th>
                </tr>
                <tbody>
                    {
                        modelos.map((el) => {
                            return (
                                <tr>
                                    <td className='text-center w-auto'>
                                        {el.titulo}
                                    </td>
                                    <td className='text-start w-auto'>
                                        {el.descripcion}
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

