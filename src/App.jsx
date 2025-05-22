import Background from "./Components/Background";
import VisualControls from "./Components/VisualControls";
import MusicPlayer from "./Components/MusicPlayer";
import ThoughtBox from "./Components/ThoughtBox";
import VisualCanvas from "./Components/VisualCanvas";
import "./App.css";
export default function App() {
	return (
		<div className="app-layout">
			<main className="main-container">
				<VisualControls />
				<VisualCanvas />
			</main>
			<footer className="footer-container">
				<MusicPlayer />
				<ThoughtBox />
			</footer>
		</div>
	);
}
