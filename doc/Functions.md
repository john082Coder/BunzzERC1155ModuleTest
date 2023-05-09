# WRITE(main)

## mint
Mint new tokens

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|to|address|The token receiver||N/A|
|id|uint256|The id of the token||N/A|
|amount|uint256|The amount of tokens||N/A|
|data|bytes|Optional data field||N/A|

## mintBatch
Mint new tokens in a batch

|Name|Type|Description|Example|Default|
|--- |---|---|
|to|address|The token receiver||N/A|
|ids|uint256|The token ids||N/A|
|amounts|uint256|The tokens amounts||N/A|
|data|bytes|Optional data field||N/A|

## pause
Pause all operations

No arguments


## unpause

Unpause all operations

No arguments


## _mint
Mints `amount` tokens of token type `id` and transfers them to `to`.

|Name|Type|Description|
|--- |---|---|
|to|address|Mint to address|
|id|uint256|The id of token which will be minted|
|amount|uint256|Mint quantity|
|data|bytes|Optional data field|

## _mintSingle
Mints a single token of token type `id` and transfers it to `to`.

|Name|Type|Description|
|--- |---|---|
|to|address|Mint to address|
|id|uint256|The id of token which will be minted|

## _mintBatch
Mints multiple tokens of token types `ids` and transfers them to `to`.

|Name|Type|Description|
|--- |---|---|
|to|address|Mint to address|
|ids|uint256[]|The ids of tokens which will be minted|
|amounts|uint256[]|The amounts of tokens which will be minted|
|data|bytes|Optional data field|


## _burn
Destroys `amount` tokens of token type `id` from `from`

|Name|Type|Description|
|--- |---|---|
|from|address|Burn from address|
|id|uint256|Token ID which will be burned|
|amount|uint256|The amount of tokens which will be burned|

## _burnBatch
Destroys `amount` tokens of token types `ids` from `from`
`ids` and `amounts` must have the same length.
|Name|Type|Description|
|--- |---|---|
|from|address|Burn from address|
|ids|uint256[]|Token IDs which will be burned|
|amounts|uint256[]|The amounts of tokens which will be burned|

## _setApprovalForAll

Approve `operator` to operate on all of `owner` tokens

|Name|Type|Description|
|--- |---|---|
|owner|address|The token owner address|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## _beforeTokenTransfer
Hook that is called before any token transfer.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|from|address|Transfer from address|
|to|address|Transfer to address|
|ids|uint256[]|The array of token ids|
|amounts|uint256[]|Transfer quantity|
|data|bytes|Optional data field|

## _afterTokenTransfer
Hook that is called after any token transfer.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|from|address|Transfer from address|
|to|address|Transfer to address|
|ids|uint256[]|The array of token ids|
|amounts|uint256[]|Transfer quantity|
|data|bytes|Optional data field|




# READ(main)

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|account|address|The account which you want to check the balance|
|id|uint256|The token id which you want to check if the account owns it|

## balanceOfBatch
Returns the token amounts array owned by an address array.

|Name|Type|Description|
|--- |---|---|
|accounts|address[]|The accounts which you want to check the balance|
|ids|uint256[]|The token ids which you want to check if the account owns it|


## ownerOfERC721Like
Retrieves the owner of a token id

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## getOwnershipRecordOffChain

Retrieves the array of owner addresses.

|Name|Type|Description|
|--- |---|---|

## getERC721BalanceOffChain

Retrives the balance of the owner address.

|Name|Type|Description|
|--- |---|---|
|_address|address|The address of the owner|


## uri
Returns the uri of the metadata

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|



## isApprovedForAll
Tells whether an operator is approved by a given owner.

|Name|Type|Description|
|--- |---|---|
|account|address|The address of the tokens owner|
|operator|uint256|The account that will get the rights to operate over owner balance|
