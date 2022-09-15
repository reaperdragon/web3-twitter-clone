import { ethers } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import ContractABI from "../artifacts/contracts/Twitter.sol/TwitterApp.json";
import { create } from "ipfs-http-client";
import { gql, useApolloClient } from "@apollo/client";
import moment from "moment";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateEthAddress = (addr) => {
  const match = addr.match(truncateRegex);
  if (!match) return addr;
  return `${match[1]}…${match[2]}`;
};

const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});

const ipfsURI = "https://ipfs.io/ipfs/";

const Main = () => {
  const [tweetText, setTweetText] = useState("");

  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  const [tweets, setTweets] = useState([]);

  const clientApollo = useApolloClient();

  const GET_TWEETS = gql`
    {
      tweets(orderBy: createdAt, orderDirection: desc) {
        id
        text
        hash
        user
        date
        createdAt
      }
    }
  `;

  const getTweets = async () => {
    clientApollo
      .query({
        query: GET_TWEETS,
        fetchPolicy: "network-only",
      })
      .then(({ data }) => {
        setTweets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTweets();
  }, []);

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    let contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      ContractABI.abi,
      signer
    );

    return contract;
  };

  const tweet = async () => {
    const contract = await getContract();
    let date = String(new Date());
    if (!tweetText) {
      alert("Please Enter Your Tweet");
    } else {
      if (image !== "") {
        const img = await client.add(image);

        await contract.createTweet(tweetText, img.path, date);
      } else {
        
        await contract.createTweet(tweetText, "nO_Im4ge", date);
      }
    }

    setTweetText("");
    setImage("");
  };

  function triggerOnChange() {
    imageRef.current.click();
  }

  async function handleFileChange(e) {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    setImage(uploadedFile);
  }

  console.log(tweets)

  return (
    <div className="w-full border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-gray-700">
      <div className="flex flex-col w-[100%] border-b-[1.5px] border-gray-700 sticky top-0 bg-black ">
        <textarea
          className="font-body placeholder:text-black-400 block bg-black w-full  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-1 sm:text-sm"
          placeholder="What's Happening?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />
        {image && (
          <img
            className="h-[250px] "
            ref={imageRef}
            src={window.URL.createObjectURL(image)}
            alt="image"
          />
        )}

        <div className="flex align-center justify-evenly mb-2">
          <input
            id="selectImage"
            style={{ display: "none" }}
            type="file"
            onChange={handleFileChange}
            ref={imageRef}
          />
          <BiImageAdd
            onClick={triggerOnChange}
            className="text-3xl cursor-pointer"
          />
          <button
            className="font-body mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-5 rounded-full"
            onClick={tweet}
          >
            Tweet
          </button>
        </div>
      </div>

      <div>
        {tweets?.tweets?.length > 0 &&
          tweets?.tweets?.map((data) => (
            <div
              key={data.id}
              className="mt-4 font-body px-6 border-b-[1.5px] border-gray-700 pb-4"
            >
              <div className="flex gap-3">
                <p className="text-sky-600">{truncateEthAddress(data.user)}</p>
                <p className="text-stone-500">{moment(data.date).fromNow()}</p>
              </div>

              <h3 className="text-lg">{data.text}</h3>

              {data.hash === "nO_Im4ge" ? null : (
                <div className="py-3 rounded-md">
                  <img
                    data-src="https://ik.imagekit.io/demo/default-image.jpg"
                    loading="lazy"
                    src={ipfsURI + data.hash}
                    alt="image"
                    className="w-full rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
