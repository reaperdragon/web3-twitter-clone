import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      Home
      <button>DisConnect Wallet</button>
    </div>
  );
}
