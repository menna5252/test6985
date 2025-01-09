import myImg1 from "../photo/poert1.png";
import myImg2 from "../photo/port2.png";
import myImg3 from "../photo/port3.png";
import { FaStar } from "react-icons/fa";

function Portfolio() {
  return (
    <div className="container">
      <h2 className="text-center title fw-bold pt-3">PORTFOLIO COMPONENT</h2>
      <div className="d-flex flex-row align-items-center justify-content-center gap-3 mb-3">
        <div className="mydiv"></div>
        <FaStar />
        <div className="mydiv"></div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg1} alt="error" width="100%" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg2} alt="error" width="100%" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg3} alt="error" width="100%" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg1} alt="error" width="100%" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg2} alt="error" width="100%" />
        </div>
        <div className="col-md-4 mb-4 ">
          <img className="rounded-3" src={myImg3} alt="error" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
