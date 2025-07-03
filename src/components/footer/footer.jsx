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
    url1: "/about-us",
    url1Text: "About Us",
    url2: "/contact-us",
    url2Text: "Contact Us",
  },
  {
    url1: "#",
    url1Text: "ABC",
    url2: "#",
    url2Text: "Global Services",
  },
];

const Footer = () => {
  const texts = ["TIME TO"];
  const texts1 = ["ROAR!"];
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
      <div className="copyright">© 2024 All Rights Reserved</div>
    </footer>
    // )
  );
};
export default Footer;
