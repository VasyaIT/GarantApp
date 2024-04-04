import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { JettonMaster, TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, humsterJettonMaster, jettonDecimals, network } from '../const';
import { useTonConnect } from './useTonConnect';

export function Withdraw() {
    // Withdraw jettons ($HMSTR) from contract. Example, owner want withdraw the commission

    const [amount, setAmount] = useState('');
    const { sender } = useTonConnect()
    const amountJettons = amount * 10 ** jettonDecimals

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const hamsterMasterAddress = Address.parse(humsterJettonMaster)
        const jettonMaster = client.open(JettonMaster.create(hamsterMasterAddress))
        const garantJettonWallet = await jettonMaster.getWalletAddress(Address.parse(GarantAddress))

        const message = { $$type: 'Withdraw', amount: amountJettons, jettonWalletAddress: garantJettonWallet }
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em', width: '80%'}}>
            <input className='input-text' placeholder='Кол-во $HMSTR (только овнер)' type="text" value={amount} 
                onChange={e => setAmount(e.target.value)}
            />
            <br />
            <button className='withdraw-btn' onClick={send}>Вывести $HMSTR</button>
        </div>
    )
}
