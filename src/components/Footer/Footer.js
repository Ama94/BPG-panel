import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import React from "react";
import Logo from "../Header/Logo";

class Footer extends React.Component{
    render() {
        return (
            <footer className={"App-Footer"}>
                <div>
                    <Container>
                        test
                    </Container>
                </div>
            </footer>
        )
    }
}

export default Footer;