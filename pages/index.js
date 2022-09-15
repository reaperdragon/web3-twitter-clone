import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { ExploreBar, Main, Sidebar } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>
      <div className="grid grid-cols-[25%,auto,30%] md:grid-cols-[15%,auto]  justify-items-stretch">
        <Sidebar />
        <Main />
        <ExploreBar />
      </div>
    </div>
  );
}
