import Card2 from "./card-lay2";
function Lay2(props){
    return(
        <div class="d-flex flex-column mb-3 rounded-0">
        <div class="p-2 rounded-0" > <Card2 img={props.img} title={props.title} body={props.body}/> </div>
        <div class="p-2 rounded-0"> <Card2 img={props.img1} title={props.title1} body={props.body1}/> </div>
        <div class="p-2 rounded-0"> <Card2 img={props.img2} title={props.title2} body={props.body2}/> </div>
        </div>
    );
}
export default Lay2;
{/* <Card2 img={props.img} title={props.title} body={props.body}/> */}