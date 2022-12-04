import React from 'react';
import archive1 from './assets/archive1.png';
import archive2 from './assets/archive2.png';
const Timeline = () => {
    return (
        <div>
            <div class="timeline">
                <div class="outer">
                    <div class="timeline_card">
                        <div class="info">
                            <h3 class="title">From <span>Supriya</span></h3>
                            <img src={archive1} alt="" />
                        </div>
                    </div>
                    <div class="timeline_card">
                        <div class="info">
                            <h3 class="title">From <span>Anuja</span></h3>
                            <img src={archive2} alt="" />
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