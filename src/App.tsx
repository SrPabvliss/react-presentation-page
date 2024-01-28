import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "./components/PageWrapper";

function App() {
	return (
		<>
			<PageWrapper>
				<ToastContainer position="top-center" />
				<Header />
				<Hero />
				<main className="max-w-screen-lg mx-auto rounded-full drop-shadow-lg ">
					<About />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</PageWrapper>
		</>
	);
}

export default App;
