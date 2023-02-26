import { FC, ReactNode } from 'react';
import { NavLink, To } from 'react-router-dom';

interface IClassNameProps {
    isActive: boolean;
    isPending: boolean;
}

interface IProps {
    children: ReactNode;
    to: To;
}

const setActive = (props: IClassNameProps): string => (props.isActive ? 'active-link' : '');

const CustomLink: FC<IProps> = ({ children, to }) => {
    return (
        <NavLink className={setActive} to={to}>
            {children}
        </NavLink>
    );
};

export default CustomLink;
