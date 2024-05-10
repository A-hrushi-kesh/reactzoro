import { Link } from "react-router-dom";

 function Login(){
    return(
        <div>
            <div style={{ height:"100%", width:"100%"}}>
    <div class="card text-bg-dark">
      <img src="https://wallpaperset.com/w/full/e/7/a/103440.jpg" class="card-img" style={{ height:"100%", width:"100%", filter:"grayscale(70%)"}}/>
      <div class="card-img-overlay">
      <div style={{position:"absolute" , top: "100px" , left: "25%"}}>
            <form class="shadow p-3 mb-5 bg-dark text-light" style={{width: "500px", borderRadius:"30px"}} id="mybutton">
                <h2 style={{fontFamily:"sans-serif"}}>LOGIN</h2><br/>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label ">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label class="form-check-label" for="exampleCheck1">Don't have an account? <Link class="text-success" to="/register">Register</Link></label>
                </div>
                <Link type="submit" style={{marginRight:"10px"}} class="btn btn-success" to="/">Submit</Link>
                </form>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
 }
 export default Login;
 