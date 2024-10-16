"use client";

import Image from "next/image";
import Link from "next/link";

// Icons
import ArrowDown from "@/app/public/arrow-down.svg";
import LinkedIn from "@/app/public/linkedin-3.svg";
import Github from "@/app/public/github-3.svg";
import Email from "@/app/public/gmail-3.svg";
import Canada from "@/app/public/canada.svg";
import Menu from "@/app/public/menu.svg";
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
  const changeSkills = (e: EventTarget) => {
    const buttonElement = e as HTMLButtonElement;
    const text = buttonElement.innerText;

    if (text != activeSkill) {
      switch (text) {
        case "DevOps":
          // Change active button
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
    <main className="overflow-hidden font-montserrat">
      {/* Header details */}
      <header className="flex border-b-[1px] border-sky-300 w-full justify-between items-center p-2 h-16 fixed top-0 bg-black z-50">
        <div className="flex items-center h-full justify-evenly w-1/2 lg:w-2/12">
          <h2 className="text-2xl font-bold">Raul Calero</h2>
        </div>

        {/* Menu - not desktop view */}
        <details className="dropdown lg:hidden">
          <summary className="btn m-1">
            <Image src={Menu} alt={"Menu-lines"} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-36 p-2 shadow fixed -right-1 top-14">
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"#experience"}>Experience</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projects</Link>
            </li>
          </ul>
        </details>

        {/* Menu - Desktop view */}
        <menu className="hidden lg:flex lg:w-1/3">
          <ul className="flex w-full justify-evenly">
            <li>
              <Link href={"#about"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#skills"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Skills
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#experience"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Experience
                </p>
              </Link>
            </li>
            <li>
              <Link href={"#projects"}>
                <p className="hover:scale-110 duration-200 ease-in-out transition">
                  Projects
                </p>
              </Link>
            </li>
          </ul>
        </menu>
      </header>

      {/* Hero details  */}
      <div
        id="about"
        className="bg-gradient-to-tr from-pink-900 via-purple-900 to-cyan-700 h-screen p-2 flex flex-col items-center justify-center"
      >
        {/* Title/Subtitle */}
        <div className="flex flex-col items-center w-full animate-fadeIn mb-4">
          <h1 className="text-5xl font-bold">Raul Calero</h1>
          <h2 className="text-xl italic">Full Stack Developer</h2>
          <h3 className="text-lg flex items-center">
            <Image src={Canada} alt="Canada-flag" width={25} className="mr-2" />
            Vancouver, BC
          </h3>
        </div>

        {/* Brief Description */}
        <div className="flex bg-gray-700/60 p-2 rounded-md justify-center items-center shadow-xl lg:w-1/4 lg:h-1/6 lg:mb-8">
          <p className="text-md flex justify-center w-full text-center">
            Delivering seamless web experiences through efficient back-end and
            cloud infrastructure.
          </p>
        </div>

        {/* Socials */}
        <ul className="flex w-1/2 justify-evenly mt-4">
          <li>
            <Link
              href={"https://www.linkedin.com/in/raulcalero/"}
              className="shadow-xl"
            >
              <Image
                src={LinkedIn}
                height={30}
                alt="LinkedIn"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
            </Link>
          </li>

          <li>
            <Link
              href={"https://github.com/TheCaptainKimchi"}
              className="shadow-xl"
            >
              <Image
                src={Github}
                height={30}
                alt="Github"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
            </Link>
          </li>

          <li>
            <Link href={"mailto:raulcalero7@gmail.com"} className="shadow-xl">
              <Image
                src={Email}
                height={30}
                alt="Email"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
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
      <div
        id="skills"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-cyan-900 h-screen w-screen border-[1px]"
      >
        {/* Description Text */}
        <h2 className="text-2xl font-bold mb-1 lg:mb-7">Skills</h2>
        {/* Skill buttons */}
        <div className="w-full flex items-center justify-evenly mb-4">
          <button
            className={`btn rounded-md w-fit py-1 px-2 font-bold shadow-2xl hover:scale-110 transition duration-150 ease-in-out hover:bg-opacity-70 ${
              activeSkill === "DevOps"
                ? "bg-white text-black hover:bg-opacity-100 hover:scale-100"
                : "bg-gray-800"
            }`}
            onClick={(e) => changeSkills(e.target)}
            id="DevOps"
          >
            DevOps
          </button>
          <button
            className={`btn rounded-md w-fit py-1 px-2 font-bold shadow-2xl hover:scale-110 transition duration-150 ease-in-out hover:bg-opacity-70 ${
              activeSkill === "Frontend"
                ? "bg-white text-black hover:bg-opacity-100 hover:scale-100"
                : "bg-gray-800"
            }`}
            onClick={(e) => changeSkills(e.target)}
            id="Frontend"
          >
            Frontend
          </button>
          <button
            className={`btn rounded-md w-fit py-1 px-2 font-bold shadow-2xl hover:scale-110 transition duration-150 ease-in-out hover:bg-opacity-70 ${
              activeSkill === "Backend"
                ? "bg-white text-black hover:bg-opacity-100 hover:scale-100"
                : "bg-gray-800"
            }`}
            onClick={(e) => changeSkills(e.target)}
            id="Backend"
          >
            Backend
          </button>
        </div>

        {/* Grid */}
        <div className="w-3/4 h-1/2 flex flex-col items-center justify-center">
          <div className="flex w-full h-1/2 lg:w-3/5">
            <div className="w-full h-[90%] border-[1px] flex items-center justify-center p-2 rounded-md shadow-lg">
              <p className="text-center">{activeText}</p>
            </div>
          </div>
          <div className="flex w-full h-1/2 lg:w-3/4">
            <div className="w-3/4 h-5/6 border-[1px] mr-2 rounded-md shadow-lg">
              <ul className="flex flex-col items-center justify-center h-full">
                {activeTools.map((tool, index) => {
                  return <li key={index}>{tool}</li>;
                })}
              </ul>
            </div>
            <div className="w-3/4 h-5/6 border-[1px] rounded-md shadow-lg">
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
      <div
        id="experience"
        className="px-2 py-16 flex flex-col items-center justify-center bg-gradient-to-tr h-fit from-red-800 via-yellow-700 to-sky-600 w-screen lg:h-screen"
      >
        <h2 className="text-2xl font-bold">Experience</h2>
        {/* Galaxy Esports */}
        <div className="flex flex-col justify-center my-4 w-11/12 shadow-lg drop-shadow-2xl p-2 bg-sky-900/50 rounded-lg hover:scale-105 transition duration-300 ease-in-out lg:h-2/5 lg:w-1/2 lg:p-7">
          <h3 className="font-bold text-lg">Galaxy Esports Inc.</h3>
          <h4 className="text-sm">Senior Full Stack Developer</h4>
          <h4 className="italic text-sm">Sept 2020 - Present</h4>
          <ul className="text-sm mt-3 list-disc pl-5">
            <li className="my-1">
              Enhanced data collection and sorting efficiency by 40% by
              developing a Node.js REST API deployed on a Linux server with a
              PostgreSQL database
            </li>
            <li className="my-1">
              Reduced production support workload by 75% by introducing
              efficient systems and tools
            </li>
            <li className="my-1">
              Improved client satisfaction by 30% by executing full-stack
              developments using Next.js and Flask, ensuring seamless deployment
              on AWS for various clients.
            </li>
          </ul>
        </div>

        {/* Vision Coding Academy */}
        <div className="flex flex-col justify-center my-4 w-11/12 shadow-lg drop-shadow-2xl p-2 bg-sky-900/50 rounded-lg hover:scale-105 transition duration-300 ease-in-out lg:h-2/5 lg:w-1/2 lg:p-7">
          <h3 className="font-bold text-lg">Vision Coding Academy</h3>
          <h4 className="text-sm">Coding Instructor</h4>
          <h4 className="italic text-sm">July 2024 - Present</h4>
          <ul className="text-sm mt-3 list-disc pl-5">
            <li className="my-1">
              Enhanced student engagement and understanding by designing and
              delivering coding lessons and mentorship programs, utilizing
              expertise in multiple programming languages including JavaScript,
              C#, and Python
            </li>
            <li className="my-1">
              Successfully prepared students for real-world coding challenges by
              developing and implementing comprehensive curriculum plans that
              included practical coding projects.
            </li>
          </ul>
        </div>
      </div>

      {/* Project Details */}
      <div
        id="projects"
        className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 via-black to-slate-700 h-fit py-20 w-screen"
      >
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        {/* Project Cards */}
        <div className="w-11/12 h-1/2 lg:w-1/2">
          <div className="border-2 rounded-lg p-2 flex flex-col items-center my-4 hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center w-full h-1/3">
              <div className="flex flex-col justify-center w-3/4 p-2">
                <h3 className="text-lg font-bold">SparkGG</h3>
                <p className="text-sm">
                  An Esports AI coach designed to provide detailed post-match
                  insights.
                </p>
              </div>
              <div className="flex justify-center items-center h-full text-center w-1/4">
                <Link
                  href={"https://sparkgg.net/portfolio"}
                  className="bg-sky-600 px-3 py-1 rounded-md hover:scale-105 hover:bg-sky-600/75"
                >
                  Visit
                </Link>
              </div>
            </div>
            <div className="w-3/4">
              <p className="my-1">
                <span className="underline">Frontend Tools:</span> Next.js,
                TypeScript, Tailwind, DaisyUI
              </p>
              <p className="my-1">
                <span className="underline">Backend Tools:</span> Node.js, JWT,
                PostgreSQL
              </p>
              <p className="mb-6 mt-1">
                <span className="underline">
                  Deployment and Development Tools:
                </span>
                {" Docker, Coolify, Hetzner, Mailcow (Email Suite), DNS/HTTPS"}
              </p>
            </div>
          </div>
          <div className="border-2 rounded-lg p-2 flex flex-col items-center my-4 hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center w-full h-1/3">
              <div className="flex flex-col justify-center w-3/4 p-2">
                <h3 className="text-lg font-bold">Claimtrade</h3>
                <p className="text-sm">
                  A trading marketplace for rights to mine minerals from land.
                </p>
              </div>
              <div className="flex justify-center items-center h-full text-center w-1/4">
                <Link
                  href={"https://claimtrade.starserver.one/"}
                  className="bg-sky-600 px-3 py-1 rounded-md hover:scale-105 hover:bg-sky-600/75"
                >
                  Visit
                </Link>
              </div>
            </div>
            <div className="w-3/4">
              <p className="my-1">
                <span className="underline">Frontend Tools:</span> Next.js,
                TypeScript, Tailwind, DaisyUI
              </p>
              <p className="my-1">
                <span className="underline">Backend Tools:</span> Node.js, JWT,
                PostgreSQL
              </p>
              <p className="mb-6 mt-1">
                <span className="underline">
                  Deployment and Development Tools:
                </span>
                {" AWS (RDC, S3, EC2), Vercel, DNS/HTTPS"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center bg-black border-t-[1px] h-52 w-screen">
        <h2 className="font-bold text-xl">Raul Calero</h2>
        <h3>Full Stack Developer</h3>
        <p>
          Email: <span className="italic">raulcalero7@gmail.com</span>
        </p>

        {/* Socials */}
        <ul className="flex w-1/2 justify-evenly mt-4 lg:mt-8">
          <li>
            <Link href={"https://www.linkedin.com/in/raulcalero/"}>
              <Image
                src={LinkedIn}
                height={30}
                alt="LinkedIn"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
            </Link>
          </li>

          <li>
            <Link href={"https://github.com/TheCaptainKimchi"}>
              <Image
                src={Github}
                height={30}
                alt="Github"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
            </Link>
          </li>

          <li>
            <Link href={"mailto:raulcalero7@gmail.com"}>
              <Image
                src={Email}
                height={30}
                alt="Email"
                className="sm:hover:scale-110 lg:scale-125 lg:hover:scale-150 transition duration-150 ease-in-out"
              />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
