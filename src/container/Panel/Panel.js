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
import SingleNews from "../SingleNews/SingleNews";
import PanelAbout from "./About/PanelAbout";
import PanelOffer from "./Offer/PanelOffer";
import PanelRodo from "./Rodo/PanelRodo";
import PanelContact from "./Contact/PanelContact";

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
                                <Link to="/panel" />
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined/>}>
                                Aktualności
                                <Link to="/panel/news" />
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ReadOutlined/>}>
                                O firmie
                                <Link to="/panel/about" />
                            </Menu.Item>
                            <Menu.Item key="4" icon={<ProjectOutlined/>}>
                                Oferta
                                <Link to="/panel/offer" />
                            </Menu.Item>
                            <Menu.Item key="5" icon={<LockOutlined/>}>
                                Rodo
                                <Link to="/panel/rodo" />
                            </Menu.Item>
                            <Menu.Item key="6" icon={<ContactsOutlined/>}>
                                Kontakt
                                <Link to="/panel/contact" />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                                <Route exact path="/panel/" component={Button} />
                                <Route exact path="/panel/news" component={PanelNews} />
                                <Route exact path="/panel/about" component={PanelAbout} />
                                <Route exact path="/panel/offer" component={PanelOffer} />
                                <Route exact path="/panel/rodo" component={PanelRodo} />
                                <Route exact path="/panel/contact" component={PanelContact} />
                                <Route exact path="/panel/news/add" component={NewsForm} />
                                <Route exact path="/panel/news/edit" component={NewsForm} />
                                <Route exact path="/single_news/" component={SingleNews} />
                        </Content>
                        <Footer style={{textAlign: 'center'}}>BPG-S Sp. Z.O.O. ©2021</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Panel;