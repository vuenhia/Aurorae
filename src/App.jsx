import React, { useState } from "react";
import Background from "./Components/Background";
import VisualControls from "./Components/VisualControls";
import MusicPlayer from "./Components/MusicPlayer";
import ThoughtBox from "./Components/ThoughtBox";
import VisualCanvas from "./Components/VisualCanvas";
// import { StickyNote } from "./Components/StickyNote";
import "./App.css";

export default function App() {
	const [showStickyNote, setShowStickyNote] = useState(false);

	return (
		<div className="app-layout">
			<main className="main-container">
				<VisualControls />
				<VisualCanvas />
			</main>
			<footer className="footer-container">
				<MusicPlayer />
				<ThoughtBox onClick={() => setShowStickyNote(true)} />
			</footer>

			{/* Only show sticky note if active */}
			{showStickyNote && (
				<StickyNote onClose={() => setShowStickyNote(false)} />
			)}
		</div>
	);
}
