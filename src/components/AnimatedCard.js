import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ClickComponent from "./ClickComponent";

const AnimatedCard = () => {
  const [isHover, setIsHover] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((res) => {
        setProjectData(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="flex flex-col justify-between md:flex-row md:flex-wrap">
      {error ? (
        <div>{error}</div>
      ) : projectData.length > 0 ? (
        projectData.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full h-[350px] max-w-[352.8px] shadow-xl rounded-3xl m-[10px] md:max-w-[calc(50%-20px)]"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
          >
            <img
              src="/landscape_art_road_127350_800x600.jpg"
              alt=""
              className="h-full object-cover w-full rounded-3xl"
            />
            <div className="w-full h-full absolute top-0">
              {isClicked ? (
                <ClickComponent projectData={project} isHover={isHover} />
              ) : (
                <motion.div
                  onClick={handleClick}
                  initial={{ height: "37.6px", overflow: "hidden" }}
                  animate={
                    isHover
                      ? { height: "121.6px", overflow: "none" }
                      : { height: "37.6px", overflow: "hidden" }
                  }
                  transition={{ duration: 0.6 }}
                  className={
                    isClicked
                      ? "absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-2 rounded-2xl bg-transparent backdrop-blur-sm w-full h-full z-10 cursor-pointer"
                      : "absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-2 rounded-2xl bg-transparent backdrop-blur-sm mb-2 w-[90%] z-10 h-full cursor-pointer"
                  }
                >
                  <div className="flex justify-between w-full z-20 mb-2">
                    <h1 className="text-white font-semibold text-sm">
                      {project.title}
                    </h1>
                    <div className="flex">
                      <span className="text-white text-sm font-semibold">
                        {project.id}
                      </span>
                      <span className="text-white text-sm font-light">
                        /nuit
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          width="16"
                          height="16"
                        >
                          <path
                            fill="#ffffff"
                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                          />
                        </svg>
                        <span className="text-xs text-white font-semibold">
                          {project.techno}
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      {isHover && (
                        <motion.button
                          initial={{ x: "100px" }}
                          animate={{ x: 0 }}
                          transition={{ duration: 1.1 }}
                          className="text-white w-full bg-gray-900 focus:outline-none font-semibold rounded-full text-xs p-2 dark:bg-gray-900"
                        >
                          Plus d'infos
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default AnimatedCard;
