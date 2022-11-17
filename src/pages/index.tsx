import { type NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/Card";
import CardCollection from "../components/CardCollection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dynamic Music</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal md:text-[5rem]">
          Hey, listen.
        </h1>
        <CardCollection />
      </main>
    </>
  );
};

export default Home;
