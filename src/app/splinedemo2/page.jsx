
"use client"
import { useEffect } from "react";
import Modeltwo from "@/components/threeDModelTwo/ModelTwo";

const SplineDemo2 = () => {
  useEffect(() => {
    document.title =
        "Spline Demo 2";
});
  return (
    <>
      <div>
        <Modeltwo />
      </div>
    </>
  );
};
export default SplineDemo2;
