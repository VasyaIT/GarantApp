import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { useTonConnect } from './useTonConnect'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { GarantWallet } from "../../build/GarantWallet/tact_GarantWallet";
import { network } from '../const';

export function Cancel() {
    const { sender } = useTonConnect()
    const [nftAddress, setNftAddress] = useState('')

    const send = async () => {
        const garantWallet = "kQB6cJdNzuvD6o15nT42C0-MpF4WvRkmRRhesahKi4DvAXO5"
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const jettonContract = client.open(GarantWallet.fromAddress(Address.parse(garantWallet)))
        jettonContract.send(sender, { value: toNano("0.1") }, "Cancel")
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес NFT' type="text" value={nftAddress} 
                onChange={e => setNftAddress(e.target.value)}
            />
            <br />
            <button onClick={send}>Снять с продажи</button>
        </div>
    )
}
