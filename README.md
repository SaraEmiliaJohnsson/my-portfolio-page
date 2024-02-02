# My Portfolio Website

## Installation

### Node.js and npm
Make sure you have Node.js and npm installed. If not, you can download and install them from [Node.js official website](https://nodejs.org/).

### React
This project is built with React. To create a React app, you can use the following command:
```bash
npx create-react-app my-portfolio

### Vite
Vite is used as the build tool for this project. To install Vite, run:
npm install create-vite -g

Create a Vite app with React template:
create-vite my-portfolio --template react

### Sass
Sass is used for styling. Install it with npm:
npm install sass

### Redux
Redux is used for managing state, particularly for dark theme. Install it with:
npm install @reduxjs/toolkit react-redux


# Usage
Single Page Application (SPA) with React Router
This project uses React Router for navigation. Check the React Router documentation for usage.

### useState for Watch and Form
The **useState hook** is utilized for managing state in the Watch and Form components. Refer to the React documentation on Hooks for more details.

### Redux for Dark Theme
Redux is employed for managing dark theme state. Actions such as **toggleDarkMode** are dispatched using **useDispatch** from react-redux. The dark theme state can be accessed with **useSelector**. Check the Redux documentation for detailed usage.

### Props for Different Button Texts
The ButtonProps component uses **props** to customize button text. Example usage:

function ButtonProps(props) {
	return (
		<div>
			<button className="styling-btn">{props.text}</button>
		</div>
	);
}

<ButtonProps text="Skicka meddelande" type="submit" />

