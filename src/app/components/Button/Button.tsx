import styles from './Button.module.css';
import {ButtonProps} from '@/app/components/Button/Button.props';
import cn from 'classnames';

export const Button = ({appearance, children}: ButtonProps) => {
    return(
        <button className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}>
            {children}
        </button>
    );
};