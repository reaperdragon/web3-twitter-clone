# Web 3 Twitter Clone

### Built with Next Js, Hardhat, Solidity, IPFS, The Graph Protocol and Tailwind CSS.

### Stack

- Frontend : [Next Js](https://nextjs.org/)
- Smart Contract Lang : [Solidity](https://docs.soliditylang.org/en/v0.8.17/)
- Indexing :  [The Graph](https://thegraph.com/en/)
- Dev Environment for ETH Software: [Hardhat](https://hardhat.org/)
- Testing: [Chai](https://www.chaijs.com/)
- File Storage : [IPFS](https://ipfs.tech/)
- Network : [Polygon](https://polygon.technology/)
- Style : [Tailwind CSS](https://tailwindcss.com/)
- State management : [GraphQL Apollo Client](https://www.apollographql.com/)
- Icons : [React Icons](https://react-icons.github.io/react-icons/)


### Installation

####  Fork The Repo 

Click on the Right Side of the Top Bar to After the Watch button. <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png" width="120px" />

Now It will be available in GitHub Account.

#### OR

#### Clone

- Clone this repo with url

```shell
git clone https://github.com/Aakrut/web3-twitter-clone
```

##### Setup

> Install npm dependencies using npm install

```shell
$ npm install && cd web3-twitter-clone && npm install
```

> Set up environment Variables I already Provided .env.example file.

> Create a .env file in the root directory.

> Set up required environment variables.

```
URL="POLYGON_TESTNET_URI"
PRIVATE_KEY="METAMASK_PRIVATE_KEY"
NEXT_PUBLIC_PROJECT_ID="PROJECT_ID"
NEXT_PUBLIC_PROJECT_SECRET="PROJECT_SECRET"
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
NEXT_PUBLIC_GRAPHQL_URI="GRAPHQL_URI"
```

> In the Root Directory First Compile Your Smart Contract with This Following Command.

```shell
npx hardhat compile
```

> After Deploy Smart Contract to the Polygon Mumbai Testnet with this command.

```shell
npx hardhat run scripts/deploy.js --network mumbai
```

> Copy Smart Contract Address and replace it in with your "CONTRACT_ADDRESS"

```
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

## For Setting up Graph Protocol - [The Graph](https://thegraph.com/en/)

now replace the graph url with 
```
NEXT_PUBLIC_GRAPHQL_URL="GRAPHQL_URL"
```

Let's Run this command for dev

```shell
npm run dev
--or--
yarn dev
```

### Screenshots

#### Web

![twitter-home](https://user-images.githubusercontent.com/67114280/190386101-430f4c10-d533-4c85-b006-5591009bf1c9.png)

![twitter-main](https://user-images.githubusercontent.com/67114280/190386980-6f45d816-feb9-4c80-be07-1416233fa90d.png)

![full-page-shot](https://user-images.githubusercontent.com/67114280/190386248-4572fbb4-b0d1-4be9-b15e-31469e5835a8.png)

#### Responsive

![Twitter Responsive](https://user-images.githubusercontent.com/67114280/190386659-62f73b40-5785-4e82-b708-dd7ec5733ba1.png)
