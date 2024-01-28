import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<>
			<div className="bg-white my-12 py-8 shadow-lg rounded-2xl" id="paginas-web">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl text-center font-extrabold text-gray-900 mb-8">
							Algunos trabajos realizados
						</h1>
					</div>

					<div className="mt-10">
						<ul className=" grid grid-cols-1 gap-6">
							{projectsData.map((project, index) => (
								<ProjectCard
									key={index}
									title={project.title}
									description={project.description}
									imageUrl={project.imageUrl}
									pageUrl={project.pageUrl}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
