import React from 'react';
import { Tag, Space } from 'antd';
import './index.css';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';

const View: React.FC = () => {
    const tagList = useSelector((state: RootState) => state.tab.tagList);
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
    };
    return (
        <Space className="common-tag" size={[0, 8]}>
            {tagList.map((item: TagType) => {
                return (
                    <Tag color="#55acee" closeIcon onClose={handleClose}>
                        {item.label}
                    </Tag>
                );
            })}
        </Space>
    );
};

export default View;
