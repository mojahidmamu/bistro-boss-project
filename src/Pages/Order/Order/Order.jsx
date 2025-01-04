 
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ShopImage from '../../../assets/shop/banner2.jpg'

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
       
      <Cover img={ShopImage} title='OUR SHOP' subTitle='Would You Like To Try To Dish ?'></Cover>
    </div>
  );
};

export default Order;
