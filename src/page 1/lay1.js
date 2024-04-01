import Card from "./card-lay1";

function Lay1(props){
    return(
        <div class="card bg-dark rounded-0">
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-light">
                    <Card img={props.img} title={props.title} body={props.body}/>
                </li>
                <li class="list-group-item bg-dark text-light">
                    <Card img={props.img1} title={props.title1} body={props.body1}/>
                </li>
                <li class="list-group-item bg-dark text-light">
                    <Card img={props.img2} title={props.title2} body={props.body2}/>
                </li>
            </ul>
            </div>
    );
}
export default Lay1;