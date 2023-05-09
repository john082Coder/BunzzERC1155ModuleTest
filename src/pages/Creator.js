import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getErc1155Contract, mint, mintBatch, pause, unpause  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const erc1155Contract = getErc1155Contract(bunzz);

    const [mintIDs, setMintIDs] = useState([]);
    const [mintIDsText, setMintIDsText] = useState();
    const [mintData, setMintData] = useState("");
    const [mintAddress, setMintAddress] = useState("");
    const [mintAmounts, setMintAmounts] = useState([]);
    const [mintAmountsText, setMintAmountsText] = useState();
  
  

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingMintBatch, setPendingMintBatch] = useState(false);
    const [pendingPause, setPendingPause] = useState(false);
    const [pendingUnpause, setPendingUnpause] = useState(false);
  
  
    useEffect(() => {
       if(mintIDsText && mintAmountsText)
       {
        var array1 = mintIDsText.replace(' ', '').split(','); 
        setMintIDs(array1);
        var array2 = mintAmountsText.replace(' ', '').split(","); 
        setMintAmounts(array2);
        console.log("array1 = ", array1);
       }
  
      }, [mintIDsText, mintAmountsText]);
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={mintAddress} onChange={(val) => setMintAddress(val.target.value)} />

                            <Form.Label>Input IDs</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={mintIDsText} onChange={(val) => setMintIDsText(val.target.value)} />

                            <Form.Label>Input Amounts</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={mintAmountsText} onChange={(val) => setMintAmountsText(val.target.value)} />

                            <Form.Label>Input Data</Form.Label>
                            <Form.Control type="email" placeholder="Enter Data" value={mintData} onChange={(val) => setMintData(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                


                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        erc1155Contract,
                                        mintAddress,
                                        mintIDs[0],
                                        mintAmounts[0],
                                        mintData,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        {!pendingMintBatch ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                 
                                try {
                                    let txHash;
                                    
                                    txHash = await mintBatch(
                                        erc1155Contract,
                                        mintAddress,
                                        mintIDs,
                                        mintAmounts,
                                        mintData,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMintBatch(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMintBatch(false);
                                    
                                }
                            }}>
                                MintBatch
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} MintBatch
                            </Button>
                        }


                        {!pendingPause ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingPause(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await pause(
                                        erc1155Contract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingPause(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingPause(false);
                                    
                                }
                            }}>
                                Pause
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Pause
                            </Button>
                        }
                        {!pendingUnpause ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingUnpause(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await unpause(
                                        erc1155Contract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingUnpause(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingUnpause(false);
                                    
                                }
                            }}>
                                Unpause
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Unpause
                            </Button>
                        }
                       
                       
                        
                     
                    </Form>
                   

                                    

         

                  
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;