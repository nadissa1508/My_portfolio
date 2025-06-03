import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-content'>
                <div className="social-links">
                    <a href="https://github.com/nadissa1508" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
                    <a href="https://gt.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
                    <a href="mailto:nadissalopez2016@gmail.com" className="footer-link"><FaEnvelope /></a>
                </div>
                <p>Powered by React and a lot of coffee</p>
                <p>&copy; 2025 Angie Nadissa Vela López. All rights reserved.</p>
                </div>
        </div>
    );
}

export default Footer;
