import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.js';
import Footer from "./components/Footer/Footer";
import 'antd/dist/antd.css';
import Home from "./container/home/home";
import News from "./container/News/News";
import Contact from "./container/contact/Contact";
import RODO from "./container/RODO/RODO";
import About from "./container/About Company/About";
import Offer from "./container/offer/Offer";
import Panel from "./container/Panel/Panel"
import SingleNews from "./container/SingleNews/SingleNews";
import PanelLogin from "./container/Panel-Login/Panel-Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            {/*<Header></Header>*/}
            <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News}/>
            <Route exact path="/single_news/" component={SingleNews} />
            <Route path="/contact" component={Contact} />
            <Route path="/rodo" component={RODO} />
            <Route path="/about" component={About} />
            <Route path="/offer" component={Offer} />
            <Route path="/login" component={PanelLogin}/>
            <Route path="/panel" component={Panel}/>
            </Router>
            {/*<Footer></Footer>*/}
        </div>
    )

}

export default App;
