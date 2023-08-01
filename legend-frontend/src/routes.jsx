import { createBrowserRouter } from 'react-router-dom';
import Layout from './compontents/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';

const router = createBrowserRouter([{
    element: <Layout />,
    path: '/',
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'products',
            element: <Products/>
        }
    ]
}]);

export default router