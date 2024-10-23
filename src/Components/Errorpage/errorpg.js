import { Link } from "react-router-dom";
import "./errorpg.css";
const Errorpage = () => {
  return (
    <div className="error-container d-flex flex-column align-items-center justify-content-center">
      <div className="blured-container d-flex flex-column align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/dipqsr0fw/image/upload/v1729080925/Pngtree_mummy_carrying_halloween_candy_18280322_x4soxq.png"
          alt="404 error"
          className="err-img"
        />
        <h1 className="error-head">Page not Found</h1>
        <Link to="/">
          <button type="button" className="retry-button">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
