import React from "react";
import styles from "./Buttons.module.scss";
import { motion } from "framer-motion";

import PauseBtn from "./Icons/PauseBtn";
import StartBtn from "./Icons/StartBtn";
import RewindBtn from "./Icons/RewindBtn";

const variants = {
  beforeStartLeft: {
    left: "50%",
    transform: "translate(-50%, 0)",
  },

  afterStartLeft: {
    left: 0,
    transform: "translate(0%, 0)",
  },
  beforeStartRight: {
    right: "50%",
    transform: "translate(-50%, 0)",
  },

  afterStartRight: {
    right: 0,
    transform: "translate(0%, 0)",
  },
};

export default function Buttons({
  pause,
  setPause,
  onComplete,
  initialStart,
  setInitialStart,
  playFocus,
}) {
  const start = () => {
    !initialStart && setInitialStart(!initialStart);
    !initialStart && playFocus();
    setPause(!pause);
  };

  return (
    <div className={styles.buttons}>
      <motion.div
        style={{ position: "relative" }}
        variants={variants}
        initial="beforeStartLeft"
        animate={!initialStart ? "beforeStartLeft" : "afterStartLeft"}
        transition={{ type: "spring", damping: 20, stiffness: 350 }}
        onClick={start}
      >
        {!pause ? <StartBtn /> : <PauseBtn />}
      </motion.div>

      {initialStart && (
        <motion.div
          variants={variants}
          initial="beforeStartRight"
          animate="afterStartRight"
          transition={{ type: "spring", damping: 20, stiffness: 350 }}
          onClick={onComplete}
        >
          <RewindBtn />
        </motion.div>
      )}
    </div>
  );
}
