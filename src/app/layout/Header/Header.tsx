import {JSX} from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import {HeaderProps} from '@/app/layout/Header/Header.props';

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};