import React from 'react';
import { TiMessages } from 'react-icons/ti';
import { BiTime } from 'react-icons/bi';
import { AiOutlineBulb } from 'react-icons/ai';
import beer_img from "./assets/beer_img.png";

const Improvement = () => {
    return (
        <div>
            <div className="container mb-4" id="improvement_box">
                <p className='my_heading'>Where I Need To <span>Improve</span></p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card improvement_card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><TiMessages /></h5>
                                <p className="card-text">Improve on my communication skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card improvement_card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><AiOutlineBulb /></h5>
                                <p className="card-text">Advanced Concepts of React.js, Node.js, and SQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card improvement_card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><BiTime /></h5>
                                <p className="card-text">Time management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="beer_img">
                <img src={beer_img} alt="" />
            </div>

        </div>
    );
};

export default Improvement;