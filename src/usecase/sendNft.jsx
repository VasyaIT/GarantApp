import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, network } from '../const';
import { useTonConnect } from './useTonConnect';
import { addressInputStyle } from '../style'

export function SendNft() {
    const { sender } = useTonConnect()
    const [walletAddress, setWalletAddress] = useState('');
    const [nftAddress, setNftAddress] = useState('');

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const message = { $$type: 'SendNft', nftAddress: Address.parse(nftAddress), newOwner: Address.parse(walletAddress) }
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

  return (
        <div style={{marginRight: '20em'}}>
            <input placeholder='NFT address' type="text" value={nftAddress} 
                onChange={e => setNftAddress(e.target.value)} style={addressInputStyle}
            />
            <br />
            <input className='addressInput' placeholder='Wallet address' type="text" value={walletAddress} 
                onChange={e => setWalletAddress(e.target.value)}  style={addressInputStyle}
            />
            <br />
            <button className='sendNft' onClick={send}>Отправить NFT</button>
        </div>
  );
}
