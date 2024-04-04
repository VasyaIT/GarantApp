import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { useTonConnect } from './useTonConnect'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { GarantWallet } from "../../build/GarantWallet/tact_GarantWallet";
import { network, tonTransactionFee } from '../const';

export function SendTon() {
    // Sending tons to contract

    const { sender } = useTonConnect()
    const [amount, setAmount] = useState('');
    const [garantWallet, setGarantWallet] = useState('')
    const amountTon = (parseFloat(amount) + tonTransactionFee)

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const jettonContract = client.open(GarantWallet.fromAddress(Address.parse(garantWallet)))
        jettonContract.send(sender, { value: toNano(amountTon) }, "Buy")
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес контракта (для покупателя)' type="text" value={garantWallet} 
                onChange={e => setGarantWallet(e.target.value)}
            />
            <input className='input-text' placeholder='Количество TON (для покупателя)' type="text" value={amount} 
                onChange={e => setAmount(e.target.value)}
            />
            <br />
            <button className='withdraw-btn' onClick={send}>Отправить TON</button>
        </div>
    )
}
