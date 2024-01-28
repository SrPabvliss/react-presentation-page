import { useEffect, useRef } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";
import {
	horizontalChildrenVariant,
	parentVariant,
} from "../animations/variants";

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	return (
		<>
			<motion.div
				ref={ref}
				animate={mainControls}
				initial="hidden"
				variants={parentVariant}
				className="bg-white my-12 py-8 shadow-lg rounded-2xl"
				id="paginas-web"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl text-center font-extrabold text-gray-900 mb-8">
							Algunos trabajos realizados
						</h1>
					</div>

					<div className="mt-10">
						<motion.ul className=" grid grid-cols-1 gap-6">
							{projectsData.map((project, index) => (
								<motion.li key={index} variants={horizontalChildrenVariant}>
									<ProjectCard
										key={index}
										title={project.title}
										description={project.description}
										imageUrl={project.imageUrl}
										pageUrl={project.pageUrl}
									/>
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Projects;
