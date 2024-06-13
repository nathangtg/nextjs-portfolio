import React, { useState } from "react";
import rotatingMachine from "../../public/assets/rotating-machine.gif";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../navlink/navlink";

export default function TimeMachine() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex">
      <button
        className="hover:text-teal-300 absolute bottom-4 left-4 lg:right-0 lg:left-auto inline-flex items-center 
                    sm:px-2 sm:py-4 md:px-2 md:py-4 lg:m-0 lg:p-0 font-medium text-slate-400 hover:translate-y-4
                    focus-visible:text-teal-300"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isExpanded}
        onClick={handleClick}
      >
        <Image
          alt="Rotating Machine"
          width="86"
          height="86"
          src={rotatingMachine}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { delay: 0.5 },
            }}
          >
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute bg-black w-full h-1/4"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                style={{ top: `${index * 25}%` }}
              />
            ))}
            <motion.div
              className="absolute bg-white w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 1) 2%, rgba(26, 27, 51, 1) 30%, rgba(19, 14, 59, 1) 58%, rgba(24, 18, 34, 1) 98%)",
              }}
              transition={{ delay: 2 }}
              exit={{
                x: "100vw",
                transition: { duration: 0.5 },
              }}
            >
              <div className="bg-black shadow-lg p-4 rounded-md relative px-12">
                <motion.button
                  className="absolute top-2 right-2 text-white bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={handleClose}
                  aria-label="Close"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                <h2 className="text-lg font-bold mb-2">Previous Versions</h2>
                <a
                  className={`group flex items-center py-3`}
                  href="https://nathangtg.vercel.app/"
                  target="_blank"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Version 1
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
