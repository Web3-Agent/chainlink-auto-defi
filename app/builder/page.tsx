// React
// import Head from 'next/head';
// import React from 'react';
// export default function builder() {
//   return (
//     <div className="bg-gray-900 w-full text-white">

//       <main className="p-8">
//         <section className="mb-8">
//           <h1 className="text-2xl font-bold mb-4">AI Builder</h1>
//           <p>Generate your custom DeFi application for</p>
//         </section>
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-2">Select Template</h2>
//           <p className="text-gray-400 mb-4">Choose modules to activate on your project, you can configure them later</p>
//           <div className="grid grid-cols-3 gap-4">

//            <section className="mb-8 w-full ">
//           <div style={{ display:"flex", flexDirection:"row"}} className="grid flex-row grid-cols-3 gap-4">
//             {/* Token Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="fab fa-ethereum fa-3x mb-2"></i>
//               <h3 className="text-lg">Token</h3>
//               <p className="text-sm text-gray-400">Generate a custom Token</p>
//             </div>
//             {/* NFT Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="far fa-image fa-3x mb-2"></i>
//               <h3 className="text-lg">NFT</h3>
//               <p className="text-sm text-gray-400">Generate a custom NFT</p>
//             </div>
//             {/* Staking Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="fas fa-lock fa-3x mb-2"></i>
//               <h3 className="text-lg">Staking</h3>
//               <p className="text-sm text-gray-400">Generate a custom Staking</p>
//             </div>
//             {/* Farm Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="fas fa-tractor fa-3x mb-2"></i>
//               <h3 className="text-lg">Farm</h3>
//               <p className="text-sm text-gray-400">Generate a custom Farm</p>
//             </div>
//             {/* Marketplace Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="fas fa-store fa-3x mb-2"></i>
//               <h3 className="text-lg">Marketplace</h3>
//               <p className="text-sm text-gray-400">Generate a custom Marketplace</p>
//             </div>
//             {/* Launchpad Template */}
//             <div className="bg-gray-800 p-4 rounded-lg text-center">
//               <i className="fas fa-rocket fa-3x mb-2"></i>
//               <h3 className="text-lg">Launchpad</h3>
//               <p className="text-sm text-gray-400">Generate a custom Launchpad</p>
//             </div>
//           </div>
//         </section>
//           </div>
//         </section>
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Features Request</h2>
//           <form>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               {/* Repeat for each feature */}
//               <label className="flex items-center">
//                 <input type="checkbox" className="form-checkbox h-5 w-5" />
//                 <span className="ml-2 text-gray-300">Token minting</span>
//               </label>
//               {/* ... other features ... */}
//             </div>
//             <div className="mb-4">
//               <textarea
//                 className="w-full p-2 bg-gray-800 rounded-lg text-gray-300"
//                 placeholder="Describe Customisation"
//                 rows="4">
//               </textarea>
//             </div>
//             <button type="submit" className="mt-4 bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
//               Generate Smart Contract
//             </button>
//           </form>
//         </section>
//         <section>
//           <div className="flex flex-col bg-gray-800 p-4 rounded-lg">
//             <div className="flex justify-between mb-2">
//               <span>Generating</span>
//               <span>Compiling</span>
//               <span>Auditing</span>
//               <span>Completed</span>
//             </div>
//             {/* Progress indicator */}
//             <div className="w-full bg-gray-700 h-1 relative">
//               <div className="bg-blue-600 h-1 absolute" style={{ width: '25%' }}></div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
"use client"
import React, { useState } from 'react';
import Head from 'next/head';
const PROMT_API_URL = '/api/parse-builder-prompt'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export default function Builder() {
  const [res, setRes] = useState('Creating a smart contract for a token involves writing code in a language like Solidity (for Ethereum blockchain) or others depending on the blockchain you are using. Here is a basic example of how such a contract might look in Solidity. This is a simplified version and does not include all the functionalities you mentioned for brevity. Please consult with a blockchain developer to create a full-fledged contract.\n\n```solidity\npragma solidity ^0.5.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol\";\n\ncontract MyToken is ERC20, ERC20Detailed {\n\n    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals()));\n\n    constructor () public ERC20Detailed(\"MyToken\", \"MNT\", 18) {\n        _mint(msg.sender, INITIAL_SUPPLY);\n    }\n\n    function mint(address account, uint256 amount) public {\n        _mint(account, amount);\n    }\n\n    function burn(address account, uint256 amount) public {\n        _burn(account, amount);\n    }\n\n    function transfer(address recipient, uint256 amount) public returns (bool) {\n        _transfer(msg.sender, recipient, amount);\n        return true;\n    }\n}\n```\n\nThis contract creates a token named \"MyToken\" with the symbol \"MNT\". It uses the OpenZeppelin library, which provides implementations of standards like ERC20 and ERC721 which you can deploy as-is or extend to suit your needs.\n\nThe contract includes a mint function to create new tokens, a burn function to destroy tokens, and a transfer function to send tokens from one address to another.\n\nPlease note that this is a very basic example and does not include all the functionalities you mentioned like limited supply, buy sell fees, anti-whale, auto liquidity. Implementing these features would make the contract significantly more complex and should be done by a professional developer.')
  const [chatGPTRawResponse, setChatGPTRawResponse] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [describeCustomisation, setDescribeCustomisation] = useState('The token name will be MyToken and the symbol will be MNT');
  const getStr = () => {
    console.log(res.substring(res.indexOf('```'), res.lastIndexOf('```') + 3))
    setRes(res.substring(res.indexOf('```'), res.lastIndexOf('```') + 3))
  }
  const [featureRequest, setFeatureRequest] = useState<any>([])
  // Features for each template
  const templateFeatures = {
    Token: ['Token minting', 'Token burning', 'Token transfers', 'Limited Supply', 'Buy Sell Fees', 'Anti-Whale', 'Auto Liquidity'],
    NFT: ['Custom Metadata', 'Royalty Settings', 'NFT Minting', 'NFT Burning'],
    Staking: ['Stake Tokens', 'Unstake Tokens', 'Reward Calculation', 'Staking Limits'],
    Farm: ['Yield Calculation', 'Liquidity Pools', 'Farm Tokens', 'Harvesting'],
    Marketplace: ['Listing Items', 'Search Filters', 'Transaction History', 'User Ratings'],
    Launchpad: ['Project Submission', 'Voting System', 'Token Distribution', 'Fundraising Goals'],
    // Define similar arrays for other templates if necessary...
  };
  const handleFeatureRequestAction = (feature: string) => {
    console.log({ feature })
    const featureIndex = featureRequest.indexOf(feature);
    const isFeatureBelongsToTemplate = templateFeatures[selectedTemplate].includes(feature);
    console.log({ featureIndex, isFeatureBelongsToTemplate })
    if (featureIndex < 0 && isFeatureBelongsToTemplate) {
      setFeatureRequest([...featureRequest, feature])
    }
    if (featureIndex >= 0 && isFeatureBelongsToTemplate) {
      setFeatureRequest(featureRequest.filter(item => item !== feature))
    }
  }
  const selectTemplate = (template: string) => {
    console.log({ template, featureRequest })
    setFeatureRequest([])
    setSelectedTemplate(template);
  };
  const promptCall = async () => {
    console.log({ featureRequest, selectedTemplate });
    try {
      const response = await fetch(PROMT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          featureRequest, selectedTemplate, describeCustomisation
        })
      });

      const candidate = await response.json();
      console.log({ candidate })
      setChatGPTRawResponse(candidate?.preprocessedJSON)
    } catch (error) {

    }
  }
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>AI Builder</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWecC7o1e4e1f84a82a8R2e5QrTsyhVfLk3sbLE1zARNw3c8l+Xm3i0yB5Zp"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="p-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">AI Builder</h1>
          <p>Generate your custom DeFi application for</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Select Template</h2>
          <p className="text-gray-400 mb-4">Choose modules to activate on your project, you can configure them later</p>
          <div style={{ display: "flex", flexDirection: "row" }} className="grid grid-cols-3 gap-4">
            {Object.keys(templateFeatures).map((template) => (
              <div
                key={template}
                className={`bg-gray-100 p-4 cursor-pointer rounded-lg text-center ${selectedTemplate === template ? 'ring-2 ring-black ' : ''}`}
                onClick={() => selectTemplate(template)}
              >
                <i className={`fa${templateFeatures[template].length ? 's' : 'r'} fa-${template.toLowerCase()} fa-3x mb-2`}></i>
                <h3 className="text-lg">{template}</h3>
                <p className="text-sm text-gray-700">Generate a custom {template}</p>
              </div>
            ))}
          </div>
        </section>
        {selectedTemplate && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Features Request</h2>
            <h1>This is check:{featureRequest.join(',')}</h1>
            <p className="text-gray-500 mb-4">Choose features to activate on your project</p>
            <form>
              <div style={{ display: "flex", flexDirection: "row" }} className="grid grid-cols-2 gap-4 mb-4">
                {templateFeatures[selectedTemplate].map((feature: string, index: number) => (
                  <label key={index} className="flex items-center">
                    <input type="checkbox" className="form-checkbox accent-black  h-5 w-5" checked={featureRequest.includes(feature)} onClick={() => { handleFeatureRequestAction(feature) }} />
                    <span className="ml-2 text-gray-800">{feature}</span>
                  </label>
                ))}
              </div>
              <div className="mb-4">
                <textarea
                  value={describeCustomisation}
                  onChange={(e) => { setDescribeCustomisation(e.target.value) }}
                  className="w-full p-2 bg-gray-100 rounded-lg text-gray-600"
                  placeholder="Describe Customisation"
                  rows="4">
                </textarea>
              </div>
              <Markdown remarkPlugins={[remarkGfm]}
                children={chatGPTRawResponse}
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <SyntaxHighlighter
                        {...rest}
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        style={dark}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    )
                  }
                }} />


              <button type='button' onClick={() => { promptCall() }} className="mt-4 text-white bg-black py-2 px-4 rounded-lg  transition duration-300">
                Generate Smart Contract
              </button>
            </form>
            <button type='button' onClick={() => { getStr() }} className="mt-4 text-white bg-black py-2 px-4 rounded-lg  transition duration-300">
              Show Code
            </button>
          </section>
        )}
        {/* Add additional sections as needed */}
      </main>
    </div>
  );
}