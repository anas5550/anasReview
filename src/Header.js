import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import Logo from './assets/ABI_logo.png'
import Carousel from 'nuka-carousel'
const Header = () => {
    return (
        <div>
            <div className="col-md-12" id="header_brand">
                <div><p id="my_name">Anas Siddiqui</p></div>
                <img src={Logo} style={{ height: "60px" }} />
            </div>

            <Carousel autoplay={true} wrapAround={true} renderCenterLeftControls={({ previousSlide }) => (
                null
            )}
                renderCenterRightControls={({ nextSlide }) => (
                    null
                )}>
                <img src={img7} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img5} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img6} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img2} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img3} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img4} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
                <img src={img5} style={{ width: "100vw", height: "100vh", objectFit: "fill" }} />
            </Carousel>
        </div>
    );
};

export default Header;