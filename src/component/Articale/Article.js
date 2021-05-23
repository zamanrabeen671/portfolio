import React from 'react';
import ArticaleDetails from '../ArticaleDetails/ArticaleDetails';
import js from '../../image/download (3).png';
import prog from '../../image/11-Top-Programming-Trends-To-Look-For-In-20172.jpg';
import react from '../../image/download (1).png';
const blogspots = [
    {
        id: 1,
        title: 'JavaScript core concept',
        description: "JavaScript is a dynamic programming language that's used for web development,It allows you to implement dynamic features on web pages",
        goLink: 'JavaScript core concept',
        img: js,
        blog: 'https://mdzamanrabin.medium.com/javascript-behind-the-scene-a2a8f03aec66',
    },
    {
        id: 2,
        title: 'Introduce with Programming',
        description: 'Simply describe what is programming. Why we should learn programming and how to learn programming in Bangla',
        goLink: 'Learn Programming' ,
        img: prog,
        blog: 'https://bdtechfarm.blogspot.com/2018/12/introduction-to-programming.html',
    },
    {
        id: 3,
        title: 'Simple Introduce to React.js',
        description: 'React is library that use to create awesome user interface. React is use to create single page application',
        goLink: 'introduce with React JS',
        img: react,
        blog: 'https://mdzamanrabin.medium.com/introduce-to-react-js-fd560d39c6d2' 
    }

]
const Article = () => {
    return (
        <div className="container mt-5" id="article-area">
            <h2 className="mt-5 brand-style">Some of <span className="brand-color">my articles</span></h2>
            <div className="row mt-5">
                {
                    blogspots.map(blog => <ArticaleDetails blog = {blog} key = {blog.id}></ArticaleDetails>)
                }
            </div>
        </div>
    );
};

export default Article;