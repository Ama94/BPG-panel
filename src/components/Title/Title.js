import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";


class Title extends React.Component {
    render() {
        return (
            <h1 className="title mt-2 mb-2">{this.props.title}</h1>
        )
    }
}

export default Title;