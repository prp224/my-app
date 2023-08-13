import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

export default function Occupation() {



    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay interval= {5000} fade={true} showArrows={false} showIndicators={false} showStatus={false} transitionTime={2000}>
                <div>
                    <h3 className="title">A Student</h3>
                </div>
                <div>
                    <h3 className="title">A Developer</h3>
                </div>
                <div>
                    <h3 className="title">An Engineer</h3>
                </div>
            </Carousel>
        </div>
    );
}
