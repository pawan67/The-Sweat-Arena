import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Home = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <>
      <div className="">
        <Navbar />
        <div className="w-1/1 mx-auto p-8 pt-6 flex gap-8  text-white">
          <div className="blur blurh"></div>
          <div className="w-3/4">
            <div className="mt-16 bg-black rounded-full max-w-fit px-6 py-4 relative flex items-center justify-start">
              <motion.div
                initial={{ left: "238px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition, type: "tween" }}
                className="absolute bg-gray-700 w-16 left-2 rounded-full h-4/5 z-10"
              ></motion.div>
              <span className="z-20 tracking-wider">
                TODAY IS THE BEST DAY TO START!
              </span>
            </div>
            <div className="relative mt-32 left-8 flex-3 z-30">
              <motion.span
                initial={{ left: "15rem" }}
                whileInView={{ left: "-1.5rem" }}
                transition={transition}
                className="absolute -z-10 -top-12 font-bold text-3xl md:text-9xl -left-6 muted"
              >
                STRONG
              </motion.span>
              <span className="z-20 text-2xl md:text-6xl font-bold">
                <sup className="font-thin">
                  <i class="uil uil-plus"></i>
                </sup>
                BE YOU, JUST STRONGER!
              </span>
              <br />
              <span className="z-20 text-2xl md:text-6xl md:ml-11 font-bold">
                POWER IS IN YOU
              </span>
              <h3 className="md:ml-11 mt-6 md:text-2xl">
                GET IN SHAPE WITH OUR PRO TRAINERS. REACH YOUR BODY GOALS IN NO
                TIME.
              </h3>
              <p className="mt-3 md:ml-11">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                mollitia quae repellendus delectus id voluptatum blanditiis nemo
                quod expedita?
                <br />
                Repudiandae nulla adipisci maxime consequatur voluptatum
                dolorum?
              </p>
              <button className=" px-6 mt-4 ml-11 hover:bg-black py-2 bg-transparent border-2 rounded-full">
                View More
              </button>
              <button className="px-6 mt-4 ml-11 bg-white text-black hover:bg-black hover:text-white py-2 bg-transparent border-2 hover:border-white  rounded-full">
                Get Started
              </button>
            </div>
            <div className="ml-11">
              <div>
                <span className="mt-10 ml-11 flex w-8/12 justify-between">
                  <h3 className="text-2xl font-thin">SPECIFIC PREPARATION</h3>
                  <h3 className="text-2xl font-thin">
                    <NumberCounter end={83} start={0} delay="2" postFix="%" />
                  </h3>
                </span>
                <div className="mt-4 relative ml-11 flex items-center h-0.5 w-8/12 bg-gray-800 ">
                  <motion.span
                    initial={{ width: "0" }}
                    whileInView={{ width: "83.333333%" }}
                    transition={{ ...transition, type: "tween" }}
                    className="absolute bg-white h-1 w-10/12 "
                  ></motion.span>
                </div>
              </div>
              <div>
                <span className="mt-10 ml-11 flex w-8/12 justify-between">
                  <h3 className="text-2xl font-thin">CARDIO CONDITIONING</h3>
                  <h3 className="text-2xl font-thin">
                    <NumberCounter end={58} start={0} delay="2" postFix="%" />
                  </h3>
                </span>
                <div className="mt-4 relative ml-11 flex items-center h-0.5 w-8/12 bg-gray-800 ">
                  <motion.span
                    initial={{ width: "0" }}
                    whileInView={{ width: "58.333333%" }}
                    transition={{ ...transition, type: "tween" }}
                    className="absolute bg-white h-1 w-7/12 "
                  ></motion.span>
                </div>
              </div>
              <div>
                <span className="mt-10 md:ml-11 flex w-8/12 justify-between">
                  <h3 className="text-2xl font-thin">NUTRITION SKILLS</h3>
                  <h3 className="text-2xl font-thin">
                    <NumberCounter end={91} start={0} delay="2" postFix="%" />
                  </h3>
                </span>
                <div className=" mt-4 relative ml-11 flex items-center h-0.5 w-8/12 bg-gray-800 ">
                  <motion.span
                    initial={{ width: "0" }}
                    whileInView={{ width: "91.666667%" }}
                    transition={{ ...transition, type: "tween" }}
                    className="absolute bg-white h-1 w-11/12"
                  ></motion.span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12 relative">
            <motion.div
              initial={{ right: "-1rem" }}
              whileInView={{ right: "6rem" }}
              transition={transition}
              className="flex-col gap-4 bg-gray-700 p-4 items-start rounded-md right-24 absolute top-28"
            >
              <img className="w-8 mb-2" src="/heart.png" alt="" />
              <div className="text-slate-500">Heart Rate</div>
              <div className="text-2xl">114 bpm</div>
            </motion.div>
            <div className="relative mt-40">
              <div className="absolute right-40 wid">
                <img className="w-full block" src="/hero_image.png" alt="" />
              </div>
              <motion.img
                initial={{ right: "11rem" }}
                whileInView={{ right: "24rem" }}
                transition={transition}
                className="absolute -top-40 right-96 w-80 -z-10"
                src="/hero_image_back.png"
                alt=""
              />
            </div>
            <motion.div
              initial={{ left: "-40rem" }}
              whileInView={{ left: "-20rem" }}
              transition={transition}
              className="absolute bottom-32 -left-80 flex items-center h-24 w-max p-2  gap-8 rounded-md bg-slate-900"
            >
              <img className="w-12 m-2" src="/calories.png" alt="" />
              <div>
                <div className="text-slate-700 w-max">Calories Burned</div>
                <div className="text-2xl">340 kcal</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
