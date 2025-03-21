"use client";
import Button from "@/components/button";
import Pointer from "@/components/pointer";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

const Hero = () => {
  const [leftDesignscope, leftDesignanimate] = useAnimate();
  const [leftPointerscope, leftPointeranimate] = useAnimate();

  const [rightDesignscope, rightDesignanimate] = useAnimate();
  const [rightPointerscope, rightPointeranimate] = useAnimate();


  useEffect(() => {
    leftDesignanimate([
      [leftDesignscope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    
    leftPointeranimate([
      [leftPointerscope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerscope.current, { x: 0, y: [0,16,0] }, { duration: 0.5,ease:'easeInOut' }],
    ]);

    rightDesignanimate([
      [rightDesignscope.current, { opacity: 1 }, { duration: 0.5,delay:1.5 }],
      [rightDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointeranimate([
      [
        rightPointerscope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerscope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerscope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

   
  }, []);
  return (
    <section
      className="py-24 overflow-x-clip "
      style={{
        cursor: `url(/cursor-you.svg),auto`,
      }}
    >
      <div className="container relative ">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            x: -100,
          }}
          ref={leftDesignscope}
          drag
          className=" absolute -left-24  top-16 hidden lg:block"
        >
          <Image
            draggable="false"
            src={"/design-example-1.png"}
            alt="Design example 1 image"
            height={320}
            width={240}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            x: -200,
          }}
          ref={leftPointerscope}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          drag
          ref={rightDesignscope}
          initial={{
            opacity: 0,
            y: 100,
            x: 100,
          }}
          className=" absolute -right-24  -top-4 hidden lg:block"
        >
          <Image
            draggable="false"
            src={"/design-example-2.png"}
            alt="Design example 2 image"
            height={640}
            width={300}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            x: 275,
          }}
          ref={rightPointerscope}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center ">
          <div className="inline-flex  py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised
          </div>
        </div>{" "}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl  text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layer combines powerful
          features with an intutive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button type="button" size="sm" className="whitespace-nowrap">
            {" "}
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
