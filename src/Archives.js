import React from 'react';
import archive1 from './assets/archive1.png';
import archive2 from './assets/archive2.png';

const Archives = () => {
    return (
        <div>
            <p className='my_heading'>Some <span>Archives</span></p>
            <div className="container">
                <div className="row archive_img">
                    <div className="col-md-6 ">
                        <img src={archive1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src={archive2} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Archives;