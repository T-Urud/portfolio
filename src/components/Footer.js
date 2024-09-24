import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer id="contact" className="mt-5">
      <div className="min-h-[350px] rounded-3xl m-2 p-10 relative overflow-hidden bg-gradient-to-r from-[rgba(255,207,207,1)] via-[rgba(255,121,121,1)] to-[rgba(252,0,0,0.9)] [background-position:0%_37%_75%] flex flex-col">
        <h2 className="font-semibold text-[2.1rem] leading-[47px] footerTextMQ:text-4xl">
          Intéressé ?
        </h2>
        <p className="text-lg leading-[151%] mt-5">
          N'hésitez pas à me contacter pour toutes informations supplémentaires,
          demandes de collaboration
        </p>
        <a href="mailto:urud.theo@gmail.com" className="text-lg font-semibold">
          urud.theo@gmail.com
        </a>
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
