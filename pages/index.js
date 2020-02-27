import Header from '../components/Header/Header.js';
import Head from 'next/head';
import Searchbox from '../components/Searchbox/Searchbox.js';
import './index.css';

const Index = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <Searchbox />
  </div>
);

export default Index;
