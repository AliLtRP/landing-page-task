import CustomButton from "./CustomButton";
import CustomTitle from "./CustomTitle";

const Hero = () => {
  return (
    <div className="hero">
      <CustomTitle
        title="A modern way to build websites."
        classes="hero-title "
        style={{
          fontWeight: "bold",
          width: "40%",
          textAlign: "center",
          lineHeight: "1",
        }}
      />
      <CustomTitle
        title="Empower designers to build professional, custom websites in a completely visual canvas with no code."
        classes="hero-sec-title"
        style={{
          fontWeight: "400",
          width: "50%",
          textAlign: "center",
          fontSize: "22px",
        }}
      />
      <CustomButton
        title="Start free trial"
        style={{ height: "3.6rem" }}
        buttonType=""
        handleClick={() => {}}
      />
    </div>
  );
};

export default Hero;
