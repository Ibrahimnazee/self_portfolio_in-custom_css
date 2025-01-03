import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="about section py-16 lg:py-32" id="about">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4" data-aos="zoom-in">
        About Me
      </h2>
      <span
        className="block text-center text-base md:text-lg text-gray-600 mb-8 md:mb-10"
        data-aos="zoom-in"
      >
        My introduction
      </span>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28 px-6 lg:px-24">
        {/* Image Section */}
        <Image
          src="/About.jpg"
          alt="About Image"
          className="rounded-lg max-w-full h-auto"
          data-aos="fade-right"
          width={350}
          height={350}
          priority
        />

        {/* Content Section */}
        <div className="text-center lg:text-left max-w-3xl">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            {/* Experience Box */}
            <div
              className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center w-32 md:w-36"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <i className="uil uil-award text-xl md:text-2xl text-indigo-600 mb-2 block"></i>
              <h3 className="text-sm md:text-base font-semibold">Experience</h3>
              <span className="text-gray-500 text-xs md:text-sm">Fresher</span>
            </div>

            {/* Worked On Box */}
            <div
              className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center w-32 md:w-36"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <i className="uil uil-suitcase-alt text-xl md:text-2xl text-indigo-600 mb-2 block"></i>
              <h3 className="text-sm md:text-base font-semibold">Worked On</h3>
              <span className="text-gray-500 text-xs md:text-sm">Few projects</span>
            </div>

            {/* Qualification Box */}
            <div
              className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center w-32 md:w-36"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <i className="uil uil-graduation-cap text-xl md:text-2xl text-indigo-600 mb-2 block"></i>
              <h3 className="text-sm md:text-base font-semibold">Qualification</h3>
              <span className="text-gray-500 text-xs md:text-sm">BS Mech</span>
            </div>
          </div>

          <p
            className="text-gray-700 text-sm md:text-base leading-relaxed px-2 md:px-0 mb-8"
            data-aos="zoom-in"
          >
            I am a Front-End developer with a strong foundation in building responsive and
            user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frontend
            frameworks like React, with experience in Tailwind CSS for styling.
          </p>

          {/* Download CV Button */}
          <a
            href="/Muhammad-Ibrahim.pdf"
            download="Muhammad-Ibrahim.pdf"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
            data-aos="flip-right"
          >
            Download CV
            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.25 22.75H9.25C3.82 22.75 1.5 20.43 1.5 15V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z" />
              <path d="M22.25 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2a.75.75 0 0 1 .75-.75c.27 0 .53.1.72.3l8 8a.75.75 0 0 1-.72 1.22zm-7-7v2.19c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44z" />
              <path d="M13.25 13.75h-6a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 0 1.5zm-2 4h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 0 1.5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
