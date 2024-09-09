import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="min-h-[350px] rounded-3xl m-2 p-10 relative overflow-hidden bg-[#F1F1F1] flex flex-col">
        <h2 className="font-semibold text-4xl leading-[47px]">
          On travaille ensemble ?
        </h2>
        <p className="text-lg leading-[151%] mt-5">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <a href="mailto:urud.theo@gmail.com">urud.theo@gmail.com</a>
        <div className="flex flex-wrap gap-2 mt-auto md:flex-nowrap">
          <a
            href="mailto:urud.theo@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center my-4"
          >
            <button className="w-full font-semibold flex items-center rounded-full text-white bg-[#1D1D1D] leading-4 h-12 justify-center">
              Contactez-moi
            </button>
          </a>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
