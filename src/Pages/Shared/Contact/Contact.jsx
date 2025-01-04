import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import ContactImage from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Contact</title>
      </Helmet>
      <Cover
        img={ContactImage}
        title="CONTACT US"
        subTitle="Would You Like To Try To Dish ?"
      ></Cover>
      <SectionTitle heading="OUR LOCATION" subHeading="Visit Us"></SectionTitle>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        eligendi, laudantium autem amet sapiente repudiandae perferendis
        nesciunt repellat, quidem similique, totam ea eaque accusantium corporis
        voluptate ex recusandae voluptas expedita?
      </p>
      <SectionTitle
        heading="CONTACT FORM"
        subHeading="---Send Us a Message---"
      ></SectionTitle>
      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input
            type=""
            placeholder="Write your message hare"
            className="input input-bordered"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
