import React from 'react';
import ArticaleDetails from '../ArticaleDetails/ArticaleDetails';

const blogspots = [
    {
        id: 1,
        title: 'Simple Introduce to React.js',
        description: 'React is library that use to create awesome user interface. React is use to create single page application',
        goLink: 'React.js',
    },
    {
        id: 2,
        title: 'Introduce with Programming',
        description: 'Simply describe what is programming. Why we should learn programming and how to learn programming in Bangla',
        goLink: 'Learn Programming' ,
        blog: 'https://bdtechfarm.blogspot.com/2018/12/introduction-to-programming.html',
    },
    {
        id: 3,
        title: 'Simple Introduce to React.js',
        description: 'React is library that use to create awesome user interface. React is use to create single page application',
        goLink: 'React.js' 
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