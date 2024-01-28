import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { useAnimation, useInView, motion } from "framer-motion";
import { parentVariant, verticalChildrenVariant } from "../animations/variants";

const Contact = () => {
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
				className="bg-white my-12 py-6 shadow-lg rounded-2xl mx-4"
				id="contacto"
			>
				<div className="py-8">
					<div className="max-w-3xl mx-auto px-4">
						<h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
							Contacto
						</h2>
						<div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<h3 className="text-gray-700 text-lg mb-2 text-center">
								Contáctame llenando el formulario
							</h3>
							<motion.div 
							variants={verticalChildrenVariant}
							initial="hidden"
							animate="visible"							
							>
								<ContactForm />
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Contact;
