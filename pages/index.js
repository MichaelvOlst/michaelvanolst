import Head from 'next/head'
import Layout from '../components/layout'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Home() {

   const dateOfBirth = new Date('1989 09 16 GMT');

  const codeString = `
  <?php
  
  class Michael van Olst 
  {

      public function aboutMe() : string
      {
          return "
          Hello 👋,
          I am Michael van Olst, ${dateOfBirth.getTime()} years old and living in the Netherlands.
          I am a PHP Developer with 5 years of relevant work experience and love to learn new things. 
          Over the years I have gained knowledge and experience in: PHP, Laravel, OOP, Reactjs, MySQL,
          JavaScript, HTML, CSS, Linux, XML, Git and a bit of GoLang.
          Currently I am working for CM Specialist in Huizen where I am responsible for the backend for their in-house made CMS.
          I integrated a lot API's with the CMS e.g. Payment providers like Mollie, 
          Enterprise Resource Planning like Exact Online and Snelstart and Transporters like DHL, UPS and Sendcloud.  
          ";
      }


      public function getSkills() : array
      {
          return [
            new Skill('PHP'),
            new Skill('MySql'),
            new Skill('Laravel'),
            new Skill('JavaScript'),
            new Skill('Next.js'),
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
