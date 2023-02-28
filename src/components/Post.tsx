import React, { FC } from 'react';
import { IPost } from '../interfaces/Post.interface';

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
    return (
        <>
            <div>{post.user.login}</div>
            <div>{post.title}</div>
            <div>{post.text}</div>
            <div>{post.createdAt}</div>
        </>
    );
};

export default Post;
