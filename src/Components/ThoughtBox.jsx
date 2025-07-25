import "./ThoughtBox.css";
import { useState } from "react";
export default function ThoughtBox({ onClick }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={onClick} className="thoughtbox-button">
				📝
			</button>
		</div>
	);
}
