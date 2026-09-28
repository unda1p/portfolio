import React from "react";
import styles from "./Number.module.css";

function Number() {
  const numbers = [
    { number: 10, label: "Projects" },
    { number: 5, label: "Technologies" },
    { number: 100, label: "Commits" },
  ];

  return (
    <section className={styles.number}>
      {numbers.map((item) => (
        <div className={styles.item} key={item.label}>
          <h2>{item.number}+</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Number;
