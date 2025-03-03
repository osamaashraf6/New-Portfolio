import "./hero.css";
import herotAnimation from "../../animation/hero.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: "100" }}
            src="img/osama.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          I'm Osama Ashraf Mern Stack Developer
        </motion.h1>
        <p className="sub-title">
          I’m a Mern-Stack web developer with a strong passion for creating
          visually appealing and user-friendly web applications. I am very
          passionate about improving my coding skills & developing applications
          & websites I have also gained a solid foundation in HTML, CSS, and
          JavaScript, React JS and Node Js, MongoDb and Express Js. I am always
          eager to learn new technologies and techniques to enhance my skillset.
        </p>
        <div className="all-icons flex">
          <a
            className="icon icon-github"
            href="https://github.com/osamaashraf6"
            target="_blank"
          ></a>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/osamaashraf6/"
            target="_blank"
          ></a>
        </div>
      </div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1.1)" }}
        transition={{ damping: 6, type: "spring", stiffness: "100" }}
        className="right-section animation  "
      >
        <Lottie
          className="herotAnimation "
          style={{}}
          animationData={herotAnimation}
        />
      </motion.div>
    </section>
  );
}
