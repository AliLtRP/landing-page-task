import CustomImageCard from "./CustomImageCard";

const ShareSection = () => {
  return (
    <div className="sec">
      <p className="share-section-para">
        <span style={{ padding: "0 10px", backgroundColor: "white" }}>
          We share our thoughts on design
        </span>
      </p>

      <CustomImageCard />
    </div>
  );
};

export default ShareSection;
