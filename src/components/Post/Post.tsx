import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import { IPost } from '../../interfaces/Post.interface';

import classes from './Post.module.css';

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
    return (
        <Card className={classes.card}>
            <Meta title={post.title} description={post.text} />
            <div className={classes.author}>Author: {post.user.login}</div>
            <div className={classes.created}>Create: {post.createdAt.split('T')[0]}</div>
            <ul>
                {post.tags.map((tag) => (
                    <li>
                        <NavLink to='/posts'>
                            {tag}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default Post;
