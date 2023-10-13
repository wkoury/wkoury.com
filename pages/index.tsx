import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Index: NextPage = () => {

  const LINK_STYLE = "text-blue-500 hover:underline";

  return (
    <div>
      <Head>
        <title>Will Koury</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Software engineer Will Koury' />
      </Head>


    <div className="min-h-screen bg-yellow-100 dark:bg-black dark:text-white flex justify-center items-center">
      <Head>
        <title>Will Koury</title>
      </Head>

      <div className="max-w-md text-left">
        <div className="flex items-center mb-4">
          <h1 className="text-4xl mr-12">Will Koury</h1>
          <Image src="/profile.jpg" alt="Will Koury" width={110} height={110}  className="rounded-full w-32 h-32 border-4 border-white mr-6" />
        </div>

        <p className="text-xl mb-2">Software engineer @ <a href="https://flightaware.com" rel="noopener noreferrer" target="_blank" className={LINK_STYLE}>FlightAware</a>.</p>
        <p className="text-xl mb-2">I am on a team of 3 building <a href="https://ftqapp.com" rel="noopener noreferrer" target="_blank" className={LINK_STYLE}>First Time Quality.</a></p>
        <p className="text-xl mb-2">My personal work includes <a href="https://github.com/wkoury/tossup-app" className={LINK_STYLE} rel="noopener noreferrer" target="_blank">Tossup</a> and the <a href="https://wkoury.github.io/harvard-admissions/" className={LINK_STYLE} rel="noopener noreferrer" target="_blank">Harvard Admissions Calculator</a>.</p>

        <div className="flex mt-8 items-center mb-4 space-x-2">
          <a href="mailto:wkoury@hey.com" className={LINK_STYLE}>Email</a>
          <a href="https://github.com/wkoury" className={LINK_STYLE}>Github</a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Index;
