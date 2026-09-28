import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Hi, I'm <span>Unda</span>
        </h1>

        <h2>
          <TypeAnimation
            sequence={[
              "Computer Science Student",
              2000,
              "Web Developer",
              2000,
              "Software Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>I enjoy learning new technologies and building web applications.</p>
      </div>

      <Tilt>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Laptop"
          className={styles.image}
        />
      </Tilt>
    </section>
  );
}

export default Hero;
