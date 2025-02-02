import React from "react";
import Banner from "../Banner/Banner";
import Category from '../Category/Category';
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testomonials/Testomonials";
import ShefRecommended from "../ShefRecommended/ShefRecommended";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ShefRecommended></ShefRecommended>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
