import { ProjectList } from "./ProjectList";
import { projects } from "./Data";
import AllProjects from "./Framer";




export default function Projects() {
  return (
    <>
      <div id="projects" className="h-10" />
      <div className="py-10 p-5 sm:p-0">
        <AllProjects/>

        <ProjectList projects={ projects} />
      </div>
    </>
  );
}