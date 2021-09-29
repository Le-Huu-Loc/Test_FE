import React from 'react';
import banner from '../../images/main-banner.png'
import banner2x from '../../images/main-banner@2x.png'
import './Banner.scss'

function Banner() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner" srcSet={banner2x} />
            </div>
            <div className="layer">
            </div>
        </div>
    );
}

export default Banner;