import { FaStar } from "react-icons/fa";

function ConstantComponent() {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center gap-3">
      <div className="mydiv bg-white"></div>
      <FaStar />
      <div className="mydiv bg-white"></div>
    </div>
  );
}

export default ConstantComponent;
