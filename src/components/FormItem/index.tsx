import React from 'react';
import { Form, Input, Select, DatePicker, Radio } from 'antd';
import { Rule } from 'antd/lib/form';
import { FormItemType } from '@/pages/User/data';

const View: React.FC<{ item: FormItemType }> = ({ item }) => {
    const renderFormItem = () => {
        switch (item.type) {
            case 'input':
                return <Input placeholder={item.placeholder} />;
            case 'select':
                return (
                    <Select placeholder={item.placeholder}>
                        {item.options?.map((option) => (
                            <Select.Option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </Select.Option>
                        ))}
                    </Select>
                );
            case 'radio':
                return (
                    <Radio.Group>
                        {item.options?.map((option) => (
                            <Radio key={option.value} value={option.value}>
                                {option.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                );
            case 'date':
                return (
                    <DatePicker
                        placeholder={item.placeholder}
                        format={item.format}
                    />
                );
            default:
                return null;
        }
    };
    return (
        <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules as Rule[]}
        >
            {renderFormItem()}
        </Form.Item>
    );
};

export default View;
