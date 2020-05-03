export default class Calculator {
	calc(receipt) {
		let a = 6;
		if (receipt.distance > 2) {
			a += (receipt.distance - 2) * 0.8;
		}
		if (receipt.distance > 8) {
			a += (receipt.distance - 8) * 0.4;
		}

		return Math.round(a + receipt.time * 0.25);
	}
}
