import React from "react";
import Socials from "./Socials";
import ProfilePic from "../assets/img/profile-pic.webp";

const TopSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row ">
      <div className="bg-red-300 rounded-3xl m-2 p-10 relative overflow-hidden flex flex-col md:min-w-[500px] lg:max-w-[700px] lg:pr-[100px]">
        <h1 className="font-semibold text-2xl leading-[116.7%] md:text-[40px] md:leading-[47px]">
          Bonjour je suis Theo, jeune développeur à la recherche d'une
          alternance.
        </h1>
        <p className="leading-[151%] mt-4">
          En pleine reconversion après ma carrière sportive, je me forme au
          métier de développeur Web avec une spécialisation en React. <br />
          Je viens de terminer ma première{" "}
          <span className="font-semibold">
            formation diplômante "Développeur Web"
          </span>{" "}
          de chez OpenClassrooms. <br />
          Je souhaite poursuivre sur le parcours{" "}
          <span className="font-semibold">
            "Développeur d'application JavaScript React"
          </span>{" "}
          au sein du même organisme.
        </p>
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
      <img
        src={ProfilePic}
        alt="Theo Duru"
        className="rounded-3xl m-2 object-cover h-[40vh] min-h-[300px] max-h-[400px] w-[calc(100%-20px)] md:w-[calc(40vw-40px)] md:min-w-[200px] md:max-w-[460px] md:h-[500px] md:max-h-[570px] profilePicMQ:h-full"
      />
    </section>
  );
};

export default TopSection;
