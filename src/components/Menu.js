import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Badge } from 'primereact/badge';

export default function Menu(props) {

    const [unreadMails, setUnreadMails] = useState()

    const endpoint = "https://script.google.com/macros/s/AKfycbzbYTHapIn4aK-eGdbWbe-_Vfse_XU4l5hENJ5twHkPvi_b7Ip-sn7asQ2wfDSjviMB/exec?action=obtenerCorreosPendientes";

    useEffect(() => {
        fetch(endpoint, {method: "GET"})
        .then((response) => response.json())
        .then((data) => data? setUnreadMails(data): setUnreadMails("0"))
        
    }, [])
    

    const startContent = (
        <>

        </>
    );

    const centerContent = (
        <ul className="list-group list-group-horizontal fs-5">
            <li className="list-group-item">
                <span><i className='pi pi-home mx-3'></i></span>
                <Link to='/react_api_test_gh/'>Home</Link>
            </li>
            <li className="list-group-item">
                <span><i className='pi pi-chart-line mx-3'></i></span>
                <Link to='/react_api_test_gh/liquidaciones' target='_blank' >Liquidaciones</Link>
            </li>
            <li className="list-group-item">
                <span><i className='pi pi-database mx-3'></i></span>
                <Link to='/react_api_test_gh/modelos' target='_blank'>Modelos</Link>
            </li>
            <li className="list-group-item">
                <span><i className='pi pi-server mx-3'></i></span>
                <Link to='/react_api_test_gh/sentencias' target='_blank'>Sentencias</Link>
            </li>
            <li className="list-group-item">
                <span><i className='pi pi-calendar mx-3'></i></span>
                <Link to='/react_api_test_gh/calendar' target='_blank'>Calendario</Link>
            </li>
        </ul>
    );

    const endContent = (
        <ul className="list-group list-group-horizontal fs-5">
            <li className="list-group-item d-flex align-items-end">
                <i className='pi pi-envelope p-overlay-badge mx-3' style={{ fontSize: '1.5rem' }}>
                    <Badge value={unreadMails} severity='danger'></Badge>
                </i>
                <a href="https://www.gmail.com" target='_blank'>Gmail</a>
            </li>
        </ul>
    );

    return (
        <div className="card fixed-top">
            <Toolbar start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}

