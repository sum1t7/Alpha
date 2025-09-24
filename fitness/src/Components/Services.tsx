import servicesimage from "../assets/image1.png";
const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="row-container-services">
        <div className="column-container-services">
          <p className="strong-font orange medium-text">Our Best Service</p>
          <p
            className="small-container-services small-text white"
            style={{ fontWeight: "800" }}
          >
            At Alpha Fitness & Self Defence, we are dedicated to providing
            world-class training and guidance in a variety of martial arts and
            fitness disciplines, including:
          </p>
          <div
            className="service-list small-text white"
            style={{ fontWeight: "800" }}
          >
            <div>🔥 Kyokushin Karate</div>
            <div>🔥 Brazilian Jiu-Jitsu (BJJ)</div>
            <div>🔥 Mixed Martial Arts (MMA)</div>
            <div>🔥 Self-Defense Techniques</div>
            <div>🔥 Kickboxing for Strength & Endurance</div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
          <a className="button margin-top">Shop now</a>
          <a className="button2 margin-top">Join Now</a>
          </div>
        </div>
        <div className="column-container">
          <img src={servicesimage} alt="" className="services-image"  />
          <p
            className="small-container small-text white"
            style={{ bottom: "10px", position: "absolute" }}
          >
            Our students receive comprehensive training from experienced
            instructors, helping them build confidence, discipline, and
            resilience. With the esteemed National Combat Sports Federation
            (NCSF) supporting us, our students have the opportunity to
            participate in state, national, and international tournaments,
            showcasing their skills on prestigious platforms.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
