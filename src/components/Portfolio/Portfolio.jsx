import React from "react";
import styles from "./Portfolio.module.css";

function Portfolio() {
  const projects = [
    {
      title: "Web Application",
      description:
        "A web application project built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "IoT Project",
      description: "An IoT project using sensors and microcontrollers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Database Project",
      description: "A database project using MongoDB and Express.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>My Portfolio</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
