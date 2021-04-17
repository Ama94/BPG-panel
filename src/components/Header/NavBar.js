import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, NavLink, Navbar} from "react-bootstrap";
import React from "react";
import Header from "./Header";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg App-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="App-nav">
                        <NavLink href={'/'}>Start</NavLink>
                        <NavLink href={'/news'}>Aktualności</NavLink>
                        <NavLink href={'/about'}>O&nbsp;firmie</NavLink>
                        <NavLink href={'/offer'}>Oferta</NavLink>
                        <NavLink href={'/rodo'}>Rodo</NavLink>
                        <NavLink className={"last-link"} href={'/contact'}>Kontakt</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;