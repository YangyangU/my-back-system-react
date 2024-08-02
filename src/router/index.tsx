import { RouteObject, createHashRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Mall from '../pages/Mall';
import User from '../pages/User';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'mall',
                element: <Mall />,
            },
            {
                path: 'user',
                element: <User />,
            },
        ],
    },
];

export const router = createHashRouter(routes);
