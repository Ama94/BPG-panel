import {Breadcrumb, Button} from "antd";
import React from "react";
import About from "../../About Company/About";
import Contact from "../../contact/Contact";


class PanelContact extends React.Component {
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
                    <Breadcrumb.Item>Kontakt</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{marginBottom: 16}}>
                    <Button key="list-loadmore-new" href="/panel/about/edit">Edytuj</Button>
                </div>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <Contact/>
                </div>
            </div>
        );
    }
}

export default PanelContact;