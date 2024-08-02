import { Layout, Menu } from 'antd';
import React from 'react';
import MenuConfig from '@/api/menu';
import * as Icon from '@ant-design/icons';

const icon2Element: (icon: string) => React.ReactNode = (icon: string) => {
    const Component = Icon[icon as keyof typeof Icon] as React.ElementType;
    return React.createElement(Component);
};

type MenuItemType = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
};

const items: MenuItemType[] = MenuConfig.map((item) => {
    const child: MenuItemType = {
        key: item.path,
        icon: icon2Element(item.icon),
        label: item.label,
    };
    if (item.children) {
        child.children = item.children.map((childItem) => {
            return {
                key: childItem.path,
                label: childItem.label,
            };
        });
    }
    return child;
});

const View = () => {
    return (
        <Layout.Sider trigger={null} collapsible>
            <h3 className="app-name">后台管理系统</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '100%',
                }}
            />
        </Layout.Sider>
    );
};

export default View;
