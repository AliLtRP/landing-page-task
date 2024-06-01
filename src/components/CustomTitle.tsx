import { CustomInputProps } from "../types";
import "../App.css";

const CustomTitle = (props: CustomInputProps) => {
  console.log(props);

  return (
    <div className={props.classes} style={props.style}>
      {props.title}
    </div>
  );
};

export default CustomTitle;
