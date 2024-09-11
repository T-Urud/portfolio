import React from "react";
import { motion } from "framer-motion";

const ClickComponent = ({ projectData, isHover }) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={isHover ? { opacity: 1 } : 0}
      // transition={{ duration: 0.4 }}
      className="absolute bottom-0 rounded-2xl bg-[#f8f9f9] w-full h-full z-10"
    >
      <div className="px-2 py-4 bg-white rounded-2xl cursor-pointer">
        <div className="flex justify-between w-full z-20 mb-2">
          <h1 className="font-bold text-sm">{projectData.title}</h1>
          <div className="flex">
            <span className="text-sm font-semibold">{projectData.id}</span>
            <span className="text-sm font-light">/nuit</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              <span className="text-xs">Rating</span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="12"
                  height="12"
                >
                  <path
                    fill="#000000"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
                <span className="text-xs font-semibold">{projectData.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="overflow-y-auto max-h-[208.72px] scroll-smooth p-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="12"
                viewBox="0 0 512 512"
                className="fill-[#ff3232]"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </div>
            <h2 className="font-semibold text-sm">Guest favorite</h2>
          </div>
          <p className="font-light text-[0.7rem] text-gray-400">
            One of the most loved homes on Airbnb based on ratings, reviews, and
            reliability
          </p>
        </div>
        <div className="mb-3">
          <h2 className="font-semibold text-sm">What this place offer</h2>
          <div>
            {/* <ul>
              {projectData.technos.map((techno, index) => (
                <li key={index} className="text-xs text-gray-500">
                  {techno}
                </li>
              ))}
            </ul> */}
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button className="text-xs  w-full rounded-full p-1 border border-black font-semibold hover:bg-[#e2e2e2]">
              Tous les équipements
            </button>
          </div>
        </div>
        <div className="mb-3">
          <p className="text-xs">{projectData.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={projectData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16"
              height="16"
              className="fill-black stroke-black"
            >
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <span> {projectData.link}</span>
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-0 w-full py-2 px-3 bg-white rounded-2xl">
        <button className="bg-[#49ff00] focus:outline-none font-semibold rounded-full text-xs p-2 dark:bg-[#49ff00] w-full my-2">
          Réserver
        </button>
      </div>
    </motion.div>
  );
};

export default ClickComponent;
