import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav  from './page 1/nav.js';
import Header from './page 1/carasol.js';
import Main from './page 1/layout1.js';
import Layout2 from './page 1/layout2.js';
import Footer from './page 1/footer.js';
import Profile from './page 2/profile.js';
import Watch from './page 3/watch.js';
import Login from "./login/login.js";
import Register from './register/register.js';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
function Home(){
    return(
        <div><Header/><Main head1="TRANDING" head2="Monthly Top" head3="Weekly Top" head4="Recntly added"/><Layout2/><Main head1="Latest Episode" head2="New On Watch" head3="Most Favorite" head4="Top Airing"/><Footer/></div>
    );
}
 
function Assemble(){
    return(
        <BrowserRouter basename="/reactzoro">
        <Nav/>
        <Routes>
          <Route path="/reactzoro" element={<Home />}/>
          <Route path="/profile/:data/:dis/:img" element={<Profile />}/>
          <Route path="/watch/:data/:dis/:img" element={<Watch />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    );
}

ReactDOM.render(<Assemble/>,document.getElementById("root"));
