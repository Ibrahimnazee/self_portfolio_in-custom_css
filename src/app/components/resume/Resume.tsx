import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section py-16" id="resume">
      <h2
        className="section_title text-3xl font-semibold text-center mb-4"
        data-aos="zoom-in"
      >
        Resume
      </h2>
      <span
        className="section_subtitle text-lg text-gray-600 text-center block mb-8"
        data-aos="zoom-in"
      >
        My personal journey
      </span>

      <div className="resume_container container grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Mechanical Engineering",
              location: "Indus University, Karachi",
              calender: "Present",
            },
            {
              title: "DAE In Mechanical",
              location: "SMA Rizvi Textile Institute Institute, Karachi",
              calender: "2017 - 2019",
            },
            {
              title: "Matriculation",
              location: "Al-Noor Islamic Secondary School, Karachi",
              calender: "2012 - 2014",
            },
          ]}
        />

        <ResumeBox
          heading="Learning"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "Front-End Developer",
              location: "Governor House Sindh Karachi",
              calender: "February 2024 - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
