import React from 'react';
import * as Icon from '@ant-design/icons';

export const icon2Element: (icon: string) => React.ReactNode = (
    icon: string,
) => {
    const Component = Icon[icon as keyof typeof Icon] as React.ElementType;
    return React.createElement(Component);
};
