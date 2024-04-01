import { Link } from "react-router-dom";
import "./crad-lay1.css";


function Card(props){
   
    return(
      <Link to="/profile" style={{textDecoration:"none"}}>
        <div class="card mb-3 bg-dark text-light" id="crad">
        <div class="row g-0 "  id="crad">
          <div class="col-md-4">
            <img src={props.img} class="img-fluid" style={{width:"100%", height:"100%"}} alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body" id="e2">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.body}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>

    );
}
export default Card;
