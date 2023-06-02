import React from 'react';
import styles from './HTag.module.css';
import cn from 'classnames';
import {HTagProps} from './HTag.props';

export const HTag = ({tag, children, className, ...props}: HTagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>;
        default:
            return <></>;
    }
};