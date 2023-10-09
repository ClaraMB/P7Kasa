import React from 'react';
import logo from "../assets/LOGO.png"
import '../styles/footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="kasa-logo-footer" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
    );
}

export default Footer;