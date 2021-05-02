import React from 'react';
import './projectDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetails = (props) => {
    const { name, img, description, id, tools, github, liveSite } = props.projects;
    return (
        <section>
            <div className="card-style brand-color">
                <div className="row">
                    <div className="col-md-7">
                        <img src={img} style={{ width: '550px', height: '290px' }} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="box-style">
                            <p><small>0{id}</small></p>
                            <h4>{name}</h4>
                            <p>{description}</p>

                            <div>
                                {tools.map(tool => <button className="btn btn-secondary disabled btn-margin"> {tool} </button>)}
                            </div>


                            <a className="icon-style" href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="icon-style" href={liveSite} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faShareSquare} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;