import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <p>Powered by React, CSS, JavaScript, and a lot of coffee</p>
            <div className="social-links">
                <a href="https://github.com/nadissa1508" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
                <a href="https://gt.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
                <a href="mailto:nadissalopez2016@gmail.com" className="footer-link"><FaEnvelope /></a>
            </div>
            <p>&copy; 2025 Angie Nadissa Vela López. All rights reserved.</p>
        </div>
    );
}

export default Footer;
