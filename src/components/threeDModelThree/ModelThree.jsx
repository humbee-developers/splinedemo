"use client";
import styles from "./ModelThree.module.css";
// import Spline from '@splinetool/react-spline';
import Spline from "@splinetool/react-spline/next";
function ModelTwo() {
  return (
    <div className={styles.Text}>
      {/* <p>3d Model</p> */}
      {/* https://prod.spline.design/ndD4il4OtxmitfaW/scene.splinecode */}
      {/* abstract radial loader --- spline demo3 */}
      <Spline
        scene="https://prod.spline.design/ndD4il4OtxmitfaW/scene.splinecode"
        className={styles.Spliendesign}
      />
    </div>
  );
}
export default ModelTwo;
