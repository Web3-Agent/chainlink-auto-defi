import { NextResponse } from 'next/server';
import { preprocessRequest, translatePromptToJSON } from '../../api-helpers/parse-builder-prompt/processors';

export async function POST(request: Request) {
    try {
        const _request = await request.json();
        console.log({ _request })

        // let prompt =
        //'Create a smart contract that creates token. ' + _request.describeCustomisation + 'which have following functionlity: ' + _request.featureRequest.join(',') + '.'
        // `Create a smart contract that creates a token. ${_request.describeCustomisation}. Token will have the following functionality: ${_request.featureRequest.join(',').toLowerCase()}.`

        const prompt = 'Develop a Solidity smart contract to implement the following approach for the web application:Approach Heading: Create a smart contract that creates a token. Approach Content: This contract should have well written code for functionlity ' + _request.featureRequest.join(',').toLowerCase() + '. Also, do considerations of following customisation:' + _request.describeCustomisation + ' Your task is to provide the Solidity code for the smart contract that will effectively integrate this approach into the web application. Include relevant functions, variables, and any necessary logic to ensure the successful implementation of the specified feature. Ensure that the generated Solidity code: 1. Compiles without errors. 2. Is complete and ready for deployment. 3. The version of Solidity used is "0.8.0" and SPDX - License - Identifier should be "MIT". 4. Create a "transferTo" function in a smart contract that allows the owner to transfer ownership to a specified address.Only the current owner should have the privilege to invoke this function. Note: Consider best practices and security considerations for smart contracts during the development.'

        const preprocessedJSON = await preprocessRequest(prompt);
        // const actionJSON = await translatePromptToJSON(preprocessedJSON);
        // if (!actionJSON) {
        //     return NextResponse.json({ error: "Failed to process the prompt" }, { status: 400 });
        // }
        return NextResponse.json({ message: 'Here is gas fee for Ethereum!', data: JSON.stringify(_request), prompt, preprocessedJSON }, { status: 200 });
    } catch (error: any) {
        const message = error.message || 'We ran into a problem Try again in a few minutes!';
        return NextResponse.json({ message, data: error }, { status: 500 });

    }
} 