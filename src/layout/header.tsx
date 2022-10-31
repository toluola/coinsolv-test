import { Link } from "react-router-dom";
import { title } from "../config";
const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)",
};

export default () => (
  <header>
    <div
      style={style}
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
    >
      <h5 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <Link to={"/"}>{title}</Link>
      </h5>
    </div>
  </header>
);
