import React from "react";
import Banner from "../Banner/Banner";
import Category from '../Category/Category';
import PopularMenu from "../PopularMenu/PopularMenu";
import ShefRecommended from "../ShefRecommended/ShefRecommended";
import Featured from "../Featured/Featured"; 
import { Helmet } from "react-helmet-async";
import Testmonials from "../Testomonials/Testmonials";

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
      <Testmonials></Testmonials> 
    </div>
  );
};

export default Home;
