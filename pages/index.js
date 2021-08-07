import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Index() {
	useEffect(() => {
		document.documentElement.lang = "en-us";
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>Will Koury</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Software developer & computer science student" />
			</Head>

			<main className={styles.main}>
				<div className={styles.title}>
					<h1>
						Will Koury
					</h1>
					<div className={styles.profile}>
						<img
							src="https://www.github.com/wkoury.png"
							alt="Will Koury"
							loading="lazy"
						/>
					</div>
				</div>

				<p>Software developer & computer science undergraduate student.</p>
				<p>I was on a team of 2 building <a
						href="https://www.ftqapp.com"
						rel="noopener noreferrer"
						target="_blank"
					>FTQ</a>, a SaaS for assembly-line product inspection & analysis.</p>
				<p>My personal work includes <a
					href="https://www.tossupapp.com/"
					rel="noopener noreferrer"
					target="_blank">
					Tossup</a> and
					the <a href="https://wkoury.github.io/harvard-admissions/" rel="noopener noreferrer" target="_blank">Harvard
					Admissions Calculator</a>.
				</p>
				<div className={styles.contact}>
					Let's get in touch: {'\t'}
					<span>
						<a href="mailto:wkoury@hey.com">Email</a>
						{" • "}
						<a href="https://github.com/wkoury" rel="noopener noreferrer" target="_blank">Github</a>
					</span>
				</div>
			</main>
		</div>
	);
}
