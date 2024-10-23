import { Link } from "react-router-dom";

import "./explore.css";
const ExplorePage = () => (
  <div className="explore-main-conainer">
    <div className="explore-image-conainer bg-explore-img-3 d-flex flex-column align-items-center justify-content-center">
            <h1 className="diwali-head text-sm-md">Light up your Diwali with <br/> our dazzling candy discounts!</h1>
            <p className="diwali-desx text-md-small">As the twinkling lights of Diwali cast their magic, the sweetness of candy adds an extra layer of joy to the festivities. Each piece of candy is a burst of happiness, creating sweet memories with every bite. Celebrate Diwali with the colorful and delightful treats that bring smiles and warmth to every home.</p>
            <Link to = '/shop'>
            <button className = 'shop-now-btn text-sm' >Shop Now</button>
            </Link>
    </div>
    <div className="explore-image-conainer w-2 bg-explore-img-4 d-flex flex-column justify-content-center">
        <h1 className="xmas-head">Celebrate Christmas with our delectable candy collection.</h1>
        <p className="xmas-desx mt-2">Experience the magic of Christmas with our delightful candy selection. Each sweet treat brings joy and warmth to your holiday celebrations. Share the festive cheer with our irresistible candies, perfect for every gathering and every stocking. Sweeten your Christmas season with the flavors that make every moment special.</p>
        <Link to="/shop">
        <button className="xmas-btn btn btn-danger mt-3">Shop Now</button>
        </Link>
    </div>
    <div className="explore-image-conainer bg-explore-img-2 p-5">
        <h1 className="bday-head">Celebrate your birthday with a sugar rush of happiness and fun!</h1>
        <p className="bday-desx">Transform your birthday into a sweet sensation with our exclusive candy delights. Experience the taste of happiness in every bite.</p>
        <Link to="/shop">
        <button className="bday-btn">Shop Now</button>
        </Link>
    </div>
  </div>
);

export default ExplorePage;
