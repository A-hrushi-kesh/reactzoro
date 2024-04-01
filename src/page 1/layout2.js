import Lay2 from "./lay2";
import img from "./zoro.png"
function Layout2(){
    return(
        <div>
           <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:" rgb(39, 43, 46)",padding:"30px",margin:"0px"}} id="p">Recently added</p>
            <div class="row bg-dark rounded-0">
                <div class="col-3">
                    <Lay2
                        img="https://img.flawlessfiles.com/_r/300x400/100/bc/d8/bcd84731a3eda4f4a306250769675065/bcd84731a3eda4f4a306250769675065.jpg"
                        title="One piece"
                        body="Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. "

                        img1="https://img.flawlessfiles.com/_r/300x400/100/72/bf/72bfde46c44a200ff11d82049005d3c8/72bfde46c44a200ff11d82049005d3c8.jpg"
                        title1="bucchigiri"
                        body1="Araji Tomobishi gets caught up in battles among powerful individuals after reuniting with his former friend Mataka Asamine..."

                        img2="https://img.flawlessfiles.com/_r/300x400/100/ba/9e/ba9e528c0152e1939a4bab416234d53c/ba9e528c0152e1939a4bab416234d53c.png"
                        title2="Blue Exorcist"
                        body2="The third season will focus on the enigmatic Illuminati society, who have ties to demons. The aim of this cheerful organization"
                    />
                </div>
                <div class="col-3">
                    <Lay2
                         img="https://img.flawlessfiles.com/_r/300x400/100/55/54/555402a1a926576655f4e11fcb69fdb1/555402a1a926576655f4e11fcb69fdb1.jpg"
                         title="Mashle"
                         body="This is a world of magic. This is a world in which magic is casually used by everyone. In a deep, dark forest in this world of magic, "
 
                         img1="https://img.flawlessfiles.com/_r/300x400/100/cb/b2/cbb2c211b230fb106f65d302929a899f/cbb2c211b230fb106f65d302929a899f.jpg"
                         title1="Ragna Crimson"
                         body1="Dragons reign terror over the earth, sea and sky. If sworn dragon hunters like Ragna are to have any hope of dealing death"
 
                         img2="https://img.flawlessfiles.com/_r/300x400/100/7d/25/7d2536623881bd6f2dc9cf7eff1ac96e/7d2536623881bd6f2dc9cf7eff1ac96e.jpg"
                         title2="Kingdom Season 5"
                         body2="Following the conclusion of the large-scale coalition campaign, the entirety of China is in a state of economic recovery."
                    />
                </div>
                <div class="col-3">
                    <Lay2
                         img="https://img.flawlessfiles.com/_r/300x400/100/7b/6d/7b6d6fee7001654e240301ffd173fe01/7b6d6fee7001654e240301ffd173fe01.jpg"
                         title="Semi and the Magic Cube 2"
                         body="AniWatch is the best site to watch Semi and the Magic Cube 2 SUB online, or you can even watch Semi and the Magic"
 
                         img1="https://img.flawlessfiles.com/_r/300x400/100/e3/fb/e3fbb974525c90745f629eda64d00353/e3fbb974525c90745f629eda64d00353.jpg"
                         title1="Inazuma Eleven"
                         body1="While other schools in Japan compete for the title of being the best soccer team in the country, Raimon Middle School's soccer club, Inazuma Eleven"
 
                         img2="https://resizing.flixster.com/L-MjkOKPkjv-FBcvGnCzpzur95k=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8655066_b_v8_aa.jpg"
                         title2=" Avatar: The Last Airbender"
                         body2="The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element"
                    />
                </div>
                <div class="col-3 bg-dark">
                <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:"white",paddingLeft:"10px",margin:"0px"}} id="p">Founder</p>
                <div class="card text-bg-dark" style={{height:"90%",width:"100%"}}>
                    <img src={img} class="card-img" style={{height:"100%"}}/>
                    <div class="card-img-overlay" style={{marginTop:"60%"}}>
                        <div style={{marginTop:"60%"}}>
                        <h2 class="card-title">Roronoa Zoro</h2>
                        <p class="card-text"><small>One Piece character</small></p>
                        </div>
                        
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}
export default Layout2;
