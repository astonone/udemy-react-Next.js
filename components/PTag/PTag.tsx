import React from 'react';
import styles from './PTag.module.css';
import cn from 'classnames';
import {PTagProps} from './PTag.props';

export const PTag = ({size = 'm', children, className, ...props}: PTagProps): JSX.Element => {
    return (
        <p className={cn(styles.ptag, className, {
            [styles.small]: size === 's',
            [styles.medium]: size === 'm',
            [styles.large]: size === 'l'
        })}
           {...props}>
            {children}
        </p>
    );
};