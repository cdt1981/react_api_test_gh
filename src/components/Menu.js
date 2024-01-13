import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Badge } from 'primereact/badge';

export default function Menu(props) {

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const startContent = (
        <>

        </>
    );

    const centerContent = (
        <ul className="list-group list-group-horizontal fs-5">
            <li class="list-group-item">
                <span><i className='pi pi-chart-line mx-3'></i></span>
                <a href="#">Liquidaciones</a>
            </li>
            <li class="list-group-item">
                <span><i className='pi pi-database mx-3'></i></span>
                <a href="#">Modelos</a>
            </li>
            <li class="list-group-item">
                <span><i className='pi pi-server mx-3'></i></span>
                <a href="#">Sentencias</a>
            </li>
        </ul>
    );

    const endContent = (
        <ul className="list-group list-group-horizontal fs-5">
            <li class="list-group-item d-flex align-items-center">
                <i className='pi pi-envelope p-overlay-badge mx-3' style={{ fontSize: '1.5rem' }}>
                    <Badge value='2' severity='danger'></Badge>
                </i>
                <a href="#">Gmail</a>
            </li>
        </ul>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}

