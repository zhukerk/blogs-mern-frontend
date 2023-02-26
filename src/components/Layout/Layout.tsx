import { Outlet } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </header>

            <Outlet />

            <footer>footer</footer>
        </>
    );
};

export default Layout;
