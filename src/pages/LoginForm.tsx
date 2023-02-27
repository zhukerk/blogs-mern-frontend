import React, { FC } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm: FC = () => {
    const { signIn } = useAuth();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const user = form.userName.value;

        signIn(user);
    };

    return (
        <div>
            Login Form
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="userName" />
                    <button type="submit">Login</button>
                </label>
            </form>
        </div>
    );
};

export default LoginForm;
