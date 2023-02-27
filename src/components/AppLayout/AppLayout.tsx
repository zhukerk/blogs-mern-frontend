import { Button, Menu, Modal } from 'antd';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useState } from 'react';
import { Outlet, To, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../pages/LoginForm';

import classes from './AppLayout.module.css';

const AppLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const openLoginModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const menuItemClickHandler = (to: To) => {
        navigate(to);
    };

    const menuItems: ItemType[] = [
        { label: 'Home', key: '/', onClick: () => menuItemClickHandler('/') },
        { label: 'About', key: '/about', onClick: () => menuItemClickHandler('/about') },
        { label: 'Posts', key: '/posts', onClick: () => menuItemClickHandler('/posts') },
    ];

    return (
        <Layout>
            <Header className={classes.header}>
                <Menu theme="dark" mode="horizontal" items={menuItems} defaultSelectedKeys={[location.pathname]} />
                {user ? (
                    <Button className={classes.button}>asdasd</Button>
                ) : (
                    <Button onClick={openLoginModal} className={classes.button}>
                        Login
                    </Button>
                )}
            </Header>

            <Content className={classes.content}>
                <Outlet />
            </Content>

            <Modal title="Login" open={isModalOpen} onCancel={handleCancel} footer={[]}>
                <LoginForm />
            </Modal>
        </Layout>
    );
};

export default AppLayout;
