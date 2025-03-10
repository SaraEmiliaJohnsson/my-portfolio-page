import "./MainComponent.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import html from "../../assets/html5.webp";
import css from "../../assets/css.png";
import javaScript from "../../assets/javascript.png";
import reactLogo from "../../assets/react.webp";
import sass from "../../assets/sass.png";
import vite from "../../assets/vite.png";
import redux from "../../assets/Redux.webp";
import typescriptLogo from "../../assets/typescript.svg";
import AboutComponent from "../about/AboutComponent";
import ProjectComponent from "../portfolio/ProjectComponent";
import ContactComponent from "../contact/ContactComponent";

export default function MainComponent() {
	return (
		<div className="main">
			<section className="main--inside__container">
				<section className="main--first__container"></section>
				<section className="main--second__container">
					<h1>Sara Johnsson</h1>
					<section className="main--link__container">
						<section className="main--link">
							<Link to="/about">About</Link>
						</section>
						<section className="main--link">
							<Link to="/portfolio">Project</Link>
						</section>
						<section className="main--link">
							<Link to="/contact">Contakt</Link>
						</section>
					</section>
					<section className="programming-languages">
						<div className="language">
							<img src={html} alt="HTML" className="html-logo" />
							<p className="language-name">HTML</p>
						</div>
						<div className="language">
							<img src={css} alt="CSS" className="css-logo" />
							<p className="language-name">CSS</p>
						</div>
						<div className="language">
							<img src={javaScript} alt="JavaScript" className="javascript-logo" />
							<p className="language-name">JavaScript</p>
						</div>
						<div className="language">
							<img src={reactLogo} alt="React" className="react-logo" />
							<p className="language-name">React</p>
						</div>
						<div className="language">
							<img src={redux} alt="Redux" className="redux-logo" />
							<p className="language-name">Redux</p>
						</div>
						<div className="language">
							<img src={vite} alt="Vite" className="vite-logo" />
							<p className="language-name">Vite</p>
						</div>
						<div className="language">
							<img src={sass} alt="SASS" className="sass-logo" />
							<p className="language-name">SASS</p>
						</div>
						<div className="language">
							<img src={typescriptLogo} alt="TypeScript" className="typescript-logo" />
							<p className="language-name">TypeScript</p>
						</div>
					</section>
				</section>

			</section>
			<AboutComponent />
			<ProjectComponent />
			<ContactComponent />
		</div>
	);
}
