import './SubTitle.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";


class SubTitle extends React.Component {
    render() {
        return (
            <h2 className="subtitle mt-2 mb-2">{this.props.title}</h2>
        )
    }
}

export default SubTitle;