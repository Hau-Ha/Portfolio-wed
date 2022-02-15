import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import skill4 from "../pic/skill4.png";
import skill5 from "../pic/skill5.png";
import skill6 from "../pic/skill6.png";
import skill7 from "../pic/skill7.png";
import skill8 from "../pic/skill8.png";
import skill9 from "../pic/skill9.png";
import skill10 from "../pic/skill10.png";
import skill11 from "../pic/skill11.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Hau Ha</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  words={[" Front-End Developer.", " Software developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I am a passionate front-end developer, full of enthusiasm and
              future-oriented into a full-stack developer. I am always eager to
              learn new skills in order to increase the quality of my work. I am
              looking forward to a chance to work in the profession and
              contribute to the development of my future employer.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.facebook.com/kamikaze.ha">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://github.com/Hau-Ha">
                      <i class="fab fa-github"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/hau-ha-938977231/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow cursor-default">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill3} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill4} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill5} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill6} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill7} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill8} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill9} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill10} alt="" />
                </button>
                <button className="btn_shadow cursor-default">
                  <img src={skill11} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
