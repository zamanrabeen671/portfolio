import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const brandStyle = {
        fontSize: '40px',
        textDecoration: 'none'
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <Link style={brandStyle}>R</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn-danger"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link active brand-color nav-style"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link brand-color nav-style" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link brand-color nav-style" to="/work">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link brand-color nav-style" href="#article-area">Blog</a>
                                {/* <Link className="nav-link brand-color nav-style" to="#article-area">Blog</Link> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link brand-color nav-style" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://drive.google.com/uc?export=download&amp;id=1KtQdYp5jR7ZGcB92uJoEA4Xc1KAnPC1B" className="btn btn-outline-info">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;