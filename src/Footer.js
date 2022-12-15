import React from 'react';
import { FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { BsGithub, BsWhatsapp } from "react-icons/bs";


const Footer = () => {
    return (
        <div id="footer">
            <div>
                <a href="https://www.linkedin.com/in/anas91612/" target="_blank">
                    <FaLinkedin className='footer_icon' />
                </a>

                <a href="https://www.github.com/anas5550" target="_blank">
                    <BsGithub className='footer_icon' />
                </a>

                <a href="tel:8127775550">
                    <FaMobileAlt className='footer_icon' />
                </a>

            </div>

            <p>Designed and Developed with ❤️ by <span>Anas Siddiqui</span></p>
        </div >
    );
};

export default Footer;