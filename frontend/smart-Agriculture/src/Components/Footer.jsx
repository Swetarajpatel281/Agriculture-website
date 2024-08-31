
import './styles/Footer.css';
import logo from "../assets/agro-logo.png"
const Footer = () => {
  return (
    <footer>
      {/* Uncomment and adjust the row if needed */}
      {/* 
      <div id="row">
        <p>
          HEARD <br /> ENOUGH?
          <i className="ri-arrow-right-line"></i>
        </p>
        <h1 className="line">Contact Us</h1>
        <i className="ri-arrow-right-line"></i>
      </div> 
      */}
      <div id="foot">
      <div className="col">
      <img className='img-logo' src={logo} alt="crop" />
      </div>
        <div className="col">
          <h2>LONDON</h2>
          <p className="email_id">swetarp@gamil.com</p>
          <p className="number">+91-7897677561</p>
          <p className="address">
            Unit 306, Metropolitan Wharf, 70 Wapping Wall, London E1W 3SS
          </p>
          <p className="line">
            SEE ON MAP <i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
        <div className="col">
          <h2>LONDON</h2>
          <p className="email_id">swetarp@gamil.com</p>
          <p className="number">+91-7897677561</p>
          <p className="address">
            Unit 306, Metropolitan Wharf, 70 Wapping Wall, London E1W 3SS
          </p>
          <p className="line">
            SEE ON MAP <i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
        <div className="col">
          <h3>WANT TO BE SMARTEST IN YOUR OFFICE?</h3>
          <p className="line">
            SIGN UP FOR OUR NEWSLETTER <i className="ri-arrow-right-line"></i>
          </p>
          <p>FOLLOW US</p>
          <i className="ri-facebook-box-fill"></i>
          <i className="ri-github-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-linkedin-box-fill"></i>
        </div>
      </div>
      <hr />
      <p>© 2024 Crop Platform | Contact Us</p>
    </footer>
  );
};

export default Footer;
