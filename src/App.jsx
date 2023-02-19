import React from "react";
import { ConnectWallet, MediaRenderer, useActiveListings, useContract} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import "./styles/Home.css";
import {faEthereum,faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function App() {
  // user message

  //  contract initial
  // @thirdweb NFT market place contract
  const { contract } = useContract(
    "0x10da7b872Ff0587D28ef61639B1A21132816A6Cf",
    "marketplace"
  )
  const { data: nfts, isLoading } = useActiveListings(contract)
  
  return (
    <div>

      {/* ========= navbar statrts =========  */}
      <div className="navbar px-2 py-3 flex justify-between ">
        <div className="logo">
          <h1 className="px-2 py-3 text-2xl font-bold">Walking Dead Marketplace</h1>
        </div>
        <div>
          <ConnectWallet />
        </div>
      </div>
      <hr />
      <div className="text-center">
      </div>
      {/* ========= navbar ends ==============*/}
      {/* hero screen */}
      <section className="h-screen items-center justify-center flex">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unleash Your Inner Monster: Explore the Zombie NFT Marketplace</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Immerse yourself in a world of digital collectibles featuring some of the most terrifying and intriguing undead creatures ever imagined</p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup" />
          </div>
        </div>
      </section>
      {!isLoading ? (
        // show nft 
        <div>
          {/* NFT card */}
          <div className="flex flex-col items-center justify-center">
            {nfts && nfts?.length > 0 && (
              <div className="flex flex-wrap justify-center items-center ">
                {nfts.map((nft) => (
                  <div key={nft.asset.id.toString()} className="max-w-sm ml-4 mt-4 bg-black border-gray-500 rounded-lg h-90 shadow-lg h-70 w-70">
                    <img src={nft.asset.image} alt="" className="rounded-t-lg" />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {nft.asset.name}
                      </h5>
                      <p className="mb-3 font-normal text-white">
                      <FontAwesomeIcon icon={faEthereum}/> {nft.buyoutCurrencyValuePerToken.displayValue} ETH
                      </p>
                      <button className="inline-flex items-center px-6 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4">Buy</button>
                    </div>
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        // message when loading NFT
        <div>
          Loading ...
        </div>
      )}
      <br/>
      <div className="bg-blue-700 text-white text-center items-center ">
          <div className="p-2">
            
            <a href="https://github.com/adarshswaminath">
          <FontAwesomeIcon className="h-6 ml-2" icon={faGithub}/>
            </a>
            <a href="https://twitter.com/Adarshs002">
          <FontAwesomeIcon className="h-6 ml-4" icon={faTwitter}/>
            </a>
            <a href="https://www.linkedin.com/in/adarsh-s-09935b240">
          <FontAwesomeIcon className="h-6 ml-4" icon={faLinkedin}/>
            </a>

          </div>
      </div>
    </div>
  );
}
