import React from 'react';
import Styles from './Footer.module.scss';

const getDate = new Date();
export default function Footer() {
    return (
        <footer className={Styles.footer}>
            &copy; Copyright {getDate.getFullYear()} | Tous droits réservés |
        </footer>
    );
}
