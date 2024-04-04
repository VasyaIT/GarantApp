import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { useTonConnect } from './useTonConnect'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, network } from '../const';

export function WithdrawTon() {
    const { sender } = useTonConnect()
    const [amountTon, setAmountTon] = useState('')

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        const message = {$$type: "WithdrawTon", amount: toNano(amountTon)}
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em', width: '80%'}}>
            <input className='input-text' placeholder='Кол-во TON (только овнер)' type="text" value={amountTon} 
                onChange={e => setAmountTon(e.target.value)}
            />
            <br />
            <button onClick={send}>Вывести TON</button>
        </div>
    )
}
