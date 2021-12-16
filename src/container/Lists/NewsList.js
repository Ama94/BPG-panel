import {List, Avatar, Space, Button} from 'antd';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
import React from "react";
import {Link} from "react-router-dom";
import CardNews from "../../components/CardNews/CardNews";

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    state = {
        collapsed: false,
    };

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
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={items}
                    renderItem={item => (
                        <List.Item>
                        <CardNews title={item.title} description={item.description} date={item.date} image={item.image} id={item.id}>

                        </CardNews>
                        <Button  key="list-loadmore-edit" href="/test2/news/edit">
                             edytuj
                        </Button>
                        <Button key="list-loadmore-remove" href="">usuń</Button>
                        </List.Item>
                    )}
            />
        );
        }
    };
}

export default NewsList;