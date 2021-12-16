import "./Panel.css"
import {Layout, Menu, Breadcrumb, Button, Form, Upload} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UploadOutlined,
    InboxOutlined,
    HomeOutlined,
    ContactsOutlined,
    ReadOutlined,
    ProjectOutlined,
    LockOutlined
} from '@ant-design/icons';
import React from "react";
import 'suneditor/dist/css/suneditor.min.css';
import NewsForm from "../Forms/NewsForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewsList from "../Lists/NewsList";
import PanelNews from "./News/PanelNews";
import Logo from "../../components/Header/Logo";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<HomeOutlined/>}>
                                Home
                                <Link to="/test2" />
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined/>}>
                                Aktualności
                                <Link to="/test2/news" />
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ReadOutlined/>}>
                                O firmie
                                <Link to="/test2/about" />
                            </Menu.Item>
                            <Menu.Item key="4" icon={<ProjectOutlined/>}>
                                Oferta
                                <Link to="/test2/offer" />
                            </Menu.Item>
                            <Menu.Item key="5" icon={<LockOutlined/>}>
                                Rodo
                                <Link to="/test2/rodo" />
                            </Menu.Item>
                            <Menu.Item key="6" icon={<ContactsOutlined/>}>
                                Kontakt
                                <Link to="/test2/contact" />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                                <Route exact path="/test2/" component={Button} />
                                <Route exact path="/test2/news" component={PanelNews} />
                                <Route exact path="/test2/news/edit" component={NewsForm} />
                        </Content>
                        <Footer style={{textAlign: 'center'}}>BPG-S Sp. Z.O.O. ©2021</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Panel;