import { useParams } from "react-router-dom";
import video from "./demon.mp4";
function Watch(){
    const {data,dis,img}=useParams()
    return(
        <div class="bg-dark">
            <div class="row bg-dark text-light">
                <div class="col-9 bg-dark text-light" style={{height:"500px",margin:"0px",padding:"0px"}}>
                <video src={video} class="object-fit-cover" controls autoPlay width={"100%"}/>
                </div>
                <div class="col-3 bg-dark pt-4"  style={{height:"700px",margin:"0px",padding:"0px",backgroundColor:"gray"}}>
                <div class="card m-0 p-0 bg-dark text-light">
                    <img src={img} class="img-fluid rounded-start p-4" className="card-img-top" style={{height:"400px",width:"70%",marginLeft:"50px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">{data}</h5>
                        <p class="card-text">{dis}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Watch;