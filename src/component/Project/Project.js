import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const workingProject = [
    {
        id: 1,
        img: 'https://i.ibb.co/7rS07zg/Screenshot-2021-05-01-133006.jpg',
        name: 'GOGO Travel',
        description: 'A Single page web app where client can book their events and checkout their information. Admin can add a new Events and can admin another people',
        github:'https://github.com/zamanrabeen671/GOGO-Travel-client',
        liveSite: 'https://gogo-travels.web.app/',
        tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Bootstrap', 'Stripe.js'],
    },
    {
        id: 2,
        img: 'https://i.ibb.co/4sF2R5Y/Screenshot-2021-05-01-133123.jpg',
        name: ' Smart Shopping',
        description: 'A Single page web app where client can buy their product and checkout information. Admin can add a new Product',
        github:'https://github.com/zamanrabeen671/smart-shopping-client',
        liveSite: 'https://smart-shopping-671.firebaseapp.com/',
        tools: ['React.js ','Node.js' ,'Express.js' ,'MongoDB', 'Firebase', 'Bootstrap']
    },
    {
        id: 3,
        img: 'https://i.ibb.co/CHLLHzk/Screenshot-2021-05-01-133218.jpg',
        name: 'Take A Trip',
        description: 'A Single page web app where client can book their events and checkout their information. Admin can add a new Events and can admin another people',
        github: 'https://github.com/zamanrabeen671/Take-A-Trip',
        liveSite: 'https://take-a-trip-671.web.app/',
        tools: ['React.js', 'React Router', 'Firebase', 'Bootstrap', 'Google Map']
    },
]
const Project = () => {
    return (
        <div className="container">
            <h3 className="brand-style">Some of <span className="brand-color">My Projects</span></h3>
            <div className="mt-5">
                {
                    workingProject.map(projects => <ProjectDetails projects = {projects}></ProjectDetails>)
                }
            </div>
        </div>
    );
};

export default Project;