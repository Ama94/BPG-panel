import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.js';
import Footer from "./components/Footer/Footer";
import Home from "./containter/home/Home";

function App() {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    )

}

export default App;
