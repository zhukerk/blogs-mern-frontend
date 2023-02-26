import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TParams = 'postId';

const SinglePostPage: FC = () => {
    const { postId } = useParams<TParams>();

    return <div>SinglePostPage {postId}</div>;
};

export default SinglePostPage;
