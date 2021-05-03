import React, { useEffect, useState } from 'react';
import working from '../../fakedata/projectInfo'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import WorkingDetails from '../WorkingDetails/WorkingDetails';
const Work = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        setProject(working);
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <h3 className="brand-style mb-5 mt-5">Some of <span className="brand-color">My Project</span>
                </h3>
                <div className="row">
                    {
                        project.map(projects => <WorkingDetails projects={projects} key={projects.id}></WorkingDetails>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Work;