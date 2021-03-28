import logo from './logo.png';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Col, Image} from "react-bootstrap";

class Logo extends React.Component{
    render() {
        return (
            <Col className={'mt-2 ml-2 mb-2'}>
                <Image className="App-logo" src={logo} alt="logo"/>
            </Col>
        )
    }
}

export default Logo;