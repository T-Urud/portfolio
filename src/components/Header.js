import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center relative h-[75px] px-3 md:h-unset md:py-2 md:mt-3 z-50">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
        variants={variants}
        className="fixed w-screen h-screen top-0 mt-[75px] bg-white opacity-95 translate-x-0 flex flex-col z-50 md:hidden"
      >
        <Link
          smooth
          to="#"
          className="z-50 font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px]"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Acceuil
        </Link>
        <Link
          smooth
          to="#project"
          className="font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px]"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Projets
        </Link>
        <Link
          smooth
          to="#contact"
          className="font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px] mr-5"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Contact
        </Link>
      </motion.div>
      <a href="/" className="z-50 flex items-center gap-2">
        <img
          src="color-screen.png"
          alt="color"
          className="rounded-full w-5 h-5"
        />
        <span className="font-semibold text-sm">THEO</span>
      </a>
      <motion.button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="z-50 bg-transparent border-none flex md:hidden"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </motion.button>
      <nav className="md:flex text-sm list-none hidden">
        <li>
          <Link smooth to="#" className="ml-[50px] text-black font-semibold">
            Accueil
          </Link>
        </li>
        <li>
          <Link smooth to="#project" className="ml-[50px] text-[#727272]">
            Projets
          </Link>
        </li>
        <li>
          <Link smooth to="#contact" className="ml-[50px] text-[#727272]">
            Contact
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
