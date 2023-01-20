import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {GetServerSideProps} from "next";
import HomePage from "./main";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/* 임시 설정 */}
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' />
        <title>Gowid Web Service Test</title>
        <meta name="description" content="We are Gowid!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  // Pass data to the page via props
  return {
    props: {
      title: "가나다라 마바사 아자차카 타파하",
      image: ""
    }
  }
};
