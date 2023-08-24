import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Nelson</h3>

        <p>
          Je suis Nelson, le fondateur de Burger Shop.
          <br />
          Notre but est de créer le burger le plus savoureux de la planète.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
