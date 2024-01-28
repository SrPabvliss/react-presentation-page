import { singleVerticalVariant } from "../animations/variants";
import { fields } from "../data/aboutData";
import ReadOnlyField from "./ReadOnlyField";
import { motion } from "framer-motion";

const About = () => {
	return (
		<>
			<motion.div
				variants={singleVerticalVariant}
				initial="hidden"
				animate="visible"
				className="flex w-full"
				id="sobre-mi"
			>
				<div className="w-full  p-4 flex">
					<div className="bg-yellow-400 p-8 rounded-lg shadow-lg flex-grow">
						<img
							src="img/pablo.jpg"
							alt="Imagen de Pablo Villacres"
							className="rounded-md w-full h-auto mx-auto"
						/>
						<h2 className="text-center text-2xl font-bold mt-4">Yo (yo)</h2>
					</div>
				</div>
				<div className="w-full  p-4 flex">
					<div className="bg-gray-200 p-6 rounded-lg shadow-lg flex-grow">
						<div className="space-y-2">
							{fields.map((field) => (
								<ReadOnlyField
									key={field.label}
									label={field.label}
									value={field.value}
								/>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default About;
