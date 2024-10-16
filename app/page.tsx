"use client";

import Image from "next/image";
import Link from "next/link";

// Icons
import ArrowDown from "@/app/public/arrow-down.svg";
import LinkedIn from "@/app/public/linkedin-3.svg";
import Github from "@/app/public/github-3.svg";
import Email from "@/app/public/gmail-3.svg";
import { useState } from "react";

export default function Home() {
  const [activeSkill, setActiveSkill] = useState("DevOps");
  const [activeText, setActiveText] = useState(
    "Specializing in DevOps, with a focus on automation, CI/CD pipelines, and cloud infrastructure. Ensures efficient deployments and scalable systems."
  );
  const [activeTools, setActiveTools] = useState([
    "Deployment",
    "CI/CD",
    "DNS",
  ]);
  const [activeItems, setActiveItems] = useState([
    "AWS",
    "Docker/Kubernetes",
    "HTTP/HTTPS",
  ]);

  // Switch handler for changing skills
  const changeSkills = (text: string) => {
    if (text != activeSkill) {
      switch (text) {
        case "DevOps":
          setActiveSkill("DevOps");
          setActiveText(
            "Specializing in DevOps, with a focus on automation, CI/CD pipelines, and cloud infrastructure. Ensures efficient deployments and scalable systems."
          );
          setActiveTools(["Deployment", "CI/CD", "DNS"]);
          setActiveItems(["AWS", "Docker/Kubernetes", "HTTP/HTTPS"]);
          break;
        case "Frontend":
          setActiveSkill("Frontend");
          setActiveText(
            "An expertise in responsive design, accessibility, and performance optimization. Delivers user-friendly, high-performance web interfaces"
          );
          setActiveTools(["UI/UX", "Responsive", "SPA"]);
          setActiveItems(["Next.js", "Tailwind", "Typescript"]);
          break;

        case "Backend":
          setActiveSkill("Backend");
          setActiveText(
            "With a focus on scalable architectures, database optimization, and security. Ensures efficient data handling and reliable server performance for robust applications."
          );
          setActiveTools(["REST API", "Databases", "Security"]);
          setActiveItems(["Node.js", "JWT", "SQL/NOSQL"]);
          break;
        default:
          console.log("Skill not recognized.");
          break;
      }
    }
  };

  // Main page content
  return (
    <main className="overflow-hidden">
      {/* Hero details  */}
      <div className="bg-gradient-to-tr from-pink-900 via-purple-900 to-cyan-700 h-screen p-2 font-serif flex flex-col items-center justify-center">
        {/* Title/Subtitle */}
        <div className="flex flex-col items-center w-full animate-fadeIn mb-4">
          <h1 className="text-5xl font-bold">Raul Calero</h1>
          <h2 className="text-xl italic">Full Stack Developer</h2>
        </div>

        {/* Brief Description */}
        <div className="bg-gray-700/60 p-2 rounded-md">
          <p className="text-md flex w-full justify-center items-center text-center">
            Delivering seamless web experiences through efficient back-end and
            cloud infrastructure.
          </p>
        </div>

        {/* Socials */}
        <ul className="flex w-1/2 justify-evenly mt-4">
          <li>
            <Link href={"https://www.linkedin.com/in/raulcalero/"}>
              <Image src={LinkedIn} height={30} alt="LinkedIn" />
            </Link>
          </li>

          <li>
            <Link href={"https://github.com/TheCaptainKimchi"}>
              <Image src={Github} height={30} alt="Github" />
            </Link>
          </li>

          <li>
            <Link href={"mailto:raulcalero7@gmail.com"}>
              <Image src={Email} height={30} alt="Email" />
            </Link>
          </li>
        </ul>

        <Image
          src={ArrowDown}
          alt="arrow-down"
          height={50}
          className="mt-6 animate-bounce opacity-90"
        />
      </div>

      {/* Skill Details */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-cyan-900 h-screen w-screen border-[1px]">
        {/* Description Text */}
        <h2 className="text-2xl font-bold mb-1">Skills</h2>
        {/* Switch buttons */}
        <div className="w-full flex items-center justify-evenly mb-4">
          <button
            className="btn bg-gray-800 rounded-md w-fit py-1 px-2"
            onClick={() => changeSkills("DevOps")}
          >
            DevOps
          </button>
          <button
            className="btn bg-gray-800 rounded-md w-fit py-1 px-2"
            onClick={() => changeSkills("Frontend")}
          >
            Frontend
          </button>
          <button
            className="btn bg-gray-800 rounded-md w-fit py-1 px-2"
            onClick={() => changeSkills("Backend")}
          >
            Backend
          </button>
        </div>

        {/* Grid */}
        <div className="w-3/4 h-1/2">
          <div className="flex w-full h-1/2">
            <div className="w-full h-[90%] border-[1px] flex items-center p-2">
              <p className="text-center">{activeText}</p>
            </div>
          </div>
          <div className="flex w-full h-1/2">
            <div className="w-3/4 h-5/6 border-[1px] mr-2">
              <ul className="flex flex-col items-center justify-center h-full">
                {activeTools.map((tool, index) => {
                  return <li key={index}>{tool}</li>;
                })}
              </ul>
            </div>
            <div className="w-3/4 h-5/6 border-[1px]">
              <ul className="flex flex-col items-center justify-center h-full text-sm">
                {activeItems.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Details */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 via-black to-slate-700 h-screen w-screen">
        <h2 className="text-2xl font-bold mb-1">Projects</h2>

        {/* Experience Cards */}
        <div className="w-11/12 h-1/2">
          <div className="flex w-full h-1/3 my-[1rem]">
            <div className="flex flex-col justify-center w-3/4 border-2 rounded-lg p-2">
              <h3 className="text-lg font-bold">SparkGG</h3>
              <p className="text-sm">
                An Esports AI coach designed to provide detailed post-match
                insights.
              </p>
            </div>
            <div className="flex justify-center items-center h-full text-center w-1/4">
              <Link
                href={"https://sparkgg.net/home"}
                className="bg-sky-600 px-3 py-1 rounded-md"
              >
                Visit
              </Link>
            </div>
          </div>
          <div className="flex w-full h-1/3 my-[1rem]">
            <div className="flex flex-col justify-center w-3/4 border-2 rounded-lg p-2">
              <h3 className="text-lg font-bold">Claimtrade</h3>
              <p className="text-sm">
                A trading marketplace for rights to mine minerals from land.
              </p>
            </div>
            <div className="flex justify-center items-center h-full text-center w-1/4">
              <Link href={"/"} className="bg-sky-600 px-3 py-1 rounded-md">
                Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <div className="bg-black overflow-hidden">
<main className="h-[90vh] bg-gradient-to-tr from-pink-900 via-purple-900 to-cyan-700"></main>
</div> */
}
