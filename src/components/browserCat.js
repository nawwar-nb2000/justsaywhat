import {useState} from "react" 
import top from "../img/top_.png"
import Groub from"../img/CATEGORIES.svg"


import{Container , Row , Col} from "react-bootstrap"
const BrCat = () => {
    const [brcat , setbrcat] = useState([
        {id:1 , title :"Barber"},
        {id:2 , title :"Laser Hair"},
        {id:3 , title :"Tattoo Removal"},
        {id:4 , title :"Other services"}
        
    ])
   
    
    return ( 
    <div>
<Container fluid striped className="brCatStyle mt-5">
    <p  className="first-brCatStyle">
    Browse Categories
    </p>
    <p  className="second-brCatStyle">
    See all (12)
    </p>
</Container>

<Row striped className=" w-100">

{brcat && brcat.map(BB=>(
            <Col md={3}>
                <div className="main-brcat" key={BB.id}>
                
                <div className="cat-image">
                    <img src={top} alt="" style={{width:"80%"}}/>
                </div>
                <p className="cat-title">{BB.title}</p>
                
            </div>
            </Col>
        ))
    }

</Row>

<Container fluid>


    <h1 className="center-title-HOw"> How it <span>works</span></h1>
    <h2 className="text-after-title">
    We’ve made all the hardwork for making it <span>simple</span> For Our CustomerHere’s how it works
    </h2>

    <div>
        <img src={Groub} style={{width:"100%"}}/>
    </div>
<div className="button-container">
    <button className="button-Let">let's start</button>
</div>

    <h2 className="center-title-FOr">
        For <span>Service</span> Provider
    </h2>

    <p className="paragraph-text">
   We've made all the hardwork for making it <span>Simple</span> For 
   Service ProviderHere’s how it works
    </p>
</Container>

           
    </div> );
}
 
export default BrCat;