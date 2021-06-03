// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from './components/Header/Header.js';
// import Footer from "./components/Footer/Footer";
// import Home from "./container/home/home";
// import News from "./container/News/News";
// import Contact from "./container/contact/Contact";
// import RODO from "./container/RODO/RODO";
// import About from "./container/About Company/About";
// import Offer from "./container/offer/Offer";
// import SingleNews from "./container/SingleNews/SingleNews";
// import PanelLogin from "./container/Panel-Login/Panel-Login";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//     return (
//         <div>
//             {/*<Header></Header>*/}
//             <Router>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/news" component={News}/>
//             <Route exact path="/news/test" component={SingleNews} />
//             <Route exact path="/contact" component={Contact} />
//             <Route exact path="/rodo" component={RODO} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/offer" component={Offer} />
//             <Route exact path="/test" component={PanelLogin}/>
//             </Router>
//             {/*<Footer></Footer>*/}
//         </div>
//     )

// }


'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

// export default App;
