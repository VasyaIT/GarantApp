import { useState } from 'react';
import { Address, toNano, beginCell } from '@ton/core'
import { GarantAddress } from '../const';
import { useTonConnect } from './useTonConnect';

export function SendNft() {
    // Sending NFT to contract
    const handleCheckbox1Change = (event) => {
        setIsCheckedTon(event.target.checked);
        if (event.target.checked) {
        setIsCheckedJetton(false);
        }
    };

    const handleCheckbox2Change = (event) => {
        setIsCheckedJetton(event.target.checked);
        if (event.target.checked) {
        setIsCheckedTon(false);
        }
    };

    const { sender, walletAddress } = useTonConnect()
    const [nftAddress, setNftAddress] = useState('')
    const [nftPrice, setNftPrice] = useState('')
    const [isCheckedTon, setIsCheckedTon] = useState(true);
    const [isCheckedJetton, setIsCheckedJetton] = useState(false);
    const isTon = isCheckedTon ? toNano(1) : toNano(0);
    const amount = toNano(nftPrice)


    const send = async () => {
        const nftMessage = beginCell()
            .storeUint(0x5fcc3d14, 32)
            .storeUint(0, 64)
            .storeAddress(Address.parse(GarantAddress))
            .storeAddress(Address.parse(walletAddress))
            .storeBit(false)
            .storeCoins(toNano("0.05"))
            .storeSlice(beginCell().storeCoins(amount).storeCoins(isTon).endCell().asSlice())
            .endCell()
        
        sender.send({to: Address.parse(nftAddress), value: toNano("0.1"), body: nftMessage})
    }

    return (
        <div>
            <label style={{fontSize: '20px', color: 'white'}}>
                <input type="checkbox" checked={isCheckedTon} onChange={handleCheckbox1Change}/>
                Оплата в TON
            </label>
            <br />
            <label style={{fontSize: '20px', color: 'white'}}>
                <input type="checkbox" checked={isCheckedJetton} onChange={handleCheckbox2Change}/>
                Оплата в $HMSTR
            </label>
            <br />
            <br />
            <div style={{marginRight: '7em',  marginBottom: '3em'}}>
                <input className='input-text' placeholder='Адрес NFT' type="text" value={nftAddress} 
                    onChange={e => setNftAddress(e.target.value)}
                />
                <br />
                <input className='input-text' placeholder='Цена' type="text" value={nftPrice} 
                    onChange={e => setNftPrice(e.target.value)}
                />
                <br />
                <button className='sendNft' onClick={send}>Выставить на продажу</button>
            </div>
        </div>
    );
}
