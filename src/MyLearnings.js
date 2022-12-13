import React from 'react';
import { FaRocket, FaToolbox, FaGitSquare, FaAward } from 'react-icons/fa';
import { AiFillHtml5, AiOutlineConsoleSql, AiFillQuestionCircle, AiFillSmile } from 'react-icons/ai';
import { SiCsswizardry, SiJavascript, SiBootstrap, SiPostman, SiVisualstudio, SiAzuredevops } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { GiDatabase, GiTeamIdea } from 'react-icons/gi';
import { BiTime } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';


const MyLearnings = () => {
    return (

        <div className='mb-5' id="learnings">
            <p className="my_heading" data-aos="fade-up" >My <span className='d-inline-block'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: ["Learnings"]
                    }}
                />
            </span> at AB InBev</p>
            <div className="container">
                <div className="row" style={{ marginTop: "40px" }}>
                    <h3 data-aos="fade-up" className='text-center'><FaRocket /> Technologies</h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className='learning_card'>
                            <p><GrReactjs /></p>
                            <p> React.js</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><IoLogoNodejs /></p>
                            <p>Node.js</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card2'>
                            <p><AiOutlineConsoleSql /></p>
                            <p>SQL</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card2'>
                            <p><AiFillHtml5 /></p>
                            <p>HTML</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card2'>
                            <p><SiCsswizardry /></p>
                            <p>CSS</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><SiJavascript /></p>
                            <p>JavaScript</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><SiBootstrap /></p>
                            <p>Material UI, Bootstrap </p>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <h3 data-aos="fade-up" className='text-center' style={{ marginTop: "40px" }}><FaToolbox /> Tools</h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className='learning_card'>
                            <p><SiPostman /></p>
                            <p>Postman</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><SiVisualstudio /></p>
                            <p>Visual Studio Code</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card2'>
                            <p><FaGitSquare /></p>
                            <p>Git</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><SiAzuredevops /></p>
                            <p>Microsoft Azure</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card2'>
                            <p><GiDatabase /></p>
                            <p>SSMS</p>
                        </div>
                    </div>

                </div>

                <div className="row" >
                    <h3 data-aos="fade-up" className='text-center' style={{ marginTop: "40px" }}><FaAward /> Interpersonal Skills</h3>
                    <div className="myLearnings_inner">
                        <div data-aos="fade-up" className='learning_card'>
                            <p><AiFillQuestionCircle /></p>
                            <p>Problem Solving</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><GiTeamIdea /></p>
                            <p>Team Player & Contributor</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><BiTime /></p>
                            <p>Time management</p>
                        </div>
                        <div data-aos="fade-up" className='learning_card'>
                            <p><AiFillSmile /></p>
                            <p>Pressure Handling</p>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default MyLearnings;