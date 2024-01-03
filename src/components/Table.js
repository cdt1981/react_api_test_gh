
export default function Table(props) {


    return (
        <div class="card" style={{ "width": "18rem" }}>
            <img src={Default} class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title"> {props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary float-end">{props.buttonText}</a>
            </div>
        </div>
    )
}

