import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetail from '../pages/NewsDetail/NewsDetail';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);




export default router;