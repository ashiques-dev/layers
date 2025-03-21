import Avatar from "@/components/avatar";
import Card from "@/components/card";
import Tag from "@/components/tag";
import Image from "next/image";
import React from "react";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium  text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>{" "}
        </h2>

        <div className="mt-12 grid md:grid-cols-4 lg:grid-cols-3 gap-8">
          <Card
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free editing"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image
                  className="size-full rounded-full"
                  src={"/avatar-ashwin-santiago.jpg"}
                  alt="avatar 1"
                  height={32}
                  width={32}
                />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image
                  className="size-full rounded-full"
                  src={"/avatar-florence-shaw.jpg"}
                  alt="avatar 2"
                  height={32}
                  width={32}
                />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image
                  className="size-full rounded-full"
                  src={"/avatar-ashwin-santiago.jpg"}
                  alt="avatar 3"
                  height={32}
                  width={32}
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full relative   bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  <Image
                    src={"/avatar-owen-garcia.jpg"}
                    alt=" avatar 4"
                    height={32}
                    width={32}
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </Card>
          <Card
            className="md:col-span-2 lg:col-span-1 group"
            title="Interactive Prototyping"
            description="
                Engage your client with prototypes that react to user action
              "
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center ">
                We&apos;ve achieved{" "}
                <span
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text relative
                "
                >
                  <video src="/gif-incredible.mp4 " autoPlay loop muted playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl  opacity-0 pointer-events-none group-hover:opacity-100  transition duration-500"></video>
                  <span className="">incredible</span>
                </span>{" "}
                growth this year
              </p>
            </div>
          </Card>
          <Card
            className="md:col-span-2 lg:col-span-1 md:col-start-2 group"
            title="Keyboard quick Actions"
            description="Powerful command to help you create design more quickly"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <div className="size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-neutral-950 font-medium w-28 outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 outline-transparent">
                shift
              </div>
              <div className="size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-neutral-950 font-medium outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 outline-transparent delay-150">
                alt
              </div>
              <div className="size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-neutral-950 font-medium outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 outline-transparent delay-300">
                C
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              className="bg-neutral-900 border-white/10 inline-flex border px-3 py-1.5 md:px-5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
              key={feature}
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45  tranistion duration-500 ">
                {" "}
                &#10038;{" "}
              </span>
              <span className="font-medium md:text-lg "> {feature} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
