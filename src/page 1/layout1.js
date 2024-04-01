import Lay1 from "./lay1";

function Main(props){
   return (
    <div class="bg-dark text-light">
        <div class="row" style={{margin:"0px", padding:"0px"}}>
        <div class="col">
        <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:"white", paddingLeft:"10px"}} >{props.head1}</p>
        </div>
        <div class="col">
        <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:"white",paddingLeft:"10px"}} >{props.head2}</p>
        </div>
        <div class="col">
        <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:"white",paddingLeft:"10px"}} >{props.head3}</p>
        </div>
        <div class="col">
        <p style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"bold", color:"#BFD641" ,backgroundColor:"white",paddingLeft:"10px"}} >{props.head4}</p>
        </div>
      </div>
        <div class="row">
        <div class="col-3 bg-dark">
            <Lay1 
                img="https://img.flawlessfiles.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg" 
                title="Naruto" 
                body="Naruto follows Naruto Uzumaki,a young ninja with dreams of becoming the strongest ninja."

                img1="https://img.flawlessfiles.com/_r/300x400/100/a1/e9/a1e98b07e290cd9653b41a895342a377/a1e98b07e290cd9653b41a895342a377.jpg"
                title1="One piece"
                body1="Gold Roger was known as the Pirate King the strongest and most infamous being to have sailed the Grand Line."

                img2="https://img.flawlessfiles.com/_r/300x400/100/0f/47/0f474e6ea130efd9372f913356037955/0f474e6ea130efd9372f913356037955.jpg"
                title2="Bleach"
                body2="After a brutal surprise attack by Quincy King Yhwach, Reapers of the Soul Society lick their wounds and..."

            />
        </div>
        <div class="col-3" >
            <Lay1
                img="https://img.flawlessfiles.com/_r/300x400/100/78/d1/78d183cd4fe881d5b656c52053d73c77/78d183cd4fe881d5b656c52053d73c77.jpg"
                title="Jujutsu Kaisen"
                body="high schooler Yuuji Itadori spends his days at either the clubroom or the hospital"

                img1="https://static.zoro.se/black-clover-tv.jpg"
                title1="Black Clover"
                body1="Asta and Yuno were abandoned at the same church on the same day. Raised together as children.."

                img2="https://img.flawlessfiles.com/_r/300x400/100/8c/f9/8cf943f264358d31e264ff459fcf50f8/8cf943f264358d31e264ff459fcf50f8.jpg"
                title2="My Hero Academia"
                body2="At UA Academy, not even a violent attack can disrupt their most prestigious event: the school sports festival"
            />
        </div>
        <div class="col-3">
            <Lay1
                img="https://img.flawlessfiles.com/_r/300x400/100/30/df/30df93feaa422101659e14d0a2a2f582/30df93feaa422101659e14d0a2a2f582.jpg"
                title="Demon Slayer"
                body="Ever since the death of his father, the family has fallen upon Tanjirou Kamado's shoulders."

                img1="https://img.flawlessfiles.com/_r/300x400/100/5f/d0/5fd0a7d4f0e1a9088c85bc0dcb2f176a/5fd0a7d4f0e1a9088c85bc0dcb2f176a.png"
                title1="Hell's Paradise"
                body1="Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic. After leading a blood-soaked life"

                img2="https://img.flawlessfiles.com/_r/300x400/100/fc/ed/fced51e392ffd80041b3a1581ba7de2f/fced51e392ffd80041b3a1581ba7de2f.jpg"
                title2="Blue Lock"
                body2="Yoichi Isagi was mere moments away from scoring a goal that would have sent his high school soccer t"
            />
        </div>
        <div class="col-3">
             <Lay1
                img="https://img.flawlessfiles.com/_r/300x400/100/94/60/946094eaf35750202939da769bc53954/946094eaf35750202939da769bc53954.jpg"
                title="Solo Leveling"
                body="They say whatever doesn’t kill you makes you stronger,but that’s not the case for the world’s."

                img1="https://img.flawlessfiles.com/_r/300x400/100/b3/da/b3da1326e07269ddd8d73475c5dabf2c/b3da1326e07269ddd8d73475c5dabf2c.jpg"
                title1="Chainsaw Man"
                body1="Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming deb"

                img2="https://img.flawlessfiles.com/_r/300x400/100/5e/61/5e61f3e7c0045e46b670d31a5bb39c68/5e61f3e7c0045e46b670d31a5bb39c68.jpg"
                title2="Death Note"
                body2="A shinigami, as a god of death, can kill any person provided they see their victim's face and write their victim's ...."
             />
        </div>
    </div>
    </div>
   );
}
export default Main;