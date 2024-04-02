import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { buttonStyle, contentStyle, rightContentStyle, leftContentStyle } from './style'
import { Withdraw } from './usecase/withdraw'
import { SendNft } from './usecase/sendNft'
import { BuyNft } from './usecase/buyNft'
import { Cancel } from './usecase/cancelSell'
import { SendTon } from './usecase/sendTon'

function App() {
	return (
		<div className='App'>
			<main>
				<TonConnectButton style={buttonStyle}/>
				<div style={contentStyle}>
					<div style={leftContentStyle}>
						<Withdraw />
						<Cancel />
					</div>
					<div style={rightContentStyle}>
						<SendNft />
						{/* <BuyNft /> */}
						<SendTon />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
