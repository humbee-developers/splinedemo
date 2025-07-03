"use client";
import "./footer.scss";
import LinkHover from "../linkHover/LinkHover";
import { usePathname } from "next/navigation";
// import Image from "next/image";
// import BigText from "../bigTextHeading/BigText";
// import image_logo from "@/ImagesNew/new_Logo_Final.png";
import Link from "next/link";

const footerUrls = [
  {
    url1: "/splinedemo2",
    url1Text: "Spline Demo 2 ",
    url2: "/splinedemo3",
    url2Text: "Spline Demo 3",
  },
  {
    url1: "/splinedemo4",
    url1Text: "Spline Demo 4",
    url2: "/splinedemo5",
    url2Text: "Spline Demo 5",
  },
];

const Footer = () => {
  // const texts = ["TIME TO"];
  // const texts1 = ["ROAR!"];
  const pathname = usePathname();
  console.log("url", pathname);
  return (
    // (pathname === "/") && (
    <footer>
      {/* <div>
        <div>
          <BigText
            texts={texts}
            xDirection={"-40px"}
            X1Direction={"100px"}
            X2Direction={"100%"}
          />
          <BigText
            texts={texts1}
            xDirection={"200px"}
            X1Direction={"100px"}
            X2Direction={"100%"}
          />
        </div>
      </div> */}
      <nav>
        <Link href={"/"}>
        <p>footer logo</p>
          {/* <Image src={image_logo} alt="none" className="ImageFooterLogo"/> */}
        </Link>
        {footerUrls.map((item, index) => (
          <ul key={index}>
            <li>
              <LinkHover
                url={item.url1}
                text={item.url1Text}
                color={"#fff"}
                borderColor={"white"}
                fontSize={"16px"}
              />
            </li>
            <li key={index}>
              <LinkHover
                url={item.url2}
                text={item.url2Text}
                color={"#fff"}
                borderColor={"white"}
                fontSize={"16px"}
              />
            </li>
          </ul>
        ))}
      </nav>
      <div className="copyright">© 2025 All Rights Reserved</div>
    </footer>
    // )
  );
};
export default Footer;
