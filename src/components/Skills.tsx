import { skills } from "../data/skillsData";
import SkillCard from "./SkillCard";


const Skills = () => {

	return (
		<>
			<div className="bg-white my-12 py-8 shadow-lg rounded-2xl" id="conocimientos">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl text-center font-extrabold text-gray-900 mb-8">
						Mis conocimientos
					</h2>
					<div className="grid grid-cols-3 gap-4 justify-center space-x-4 md:space-x-8">
						{skills.map((skill, index) => (
							<SkillCard
								key={index}
								Icon={skill.icon}
								title={skill.name}
								description={skill.description}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
