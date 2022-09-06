import "../css/Projects.css";
import projectslist from "../projectslist";

function Projects() {
  return (
    <div className="">
      <h2 className="projectintro" id="projects">
        Projects
      </h2>
      <div className="space-y-10 lg:columns-2 md:columns-1 ">
        {projectslist.map((x) => (
          <div class="max-w-lg rounded overflow-hidden shadow-lg">
            <img class="w-full" src={x.img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{x.title}</div>
              <p class="text-gray-700 text-base">{x.description} </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <a>
                <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Live Link
                </button>
              </a>
              <a>
                <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  See Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
