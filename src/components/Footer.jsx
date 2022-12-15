import React from "react";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-black/30 w-full fixed bottom-0 p-4 flex justify-center items-center flex-col">
      <div>
        <img src={logo} alt="logo" className="h-[30px]" />
      </div>
      <div>
        <p>Copyright &copy; 2022 Both</p>
      </div>
    </div>
  );
};

export default Footer;
