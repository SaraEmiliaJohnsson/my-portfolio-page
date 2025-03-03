import React from "react";
import "./AboutComponent.scss";
import { motion } from "framer-motion";
import PersonalityButton from "../../components/buttons/PersonalityButton";

const AboutComponent = () => {
	return (
		<div className="about--container">
			<section className="about--inside__container-two">
				<article className="personality--btn__container">
					<PersonalityButton />
				</article>
			</section>
			<section className="about--inside__container-one">
				<motion.section
					className="about--inside__container-one"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>

					<h2>Om mig</h2>
					<p>
						Hej! Jag heter Sara och jag är en nyfiken och engagerad Frontend-utvecklare med en passion för
						att skapa användarvänliga och interaktiva webbupplevelser. Jag bor i Norrtälje med min man och
						våra två barn, Walter och Saga. När jag inte kodar älskar jag att lösa problem, lära mig nya teknologier och
						experimentera med design och funktionalitet.
					</p>

					<p>
						Efter många år inom en annan bransch bestämde jag mig för att följa min passion för webbutveckling.
						Nu bygger jag moderna och responsiva webbsidor med React, TypeScript och SASS.
					</p>

					<h3>När jag inte kodar gillar jag att:</h3>
					<ul>
						<li>Utveckla kreativa projekt i React & TypeScript</li>
						<li>Utforska UI/UX-design och användarvänlighet</li>
						<li>Lära mig nya teknologier inom webbutveckling</li>
						<li>Baka och pyssla med mina barn</li>
					</ul>


				</motion.section>

				<br />
				<h4>Tidigare erfarenheter</h4>

				<p>
					Under mina många år som brevbärare har jag utvecklat färdigheter och
					egenskaper som är avgörande för yrket. Att arbeta som brevbärare har
					krävt en kombination av stresshantering, noggrannhet och hög kvalitet
					i utförandet av arbetsuppgifterna. Den kontinuerliga hanteringen av
					arbetsbördan och upprätthållandet av ett högt tempo har varit en
					daglig utmaning, vilket har stärkt min förmåga att hantera stress och
					tryck. <br /> <br />
					Noggrannhet har varit en nyckelaspekt av mitt arbete, särskilt när det
					gäller korrekt sortering och leverans av post till rätt adresser. Den
					här erfarenheten har lärt mig att uppskatta vikten av att vara
					noggrann och uppmärksam på detaljer för att undvika misstag och
					säkerställa korrekt leverans. <br /> <br /> De senaste åren har jag
					dessutom haft möjligheten att ta på mig en ledande roll inom teamet.
					Att vara ledare har gett mig möjlighet att vägleda och stödja mina
					kollegor, och detta har bidragit till min personliga och
					professionella tillväxt. Jag har mognat och vuxit upp på denna
					arbetsplats genom att möta olika utmaningar och utveckla min förmåga
					att navigera i arbetslivet. <br /> <br />
					Sammanfattningsvis representerar min erfarenhet som brevbärare en
					balans mellan att hantera stress, upprätthålla noggrannhet och
					leverera kvalitet i högt tempo. Min tid som ledare har också förstärkt
					min förmåga att guida och stödja andra. Denna erfarenhet har varit en
					betydelsefull del av min professionella resa och har bidragit till min
					personliga utveckling.
				</p>
			</section>

			<section className="about--inside__container-three">
				<section className="timeline">
					<div className="timeline-item">
						<div className="timeline-content">
							<h4>Hermods</h4>
							<p>
								På Hermods började min resa där jag studerade matematik, programmering och webbutveckling.
							</p>
							<ul>
								<li>Matematik 2B</li>
								<li>Programmering 1</li>
								<li>Webbutveckling 1</li>
							</ul>
						</div>
					</div>

					<div className="timeline-item">
						<div className="timeline-content">
							<h4>KYH Anywhere</h4>
							<p>
								Studerade frontendutveckling med fokus på React, JavaScript och modern webbutveckling.
							</p>
							<ul>
								<li>HTML, CSS, SASS</li>
								<li>JavaScript & React</li>
								<li>Vite & Redux</li>
							</ul>
						</div>
					</div>
				</section>

			</section>
		</div>
	);
};

export default AboutComponent;
