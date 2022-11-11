import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import testimonialImg from "../../images/testimonail-bg.jpg";
// import "./Testimonial.css";
import user1 from "../../images/user-1.jpg";
import user2 from "../../images/user-2.jpg";
import user3 from "../../images/user-3.jpg";
import { FaStar } from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    // testimonial-part start
    // <div className="">
    //   <div className="mt-10 mb-10">
    //     <h2 className="text-5xl font-bold mb-3 text-red-500">
    //       BEAUTIFUL REVIEWS
    //     </h2>
    //     <p className="text-3xl font-semibold">OUR BELoved Customers</p>
    //   </div>
    //   <Container fluid>
    //     <Row>
    //       <Col lg={6} className="p-0">
    //         <div className="testimonial-thumb">
    //           <img src={testimonialImg} alt="" />
    //         </div>
    //       </Col>
    //       <Col lg={6} className="p-0">
    //         <div className="testimonial-slide">
    //           <h2>Our Top Reviews</h2>
    //           <Carousel>
    //             <Carousel.Item>
    //               <Carousel.Caption>
    //                 <h4>Action Safari</h4>
    //                 <div className="rating">
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                 </div>
    //                 <p>
    //                   The sightseeing and activities were better than we even
    //                   thought! I still can’t believe we did so much in such a
    //                   short time, but we did not feel stre
    //                 </p>
    //                 <p className="name">Karin Thomas </p>
    //                 <img src={user1} alt="" />
    //               </Carousel.Caption>
    //             </Carousel.Item>
    //             <Carousel.Item>
    //               <Carousel.Caption>
    //                 <h4>Adventure Alaska</h4>
    //                 <div className="rating">
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                 </div>
    //                 <p>
    //                   I had a wonderful time during the trip. The guide was
    //                   informative, friendly and attentive to our entire group! I
    //                   definitely plan to be a returning cus
    //                 </p>
    //                 <p className="name">Hart Coney</p>
    //                 <img src={user2} alt="" />
    //               </Carousel.Caption>
    //             </Carousel.Item>
    //             <Carousel.Item>
    //               <Carousel.Caption>
    //                 <h4>Ancient Pyramids</h4>
    //                 <div className="rating">
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                   <FaStar />
    //                 </div>
    //                 <p>
    //                   Always enjoyed my stay with Hilton Hotel and Resorts, top
    //                   class room service and rooms have great outside views and
    //                   luxury assessories. Thanks for gre
    //                 </p>
    //                 <p className="name">Roman Paolera </p>
    //                 <img src={user3} alt="" />
    //               </Carousel.Caption>
    //             </Carousel.Item>
    //           </Carousel>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    // testimonial-part end

    <div className="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800 text-center">
        <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div class="mb-12 md:mb-0 bg-emerald-500 p-5">
            <div class="flex justify-center mb-6">
              <img src={user1} alt="" class="rounded-full shadow-lg w-32" />
            </div>
            <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
            <h6 class="font-medium text-blue-600 mb-4">Teacher</h6>
            <p class="mb-4">
              The sightseeing and activities were better than we even thought! I
              still can’t believe we did so much in such a short time, but we
              did not feel stre
            </p>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div class="mb-12 md:mb-0 bg-emerald-500 p-5">
            <div class="flex justify-center mb-6">
              <img src={user2} alt="" class="rounded-full shadow-lg w-32" />
            </div>
            <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
            <h6 class="font-medium text-blue-600 mb-4">Lawyer</h6>
            <p class="mb-4">
              I had a wonderful time during the trip. The guide was informative,
              friendly and attentive to our entire group! I definitely plan to
              be a returning cus
            </p>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div class="mb-12 md:mb-0 bg-emerald-500 p-5">
            <div class="flex justify-center mb-6">
              <img src={user3} alt="" class="rounded-full shadow-lg w-32" />
            </div>
            <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
            <h6 class="font-medium text-blue-600 mb-4">Bussinesman</h6>
            <p class="mb-4">
              Always enjoyed my stay with Hilton Hotel and Resorts, top class
              room service and rooms have great outside views and luxury
              assessories. Thanks for gre
            </p>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
