import { useState } from 'react';
import { Address, toNano } from '@ton/core'
import { GarantAddress, tonTransactionFee } from '../const';
import { useTonConnect } from './useTonConnect';

export function SendTon() {
    // Sending tons to contract

    const [amount, setAmount] = useState('');
    const amountTon = (parseInt(amount) + tonTransactionFee)
    const { sender } = useTonConnect()

    const send = async () => {
        sender.send({to: Address.parse(GarantAddress), value: toNano(amountTon)})
    }

    return (
        <div style={{marginRight: '7em',  marginBottom: '3em'}}>
            <input className='input-text' placeholder='Количество TON' type="text" value={amount} 
                onChange={e => setAmount(e.target.value)}
            />
            <br />
            <button className='withdraw-btn' onClick={send}>Отправить TON</button>
        </div>
    )
}
