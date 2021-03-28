import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.js';
import Footer from "./components/Footer/Footer";
import Home from "./container/home/home";
import Contact from "./container/contact/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Header></Header>
            <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            </Router>
            {/*<Home></Home>*/}
            <Footer></Footer>
        </div>
    )

}

export default App;
