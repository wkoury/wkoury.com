import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Koury</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Computer science undergraduate student" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Will Koury
        </h1>

        <p>I am a software developer & computer science undergraduate student.</p>
        <p>I mostly build web apps. My work includes <a 
            href="https://www.tossupapp.com/" 
            rel="noopener noreferrer" 
            target="_blank">
            Tossup</a> and
            the <a href="https://wkoury.github.io/harvard-admissions/" rel="noopener noreferrer" target="_blank">Harvard
            Admissions Calculator</a>.
        </p>
        <p>I am on <a href="mailto:wkoury@hey.com">Email</a> & <a href="https://github.com/wkoury" rel="noopener noreferrer" target="_blank">GitHub</a>.</p>
      </main>
    </div>
  );
}
