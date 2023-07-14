## ApprovalForAll
Emitted when owner enables or disables (approved) operator to manage all of its assets.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## RoleAdminChanged
Emitted when newAdminRole is set as role's admin role, replacing previousAdminRole

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been used for finding admin role|
|previousAdminRole|bytes32|The previous admin role|
|newAdminRole|bytes32|The new updated admin role|


## RoleGranted
Emitted when account is granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been granted to the account|
|account|address|The address of the account which was granted role|
|sender|address|The address of the account which granted role|

## RoleRevoked
Emitted when account is revoked role.

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been revoked to the account|
|account|address|The address of the account which was revoked role|
|sender|address|The address of the account which revoked role|

## Paused
Emitted when the contract is paused

|Name|Type|Description|
|--- |---|---|
|account|address|The address of the account which paused the contract|

## Unpaused
Emitted when the contract is unpaused

|Name|Type|Description|
|--- |---|---|
|account|address|The address of the account which unpaused the contract|

## TransferBatch
Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.

|Name|Type|Description|
|--- |---|---|
|operator|address|he account that will be the balance operator|
|from|address|The address of the account which transferred token|
|to|address|The address of the account which will be received token|
|ids|uint256|The ids of the token which were transferred|
|values|uint256|The token amounts which were transferred|

## TransferSingle
Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.

|Name|Type|Description|
|--- |---|---|
|operator|address|he account that will be the balance operator|
|from|address|The address of the account which transferred token|
|to|address|The address of the account which will be received token|
|id|uint256|The id of the token which was transferred|
|value|uint256|The token amount which was transferred|


## URI
Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.

|Name|Type|Description|
|--- |---|---|
|value|string|The changed new URI string|
|id|uint256|The id of the token|