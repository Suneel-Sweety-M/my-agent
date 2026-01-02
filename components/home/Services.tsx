import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Government Services",
    image: "/images/services/service-1.png",
  },
  {
    id: 2,
    title: "Office & Documentation",
    image: "/images/services/service-2.png",
  },
  {
    id: 3,
    title: "Flat / PG Related Work",
    image: "/images/services/service-3.png",
  },
  {
    id: 4,
    title: "Business & GST Services",
    image: "/images/services/service-4.png",
  },
  {
    id: 5,
    title: "Property & RTC",
    image: "/images/services/service-1.png",
  },
  {
    id: 6,
    title: "Electrical & Plumbing",
    image: "/images/services/service-2.png",
  },
  {
    id: 7,
    title: "Home Cleaning & Repairs",
    image: "/images/services/service-3.png",
  },
  {
    id: 8,
    title: "Appliance Repair Services",
    image: "/images/services/service-4.png",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services__container">
        {/* Heading */}
        <h2 className="services__title">Our Agent Services for Your Needs</h2>

        {/* Cards */}
        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card__image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={140}
                  height={140}
                />
              </div>
              <p className="service-card__title">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
