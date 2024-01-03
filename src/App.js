import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function App() {

  const [datos, setDatos] = useState();
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    numero: { value: null, matchMode: FilterMatchMode.CONTAINS },
    caratula: { value: null, matchMode: FilterMatchMode.CONTAINS },
    descripcion: { value: null, matchMode: FilterMatchMode.CONTAINS },
    estado: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  function agregarDatos() {
    fetch("https://script.google.com/macros/s/AKfycbwFuOWTwH5e0jcfBj_5I8Z1LmBiSrjtI2byhxtRJ8pRXNY-ZWKzeb0ttZSVoaDhpEwz/exec?action=agregarDatos",
      {
        method: "POST",
        body: JSON.stringify({
          agente: "Carlos",
          numero: 12345,
        }),
      })
  }

  /* function obtenerDatos() {
    return fetch("https://script.google.com/macros/s/AKfycbzmeA3w5P9vXQQHxp2pP5pJ_FRPEQgs3NzSqZaopXshjUuHqsMpA0IpUGCvYENFbM3N/exec?action=obtenerDatos",
        { method: "GET" })
        .then((response) => response.json())
        .then((data) => console.log(data))

  } */
  function obtenerDatos() {
    return fetch("https://script.google.com/macros/s/AKfycbyIAlDAQ5v4bwjlufLQTqzylYghlvnlje-BtBmbZcmUPMwaT2NPmD483WsfWDnT3odt/exec?action=obtenerDatos",
      { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.lenght; i++) {
          data[i].key.replace(`"`, ``)
        }
        setDatos(data)
      })

  }

  function eliminarDatos() {
    fetch("https://script.google.com/macros/s/AKfycbx_LDWm2MwKxP6bRRIEXFp59gMQL5M8AChY1PUb3GYmZuMCOn-0Q4Bf6PCUpBbwGZbq/exec?action=eliminarDatos",
      {
        method: "POST",
        body: JSON.stringify({
          "id": "5"
        })
      })
      .then(() => console.log("eliminado"))
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  const actionButtons = () => {

    return (
      <div>
        <Button className='rounded bg-success border'><i class="fa-regular fa-pen-to-square"></i></Button>
        <Button className='rounded bg-danger border'><i class="fa-regular fa-trash-can"></i></Button>
      </div>
      
    )

  }


  return (
    <>
      <nav class="navbar bg-body-tertiary sticky-top">
        <div class="container-fluid d-flex justify-content-between">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarTest" aria-controls="offcanvasNavbarTest" aria-label="Toggle navigation">
            <span><i class="fa-solid fa-money-bill-trend-up"></i></span>
          </button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarTest" aria-labelledby="offcanvasNavbarLabelTest">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabelTest">IOL</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li class="nav-item p-2">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>


          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span><i class="fa-solid fa-gear"></i></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div >
              <ul class="navbar-nav container">
                <li class="nav-item">
                  <a class="nav-link p-2" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2" href="#">Home2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2" href="#">Home3</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2" href="#">Home4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="border m-4 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div>
          <div className="d-flex justify-content-end m-2">
            <span className="p-input-icon-left">
              <i class="fa-solid fa-magnifying-glass"></i>
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar..." />
            </span>
          </div>
          <DataTable value={datos}
            stripedRows
            showGridlines
            paginator
            rows={15}
            tableStyle={{ minWidth: '100rem' }}
            filters={filters}
          >
            <Column header="Número" filterField='numero' field='numero' style={{ width: '6%', textAlign: 'end' }}></Column>
            <Column header="Carátula" filterField='caratula' field='caratula' style={{ width: '20%' }}></Column>
            <Column header="Ingreso" sortable field='ingreso' style={{ width: '6%' }}></Column>
            <Column header="Proyecto" field='proyecto' style={{ width: '6%' }}></Column>
            <Column header="Egreso" field='egreso' style={{ width: '6%' }}></Column>
            <Column header="Descripción" filterField='descripcion' field='descripcion' style={{ width: '30%' }}></Column>
            <Column header="Estado" filterField='estado' sortable field='estado' style={{ width: '8%' }}></Column>
            <Column header="Acciones" style={{ width: '5%' }} body={actionButtons} ></Column>
          </DataTable>
        </div>
      </section>
      <section className="container-fluid d-flex flex-wrap gap-3  m-4">
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />



      </section>



    </>
  );
}

export default App;
