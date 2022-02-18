import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { FaCode } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      
      <Head>
        <title>Michael van Olst</title>
        <meta name="description" content="Michael van Olst Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto h-96 flex justify-center">
        <div className="flex justify-center items-center">
          <div className="mx-auto space-x-6 ">
            <h1 className="text-white text-4xl">Michael van Olst</h1>
            <Link href="/resume"><a className="text-white pt-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">Regular resume</a></Link>
            <Link href="/code"><a className="text-white pt-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">Code <FaCode className="inline-block"/></a></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
