import React from 'react';
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
                                <p>{s.percent1}%</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${s.percent1}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent1}%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name2}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center ">
                                <p>{s.percent2}%</p>
                            </div>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${s.percent2}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent2}%</div>
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
                                <p>{s.percent3}%</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${s.percent3}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent3}%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name4}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center ">
                                <p>{s.percent4}%</p>
                            </div>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${s.percent4}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent4}%</div>
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
                                <p>{s.percent5}%</p>
                            </div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: `${s.percent5}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent5}%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='row box-content'>
                        <div className="col-10">
                            <h3>{s.name6}</h3>
                        </div>
                        <div className="col-2">
                            <div className="percent-box d-flex justify-content-center ">
                                <p>{s.percent6}%</p>
                            </div>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${s.percent6}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{s.percent6}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;