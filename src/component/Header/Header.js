import React from 'react';
import './Header.css';
import img from '../../image/my-bg.png';
import TextAnimation from 'react-animate-text';
import ParticleBackground from '../../Particles/ParticleBackground';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="mt-5 pb-5 container">
            <div>
                <div className="particle-area mb-5">
                    <ParticleBackground></ParticleBackground>
                </div>
            </div>
            <div className="header-area">
                <div className="row brand-color">
                    <div className="col-md-6">
                        <div className="mt-5 mb-5">
                            <TextAnimation>
                                <p><small className="brand-style">Hello , I'm</small></p>
                                <h3>Kamruzzaman Rabeen</h3>
                                <p className="brand-style">
                                    <span className="circle"> o </span>
                                 Web Developer
                                <span className="circle"> o </span>
                                 programmer
                             </p>
                            </TextAnimation>

                            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. My Core Skill is based on JavaScript and i love to do most the things using JavaScript. I love to make the web more open to the world.I am available for any kind of job or intern opportunity that suits my interests. </p>

                            <Link to="/about" className="btn btn-success">About Me </Link>  <Link to="/contact" className="btn btn-outline-success">Get In Touch</Link>

                        </div>
                    </div>
                    <div className="col-md-5 ms-auto">
                        <img src={img} style={{ width: '400px', height: "350px" }} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Header;