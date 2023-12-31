import chains from "@/app/lib/chains.json";
import { ChainData } from "@/app/lib/types";
import { Chain } from "viem";
import { distance } from "fastest-levenshtein";
import { bscTestnet, opBNBTestnet, polygonMumbai } from "viem/chains";
import { configs } from "@/configs";
export const API_URLS: Record<Chain["name"], string> = {
    'Ethereum': 'https://api.etherscan.io',
    'Goerli': 'https://api-goerli.etherscan.io',
    'Sepolia': 'https://api-sepolia.etherscan.io',
    'Arbitrum One': 'https://api.arbiscan.io',
    'Arbitrum Goerli': 'https://api-goerli.arbiscan.io',
    'Polygon Mainnet': 'https://api.polygonscan.com',
    'Mumbai': 'https://api-testnet.polygonscan.com',
    'Optimism': 'https://api-optimistic.etherscan.io',
    'Optimism Goerli Testnet': 'https://api-goerli.optimistic.etherscan.io',
}

export const API_KEYS: Record<Chain["name"], string | undefined> = {
    'Ethereum': configs.ETHEREUM_EXPLORER_API_KEY,
    'Goerli': configs.ETHEREUM_EXPLORER_API_KEY,
    'Sepolia': configs.ETHEREUM_EXPLORER_API_KEY,
    'Arbitrum One': configs.ARBITRUM_EXPLORER_API_KEY,
    'Arbitrum Goerli': configs.ARBITRUM_EXPLORER_API_KEY,
    'Polygon Mainnet': configs.POLYGON_EXPLORER_API_KEY,
    'Mumbai': configs.POLYGON_EXPLORER_API_KEY,
    'Optimism': configs.OPTIMISM_EXPLORER_API_KEY,
    'Optimism Goerli Testnet': configs.OPTIMISM_EXPLORER_API_KEY,
}

export const createViemChain = (chain: string): Chain | undefined => {
    // get the chain object from the chains.json file. Direct match || partial match
    if (!chain) {
        return opBNBTestnet;
    }
    let chainMatch = chains.find((item: ChainData) => item.name.toLowerCase() === chain.toLowerCase());

    if (!chainMatch) {
        let minDistance = Infinity;
        let bestMatch;

        chains.forEach((chainItem) => {
            const formattedChain = chainItem.name.toLowerCase().replace(/[-_]/g, "");
            const formattedInput = chain.toLowerCase().replace(/[-_]/g, "");
            const dist = distance(formattedInput, formattedChain);

            if (dist < minDistance) {
                minDistance = dist;
                bestMatch = chainItem;
            }
        });

        chainMatch = bestMatch;
    }

    if (!chainMatch) {
        return undefined;
    }

    const viemChain: Chain | undefined = {
        id: chainMatch.chainId,
        name: chainMatch.name,
        network: chainMatch.name.toLowerCase(),
        nativeCurrency: {
            name: chainMatch.nativeCurrency.name,
            symbol: chainMatch.nativeCurrency.symbol,
            decimals: chainMatch.nativeCurrency.decimals,
        },
        rpcUrls: {
            public: { http: chainMatch.rpc },
            default: { http: chainMatch.rpc },
        },
        blockExplorers: chainMatch.explorers && {
            etherscan: {
                name: chainMatch.explorers[0].name,
                url: chainMatch.explorers[0].url,
            },
            default: {
                name: chainMatch.explorers[0].name,
                url: chainMatch.explorers[0].url,
            },
        },
    };

    return viemChain;
};

export const getRpcUrl = (viemChain: Chain): string | undefined => {
    const rpcUrl: string = viemChain?.rpcUrls.default.http[0]?.replace(
        "${INFURA_API_KEY}",
        configs.INFURA_API_KEY || ""
    );
    return rpcUrl;
}

export const getExplorerUrl = (viemChain: Chain): string | undefined => {
    return viemChain?.blockExplorers?.default.url;
}