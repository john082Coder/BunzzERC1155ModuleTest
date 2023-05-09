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
|--- |---|---|---|---|
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


## burn
Burn a number of tokens from existence

|Name|Type|Description|
|--- |---|---|
|account|address|The account that will burn the tokens from|
|id|uint256|The id of the tokens that will be burned|
|value|uint256|The amount of tokens that will be burned|

## burnBatch
Burn a number of tokens from existence in a batch

|Name|Type|Description|
|--- |---|---|
|from|address|Burn from address|
|ids|uint256[]|Token IDs which will be burned|
|amounts|uint256[]|The amounts of tokens which will be burned|

## grantRole
Grants a role to account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be granted the role|

## renounceRole
Renounce role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will renounce the role|

## revokeRole
Revoke role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will have the role revoked|

## setApprovalForAll
Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.

|Name|Type|Description|
|--- |---|---|
|operator|address|The token spender|
|approved|bool|The approving status|

## safeTransferFrom
Safely transfers the ownership of a given token ID to another address

|Name|Type|Description|
|--- |---|---|
|from|address|The token sender|
|to|address|The token receiver|
|id|uint256|The token id|
|amount|uint256|The token amount|
|data|bytes|Optional data field|

## safeBatchTransferFrom
Safely transfers the ownership of a batch of token IDs to another address

|Name|Type|Description|
|--- |---|---|
|from|address|The token sender|
|to|address|The token receiver|
|ids|uint256[]|The token ids|
|amounts|uint256[]|The token amounts|
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
Returns the token amounts array owned by an address in a batch.

|Name|Type|Description|
|--- |---|---|
|accounts|address[]|The accounts which you want to check the balance|
|ids|uint256[]|The token ids which you want to check if the account owns it|


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
|operator|address|The spender of the account approval|

## paused
Pause the token operations

## hasRole
Returns true if account has been granted role

|Name|Type|Description|
|--- |---|---|
|account|address|The account you want to check the approvals|
|role|bytes32|The role id|

## getRoleMemberCount
Returns the number of members who has been granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|

## getRoleMember
Returns the address of account who has the specific role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|index|uint256|The index of token|

## getRoleAdmin
Returns the admin role that controls roles

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|

## PAUSER_ROLE
The role for pausers

No arguments

## MINTER_ROLE
The role for minters

No arguments

## DEFAULT_ADMIN_ROLE
The starting admin for all roles

No arguments

