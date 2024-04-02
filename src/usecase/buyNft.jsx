import { useState } from 'react';
import { Address, toNano, beginCell } from '@ton/core'
import { JettonMaster, TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { GarantAddress, jettonDecimals, network, humsterJettonMaster, jettonTransactionFee } from '../const';
import { useTonConnect } from './useTonConnect';

export function BuyNft() {
    const [nftAddress, setNftAddress] = useState('')
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
            .storeAddress(Address.parse(GarantAddress))
            .storeAddress(Address.parse(walletAddress))
            .storeBit(false)
            .storeCoins(toNano('0.05'))
            .storeUint(0, 1)
            .endCell()

        sender.send({to: userJettonWallet, value: toNano("0.1"), body: message})
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Адрес NFT' type="text" value={amount} 
                onChange={e => setNftAddress(e.target.value)}
            />
            <br />
            <button className='withdraw-btn' onClick={send}>Купить NFT</button>
        </div>
    )
}
