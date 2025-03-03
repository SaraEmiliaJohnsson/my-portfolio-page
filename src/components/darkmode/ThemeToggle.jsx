import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Import action and selector from the themeSlice
import { toggleDarkMode, selectDarkMode } from "./themeSlice";
import "../../App.scss";
import "../buttons/ButtonStyling.scss";

const ThemeToggle = () => {
	// Retrieve the dispatch function from the Redux store
	const dispatch = useDispatch();


	// Event handler for toggling dark mode
	const handleToggle = () => {
		// Dispatch the `toggleDarkMode` action
		dispatch(toggleDarkMode());
	};

	// Render a button that, when clicked, triggers the `handleToggle` function
	return (
		<button className="styling-btn" onClick={handleToggle}>
			- Ändra färgtema -
		</button>
	);
};

export default ThemeToggle;
