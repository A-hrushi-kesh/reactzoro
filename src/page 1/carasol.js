import img from "./new.jpg"

function Header(){
    return(
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  < div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.flawlessfiles.com/_r/1366x768/100/77/d5/77d5b8375497a14e37f895a90d67f4e0/77d5b8375497a14e37f895a90d67f4e0.jpg" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{position:"absolute",top:"40%",right:"60%"}}>
        <h2 style={{fontSize:"50px"}}>Shangri-La Frontier</h2>
        <p>Second year high school student Rakurou Hizutome is interested in one thing only: finding "shitty games" and beating the crap out of them. His gaming skills are second to none, and no game is too bad for him to enjoy. So when he's introduced to the new VR game Shangri-La Frontier </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.flawlessfiles.com/_r/1366x768/100/31/aa/31aacbf403a8f1c180a940009dbf17f5/31aacbf403a8f1c180a940009dbf17f5.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{position:"absolute",top:"50%",right:"60%"}}>
        <h2 style={{fontSize:"50px"}}>The Apothecary Diaries</h2>
        <p>In an imperial court in ancient China, it has been a few months since a 17-year-old girl known as Maomao was kidnapped and forced to work as a low-level servant at the emperor's palace. Still, she manages to retain her curious and pragmatic spirit, planning to wo...+ More</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{position:"absolute",top:"50%",right:"60%"}}>
        <h2 style={{fontSize:"50px"}}>Naruto</h2>
        <p>"Naruto" follows Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, known as Hokage. Facing challenges, friendships, and battles, Naruto navigates his way through the ninja world, seeking acceptance and recognition while uncovering the truth about his past.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
}
export default Header;