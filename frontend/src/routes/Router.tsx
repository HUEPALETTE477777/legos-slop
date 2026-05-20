import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/Home';
import JoinPage from '../pages/JoinPage';
import Swag from '../pages/Swag';
import Statistics from '../pages/Statistics';

export const routesConfig = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'join',
                element: <JoinPage />,
            },
            {
                path: 'swag',
                element: <Swag />
            },
            {
                path: 'statistics',
                element: <Statistics />
            }
        ],
    },
];


export const bRouter = createBrowserRouter(routesConfig);
