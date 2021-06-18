import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
export default function Home() {


  return (
    <Layout>
      
      <Head>
        <title>Michael van Olst</title>
        <meta name="description" content="Michael van Olst Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto h-screen flex justify-center">
        <div className="flex justify-center items-center">
          <div className="mx-auto space-x-6 flex">
            <h1 className="text-white text-4xl mr-20">Michael van Olst</h1>
            <Link href="/resume"><a className="text-white pt-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">Regular resume</a></Link>
            <Link href="/code"><a className="text-white pt-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">Code resume</a></Link>
          </div>
        </div>
      </div>
    </Layout>
        
  )
}
