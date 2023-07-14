import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});




export const getErc1155Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc1155;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}
export const getAllowance = async (
  erc20Contract,
  escrowContract,
  account
) => {
  try {
    const allowance = await erc20Contract.methods
      .allowance(account, escrowContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}
export const getDecimal = async (
  erc20Contract,
) => {
  try {
    const decimal = await erc20Contract.methods
      .decimals()
      .call()
      return new BigNumber(decimal);
  } catch (e) {
    return new BigNumber(0);
  }
}




export const getReleasableAmount = async (vestingWalletContract) => {
  
  try {
    const releasableAmount = await vestingWalletContract.methods.releasableAmount().call();
    
  
    return releasableAmount;
  } catch {
    console.log("error");
    return 0;
  }

}


export const mint = async (erc1155Contract, to, id, amount,  data, account) => {
  console.log("ID = ", id);
  return erc1155Contract.methods.mint(to, id, amount, data).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const mintBatch = async (erc1155Contract, to, ids, amounts, data, account) => {
  return erc1155Contract.methods.mintBatch(to, ids, amounts, data).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const pause = async (erc1155Contract, account) => {
  return erc1155Contract.methods.pause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const unpause = async (erc1155Contract, account) => {
  return erc1155Contract.methods.unpause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}


