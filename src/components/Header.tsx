import { navLinks } from "../data/navData";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { parentVariant, singleHorizontalVariant, verticalChildrenVariant } from "../animations/variants";

const Header = () => {

	return (
		<>
			<header className="bg-teal-500">
				<motion.div
					variants={singleHorizontalVariant}
					initial="hidden"
					animate="visible"
					className="text-white text-3xl font-bold py-4 px-6 text-center flex flex-col md:block"
				>
					Pablo Villacres{" "}
					<span className="font-light text-xl">Desarrollador de software</span>
				</motion.div>
			</header>
			<div className="bg-teal-700">
				<motion.ul
					animate="visible"
					initial="hidden"
					variants={parentVariant}
					className="flex flex-col items-center gap-4 md:flex-row justify-between  text-white py-3 px-6 max-w-7xl my-0 mx-auto"
				>
					{navLinks.map((link, index) => (
						<motion.li key={index} variants={verticalChildrenVariant}>
							<NavLink key={link.href} href={link.href}>
								{link.text}
							</NavLink>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</>
	);
};

export default Header;
