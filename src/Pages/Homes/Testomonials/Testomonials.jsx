import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";  
import { Rating } from "@smastrom/react-rating";  
import "@smastrom/react-rating/style.css";  

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      ></SectionTitle>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]} // Pass the Navigation module
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}> {/* Use 'review._id' for key */}
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-3xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;