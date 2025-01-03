import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} alt="" />
        {/* <p className="legend">Image 1</p> */}
      </div>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Image 2</p> */}
      </div>
      <div>
        <img src={img3} alt="" />
        {/* <p className="legend">Image 3</p> */}
      </div>
      <div>
        <img src={img4} alt="" />
        {/* <p className="legend">Image 4</p> */}
      </div>
      <div>
        <img src={img5} alt="" />
        {/* <p className="legend">Image 5</p> */}
      </div>
      <div>
        <img src={img6} alt="" />
        {/* <p className="legend">Image 6</p> */}
      </div>
    </Carousel>
  );
};

export default Banner;
