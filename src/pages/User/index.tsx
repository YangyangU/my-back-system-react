import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Card, Table, Popconfirm, Modal } from 'antd';
import type { TableColumnsType } from 'antd';
import './index.css';
import { getUser } from '@/api';
import { formItems } from './data';
import FormItem from '@/components/FormItem';

const User: React.FC = () => {
    const [form] = Form.useForm();
    const [userList, setUserList] = useState<userType[]>([] as userType[]);
    const handleClick = (type: string, rowData?: userType) => () => {
        switch (type) {
            case 'add':
                console.log('点击了新增按钮', rowData);
                showModal();
                break;
            case 'edit':
                console.log('点击了编辑按钮', rowData);
                showModal();
                break;
            case 'delete':
                console.log('点击了删除按钮', rowData);
                break;
            default:
                break;
        }
    };
    const handleFinish = (e: { keyword: string }) => {
        getUser(e.keyword).then(({ list }) => {
            setUserList(list);
        });
    };

    const columns: TableColumnsType = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: (val) => {
                return val == 1 ? '男' : '女';
            },
            key: 'sex',
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
            key: 'birth',
        },
        {
            title: '地址',
            dataIndex: 'addr',
            key: 'addr',
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div>
                        <Button
                            type="primary"
                            style={{ marginRight: '5px' }}
                            onClick={handleClick('edit', rowData)}
                        >
                            编辑
                        </Button>
                        <Popconfirm
                            title="提示"
                            description="确定删除吗？"
                            onConfirm={handleClick('delete', rowData)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary" danger>
                                删除
                            </Button>
                        </Popconfirm>
                    </div>
                );
            },
            key: 'action',
        },
    ];

    useEffect(() => {
        getUser('').then(({ list }) => {
            setUserList(list);
        });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="user">
            <div className="flex-box">
                <Button type="primary" onClick={handleClick('add')}>
                    +新增
                </Button>
                <Form layout="inline" onFinish={handleFinish}>
                    <Form.Item name="keyword">
                        <Input placeholder="请输入用户名"></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Modal
                title="新增用户"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    labelAlign="left"
                    form={form}
                >
                    {formItems.map((item) => (
                        <FormItem key={item.name} item={item} />
                    ))}
                </Form>
            </Modal>
            <Card>
                <Table dataSource={userList} columns={columns}></Table>
            </Card>
        </div>
    );
};

export default User;
