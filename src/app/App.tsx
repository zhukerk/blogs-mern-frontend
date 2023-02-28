import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import AuthProvider from '../hoc/AuthProvider';
import { router } from './AppRouter';
import { setupStore } from '../store';

import './App.css';

const store = setupStore();

const App: FC = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </Provider>
    );
};

export default App;
