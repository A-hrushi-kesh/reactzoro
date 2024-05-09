import { Link } from "react-router-dom";
import "./nav.css"

 function Nav(){
    let a={
        height:"40px",
        width:"95px",
        marginRight:"900px"
    };
    return(
        <nav class="navbar navbar-dark sticky-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome to ZORO</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <Link to="/"><img src="https://w1.zoro.se/assets/zoro-logo.png" style={a} alt=""></img></Link>
          <form class="d-flex" role="search">
            <input class="btn btn-light" type="search" placeholder="Search" style={{marginRight:"10px"}} aria-label="Search"/>
            <button class="btn btn-outline-success" style={{marginRight:"10px"}} type="submit">Search</button>
            <Link type="button" class="btn btn-success" id="liveAlertBtn" to="/login">Login</Link>
          </form>
        </div>
      </nav>
    );
}
 export default Nav;