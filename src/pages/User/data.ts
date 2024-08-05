export type FormItemType = {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    rules: Array<RulesType>;
    options?: Array<{ label: number | string; value: number | string }>;
    format?: string;
};
interface RulesType {
    required?: boolean;
    message: string;
    type?: string;
}

export const formItems: FormItemType[] = [
    {
        label: '姓名',
        name: 'name',
        type: 'input',
        placeholder: '请输入姓名',
        rules: [{ required: true, message: '请输入用户名' }],
    },
    {
        label: '年龄',
        name: 'age',
        type: 'input',
        placeholder: '请输入年龄',
        rules: [
            { required: true, message: '请输入年龄' },
            { type: 'number', message: '请输入数字' },
        ],
    },
    {
        label: '性别',
        name: 'sex',
        type: 'radio',
        placeholder: '请选择性别',
        rules: [{ required: true, message: '请选择性别' }],
        options: [
            { label: '男', value: 1 },
            { label: '女', value: 0 },
        ],
    },
    {
        label: '出生日期',
        name: 'birth',
        type: 'date',
        placeholder: '请选择生日',
        rules: [{ required: true, message: '请选择生日' }],
        format: 'yyyy-MM-dd',
    },
    {
        label: '地址',
        name: 'addr',
        type: 'select',
        placeholder: '请选择地址',
        rules: [{ required: true, message: '请输入地址' }],
    },
];
