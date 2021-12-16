import "./NewsForm.css"
import {Layout, Menu, Breadcrumb, Button, Form, Upload} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined, UploadOutlined, InboxOutlined
} from '@ant-design/icons';
import React from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {Input} from 'antd';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    state = {
        collapsed: false,
    };

    handleChange1 = (event) => {
        this.setState({["description"]: event});
    }

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://bpg-s.pl/bpg-api/api/news/read.php', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        const {collapsed} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Tytuł</h4>
                <Form.Item>
                    <Input type="text" value={this.state.value} name="name" onChange={this.handleChange}></Input>
                </Form.Item>
                <Form.Item>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                </Form.Item>
                <h4>Opis</h4>
                <Form.Item>
                    <SunEditor value={this.state.value} name="name" onChange={this.handleChange1} height="400px"/>
                </Form.Item>
                <Form.Item>
                    {/*<Button type="primary" htmlType="submit"/>*/}
                    <input type="submit" value="Submit"/>
                </Form.Item>
            </form>
        );
    }
}

export default NewsForm;