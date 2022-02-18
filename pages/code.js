import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { FaArrowLeft } from 'react-icons/fa';

export default function Home() {

  const dateOfBirth = new Date('1989 09 16 GMT');

  const codeString = `
  <?php
  
  use Skill;

  class Michael
  {

      public function aboutMe() : string
      {
          return "
          Hello 👋,
          I am Michael van Olst, ${dateOfBirth.getTime()} years old and living in the Netherlands.
          I am a PHP Developer with 5 years of relevant work experience and love to learn new things. 
          Over the years I have gained knowledge and experience in: PHP, Laravel, OOP, Reactjs, MySQL,
          JavaScript, HTML, CSS, JSON, Linux, XML, Git and a bit of GoLang.
          Currently I am working for CM Specialist in Huizen where I am responsible for the backend for their in-house made CMS.
          I integrated a lot API's with the CMS e.g. Payment providers like Mollie, 
          Enterprise Resource Planning software like Exact Online and Snelstart and transporters like DHL, UPS and Sendcloud.  
          ";
      }


      public function getSkills() : array
      {
          return [
            new Skill('PHP'),
            new Skill('OOP'),
            new Skill('MySql'),
            new Skill('Laravel'),
            new Skill('JavaScript'),
            new Skill('Next.js'),
            new Skill('GIT'),
            new Skill('CSS'),
            new Skill('JSON'),
            new Skill('XML'),
            new Skill('HTML'),
            new Skill('Linux'),
            new Skill('Terminal'),
            new Skill('VueJS'),
            new Skill('ReactJS'),
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
      <div className=" m-8 mb-0">
        <h1 className="text-white text-l">
          <Link href="/"><a className=""><FaArrowLeft className="inline-block	mr-2" /> Go back</a></Link>
        </h1>
      </div>
      <SyntaxHighlighter language="php" style={vs2015}>
        {codeString}
      </SyntaxHighlighter>
    </Layout>
        
  );
}
