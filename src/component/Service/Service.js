import React from 'react';
import code from '../../image/code.png';
import blog from '../../image/blog.svg';
import travel from '../../image/travel.svg';

const Service = () => {
    return (
        <div className="container">
            <h3 className="brand-style">My Service</h3>
            <div className="row mt-5 brand-color">
                <div className="col-md-4">
                    <img src={code} style={{ width: '200px', height: '200px' }} className="img-fluid" alt="" />
                    <div>
                        <h4>Web Development</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, sequi.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={blog} style={{ width: '200px', height: '200px' }} className="img-fluid" alt="" />
                    <div>
                        <h4>Blogging</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, sequi.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={travel} style={{ width: '200px', height: '200px'}} className="img-fluid" alt="" />
                    <div>
                        <h4>Travelling</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, sequi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;