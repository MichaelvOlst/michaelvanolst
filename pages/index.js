import Head from 'next/head'
import Layout from '../components/layout'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Home() {

  const codeString = `
  <?php
  
  class Michael van Olst 
  {

      public function aboutMe() : string
      {
          return "Hello it's Michael";
      }


      public function getSkills() : array
      {
          return [
            new Skill('PHP'),
            new Skill('MySql'),
            new Skill('JavaScript'),
          ];
      }

  }
  `;

  return (
    <Layout>
      
      <Head>
        <title>Michael van Olst</title>
        <meta name="description" content="Michael van Olst Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SyntaxHighlighter language="php" style={vs2015}>
      {codeString}
      </SyntaxHighlighter>
    </Layout>
        
  )
}
