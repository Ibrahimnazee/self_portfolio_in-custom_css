import React from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title text-2xl md:text-4xl font-bold text-center my-6" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle text-lg md:text-xl text-center block mb-6" data-aos="zoom-in">
        Most recent work
      </span>
      <div > </div>
      <Project
        projects={[
          {
            imageURL: "/MBFX.PNG",
            title: "Minhaaj Design Factor",
            demo: "https://ibrahim-interrior-design-webiste.netlify.app/",
            description: `
              <p>This project is a fully responsive one-page website built using Next.js and Tailwind CSS. It includes five pages that demonstrate modern web development techniques, including custom loading and error pages. The project serves as a portfolio-style website showcasing my work, social media links, and more.</p>
              `
          },
          {
            imageURL: "/fdm.png",
            title: "Figma Design WebSite",
            demo: "https://ibrahimfigmadesigntemplate4.netlify.app/",
            description: `
              <p>This project is a fully responsive one-page website built using Next.js and Tailwind CSS. It includes five pages that demonstrate modern web development techniques, including custom loading and error pages. The project serves as a portfolio-style website showcasing my work, social media links, and more.</p>
              `
          },
         
          {
            imageURL: "/sfd1.png",
            title: "Shop Website Assigment",
            demo: "https://ibrahimassignment4.netlify.app/",
            description: `<p>
            This project is a pixel-perfect web pages with Next.js and Tailwind CSS, using Figma designs as a blueprint. This powerful combination allows for rapid development, optimized performance, and stunning visuals. By leveraging the strengths of both tools, you can effortlessly transform your design ideas into functional, responsive websites.</p>`,
          },
          {
            imageURL: "/fdm.png",
            title: "Figma Design WebSite",
            demo: "https://ibrahimfigmadesigntemplate4.netlify.app/",
            description: `
              <p>This project is a fully responsive one-page website built using Next.js and Tailwind CSS. It includes five pages that demonstrate modern web development techniques, including custom loading and error pages. The project serves as a portfolio-style website showcasing my work, social media links, and more.</p>
              `
          },
        
          {
            imageURL: "/BookLand.JPG",
            title: "Class Assigment",
            demo: "https://assignment3-figmadesign.vercel.app/",
            description:
              "This project is a web page using React and TypeScript (TSX) by breaking the layout into reusable components for better maintainability and scalability. Each component was created in its own .tsx file and imported into the main page.tsx. I applied creative styling, including unique image borders and positioning techniques, to make the design visually appealing. The project is fully functional, and you can view the live version deployed on Vercel. The complete code is available on GitHub for reference. This project was a great opportunity to strengthen my skills in frontend development, modular design, and deployment.",
          },
        ]}
      />
    </section>
  );
};

export default Projects;
