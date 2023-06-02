import {Component, FunctionComponent, JSX} from 'react';
import styles from './Layout.module.css';
import cn from 'classnames';
import {LayoutProps} from '@/app/layout/Layout.props';
import {Header} from '@/app/layout/Header/Header';
import {SideBar} from '@/app/layout/SideBar/SideBar';
import {Footer} from '@/app/layout/Footer/Footer';

const Layout = ({children, ...props}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <SideBar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};