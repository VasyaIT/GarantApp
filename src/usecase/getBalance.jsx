import { Address, fromNano } from '@ton/core'
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, network } from '../const';


export function GetBalance() {
    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        const contractBalance = await jettonContract.getBalance()
        const balance = Math.floor(fromNano(contractBalance) * 100) / 100
        document.getElementById('balance').textContent = `${balance} TON`

    }

    return (
        <div>
            <button id='balance' style={{marginBottom: '1em'}} onClick={send}>Посмотреть баланс контракта</button>
        </div>
    )
}
