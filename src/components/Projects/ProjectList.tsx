import Link from "next/link";

import { IconType } from "react-icons";
import { HoverEffect } from "../Data/HoverEffect";

export type Project = {
  title: string;
  tech: IconType[];
  link: string;
  cover: {
    imageUrl: string;
    hoverImageUrl: string;
  };
  background: string;
};


type ProjectListProps = {
  projects: Project[];
};


export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 gap-5">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h1>
          <Link href={project.link} target="_blank">
          <HoverEffect
                imageUrl={project.cover.imageUrl}
                hoverImageUrl={project.cover.hoverImageUrl}
                className="w-full cursor-pointer h-64 object-cover text-yellow-300 "
              >
                <div className="space-y-5 bg-black/50 p-2 rounded">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, idx) => (
                      <Icon key={idx} className="w-8 h-8" />
                    ))}
                  </div>
                </div>
            </HoverEffect>
          </Link>
        </div>
      ))}
    </div>
  );
};