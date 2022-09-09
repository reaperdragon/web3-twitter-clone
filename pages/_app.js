import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please Install Metamask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setIsWalletConnected(true);
      localStorage.setItem("walletAddress", accounts[0]);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("walletAddress") && isWalletConnected) {
      router.push("/");
    }
  }, [router, isWalletConnected]);

  return (
    <>
      {isWalletConnected && localStorage.getItem("walletAddress") ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold text-8xl font-body text-center ">
              Web 3.0 <span className="text-[#1C84FF]">Twitter </span> Clone
            </h1>
            <button
              onClick={connectWallet}
              className="font-body mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 py-5 px-10 rounded-full"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
