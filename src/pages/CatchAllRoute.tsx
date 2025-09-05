import { ROUTES } from "@/routes";
import { Link, useLocation } from "react-router-dom";

const CatchAllRoute = () => {
  const location = useLocation();

  return (
    <div>
      <div>{location.pathname} is not found</div>
      <Link to={ROUTES.HOME}>Back to Home</Link>
    </div>
  );
};

export default CatchAllRoute;
