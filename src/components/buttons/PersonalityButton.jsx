import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ButtonStyling.scss";

const PersonalityButton = () => {
	const personalityTraits = [
		"Nyfiken",
		"Kreativ",
		"Omtänksam",
		"Noggrann",
		"Stresstålig",
		"Bra på att samarbeta",
		"God arbetsmoral",
		"Problemlösare",
	];

	const [currentTrait, setCurrentTrait] = useState("");

	const handleButtonClick = () => {
		const randomIndex = Math.floor(Math.random() * personalityTraits.length);
		setCurrentTrait(personalityTraits[randomIndex]);
	};

	return (
		<div className="personality--btn">
			<button className="styling-btn" onClick={handleButtonClick}>
				Klicka fram mina egenskaper
			</button>

			{/* Gör att texten fadear in */}
			<motion.p
				className="personality--text"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				key={currentTrait}
			>
				{currentTrait}
			</motion.p>
		</div>
	);
};

export default PersonalityButton;
