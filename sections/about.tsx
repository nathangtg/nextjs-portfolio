import React, { useState } from "react";
import TypingText from "../components/typing-animation/typing-text";
import { motion } from "framer-motion";
import AnimatedText from "../components/typing-animation/typing-text";

const About: React.FC = () => {
  const [isText1Done, setIsText1Done] = useState(false);

  const handleText1Complete = () => {
    setIsText1Done(true);
  };

  const aboutText1 =
    "Throughout my academic journey at Sunway College, pursuing a Diploma in Information Technology, I have cultivated a diverse skill set encompassing front-end and back-end development, programming languages, and web technologies. With a strong foundation in React, Angular, Laravel, SQL, and other cutting-edge tools, I am well-equipped to tackle complex software engineering challenges.";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatedText
            texts={[aboutText1]}
            onComplete={() => console.log("Animation completed")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
