"use client";
import { useEffect } from "react";
import ModelThree from "@/components/threeDModelThree/ModelThree";
import "./splinedemo3.css";
function ContactUs() {
  useEffect(() => {
    document.title = "Spline Demo 3";
  });
  return (
    <>
      <div>
        <ModelThree />
      </div>
    </>
  );
}
export default ContactUs;
