interface ContactFormEmailProps {
	name: string;
	email: string;
	message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
	name,
	email,

	message,
}) => (
	<div>
		<h3>Someone wants to connect! 🚀</h3>
		<p>
			From <strong>{name}</strong> at {email}
		</p>
		<h3>Phone Number:</h3>
		<h3>Message:</h3>
		<p>{message}</p>
	</div>
);

export default ContactFormEmail;
