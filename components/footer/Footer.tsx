import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container">
          {/* LEFT – Logo & Contact */}
          <div className="footer__brand">
            <Image
              src="/images/footer-logo.png"
              alt="My-Agent Logo"
              width={160}
              height={180}
            />

            <div className="footer__phone">
              <FaPhoneAlt />
              <span>+91 70320 70488</span>
            </div>

            <div className="footer__socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>

            <div className="footer__handle">
              @MyAgentIndia
            </div>
          </div>

          {/* LINKS */}
          <div className="footer__links">
            <div className="footer__col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">FAQs</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer__col">
              <h4>Services</h4>
              <a href="#">Government Work</a>
              <a href="#">Certificate Collection</a>
              <a href="#">Flat / PG Visit</a>
              <a href="#">Business Tasks</a>
            </div>

            <div className="footer__col">
              <h4>More Services</h4>
              <a href="#">Certificates</a>
              <a href="#">Flat / PG Visit</a>
              <a href="#">Business Tasks</a>
            </div>

            <div className="footer__col">
              <h4>Support</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Refund Policy</a>
              <a href="#">Help Center</a>
            </div>
          </div>

          {/* APP STORE */}
          <div className="footer__store">
            <Image
              src="/images/app-store-badge.png"
              alt="Download on App Store"
              width={160}
              height={48}
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer__bottom">
        © 2024 My-Agent. All Rights Reserved
      </div>
    </footer>
  );
}
