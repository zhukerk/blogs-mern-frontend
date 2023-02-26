import { createContext, FC, ReactElement, SetStateAction, useState } from 'react';

interface IAuthContext {
    user: any;
    signIn: Function;
    signOut: Function;
}

interface IProps {
    children: ReactElement;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    signIn: () => {},
    signOut: () => {},
});

export const AuthProvider: FC<IProps> = (props: IProps) => {
    const [user, setUser] = useState(null);

    // todo: fix newUser type
    const signIn = (newUser: SetStateAction<null>, cb: () => void) => {
        setUser(newUser);
        cb();
    };

    const signOut = (cb: () => void) => {
        setUser(null);
        cb();
    };

    const value = { user, signIn, signOut };

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
