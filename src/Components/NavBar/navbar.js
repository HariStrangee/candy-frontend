import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { LuCandy } from "react-icons/lu";
import { AiFillShop } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container ">
      <div className="profile-and-search-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dipqsr0fw/image/upload/v1729058214/Pngtree_candy_logo_design_template_vector_3607676_areucf.png"
            alt="e-candy"
            className="candy-logo "
          />
        </Link>

        <h1 className="candy-logo-name d-none d-lg-block">CandyLand</h1>
      </div>
      <ul className="nav-items">
        <Link className="nav-el d-flex align-items-center" to="/">
          <li className="pr-1 d-none d-lg-block">Home</li>
          <FaHome className="d-lg-none" />
        </Link>
        <Link className="nav-el d-flex align-items-center" to="/explore">
          <li className="pr-1 d-none d-lg-block">Explore</li>
          <LuCandy className="d-lg-none" />
        </Link>
        <Link className="nav-el d-flex align-items-center" to="/shop">
          <li className="pr-1 d-none d-lg-block">Shop</li>
          <AiFillShop className="d-lg-none" />
        </Link>
        <Link className="nav-el d-flex align-items-center" to="/Cart">
          <li className="pr-1 d-none d-lg-block">Cart</li>
          <HiShoppingCart />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
