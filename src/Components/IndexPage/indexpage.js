import { Link } from "react-router-dom";
import "./indexpage.css";

const Indexpage = () => (
  <div className="index-container ">
    <div className="bg-container d-flex flex-column align-items-center justify-content-center">
      <div className="animation-container">
        <div className="index-content-container d-flex flex-column align-items-center justify-content-center">
          <h1 className="welcome-head">Welcome to Candy Land</h1>
          <p className="candy-quote">"Keep calm and love candy"</p>
          <div>
            <Link to="/shop">
              <button className="shop-button" type="button">
                Shop Now
              </button>
            </Link>
            <Link to="/explore">
              <button className="explore-button" type="button">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Indexpage;
