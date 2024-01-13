import Default from '../img/default.jpg';
import Menu from './Menu';

export default function Nav() {
    return (
        <nav className="navbar bg-body-tertiary sticky-top">
            <div className="container-fluid">
                {/*                 <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarTest" aria-controls="offcanvasNavbarTest" aria-label="Toggle navigation">
                    <span><i className="fa-solid fa-money-bill-trend-up"></i></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbarTest" aria-labelledby="offcanvasNavbarLabelTest">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabelTest">I.O.L.</h5>
                    </div>
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li className="nav-item p-2">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div> */}

                <Menu></Menu>

                {/*                 <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span><i className="fa-solid fa-gear"></i></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div >
                        <ul className="navbar-nav container">
                            <li className="nav-item">
                                <a className="nav-link p-2" href="#interlocutorios">Interlocutorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-2" href="#">Modelos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-2" href="#">Jurisprudencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-2" href="#">Liquidaciones</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </nav>
    )
}



