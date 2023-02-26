import { FC } from 'react';
import {RouterProvider} from 'react-router-dom';

import AuthProvider from '../hoc/AuthProvider';
import {router} from './AppRouter';

import './App.css';

const App: FC = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;
