## Preparation before deployment
1. Prepare the metadata for your tokens and upload them to a centralized solution like s3. More explanations here https://docs.bunzz.dev/product-docs/others/uri-argument-base-token-uri

## Get started(Operation)

1. When deploying the contract, you need to prepare 1 argument and that argument represents the URI (e.g. https://token-cdn-domain/{id}.json ) of the collection metadata, in this URI(Uniform Resource Identifier) you can point to a file where you can specify all the characteristics of the token like name (e.g. Bored Ape Yacht Club), symbol (e.g. BAYC), description, color, etc...
2. After you upload your metadata on s3 in return you will receive a link
3. The link represent your metadata base uri, when you mint new tokens it will be directly added to the token metadata.
4. Call the “mint” function (it can only be called by an address that have the minter role), with the first argument representing the address that will receive the nft, and the second argument being the id of the token, the third argument is called amount and represents how many tokens of that id you want to mint and the final argument is called data and this one is optional
5. Call the “mintBatch” function (it can only be called by an address that have the minter role), with the first argument representing the address that will receive the nft, and the second argument being an array of ids of tokens, the third argument is called amounts, it is again an array and represents how many tokens of each id you want to mint and the final argument is called data and this one is optional
6. The metadata of a token can be retrieved by calling the “uri” function, This implementation returns the same URI for all token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the {id} substring with the actual token type ID.
7. A user can call the “transfer” function to transfer his nft’s to another user
8. A user can call “transferFrom” function to transfer nft’s from one user to another if he was approved by the owner of the nft





