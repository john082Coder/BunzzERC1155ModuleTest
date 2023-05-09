## About

 ERC1155BurnableAndPausable is a standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).


## Features

ERC1155BurnableAndPausable module provides the functions to create a nft collection and has more complex functions available. This module have the feature of minting as many tokens as you want and host their metadata on more centralized solutions like s3, in addition the tokens can be transferred to any address without restrictions. For this particular example, the only values that the owner needs to be setup up are done during the deployment, but however there are other contract where the setup is more complex and necessitates more steps after deployment.

The distinctive feature of ERC1155 is that it uses a single smart contract to represent multiple tokens at once.
The `balanceOf` function differs from ERC20's and ERC777's.

## Use case

To use the ERC1155D contract in your project, copy contracts/ERC1155D.sol to your project. Then, you can import it, and write an implementation that extends the contract as is ERC1155

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzERC1155DModuleTest
- simple dapp URL
    https://bunzz-erc-1155-d-module-test.vercel.app/


---
## Review report
- [JCoder's report](https://docs.google.com/document/d/109pSvqNu3da9XQjGtpCBWFm_OPME4bx14s4clwGq15c/edit?usp=sharing)