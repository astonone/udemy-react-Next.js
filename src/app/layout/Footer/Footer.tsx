import {JSX} from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import {FooterProps} from '@/app/layout/Footer/Footer.props';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                TopApp © {format(new Date(), 'yyyy')} All rights reserved
            </div>
            <a href='#' target='_blank'>User Agreement</a>
            <a href='#' target='_blank'>Privacy Policy</a>
        </footer>
    );
};