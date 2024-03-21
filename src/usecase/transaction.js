export function buildTransaction(walletAddress, message) {
	return {
		validUntil: Math.floor(Date.now() / 1000) + 120,
		messages: [
			{
				address: walletAddress.toString(),
				amount: '100000000',
				payload: message.body?.toBoc().toString('base64'),
			},
		],
	}
}
