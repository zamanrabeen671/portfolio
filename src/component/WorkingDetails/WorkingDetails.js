import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './workingDetails.css';
const WorkingDetails = (props) => {
    const { img, name, description, github, liveSite, tools } = props.projects;
    return (
        <div className="col-md-4 brand-color box-container" >
            <img src={img} style={{ width: '100%' ,height: '200px'}} className="img-fluid" alt="" />
            <div className="box-style">
                <h3>{name}</h3>
                <p>{description}</p>
                {
                    tools.map(ability => <button className="btn btn-secondary disabled btn-margin">{ability}</button>)
                }
                <div>
                    <a className="icon-style" href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="icon-style" href={liveSite} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faShareSquare} /></a>
                </div>
            </div>

        </div>
    );
};

export default WorkingDetails;