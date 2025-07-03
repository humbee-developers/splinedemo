"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anime";
// import Image from "next/image";
// import logo from "@/ImagesNew/new_Logo_Final.png";
import styles from "./style.module.css";

export default function Preloader({ counter }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up dimensions on mount
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Set up a timer to hide the preloader after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10000ms = 10 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1], delay: 2.95 },
    },
  };

  const circleStrokeLength = 2 * Math.PI * 95; // Circumference of the circle

  return (
    <>
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={styles.introduction}
        >
          <motion.div variants={opacity} initial="initial" animate="enter">
            <div className={styles.loader}></div>
            <div className={styles.logoImageOuter}>
              <p>logo</p>
              {/* <Image className={styles.logoImage} src={logo} alt="Logo" /> */}
            </div>
            {/* <div className={styles.loadingCounter}>{loadedFrames}</div> */}
          </motion.div>

          {/* <div className={styles.circleCenter}>
            <svg className={styles.border} height="200" width="200">
              <circle
                className={styles.circle}
                cx="100"
                cy="100"
                r="95"
                stroke="white"
                strokeWidth="3"
                fillOpacity="0"
                strokeDasharray={circleStrokeLength}
                strokeDashoffset={circleStrokeLength * (loadedFrames / 100)}
              />
            </svg>
          </div> */}
          <div>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </div>
        </motion.div>
      )}
    </>
  );
}
