import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, network } from '../const';
import { useTonConnect } from './useTonConnect';

export function CollectTon() {
    // Get tons from contract

    const [amount, setAmount] = useState('');
    const { sender, walletAddress } = useTonConnect()
    const amountTon = toNano(amount)

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })

        const message = {
            $$type: 'SendTon',
            amount: amountTon,
            toAddress: Address.parse(walletAddress)
        }

        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Количество TON' type="text" value={amount} 
                onChange={e => setAmount(e.target.value)}
            />
            <br />
            <button onClick={send}>Получить TON</button>
        </div>
    )
}
