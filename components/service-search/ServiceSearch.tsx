"use client";

import "./service-search.css";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

export default function ServiceSearch() {
  return (
    <section className="service-search">
      <div className="service-search__container">
        {/* Heading */}
        <h2 className="service-search__title">
          Find the Right Agent for Your Work
        </h2>

        {/* Form */}
        <div className="service-search__form">
          <div className="select-box">
            <select>
              <option>Select Service Type</option>
              <option>Government Services</option>
              <option>Office & Documentation</option>
              <option>Property & RTC</option>
            </select>
            <FaChevronDown />
          </div>

          <div className="select-box">
            <select>
              <option>Select Location</option>
              <option>Hyderabad</option>
              <option>Secunderabad</option>
              <option>Gachibowli</option>
            </select>
            <FaChevronDown />
          </div>

          <button className="primary-btn">
            Request an Agent
          </button>
        </div>

        {/* Trust Points */}
        <div className="service-search__points">
          <div>
            <FaCheckCircle />
            Verified & Trusted Agents
          </div>
          <div>
            <FaCheckCircle />
            Fast & Transparent Process
          </div>
          <div>
            <FaCheckCircle />
            Real-Time Status Updates
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="service-search__illustration">
        <img
          src="/images/services-banner.png"
          alt="Agent service illustration"
        />
      </div>
    </section>
  );
}
