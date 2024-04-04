export const network = 'testnet'
export let humsterJettonMaster = ''
if (network === 'testnet') {
	humsterJettonMaster = 'kQCEpGIMq-zWRONoIK25XlaCY-nH92gcTiCu3B_10cZ9opDz'
} else {
	humsterJettonMaster = 'EQBam5RuB3inYXsUlamTIEqu-tNy5NmX4FBLAcZe_360eWWE'
}
export const GarantAddress = 'EQAdNdcUSDnHi10fRYEtNVQe7qJI1wfxp_U2GJSO8wywR3sq'
export const jettonDecimals = 9
export const jettonTransactionFee = 1000
export const tonTransactionFee = 0.5
export const manifestUrl =
	'https://raw.githubusercontent.com/brokqwiks/tonconnect/master/manifest.json'
