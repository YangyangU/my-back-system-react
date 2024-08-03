import React from 'react';
import { Layout, theme } from 'antd';
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
const { Content } = Layout;

const View: React.FC = () => {
    const collapsed = useSelector((state: RootState) => state.tab.isCollapse);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="main-container">
            <Aside collapsed={collapsed}></Aside>
            <Layout>
                <Header collapsed={collapsed}></Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default View;
