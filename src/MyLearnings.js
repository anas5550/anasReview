import React from 'react';
import { FaRocket, FaToolbox, FaGitSquare, FaAward } from 'react-icons/fa';
import { AiFillHtml5, AiOutlineConsoleSql, AiFillQuestionCircle, AiFillSmile } from 'react-icons/ai';
import { SiCsswizardry, SiJavascript, SiBootstrap, SiPostman, SiVisualstudio, SiAzuredevops } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { GiDatabase, GiTeamIdea } from 'react-icons/gi';
import { BiTime } from 'react-icons/bi';



const MyLearnings = () => {
    return (

        <div className='mb-5'>
            <p className="my_heading">My <span>Learnings</span> at AB InBev</p>
            <div className="container">
                <div className="row">
                    <div className="learnings_content">
                        <div>
                            <h3><FaRocket /> Technologies</h3>
                        </div>

                        <div>
                            <div className='d-flex inner_learnings'>
                                <ul>
                                    <li><GrReactjs /> React.js</li>
                                    <li><IoLogoNodejs /> Node.js</li>
                                    <li><AiOutlineConsoleSql /> SQL</li>
                                </ul>
                                <ul>
                                    <li><AiFillHtml5 /> HTML</li>
                                    <li><SiCsswizardry /> CSS</li>
                                    <li><SiJavascript /> JavaScript</li>
                                    <li><SiBootstrap /> Material UI,Bootstrap  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="learnings_content">
                        <div>
                            <h3> <FaToolbox /> Tools</h3>
                        </div>
                        <div>
                            <div className='d-flex inner_learnings'>
                                <ul>
                                    <li><SiPostman /> Postman</li>
                                    <li><SiVisualstudio /> Visual Studio Code</li>
                                    <li><FaGitSquare /> Git</li>
                                </ul>
                                <ul>
                                    <li><SiAzuredevops /> Microsoft Azure</li>
                                    <li><GiDatabase /> SSMS <span style={{ fontSize: "9px" }}>(SQL Server Management Studio)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="learnings_content">
                        <div>
                            <h3><FaAward /> Interpersonal Skills</h3>
                        </div>

                        <div>
                            <div className='d-flex inner_learnings' >
                                <ul>
                                    <li><AiFillQuestionCircle /> Problem Solving</li>
                                    <li><GiTeamIdea /> Team Player & Contributor</li>
                                </ul>
                                <ul id="time_management_ul">
                                    <li><BiTime /> Time management</li>
                                    <li><AiFillSmile /> Pressure Handling</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyLearnings;