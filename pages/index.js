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
        <div className={styles.title}>
          <h1>
            Will Koury
          </h1>
          <div className={styles.profile}>
            <img
              src="/me.jpeg"
              alt="Will Koury"
            />
          </div>
        </div>

        <p>Software developer & computer science undergraduate student.</p>
        <p>My work includes <a 
            href="https://www.tossupapp.com/" 
            rel="noopener noreferrer" 
            target="_blank">
            Tossup</a> and
            the <a href="https://wkoury.github.io/harvard-admissions/" rel="noopener noreferrer" target="_blank">Harvard
            Admissions Calculator</a>.
        </p>
        <div className={styles.contact}>
          <span>
            <a href="mailto:wkoury@hey.com">📧</a>
            {" • "}
            <a href="https://github.com/wkoury" rel="noopener noreferrer" target="_blank">💾</a>
            {" • "}
            <a href="https://twitter.com/will_koury" rel="noopener noreferrer" target="_blank">🐦</a>
          </span>
        </div>
      </main>
    </div>
  );
}
