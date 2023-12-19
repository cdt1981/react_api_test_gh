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
      <nav class="navbar bg-body-tertiary fixed-top">
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>


          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>



    </>
  );
}

export default App;
