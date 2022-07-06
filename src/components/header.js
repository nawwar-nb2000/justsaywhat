import Pierre from "../img/pierre-chatel.svg"
import search from "../img/search.svg"
import Trip from "../img/Trips.svg"
import marker from "../img/marker.svg"
import filter from "../img/filter.svg"
import {Container, Row, Col} from "react-bootstrap"
const HeaderSec = () => {
    return ( 
    <div>

<Container fluid striped className="main-header-container p-0 my-4">
    <Row striped className="mx-0 px-0">
        <Col md={5} sm={6} xs={8} striped className="px-0">
                <div striped className="first-con-header ms-0 ">
                    Quality home
                    service on demand
                </div>
        </Col>

    </Row>
    <div className="noON">   
    <img src={Pierre} style={{width:"70%"}}/>
    </div>
    <Row striped className="second-con-header px-0 mx-0 mt-5 py-4">
        <Col md={2} sm={4} xs={4} striped className='border-right '>
        
        <div className="icon-styling-sec">
        <p className="mb-1 mt-2 font-style-sider">
        near- Jaipur 302019 Service Location
        </p>
        <span className="icon-styling-sec">
            <img src={Trip} style={{width:'30px'}}/>
            
        </span>
        </div>

        <div className="icon-styling-sec">
        <p className="mt-1 mb-2 font-style-sider">
            or you can on our live map
        </p> 
        <span >
        <img src={marker} style={{width:"30px"}}/></span>
           
        </div>

        
        </Col>
        <Col md={4} sm={7} xs={8} striped className="section-na ps-5 py-2">
               <img src={search} width="30px"/>  <input type="text" striped className="inputSearch" placeholder="What service you looking for"/>
            <span ><img src={filter}width="30px"/></span> <button className="nav-button ">search</button>
        </Col>
    </Row>
    <Row striped className="w-100 mx-0">
        <Col md={3}></Col>
        <Col striped className="padding-link  mb-5 ms-5"> 
        <a href="#">Barber</a>
        <a href="#">Laser Hair</a>
        <a href="#">Tattoo Removal</a>
        
        </Col>
    </Row>
</Container>
    </div> );
}
 
export default HeaderSec;