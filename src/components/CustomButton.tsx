import { CustomButtonProps } from "../types";

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      className={`${
        props.buttonType === "log" ? "LogIn-button" : "Free-Trail-button"
      } `}
      style={props.style}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
