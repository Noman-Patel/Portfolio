import Link from "next/link";
import { ProjectList } from "./ProjectList";
import { projects } from "./Data";



export default function Projects() {
  return (
    <>
      <div id="projects" className="h-10" />
      <div className="py-10 p-5 sm:p-0">
        <h1
          className="flex flex-col items-center justify-center -rotate-6"
        >
            All Projects 🎨
        </h1>
        <ProjectList projects={ projects} />
      </div>
    </>
  );
}