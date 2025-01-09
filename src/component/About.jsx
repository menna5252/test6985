import ConstantComponent from "./ConstantComponent";

function About() {
  return (
    <div className="text-white bg-info py-5 d-flex flex-column align-items-center justify-content-center gap-3">
      <h1 className="mt-5">ABOUT COMPONENT</h1>
      <ConstantComponent />
      <div className="container row align-items-center justify-content-center mb-5">
        <div className="col-md-4 mb-3">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </div>
        <div className="col-md-4 mb-3">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </div>
      </div>
    </div>
  );
}

export default About;
