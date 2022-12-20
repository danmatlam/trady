import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { IContent, IDns } from "../store/schema";
import DnsList from "../components/dnslist";
import FeatureList from "../components/featuredlist";

const Home: NextPage = () => {
  const [featuredList, setFeaturedList] = useState<IContent[]>([
    {
      id: 1,
      slug: "update-for-me",
      title: "Update for me",
      description:
        "You just need to log in, we will update your DNS automatically.",
      featured: true,
    },
    {
      id: 2,
      slug: "add-dns-manually",
      title: "Add DNS Manually",
      description: "Follow our tutorial to upadte your DNS manually",
      featured: false,
    },
  ]);

  const [dnsList, setDnsList] = useState<IDns[]>([
    {
      id: 1,
      type: "A",
      value: "104.248.56.174",
      name: "@",
      priority: "-",
    },
    {
      id: 2,
      type: "CNAME",
      value: "ssl.trady.com",
      name: "www",
      priority: "-",
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col items-left justify-center py-0">
      <Head>
        <title>Trady</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-slate-500 text-lg">
          How do you want to update your DNS?
        </h1>
        <FeatureList data={featuredList} />
        <DnsList data={dnsList} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
