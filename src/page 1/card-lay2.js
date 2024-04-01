import "./card-lay2.css"

function Card2(props){
    return(
        <div class="card text-bg-dark rounded-0" id="card2" style={{height:"300px", width:"70%", marginLeft:"10px", marginBottom:"10px" }}>
        <img src={props.img} class="card-img rounded-0" alt="..." style={{height:"300px", width:"100%", marginLeft:"0px", marginBottom:"10px" }}/>
        <div class="card-img-overlay" id="card2">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text"id="h">{props.body}</p>
        </div>
      </div>
    );
}
export default Card2;