"use client";
import styles from "./ModelFour.module.css";
// import Spline from '@splinetool/react-spline';
import Spline from "@splinetool/react-spline/next";
function ModelTwo() {
  return (
    <div className={styles.Text}>
      {/* https://prod.spline.design/zocE9A5a00403jsP/scene.splinecode  */}
      {/* transporattion app 3d  -- spline demo 4 */}
      <Spline
        scene="https://prod.spline.design/zocE9A5a00403jsP/scene.splinecode"
        className={styles.Spliendesign}
      />
    </div>
  );
}
export default ModelTwo;
