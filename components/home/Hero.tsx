"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./home.css";

const banners = [
  {
    id: 1,
    image: "/images/hero-1.png",
    title: "We Work For You",
    subtitle: "Trusted Agent Services in Hyderabad",
    cta: "Book an Agent",
  },
  {
    id: 2,
    image: "/images/hero-1.png",
    title: "No Need to Travel",
    subtitle: "We Handle Office & Government Tasks",
    cta: "Get Started",
  },
  {
    id: 3,
    image: "/images/hero-1.png",
    title: "Fast & Reliable",
    subtitle: "Your Personal Agent in the City",
    cta: "Contact Us",
  },
];

export default function Hero() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToSlide((index + 1) % banners.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [index]);

  const goToSlide = (i: number) => {
    if (!sliderRef.current) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * i,
      behavior: "smooth",
    });

    setIndex(i);
  };

  return (
    <section className="hero">
      <div className="hero__slider-wrapper">
        <div
          className="hero__slider"
          ref={sliderRef}
          onScroll={() => {
            if (!sliderRef.current) return;
            const w = sliderRef.current.clientWidth;
            setIndex(Math.round(sliderRef.current.scrollLeft / w));
          }}
        >
          {banners.map((b) => (
            <div className="hero__slide" key={b.id}>
              <Image src={b.image} alt={b.title} fill priority />

              {/* OVERLAY CONTENT */}
              <div className="hero__overlay">
                <h1>{b.title}</h1>
                <h2>{b.subtitle}</h2>
                <p>{b.subtitle}</p>
                <button>{b.cta}</button>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          className="hero__nav left"
          onClick={() =>
            goToSlide(index - 1 < 0 ? banners.length - 1 : index - 1)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="hero__nav right"
          onClick={() => goToSlide((index + 1) % banners.length)}
        >
          <FaChevronRight />
        </button>

        {/* DOTS */}
        <div className="hero__dots">
          {banners.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
