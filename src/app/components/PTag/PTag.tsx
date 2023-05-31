import {JSX} from 'react';
import {PTagProps} from '@/app/components/PTag/PTag.props';
import styles from './PTag.module.css';
import cn from 'classnames';

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