import video from "./demon.mp4";
function Watch(){
    return(
        <div class="bg-dark">
            <div class="row bg-dark text-light">
                <div class="col-9 bg-dark text-light" style={{height:"500px",margin:"0px",padding:"0px"}}>
                <video src={video} class="object-fit-cover" controls autoPlay width={"100%"}/>
                </div>
                <div class="col-3 bg-dark pt-4"  style={{height:"700px",margin:"0px",padding:"0px",backgroundColor:"gray"}}>
                <div class="card m-0 p-0 bg-dark text-light">
                    <img src="https://img.flawlessfiles.com/_r/300x400/100/1f/73/1f73284800eb5cf57c32a8f68120cc82/1f73284800eb5cf57c32a8f68120cc82.jpg" class="img-fluid rounded-start p-4" className="card-img-top" style={{height:"400px",width:"70%",marginLeft:"50px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Demon Slayer: Kimetsu no Yaiba Hashira Training Arc</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Watch;