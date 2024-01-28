import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
