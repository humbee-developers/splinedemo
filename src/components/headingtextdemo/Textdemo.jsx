"use client"
import BigText from "../bigTextHeading/BigText";
import styles from "@/components/headingtextdemo/Work.module.css";
const Textdemo = () => {
  const texts = ['RECENT',];
  const texts1 = ['WORK'];

  return (
    <>
    <div className={styles.MainContainer}>
    <div>
      <BigText texts={texts} xDirection={"-40px"} X1Direction={"100px"} X2Direction={"100%"}/>
      <BigText texts={texts1} xDirection={"200px"} X1Direction={"100px"} X2Direction={"100%"}/>
    </div>
    </div>
    </>
  );
};

export default Textdemo;
