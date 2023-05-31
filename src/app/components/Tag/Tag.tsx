import {JSX} from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';
import {TagProps} from '@/app/components/Tag/Tag.props';

export const Tag = ({size = 's', color = 'ghost', href, children, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size === 's',
            [styles.medium]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.gray]: color === 'gray',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary'
        })}
             {...props}>{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }
        </div>
    );
};