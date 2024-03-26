import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { buttonStyle, contentStyle, rightContentStyle, leftContentStyle } from './style'
import { Withdraw } from './usecase/withdraw'
import { CollectNft } from './usecase/collectNft'
import { SendNft } from './usecase/sendNft'
import { SendJettons } from './usecase/sendJettons'
import { CollectTon } from './usecase/collectTon'
import { SendTon } from './usecase/sendTon'
import { GetBalance } from './usecase/getBalance'

function App() {
	return (
		<div className='App'>
			<main>
				<TonConnectButton style={buttonStyle}/>
				<GetBalance />
				<hr />
				<div style={contentStyle}>
					<div style={leftContentStyle}>
						<CollectNft />
						<Withdraw />
						<CollectTon />
					</div>
					<div style={rightContentStyle}>
						<SendNft />
						<SendJettons />
						<SendTon />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
