import Image from "next/image";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

export default function SafetyCTA() {
  return (
    <section className="safety">
      <div className="safety__container">
        {/* LEFT – Illustration */}
        <div className="safety__image">
          <Image
            src="/images/my-agent.png"
            alt="My Agent Safety"
            width={260}
            height={260}
          />
        </div>

        {/* RIGHT – Content */}
        <div className="safety__content">
          <h2>Get Your Tasks Done Safely & Easily!</h2>

          <ul className="safety__list">
            <li>
              <FaCheckCircle />
              Safe, Live Tracking
            </li>
            <li>
              <FaCheckCircle />
              Photo / Video Proofs
            </li>
            <li>
              <FaCheckCircle />
              Secure Advance Payment
            </li>
          </ul>

          {/* Contact */}
          <div className="safety__contact">
            <FaWhatsapp className="whatsapp" />
            <span className="phone">70320 70488</span>
          </div>

          {/* Social Icons */}
          <div className="safety__socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Call">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
