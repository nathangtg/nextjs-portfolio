import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <h1 className="pb-12 my-14 text-3xl font-bold text-slate-200 mb-24">
        About
      </h1>
      <div className="py-8 my-12">
        <p className="mb-4">
          Throughout my academic journey at Sunway College, pursuing a Diploma
          in Information Technology, I have cultivated a diverse skill set
          encompassing front-end and back-end development, programming
          languages, and web technologies. With a strong foundation in React,
          Angular, Laravel, SQL, and other cutting-edge tools, I am
          well-equipped to tackle complex software engineering challenges.
        </p>
        <br />
        <p className="mb-4">
          My internships and volunteer experiences have provided me with
          hands-on opportunities to apply my knowledge, contributing to projects
          like building a next-generation IDE for React Native and optimizing
          event websites. Beyond technical proficiency, I possess a deep
          commitment to delivering user-centric solutions, rooted in
          collaboration, attention to detail, and a drive to bring innovative
          visions to life.
        </p>
        <br />
      </div>
    </section>
  );
};

export default About;
