import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const Auth = (props: PropsWithChildren) => {
    const { meta } = props;

    if (meta && meta.title) {
        document.title = meta.title;
    }

    const token = localStorage.getItem('my-back-token');

    if (meta && meta.needLogin && !token) {
        return <Navigate to="/login" replace></Navigate>;
    }

    return props.children;
};

export default Auth;
