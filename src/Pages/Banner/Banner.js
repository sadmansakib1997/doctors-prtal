import React from "react";
import img1 from "../../images/home-slider-img-1.jpg";
import img2 from "../../images/home-slider-img-2.jpg";
import img3 from "../../images/home-slider-img-3.jpg";

const Banner = () => {
  return (
    // banner-part start
    <div className="banner-part">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div>
            <img src={img1} alt="" className="w-full" />
            <div className="absolute flex justify-end transform -translate-y-200 left-24 top-1/4">
              <h1>
                <span className="text-5xl font-bold text-white">
                  Your Synthetic Begins
                </span>{" "}
                <br />
                <span className="text-xl font-bold text-white">
                  Synthetic world is a simply stunning theme <br /> perfect for
                  all types of <br /> travel & tourism businesses
                </span>
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt="" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-200 left-24 top-1/4">
            <h1>
              <span className="text-5xl font-bold text-white">
                Your Synthetic Begins
              </span>{" "}
              <br />
              <span className="text-xl font-bold text-white">
                Synthetic world is a simply stunning theme <br /> perfect for
                all types of <br /> travel & tourism businesses
              </span>
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt="" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-200 left-24 top-1/4">
            <h1>
              <span className="text-5xl font-bold text-white">
                Your Synthetic Journey
              </span>{" "}
              <br />
              <span className="text-xl font-bold text-white">
                Synthetic world is a simply stunning theme <br /> perfect for
                all types of <br /> travel & tourism businesses
              </span>
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
    // banner-part end
  );
};

export default Banner;
