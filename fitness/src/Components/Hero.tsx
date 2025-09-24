import logo from "../assets/width_200.webp";
import heroImage from "../assets/width_1600.webp";
const Hero = () => {
  return (
    <>
    <section id="hero" className="hero-section">
      <div className="row-container margin-top">
        <img src={logo} className="logo" />
        <div className="column-container">
          <p className="strong-font orange medium-text">Alpha</p>
          <p className="strong-font orange small-text">
            Fitness & Self Defense
          </p>
        </div>
      </div>

      <div className="row-container margin-top">
        <div className="column-container gap-1">
          <p className="strong-font white extra-large-text">Welcome</p>
          <p className="strong-font white extra-large-text">
            To <span className="orange">alpha</span> dojo —
          </p>
          <p className="strong-font white extra-large-text">where woriors</p>
          <p className="strong-font white extra-large-text">are made!</p>
          <a className="button margin-top">Join Now</a>
        </div>
        <div className="gradient"></div>
        <img src={heroImage} className="hero-image "></img>
      </div>
    </section>
    </>
  );
};

export default Hero;
