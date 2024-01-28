import React from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	pageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	pageUrl,
}) => (
	<li className="mt-10 md:mt-0">
		<div className="flex gap-5">
			<div className="flex-1">
				<div className="flex items-center justify-center rounded-lg text-white">
					<img src={imageUrl} alt={title} className="rounded-md w-3/4 h-auto" />
				</div>
			</div>
			<div className="flex-1">
				<h2 className="text-xl font-medium text-gray-900">{title}</h2>
				<p className="my-4 text-gray-500 whitespace-pre-line">{description}</p>
				<a
					href={pageUrl}
          target="_blank"
					className="bg-teal-600 text-white text-xl py-2 px-10 rounded hover:bg-teal-700 transition-colors duration-300 ease-in-out"
				>
					Accede a la página
				</a>
			</div>
		</div>
	</li>
);

export default ProjectCard;
