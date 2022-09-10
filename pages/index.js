import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { ExploreBar, Main, Sidebar } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-[15%,auto]  justify-items-stretch">
      <Sidebar />
      <Main />
      <ExploreBar/>
    </div>
  );
}
