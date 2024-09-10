import React from "react";
import { motion } from "framer-motion";
import ocLogo from "../assets/svg/Logo_OpenClassrooms.svg";

const Socials = () => {
  return (
    <div className="flex items-center gap-2 w-full min-w-[200px] justify-between md:justify-start">
      <a
        href="https://openclassrooms.com/fr/profile/view-as/recruiter/"
        target="_blank"
        rel="nooper noreferrer"
      >
        <motion.button
          className="h-12 w-12 grid place-items-center rounded-full outline outline-1 outline-white bg-transparent border-none"
          whileHover={{
            cursor: "pointer",
            outlineOffset: "3px",
            background: "#7451eb",
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 400.000000 400.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
              fill="#ffff"
              stroke="none"
            >
              <path
                d="M235 3991 c-89 -22 -171 -89 -209 -170 l-21 -46 0 -1775 0 -1775 25
              -50 c31 -63 89 -121 149 -149 l46 -21 1775 0 1775 0 50 25 c63 31 121 89 149
              149 l21 46 0 1775 0 1775 -25 50 c-31 63 -89 121 -149 149 l-46 21 -1755 2
              c-965 0 -1768 -2 -1785 -6z m1830 -520 c140 -33 210 -58 350 -126 413 -202
              704 -576 807 -1036 20 -90 23 -131 23 -309 0 -160 -4 -224 -18 -290 -152 -711
              -758 -1210 -1472 -1210 -219 0 -392 34 -580 114 -94 39 -228 113 -284 155
              l-24 18 233 278 c128 152 242 288 254 302 l22 25 62 -31 c171 -86 408 -94 585
              -19 147 62 295 197 360 330 59 120 80 220 75 357 -8 198 -78 352 -221 488
              -129 122 -266 181 -442 190 -127 7 -220 -9 -321 -53 -43 -20 -84 -38 -90 -40
              -6 -3 -125 131 -264 297 l-253 302 24 18 c48 38 183 113 268 149 110 48 210
              78 336 101 139 26 438 20 570 -10z"
              />
            </g>
          </svg>
        </motion.button>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="h-12 w-12 grid place-items-center rounded-full outline outline-white outline-1 bg-transparent border-none"
          whileHover={{
            cursor: "pointer",
            outlineOffset: "3px",
            background:
              "radial-gradient(circle at 30% 107%, #f9ce34 0%, #f9ce34 5%, #fd5949 45%, #ee2a7b 60%, #6228d7 90%)",
          }}
        >
          <motion.svg
            className="fill-white transition-all"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </motion.svg>
        </motion.button>
      </a>
      <a
        href="https://fr.linkedin.com/in/theo-duru-78714314b/en-us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="h-12 w-12 grid place-items-center rounded-full outline outline-white outline-1 bg-transparent border-none"
          whileHover={{
            cursor: "pointer",
            outlineOffset: "3px",
            background: "#0a66c2",
          }}
        >
          <motion.svg
            className="fill-white transition-all"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </motion.svg>
        </motion.button>
      </a>
      <a
        href="https://github.com/T-Urud"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="h-12 w-12 grid place-items-center rounded-full outline outline-white outline-1 bg-transparent border-none"
          whileHover={{
            cursor: "pointer",
            outlineOffset: "3px",
            background: "#0F1419",
          }}
        >
          <motion.svg
            className="fill-white transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            height="16"
            width="16"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </motion.svg>
        </motion.button>
      </a>
    </div>
  );
};

export default Socials;
