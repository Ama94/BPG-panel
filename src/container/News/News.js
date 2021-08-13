import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CardNews from "../../components/CardNews/CardNews";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";


class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://bpg-s.pl/bpg-api/api/news/read.php")
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
                    <Title title={"Aktualności"}></Title>
                    <Row className="justify-content-md-center">
                        {items.map(item => (
                            <CardNews title={item.title} description={item.description} date={item.date} image={item.image} id={item.id}></CardNews>
                        ))}
                    </Row>
                    <Row className="justify-content-md-center">
                        <Pagination></Pagination>
                    </Row>
                </Container>

            )
        }
    }
}

export default News;