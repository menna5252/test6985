import { FaStar } from "react-icons/fa";

function Contact() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center px-3">
      <h2 className="text-center title fw-bold pt-3">CONTACT SECTION</h2>
      <div className="d-flex flex-row align-items-center justify-content-center gap-3 mb-3">
        <div className="mydiv"></div>
        <FaStar />
        <div className="mydiv"></div>
      </div>
      <div className="mycontact d-flex flex-column gap-4 align-items-start py-5">
        <input
          type="text"
          placeholder="userName"
          className="myinput py-3 px-2"
        />
        <input
          type="text"
          placeholder="userName"
          className="myinput py-3 px-2"
        />
        <input
          type="text"
          placeholder="userName"
          className="myinput py-3 px-2"
        />
        <input
          type="text"
          placeholder="userName"
          className="myinput py-3 px-2"
        />
        <button className="btn btn-info text-white">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
