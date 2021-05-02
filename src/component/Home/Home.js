import React from 'react';
import Article from '../Articale/Article';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Header></Header>
            <Skill></Skill>
            <Project></Project>
            <Article></Article>
            <Footer></Footer>
        </div>
    );
};

export default Home;