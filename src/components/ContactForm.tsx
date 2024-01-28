import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		nombre: "",
		telefono: "",
		correo: "",
		mensaje: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
		const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
		const userID = import.meta.env.VITE_APP_EMAILJS_USER_ID;

		const sendEmailPromise = emailjs.send(
			serviceID as string,
			templateID as string,
			formData,
			userID
		);

		toast.promise(sendEmailPromise, {
			pending: "Enviando mensaje...",
			success: "Mensaje enviado con éxito!",
			error: "Error al enviar el mensaje.",
		});

		try {
			const response = await sendEmailPromise;
			console.log("SUCCESS!", response.status, response.text);
		} catch (error) {
			console.log("FAILED...", error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-4 md:flex ">
					<div className="mb-4 md:mr-2 md:mb-0 flex-1">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="nombre"
						>
							Nombre
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="nombre"
							name="nombre"
							type="text"
							placeholder="Nombre"
							defaultValue={formData.nombre}
							onChange={handleChange}
						/>
					</div>
					<div className="md:ml-2 flex-1">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="telefono"
						>
							Teléfono
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="telefono"
							name="telefono"
							type="tel"
							placeholder="Teléfono"
							defaultValue={formData.telefono}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="correo"
					>
						Correo
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="correo"
						name="correo"
						type="email"
						placeholder="Correo"
						defaultValue={formData.correo}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="mensaje"
					>
						Mensaje
					</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="mensaje"
						name="mensaje"
						placeholder="Mensaje"
						rows={3}
						defaultValue={formData.mensaje}
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-center">
					<input
						className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						value="Enviar"
					/>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
