import React from 'react';
import archive1 from './assets/archive1.png';
import archive2 from './assets/archive2.png';
const Timeline = () => {
    return (
        <div>
            <div className="timeline">
                <div className="outer">
                    <div className="timeline_card" >
                        <div className="info">
                            <h3 className="title" data-aos="fade-left">From <span>Supriya</span></h3>
                            <img src={archive1} alt="" data-aos="fade-left" />
                        </div>
                    </div>
                    <div className="timeline_card">
                        <div className="info">
                            <h3 className="title" data-aos="fade-right">From <span>Anuja</span></h3>
                            <img src={archive2} alt="" data-aos="fade-right" />
                        </div>
                    </div>
                    {/* <div class="timeline_card">
                        <div class="info">
                            <h3 class="title">Title 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div> */}
                    {/* <div class="timeline_card">
                        <div class="info">
                            <h3 class="title">Title 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div> */}
                    {/* <div class="timeline_card">
                        <div class="info">
                            <h3 class="title">Title 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Timeline;