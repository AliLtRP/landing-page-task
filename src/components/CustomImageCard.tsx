import image1 from "../assets/Rectangle 8.png";
import image2 from "../assets/Rectangle 8-2.png";
import image3 from "../assets/Rectangle 8-3.png";
import image4 from "../assets/Rectangle 8-4.png";

const CustomImageCard = () => {
  return (
    <div className="share-section">
      <div className="share-section-items">
        <div>
          <img
            src={image4}
            className="img-style"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
          />
          <p className="font-bold ">
            Redesigning my site increased sales by over 400% in one week.
          </p>
          <p className="font-lighter ">Jul 1, 2020</p>
        </div>
        <div>
          <img
            src={image3}
            className="img-style"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
          />
          <p className="font-bold ">
            Design handoff: What engineers really want to see
          </p>
          <p className="font-lighter ">Jul 1, 2020</p>
        </div>
        <div>
          <img
            src={image2}
            className="img-style"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
          />
          <p className="font-bold ">
            A comprehensive list of human-computer interactions
          </p>
          <p className="font-lighter ">Jul 1, 2020</p>
        </div>
        <div>
          <img
            src={image1}
            className="img-style"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
          />
          <p className="font-bold ">Why do people hate redesigns?</p>
          <p className="font-lighter ">Jul 1, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default CustomImageCard;
