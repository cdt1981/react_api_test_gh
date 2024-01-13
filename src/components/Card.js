export default function Card(props) {

    return (
        <div className="card shadow" style={{ "maxWidth": "15%" }}>
            <div className="card-body">
                <h3>{props.title}</h3>
                
                {/* <a href="/" className="btn btn-primary float-end">{props.buttonText}</a> */}
            </div>
        </div>
    )
}

