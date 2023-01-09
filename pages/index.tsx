import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Atropos from 'atropos/react';
import 'atropos/css';
import styles from '../styles/Home.module.css';

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Koury</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Software engineer Will Koury' />
      </Head>

      <main className={styles.main}>
        <Atropos
          className='my-atropos'
          shadow={false}
          highlight={false}
          activeOffset={15}
          duration={500}
          rotateXMax={3}
          rotateYMax={3}
        >
          <div className={styles.title}>
            <h1>Will Koury</h1>
            <div className={styles.profile}>
              <Image
                src='/profile.jpg'
                alt='Will Koury'
                width={110}
                height={110}
              />
            </div>
          </div>

          <p>
            Software engineer @{' '}
            <a
              href='https://www.flightaware.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              FlightAware
            </a>
            .
          </p>
          <p>
            I am on a team of 3 building{' '}
            <a
              href='https://www.ftqapp.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              First Time Quality
            </a>
            , a SaaS for assembly-line product inspection & analysis.
          </p>
          <p>
            My personal work includes{' '}
            <a
              href='https://github.com/wkoury/tossup-app'
              rel='noopener noreferrer'
              target='_blank'
            >
              Tossup
            </a>{' '}
            and the{' '}
            <a
              href='https://wkoury.github.io/harvard-admissions/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Harvard Admissions Calculator
            </a>
            .
          </p>
          <div className={styles.contact}>
            Let&apos;s get in touch: {'\t'}
            <span>
              <a href='mailto:wkoury@hey.com'>Email</a>
              {' • '}
              <a
                href='https://github.com/wkoury'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </span>
          </div>
        </Atropos>
      </main>
    </div>
  );
};

export default Index;
