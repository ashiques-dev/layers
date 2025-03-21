"use client";
import { TIntegrations } from "@/sections/integrations";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const IntegrationColumn = (props: {
  integrations: TIntegrations;
  className?: string;
  reverse?: boolean;
}) => {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
      className={twMerge(
        "flex flex-col gap-4 pb-4 pointer-events-none ",
        className
      )}
    >
      {[...integrations, ...integrations].map((integration, index) => (
        <div
          key={index}
          className=" bg-neutral-900  border border-white/10  rounded-3xl p-6"
        >
          <div className=" flex justify-center ">{integration.icon}</div>
          <h3 className="text-3xl text-center mt-6">{integration.name} </h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default IntegrationColumn;
