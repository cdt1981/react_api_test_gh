import Default from '../img/default.jpg';

export default function Card(props) {


    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={Default} className="card-img-top" alt='' />
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="/" className="btn btn-primary float-end">{props.buttonText}</a>
            </div>
        </div>
    )
}

