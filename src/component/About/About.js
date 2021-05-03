import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import img from '../../image/my-bg.png';
import Footer from '../Footer/Footer';

const About = () => {
    const skillSet = ['JavaScript', 'ES6', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Rest API', 'vs code', 'problem solving', 'C', 'C++', 'Python', 'Firebase', 'netlify', 'heroku', 'Code Blocks', 'PyCharm'];
    const comfortSkill = ['JavaScript', 'ES6', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'firebase'];
    const additional = ['Competitive Programming', 'Project Show', 'Arduino']
    return (

        <section>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} style={{ width: '300px' }} className="img-fluid" alt="" />
                        <div className="brand-color mt-5">
                            <h3><small className="brand-style">I'm</small> Kamruzzaman Rabeen</h3>
                            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. My Core Skill is based on JavaScript and i love to do most the things using JavaScript. I love to make the web more open to the world.I am available for any kind of job or intern opportunity that suits my interests.</p>
                        </div>

                        <div className="brand-color mt-5">
                            <h3>Personal Information</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <p><span className="brand-style">Address</span>:  28,Green Corner, Green Road-Dhanmondi-Dhaka-1205</p>
                                    <p><span className="brand-style">Contact</span>: +880-1644461370</p>
                                    <p><span className="brand-style">Nationality</span>: Bangladeshi</p>
                                    <p><span className="brand-style">Language</span>: Bangla & English</p>

                                </div>
                                <div className="col-md-6">
                                    <p><span className="brand-style">Email</span>: mdzamanrabin@gmail.com</p>
                                    <p><span className="brand-style">linkedIn</span>: https://www.linkedin.com/in/zaman-671-static/</p>
                                    <p><span className="brand-style">Github</span>: https://github.com/zamanrabeen671</p>
                                </div>

                                <div className="col-4">
                                <a href="https://drive.google.com/uc?export=download&amp;id=1KtQdYp5jR7ZGcB92uJoEA4Xc1KAnPC1B" className="btn btn-primary btn-resume">Download Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 brand-color">
                        <h3 className="mt-5 brand-style">My Skills Set</h3>
                        {
                            skillSet.map(ability => <button className="btn btn-secondary disabled btn-style">{ability}</button>)
                        }
                        <h3 className="mt-5 brand-style">Comfortable At Work</h3>
                        {
                            comfortSkill.map(ability => <button className="btn btn-secondary disabled btn-style">{ability}</button>)
                        }
                        <h3 className="mt-5 brand-style">Educational Qualification</h3>
                        <div style={{ color: 'orange' }}>
                            <p>Dhaka Polytechnic Institute- <small style={{ color: 'gray' }}>Diploma-in-Engineering</small></p>
                            <small style={{ color: 'gray' }}>June 2017 - *</small>
                            <p>Department of computer Technology</p>
                            <p>Semester- 6th</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default About;