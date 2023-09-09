import React from "react";
import Styles from "../styles/modules/todoItem.module.scss";
import { motion } from "framer-motion";

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unChecked: {
    pathLength: 0,
  },
};

const boxVariant= {
  checked: {
    background: 'var(--primaryPurple)',
    transition: { duration: 0.1 }
  },
  unChecked: {
    background: 'var(--gray-1)',
    transition: { duration: 0.1 }
  }
}

export default function Checkbox({ checked, setChecked }) {
  return (
    <>
      <motion.div
        className={Styles.svgBox}
        variants={boxVariant}
        animate={checked ? "checke" : "uncheckde"}
        onClick={() => {
          console.log("checked");
        }}
      >
        <motion.svg
          className={Styles.svg}
          viewBox="0 0 53 38"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.path
          variants={checkVariants}
            fill="none"
            strokeMiterlimit="10"
            d="M1.5 22L16 36.5L51.5 1"
          />
        </motion.svg>
      </motion.div>
    </>
  );
}
