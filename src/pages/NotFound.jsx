import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-2-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb8">Page not found!</p>
          <Link to="/" className="btn btn-primary btn-lg mt-4">
            <FaHome className="mr-2 " />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
