# Zombie-NFT-Marketplace Front End

<p>
This is the front-end repository for the Zombie-NFT-Marketplace project. It is built using React.js and Tailwind CSS and connects to a marketplace and NFT smart contract deployed on the Goerli network.
</p>
<p>
The project is designed to showcase how to build an NFT marketplace using thirdweb UI components.
</p>

# Installation
To run the project locally, you need to have Node.js and npm installed on your machine

1.Clone the repository:
```bash
git clone https://github.com/adarshswaminath/Zombie-NFT-Marketplace-front-end.git

cd Zombie-NFT-Marketplace-front-end
```

2.Install the dependencies:
```bash
npm install
```
3.Deploy NFT collection Contract & NFT Marketplace Contract in thirdweb and change
```javascript
const { contract } = useContract(
    "<NFT-Marketplace-Contract-Address>",
    "marketplace"
  )

```

4.Run the development server:
```bash
npm run dev
```
The server will start on http://localhost:5173

# Thirdweb's Marketplace contract
<p>
A Marketplace is a contract where you can buy and sell NFTs, such as OpenSea or Rarible.

The Marketplace contract allows users to list NFTs for direct sale or auction. Other users can place offers/bids or buy the NFTs for the specified amount in the listing.

The marketplace can be configured to only allow certain users to list NFTs for sale, or allow any user to list NFTs for sale.
</p>

# Thirdweb's NFT Collection contract
<p>
The NFT Collection contract is suitable for when you want to have a collection of unique NFTs, but not "drop" or "release" them for your community to claim.

Unlike the NFT Drop contract, the NFT Collection contract does not lazy mint your NFTs. Instead, NFTs are minted immediately when they are added to the collection.

This means you can still transfer the NFTs or sell them on a Marketplace and perform any other actions you would expect to do with an NFT.

For advanced use-cases, the NFT Collection also has signature-based minting capabilities.
</p>