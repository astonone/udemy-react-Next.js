import React from 'react';
import styles from './SideBar.module.css';
import cn from 'classnames';
import {SideBarProps} from "./SideBar.props";

export const SideBar = ({...props}: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            SideBar
        </div>
    );
};