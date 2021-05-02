import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import img from '../../image/my-bg.png';
import Footer from '../Footer/Footer';

const About = () => {
    const skillSet = ['JavaScript', 'ES6', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Rest API', 'vs code', 'C', 'C++', 'Python', 'Firebase','netlify', 'heroku','Code Blocks', 'PyCharm'];
    const comfortSkill = ['JavaScript', 'ES6', 'React.js','Node.js', 'Express.js', 'MongoDB', 'Bootstrap','firebase'];
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
                    </div>
                    <div className="col-md-6 brand-color">
                        <h3 className="mt-5">My Skills Set</h3>
                        {
                            skillSet.map(ability => <button className="btn btn-secondary disabled btn-style">{ability}</button>)
                        }
                        <h3 className="mt-5">Comfortable At Work</h3>
                        {
                            comfortSkill.map(ability => <button className="btn btn-secondary disabled btn-style">{ability}</button>)
                        }
                        <h3 className="mt-5">Additional Skill</h3>
                        {
                            additional.map(ability => <button className="btn btn-secondary disabled btn-style">{ability}</button>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default About;