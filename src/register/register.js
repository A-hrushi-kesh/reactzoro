import { Link } from "react-router-dom";

function Register(){
    return(
        <div>
            <div style={{ height:"100%", width:"100%"}}>
    <div class="card text-bg-dark">
      <img src="https://wallpaperset.com/w/full/e/7/a/103440.jpg" class="card-img" style={{ height:"100%", width:"100%", filter:"grayscale(70%)"}}/>
      <div class="card-img-overlay">
      <div style={{position:"absolute" , top: "100px" , left: "25%"}}>
            <form class="shadow p-3 mb-5 bg-dark text-light" style={{width: "500px", borderRadius:"30px"}} id="mybutton">
            <h2 style={{fontFamily:"sans-serif"}}>REGISTER</h2><br/>
            <div class=" mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter your name</label>
                <input type="text" class="form-control" aria-label="Username"/>
            </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">female</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                  <label class="form-check-label" for="inlineRadio3">others</label>
                </div><br/><br/>
                <Link type="submit" class="btn btn-success" to="/">Submit</Link>
            </form>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}
export default Register;