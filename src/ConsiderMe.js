import React from 'react';
import idea_img from './assets/idea.png';
import problem_solving from './assets/problem_solving.png';
import upskilling from './assets/upskilling.png';
import team_player from './assets/team_player.png';


const ConsiderMe = () => {
    return (
        <div id="considerMe_box">
            <p className='my_heading' data-aos="fade-up">Why <span style={{ fontSize: "3rem", color: "black" }}>?</span> You Should <span style={{ color: "white" }}>Consider me</span></p>
            {/* <div className="row">
                <div className="col-md-3">
                    <div className="card consider_card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Curiosity</h5>
                            <p className="card-text">I am a Curious person, who is always ready to take on new challenges.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card consider_card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Problem Solver</h5>
                            <p className="card-text">I am a good problem solver who can provide efficient solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card consider_card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Upskilling</h5>
                            <p className="card-text">My greatest strength is to keep upskilling and learning so that I can add value to the organization</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card consider_card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Team Player</h5>
                            <p className="card-text">I am an excellent team player. </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div style={{ marginTop: "-20px" }}>
                <div className="row1-container">
                    <div className="box box-down cyan" data-aos="fade-right">
                        <h2>Curiosity</h2>
                        <p>I am a Curious person, who is always ready to take on new challenges.</p>
                        <img src={idea_img} alt="" />
                    </div>

                    <div className="box red" data-aos="fade-down">
                        <h2>Problem Solver</h2>
                        <p>I am a good problem solver who can provide efficient solutions.</p>
                        <img src={problem_solving} alt="" />
                    </div>

                    <div className="box box-down blue" data-aos="fade-left">
                        <h2>Creative</h2>
                        <p>I am a creative person who can think out of the box to create something new.</p>
                        <img src={upskilling} alt="" />
                    </div>
                </div>
                <div className="row2-container">
                    <div className="box orange" data-aos="fade-up">
                        <h2>Team Player</h2>
                        <p>I am an excellent team player.</p>
                        <img src={team_player} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConsiderMe;