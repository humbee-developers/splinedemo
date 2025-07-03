"use client";
import styles from "./ModelFive.module.css";
// import Spline from '@splinetool/react-spline';
import Spline from "@splinetool/react-spline/next";
function ModelTwo() {
  return (
    <div className={styles.Text}>
      {/* https://prod.spline.design/n3BTnBwaoKMcpWlv/scene.splinecode  */}
      {/* crypto  -- spline demo 5 */}
      <Spline
        scene="https://prod.spline.design/n3BTnBwaoKMcpWlv/scene.splinecode"
        className={styles.Spliendesign}
      />
    </div>
  );
}
export default ModelTwo;
