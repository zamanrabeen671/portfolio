import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid mt-5 pt-5 footer-container">
            <div className="row brand-color footer-div d-flex align-items-center">
                <div className="col-md-4 mt-3">
                    <p>Stay Connected With Love</p>
                    <div>
                        <a className="icon-style" href="https://www.facebook.com/rabeen.static.671.io/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className= "icon-container" /></a>
                        <a className="icon-style" href="https://www.linkedin.com/in/zaman-671-static/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className= "icon-container" /></a>
                        <a className="icon-style" href="https://www.instagram.com/zaman_rabeen/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className= "icon-container" /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <p style={{  }}> Star & Fork</p>
                        <a className="icon-style" href="https://github.com/zamanrabeen671" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="icon-container" /></a>
                        <p>By Me</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;