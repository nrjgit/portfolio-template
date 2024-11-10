// src/hoc/SectionWrapper.js

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, options = {}) => {
  const HOC = (props) => {
    const {
      variants = staggerContainer(), // allows custom variants if needed
      initial = "hidden",
      whileInView = "show",
      viewport = { once: false, amount: 0.25 },
    } = options;

    return (
      <motion.section
        variants={variants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {idName && (
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
        )}
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
