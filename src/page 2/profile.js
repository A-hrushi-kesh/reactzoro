import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Profile(){
  const {data,dis,img} =useParams();
  
  // let [state,setState]=useState({});
  // useEffect(()=>{
  //   console.log(data)
  //     setState(data)
  // },[])

    return(
        <div style={{width:"100%", height:"100%",marginTop:"200px",paddingBottom:"100px"}}>
             <div class="row mt-5">
    <div class="col-9  bg-dark text-light" style={{margin:"0px",padding:"0px"}}>
      <div class="card mb-3 bg-dark text-light">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img} alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title mb-5">{data}</h2>
              <div class="btn-group">
                <Link to={`/watch/${data}/${dis}/${encodeURIComponent(img)}`} class="btn btn-success m-2">Watch now</Link>
                <a href="#" class="btn btn-success m-2">Add to playlist</a>
            </div>
              <p class="card-text mt-5">zoro.Watch is the best site to watch Demon Slayer: Kimetsu no Yaiba Hashira Training Arc SUB online, or you can even watch Demon Slayer: Kimetsu no Yaiba Hashira Training Arc DUB in HD quality. You can also find ufotable anime on AniWatch website..</p>
              <h5 className="mt-5">Description</h5>
              <p>{dis}</p>
              <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-3 bg-dark text-light" style={{margin:"0px",padding:"0px"}}>
      <div class="card bg-dark text-light">
        <div class="card-body  bg-dark text-light">
          <h5 class="card-title">Details</h5>
          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item  bg-dark text-light">Japanese: 鬼滅の刃 柱稽古編</li>
          <li class="list-group-item  bg-dark text-light">Premiered: Spring 2024</li>
          <li class="list-group-item  bg-dark text-light">Duration: 49m</li>
          <li class="list-group-item  bg-dark text-light">Status: Finished Airing</li>
          <li class="list-group-item  bg-dark text-light">Studios: ufotable</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn btn-outline-danger me-3">action</a>
          <a href="#" class="btn btn-outline-warning">drama</a>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}
export default Profile;