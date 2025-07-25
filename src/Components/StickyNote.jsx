import { useRef, useState, useEffect } from "react";
export default function StickyNote() {
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState({ x: 100, y: 100 });
	const [relPos, setRelPos] = useState(null);

	const onMouseMove = (e) => {
		if (!dragging) return;
		setPosition({
			x: e.pageX - relPos.x,
			y: e.pageY - relPos.y,
		});
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseUp = (e) => {
		setDragging(false);
		e.stopPropagation();
		e.preventDefault();
	};

	const onMouseDown = (e) => {
		if (e.button !== 0) return;
		const rect = noteRef.current.getBoundingClientRect();
		setPosition({
			x: e.pageX - rect.left,
			y: e.pageY - rect.top,
		});
		e.stopPropagation();
		e.preventDefault();
	};
	return <div></div>;
}
