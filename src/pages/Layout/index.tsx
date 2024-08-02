import React from 'react';
import { Layout, theme } from 'antd';
import Aside from '@/components/Aside';
import Header from '@/components/Header';

const { Content } = Layout;

const View: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="main-container">
            <Aside></Aside>
            <Layout>
                <Header></Header>
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
