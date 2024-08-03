import React from 'react';
import { Row, Col, Card } from 'antd';
import './index.css';
import userImg from '@/assets/images/avatar.jpg';

const Home = () => {
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <div className="userinfo">
                            <p className="name">Admin</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p className="login-time">
                            上次登录时间：<span>2024-6-1</span>
                        </p>
                        <p className="login-ip">
                            上次登录地点：<span>北京</span>
                        </p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default Home;
