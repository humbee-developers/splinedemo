"use client";
import { useEffect } from "react";
import ModelFive from "@/components/threeDModelFive/ModelFive";
import "./splinedemo5.css";
function ModelFiveSpline() {
  useEffect(() => {
    document.title = "Spline Demo 5";
  });
  return (
    <>
      <div>
        <ModelFive />
      </div>
    </>
  );
}
export default ModelFiveSpline;
