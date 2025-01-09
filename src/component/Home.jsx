import homeImage from "../photo/Screenshot (7).png";
import ConstantComponent from "./ConstantComponent";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2 py-5 bg-info text-white text-center">
      <img
        src={homeImage}
        className="rounded-circle"
        alt="error"
        width="300px"
      />
      <h1>start Framework</h1>
      <ConstantComponent />
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

export default Home;
