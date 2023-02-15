import React from "react";
// import "../../App.css"
import "../Layout/Content.css"
import { Button, Container } from "semantic-ui-react";
import videoBg from "../../assets/videoBg.mp4";
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <Container className="Button">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="btnarea">
          <div className="btn1" >
          <Link className="rmlinkprop" to={'/product'}><Button className="button1 ">Product Demonstration</Button></Link>
          </div>
          <div  className="btn2">
          <Link className="rmlinkprop" to={'/features'}><Button className="button2">Features</Button></Link>
          </div>
           <div className="btn3">
           <Link className="rmlinkprop" to={'/techdetails'}><Button className="button3">Technical Details</Button></Link>
           </div>
          <div className="btn4">
          <Link className="rmlinkprop" to={'/support'}> <Button className="button4">Support</Button></Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
