import { Address, toNano } from '@ton/core'
import { JettonMaster, TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Garant } from "../../build/Garant/tact_Garant";
import { GarantAddress, humsterJettonMaster, jettonDecimals, network } from '../const';
import { useTonConnect } from './useTonConnect';

export function Withdraw() {
    const { sender } = useTonConnect()
    const amountJettons = 100 * 10 ** jettonDecimals

    const send = async () => {
        const client = new TonClient({ endpoint: await getHttpEndpoint({network: network}) })
        const hamsterMasterAddress = Address.parse(humsterJettonMaster)
        const jettonMaster = client.open(JettonMaster.create(hamsterMasterAddress))
        const garantJettonWallet = await jettonMaster.getWalletAddress(Address.parse(GarantAddress))
        console.log(garantJettonWallet.toString())
        const message = { $$type: 'Withdraw', amount: amountJettons, jettonWalletAddress: garantJettonWallet }
        const jettonContract = client.open(Garant.fromAddress(Address.parse(GarantAddress)))
        jettonContract.send(sender, { value: toNano("0.1") }, message)
    }

    return (
        <div><button className='withdraw-btn' onClick={send}>Вывести $HMSTR</button></div>
    )
}

// import { Address as DefaultAddress } from '@ton/core'
// import { JettonMaster, TonClient, Address } from '@ton/ton';
// import { getHttpEndpoint } from '@orbs-network/ton-access';
// import { Garant } from "../../build/Garant/tact_Garant";
// import { GarantAddress, humsterJettonMaster } from '../const';


// export function Withdraw() {
//     const walletAddress = Address.parse(GarantAddress)
//     const send = async () => {
//         const masterAddress = DefaultAddress.parse(humsterJettonMaster)
//         const client = new TonClient({endpoint: await getHttpEndpoint({network: 'testnet'})})
//         const jettonMaster = client.open(JettonMaster.create(masterAddress))
//         const jettonWallet = await jettonMaster.getWalletAddress(DefaultAddress.parse(walletAddress.toString()))
//         console.log(jettonWallet.address)

//     }

//     return (
//         <div>
//             <button className='send-btn' onClick={send}>Send Planktons</button>
//         </div>
//     )
// }
