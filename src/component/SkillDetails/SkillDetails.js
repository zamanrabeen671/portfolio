import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skillDetails.css'
const SkillDetails = ({ s }) => {
    console.log(s);
    return (
        <div className="mt-5 pb-5 brand-color">
            <div className="row main-box">
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name1}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent1} text={`${s.percent1}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name2}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent2} text={`${s.percent2}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second box */}
            <div className="row main-box">
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name3}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent3} text={`${s.percent3}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name4}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent4} text={`${s.percent4}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* third box */}
            <div className="row main-box">
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name5}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent5} text={`${s.percent5}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name6}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center">
                                <div>
                                    <CircularProgressbar value={s.percent6} text={`${s.percent6}%`}
                                        styles={buildStyles({
                                            width: 200, height: 80, pathColor: `orange`,
                                            textColor: '#F1C40F',
                                            trailColor: 'black',

                                        })} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;