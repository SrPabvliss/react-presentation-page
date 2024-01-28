import { navLinks } from "../data/navData";
import NavLink from "./NavLink";

const Header = () => {

	return (
		<>
			<header className="bg-teal-500">
				<h1 className="text-white text-3xl font-bold py-4 px-6 text-center">
					Pablo Villacres{" "}
					<span className="font-light text-xl">Futuro ingeniero</span>
				</h1>
			</header>
			<div className="bg-teal-700">
				<nav className="flex justify-between  text-white py-3 px-6 max-w-7xl my-0 mx-auto">
					{navLinks.map((link) => (
						<NavLink key={link.href} href={link.href}>
							{link.text}
						</NavLink>
					))}
				</nav>
			</div>
		</>
	);
};

export default Header;
