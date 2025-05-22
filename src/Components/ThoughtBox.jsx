import "./ThoughtBox.css";
import { useState } from "react";
export default function ThoughtBox() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)} className="thoughtbox-button">
				📝
			</button>
		</div>
	);
}
