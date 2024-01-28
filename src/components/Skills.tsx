import { useEffect, useRef } from "react";
import { skills } from "../data/skillsData";
import SkillCard from "./SkillCard";
import { useAnimation, useInView, motion } from "framer-motion";
import { parentVariant, verticalChildrenVariant } from "../animations/variants";

const Skills = () => {
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
				id="conocimientos"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl text-center font-extrabold text-gray-900 mb-8">
						Mis conocimientos
					</h2>
					<motion.ul
						variants={parentVariant}
						initial="hidden"
						animate={mainControls}
						className="grid grid-cols-3 gap-4 justify-center space-x-4 md:space-x-8"
					>
						{skills.map((skill, index) => (
							<motion.li
								key={index}
								variants={verticalChildrenVariant}
							>
								<SkillCard
									key={index}
									Icon={skill.icon}
									title={skill.name}
									description={skill.description}
								/>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</motion.div>
		</>
	);
};

export default Skills;
