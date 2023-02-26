import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const EditPostPage: FC = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            Edit post page
            <button onClick={() => signOut(() => navigate('/', { replace: true }))}>log out</button>
        </div>
    );
};

export default EditPostPage;
