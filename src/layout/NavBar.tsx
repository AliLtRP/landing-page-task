import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomUL from "../components/CustomUL";
import { FiAlignJustify } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="navbar">
        <div className="basis-50">navbar</div>
        <div className="basis-50 collapse-nav">
          <CustomUL />
        </div>
        <div className="buttons-style basis-50 collapse-nav">
          <CustomButton
            title="Log In"
            buttonType="log"
            handleClick={() => {}}
          />
          <CustomButton
            title="Start Free Trial"
            buttonType=""
            handleClick={() => {}}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
        >
          <FiUser
            size={22}
            className="hide-menu"
            style={{ padding: "0.1rem 0 0 0 " }}
          />
          <FiAlignJustify
            size={25}
            className="hide-menu"
            onClick={() => handleNav()}
          />
        </div>
      </div>

      {nav && <CustomUL />}
    </div>
  );
};

export default NavBar;
