import React from "react";
import Image from "next/image";
import Link from "next/link";
import components from "../../Images/space3DPNG (1).png";
import space from "../../Images/space3DPNG (1).png";
import light from "../../Images/nutriLightPNG (1).png";
import dark from "../../Images/nutriDarkPNG (1).png";

const Showcase = () => {
  const projectAchievements = [
    {
      imageSrc: space,
      imageAlt: "Project Achievements of Sketch",
      title: "3D Space",
      description: "Content Design, Marketing",
      link: "https://spaced-nine.vercel.app/",
    },
    {
      imageSrc: light,
      imageAlt: "Project Achievements of Figma",
      title: "Lighter",
      description: "User Interface Design",
      link: "https://nutri-light.vercel.app/",
    },
    {
      imageSrc: dark,
      imageAlt: "Project Achievements of Frame.io",
      title: "Darker",
      description: "User Interface Design",
      link: "https://nutri-dark.vercel.app/",
    },
  ];

  return (
    <section class="py-20 relative bg-gray-900">
      <div class="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight text-gray-300 sm:text-4xl">
          & three other themes
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectAchievements.map((project, index) => (
            <Link href={project.link} className="cursor-pointer">
              <div
                key={index}
                className="flex items-center flex-col gap-8 w-full group"
              >
                <div className="block cursor-pointer rounded-xl shadow-xl ring-1 ring-gray-400/10 overflow-hidden">
                  <Image src={project.imageSrc} alt={project.imageAlt} />
                </div>
                <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                  <div className="block ">
                    <h4 className="text-2xl font-manrope font-semibold text-gray-300">
                      {project.title}
                    </h4>
                    {/* <p className="font-medium text-lg text-gray-300">
                      {project.description}
                    </p> */}
                  </div>
                  <button className="border border-black py-2 px-3.5 rounded-full transition-all duration-300 bg-blue-700">
                    <svg
                      className="stroke-white transition-all duration-300 group-hover:stroke-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
