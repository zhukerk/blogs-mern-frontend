import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginForm from '../pages/LoginForm';
import PostsPage from '../pages/PostsPage';
import NotFoundPage from '../pages/NotFoundPage';
import SinglePostPage from '../pages/SinglePostPage';
import AppLayout from '../components/AppLayout/AppLayout';
import EditPostPage from '../pages/EditPostPage';
import RequireAuth from '../hoc/RequireAuth';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:postId" element={<SinglePostPage />} />
            <Route
                path="posts/:postId/edit"
                element={
                    <RequireAuth>
                        <EditPostPage />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);
