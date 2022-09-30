import React from 'react';
import SideBar from './SideBar/SideBar';
import Search from "./Search/Search";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <Search />
        </div>
    )
};

export default Header ;