"use client";
import { useEffect } from "react";
import ModelFour from "@/components/threeDModelFour/ModelFour";
import "./splinedemo4.css";
function ModelFourSpline() {
  useEffect(() => {
    document.title = "Spline Demo 4";
  });
  return (
    <>
      <div>
        <ModelFour />
      </div>
    </>
  );
}
export default ModelFourSpline;
