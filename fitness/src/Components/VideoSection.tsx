import vid from '../assets/Vid.mp4'
const videoSection = () => {
  return (
    <div className="video-section" style={{ position: "relative" }}>
      <div className="container-vid">
        <p className="strong-font large-text white">Support center</p>
        <p
          className="strong-font small-text white"
          style={{ textAlign: "center" }}
        >
          Use this space to highlight your most popular services.
          <p>You can also use this for your flagship products.</p>
        </p>
        <a className="button3" >GET SUPPORT</a>
      </div>
      <video className="services-image" autoPlay loop muted style={{ width: "100%" , height: "100%", objectFit: "cover" }}>
        <source
          src={vid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default videoSection;
