import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <h2>Let's Connect</h2>

      <p>
        Feel free to contact me for projects, collaboration, or opportunities.
      </p>

      <div className={styles.links}>
        <a href="https://github.com/unda1p" target="_blank" rel="noreferrer">
          <FaGithub />
          GitHub
        </a>

        <a href="mailto:unda.p@ku.th">
          <FaEnvelope />
          Email
        </a>
      </div>

      <p className={styles.copy}>© 2026 Unda Punosing. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
