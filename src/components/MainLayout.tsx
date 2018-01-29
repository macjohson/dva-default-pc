import React from 'react';
import { connect } from 'dva';
import { Layout,Menu,Dropdown } from 'antd';
import "../assets/style.less";
import { UserHead } from '../assets/svg';

const { Sider, Content, Header } = Layout;
const {Item} = Menu;

class MainLayout extends React.PureComponent<any,any> {
    constructor(props) {
        super(props);
    }

    menu = (
        <Menu>
            <Item key="changePwd">
                <a><i className="iconfont icon-biaoshilei_yuechi" />  修改密码</a>
            </Item>
            <Item key="logout">
                <a><i className="iconfont icon-zhuxiaologout10" /> 注销登录</a>
            </Item>
        </Menu>
    )

    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Header className={"header"}>
                    <div className="box">
                        logo
                    </div>
                    <div className="box">
                    <Dropdown overlay={this.menu} trigger={['click']}>
                    <span style={{cursor:"pointer"}}><i className="iconfont icon-guanliyuan" /> 小明 </span>
                    </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        <div className="userInfo"></div>
                    </Sider>
                    <Layout>
                        <Content className="mainContent">
                            <div className="contentInner">
                                {this.props.innerContent}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default connect()(MainLayout)