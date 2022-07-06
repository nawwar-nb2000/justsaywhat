import{ Row , Col ,Container}  from "react-bootstrap";
import Gr from "../img/Group.svg"
const MoSec = () => {
    return ( 
        <div>

<Container fluid>
<Row>

<img src={Gr}/>

</Row>


<div className="button-container">
    <button className="button-Let">signup as Service Provider</button>
</div>
</Container>

        </div>
     );
}
 
export default MoSec;