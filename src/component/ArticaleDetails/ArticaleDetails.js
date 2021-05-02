import React from 'react';
import './ArticleDiv.css'
const ArticaleDetails = (props) => {
    const {title, description, goLink, blog} = props.blog;
    return (
        <section className="col-md-4">
                <div className="brand-color article-div">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={blog} target="_blank"  rel="noreferrer" className="btn btn-success">{goLink}</a>
                </div>
        </section>
    );
};

export default ArticaleDetails;