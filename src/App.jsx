import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Withdraw } from './usecase/withdraw'
import { SendNft } from './usecase/sendNft'
import { buttonStyle, contentStyle } from './style'

function App() {
	return (
		<div className='App'>
			<main>
				<TonConnectButton style={buttonStyle}/>
				<div style={contentStyle}>
					<SendNft />
					<Withdraw />
				</div>
			</main>
		</div>
	)
}

export default App
