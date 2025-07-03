"use client";
import styles from "./ModelTwo.module.css";
// import Spline from '@splinetool/react-spline';
import Spline from "@splinetool/react-spline/next";
function ModelTwo() {
  return (
    <div className={styles.Text}>
      {/* <p>3d Model</p> */}
      {/* https://prod.spline.design/ZZVzMerHc3SMPfgk/scene.splinecode */}
      {/* loop cards --spline demo 2 */}
      <Spline
        scene="https://prod.spline.design/ZZVzMerHc3SMPfgk/scene.splinecode"
        className={styles.Spliendesign}
      />
    </div>
  );
}
export default ModelTwo;
