import {Breadcrumb, Button} from "antd";
import {Route} from "react-router-dom";
import NewsList from "../../Lists/NewsList";
import NewsForm from "../../Forms/NewsForm";
import React from "react";
import RODO from "../../RODO/RODO";


class PanelRodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <div>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Rodo</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{marginBottom: 16}}>
                         <Button key="list-loadmore-new" href="/panel/news/add">Edytuj</Button>
                </div>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <RODO/>
                </div>
            </div>
        );
    }
}

export default PanelRodo;