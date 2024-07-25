"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "7f3618803adbfa74083e79789efad5ca";

// 2. Set chains
const zksync = {
  chainId: 324,
  name: "ZKsync",
  currency: "ETH",
  explorerUrl: "https://era.zksync.network/",
  rpcUrl: "https://mainnet.era.zksync.io",
};

// 3. Create a metadata object
const metadata = {
  name: "Clink",
  description: "Clink Claim",
  url: "https://getclave.io", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: false, // true by default
  enableInjected: false, // true by default
  enableCoinbase: false, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 324, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [zksync],
  projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  featuredWalletIds: ["8ece0bce3a95db74077d7861f7767770af5e5746c3af011e4eec7e3d2efe2be4"],
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return children;
}
