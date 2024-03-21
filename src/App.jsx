import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Withdraw } from './usecase/withdraw'

const buttonStyle = {
  position: 'absolute',
  top: '35px',
  right: '300px'
}

function App() {
	return (
		<div className='App'>
			<main>
				<TonConnectButton style={buttonStyle}/>
				<Withdraw />
			</main>
		</div>
	)
}

export default App
