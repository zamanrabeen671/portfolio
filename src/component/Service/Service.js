import React from 'react';
import code from '../../image/code.png';
import blog from '../../image/blog.svg';
import travel from '../../image/travel.svg';

const Service = () => {
    
    return (
        <div className="container">
            <div className="row mt-5 mb-5 brand-color text-center">
                <div className="col-md-4">
                    <div className="article-div">
                        <img src={code} style={{ width: '150px', height: '100px' }} className="img-fluid" alt="" />
                        <div style={{ margin: '10px 0' }}>
                            <h4>Web Development</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="article-div">
                        <img src={blog} style={{ width: '150px', height: '100px' }} className="img-fluid" alt="" />
                        <div style={{ margin: '10px 0' }}>
                            <h4>Blogging</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="article-div">
                        <img src={travel} style={{ width: '150px', height: '100px' }} className="img-fluid" alt="" />
                        <div style={{ margin: '10px 0' }}>
                            <h4>Travelling</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;