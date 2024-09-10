import React from "react";
import { motion } from "framer-motion";

const ClickComponent = ({ villaData, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isHover ? { opacity: 1 } : 0}
      transition={{ duration: 0.4 }}
      className="absolute bottom-0 rounded-2xl bg-[#f8f9f9] w-full h-full z-10"
    >
      <div className="px-2 py-4 bg-white rounded-2xl cursor-pointer">
        <div className="flex justify-between w-full z-20 mb-2">
          <h1 className="font-bold text-sm">{villaData.title}</h1>
          <div className="flex">
            <span className="text-sm font-semibold">{villaData.price}</span>
            <span className="text-sm font-light">/nuit</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              <span className="text-xs">Rating</span>
              <div className="max-w-10 flex items-center">
                <progress
                  value={villaData.rating}
                  max={5}
                  className="max-w-full"
                  id="blackProgress"
                />
              </div>
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
                <span className="text-xs font-semibold">
                  {villaData.location}
                </span>
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
            <ul>
              {villaData.equipments.map((equipment, index) => (
                <li key={index} className="text-xs text-gray-500">
                  {equipment}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button className="text-xs  w-full rounded-full p-1 border border-black font-semibold hover:bg-[#e2e2e2]">
              Tous les équipements
            </button>
          </div>
        </div>
        <div className="mb-3">
          <p className="text-xs">{villaData.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="cursor-pointer"
                initial={{ fill: "#f8f9f9", stroke: "black" }}
                whileHover={{ fill: "#ff3232" }}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </motion.svg>
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="fill-black stroke-black cursor-pointer"
              >
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
              </svg>
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex justify-center items-center">
              <a
                href="http://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./user_pp.jpg"
                  alt={villaData.host}
                  className="max-h-[40px] max-w-[40px] w-full h-full rounded-full object-cover"
                />
              </a>
            </div>
            <h2 className="font-semibold text-sm">{villaData.host}</h2>
          </div>
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
