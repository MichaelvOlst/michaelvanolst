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

      <p>Hello this is the normal resume, you can also download this one if you'd like</p>
    </Layout>
        
  )
}
