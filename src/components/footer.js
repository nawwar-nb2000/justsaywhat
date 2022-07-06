import { Col, Container, Row } from "react-bootstrap"
import FB from "../img/facebook.svg"
import TW from "../img/twitter.svg"
import IN from "../img/insta.svg"
import Path from "../img/Path1531.svg"
import JSW from "../img/Justsaywhat.svg"
import Google from "../img/googleplay.svg"
import AppStore from "../img/applestore.svg"
import Mock from "../img/Mockup2.png"
const Footer = () => {
    return ( 
        <div className="footer">
          <div  className="relative-position">  
            <Row striped className="mx-0 px-0">
                <Col md={5} sm={6} xs={12}>    
                
            <Container>
                <div className="second-section-start">
                Manage Your Aintentance On The Go With Our Self-Service
                 Mobile App  
                </div>
                <Row striped className="main-button-style-na">
                    <Col md={12} lg={6} xs={6}>
                    <div className="google-AppStore">
                        <img src={Google} style={{width:"100%"}}/>   
                    </div>
                    </Col>
                    <Col md={12} lg={6} xs={6}>
                    <div className="google-AppStore">
                        <img src={AppStore} style={{width:"100%"}}/>
                    </div>
                    </Col>
                </Row>
            </Container>
            </Col>
            <Col md={2} sm={1}/>
            <Col md={5} sm={6} xs={12}>
                <div className="MObilEImageSeC me-0  px-0">
                    <img src={Mock} style={{width:"70%"}}/>
                </div>
            </Col>


        </Row>        
         {/* <div className="befor-footer-image">
            <img src={Path} style={{width:"100%"}}/> */}


            <Row striped className="footerBackgroundFI w-100" >
                <br/>
                <Col md={6} xs={12}>
                    <div className="text-styling-footerFF">
                        Want to get 20% off? <br/>
                        Save the time and money?
                    </div>
                </Col>
                
                <Col md={6} xs={12}>
                    
                        <button striped className="btnSF">
                            More Services
                        </button>
                </Col>
            </Row>
            
            {/* </div>*/}
       </div>
            
            
            <Container fluid >
                <Row striped className="BackgroundFooter">
            
                    <Col md={4} sm={8} xs={12}>
                        <br/>
                        <div className="footer-JSW">
                            <img src={JSW} style={{width:"100%"}}/>
                        </div>
                        <div className="H6TexT">
                            <h6>the most beautiful exclusive</h6>
                            <h6>and luxury apartment</h6>
                        </div>
                        <p><h2>
                        FOLLOW US
                        </h2></p>

                        <div className="iconSIDE">
                            <img src={FB}/>
                            <img src={TW}/>
                            <img src={IN}/>
                        </div>

                    </Col>
                    
                    <Col md={2} sm={4} xs={4} striped className="secondCOLfotter">
                        <br/>
                    <h4>Useful Links</h4>
                    <ul>
                        <li>About</li>
                        <li>Partners</li>
                        <li>Contact</li></ul>    
                    </Col> 
                    <Col md={3} sm={5} xs={4}>
                    <div>
                        <br/>

                    <h4>FOR CUSTOMER</h4>
                    <br/>
                    <p>sign Up As Customer</p>
                    <p>Find Service Provider</p>
                   
                    </div>    
                    </Col> 
                    <Col md={3} sm={5} xs={4} striped className="px-0">
                    <h5>FOR SERVICE PROVIDERS</h5>
                    <br/>
                    <p>Sign Up As Service Providers</p>
                    <p>Find your Customer</p>

                    </Col> 
                </Row>
                <div className="last-section ">
                    
                        <Row>
                        <Col md={6} xs={12} className="px-0" striped style={{backgroundColor:"#0B2F50"}}>
                        <h6>
                        Copyright © 2022 JustSayWhat. All Rights Reserved
                        </h6>
                        </Col>
                        <Col md={6} xs={12} striped className="ps-5"  style={{backgroundColor:"#0B2F50"}}>
                        Terms & Condition    |   Privacy Policy
                        </Col>

                        </Row>
                        
                </div>

            </Container>
        </div>
     );
}
 
export default Footer;