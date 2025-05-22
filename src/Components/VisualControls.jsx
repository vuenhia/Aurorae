import "./VisualControls.css";
import React from "react";
export default function VisualControls() {
	const [activeSection, setActiveSection] = React.useState(false);

	const activeClicked = (section) => {
		setActiveSection(section);
		console.log(section, "true");
	};
	const backButton = () => {
		setActiveSection(false);
		console.log("false");
	};
	return (
		<div className="visual-controls">
			<div className="toggle-tab">💩</div>
			<div className="control-content">
				<h1>VisualControls</h1>
				<div className="control-grid">
					{!activeSection && (
						<>
							<button onClick={() => activeClicked("color")}>Color</button>
							<button onClick={() => activeClicked("shapes")}>Shapes</button>
							<button onClick={() => activeClicked("number")}>Number</button>
							<button onClick={() => activeClicked("text")}>Text</button>
							<button onClick={() => activeClicked("font")}>Font</button>
						</>
					)}

					{activeSection === "color" && (
						<div className="color">
							<button className="child-buttons">Color Option</button>
						</div>
					)}

					{activeSection === "shapes" && (
						<div className="shapes">
							<button className="child-buttons">Shape Option</button>
						</div>
					)}

					{activeSection === "number" && (
						<div className="number">
							<button className="child-buttons">Number Option</button>
						</div>
					)}

					{activeSection === "text" && (
						<div className="text">
							<button className="child-buttons">Text Option</button>
						</div>
					)}

					{activeSection === "font" && (
						<div className="font">
							<button className="child-buttons">Font Option</button>
						</div>
					)}
				</div>

				{activeSection && (
					<button onClick={backButton} className="back-button">
						Back
					</button>
				)}
			</div>
		</div>
	);
}
