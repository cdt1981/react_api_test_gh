import { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default function Interlocutorios() {

    const [datos, setDatos] = useState();
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        numero: { value: null, matchMode: FilterMatchMode.CONTAINS },
        caratula: { value: null, matchMode: FilterMatchMode.CONTAINS },
        descripcion: { value: null, matchMode: FilterMatchMode.CONTAINS },
        estado: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [expediente, setExpediente] = useState(null);
    const [estados] = useState(['Sin proyecto', 'Circulando', 'Registrado', 'MMP']);
    const [date, setDate] = useState(null);
    const [state, setState] = useState(true);
    const [dataToEdit, setDataToEdit] = useState({})
    const [dataToAppend, setDataToAppend] = useState({})
    const [estado, setEstado] = useState()


    const getSeverity = (value) => {

        switch (value) {
            case 'Sin proyecto':
                return 'danger';
            case 'Circulando':
                return 'warning';
            case 'Registrado':
                return 'success';
            case 'MMP':
                return 'info';
        }
    }
    

    const textEditor = (options) => {
        return <InputText type="text" style={{ width: '100%' }} value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const dateEditor = (options) => {
        return <Calendar value={options.value} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" showButtonBar />
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={estados}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Elegir un estado..."
            /* itemTemplate={(option) => {
                return <Tag value={option} severity={getSeverity(option)}></Tag>;
            }} */
            />
        );
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    const deleteRow = (rowData) => {
        const icon = 'pi  pi-times';

        return <Button type="button" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey' }} icon={icon} onClick={() => eliminarDatos(rowData.id)} />;

    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const toast = useRef(null);

    const showToast = (action) => {
        switch (action) {
            case "eliminar":
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Expediente eliminado...' });
                break;
            case "agregar":
                toast.current.show({ severity: 'success', summary: 'Info', detail: 'Expediente agregado...' });
                break;
            case "modificar":
                toast.current.show({ severity: 'warn', summary: 'Info', detail: 'Expediente actualizado...' });
                break;

            default:
                break;
        }
    };

    function agregarDatos() {
        fetch("https://script.google.com/macros/s/AKfycbxvR3O02-duhd7JbzPRgIuSthicjxGN2Q-CC6rT53oBQqm1mGpCQq0E2ASkVPRuxwHv/exec?action=agregarDatos",
            {
                method: "POST",
                body: JSON.stringify(dataToAppend),
            })
            .then(() => setState(!state))
            .then(() => showToast("agregar"))
    }

    function modificarDatos(e) {
            let { newData } = e;
            
        fetch("https://script.google.com/macros/s/AKfycbzL7IwRf6AwItp31ZIYlMMGapqlLG7Jg4kh5IJ40J-YGPmhCSjxqGizbRF_mPzpQe5s/exec?action=modificarDatos",
            {
                method: "POST",
                body: JSON.stringify(newData),
            })
            .then(() => setState(!state))
            .then(() => showToast("modificar"))
    }

    /* function obtenerDatos() {
      return fetch("https://script.google.com/macros/s/AKfycbzmeA3w5P9vXQQHxp2pP5pJ_FRPEQgs3NzSqZaopXshjUuHqsMpA0IpUGCvYENFbM3N/exec?action=obtenerDatos",
          { method: "GET" })
          .then((response) => response.json())
          .then((data) => console.log(data))
  
    } */
    function obtenerDatos() {
        return fetch("https://script.google.com/macros/s/AKfycbxvR3O02-duhd7JbzPRgIuSthicjxGN2Q-CC6rT53oBQqm1mGpCQq0E2ASkVPRuxwHv/exec?action=obtenerDatos",
            { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.lenght; i++) {
                    data[i].key.replace(`"`, ``)
                }
                setDatos(data)
            })
    }

    function eliminarDatos(id) {
        fetch("https://script.google.com/macros/s/AKfycbx_LDWm2MwKxP6bRRIEXFp59gMQL5M8AChY1PUb3GYmZuMCOn-0Q4Bf6PCUpBbwGZbq/exec?action=eliminarDatos",
            {
                method: "POST",
                body: JSON.stringify({
                    id
                })
            })
            .then(() => setState(!state))
            .then(() => showToast("eliminar"))

    }

    useEffect(() => {
        obtenerDatos()

    }, [state]) // eslint-disable-line react-hooks/exhaustive-deps

    function arrayToAppend(clave, valor) {

        setDataToAppend({ ...dataToAppend, [clave]: valor })

    }

    return (

        <section className="border m-4 p-3 mb-5" id='interlocutorios'>
            <div className="card flex justify-content-center">
                <Toast ref={toast} position='bottom-right' />
            </div>
            <div>
                <div className="d-flex justify-content-between m-2">
                    <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Interlocutorios</h1>
                    <span className="p-input-icon-left d-flex align-items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar..." />
                    </span>
                </div>
                <div className='d-flex gap-3 m-3'>
                    <InputText placeholder='Número' id='numero' onChange={(e) => arrayToAppend(e.target.id, e.target.value)} style={{ minWidth: '5%' }} />
                    <InputText placeholder='Carátula' id='caratula' onChange={(e) => arrayToAppend(e.target.id, e.target.value)} style={{ width: '100%' }} />
                    <Calendar value={date} id='ingreso' onChange={(e) => { setDate(e.value); arrayToAppend(e.target.id, new Intl.DateTimeFormat('es-SP').format(e.target.value)) }} style={{ minWidth: '7%' }} dateFormat='dd/mm/yy' />
                    <InputText placeholder='Descripción' id='descripcion' onChange={(e) => arrayToAppend(e.target.id, e.target.value)} style={{ width: '100%' }} />
                    <Dropdown placeholder='Estado' id='estado' onChange={(e) => { arrayToAppend(e.target.id, e.target.value); setEstado(e.value) }} options={estados} value={estado} style={{ minWidth: '7%' }} />
                    <Button label='Agregar' onClick={() => agregarDatos(dataToAppend)} severity='success' rounded icon="pi pi-check" style={{ borderRadius: "5px", minWidth: "10%" }} />
                </div>
                <DataTable
                    value={datos}
                    showGridlines
                    dataKey='id'
                    selection={expediente}
                    selectionMode='single'
                    editMode="row"
                    onRowEditComplete={(e) => modificarDatos(e)}
                    /* onSelectionChange={(e) => setExpediente(e.value)} */
                    /* onDoubleClick={(e) => console.log(e.currentTarget)} */
                    paginator
                    rows={15}
                    tableStyle={{ minWidth: '100rem', height: 'auto' }}
                    filters={filters}

                    className='border'
                >
                    <Column header="Id" filterField='id' field='id' style={{ width: '2%', textAlign: 'center' }}></Column>
                    <Column header="Número" filterField='numero' field='numero' editor={(options) => textEditor(options)} style={{ width: '6%', textAlign: 'end' }}></Column>
                    <Column header="Carátula" filterField='caratula' field='caratula' editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column header="Ingreso" sortable field='ingreso' editor={(options) => dateEditor(options)} style={{ width: '6%' }}></Column>
                    <Column header="Proyecto" field='proyecto' editor={(options) => dateEditor(options)} style={{ width: '6%' }}></Column>
                    <Column header="Egreso" field='egreso' editor={(options) => dateEditor(options)} style={{ width: '6%' }}></Column>
                    <Column header="Descripción" filterField='descripcion' field='descripcion' editor={(options) => textEditor(options)} style={{ width: '30%' }}></Column>
                    <Column header="Estado" filterField='estado' sortable field='estado' editor={(options) => statusEditor(options)} style={{ width: '7%' }} ></Column>
                    {/* <Column header="Acciones" style={{ width: '6%' }} body={actionButtons} ></Column> */}
                    <Column header="Editar" rowEditor={allowEdit} headerStyle={{ width: '6%' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    <Column header="Borrar" body={deleteRow} headerStyle={{ width: '6%' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </section>

    )
}



