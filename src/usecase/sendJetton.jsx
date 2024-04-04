import { useState } from 'react';
import { Address, toNano, beginCell } from '@ton/core'
import { JettonMaster, TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { jettonDecimals, network, humsterJettonMaster, jettonTransactionFee } from '../const';
import { useTonConnect } from './useTonConnect';

export function SendJettons() {
    // Sending $HMSTR to contract

    const [amount, setAmount] = useState('');
    const [garantWallet, setGarantWallet] = useState('')
    const amountJettons = (parseInt(amount) + jettonTransactionFee) * 10 ** jettonDecimals
    const { sender, walletAddress } = useTonConnect()

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const hamsterMasterAddress = Address.parse(humsterJettonMaster)
        const jettonMaster = client.open(JettonMaster.create(hamsterMasterAddress))
        const userJettonWallet = await jettonMaster.getWalletAddress(Address.parse(walletAddress))

        const message = beginCell()
            .storeUint(0xf8a7ea5, 32)
            .storeUint(0, 64)
            .storeCoins(amountJettons)
            .storeAddress(Address.parse(garantWallet))
            .storeAddress(Address.parse(walletAddress))
            .storeBit(false)
            .storeCoins(toNano('1'))
            .storeUint(0, 1)
            .endCell()

        sender.send({to: userJettonWallet, value: toNano("2"), body: message})
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес контракта (для покупателя)' type="text" value={garantWallet} 
                onChange={e => setGarantWallet(e.target.value)}
            />
            <input className='input-text' placeholder='Кол-во $HMSTR (для покупателя)' type="text" value={amount} 
                onChange={e => setAmount(e.target.value)}
            />
            <br />
            <button className='withdraw-btn' onClick={send}>Отправить $HMSTR</button>
        </div>
    )
}
