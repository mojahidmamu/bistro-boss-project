import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ShopImage from "../../../assets/shop/banner2.jpg";
import { Link } from "react-router-dom";

const Order = () => {
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
      <div>
        <div role="tablist" className="tabs tabs-lifted">
           
          {/* <Link to='DESSERTS'><a role="tab" className="tab">DESSERTS</a></Link> */}
          <a role="tab" className="tab"> <Link to='/DESSERTS'>DESSERTS</Link> </a>
          <a role="tab" className="tab"> <Link to='/SALAD'>SALAD</Link> </a>
          <a role="tab" className="tab">PIZZA</a>
          <a role="tab" className="tab">DRINTKS</a>
        </div>
      </div>
    </div>
  );
};

export default Order;
