import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
    return (
        <>
            <div>NotFound Page</div>
            <Link to={'/'}>Go Home</Link>
        </>
    );
};

export default NotFoundPage;
