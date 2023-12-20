import './App.css';

function App() {

  function agregarDatos() {
    fetch("https://script.google.com/macros/s/AKfycbwFuOWTwH5e0jcfBj_5I8Z1LmBiSrjtI2byhxtRJ8pRXNY-ZWKzeb0ttZSVoaDhpEwz/exec?action=agregarDatos",
      {
        method: "POST",
        body: JSON.stringify({
          "agente": "Carlos",
          "numero": 12345,
        }),
      })
  }

  function obtenerDatos() {
    fetch("https://script.google.com/macros/s/AKfycbzmeA3w5P9vXQQHxp2pP5pJ_FRPEQgs3NzSqZaopXshjUuHqsMpA0IpUGCvYENFbM3N/exec?action=obtenerDatos",
      { method: "GET" })
      .then((response) => response.text())
      .then((data) => console.log(JSON.parse(data)))
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
      <section className="container-fluid d-flex flex-wrap gap-3  m-4">
        <div class="card" style={{"width": "18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{"width": "18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </section>



    </>
  );
}

export default App;
