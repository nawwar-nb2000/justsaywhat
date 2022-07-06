import{ Row , Col ,Container}  from "react-bootstrap";

import send from "../img/send button.svg"
import Formbg from "../img/formbg.png"
const FAQ = () => {
    return ( 
        <div>
            <Container fluid striped className="mx-0 px-0">
<h1 className="ms-5 mb-3">Frequently Asked Questions</h1>
                <Row className="w-100">
                    <Col md={5} sm={12} className="ms-2">
<div className="FAQ-left-side">
    <p >What the First Step of the Dream Apartment buying process ?</p>
    First, you need to know how much you can borrow, knowing how much
    home you can afford narrows down online apartment searching to
    suitable Properties , thus no time is Wasted  considering apartment
    that are not within your dream and budget
    <p className="icon-FAQ"> Micon </p></div>
<div className="FAQ-left-side">What the First Step of the Dream Apartment buying process ?
<p className="icon-FAQ"> Micon </p></div>
<div className="FAQ-left-side">
What the First Step of the Dream Apartment buying process ?
</div>
<div className="FAQ-left-side">
What the First Step of the Dream Apartment buying process ?

</div>
<div className="FAQ-left-side">
What the First Step of the Dream Apartment buying process ?
</div>
<div className="FAQ-left-side">
What the First Step of the Dream Apartment buying process ?
</div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div striped className="FAQ-right-side">
                            <p>feel free to contact  us</p>

                        <form action="">
                            <label htmlFor="input1">Your name :</label>
                            <input type="text" id="input1"
                            placeholder="Enter your name"
                            className="inputstyle"/>
                            <label htmlFor="input2">Your Email :</label>
                            <input type="text" id="input2"
                            placeholder="Enter your Email"
                            className="inputstyle"/>
                            <label htmlFor="input3">Subject :</label>
                            <input type="text"id="input3"
                            className="inputstyle"/>
                            <label htmlFor="input4"> Your Message</label>
                            <textarea cols="30" rows="4" id="input4"
                            className="textarea-style my-3"></textarea>
                            <br/>
                            <br/>
                            <button className="form-submit-button">
                            <img src={send} style={{width:"100%"}}/>
                            </button>

                            <img src={Formbg}  className="imageee"/>
                        </form>

                        </div>
                    </Col>
                </Row>
       


            </Container>

        </div>
     );
}
 
export default FAQ;