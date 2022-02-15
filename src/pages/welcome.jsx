import { Outlet, Route, Routes } from 'react-router-dom';
import NewUser from './../components/NewUser';

const Welcome = () => {
    return (
        <div>
            <Outlet />
            <h1>Welcome</h1>
            <Routes>
                <Route path="new-user" element={<NewUser />} />
            </Routes>
        </div>
    );
}

export default Welcome;