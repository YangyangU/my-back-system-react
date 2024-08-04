import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'antd';
import './index.css';
import userImg from '@/assets/images/avatar.jpg';
import { getData } from '@/api';
import { columns, countData } from './data';
import { icon2Element } from '@/utils/icon';
import Echarts from '@/components/Echarts';

const Home: React.FC = () => {
    const [tableData, setTableData] = React.useState<tableType[]>([]);
    const [echartsData, setEchartsData] = React.useState<dataType>(
        {} as dataType,
    );

    useEffect(() => {
        getData().then(({ data }) => {
            console.log(data);
            const { tableData, orderData, userData, videoData } = data;
            setTableData(tableData as tableType[]);
            //获取折线图数据
            const order = orderData;
            const xData = order.date;
            if (!order.data) return;
            const keyArray = Object.keys(order.data[0]);
            const series: seriesType[] = [] as unknown as seriesType[];
            keyArray.forEach((key) => {
                if (!order.data) return;
                series.push({
                    name: key,
                    data: order.data.map((item) => item[key]),
                    type: 'line',
                });
            });
            setEchartsData({
                data: {
                    orderData: {
                        xData,
                        series,
                    },
                    tableData: {
                        xData: userData?.map((item) => item.date),
                        series: [
                            {
                                name: '新增用户',
                                data: userData?.map((item) => item.new),
                                type: 'bar',
                            },
                            {
                                name: '活跃用户',
                                data: userData?.map((item) => item.active),
                                type: 'bar',
                            },
                        ],
                    },
                    videoData: {
                        series: [
                            {
                                data: videoData as number[],
                                type: 'pie',
                            },
                        ],
                    },
                },
            });
        });
    }, []);
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
                <Card>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                        rowKey={(record) => record.name as string}
                    ></Table>
                </Card>
            </Col>
            <Col span={16}>
                <div className="num">
                    {countData.map((item, index) => (
                        <Card key={index}>
                            <div
                                className="icon-box"
                                style={{ backgroundColor: item.color }}
                            >
                                {icon2Element(item.icon)}
                            </div>
                            <div className="detail">
                                <p className="num">￥{item.value}</p>
                                <p className="txt">{item.name}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                {echartsData.data?.orderData && (
                    <Echarts
                        chartData={echartsData.data.orderData as ChartData}
                        style={{ height: '280px' }}
                    ></Echarts>
                )}
                <div className="graph">
                    {echartsData.data?.userData && (
                        <Echarts
                            chartData={
                                echartsData.data
                                    .userData as unknown as ChartData
                            }
                            style={{ height: '240px', width: '50%' }}
                        ></Echarts>
                    )}
                    {echartsData.data?.videoData && (
                        <Echarts
                            chartData={
                                echartsData.data
                                    .videoData as unknown as ChartData
                            }
                            style={{ height: '240px', width: '50%' }}
                        ></Echarts>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default Home;
