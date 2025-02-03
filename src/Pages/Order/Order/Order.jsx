import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ShopImage from "../../../assets/shop/banner2.jpg";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const offered = meu.filter(item => item.category === 'offered')
  // const soups = meu.filter(item => item.category === 'soups')
  // const salad = meu.filter(item => item.category === 'salad')
  // const pizza = meu.filter(item => item.category === 'pizza')
  // const dessert = meu.filter(item => item.category === 'dessert')
  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>

      <Cover
        img={ShopImage}
        title="OUR SHOP"
        subTitle="Would You Like To Try To Dish ?"
      ></Cover>
      <div role="tablist" className="tabs tabs-lifted justify-center my-5 ml-3">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
            <TabPanel>
              <div className="grid md:grid-cols-3 gap-5">
                {/* {
              salad.map(item => <FoodCard
              key={item._id}
              item={item}
              ></FoodCard>)
            } */}
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabList>
        </Tabs>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          {" "}
          <Link to="/DESSERTS">DESSERTS</Link>{" "}
        </a>
        <a role="tab" className="tab">
          {" "}
          <Link to="/SALAD">SALAD</Link>{" "}
        </a>
        <a role="tab" className="tab tab-active">
          {" "}
          <Link to="/PIZZA">PIZZA</Link>
        </a>
        <a role="tab" className="tab">
          {" "}
          <Link to="/DRINTKS">DRINTKS</Link>{" "}
        </a>
      </div>
    </div>
  );
};

export default Order;
