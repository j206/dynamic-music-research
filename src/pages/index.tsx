import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dynamic Music</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-green-900 md:text-[5rem]">
          Hey, listen.
        </h1>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          <Card
            name="One"
            description="Style 1"
            documentation="https://nextjs.org/"
          />
          <Card
            name="Two"
            description="Style 2"
            documentation="https://www.typescriptlang.org/"
          />
          <Card
            name="Three"
            description="Style 3"
            documentation="https://tailwindcss.com/"
          />
        </div>
      </main>
    </>
  );
};

export default Home;

type CardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Card: React.FC<CardProps> = ({
  name,
  description,
  documentation,
}) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-green-900 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Change
      </Link>
    </section>
  );
};
