import Image from "next/image";
import {
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import "./app-download.css";

export default function AppDownload() {
  return (
    <section className="app-download">
      <div className="app-download__container">
        {/* LEFT – Agent Illustration */}
        <div className="app-download__left">
          <Image
            src="/images/app-agent.png"
            alt="My Agent App"
            width={420}
            height={520}
            priority
          />
        </div>

        {/* RIGHT – Content */}
        <div className="app-download__right">
          <h2>
            Download Our App <br />
            <span>for Easy Service Booking</span>
          </h2>

          <div className="app-download__badge">
            Safe Task Updates • Trusted Agents in Hyderabad
          </div>

          {/* Store Buttons */}
          <div className="app-download__stores">
            <a href="#" className="store-btn apple">
              <FaApple />
              <div>
                <small>Download on the</small><br />
                <strong>App Store</strong>
              </div>
            </a>

            <a href="#" className="store-btn google">
              <FaGooglePlay />
              <div>
                <small>GET IT ON</small><br />
                <strong>Google Play</strong>
              </div>
            </a>
          </div>

          {/* QR + Phone */}
          {/* <div className="app-download__bottom">
            <div className="phone-preview">
              <Image
                src="/images/app-phone.png"
                alt="My Agent App Preview"
                width={280}
                height={400}
              />
            </div>

            <div className="qr-box">
              <Image
                src="/images/app-qr.png"
                alt="Download My Agent App QR"
                width={120}
                height={120}
              />
              <p>
                Scan QR Code to <br />
                <strong>Download My-Agent App</strong>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
