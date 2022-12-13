import React from 'react';
import Typewriter from 'typewriter-effect';
import Logo from './assets/abi_updated_logo.png';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Introduction = () => {
    return (
        <BrowserRouter>
            <div className='container-fluid' id="intro_box">
                <div id="intro_navbar">
                    <img src={Logo} alt="abi_logo" />
                    <div className="" id="navbar">
                        <Link className='nav_link' to="#contribution">Contribution</Link>
                        <Link className='nav_link' to="#learnings">Learnings</Link>
                        <Link className='nav_link' to="#imporvement">Imrovement</Link>
                        <Link className='nav_link' to="#considerMe">Consider me</Link>
                        <Link className='nav_link' to="#archive">Archive</Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <p className='text-center' style={{ fontSize: "5rem" }} id="intro_my_name">Anas Siddiqui</p>
                    <p className='text-center' style={{ fontSize: "3rem" }}>Digital Solution - PWA R&M Intern</p>
                </div>
                <div id="intro_works">
                    <div id="intro_card_box">
                        <div className="intro_cards">
                            <p>5+</p>
                            <p>Code Reviews</p>
                        </div>
                        <div className="intro_cards">
                            <p>10+</p>
                            <p>Change Requests</p>
                        </div>
                        <div className="intro_cards">
                            <p>10+</p>
                            <p>Issues Resolved</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p id="cheers">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 200,
                                strings: ["# future with more cheers."]
                            }}
                        />
                    </p>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Introduction;