import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { useTonConnect } from './useTonConnect'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { GarantWallet } from "../../build/GarantWallet/tact_GarantWallet";
import { network } from '../const';

export function Cancel() {
    const { sender } = useTonConnect()
    const [garantWallet, setGarantWallet] = useState('')

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const jettonContract = client.open(GarantWallet.fromAddress(Address.parse(garantWallet)))
        jettonContract.send(sender, { value: toNano("0.1") }, "Cancel")
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em', width: '80%'}}>
            <input className='input-text' placeholder='Адрес контракта (только продавец)' type="text" value={garantWallet} 
                onChange={e => setGarantWallet(e.target.value)}
            />
            <br />
            <button onClick={send}>Снять с продажи</button>
        </div>
    )
}
