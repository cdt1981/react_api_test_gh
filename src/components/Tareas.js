import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

export default function Tareas(props) {

    const [tareas, setTareas] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);
    const [dataToAppend, setDataToAppend] = useState([]);

    function obtenerTareas() {
        return fetch("https://script.google.com/macros/s/AKfycbwaPCwVRFyYHnIXM3YDArC8sqQh9VyDZms3Lqf9T949OSWvElWzNuyWML0m5IbV8K38/exec?action=obtenerTareas",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setTareas(data)
            })
    }

    function eliminarTareas(id) {
        fetch("https://script.google.com/macros/s/AKfycbzuYYKOU8S97rGUHcDnDag_kY7-SDc9GfpYNG43oiZ6IgjqPA_KOmawXAsepaumFNeo/exec?action=eliminarTareas",
            {
                method: "POST",
                body: JSON.stringify({
                    id
                })
            })
            .then(() => setIsUpdated(!isUpdated))
    }

    function agregarTarea(titulo, descripcion){
        fetch("https://script.google.com/macros/s/AKfycbyoz3EsPt0vdMOLMBAhWm9Fh1nYt_p6HIvWsGOBpzfnTxXLIGIuRCPEmHcLMJtPlRGJ/exec?action=agregarTareas",
            {
                method: 'POST',
                body: JSON.stringify({
                    titulo,
                    descripcion
                })
            })
            .then(() => setIsUpdated(!isUpdated))
            .then(() => setDataToAppend([]))
            .catch((error) => console.log(error))
    }


    useEffect(() => {
        obtenerTareas()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps


    setInterval(() => {
        setIsUpdated(!isUpdated);
    }, 300000);

    function arrayToAppend(valor) {

        setDataToAppend( [...dataToAppend, valor ])

    }

    
    return (
        <section className="w-auto m-2 border p-3">
            <div className='d-flex col-12'>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Tareas</h1>
            </div>
            <div className='d-flex w-auto gap-3 m-3'>
                    <InputText placeholder='Título' id='titulo' style={{ minWidth: '5%' }} onChange={(e) => arrayToAppend(e.target.id)}/>
                    <InputText placeholder='Tarea' id='tarea' style={{ width: '100%' }} onChange={(e) => arrayToAppend(e.target.value)}/>
                    <Button severity='success' rounded icon="pi pi-plus" style={{ borderRadius: "5px", minWidth: "10%" }} onClick={() => agregarTarea(dataToAppend)}/>
            </div>
            <div className='d-flex flex-fill flex-wrap p-2'>
                <table className='table table-striped'>
                    <tbody>
                        {
                            tareas.map((tarea) => {
                                return (
                                    <tr key={tarea.id}>
                                        <td className='text-start' >
                                            {tarea.title}
                                        </td>
                                        <td className='text-start'>
                                            {tarea.notes}
                                        </td>
                                        
                                        {/* <td className='text-center'>
                                            <input type='checkbox' className='form-check-input fs-2' ></input>
                                            <Checkbox size='xl' id={tarea.id} ></Checkbox>
                                        </td> */}
                                        
                                        <td >
                                            <Button rounded text icon='pi pi-times' size='xl' style={{color: 'red'}} onClick={() => eliminarTareas(tarea.id)} > </Button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

