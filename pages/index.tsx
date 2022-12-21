import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IContent, IDns } from "../store/schema";
import DnsList from "../components/dnslist";
import FeatureList from "../components/featuredlist";
import AppBar from "../components/layout/AppBar";
import Footer from "../components/layout/Footer";
import ShareForm from "../components/shareform";
import LoadingList from "../components/common/LoadingList";
import HostSearch from "../components/HostSearch";

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

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const listClass = loading ? "hidden" : "";

  return (
    <div className="">
      <Head>
        <title>Trady</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col items-center">
        <AppBar />
        <div className="main flex flex-col items-center md:justify-center w-full">
          <div className="p-6 md:border-2 rounded-xl  max-w-4xl  w-full">
            <section className="flex items-center justify-center">
              <h1 className="text-4xl italic my-3">example.com</h1>
            </section>
            <section>
              <HostSearch loading={loading} />
            </section>
            <div className={listClass}>
              <section>
                <h1 className="text-slate-500 text-lg my-3">
                  How do you want to update your DNS?
                </h1>
                <FeatureList data={featuredList} />
              </section>
              <section>
                <ShareForm />
              </section>
              <section>
                <h1 className="text-slate-500 text-lg my-3">
                  Are you a PRO at DNS? Update these records
                </h1>
                <DnsList data={dnsList} />
              </section>
            </div>
            {loading ? <LoadingList /> : null}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
