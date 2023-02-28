import { FC, useEffect } from 'react';
import Post from '../components/Post';
import Loader from '../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/slices/posts';

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const { posts, isLoading, error } = useAppSelector((state) => state.postsReducer);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <h1>{error}</h1>}
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
