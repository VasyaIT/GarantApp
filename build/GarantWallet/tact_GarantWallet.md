# TACT Compilation Report
Contract: GarantWallet
BOC Size: 1345 bytes

# Types
Total Types: 17

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## TokenTransfer
TLB: `token_transfer#0f8a7ea5 query_id:uint64 amount:coins destination:address response_destination:Maybe address custom_payload:Maybe ^cell forward_ton_amount:coins forward_payload:remainder<slice> = TokenTransfer`
Signature: `TokenTransfer{query_id:uint64,amount:coins,destination:address,response_destination:Maybe address,custom_payload:Maybe ^cell,forward_ton_amount:coins,forward_payload:remainder<slice>}`

## NftTransfer
TLB: `nft_transfer#5fcc3d14 query_id:uint64 new_owner:address response_destination:address custom_payload:Maybe ^cell forward_amount:coins forward_payload:remainder<slice> = NftTransfer`
Signature: `NftTransfer{query_id:uint64,new_owner:address,response_destination:address,custom_payload:Maybe ^cell,forward_amount:coins,forward_payload:remainder<slice>}`

## TokenNotification
TLB: `token_notification#7362d09c queryId:uint64 amount:coins from:address forwardPayload:remainder<slice> = TokenNotification`
Signature: `TokenNotification{queryId:uint64,amount:coins,from:address,forwardPayload:remainder<slice>}`

## OwnershipAssigned
TLB: `ownership_assigned#05138d91 query_id:uint64 prev_owner:address forward_payload:remainder<slice> = OwnershipAssigned`
Signature: `OwnershipAssigned{query_id:uint64,prev_owner:address,forward_payload:remainder<slice>}`

## Withdraw
TLB: `withdraw#3a37ce0d amount:coins jettonWalletAddress:address = Withdraw`
Signature: `Withdraw{amount:coins,jettonWalletAddress:address}`

## WithdrawTon
TLB: `withdraw_ton#fabed8e6 amount:coins = WithdrawTon`
Signature: `WithdrawTon{amount:coins}`

## WithdrawNft
TLB: `withdraw_nft#7fd4a980 nftAddress:address newOwner:address = WithdrawNft`
Signature: `WithdrawNft{nftAddress:address,newOwner:address}`

## SendNft
TLB: `send_nft#a5935ca4 newOwner:address nftAddress:address = SendNft`
Signature: `SendNft{newOwner:address,nftAddress:address}`

## SendTon
TLB: `send_ton#265babfc toAddress:address amount:coins = SendTon`
Signature: `SendTon{toAddress:address,amount:coins}`

## SendJetton
TLB: `send_jetton#54d7ad9e jettonWalletAddress:address toAddress:address amount:coins = SendJetton`
Signature: `SendJetton{jettonWalletAddress:address,toAddress:address,amount:coins}`

## Data
TLB: `_ owner:address amount:int257 isTon:bool nftAddress:address = Data`
Signature: `Data{owner:address,amount:int257,isTon:bool,nftAddress:address}`

# Get Methods
Total Get Methods: 1

## data

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
4054: Not enougth jettons
35865: Not enougth tons
55553: Forbidden