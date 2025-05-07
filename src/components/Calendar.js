import { useState, useEffect } from 'react';

export default function Calendar(props) {

    return (
    <>
        <div className='row m-5'></div>
        <section className="d-flex flex-wrap flex-fill gap-3 border p-3 m-4 overflow-scroll overflow-x-hidden" style={{ height: "auto" }}>
            <div className='d-flex col-12 fs-4 mx-3' style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Calendario de Eventos </h1>
            </div>
            <div className='d-flex col-12 my-3' >
                <div class="input-group">
                    <input type="text" placeholder='Titulo del nuevo evento' aria-label="title" class="form-control w-25"></input>
                    <input type="text" placeholder='Descripción del nuevo evento' aria-label="description" class="form-control w-25"></input>
                    <input type="date" aria-label="date" class="form-control w-auto"></input>
                    <input type="time" aria-label="time" class="form-control w-auto"></input>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Agregar evento</button>
                </div>
            </div>
        <iframe src="https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showTitle=0&showCalendars=0&showTz=0&src=Y2FybG9zLnRyYWJham8ubm9vZmljaWFsQGdtYWlsLmNvbQ&src=YTc1ZGVjMzE4NmYwZjllYzdkM2JkYjU4NmJjNWYyZDkzZWRkMjA3NjllZWY5ZTQ2ODVhZjI5OWQ4NjEwYmZiMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23D81B60" style={{width : "100%", height : "700px"}} ></iframe>
        </section >
    </>
    )
}

