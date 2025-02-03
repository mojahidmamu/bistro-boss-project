import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ShopImage from "../../../assets/shop/banner2.jpg";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import { useState } from "react";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
          <Tab>DESSERTS</Tab>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DRINKS</Tab>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabList>
      </Tabs>

      </div>
      
        <div role="tablist" className="tabs tabs-lifted"> 
          <a role="tab" className="tab"> <Link to='/DESSERTS'>DESSERTS</Link> </a>
          <a role="tab" className="tab"> <Link to='/SALAD'>SALAD</Link> </a>
          <a role="tab" className="tab tab-active"> <Link to='/PIZZA'>PIZZA</Link></a>
          <a role="tab" className="tab"> <Link to='/DRINTKS'>DRINTKS</Link> </a>
           
        </div>
    </div>
  );
};

export default Order;
