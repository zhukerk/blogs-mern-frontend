import { FC, useEffect } from 'react';

import Post from '../../components/Post/Post';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/slices/posts';

import classes from './HomePage.module.css';

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const { posts, isLoading, error } = useAppSelector((state) => state.postsReducer);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className={classes.content}>
            {isLoading && <Loader />}
            {error && <h1>{error}</h1>}
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
