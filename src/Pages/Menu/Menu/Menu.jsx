import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Homes/PopularMenu/PopularMenu";
import Slide1 from '../../../assets/home/slide1.jpg';
import Slide2 from '../../../assets/home/slide2.jpg';
import Slide3 from '../../../assets/home/slide3.jpg';
import Slide4 from '../../../assets/home/slide4.jpg';
import Slide5 from '../../../assets/home/slide5.jpg';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='OUR MENU' subTitle='Would You Like To Try A Dish ?'></Cover>
       <PopularMenu></PopularMenu>
      <Cover img={Slide1} title='DESSERTS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
       <PopularMenu></PopularMenu>
      <Cover img={Slide2} title='SLALDS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
       <PopularMenu></PopularMenu>
      <Cover img={Slide3} title='PIZZA' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
       <PopularMenu></PopularMenu>
      <Cover img={Slide4} title='SOUPS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
       <PopularMenu></PopularMenu>
       
    </div>
  );
};

export default Menu;
