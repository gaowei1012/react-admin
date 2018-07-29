import React from 'react'
import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane;

export default class NewTabs extends React.Component {

    handleCallback = (key) => {
        message.info('加载成功提示框', + key);
    }

    componentDidMount() {
        const pages = [
            {
                title: 'tab 1',
                contnet: 'tan 1',
                key: '1'
            },
            {
                title: 'tab 2',
                contnet: 'tan 2',
                key: '2'
            },
            {
                title: 'tab 3',
                contnet: 'tan 3',
                key: '3'
            }
        ];

        this.setState({
            activeKey: pages[0].key,
            pages
        });
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    // 添加tabs标签
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    // 删除标签
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }


    render() {
        return (
            <div>
                <Card title='tabs页签'>
                    <Tabs defaultActiveKey='1' onChenge={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <Card title='带Iocn的tabs标签'>
                    <Tabs defaultActiveKey='1' onChenge={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" /></span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="minus" /></span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="close" /></span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab={<span><Icon type="check" /></span>} key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <Card title='可动态添加或删除的tabs页签'>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.pages.map((pagel) => {
                                return <TabPane
                                    tab={pagel.title}
                                    key={pagel.key}
                                >
                                    {pagel.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
