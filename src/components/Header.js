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
    <header className="flex justify-between items-center relative h-[75px] md:h-unset md:py-2 md:mt-3 z-50">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        variants={variants}
        className="fixed w-screen h-screen top-0 mt-[75px] bg-white opacity-95 translate-x-0 flex flex-col z-50 md:hidden"
      >
        <Link
          smooth
          to="#"
          className="z-50 font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px]"
        >
          Acceuil
        </Link>
        <Link
          smooth
          to="#project"
          className="font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px]"
        >
          Projets
        </Link>
        <Link
          smooth
          to="#contact"
          className="font-semibold text-2xl leading-[30px] text-black ml-5 mt-[30px] mr-5"
        >
          Contact
        </Link>
      </motion.div>
      <a href="/" className="z-50">
        theo/image
      </a>
      <motion.button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="z-50 bg-transparent border-none flex md:hidden"
      >
        svg
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
