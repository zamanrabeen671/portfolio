import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SkillsInfo from '../../fakedata/SkillsInfo';
import SkillDetails from '../SkillDetails/SkillDetails';
import './Skill.css'
const Skill = () => {
    const [ability, setAbility] = useState([]);
    const [selectSkillType, setSelectSkillType] = useState('web');
    useEffect(() => {
        console.log(SkillsInfo)
        setAbility(SkillsInfo);
    }, [])

    const selectedSkill = ability.filter(profession => profession.type === selectSkillType);

    console.log(selectedSkill);
    return (
        <section className="skill-area">
            <div className="container">
                <h3 className="brand-color">My <span className="brand-style">Skills</span> Set</h3>
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectSkillType("web")} className="nav-item">
                            <Link  className={selectSkillType === "web" ? "active nav-link" : "nav-link brand-color nav-style"}>WEB</Link>
                        </li>
                        <li onClick={() => setSelectSkillType("programming")} className="nav-item">
                            <Link  className={selectSkillType === "programming" ? "active nav-link" : "nav-link brand-color nav-style"}>PROGRAMMING</Link>
                        </li>
                        <li onClick={() => setSelectSkillType("tools")} className="nav-item">
                            <Link  className={selectSkillType === "tools" ? "active nav-link" : "nav-link brand-color nav-style"}>TOOLS</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container mt-5">
                    {
                        selectedSkill.map(s => <SkillDetails s={s} key={s.id}></SkillDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Skill;