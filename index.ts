// //Digite seu CPF (somente números):
const CPF = "40173765092";

const validateNumberCPF = () => {
	if (CPF.length != 11) {
		console.log("CPF deve conter 11 dígitos!!!");
	} else {
		let firstSum: number = 0;
		let secondSum: number = 0;
		for (var i = 1; i <= 9; i++) {
			const firstValidate = parseInt(CPF.substring(i - 1, i));
			const secondValidate = parseInt(CPF.substring(i, i + 1));
			const multiplier = 11 - i;
			const firstMulti = firstValidate * multiplier;
			const secondMulti = secondValidate * multiplier;
			firstSum += firstMulti;
			secondSum += secondMulti;
		}
		const firstRest = firstSum % 11;
		let firstDV: number;
		if (firstRest < 2) {
			firstDV = 0;
		} else {
			firstDV = 11 - firstRest;
		}

		const secondRest = secondSum % 11;
		let secondDV: number;
		secondDV = 11 - secondRest;

		const DV = firstDV.toString() + secondDV.toString();

		if (DV === CPF.substring(9)) {
			console.log("CPF validado com sucesso!!!");
		} else {
			console.log("CPF não existe!!!");
		}
	}
};

validateNumberCPF();
