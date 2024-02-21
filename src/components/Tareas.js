import { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function Tareas(props) {

    const [tareas, setTareas] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true);
    const [dataToAppend, setDataToAppend] = useState({});

    const toast = useRef(null);

    const showToast = (action) => {
        switch (action) {
            case "agregar":
                toast.current.show({ severity: 'success', detail: 'Tarea agregada...' });
                break;

            default:
                break;
        }
    };

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

    function agregarTarea() {

        //console.log(JSON.stringify(data))

        fetch("https://script.google.com/macros/s/AKfycbzEDG38zp-3IcuzGhEh9l64XKuxrgpSdu2bsNlKC0KSivZiNWwdXpT8Io4VqT6q6WZm/exec?action=agregarTareas",
            {
                method: 'POST',
                body: JSON.stringify(dataToAppend)
            })
            .then(() => {
                setIsUpdated(!isUpdated);
                setDataToAppend({});
                showToast("agregar");
            })

            .catch((error) => console.log(error))
    }


    useEffect(() => {
        obtenerTareas()

    }, [isUpdated]) // eslint-disable-line react-hooks/exhaustive-deps


    setInterval(() => {
        setIsUpdated(!isUpdated);
    }, 300000);

    function arrayToAppend(clave, valor) {

        setDataToAppend({ ...dataToAppend, [clave]: valor })

    }

    return (
        <section className="w-auto m-2 border p-3">
            <Toast ref={toast} position='bottom-right' />
            <div className='d-flex col-12'>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Tareas</h1>
            </div>
            <div className='d-flex w-auto gap-3 m-3'>
                <InputText placeholder='Título' id='titulo' style={{ minWidth: '5%' }} onBlur={(e) => arrayToAppend(e.target.id, e.target.value)} />
                <InputText placeholder='Tarea' id='descripcion' style={{ width: '100%' }} onBlur={(e) => arrayToAppend(e.target.id, e.target.value)} />
                <Button severity='success' rounded icon="pi pi-plus" style={{ borderRadius: "5px", minWidth: "10%" }} onClick={() => agregarTarea(dataToAppend)} />
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
                                            <Button rounded text icon='pi pi-times' size='xl' style={{ color: 'red' }} onClick={() => eliminarTareas(tarea.id)} > </Button>
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

