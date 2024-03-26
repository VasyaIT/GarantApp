import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, network } from '../const';
import { useTonConnect } from './useTonConnect';

export function CollectNft() {
    // Get NFT from contract

    const { sender, walletAddress } = useTonConnect()
    const [nftAddress, setNftAddress] = useState('');

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const message = { $$type: 'SendNft', nftAddress: Address.parse(nftAddress), newOwner: Address.parse(walletAddress) }
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес NFT' type="text" value={nftAddress} 
                onChange={e => setNftAddress(e.target.value)}
            />
            <br />
            <button className='sendNft' onClick={send}>Получить NFT</button>
        </div>
    );
}
