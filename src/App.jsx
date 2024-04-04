import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { buttonStyle, contentStyle, rightContentStyle, leftContentStyle } from './style'
import { Withdraw } from './usecase/withdraw'
import { SendNft } from './usecase/sendNft'
import { Cancel } from './usecase/cancelSell'
import { SendTon } from './usecase/sendTon'
import { SendJettons } from './usecase/sendJetton'
import { WithdrawTon } from './usecase/withdrawTon'

function App() {
	return (
		<div className='App'>
			<main>
				<TonConnectButton style={buttonStyle}/>
				<div style={contentStyle}>
					<div style={leftContentStyle}>
						<WithdrawTon />
						<Withdraw />
						<Cancel />
					</div>
					<div style={rightContentStyle}>
						<SendNft />
						{/* <BuyNft /> */}
						<SendTon />
						<SendJettons />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
