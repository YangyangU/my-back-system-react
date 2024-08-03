import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Home from '@/pages/home';
import Mall from '@/pages/Mall';
import User from '@/pages/User';

const routes = [
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
            {
                path: 'other',
                children: [
                    {
                        path: 'other1',
                        element: <div>other1</div>,
                    },
                    {
                        path: 'other2',
                        element: <div>other2</div>,
                    },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routes as RouteObject[]);

export default router;
