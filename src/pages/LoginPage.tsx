import React, { FC } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    if (user) {
        return <Navigate to={fromPage} replace={true}/>;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const user = form.userName.value;

        signIn(user, () => navigate(fromPage, { replace: true }));
    };

    return (
        <div>
            Login page{fromPage}
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="userName" />
                    <button type="submit">Login</button>
                </label>
            </form>
        </div>
    );
};

export default LoginPage;
