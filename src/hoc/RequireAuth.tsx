import { FC, ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface IProps {
    children: ReactElement;
}

const RequireAuth: FC<IProps> = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default RequireAuth;
