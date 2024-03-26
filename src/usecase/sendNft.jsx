import { useState } from 'react';
import { Address, toNano, beginCell } from '@ton/core'
import { GarantAddress } from '../const';
import { useTonConnect } from './useTonConnect';

export function SendNft() {
    // Sending NFT to contract

    const { sender, walletAddress } = useTonConnect()
    const [nftAddress, setNftAddress] = useState('');

    const send = async () => {
        const message = beginCell()
            .storeUint(0x5fcc3d14, 32)
            .storeUint(0, 64)
            .storeAddress(Address.parse(GarantAddress))
            .storeAddress(Address.parse(walletAddress))
            .storeBit(false)
            .storeCoins(toNano("0.05"))
            .storeUint(0, 1)
            .endCell()
        sender.send({to: Address.parse(nftAddress), value: toNano("0.1"), body: message})
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес NFT' type="text" value={nftAddress} 
                onChange={e => setNftAddress(e.target.value)}
            />
            <br />
            <button className='sendNft' onClick={send}>Отправить NFT</button>
        </div>
    );
}
