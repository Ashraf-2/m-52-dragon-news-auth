import { Outlet } from 'react-router-dom';
import Login from '../pages/Login/Login';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            {/* <Login></Login> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;