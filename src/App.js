import './App.css';

function App() {

  function agregarDatos(){
    fetch("https://script.google.com/macros/s/AKfycbwFuOWTwH5e0jcfBj_5I8Z1LmBiSrjtI2byhxtRJ8pRXNY-ZWKzeb0ttZSVoaDhpEwz/exec?action=agregarDatos",
    {method: "POST",
    body: JSON.stringify({
        "agente": "Carlos",
        "numero": 12345,
        }),
    })
}

function obtenerDatos(){
    fetch("https://script.google.com/macros/s/AKfycbzmeA3w5P9vXQQHxp2pP5pJ_FRPEQgs3NzSqZaopXshjUuHqsMpA0IpUGCvYENFbM3N/exec?action=obtenerDatos",
    {method: "GET"})
        .then((response) => response.text())
        .then((data) => console.log(JSON.parse(data)))
    }

function eliminarDatos(){
    fetch("https://script.google.com/macros/s/AKfycbx_LDWm2MwKxP6bRRIEXFp59gMQL5M8AChY1PUb3GYmZuMCOn-0Q4Bf6PCUpBbwGZbq/exec?action=eliminarDatos",
    {method: "POST",
    body: JSON.stringify({
        "id": "5"
        })
    })
    .then(() => console.log("eliminado"))
}

  return (
    <div className="App">
      <h1>HOLA</h1>
      <button onClick={() => agregarDatos()}>CLICK ME</button>
    <button onClick={() => obtenerDatos()}>OBTENER</button>
    <button onClick={() => eliminarDatos()}>ELIMINAR</button>
    </div>
  );
}

export default App;
