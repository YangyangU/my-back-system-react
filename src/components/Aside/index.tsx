import { Layout, Menu } from 'antd';
import React from 'react';
import { menuList } from '@/api/menu';
import { icon2Element } from '@/utils/icon';
import { To, useNavigate } from 'react-router-dom';
import type { AppDispatch } from '@/store';
import { setTagList, setCurrentTab } from '@/store/reducers/tabs';
import { useDispatch } from 'react-redux';
import { flattenMenuList } from '@/utils/tab';

type MenuItemType = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItemType[];
};

const items: MenuItemType[] = menuList.map((item) => {
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

const View: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const selectMenu = (e: { key: To; keyPath: To[] }) => {
        const tabs = flattenMenuList(menuList);
        navigate(e.key);
        tabs.map((item) => {
            if (e.key === item.path) {
                dispatch(
                    setCurrentTab({
                        path: item.path,
                        label: item.label,
                        name: item.name as string,
                    }),
                );
                dispatch(
                    setTagList({
                        path: item.path,
                        label: item.label,
                        name: item.name as string,
                    }),
                );
            }
        });
    };

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <h3 className="app-name">{collapsed ? '后台' : '后台管理系统'}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/home']}
                items={items}
                style={{
                    height: '100%',
                }}
                onClick={selectMenu}
            />
        </Layout.Sider>
    );
};

export default View;
