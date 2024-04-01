function Footer(){
    let a={
        height:"40px",
        width:"95px",
        marginRight:"1000px",
    };
    return(
        <div>
            <div style={{ height:"300px", width:"100%"}}>
    <div class="card text-bg-dark">
      <img src="https://wallpapers.com/images/featured/zoro-pictures-8nv0c0nb7rijf6z2.webp" class="card-img" style={{ height:"300px", width:"100%", filter:"grayscale(70%)"}}/>
      <div class="card-img-overlay">
      <img src="https://w1.zoro.se/assets/zoro-logo.png" style={a} alt=""></img><br/><hr/>
        <h5 class="card-title text-dark">Terms of service</h5>
        <p class="card-text text-dark">By accessing this Website, accessible from https://zoro.watch.to, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
        </div>
    );

}
export default Footer;