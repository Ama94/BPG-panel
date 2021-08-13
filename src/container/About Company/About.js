import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import React from "react";
import {Container} from "react-bootstrap";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://bpg-s.pl/bpg-api/api/about/read.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <Container id="podstrona">
                    <h1 className="title mt-4">O firmie</h1>
                    <p className='top about'><img src={"http://bpg-s.pl/" + items[0].image} alt='' align={"right"}/>
                        {items[0].description}
                    </p>
                </Container>

            )
        }
    }
}

export default About;