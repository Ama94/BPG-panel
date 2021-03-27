import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.js';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <div>
        //             <Container>
        //                 <Col className={'lg-6'}>
        //                     <Image className="App-logo" src={logo} alt="logo"/>
        //                 </Col>
        //             </Container>
        //         </div>
        //         <div className="App-nav">
        //                 <Container>
        //                     <Navbar expand="lg ml-4 App-navbar">
        //                         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //                         <Navbar.Collapse id="basic-navbar-nav">
        //                             <Nav className="App-nav">
        //                                 <NavLink href={'#'}>Start</NavLink>
        //                                 <NavLink href={'#'}>Aktualności</NavLink>
        //                                 <NavLink href={'#'}>O firmie</NavLink>
        //                                 <NavLink href={'#'}>Oferta</NavLink>
        //                                 <NavLink href={'#'}>Rodo</NavLink>
        //                                 <NavLink className={"last-link"} href={'#'}>Kontakt</NavLink>
        //                             </Nav>
        //                         </Navbar.Collapse>
        //                     </Navbar>
        //                 </Container>
        //         </div>
        //     </header>
        // </div>
        <div>
            <Header></Header>
            <Footer></Footer>
        </div>
    )

}

export default App;
