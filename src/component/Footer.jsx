import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="myfooter d-flex align-items-center justify-content-center ">
        <div className="row container pt-5">
          <div className="col-md-4 text-center mb-5 text-white">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center mb-5 text-white">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex flex-row align-items-center justify-content-center gap-3 ">
              <FaFacebookF className="iconborder" />
              <FaTwitter className="iconborder" />
              <FaLinkedinIn className="iconborder" />
              <FaEarthAfrica className="iconborder" />
            </div>
          </div>
          <div className="col-md-4 text-center mb-5 text-white">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="lastfooter text-white text-center py-2">
        <p className="mt-2">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}

export default Footer;
